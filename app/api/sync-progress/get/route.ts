import { auth, clerkClient } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Fetch fresh user data from Clerk
    const user = await clerkClient.users.getUser(userId)
    const metadata = user.publicMetadata || {}

    return NextResponse.json({
      success: true,
      progress: {
        completedLessons: metadata.completedLessons || [],
        completedChallenges: metadata.completedChallenges || [],
        achievements: metadata.achievements || [],
        points: metadata.points || 0,
        streak: metadata.streak || 0,
        longestStreak: metadata.longestStreak || 0,
        timeSpent: metadata.timeSpent || 0,
        lastStudyDate: metadata.lastStudyDate || '',
      }
    })
  } catch (error) {
    console.error('Error fetching progress:', error)
    return NextResponse.json({ error: 'Failed to fetch progress' }, { status: 500 })
  }
}
