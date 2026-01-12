import { clerkClient } from '@clerk/nextjs/server'
import { withApiSecurity, requireAdmin, createSuccessResponse, createErrorResponse } from '@/lib/apiSecurity'
import { sanitizeInput } from '@/lib/security'

export const GET = withApiSecurity(
  async (request) => {
    try {
      // Check admin authorization
      const adminError = await requireAdmin(request)
      if (adminError) return adminError

      // Fetch all users from Clerk using the function call (not singleton)
      const client = clerkClient()
      const { data: clerkUsers } = await client.users.getUserList({
        limit: 500
      })

      // Combine with progress data
      const usersWithProgress = clerkUsers.map(user => {
        // Try to get progress from user's public metadata or return defaults
        const metadata = user.publicMetadata as any
        
        // Convert timestamps to ISO strings safely
        const lastSignInDate = user.lastSignInAt 
          ? new Date(user.lastSignInAt).toISOString() 
          : null
        const createdDate = user.createdAt 
          ? new Date(user.createdAt).toISOString() 
          : new Date().toISOString()
        
        // Sanitize user display data
        const firstName = sanitizeInput(String(user.firstName || ''))
        const lastName = sanitizeInput(String(user.lastName || ''))
        const email = user.emailAddresses[0]?.emailAddress || 'No email'
        
        return {
          userId: user.id,
          email: email,
          name: `${firstName} ${lastName}`.trim() || 'Anonymous',
          imageUrl: user.imageUrl,
          completedLessons: Array.isArray(metadata?.completedLessons) 
            ? metadata.completedLessons 
            : [],
          achievements: Array.isArray(metadata?.achievements)
            ? metadata.achievements
            : [],
          points: Math.max(0, Number(metadata?.points) || 0),
          streak: Math.max(0, Number(metadata?.streak) || 0),
          lastActive: lastSignInDate || createdDate,
          createdAt: createdDate
        }
      })

      return createSuccessResponse({ users: usersWithProgress })
    } catch (error) {
      console.error('Error fetching users:', error)
      return createErrorResponse('Failed to fetch users', 500)
    }
  },
  {
    requireAuth: true,
    rateLimit: { maxRequests: 30, windowMs: 60000 }, // 30 requests per minute for admin
  }
)
