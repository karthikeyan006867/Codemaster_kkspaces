import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Set user role
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await request.json()
    const { userId, role } = body

    if (!userId || !role) {
      return NextResponse.json({ error: 'userId and role required' }, { status: 400 })
    }

    const targetUser = await clerkClient.users.getUser(userId)
    const metadata = targetUser.publicMetadata as any || {}

    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        ...metadata,
        role,
        roleUpdatedAt: new Date().toISOString(),
        roleUpdatedBy: email
      }
    })

    return NextResponse.json({ success: true, userId, role })
  } catch (error) {
    console.error('Error setting role:', error)
    return NextResponse.json({ error: 'Failed to set role' }, { status: 500 })
  }
}
