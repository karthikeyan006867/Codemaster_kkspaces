/**
 * API Security Middleware
 * Provides rate limiting, validation, and security checks for API routes
 */

import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { isValidCourseId, isValidLessonId, isValidUserId, sanitizeInput, isSafeObject } from './security'
import { logRateLimitExceeded, logAuthFailure, logAPIRequest, getRequestInfo } from './securityMonitoring'

// Rate limiter instances for different API endpoints
const rateLimiters = new Map<string, Map<string, number[]>>()

/**
 * Rate limiting middleware
 */
export function rateLimit(
  identifier: string,
  maxRequests: number = 10,
  windowMs: number = 60000,
  req?: NextRequest
): boolean {
  const now = Date.now()
  
  if (!rateLimiters.has(identifier)) {
    rateLimiters.set(identifier, new Map())
  }
  
  const limiterMap = rateLimiters.get(identifier)!
  const requests = limiterMap.get(identifier) || []
  
  // Remove old requests outside the window
  const validRequests = requests.filter(timestamp => now - timestamp < windowMs)
  
  if (validRequests.length >= maxRequests) {
    // Log rate limit exceeded
    if (req) {
      logRateLimitExceeded(req, maxRequests, undefined)
    }
    return false // Rate limit exceeded
  }
  
  validRequests.push(now)
  limiterMap.set(identifier, validRequests)
  return true
}

/**
 * Get user ID from request with authentication check
 */
export async function getAuthenticatedUserId(req: NextRequest): Promise<string> {
  try {
    const { userId } = await auth()
    
    if (!userId || !isValidUserId(userId)) {
      const requestInfo = getRequestInfo(req)
      logAuthFailure(req, 'Invalid or missing user ID')
      throw new Error('Unauthorized')
    }
    
    // Log successful API request
    logAPIRequest(req, userId)
    
    return userId
  } catch (error) {
    console.error('Authentication error:', error)
    logAuthFailure(req, error instanceof Error ? error.message : 'Unknown error')
    throw new Error('Unauthorized')
  }
}

/**
 * Validate request body size
 */
export function validateBodySize(body: any, maxSizeKB: number = 100): boolean {
  try {
    const bodySize = JSON.stringify(body).length / 1024
    return bodySize <= maxSizeKB
  } catch {
    return false
  }
}

/**
 * Sanitize request body
 */
export function sanitizeRequestBody(body: any): any {
  if (!body || typeof body !== 'object') {
    return body
  }
  
  // Check for prototype pollution
  if (!isSafeObject(body)) {
    throw new Error('Invalid object structure detected')
  }
  
  const sanitized: any = {}
  
  for (const [key, value] of Object.entries(body)) {
    if (typeof value === 'string') {
      sanitized[key] = sanitizeInput(value)
    } else if (Array.isArray(value)) {
      sanitized[key] = value.map(item => 
        typeof item === 'string' ? sanitizeInput(item) : item
      )
    } else if (value && typeof value === 'object') {
      sanitized[key] = sanitizeRequestBody(value)
    } else {
      sanitized[key] = value
    }
  }
  
  return sanitized
}

/**
 * Validate course ID parameter
 */
export function validateCourseIdParam(courseId: string | null): string | null {
  if (!courseId || !isValidCourseId(courseId)) {
    return null
  }
  return courseId
}

/**
 * Validate lesson ID parameter
 */
export function validateLessonIdParam(lessonId: string | null): string | null {
  if (!lessonId || !isValidLessonId(lessonId)) {
    return null
  }
  return lessonId
}

/**
 * Create error response with proper headers
 */
export function createErrorResponse(
  message: string,
  status: number = 400,
  additionalData?: Record<string, any>
): NextResponse {
  return NextResponse.json(
    { error: message, ...additionalData },
    {
      status,
      headers: {
        'Cache-Control': 'no-store, max-age=0',
        'Content-Type': 'application/json',
      },
    }
  )
}

/**
 * Create success response with proper headers
 */
export function createSuccessResponse(
  data: any,
  status: number = 200
): NextResponse {
  return NextResponse.json(data, {
    status,
    headers: {
      'Cache-Control': 'private, max-age=0',
      'Content-Type': 'application/json',
    },
  })
}

/**
 * Validate and sanitize progress data
 */
export interface ProgressData {
  courseId: string
  lessonId: string
  completed: boolean
  timestamp?: number
}

export interface ValidationResult {
  valid: boolean
  errors: string[]
  data?: ProgressData
}

export function validateProgressData(data: any): ValidationResult {
  const errors: string[] = []
  
  if (!data || typeof data !== 'object') {
    errors.push('Invalid data format')
    return { valid: false, errors }
  }
  
  // Validate arrays
  if (data.completedLessons && !Array.isArray(data.completedLessons)) {
    errors.push('completedLessons must be an array')
  }
  
  if (data.completedChallenges && !Array.isArray(data.completedChallenges)) {
    errors.push('completedChallenges must be an array')
  }
  
  if (data.achievements && !Array.isArray(data.achievements)) {
    errors.push('achievements must be an array')
  }
  
  // Validate numeric fields
  if (data.points !== undefined && (typeof data.points !== 'number' || data.points < 0 || data.points > 1000000)) {
    errors.push('points must be a number between 0 and 1,000,000')
  }
  
  if (data.streak !== undefined && (typeof data.streak !== 'number' || data.streak < 0 || data.streak > 3650)) {
    errors.push('streak must be a number between 0 and 3650')
  }
  
  if (data.longestStreak !== undefined && (typeof data.longestStreak !== 'number' || data.longestStreak < 0 || data.longestStreak > 3650)) {
    errors.push('longestStreak must be a number between 0 and 3650')
  }
  
  if (data.timeSpent !== undefined && (typeof data.timeSpent !== 'number' || data.timeSpent < 0 || data.timeSpent > 100000000)) {
    errors.push('timeSpent must be a number between 0 and 100,000,000')
  }
  
  if (errors.length > 0) {
    return { valid: false, errors }
  }
  
  return {
    valid: true,
    errors: [],
    data
  }
}

/**
 * Middleware wrapper for API routes
 */
export function withApiSecurity(
  handler: (req: NextRequest, context?: any) => Promise<NextResponse>,
  options: {
    requireAuth?: boolean
    rateLimit?: { maxRequests: number; windowMs: number }
    validateBody?: boolean
  } = {}
) {
  return async (req: NextRequest, context?: any): Promise<NextResponse> => {
    try {
      // Rate limiting
      if (options.rateLimit) {
        const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown'
        const rateLimitKey = `${req.url}:${ip}`
        
        if (!rateLimit(rateLimitKey, options.rateLimit.maxRequests, options.rateLimit.windowMs, req)) {
          return createErrorResponse('Too many requests. Please try again later.', 429)
        }
      }
      
      // Authentication check
      if (options.requireAuth) {
        try {
          const userId = await getAuthenticatedUserId(req)
          if (!userId) {
            return createErrorResponse('Unauthorized', 401)
          }
        } catch (error) {
          return createErrorResponse('Unauthorized', 401)
        }
      }
      
      // Body validation
      if (options.validateBody && req.method !== 'GET') {
        try {
          const body = await req.json()
          
          if (!validateBodySize(body, 100)) {
            return createErrorResponse('Request body too large', 413)
          }
          
          // Store sanitized body for handler
          (req as any).sanitizedBody = sanitizeRequestBody(body)
        } catch (e) {
          return createErrorResponse('Invalid request body', 400)
        }
      }
      
      // Call the actual handler
      return await handler(req, context)
    } catch (error) {
      console.error('API error:', error)
      return createErrorResponse('Internal server error', 500)
    }
  }
}

/**
 * Check if user has admin role
 */
export async function isAdmin(req: NextRequest): Promise<boolean> {
  try {
    const { currentUser } = await import('@clerk/nextjs/server')
    const user = await currentUser()
    
    if (!user) return false
    
    // Check admin emails list
    const adminEmails = ['kaarthii009.g@gmail.com', 'karthii009.g@gmail.com']
    const publicMetadata = user.publicMetadata as { role?: string } | undefined
    const userEmail = user.emailAddresses?.[0]?.emailAddress
    
    const isAdminByRole = publicMetadata?.role === 'admin'
    const isAdminByEmail = userEmail 
      ? adminEmails.some(adminEmail => userEmail.toLowerCase() === adminEmail.toLowerCase())
      : false
    
    return isAdminByRole || isAdminByEmail
  } catch {
    return false
  }
}

/**
 * Require admin access
 */
export async function requireAdmin(req: NextRequest): Promise<NextResponse | null> {
  const userId = await getAuthenticatedUserId(req)
  
  if (!userId) {
    return createErrorResponse('Unauthorized', 401)
  }
  
  const adminCheck = await isAdmin(req)
  
  if (!adminCheck) {
    return createErrorResponse('Forbidden - Admin access required', 403)
  }
  
  return null // No error, proceed
}
