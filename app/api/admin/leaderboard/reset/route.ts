import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Clear leaderboard or reset positions
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await request.json()
    const { resetType = 'points' } = body

    const users = await clerkClient.users.getUserList({ limit: 500 })
    
    let successCount = 0

    for (const u of users.data) {
      try {
        const metadata = u.publicMetadata as any || {}
        
        if (resetType === 'points') {
          metadata.points = 0
        } else if (resetType === 'all') {
          metadata.points = 0
          metadata.completedLessons = []
          metadata.achievements = []
          metadata.streak = 0
        }

        metadata.leaderboardReset = new Date().toISOString()
        metadata.leaderboardResetBy = email

        await clerkClient.users.updateUserMetadata(u.id, {
          publicMetadata: metadata
        })
        successCount++
      } catch (err) {
        console.error(`Failed to reset user ${u.id}:`, err)
      }
    }

    return NextResponse.json({ 
      success: true,
      reset: successCount,
      resetType
    })
  } catch (error) {
    console.error('Error resetting leaderboard:', error)
    return NextResponse.json({ error: 'Failed to reset leaderboard' }, { status: 500 })
  }
}
