/**
 * Advanced Security Monitoring System
 * Real-time threat detection, anomaly detection, and security analytics
 */

type SecurityEvent = {
  id: string
  timestamp: number
  type: 'auth' | 'access' | 'input' | 'rate_limit' | 'suspicious' | 'error' | 'admin'
  severity: 'low' | 'medium' | 'high' | 'critical'
  userId?: string
  ip?: string
  userAgent?: string
  path?: string
  method?: string
  details: Record<string, any>
  blocked: boolean
}

type ThreatScore = {
  score: number // 0-100
  factors: string[]
  recommendation: 'allow' | 'warn' | 'block' | 'escalate'
}

type AnomalyPattern = {
  pattern: string
  threshold: number
  window: number // milliseconds
  severity: 'low' | 'medium' | 'high' | 'critical'
}

export class AdvancedSecurityMonitor {
  private static events: SecurityEvent[] = []
  private static maxEvents = 10000
  private static blockedIPs = new Set<string>()
  private static suspiciousPatterns: AnomalyPattern[] = [
    {
      pattern: 'rapid_failed_login',
      threshold: 5,
      window: 300000, // 5 minutes
      severity: 'high'
    },
    {
      pattern: 'unusual_api_access',
      threshold: 50,
      window: 60000, // 1 minute
      severity: 'medium'
    },
    {
      pattern: 'admin_access_attempt',
      threshold: 3,
      window: 600000, // 10 minutes
      severity: 'critical'
    },
    {
      pattern: 'sql_injection_attempt',
      threshold: 1,
      window: 86400000, // 24 hours
      severity: 'critical'
    },
    {
      pattern: 'xss_attempt',
      threshold: 1,
      window: 86400000, // 24 hours
      severity: 'critical'
    }
  ]

  /**
   * Log security event
   */
  static logEvent(event: Omit<SecurityEvent, 'id' | 'timestamp'>): void {
    const fullEvent: SecurityEvent = {
      ...event,
      id: this.generateEventId(),
      timestamp: Date.now()
    }

    this.events.push(fullEvent)

    // Trim old events
    if (this.events.length > this.maxEvents) {
      this.events = this.events.slice(-this.maxEvents)
    }

    // Check for threats
    const threatScore = this.analyzeThreat(fullEvent)
    if (threatScore.score > 70) {
      this.handleHighThreat(fullEvent, threatScore)
    }

    // Check for anomalies
    this.detectAnomalies(fullEvent)

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Security Event]', fullEvent)
    }
  }

  /**
   * Analyze threat level of an event
   */
  private static analyzeThreat(event: SecurityEvent): ThreatScore {
    let score = 0
    const factors: string[] = []

    // Severity contributes to base score
    const severityScores = {
      low: 10,
      medium: 30,
      high: 60,
      critical: 90
    }
    score += severityScores[event.severity]
    factors.push(`Severity: ${event.severity}`)

    // Check if IP is already suspicious
    if (event.ip && this.blockedIPs.has(event.ip)) {
      score += 20
      factors.push('Known malicious IP')
    }

    // Check for SQL injection patterns
    if (this.containsSQLInjection(event.details)) {
      score += 40
      factors.push('SQL injection pattern detected')
    }

    // Check for XSS patterns
    if (this.containsXSS(event.details)) {
      score += 40
      factors.push('XSS pattern detected')
    }

    // Check for path traversal
    if (this.containsPathTraversal(event.details)) {
      score += 30
      factors.push('Path traversal attempt')
    }

    // Check for unusual user agent
    if (event.userAgent && this.isUnusualUserAgent(event.userAgent)) {
      score += 15
      factors.push('Suspicious user agent')
    }

    // Cap score at 100
    score = Math.min(score, 100)

    // Determine recommendation
    let recommendation: ThreatScore['recommendation'] = 'allow'
    if (score > 90) recommendation = 'escalate'
    else if (score > 70) recommendation = 'block'
    else if (score > 50) recommendation = 'warn'

    return { score, factors, recommendation }
  }

  /**
   * Handle high-threat events
   */
  private static handleHighThreat(event: SecurityEvent, threat: ThreatScore): void {
    console.error('[HIGH THREAT DETECTED]', {
      event,
      threatScore: threat.score,
      factors: threat.factors,
      recommendation: threat.recommendation
    })

    // Block IP if critical
    if (threat.recommendation === 'block' || threat.recommendation === 'escalate') {
      if (event.ip) {
        this.blockIP(event.ip, 'Automatic block due to high threat score')
      }
    }

    // Send alert (implement notification system)
    this.sendSecurityAlert(event, threat)
  }

  /**
   * Detect anomalies based on patterns
   */
  private static detectAnomalies(event: SecurityEvent): void {
    for (const pattern of this.suspiciousPatterns) {
      const matchingEvents = this.getRecentEvents(
        pattern.window,
        (e) => this.matchesPattern(e, pattern.pattern, event)
      )

      if (matchingEvents.length >= pattern.threshold) {
        this.logEvent({
          type: 'suspicious',
          severity: pattern.severity,
          userId: event.userId,
          ip: event.ip,
          path: event.path,
          method: event.method,
          details: {
            anomaly: pattern.pattern,
            threshold: pattern.threshold,
            actual: matchingEvents.length,
            events: matchingEvents.map(e => e.id)
          },
          blocked: false
        })

        // Auto-block for critical anomalies
        if (pattern.severity === 'critical' && event.ip) {
          this.blockIP(event.ip, `Anomaly detected: ${pattern.pattern}`)
        }
      }
    }
  }

  /**
   * Check if event matches pattern
   */
  private static matchesPattern(
    event: SecurityEvent,
    pattern: string,
    currentEvent: SecurityEvent
  ): boolean {
    switch (pattern) {
      case 'rapid_failed_login':
        return event.type === 'auth' && 
               event.details.success === false &&
               event.userId === currentEvent.userId

      case 'unusual_api_access':
        return event.type === 'access' &&
               event.ip === currentEvent.ip

      case 'admin_access_attempt':
        return event.type === 'admin' &&
               event.ip === currentEvent.ip

      case 'sql_injection_attempt':
        return this.containsSQLInjection(event.details)

      case 'xss_attempt':
        return this.containsXSS(event.details)

      default:
        return false
    }
  }

  /**
   * Get recent events matching filter
   */
  private static getRecentEvents(
    windowMs: number,
    filter: (event: SecurityEvent) => boolean
  ): SecurityEvent[] {
    const cutoff = Date.now() - windowMs
    return this.events.filter(e => e.timestamp >= cutoff && filter(e))
  }

  /**
   * Check for SQL injection patterns
   */
  private static containsSQLInjection(details: Record<string, any>): boolean {
    const sqlPatterns = [
      /(\bunion\b.*\bselect\b|\bselect\b.*\bfrom\b)/i,
      /(;|--|\||\/\*).*?(drop|delete|update|insert)\b/i,
      /\b(exec|execute|sp_|xp_)\w+/i,
      /'.*?(\bor\b|\band\b).*?'.*?=/i
    ]

    const detailsString = JSON.stringify(details)
    return sqlPatterns.some(pattern => pattern.test(detailsString))
  }

  /**
   * Check for XSS patterns
   */
  private static containsXSS(details: Record<string, any>): boolean {
    const xssPatterns = [
      /<script[^>]*>.*?<\/script>/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /<iframe/i,
      /eval\s*\(/i,
      /expression\s*\(/i
    ]

    const detailsString = JSON.stringify(details)
    return xssPatterns.some(pattern => pattern.test(detailsString))
  }

  /**
   * Check for path traversal
   */
  private static containsPathTraversal(details: Record<string, any>): boolean {
    const pathPatterns = [
      /\.\.[\/\\]/,
      /%2e%2e[\/\\]/i,
      /\.\.[%2f|%5c]/i
    ]

    const detailsString = JSON.stringify(details)
    return pathPatterns.some(pattern => pattern.test(detailsString))
  }

  /**
   * Check for unusual user agent
   */
  private static isUnusualUserAgent(userAgent: string): boolean {
    const suspiciousPatterns = [
      /^$/,  // Empty
      /^curl/i,
      /^wget/i,
      /^python/i,
      /^ruby/i,
      /bot|crawler|spider/i
    ]

    return suspiciousPatterns.some(pattern => pattern.test(userAgent))
  }

  /**
   * Block IP address
   */
  static blockIP(ip: string, reason: string): void {
    this.blockedIPs.add(ip)
    
    this.logEvent({
      type: 'admin',
      severity: 'high',
      ip,
      details: {
        action: 'ip_blocked',
        reason
      },
      blocked: true
    })

    console.warn(`[IP BLOCKED] ${ip} - Reason: ${reason}`)
  }

  /**
   * Unblock IP address
   */
  static unblockIP(ip: string): void {
    this.blockedIPs.delete(ip)
    
    this.logEvent({
      type: 'admin',
      severity: 'low',
      ip,
      details: {
        action: 'ip_unblocked'
      },
      blocked: false
    })
  }

  /**
   * Check if IP is blocked
   */
  static isIPBlocked(ip: string): boolean {
    return this.blockedIPs.has(ip)
  }

  /**
   * Get security metrics
   */
  static getMetrics(timeWindow?: number): {
    totalEvents: number
    eventsByType: Record<string, number>
    eventsBySeverity: Record<string, number>
    blockedIPs: number
    topThreats: SecurityEvent[]
  } {
    const cutoff = timeWindow ? Date.now() - timeWindow : 0
    const relevantEvents = this.events.filter(e => e.timestamp >= cutoff)

    const eventsByType: Record<string, number> = {}
    const eventsBySeverity: Record<string, number> = {}

    for (const event of relevantEvents) {
      eventsByType[event.type] = (eventsByType[event.type] || 0) + 1
      eventsBySeverity[event.severity] = (eventsBySeverity[event.severity] || 0) + 1
    }

    // Get top threats (high and critical severity)
    const topThreats = relevantEvents
      .filter(e => e.severity === 'high' || e.severity === 'critical')
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 10)

    return {
      totalEvents: relevantEvents.length,
      eventsByType,
      eventsBySeverity,
      blockedIPs: this.blockedIPs.size,
      topThreats
    }
  }

  /**
   * Get recent security events
   */
  static getRecentSecurityEvents(limit: number = 100): SecurityEvent[] {
    return this.events.slice(-limit).reverse()
  }

  /**
   * Clear old events
   */
  static clearOldEvents(olderThanMs: number): void {
    const cutoff = Date.now() - olderThanMs
    this.events = this.events.filter(e => e.timestamp >= cutoff)
  }

  /**
   * Generate unique event ID
   */
  private static generateEventId(): string {
    return `sec_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  /**
   * Send security alert (placeholder - implement with real notification system)
   */
  private static sendSecurityAlert(event: SecurityEvent, threat: ThreatScore): void {
    // TODO: Implement with email/SMS/Slack notification
    console.error('[SECURITY ALERT]', {
      event,
      threat,
      timestamp: new Date(event.timestamp).toISOString()
    })
  }

  /**
   * Export security logs (for analysis)
   */
  static exportLogs(): string {
    return JSON.stringify({
      exportedAt: new Date().toISOString(),
      events: this.events,
      blockedIPs: Array.from(this.blockedIPs),
      metrics: this.getMetrics()
    }, null, 2)
  }

  /**
   * Real-time security dashboard data
   */
  static getDashboardData() {
    const last24h = 24 * 60 * 60 * 1000
    const metrics = this.getMetrics(last24h)
    
    return {
      metrics,
      recentEvents: this.getRecentSecurityEvents(50),
      blockedIPs: Array.from(this.blockedIPs),
      threatLevel: this.calculateOverallThreatLevel(metrics)
    }
  }

  /**
   * Calculate overall threat level
   */
  private static calculateOverallThreatLevel(metrics: ReturnType<typeof this.getMetrics>): {
    level: 'low' | 'medium' | 'high' | 'critical'
    score: number
  } {
    let score = 0

    // Factor in critical events
    score += (metrics.eventsBySeverity.critical || 0) * 10
    score += (metrics.eventsBySeverity.high || 0) * 5
    score += (metrics.eventsBySeverity.medium || 0) * 2
    score += (metrics.eventsBySeverity.low || 0)

    // Factor in blocked IPs
    score += metrics.blockedIPs * 3

    // Determine level
    let level: 'low' | 'medium' | 'high' | 'critical' = 'low'
    if (score > 100) level = 'critical'
    else if (score > 50) level = 'high'
    else if (score > 20) level = 'medium'

    return { level, score: Math.min(score, 100) }
  }
}

/**
 * Audit Logger - tracks all user actions for compliance
 */
export class AuditLogger {
  private static logs: Array<{
    id: string
    timestamp: number
    userId: string
    action: string
    resource: string
    details: Record<string, any>
    ip: string
    userAgent: string
  }> = []

  static log(entry: {
    userId: string
    action: string
    resource: string
    details?: Record<string, any>
    ip?: string
    userAgent?: string
  }): void {
    this.logs.push({
      id: `audit_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
      userId: entry.userId,
      action: entry.action,
      resource: entry.resource,
      details: entry.details || {},
      ip: entry.ip || 'unknown',
      userAgent: entry.userAgent || 'unknown'
    })

    // Trim to last 50000 entries
    if (this.logs.length > 50000) {
      this.logs = this.logs.slice(-50000)
    }
  }

  static getLogs(userId?: string, limit: number = 100) {
    const filtered = userId 
      ? this.logs.filter(l => l.userId === userId)
      : this.logs

    return filtered.slice(-limit).reverse()
  }

  static export(): string {
    return JSON.stringify({
      exportedAt: new Date().toISOString(),
      totalLogs: this.logs.length,
      logs: this.logs
    }, null, 2)
  }
}

export default AdvancedSecurityMonitor
