import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Send notification to user
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await request.json()
    const { userId, message, type = 'info' } = body

    if (!userId || !message) {
      return NextResponse.json({ error: 'userId and message required' }, { status: 400 })
    }

    const targetUser = await clerkClient.users.getUser(userId)
    const currentMetadata = targetUser.publicMetadata as any || {}
    const notifications = currentMetadata.notifications || []

    notifications.push({
      id: `notif-${Date.now()}`,
      message,
      type,
      sentBy: email,
      sentAt: new Date().toISOString(),
      read: false
    })

    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        ...currentMetadata,
        notifications
      }
    })

    return NextResponse.json({ 
      success: true,
      message: 'Notification sent'
    })
  } catch (error) {
    console.error('Error sending notification:', error)
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 })
  }
}
