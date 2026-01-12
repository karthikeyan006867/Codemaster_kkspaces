/**
 * Security Monitoring and Request Logging
 * Tracks security events, failed logins, rate limit violations, and suspicious activity
 */

import { NextRequest } from 'next/server'

export type SecurityEventType =
  | 'auth_success'
  | 'auth_failure'
  | 'rate_limit_exceeded'
  | 'invalid_csrf'
  | 'admin_access'
  | 'suspicious_activity'
  | 'data_modification'
  | 'permission_denied'
  | 'invalid_input'
  | 'api_error'

export interface SecurityEvent {
  type: SecurityEventType
  timestamp: number
  userId?: string
  email?: string
  ip: string
  userAgent: string
  endpoint: string
  method: string
  details?: Record<string, any>
  severity: 'low' | 'medium' | 'high' | 'critical'
}

// In-memory storage (in production, use a database or logging service)
const securityLogs: SecurityEvent[] = []
const MAX_LOG_ENTRIES = 10000

/**
 * Log a security event
 */
export function logSecurityEvent(event: Omit<SecurityEvent, 'timestamp'>): void {
  const fullEvent: SecurityEvent = {
    ...event,
    timestamp: Date.now()
  }

  // Add to logs
  securityLogs.push(fullEvent)

  // Trim old entries if needed
  if (securityLogs.length > MAX_LOG_ENTRIES) {
    securityLogs.splice(0, securityLogs.length - MAX_LOG_ENTRIES)
  }

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[SECURITY ${event.severity.toUpperCase()}]`, event.type, event)
  }

  // In production, send to monitoring service
  if (process.env.NODE_ENV === 'production' && event.severity === 'critical') {
    console.error('[CRITICAL SECURITY EVENT]', event)
    // TODO: Send alert to admin (email, Slack, etc.)
  }
}

/**
 * Get security logs
 */
export function getSecurityLogs(
  filters?: {
    type?: SecurityEventType
    userId?: string
    severity?: SecurityEvent['severity']
    startTime?: number
    endTime?: number
    limit?: number
  }
): SecurityEvent[] {
  let filtered = securityLogs

  if (filters) {
    if (filters.type) {
      filtered = filtered.filter(log => log.type === filters.type)
    }
    if (filters.userId) {
      filtered = filtered.filter(log => log.userId === filters.userId)
    }
    if (filters.severity) {
      filtered = filtered.filter(log => log.severity === filters.severity)
    }
    if (filters.startTime) {
      filtered = filtered.filter(log => log.timestamp >= filters.startTime!)
    }
    if (filters.endTime) {
      filtered = filtered.filter(log => log.timestamp <= filters.endTime!)
    }
  }

  // Sort by timestamp (newest first)
  filtered.sort((a, b) => b.timestamp - a.timestamp)

  // Limit results
  if (filters?.limit) {
    filtered = filtered.slice(0, filters.limit)
  }

  return filtered
}

/**
 * Clear security logs
 */
export function clearSecurityLogs(): void {
  securityLogs.length = 0
}

/**
 * Extract request information for logging
 */
export function getRequestInfo(request: NextRequest): {
  ip: string
  userAgent: string
  endpoint: string
  method: string
} {
  // Get IP address
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0] ||
    request.headers.get('x-real-ip') ||
    'unknown'

  // Get user agent
  const userAgent = request.headers.get('user-agent') || 'unknown'

  // Get endpoint
  const url = new URL(request.url)
  const endpoint = url.pathname

  // Get method
  const method = request.method

  return { ip, userAgent, endpoint, method }
}

/**
 * Log API request
 */
export function logAPIRequest(
  request: NextRequest,
  userId?: string,
  details?: Record<string, any>
): void {
  const requestInfo = getRequestInfo(request)
  
  logSecurityEvent({
    type: 'auth_success',
    userId,
    severity: 'low',
    ...requestInfo,
    details
  })
}

/**
 * Log failed authentication
 */
export function logAuthFailure(
  request: NextRequest,
  reason: string,
  email?: string
): void {
  const requestInfo = getRequestInfo(request)
  
  logSecurityEvent({
    type: 'auth_failure',
    email,
    severity: 'medium',
    ...requestInfo,
    details: { reason }
  })
}

/**
 * Log rate limit violation
 */
export function logRateLimitExceeded(
  request: NextRequest,
  limit: number,
  userId?: string
): void {
  const requestInfo = getRequestInfo(request)
  
  logSecurityEvent({
    type: 'rate_limit_exceeded',
    userId,
    severity: 'medium',
    ...requestInfo,
    details: { limit }
  })
}

/**
 * Log invalid CSRF token
 */
export function logInvalidCSRF(request: NextRequest, userId?: string): void {
  const requestInfo = getRequestInfo(request)
  
  logSecurityEvent({
    type: 'invalid_csrf',
    userId,
    severity: 'high',
    ...requestInfo,
    details: { message: 'CSRF token validation failed' }
  })
}

/**
 * Log admin access
 */
export function logAdminAccess(
  request: NextRequest,
  userId: string,
  email: string,
  action: string
): void {
  const requestInfo = getRequestInfo(request)
  
  logSecurityEvent({
    type: 'admin_access',
    userId,
    email,
    severity: 'medium',
    ...requestInfo,
    details: { action }
  })
}

/**
 * Log suspicious activity
 */
export function logSuspiciousActivity(
  request: NextRequest,
  userId: string | undefined,
  reason: string,
  details?: Record<string, any>
): void {
  const requestInfo = getRequestInfo(request)
  
  logSecurityEvent({
    type: 'suspicious_activity',
    userId,
    severity: 'high',
    ...requestInfo,
    details: { reason, ...details }
  })
}

/**
 * Log data modification
 */
export function logDataModification(
  request: NextRequest,
  userId: string,
  resource: string,
  action: 'create' | 'update' | 'delete'
): void {
  const requestInfo = getRequestInfo(request)
  
  logSecurityEvent({
    type: 'data_modification',
    userId,
    severity: 'low',
    ...requestInfo,
    details: { resource, action }
  })
}

/**
 * Log permission denied
 */
export function logPermissionDenied(
  request: NextRequest,
  userId: string | undefined,
  resource: string
): void {
  const requestInfo = getRequestInfo(request)
  
  logSecurityEvent({
    type: 'permission_denied',
    userId,
    severity: 'medium',
    ...requestInfo,
    details: { resource }
  })
}

/**
 * Get security statistics
 */
export function getSecurityStats(timeWindow: number = 3600000): {
  totalEvents: number
  authFailures: number
  rateLimitExceeded: number
  suspiciousActivity: number
  adminAccess: number
  criticalEvents: number
  topIPs: Array<{ ip: string; count: number }>
  eventsByType: Record<SecurityEventType, number>
} {
  const now = Date.now()
  const recentLogs = securityLogs.filter(log => now - log.timestamp <= timeWindow)

  // Count by type
  const eventsByType = recentLogs.reduce((acc, log) => {
    acc[log.type] = (acc[log.type] || 0) + 1
    return acc
  }, {} as Record<SecurityEventType, number>)

  // Top IPs
  const ipCounts = recentLogs.reduce((acc, log) => {
    acc[log.ip] = (acc[log.ip] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const topIPs = Object.entries(ipCounts)
    .map(([ip, count]) => ({ ip, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10)

  return {
    totalEvents: recentLogs.length,
    authFailures: eventsByType.auth_failure || 0,
    rateLimitExceeded: eventsByType.rate_limit_exceeded || 0,
    suspiciousActivity: eventsByType.suspicious_activity || 0,
    adminAccess: eventsByType.admin_access || 0,
    criticalEvents: recentLogs.filter(log => log.severity === 'critical').length,
    topIPs,
    eventsByType
  }
}

/**
 * Detect suspicious patterns
 */
export function detectSuspiciousPatterns(): Array<{
  pattern: string
  severity: 'medium' | 'high' | 'critical'
  details: string
}> {
  const patterns: Array<{
    pattern: string
    severity: 'medium' | 'high' | 'critical'
    details: string
  }> = []

  const now = Date.now()
  const last5Minutes = securityLogs.filter(log => now - log.timestamp <= 300000)

  // Multiple auth failures from same IP
  const authFailuresByIP = last5Minutes
    .filter(log => log.type === 'auth_failure')
    .reduce((acc, log) => {
      acc[log.ip] = (acc[log.ip] || 0) + 1
      return acc
    }, {} as Record<string, number>)

  Object.entries(authFailuresByIP).forEach(([ip, count]) => {
    if (count >= 5) {
      patterns.push({
        pattern: 'brute_force_attempt',
        severity: 'high',
        details: `${count} failed login attempts from IP ${ip} in last 5 minutes`
      })
    }
  })

  // Excessive rate limiting
  const rateLimitEvents = last5Minutes.filter(log => log.type === 'rate_limit_exceeded')
  if (rateLimitEvents.length >= 10) {
    patterns.push({
      pattern: 'possible_ddos',
      severity: 'critical',
      details: `${rateLimitEvents.length} rate limit violations in last 5 minutes`
    })
  }

  // Multiple CSRF failures
  const csrfFailures = last5Minutes.filter(log => log.type === 'invalid_csrf').length
  if (csrfFailures >= 3) {
    patterns.push({
      pattern: 'csrf_attack',
      severity: 'high',
      details: `${csrfFailures} CSRF token failures in last 5 minutes`
    })
  }

  return patterns
}

/**
 * Export logs (for admin dashboard)
 */
export function exportSecurityLogs(format: 'json' | 'csv' = 'json'): string {
  if (format === 'json') {
    return JSON.stringify(securityLogs, null, 2)
  }

  // CSV format
  const headers = 'Timestamp,Type,Severity,User ID,Email,IP,Endpoint,Method,Details\n'
  const rows = securityLogs.map(log => {
    const timestamp = new Date(log.timestamp).toISOString()
    const details = log.details ? JSON.stringify(log.details).replace(/"/g, '""') : ''
    return `${timestamp},${log.type},${log.severity},${log.userId || ''},${log.email || ''},${log.ip},${log.endpoint},${log.method},"${details}"`
  }).join('\n')

  return headers + rows
}
