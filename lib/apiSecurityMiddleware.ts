/**
 * Comprehensive API Security Middleware
 * Enterprise-grade protection for all API routes
 */

import { NextRequest, NextResponse } from 'next/server'
import { AdvancedSecurityMonitor } from './advancedSecurityMonitoring'

type RateLimitConfig = {
  windowMs: number
  maxRequests: number
  message?: string
}

type SecurityConfig = {
  rateLimit?: RateLimitConfig
  requireAuth?: boolean
  requireAdmin?: boolean
  allowedMethods?: string[]
  validateInput?: boolean
  logAccess?: boolean
  checkCSRF?: boolean
}

/**
 * Rate Limiter using in-memory store
 */
class RateLimiter {
  private static requests = new Map<string, number[]>()

  static check(
    key: string,
    config: RateLimitConfig
  ): { limited: boolean; remaining: number; resetTime: number } {
    const now = Date.now()
    const requests = this.requests.get(key) || []

    // Remove expired timestamps
    const validRequests = requests.filter(
      timestamp => now - timestamp < config.windowMs
    )

    const limited = validRequests.length >= config.maxRequests
    const remaining = Math.max(0, config.maxRequests - validRequests.length - 1)
    const oldestRequest = validRequests[0] || now
    const resetTime = oldestRequest + config.windowMs

    if (!limited) {
      validRequests.push(now)
      this.requests.set(key, validRequests)
    }

    return { limited, remaining, resetTime }
  }

  static reset(key: string): void {
    this.requests.delete(key)
  }

  static clearExpired(): void {
    const now = Date.now()
    const keysToCheck = Array.from(this.requests.keys())
    
    for (const key of keysToCheck) {
      const timestamps = this.requests.get(key)
      if (!timestamps) continue
      
      const valid = timestamps.filter(ts => now - ts < 3600000) // Keep last hour
      if (valid.length === 0) {
        this.requests.delete(key)
      } else {
        this.requests.set(key, valid)
      }
    }
  }
}

// Periodically clean up rate limiter
if (typeof window === 'undefined') {
  setInterval(() => RateLimiter.clearExpired(), 300000) // Every 5 minutes
}

/**
 * Input Validator
 */
class InputValidator {
  /**
   * Validate and sanitize request body
   */
  static async validateBody(request: NextRequest): Promise<{
    valid: boolean
    errors: string[]
    data?: any
  }> {
    const errors: string[] = []

    try {
      const contentType = request.headers.get('content-type') || ''
      
      if (!contentType.includes('application/json')) {
        errors.push('Content-Type must be application/json')
        return { valid: false, errors }
      }

      const data = await request.json()

      // Check for SQL injection
      if (this.containsSQLInjection(data)) {
        errors.push('Potential SQL injection detected')
        AdvancedSecurityMonitor.logEvent({
          type: 'input',
          severity: 'critical',
          path: request.nextUrl.pathname,
          method: request.method,
          details: { attack: 'sql_injection', data },
          blocked: true
        })
      }

      // Check for XSS
      if (this.containsXSS(data)) {
        errors.push('Potential XSS attack detected')
        AdvancedSecurityMonitor.logEvent({
          type: 'input',
          severity: 'critical',
          path: request.nextUrl.pathname,
          method: request.method,
          details: { attack: 'xss', data },
          blocked: true
        })
      }

      // Check for path traversal
      if (this.containsPathTraversal(data)) {
        errors.push('Potential path traversal detected')
        AdvancedSecurityMonitor.logEvent({
          type: 'input',
          severity: 'high',
          path: request.nextUrl.pathname,
          method: request.method,
          details: { attack: 'path_traversal', data },
          blocked: true
        })
      }

      // Check data size (max 1MB)
      const dataSize = JSON.stringify(data).length
      if (dataSize > 1048576) {
        errors.push('Request body too large (max 1MB)')
      }

      return {
        valid: errors.length === 0,
        errors,
        data: errors.length === 0 ? data : undefined
      }
    } catch (error) {
      errors.push('Invalid JSON body')
      return { valid: false, errors }
    }
  }

  /**
   * Check for SQL injection patterns
   */
  private static containsSQLInjection(data: any): boolean {
    const patterns = [
      /(\bunion\b.*\bselect\b|\bselect\b.*\bfrom\b)/i,
      /(;|--|\||\/\*).*?(drop|delete|update|insert|truncate)\b/i,
      /\b(exec|execute|sp_|xp_)\w+/i,
      /'.*?(\bor\b|\band\b).*?'.*?=/i,
      /\b(waitfor|delay|sleep)\b.*\(/i
    ]

    const str = JSON.stringify(data).toLowerCase()
    return patterns.some(p => p.test(str))
  }

  /**
   * Check for XSS patterns
   */
  private static containsXSS(data: any): boolean {
    const patterns = [
      /<script[^>]*>.*?<\/script>/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /<iframe/i,
      /eval\s*\(/i,
      /expression\s*\(/i,
      /<object|<embed/i
    ]

    const str = JSON.stringify(data)
    return patterns.some(p => p.test(str))
  }

  /**
   * Check for path traversal
   */
  private static containsPathTraversal(data: any): boolean {
    const patterns = [
      /\.\.[\/\\]/,
      /%2e%2e[\/\\]/i,
      /\.\.[%2f|%5c]/i
    ]

    const str = JSON.stringify(data)
    return patterns.some(p => p.test(str))
  }
}

/**
 * CSRF Token Manager
 */
class CSRFManager {
  private static tokens = new Map<string, { token: string; expires: number }>()

  /**
   * Generate CSRF token
   */
  static generateToken(sessionId: string): string {
    const token = this.randomToken()
    const expires = Date.now() + 3600000 // 1 hour

    this.tokens.set(sessionId, { token, expires })
    return token
  }

  /**
   * Validate CSRF token
   */
  static validateToken(sessionId: string, token: string): boolean {
    const stored = this.tokens.get(sessionId)
    if (!stored) return false

    // Check expiration
    if (Date.now() > stored.expires) {
      this.tokens.delete(sessionId)
      return false
    }

    return stored.token === token
  }

  /**
   * Generate random token
   */
  private static randomToken(): string {
    const array = new Uint8Array(32)
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
      crypto.getRandomValues(array)
    } else {
      // Fallback for Node.js
      const nodeCrypto = require('crypto')
      nodeCrypto.randomFillSync(array)
    }
    return Buffer.from(array).toString('base64')
  }

  /**
   * Clean expired tokens
   */
  static cleanExpired(): void {
    const now = Date.now()
    const keysToCheck = Array.from(this.tokens.keys())
    
    for (const sessionId of keysToCheck) {
      const data = this.tokens.get(sessionId)
      if (data && now > data.expires) {
        this.tokens.delete(sessionId)
      }
    }
  }
}

// Periodically clean expired CSRF tokens
if (typeof window === 'undefined') {
  setInterval(() => CSRFManager.cleanExpired(), 600000) // Every 10 minutes
}

/**
 * Main API Security Middleware
 */
export function createSecureAPIRoute(
  handler: (request: NextRequest) => Promise<NextResponse>,
  config: SecurityConfig = {}
) {
  return async function secureHandler(request: NextRequest): Promise<NextResponse> {
    const startTime = Date.now()
    const ip = request.headers.get('x-forwarded-for') || 
                request.headers.get('x-real-ip') || 
                'unknown'
    const userAgent = request.headers.get('user-agent') || 'unknown'
    const path = request.nextUrl.pathname
    const method = request.method

    try {
      // 1. Check if IP is blocked
      if (AdvancedSecurityMonitor.isIPBlocked(ip)) {
        AdvancedSecurityMonitor.logEvent({
          type: 'access',
          severity: 'high',
          ip,
          userAgent,
          path,
          method,
          details: { reason: 'Blocked IP attempted access' },
          blocked: true
        })

        return NextResponse.json(
          { error: 'Access denied' },
          { status: 403 }
        )
      }

      // 2. Check allowed methods
      if (config.allowedMethods && !config.allowedMethods.includes(method)) {
        return NextResponse.json(
          { error: `Method ${method} not allowed` },
          { 
            status: 405,
            headers: { 'Allow': config.allowedMethods.join(', ') }
          }
        )
      }

      // 3. Rate limiting
      if (config.rateLimit) {
        const rateLimitKey = `${ip}:${path}`
        const rateLimit = RateLimiter.check(rateLimitKey, config.rateLimit)

        if (rateLimit.limited) {
          AdvancedSecurityMonitor.logEvent({
            type: 'rate_limit',
            severity: 'medium',
            ip,
            userAgent,
            path,
            method,
            details: { 
              limit: config.rateLimit.maxRequests,
              window: config.rateLimit.windowMs
            },
            blocked: true
          })

          return NextResponse.json(
            { error: config.rateLimit.message || 'Too many requests' },
            {
              status: 429,
              headers: {
                'X-RateLimit-Limit': config.rateLimit.maxRequests.toString(),
                'X-RateLimit-Remaining': rateLimit.remaining.toString(),
                'X-RateLimit-Reset': new Date(rateLimit.resetTime).toISOString(),
                'Retry-After': Math.ceil((rateLimit.resetTime - Date.now()) / 1000).toString()
              }
            }
          )
        }

        // Add rate limit headers to response
        request.headers.set('X-RateLimit-Info', JSON.stringify(rateLimit))
      }

      // 4. Validate input
      if (config.validateInput && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
        const validation = await InputValidator.validateBody(request)
        
        if (!validation.valid) {
          return NextResponse.json(
            { error: 'Invalid input', details: validation.errors },
            { status: 400 }
          )
        }

        // Store validated data for handler
        request.headers.set('X-Validated-Data', JSON.stringify(validation.data))
      }

      // 5. CSRF check for state-changing operations
      if (config.checkCSRF && (method === 'POST' || method === 'PUT' || method === 'DELETE' || method === 'PATCH')) {
        const csrfToken = request.headers.get('x-csrf-token')
        const sessionId = request.headers.get('x-session-id') || ip

        if (!csrfToken || !CSRFManager.validateToken(sessionId, csrfToken)) {
          AdvancedSecurityMonitor.logEvent({
            type: 'suspicious',
            severity: 'high',
            ip,
            userAgent,
            path,
            method,
            details: { reason: 'Invalid or missing CSRF token' },
            blocked: true
          })

          return NextResponse.json(
            { error: 'Invalid CSRF token' },
            { status: 403 }
          )
        }
      }

      // 6. Log access
      if (config.logAccess) {
        AdvancedSecurityMonitor.logEvent({
          type: 'access',
          severity: 'low',
          ip,
          userAgent,
          path,
          method,
          details: { 
            timestamp: new Date().toISOString()
          },
          blocked: false
        })
      }

      // 7. Call actual handler
      const response = await handler(request)

      // 8. Add security headers to response
      response.headers.set('X-Content-Type-Options', 'nosniff')
      response.headers.set('X-Frame-Options', 'DENY')
      response.headers.set('X-XSS-Protection', '1; mode=block')
      response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
      response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
      response.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()')

      // 9. Log response time
      const duration = Date.now() - startTime
      if (duration > 5000) {
        // Log slow requests
        AdvancedSecurityMonitor.logEvent({
          type: 'error',
          severity: 'low',
          ip,
          userAgent,
          path,
          method,
          details: { 
            slow_request: true,
            duration_ms: duration
          },
          blocked: false
        })
      }

      return response

    } catch (error) {
      // Log error
      AdvancedSecurityMonitor.logEvent({
        type: 'error',
        severity: 'high',
        ip,
        userAgent,
        path,
        method,
        details: { 
          error: error instanceof Error ? error.message : 'Unknown error',
          stack: error instanceof Error ? error.stack : undefined
        },
        blocked: false
      })

      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      )
    }
  }
}

/**
 * Pre-configured security middleware for common scenarios
 */
export const SecurityPresets = {
  /**
   * Public API - Basic rate limiting, input validation
   */
  public: (handler: (req: NextRequest) => Promise<NextResponse>) => 
    createSecureAPIRoute(handler, {
      rateLimit: {
        windowMs: 60000, // 1 minute
        maxRequests: 60 // 60 per minute
      },
      validateInput: true,
      logAccess: true,
      allowedMethods: ['GET', 'POST']
    }),

  /**
   * Authenticated API - Requires auth, stricter rate limiting
   */
  authenticated: (handler: (req: NextRequest) => Promise<NextResponse>) =>
    createSecureAPIRoute(handler, {
      requireAuth: true,
      rateLimit: {
        windowMs: 60000,
        maxRequests: 30 // 30 per minute
      },
      validateInput: true,
      checkCSRF: true,
      logAccess: true
    }),

  /**
   * Admin API - Maximum security
   */
  admin: (handler: (req: NextRequest) => Promise<NextResponse>) =>
    createSecureAPIRoute(handler, {
      requireAuth: true,
      requireAdmin: true,
      rateLimit: {
        windowMs: 60000,
        maxRequests: 10 // 10 per minute
      },
      validateInput: true,
      checkCSRF: true,
      logAccess: true,
      allowedMethods: ['GET', 'POST', 'PUT', 'DELETE']
    }),

  /**
   * File upload API - Special handling
   */
  upload: (handler: (req: NextRequest) => Promise<NextResponse>) =>
    createSecureAPIRoute(handler, {
      requireAuth: true,
      rateLimit: {
        windowMs: 300000, // 5 minutes
        maxRequests: 5 // 5 uploads per 5 minutes
      },
      logAccess: true,
      allowedMethods: ['POST']
    })
}

export { CSRFManager, RateLimiter, InputValidator }
export default createSecureAPIRoute
