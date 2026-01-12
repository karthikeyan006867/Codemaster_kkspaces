import { clerkClient } from '@clerk/nextjs/server'
import { withApiSecurity, getAuthenticatedUserId, validateProgressData, createSuccessResponse, createErrorResponse } from '@/lib/apiSecurity'
import { sanitizeInput } from '@/lib/security'

export const POST = withApiSecurity(
  async (request) => {
    try {
      const userId = await getAuthenticatedUserId(request)
      const body = (request as any).sanitizedBody

      // Validate progress data structure
      const validation = validateProgressData(body)
      if (!validation.valid) {
        return createErrorResponse(validation.errors.join(', '), 400)
      }

      const { 
        completedLessons, 
        completedChallenges,
        achievements, 
        points, 
        streak,
        longestStreak,
        timeSpent,
        lastStudyDate 
      } = body

      // Sanitize string arrays
      const safeCompletedLessons = Array.isArray(completedLessons) 
        ? completedLessons.map(l => sanitizeInput(String(l)))
        : []
      const safeCompletedChallenges = Array.isArray(completedChallenges)
        ? completedChallenges.map(c => sanitizeInput(String(c)))
        : []
      const safeAchievements = Array.isArray(achievements)
        ? achievements.map(a => sanitizeInput(String(a)))
        : []

      // Validate numeric values
      const safePoints = Math.max(0, Math.min(Number(points) || 0, 1000000))
      const safeStreak = Math.max(0, Math.min(Number(streak) || 0, 3650))
      const safeLongestStreak = Math.max(0, Math.min(Number(longestStreak) || 0, 3650))
      const safeTimeSpent = Math.max(0, Math.min(Number(timeSpent) || 0, 100000000))

      // Update user's public metadata in Clerk with validated data
      await clerkClient.users.updateUserMetadata(userId, {
        publicMetadata: {
          completedLessons: safeCompletedLessons,
          completedChallenges: safeCompletedChallenges,
          achievements: safeAchievements,
          points: safePoints,
          streak: safeStreak,
          longestStreak: safeLongestStreak,
          timeSpent: safeTimeSpent,
          lastStudyDate: sanitizeInput(String(lastStudyDate || '')),
          lastUpdated: new Date().toISOString()
        }
      })

      return createSuccessResponse({ success: true })
    } catch (error) {
      console.error('Error syncing progress:', error)
      return createErrorResponse('Failed to sync progress', 500)
    }
  },
  {
    requireAuth: true,
    rateLimit: { maxRequests: 30, windowMs: 60000 }, // 30 requests per minute
    validateBody: true,
  }
)
