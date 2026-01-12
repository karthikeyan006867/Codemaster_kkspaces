import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Get leaderboard data
export async function GET() {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const users = await clerkClient.users.getUserList({ limit: 500 })
    
    const leaderboard = users.data
      .map(u => ({
        userId: u.id,
        email: u.emailAddresses[0]?.emailAddress,
        firstName: u.firstName,
        lastName: u.lastName,
        points: (u.publicMetadata as any)?.points || 0,
        completedLessons: ((u.publicMetadata as any)?.completedLessons || []).length,
        achievements: ((u.publicMetadata as any)?.achievements || []).length,
        streak: (u.publicMetadata as any)?.streak || 0,
      }))
      .sort((a, b) => b.points - a.points)

    return NextResponse.json({
      leaderboard: leaderboard.slice(0, 100),
      total: users.totalCount
    })
  } catch (error) {
    console.error('Error getting leaderboard:', error)
    return NextResponse.json({ error: 'Failed to get leaderboard' }, { status: 500 })
  }
}
