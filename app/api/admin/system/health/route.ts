import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Get system health and metrics
export async function GET() {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const users = await clerkClient.users.getUserList({ limit: 500 })
    
    const now = new Date()
    const dayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000)
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
    const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)

    let activeToday = 0
    let activeWeek = 0
    let activeMonth = 0
    let newUsersToday = 0
    let newUsersWeek = 0

    users.data.forEach(u => {
      const lastSignIn = u.lastSignInAt ? new Date(u.lastSignInAt) : null
      const created = new Date(u.createdAt)

      if (lastSignIn && lastSignIn > dayAgo) activeToday++
      if (lastSignIn && lastSignIn > weekAgo) activeWeek++
      if (lastSignIn && lastSignIn > monthAgo) activeMonth++
      
      if (created > dayAgo) newUsersToday++
      if (created > weekAgo) newUsersWeek++
    })

    return NextResponse.json({
      timestamp: now.toISOString(),
      totalUsers: users.totalCount,
      activeUsers: {
        today: activeToday,
        thisWeek: activeWeek,
        thisMonth: activeMonth
      },
      newUsers: {
        today: newUsersToday,
        thisWeek: newUsersWeek
      },
      retention: {
        daily: ((activeToday / users.totalCount) * 100).toFixed(2),
        weekly: ((activeWeek / users.totalCount) * 100).toFixed(2),
        monthly: ((activeMonth / users.totalCount) * 100).toFixed(2)
      }
    })
  } catch (error) {
    console.error('Error getting system health:', error)
    return NextResponse.json({ error: 'Failed to get system health' }, { status: 500 })
  }
}
