import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Broadcast notification to all users
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await request.json()
    const { message, type = 'announcement' } = body

    if (!message) {
      return NextResponse.json({ error: 'message required' }, { status: 400 })
    }

    const users = await clerkClient.users.getUserList({ limit: 500 })
    
    const notification = {
      id: `broadcast-${Date.now()}`,
      message,
      type,
      sentBy: email,
      sentAt: new Date().toISOString(),
      read: false
    }

    let successCount = 0
    let failCount = 0

    for (const u of users.data) {
      try {
        const metadata = u.publicMetadata as any || {}
        const notifications = metadata.notifications || []
        notifications.push(notification)

        await clerkClient.users.updateUserMetadata(u.id, {
          publicMetadata: {
            ...metadata,
            notifications
          }
        })
        successCount++
      } catch (err) {
        failCount++
      }
    }

    return NextResponse.json({ 
      success: true,
      sent: successCount,
      failed: failCount,
      totalUsers: users.totalCount
    })
  } catch (error) {
    console.error('Error broadcasting notification:', error)
    return NextResponse.json({ error: 'Failed to broadcast notification' }, { status: 500 })
  }
}
