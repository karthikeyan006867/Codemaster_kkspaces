import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Create custom tags for users
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await request.json()
    const { userId, tags } = body

    if (!userId || !tags || !Array.isArray(tags)) {
      return NextResponse.json({ error: 'userId and tags array required' }, { status: 400 })
    }

    const targetUser = await clerkClient.users.getUser(userId)
    const metadata = targetUser.publicMetadata as any || {}
    const currentTags = metadata.tags || []

    const updatedTags = Array.from(new Set([...currentTags, ...tags]))

    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        ...metadata,
        tags: updatedTags,
        tagsUpdatedAt: new Date().toISOString(),
        tagsUpdatedBy: email
      }
    })

    return NextResponse.json({ success: true, tags: updatedTags })
  } catch (error) {
    console.error('Error adding tags:', error)
    return NextResponse.json({ error: 'Failed to add tags' }, { status: 500 })
  }
}
