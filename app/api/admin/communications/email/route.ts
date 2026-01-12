import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Send email to users (bulk or individual)
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await request.json()
    const { userIds, subject, message, sendToAll = false } = body

    if (!subject || !message) {
      return NextResponse.json({ error: 'subject and message required' }, { status: 400 })
    }

    let targetUserIds = userIds || []

    if (sendToAll) {
      const users = await clerkClient.users.getUserList({ limit: 500 })
      targetUserIds = users.data.map(u => u.id)
    }

    // In production, integrate with email service
    const emailLog = {
      sentBy: email,
      sentAt: new Date().toISOString(),
      subject,
      message,
      recipients: targetUserIds.length
    }

    return NextResponse.json({
      success: true,
      sent: targetUserIds.length,
      emailLog
    })
  } catch (error) {
    console.error('Error sending emails:', error)
    return NextResponse.json({ error: 'Failed to send emails' }, { status: 500 })
  }
}
