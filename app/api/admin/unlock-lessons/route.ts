import { clerkClient } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { userId, lessonIds, courseId } = body

    if (!userId || !lessonIds || !Array.isArray(lessonIds)) {
      return NextResponse.json(
        { error: 'Missing required fields: userId and lessonIds array' },
        { status: 400 }
      )
    }

    // Get current user metadata
    const user = await clerkClient.users.getUser(userId)
    const currentMetadata = user.publicMetadata as any || {}
    const currentCompletedLessons = currentMetadata.completedLessons || []
    
    // Merge new lessons with existing ones (avoid duplicates)
    const updatedLessons = Array.from(new Set([...currentCompletedLessons, ...lessonIds]))

    // Update user's public metadata in Clerk
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        ...currentMetadata,
        completedLessons: updatedLessons,
        lastUpdated: new Date().toISOString()
      }
    })

    return NextResponse.json({ 
      success: true, 
      message: `Unlocked ${lessonIds.length} lessons for user ${userId}`,
      unlockedLessons: lessonIds,
      totalCompletedLessons: updatedLessons.length
    })
  } catch (error) {
    console.error('Error unlocking lessons:', error)
    return NextResponse.json(
      { error: 'Failed to unlock lessons', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
