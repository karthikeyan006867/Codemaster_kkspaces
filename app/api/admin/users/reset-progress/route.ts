import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Reset user progress
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await request.json()
    const { userId, resetType } = body

    if (!userId) {
      return NextResponse.json({ error: 'userId is required' }, { status: 400 })
    }

    const targetUser = await clerkClient.users.getUser(userId)
    const currentMetadata = targetUser.publicMetadata as any || {}

    let updates: any = { ...currentMetadata }

    switch (resetType) {
      case 'all':
        updates = {
          completedLessons: [],
          achievements: [],
          points: 0,
          streak: 0,
          completedChallenges: [],
          courses: {},
          resetAt: new Date().toISOString(),
          resetBy: email
        }
        break
      case 'lessons':
        updates.completedLessons = []
        break
      case 'achievements':
        updates.achievements = []
        break
      case 'points':
        updates.points = 0
        break
      case 'streak':
        updates.streak = 0
        break
      default:
        return NextResponse.json({ error: 'Invalid resetType' }, { status: 400 })
    }

    updates.lastUpdated = new Date().toISOString()
    updates.adminModifiedBy = email
    updates.adminModifiedAt = new Date().toISOString()

    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: updates
    })

    return NextResponse.json({ 
      success: true, 
      message: `Successfully reset ${resetType}`,
      resetType
    })
  } catch (error) {
    console.error('Error resetting progress:', error)
    return NextResponse.json({ error: 'Failed to reset progress' }, { status: 500 })
  }
}
