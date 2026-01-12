import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Unenroll users from courses
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await request.json()
    const { userId, courseId } = body

    if (!userId || !courseId) {
      return NextResponse.json({ error: 'userId and courseId required' }, { status: 400 })
    }

    const targetUser = await clerkClient.users.getUser(userId)
    const metadata = targetUser.publicMetadata as any || {}
    const courses = metadata.courses || {}

    delete courses[courseId]

    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        ...metadata,
        courses
      }
    })

    return NextResponse.json({ success: true, userId, courseId })
  } catch (error) {
    console.error('Error unenrolling user:', error)
    return NextResponse.json({ error: 'Failed to unenroll user' }, { status: 500 })
  }
}
