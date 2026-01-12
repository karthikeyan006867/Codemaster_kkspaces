import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Get user engagement metrics
export async function GET(request: Request) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json({ error: 'userId required' }, { status: 400 })
    }

    const targetUser = await clerkClient.users.getUser(userId)
    const metadata = targetUser.publicMetadata as any || {}

    const metrics = {
      userId,
      email: targetUser.emailAddresses[0]?.emailAddress,
      totalLessons: (metadata.completedLessons || []).length,
      totalPoints: metadata.points || 0,
      currentStreak: metadata.streak || 0,
      longestStreak: metadata.longestStreak || 0,
      achievements: (metadata.achievements || []).length,
      timeSpent: metadata.timeSpent || 0,
      lastActive: targetUser.lastSignInAt,
      joinedAt: targetUser.createdAt,
      coursesEnrolled: Object.keys(metadata.courses || {}).length
    }

    return NextResponse.json({ metrics })
  } catch (error) {
    console.error('Error getting engagement:', error)
    return NextResponse.json({ error: 'Failed to get engagement' }, { status: 500 })
  }
}
