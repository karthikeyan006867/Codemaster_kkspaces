import { currentUser } from '@clerk/nextjs/server'
import { withApiSecurity, createSuccessResponse, createErrorResponse } from '@/lib/apiSecurity'
import { isAdmin } from '@/lib/admin'

export const GET = withApiSecurity(
  async () => {
    try {
      const user = await currentUser()
      
      if (!user) {
        return createErrorResponse('Unauthorized', 401, { isAdmin: false })
      }

      const email = user.emailAddresses[0]?.emailAddress
      const adminStatus = isAdmin(email)

      return createSuccessResponse({ 
        isAdmin: adminStatus,
        email: email,
        userId: user.id
      })
    } catch (error) {
      console.error('Error checking admin status:', error)
      return createErrorResponse('Failed to check admin status', 500, { isAdmin: false })
    }
  },
  {
    requireAuth: true,
    rateLimit: { maxRequests: 60, windowMs: 60000 }, // 60 requests per minute
  }
)
