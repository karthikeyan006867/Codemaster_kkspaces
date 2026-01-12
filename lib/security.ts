/**
 * Security Utilities
 * Provides encryption, sanitization, and security helpers
 */

/**
 * Sanitize user input to prevent XSS attacks
 */
export function sanitizeInput(input: string): string {
  if (!input) return ''
  
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, '') // Remove event handlers like onclick=
    .trim()
}

/**
 * Sanitize HTML content - allows safe HTML tags only
 */
export function sanitizeHTML(html: string): string {
  if (!html) return ''
  
  // Allow only safe tags
  const allowedTags = ['p', 'br', 'strong', 'em', 'u', 'code', 'pre', 'h1', 'h2', 'h3', 'ul', 'ol', 'li']
  const tagRegex = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi
  
  return html.replace(tagRegex, (match, tag) => {
    if (allowedTags.includes(tag.toLowerCase())) {
      return match.replace(/on\w+\s*=/gi, '') // Remove event handlers
    }
    return '' // Remove disallowed tags
  })
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate course ID format (alphanumeric with hyphens)
 */
export function isValidCourseId(courseId: string): boolean {
  const courseIdRegex = /^[a-z0-9-]+$/
  return courseIdRegex.test(courseId) && courseId.length <= 50
}

/**
 * Validate lesson ID format
 */
export function isValidLessonId(lessonId: string): boolean {
  const lessonIdRegex = /^[a-z0-9-]+$/
  return lessonIdRegex.test(lessonId) && lessonId.length <= 50
}

/**
 * Validate user ID format (Clerk user IDs)
 */
export function isValidUserId(userId: string): boolean {
  // Clerk user IDs typically start with user_
  return userId.startsWith('user_') && userId.length <= 100
}

/**
 * Simple encryption for client-side data (not for sensitive data!)
 * For actual sensitive data, use server-side encryption
 */
export function encryptClientData(data: string): string {
  if (typeof window === 'undefined') return data
  
  try {
    return btoa(encodeURIComponent(data))
  } catch (e) {
    console.error('Encryption failed:', e)
    return data
  }
}

/**
 * Simple decryption for client-side data
 */
export function decryptClientData(encryptedData: string): string {
  if (typeof window === 'undefined') return encryptedData
  
  try {
    return decodeURIComponent(atob(encryptedData))
  } catch (e) {
    console.error('Decryption failed:', e)
    return encryptedData
  }
}

/**
 * Generate a secure random string (for CSRF tokens, etc.)
 */
export function generateSecureToken(length: number = 32): string {
  if (typeof window === 'undefined' || !window.crypto) {
    // Fallback for server-side
    return Math.random().toString(36).substring(2, length + 2)
  }
  
  const array = new Uint8Array(length)
  window.crypto.getRandomValues(array)
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
}

/**
 * Hash data using SHA-256 (client-side)
 */
export async function hashData(data: string): Promise<string> {
  if (typeof window === 'undefined' || !window.crypto || !window.crypto.subtle) {
    // Simple hash fallback
    let hash = 0
    for (let i = 0; i < data.length; i++) {
      const char = data.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash
    }
    return hash.toString(16)
  }
  
  const encoder = new TextEncoder()
  const dataBuffer = encoder.encode(data)
  const hashBuffer = await window.crypto.subtle.digest('SHA-256', dataBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

/**
 * Rate limiting helper - stores request timestamps
 */
export class RateLimiter {
  private requests: Map<string, number[]> = new Map()
  private maxRequests: number
  private windowMs: number

  constructor(maxRequests: number = 10, windowMs: number = 60000) {
    this.maxRequests = maxRequests
    this.windowMs = windowMs
  }

  check(identifier: string): boolean {
    const now = Date.now()
    const requests = this.requests.get(identifier) || []
    
    // Remove old requests outside the window
    const validRequests = requests.filter(timestamp => now - timestamp < this.windowMs)
    
    if (validRequests.length >= this.maxRequests) {
      return false // Rate limit exceeded
    }
    
    validRequests.push(now)
    this.requests.set(identifier, validRequests)
    return true // Request allowed
  }

  reset(identifier: string): void {
    this.requests.delete(identifier)
  }
}

/**
 * Validate and sanitize file uploads
 */
export function validateFileUpload(file: File, allowedTypes: string[], maxSizeMB: number = 5): boolean {
  // Check file type
  if (!allowedTypes.includes(file.type)) {
    return false
  }
  
  // Check file size
  const maxSize = maxSizeMB * 1024 * 1024
  if (file.size > maxSize) {
    return false
  }
  
  return true
}

/**
 * Prevent timing attacks by constant-time string comparison
 */
export function secureCompare(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false
  }
  
  let result = 0
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i)
  }
  
  return result === 0
}

/**
 * Escape special characters for safe use in regex
 */
export function escapeRegex(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * Check if URL is safe (no javascript:, data:, etc.)
 */
export function isSafeURL(url: string): boolean {
  const urlLower = url.toLowerCase().trim()
  const dangerousProtocols = ['javascript:', 'data:', 'vbscript:', 'file:']
  
  return !dangerousProtocols.some(protocol => urlLower.startsWith(protocol))
}

/**
 * Limit string length to prevent DoS attacks
 */
export function limitStringLength(str: string, maxLength: number = 10000): string {
  return str.substring(0, maxLength)
}

/**
 * Validate JSON safely without eval
 */
export function safeJSONParse<T = any>(jsonString: string, fallback: T): T {
  try {
    return JSON.parse(jsonString)
  } catch (e) {
    console.error('JSON parse error:', e)
    return fallback
  }
}

/**
 * Generate Content Security Policy nonce
 */
export function generateCSPNonce(): string {
  return generateSecureToken(16)
}

/**
 * Validate object structure to prevent prototype pollution
 */
export function isSafeObject(obj: any): boolean {
  if (!obj || typeof obj !== 'object') return false
  
  const dangerousKeys = ['__proto__', 'constructor', 'prototype']
  const keys = Object.keys(obj)
  
  return !keys.some(key => dangerousKeys.includes(key.toLowerCase()))
}
