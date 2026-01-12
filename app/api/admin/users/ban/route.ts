import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Ban/suspend user
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await request.json()
    const { userId, banned, reason } = body

    if (!userId) {
      return NextResponse.json({ error: 'userId required' }, { status: 400 })
    }

    await clerkClient.users.updateUser(userId, {
      publicMetadata: {
        banned: !!banned,
        bannedReason: reason || '',
        bannedAt: banned ? new Date().toISOString() : null,
        bannedBy: banned ? email : null,
      }
    })

    return NextResponse.json({ 
      success: true,
      userId,
      banned,
      reason
    })
  } catch (error) {
    console.error('Error banning user:', error)
    return NextResponse.json({ error: 'Failed to ban user' }, { status: 500 })
  }
}
