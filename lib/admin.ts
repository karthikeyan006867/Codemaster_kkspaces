// Admin configuration and utilities

export const ADMIN_EMAILS = [
  'kaarthii009.g@gmail.com',
  'karthii009.g@gmail.com',
]

export const isAdmin = (email: string | null | undefined): boolean => {
  if (!email) return false
  return ADMIN_EMAILS.includes(email.toLowerCase())
}

export const checkAdminAccess = (email: string | null | undefined) => {
  if (!isAdmin(email)) {
    throw new Error('Unauthorized: Admin access required')
  }
}
