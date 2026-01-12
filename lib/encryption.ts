/**
 * Advanced Encryption Utilities for Sensitive Data
 * Provides AES-GCM encryption for data at rest and in transit
 */

/**
 * Generate a cryptographic key from a password
 * Uses PBKDF2 with SHA-256 for key derivation
 */
async function deriveKey(password: string, salt: Uint8Array): Promise<CryptoKey> {
  const encoder = new TextEncoder()
  const passwordBuffer = encoder.encode(password)
  
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    passwordBuffer,
    'PBKDF2',
    false,
    ['deriveKey']
  )
  
  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: salt as BufferSource,
      iterations: 100000,
      hash: 'SHA-256'
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  )
}

/**
 * Encrypt data using AES-GCM
 * @param data - Data to encrypt (string or object)
 * @param password - Encryption password
 * @returns Base64 encoded encrypted data with salt and IV
 */
export async function encryptData(data: string | object, password: string): Promise<string> {
  try {
    const encoder = new TextEncoder()
    const dataString = typeof data === 'string' ? data : JSON.stringify(data)
    const dataBuffer = encoder.encode(dataString)
    
    // Generate random salt and IV
    const salt = crypto.getRandomValues(new Uint8Array(16))
    const iv = crypto.getRandomValues(new Uint8Array(12))
    
    // Derive encryption key
    const key = await deriveKey(password, salt)
    
    // Encrypt data
    const encryptedBuffer = await crypto.subtle.encrypt(
      {
        name: 'AES-GCM',
        iv: iv
      },
      key,
      dataBuffer
    )
    
    // Combine salt + IV + encrypted data
    const encryptedData = new Uint8Array(encryptedBuffer)
    const combined = new Uint8Array(salt.length + iv.length + encryptedData.length)
    combined.set(salt, 0)
    combined.set(iv, salt.length)
    combined.set(encryptedData, salt.length + iv.length)
    
    // Convert to base64
    return Buffer.from(combined).toString('base64')
  } catch (error) {
    console.error('Encryption error:', error)
    throw new Error('Failed to encrypt data')
  }
}

/**
 * Decrypt data using AES-GCM
 * @param encryptedData - Base64 encoded encrypted data
 * @param password - Decryption password
 * @returns Decrypted data as string
 */
export async function decryptData(encryptedData: string, password: string): Promise<string> {
  try {
    // Decode base64
    const combined = Buffer.from(encryptedData, 'base64')
    
    // Extract salt, IV, and encrypted data
    const salt = combined.slice(0, 16)
    const iv = combined.slice(16, 28)
    const data = combined.slice(28)
    
    // Derive decryption key
    const key = await deriveKey(password, salt)
    
    // Decrypt data
    const decryptedBuffer = await crypto.subtle.decrypt(
      {
        name: 'AES-GCM',
        iv: iv as BufferSource
      },
      key,
      data as BufferSource
    )
    
    // Convert to string
    const decoder = new TextDecoder()
    return decoder.decode(decryptedBuffer)
  } catch (error) {
    console.error('Decryption error:', error)
    throw new Error('Failed to decrypt data')
  }
}

/**
 * Encrypt sensitive user metadata
 * Uses environment-based encryption key
 */
export async function encryptUserMetadata(metadata: Record<string, any>): Promise<string> {
  const encryptionKey = process.env.ENCRYPTION_KEY || 'default-encryption-key-change-in-production'
  return encryptData(metadata, encryptionKey)
}

/**
 * Decrypt sensitive user metadata
 * Uses environment-based encryption key
 */
export async function decryptUserMetadata(encryptedMetadata: string): Promise<Record<string, any>> {
  const encryptionKey = process.env.ENCRYPTION_KEY || 'default-encryption-key-change-in-production'
  const decrypted = await decryptData(encryptedMetadata, encryptionKey)
  return JSON.parse(decrypted)
}

/**
 * Generate a secure random encryption key
 * Use this to generate ENCRYPTION_KEY for .env.local
 */
export function generateEncryptionKey(): string {
  const array = new Uint8Array(32)
  crypto.getRandomValues(array)
  return Buffer.from(array).toString('base64')
}

/**
 * Encrypt API request/response payload
 * For end-to-end encryption of sensitive API communication
 */
export async function encryptPayload(payload: any, sharedSecret: string): Promise<{
  encrypted: string
  timestamp: number
  signature: string
}> {
  const timestamp = Date.now()
  const payloadString = JSON.stringify({ ...payload, timestamp })
  
  // Encrypt the payload
  const encrypted = await encryptData(payloadString, sharedSecret)
  
  // Create HMAC signature
  const encoder = new TextEncoder()
  const keyData = encoder.encode(sharedSecret)
  const key = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  
  const signatureBuffer = await crypto.subtle.sign(
    'HMAC',
    key,
    encoder.encode(encrypted)
  )
  
  const signature = Buffer.from(signatureBuffer).toString('base64')
  
  return {
    encrypted,
    timestamp,
    signature
  }
}

/**
 * Decrypt and verify API request/response payload
 */
export async function decryptPayload(
  encryptedPayload: { encrypted: string; timestamp: number; signature: string },
  sharedSecret: string,
  maxAge: number = 300000 // 5 minutes
): Promise<any> {
  // Check timestamp to prevent replay attacks
  const now = Date.now()
  if (now - encryptedPayload.timestamp > maxAge) {
    throw new Error('Payload expired')
  }
  
  // Verify signature
  const encoder = new TextEncoder()
  const keyData = encoder.encode(sharedSecret)
  const key = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['verify']
  )
  
  const signatureBuffer = Buffer.from(encryptedPayload.signature, 'base64')
  const isValid = await crypto.subtle.verify(
    'HMAC',
    key,
    signatureBuffer,
    encoder.encode(encryptedPayload.encrypted)
  )
  
  if (!isValid) {
    throw new Error('Invalid signature')
  }
  
  // Decrypt payload
  const decrypted = await decryptData(encryptedPayload.encrypted, sharedSecret)
  const payload = JSON.parse(decrypted)
  
  // Verify timestamp in payload matches
  if (payload.timestamp !== encryptedPayload.timestamp) {
    throw new Error('Timestamp mismatch')
  }
  
  return payload
}

/**
 * Encrypt file content
 * Useful for encrypting sensitive files before storage
 */
export async function encryptFile(fileContent: string, password: string): Promise<Blob> {
  const encrypted = await encryptData(fileContent, password)
  return new Blob([encrypted], { type: 'application/octet-stream' })
}

/**
 * Decrypt file content
 */
export async function decryptFile(encryptedBlob: Blob, password: string): Promise<string> {
  const encrypted = await encryptedBlob.text()
  return decryptData(encrypted, password)
}

/**
 * Secure key storage in browser
 * Stores encryption keys in IndexedDB (more secure than localStorage)
 */
export class SecureKeyStore {
  private dbName = 'secure-keys'
  private storeName = 'keys'
  private db: IDBDatabase | null = null

  async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1)
      
      request.onerror = () => reject(request.error)
      request.onsuccess = () => {
        this.db = request.result
        resolve()
      }
      
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName)
        }
      }
    })
  }

  async setKey(name: string, key: string): Promise<void> {
    if (!this.db) await this.init()
    
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.storeName], 'readwrite')
      const store = transaction.objectStore(this.storeName)
      const request = store.put(key, name)
      
      request.onerror = () => reject(request.error)
      request.onsuccess = () => resolve()
    })
  }

  async getKey(name: string): Promise<string | null> {
    if (!this.db) await this.init()
    
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.storeName], 'readonly')
      const store = transaction.objectStore(this.storeName)
      const request = store.get(name)
      
      request.onerror = () => reject(request.error)
      request.onsuccess = () => resolve(request.result || null)
    })
  }

  async deleteKey(name: string): Promise<void> {
    if (!this.db) await this.init()
    
    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.storeName], 'readwrite')
      const store = transaction.objectStore(this.storeName)
      const request = store.delete(name)
      
      request.onerror = () => reject(request.error)
      request.onsuccess = () => resolve()
    })
  }
}
