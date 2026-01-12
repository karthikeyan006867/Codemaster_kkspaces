/**
 * Environment Configuration with Validation
 * Ensures all required environment variables are present and valid
 */

interface EnvironmentConfig {
  // Clerk Authentication
  clerkPublishableKey: string
  clerkSecretKey: string
  
  // URLs
  appUrl: string
  clerkSignInUrl: string
  clerkSignUpUrl: string
  clerkAfterSignInUrl: string
  clerkAfterSignUpUrl: string
  
  // Environment
  nodeEnv: 'development' | 'production' | 'test'
  isProduction: boolean
  isDevelopment: boolean
}

function getEnvVar(key: string, required: boolean = true): string {
  const value = process.env[key]
  
  if (!value && required) {
    throw new Error(`Missing required environment variable: ${key}`)
  }
  
  return value || ''
}

function validateEnvironment(): EnvironmentConfig {
  const nodeEnv = (process.env.NODE_ENV || 'development') as EnvironmentConfig['nodeEnv']
  
  return {
    // Clerk
    clerkPublishableKey: getEnvVar('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY'),
    clerkSecretKey: getEnvVar('CLERK_SECRET_KEY'),
    
    // URLs
    appUrl: getEnvVar('NEXT_PUBLIC_APP_URL', false) || 'http://localhost:3000',
    clerkSignInUrl: getEnvVar('NEXT_PUBLIC_CLERK_SIGN_IN_URL', false) || '/sign-in',
    clerkSignUpUrl: getEnvVar('NEXT_PUBLIC_CLERK_SIGN_UP_URL', false) || '/sign-up',
    clerkAfterSignInUrl: getEnvVar('NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL', false) || '/dashboard',
    clerkAfterSignUpUrl: getEnvVar('NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL', false) || '/dashboard',
    
    // Environment flags
    nodeEnv,
    isProduction: nodeEnv === 'production',
    isDevelopment: nodeEnv === 'development',
  }
}

// Validate environment on module load
let config: EnvironmentConfig

try {
  config = validateEnvironment()
  
  // Log configuration in development (without secrets)
  if (config.isDevelopment) {
    console.log('Environment configuration loaded:', {
      nodeEnv: config.nodeEnv,
      appUrl: config.appUrl,
      hasClerkKeys: !!(config.clerkPublishableKey && config.clerkSecretKey),
    })
  }
} catch (error) {
  console.error('Environment validation failed:', error)
  throw error
}

export const env = config

// Utility to check if we're running on the server
export const isServer = typeof window === 'undefined'

// Utility to check if we're running on the client
export const isClient = typeof window !== 'undefined'

// Safe way to access window objects
export function safeWindow<T>(callback: (window: Window) => T, fallback: T): T {
  if (isClient) {
    return callback(window)
  }
  return fallback
}

// Safe way to access localStorage
export function safeLocalStorage<T>(
  key: string,
  defaultValue: T
): { get: () => T; set: (value: T) => void; remove: () => void } {
  return {
    get: () => {
      if (!isClient) return defaultValue
      try {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : defaultValue
      } catch {
        return defaultValue
      }
    },
    set: (value: T) => {
      if (!isClient) return
      try {
        window.localStorage.setItem(key, JSON.stringify(value))
      } catch (error) {
        console.error('localStorage set error:', error)
      }
    },
    remove: () => {
      if (!isClient) return
      try {
        window.localStorage.removeItem(key)
      } catch (error) {
        console.error('localStorage remove error:', error)
      }
    },
  }
}

// Feature flags for security features
export const securityFeatures = {
  enableRateLimiting: true,
  enableCSRFProtection: true,
  enableInputSanitization: true,
  enableSecurityHeaders: true,
  maxUploadSizeMB: 10,
  sessionTimeoutMinutes: 60,
  maxLoginAttempts: 5,
  loginAttemptWindowMinutes: 15,
} as const

// API configuration
export const apiConfig = {
  baseUrl: config.appUrl,
  timeout: 30000, // 30 seconds
  maxRetries: 3,
  retryDelay: 1000,
} as const
