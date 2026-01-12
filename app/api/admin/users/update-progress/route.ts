import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Update user progress (lessons, achievements, points, etc.)
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await request.json()
    const { userId, completedLessons, achievements, points, streak, courses } = body

    if (!userId) {
      return NextResponse.json({ error: 'userId is required' }, { status: 400 })
    }

    const targetUser = await clerkClient.users.getUser(userId)
    const currentMetadata = targetUser.publicMetadata as any || {}

    const updates: any = { ...currentMetadata }
    if (completedLessons !== undefined) updates.completedLessons = completedLessons
    if (achievements !== undefined) updates.achievements = achievements
    if (points !== undefined) updates.points = points
    if (streak !== undefined) updates.streak = streak
    if (courses !== undefined) updates.courses = courses
    updates.lastUpdated = new Date().toISOString()
    updates.adminModified = true
    updates.adminModifiedBy = email
    updates.adminModifiedAt = new Date().toISOString()

    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: updates
    })

    return NextResponse.json({ 
      success: true, 
      message: 'User progress updated successfully',
      updates
    })
  } catch (error) {
    console.error('Error updating user progress:', error)
    return NextResponse.json({ error: 'Failed to update user progress' }, { status: 500 })
  }
}
