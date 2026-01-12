/**
 * Advanced Client-Side Encryption Library
 * Implements end-to-end encryption for sensitive user data
 * Uses Web Crypto API for browser-native encryption
 */

export class ClientEncryption {
  private static algorithm = 'AES-GCM'
  private static keyLength = 256
  private static ivLength = 12 // 96 bits for GCM

  /**
   * Generate a cryptographic key from password using PBKDF2
   */
  private static async deriveKey(
    password: string,
    salt: Uint8Array
  ): Promise<CryptoKey> {
    const encoder = new TextEncoder()
    const passwordKey = await crypto.subtle.importKey(
      'raw',
      encoder.encode(password),
      'PBKDF2',
      false,
      ['deriveBits', 'deriveKey']
    )

    return crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: salt as BufferSource,
        iterations: 100000, // High iteration count for security
        hash: 'SHA-256'
      },
      passwordKey,
      { name: this.algorithm, length: this.keyLength },
      false,
      ['encrypt', 'decrypt']
    )
  }

  /**
   * Encrypt data using AES-GCM
   */
  static async encrypt(
    plaintext: string,
    password: string
  ): Promise<string> {
    try {
      const encoder = new TextEncoder()
      const data = encoder.encode(plaintext)

      // Generate random salt and IV
      const salt = crypto.getRandomValues(new Uint8Array(32))
      const iv = crypto.getRandomValues(new Uint8Array(this.ivLength))

      // Derive encryption key
      const key = await this.deriveKey(password, salt)

      // Encrypt data
      const ciphertext = await crypto.subtle.encrypt(
        {
          name: this.algorithm,
          iv: iv as BufferSource
        },
        key,
        data as BufferSource
      )

      // Combine salt + iv + ciphertext
      const combined = new Uint8Array(
        salt.length + iv.length + ciphertext.byteLength
      )
      combined.set(salt, 0)
      combined.set(iv, salt.length)
      combined.set(new Uint8Array(ciphertext), salt.length + iv.length)

      // Return as base64
      return this.arrayBufferToBase64(combined)
    } catch (error) {
      console.error('Encryption error:', error)
      throw new Error('Failed to encrypt data')
    }
  }

  /**
   * Decrypt data using AES-GCM
   */
  static async decrypt(
    encryptedData: string,
    password: string
  ): Promise<string> {
    try {
      const decoder = new TextDecoder()
      const combined = this.base64ToArrayBuffer(encryptedData)

      // Extract salt, IV, and ciphertext
      const salt = combined.slice(0, 32)
      const iv = combined.slice(32, 32 + this.ivLength)
      const ciphertext = combined.slice(32 + this.ivLength)

      // Derive decryption key
      const key = await this.deriveKey(password, salt)

      // Decrypt data
      const plaintext = await crypto.subtle.decrypt(
        {
          name: this.algorithm,
          iv: iv as BufferSource
        },
        key,
        ciphertext as BufferSource
      )

      return decoder.decode(plaintext)
    } catch (error) {
      console.error('Decryption error:', error)
      throw new Error('Failed to decrypt data - invalid password or corrupted data')
    }
  }

  /**
   * Generate a secure random password
   */
  static generateSecurePassword(length: number = 32): string {
    const charset = 
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'
    const randomValues = crypto.getRandomValues(new Uint8Array(length))
    return Array.from(randomValues)
      .map(x => charset[x % charset.length])
      .join('')
  }

  /**
   * Hash data using SHA-256
   */
  static async hash(data: string): Promise<string> {
    const encoder = new TextEncoder()
    const hashBuffer = await crypto.subtle.digest(
      'SHA-256',
      encoder.encode(data) as BufferSource
    )
    return this.arrayBufferToBase64(new Uint8Array(hashBuffer))
  }

  /**
   * Helper: Convert ArrayBuffer to Base64
   */
  private static arrayBufferToBase64(buffer: Uint8Array): string {
    const binary = Array.from(buffer).map(byte => String.fromCharCode(byte)).join('')
    return btoa(binary)
  }

  /**
   * Helper: Convert Base64 to ArrayBuffer
   */
  private static base64ToArrayBuffer(base64: string): Uint8Array {
    const binary = atob(base64)
    const bytes = new Uint8Array(binary.length)
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i)
    }
    return bytes
  }

  /**
   * Encrypt user progress data before storing
   */
  static async encryptUserProgress(
    progress: any,
    userId: string
  ): Promise<string> {
    const data = JSON.stringify(progress)
    // Use userId as part of the encryption key for user-specific encryption
    return this.encrypt(data, `progress_${userId}_${process.env.NEXT_PUBLIC_APP_SECRET || 'default'}`)
  }

  /**
   * Decrypt user progress data
   */
  static async decryptUserProgress(
    encryptedData: string,
    userId: string
  ): Promise<any> {
    const decrypted = await this.decrypt(
      encryptedData,
      `progress_${userId}_${process.env.NEXT_PUBLIC_APP_SECRET || 'default'}`
    )
    return JSON.parse(decrypted)
  }
}

/**
 * Secure Storage Manager
 * Encrypts data before storing in localStorage/sessionStorage
 */
export class SecureStorage {
  private static encryptionKey = process.env.NEXT_PUBLIC_STORAGE_KEY || 'default_key_change_in_production'

  /**
   * Set encrypted item in localStorage
   */
  static async setItem(key: string, value: any): Promise<void> {
    try {
      const serialized = JSON.stringify(value)
      const encrypted = await ClientEncryption.encrypt(serialized, this.encryptionKey)
      localStorage.setItem(key, encrypted)
    } catch (error) {
      console.error('SecureStorage setItem error:', error)
      throw error
    }
  }

  /**
   * Get and decrypt item from localStorage
   */
  static async getItem<T>(key: string): Promise<T | null> {
    try {
      const encrypted = localStorage.getItem(key)
      if (!encrypted) return null

      const decrypted = await ClientEncryption.decrypt(encrypted, this.encryptionKey)
      return JSON.parse(decrypted)
    } catch (error) {
      console.error('SecureStorage getItem error:', error)
      // If decryption fails, remove corrupted data
      localStorage.removeItem(key)
      return null
    }
  }

  /**
   * Remove item from localStorage
   */
  static removeItem(key: string): void {
    localStorage.removeItem(key)
  }

  /**
   * Clear all encrypted storage
   */
  static clear(): void {
    localStorage.clear()
  }

  /**
   * Check if key exists
   */
  static hasItem(key: string): boolean {
    return localStorage.getItem(key) !== null
  }
}

/**
 * Content Security Policy Helper
 */
export class CSPManager {
  /**
   * Generate CSP nonce for inline scripts
   */
  static generateNonce(): string {
    const array = new Uint8Array(16)
    crypto.getRandomValues(array)
    return btoa(Array.from(array).map(byte => String.fromCharCode(byte)).join(''))
  }

  /**
   * Validate CSP nonce
   */
  static validateNonce(nonce: string): boolean {
    try {
      const decoded = atob(nonce)
      return decoded.length === 16
    } catch {
      return false
    }
  }
}

/**
 * Input Sanitization & Validation
 */
export class SecurityValidator {
  /**
   * Validate and sanitize user input against XSS
   */
  static sanitizeInput(input: string, maxLength: number = 1000): string {
    if (!input) return ''
    
    // Truncate to max length
    let sanitized = input.slice(0, maxLength)
    
    // Remove dangerous characters and patterns
    sanitized = sanitized
      .replace(/[<>]/g, '') // Remove HTML brackets
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+\s*=/gi, '') // Remove event handlers
      .replace(/eval\s*\(/gi, '') // Remove eval
      .replace(/expression\s*\(/gi, '') // Remove CSS expressions
      .trim()
    
    return sanitized
  }

  /**
   * Validate code input (for code editor)
   */
  static validateCode(code: string, language: string): { valid: boolean; errors: string[] } {
    const errors: string[] = []
    const maxLength = 50000 // 50KB max

    if (code.length > maxLength) {
      errors.push(`Code exceeds maximum length of ${maxLength} characters`)
    }

    // Check for potentially dangerous patterns
    const dangerousPatterns = [
      /eval\s*\(/i,
      /Function\s*\(/i,
      /setTimeout\s*\(\s*["']/i,
      /setInterval\s*\(\s*["']/i,
      /__proto__/i,
      /constructor\[/i
    ]

    for (const pattern of dangerousPatterns) {
      if (pattern.test(code)) {
        errors.push(`Code contains potentially dangerous pattern: ${pattern.source}`)
      }
    }

    return {
      valid: errors.length === 0,
      errors
    }
  }

  /**
   * Validate URL to prevent open redirect
   */
  static isValidRedirectUrl(url: string, allowedDomains: string[]): boolean {
    try {
      const parsed = new URL(url)
      
      // Only allow http and https
      if (!['http:', 'https:'].includes(parsed.protocol)) {
        return false
      }

      // Check if domain is in allowed list
      return allowedDomains.some(domain => {
        return parsed.hostname === domain || parsed.hostname.endsWith(`.${domain}`)
      })
    } catch {
      return false
    }
  }

  /**
   * Sanitize filename
   */
  static sanitizeFilename(filename: string): string {
    return filename
      .replace(/[^a-zA-Z0-9._-]/g, '_') // Replace special chars
      .replace(/\.{2,}/g, '.') // Remove multiple dots
      .slice(0, 255) // Max filename length
  }
}

/**
 * Rate Limiting for Client Side
 */
export class ClientRateLimiter {
  private static requests = new Map<string, number[]>()

  /**
   * Check if action is rate limited
   */
  static isRateLimited(
    key: string,
    maxRequests: number,
    windowMs: number
  ): boolean {
    const now = Date.now()
    const timestamps = this.requests.get(key) || []

    // Remove old timestamps outside the window
    const validTimestamps = timestamps.filter(ts => now - ts < windowMs)

    // Check if limit exceeded
    if (validTimestamps.length >= maxRequests) {
      return true
    }

    // Add current timestamp
    validTimestamps.push(now)
    this.requests.set(key, validTimestamps)

    return false
  }

  /**
   * Reset rate limit for key
   */
  static reset(key: string): void {
    this.requests.delete(key)
  }
}

/**
 * CORS and API Security Helpers
 */
export class APISecurityHelper {
  /**
   * Generate secure API request headers
   */
  static getSecureHeaders(): HeadersInit {
    return {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'X-Client-Version': process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
      'X-Client-Timestamp': Date.now().toString()
    }
  }

  /**
   * Validate API response integrity
   */
  static validateResponse(response: Response): boolean {
    // Check status code
    if (response.status < 200 || response.status >= 300) {
      return false
    }

    // Check for required security headers
    const requiredHeaders = ['x-content-type-options', 'x-frame-options']
    for (const header of requiredHeaders) {
      if (!response.headers.has(header)) {
        console.warn(`Missing security header: ${header}`)
      }
    }

    return true
  }
}

export default ClientEncryption
