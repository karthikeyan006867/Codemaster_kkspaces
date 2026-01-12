import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Set custom metadata field
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await request.json()
    const { userId, key, value } = body

    if (!userId || !key) {
      return NextResponse.json({ error: 'userId and key required' }, { status: 400 })
    }

    const targetUser = await clerkClient.users.getUser(userId)
    const metadata = targetUser.publicMetadata as any || {}

    metadata[key] = value
    metadata[`${key}_updatedAt`] = new Date().toISOString()
    metadata[`${key}_updatedBy`] = email

    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: metadata
    })

    return NextResponse.json({ success: true, key, value })
  } catch (error) {
    console.error('Error setting custom field:', error)
    return NextResponse.json({ error: 'Failed to set custom field' }, { status: 500 })
  }
}
