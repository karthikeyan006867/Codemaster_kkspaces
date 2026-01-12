import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Add lessons to user's completed list
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await request.json()
    const { userId, lessonIds, courseId } = body

    if (!userId || !lessonIds || !Array.isArray(lessonIds)) {
      return NextResponse.json({ error: 'userId and lessonIds array required' }, { status: 400 })
    }

    const targetUser = await clerkClient.users.getUser(userId)
    const currentMetadata = targetUser.publicMetadata as any || {}
    const currentLessons = currentMetadata.completedLessons || []
    
    const updatedLessons = Array.from(new Set([...currentLessons, ...lessonIds]))

    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        ...currentMetadata,
        completedLessons: updatedLessons,
        lastUpdated: new Date().toISOString(),
        adminModifiedBy: email,
        adminModifiedAt: new Date().toISOString()
      }
    })

    return NextResponse.json({ 
      success: true, 
      added: lessonIds.length,
      total: updatedLessons.length,
      lessonIds
    })
  } catch (error) {
    console.error('Error adding lessons:', error)
    return NextResponse.json({ error: 'Failed to add lessons' }, { status: 500 })
  }
}
