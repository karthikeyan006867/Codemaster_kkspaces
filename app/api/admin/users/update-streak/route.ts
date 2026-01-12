import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Update user streak
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await request.json()
    const { userId, streak } = body

    if (!userId || streak === undefined) {
      return NextResponse.json({ error: 'userId and streak required' }, { status: 400 })
    }

    const targetUser = await clerkClient.users.getUser(userId)
    const currentMetadata = targetUser.publicMetadata as any || {}

    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        ...currentMetadata,
        streak: Math.max(0, streak),
        lastUpdated: new Date().toISOString(),
        adminModifiedBy: email,
      }
    })

    return NextResponse.json({ 
      success: true,
      newStreak: streak
    })
  } catch (error) {
    console.error('Error updating streak:', error)
    return NextResponse.json({ error: 'Failed to update streak' }, { status: 500 })
  }
}
