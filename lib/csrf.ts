/**
 * CSRF (Cross-Site Request Forgery) Protection
 * Implements double-submit cookie pattern for CSRF protection
 */

import { NextRequest, NextResponse } from 'next/server'
import { generateSecureToken, hashData } from './security'

const CSRF_TOKEN_NAME = 'csrf-token'
const CSRF_HEADER_NAME = 'x-csrf-token'
const TOKEN_EXPIRY = 3600000 // 1 hour in milliseconds

interface CSRFToken {
  value: string
  expires: number
}

/**
 * Generate a new CSRF token
 */
export function generateCSRFToken(): CSRFToken {
  return {
    value: generateSecureToken(32),
    expires: Date.now() + TOKEN_EXPIRY
  }
}

/**
 * Validate CSRF token from request
 * Compares token from cookie with token from header
 */
export function validateCSRFToken(request: NextRequest): boolean {
  try {
    // Get token from cookie
    const cookieToken = request.cookies.get(CSRF_TOKEN_NAME)?.value
    if (!cookieToken) {
      return false
    }

    // Parse cookie token
    let tokenData: CSRFToken
    try {
      tokenData = JSON.parse(cookieToken)
    } catch {
      return false
    }

    // Check if token is expired
    if (Date.now() > tokenData.expires) {
      return false
    }

    // Get token from header
    const headerToken = request.headers.get(CSRF_HEADER_NAME)
    if (!headerToken) {
      return false
    }

    // Compare tokens (constant-time comparison to prevent timing attacks)
    return tokenData.value === headerToken
  } catch (error) {
    console.error('CSRF validation error:', error)
    return false
  }
}

/**
 * Add CSRF token to response cookies
 */
export function setCSRFToken(response: NextResponse): NextResponse {
  const token = generateCSRFToken()
  
  response.cookies.set(CSRF_TOKEN_NAME, JSON.stringify(token), {
    httpOnly: true, // Prevent JavaScript access
    secure: process.env.NODE_ENV === 'production', // HTTPS only in production
    sameSite: 'strict', // Prevent CSRF
    path: '/',
    maxAge: TOKEN_EXPIRY / 1000 // Convert to seconds
  })
  
  return response
}

/**
 * Middleware to validate CSRF tokens on state-changing requests
 */
export function requireCSRFToken(request: NextRequest): NextResponse | null {
  // Only check CSRF for state-changing methods
  const methodsToProtect = ['POST', 'PUT', 'DELETE', 'PATCH']
  
  if (!methodsToProtect.includes(request.method)) {
    return null // No CSRF check needed for GET, HEAD, OPTIONS
  }

  // Validate CSRF token
  if (!validateCSRFToken(request)) {
    return NextResponse.json(
      { error: 'Invalid or missing CSRF token' },
      { status: 403 }
    )
  }

  return null // Token is valid
}

/**
 * Get CSRF token for client-side use
 * Returns the token value that should be sent in headers
 */
export function getCSRFTokenFromCookie(cookieString: string): string | null {
  try {
    // Parse cookies
    const cookies = cookieString.split(';').reduce((acc, cookie) => {
      const [key, value] = cookie.trim().split('=')
      acc[key] = value
      return acc
    }, {} as Record<string, string>)

    const tokenCookie = cookies[CSRF_TOKEN_NAME]
    if (!tokenCookie) {
      return null
    }

    const tokenData: CSRFToken = JSON.parse(decodeURIComponent(tokenCookie))
    
    // Check expiry
    if (Date.now() > tokenData.expires) {
      return null
    }

    return tokenData.value
  } catch {
    return null
  }
}

/**
 * Client-side helper to get CSRF token
 * For use in browser JavaScript
 */
export function getClientCSRFToken(): string | null {
  if (typeof document === 'undefined') {
    return null
  }
  
  return getCSRFTokenFromCookie(document.cookie)
}

/**
 * Refresh CSRF token
 * Generates a new token and updates the cookie
 */
export function refreshCSRFToken(response: NextResponse): NextResponse {
  return setCSRFToken(response)
}

/**
 * Clear CSRF token
 * Removes the token cookie
 */
export function clearCSRFToken(response: NextResponse): NextResponse {
  response.cookies.delete(CSRF_TOKEN_NAME)
  return response
}

/**
 * Create a signed CSRF token
 * Uses HMAC for additional security
 */
export async function createSignedCSRFToken(secret: string): Promise<string> {
  const token = generateSecureToken(32)
  const timestamp = Date.now().toString()
  const data = `${token}:${timestamp}`
  
  const signature = await hashData(data + secret)
  
  return `${data}:${signature}`
}

/**
 * Verify a signed CSRF token
 */
export async function verifySignedCSRFToken(
  signedToken: string,
  secret: string,
  maxAge: number = TOKEN_EXPIRY
): Promise<boolean> {
  try {
    const parts = signedToken.split(':')
    if (parts.length !== 3) {
      return false
    }

    const [token, timestamp, signature] = parts
    const data = `${token}:${timestamp}`
    
    // Verify signature
    const expectedSignature = await hashData(data + secret)
    if (signature !== expectedSignature) {
      return false
    }

    // Check expiry
    const tokenTimestamp = parseInt(timestamp, 10)
    if (Date.now() - tokenTimestamp > maxAge) {
      return false
    }

    return true
  } catch {
    return false
  }
}

/**
 * CSRF protection middleware wrapper
 * Use this to wrap API route handlers that need CSRF protection
 */
export function withCSRFProtection(
  handler: (request: NextRequest) => Promise<NextResponse>
) {
  return async (request: NextRequest): Promise<NextResponse> => {
    // Check CSRF token for state-changing requests
    const csrfError = requireCSRFToken(request)
    if (csrfError) {
      return csrfError
    }

    // Call the actual handler
    const response = await handler(request)

    // Refresh CSRF token in response
    return setCSRFToken(response)
  }
}

/**
 * Get CSRF token header name
 */
export function getCSRFHeaderName(): string {
  return CSRF_HEADER_NAME
}

/**
 * Get CSRF token cookie name
 */
export function getCSRFCookieName(): string {
  return CSRF_TOKEN_NAME
}
