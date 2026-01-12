import { clerkClient } from '@clerk/nextjs/server'
import { withApiSecurity, getAuthenticatedUserId, createSuccessResponse, createErrorResponse } from '@/lib/apiSecurity'
import { sanitizeInput } from '@/lib/security'

export const GET = withApiSecurity(
  async (request) => {
    try {
      const userId = await getAuthenticatedUserId(request)

      // Fetch all users from Clerk with pagination limit
      const { data: clerkUsers } = await clerkClient.users.getUserList({
        limit: 500
      })

      // Transform users with their progress data
      const leaderboardUsers = clerkUsers.map(user => {
        const metadata = user.publicMetadata as any
        const completedLessons = metadata?.completedLessons || []
        const completedChallenges = metadata?.completedChallenges || []
        const points = Math.max(0, Number(metadata?.points) || 0)
        const streak = Math.max(0, Number(metadata?.streak) || 0)

        // Sanitize user display data
        const firstName = sanitizeInput(String(user.firstName || ''))
        const lastName = sanitizeInput(String(user.lastName || ''))
        const username = sanitizeInput(String(user.username || ''))

        return {
          id: user.id,
          name: `${firstName} ${lastName}`.trim() || username || 'Anonymous',
          email: user.emailAddresses[0]?.emailAddress || '',
          imageUrl: user.imageUrl,
          points: points,
          streak: streak,
          completedLessons: Array.isArray(completedLessons) ? completedLessons.length : 0,
          completedChallenges: Array.isArray(completedChallenges) ? completedChallenges.length : 0,
          accuracy: 92, // Can be calculated from challenge results if tracked
          languagesLearned: Array.isArray(completedLessons) 
            ? new Set(completedLessons.map((l: string) => String(l).split('-')[0])).size 
            : 0,
          weeklyPoints: Math.floor(points * 0.1), // Can be tracked separately if needed
          fastestSolve: 120, // Can be tracked from challenge completion times
          isCurrentUser: user.id === userId,
          lastActive: user.lastSignInAt 
            ? new Date(user.lastSignInAt).toISOString() 
            : new Date(user.createdAt).toISOString()
        }
      })

      // Sort by points (highest first)
      leaderboardUsers.sort((a, b) => b.points - a.points)

      // Add ranks and calculate rank changes (can be improved with historical data)
      const rankedUsers = leaderboardUsers.map((user, index) => ({
        ...user,
        rank: index + 1,
        level: Math.floor(user.points / 500),
        rankChange: 'same' as const, // Can be calculated from previous snapshot
        rankChangeValue: 0
      }))

      return createSuccessResponse({ users: rankedUsers })
    } catch (error) {
      console.error('Error fetching leaderboard:', error)
      return createErrorResponse('Failed to fetch leaderboard', 500)
    }
  },
  {
    requireAuth: false, // Leaderboard can be public
    rateLimit: { maxRequests: 100, windowMs: 60000 }, // 100 requests per minute
  }
)
