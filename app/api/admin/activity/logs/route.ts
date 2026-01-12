import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Get user activity logs
export async function GET(request: Request) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const days = parseInt(searchParams.get('days') || '30')

    const users = userId 
      ? [await clerkClient.users.getUser(userId)]
      : (await clerkClient.users.getUserList({ limit: 100 })).data

    const activities = []
    const cutoffDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000)

    for (const u of users) {
      const metadata = u.publicMetadata as any
      
      if (u.lastSignInAt && new Date(u.lastSignInAt) > cutoffDate) {
        activities.push({
          userId: u.id,
          email: u.emailAddresses[0]?.emailAddress,
          type: 'sign_in',
          timestamp: u.lastSignInAt,
        })
      }

      if (metadata?.lastUpdated && new Date(metadata.lastUpdated) > cutoffDate) {
        activities.push({
          userId: u.id,
          email: u.emailAddresses[0]?.emailAddress,
          type: 'progress_update',
          timestamp: metadata.lastUpdated,
        })
      }
    }

    activities.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

    return NextResponse.json({
      activities: activities.slice(0, 100),
      total: activities.length,
      days
    })
  } catch (error) {
    console.error('Error getting activity:', error)
    return NextResponse.json({ error: 'Failed to get activity' }, { status: 500 })
  }
}
