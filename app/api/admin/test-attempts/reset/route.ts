import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Reset test attempts for a user
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await request.json()
    const { userId, courseId } = body

    if (!userId) {
      return NextResponse.json({ error: 'userId is required' }, { status: 400 })
    }

    const client = await clerkClient()
    const targetUser = await client.users.getUser(userId)
    const currentMetadata = targetUser.publicMetadata as any || {}
    const testAttempts = currentMetadata.testAttempts || {}

    if (courseId) {
      // Reset specific course
      delete testAttempts[courseId]
    } else {
      // Reset all test attempts
      currentMetadata.testAttempts = {}
    }

    await client.users.updateUserMetadata(userId, {
      publicMetadata: {
        ...currentMetadata,
        testAttempts: courseId ? testAttempts : {},
        testAttemptsResetAt: new Date().toISOString(),
        testAttemptsResetBy: email
      }
    })

    return NextResponse.json({ 
      success: true, 
      message: courseId ? `Reset test attempts for ${courseId}` : 'Reset all test attempts',
      courseId: courseId || 'all'
    })
  } catch (error) {
    console.error('Error resetting test attempts:', error)
    return NextResponse.json({ error: 'Failed to reset test attempts' }, { status: 500 })
  }
}
