import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Get retention analytics
export async function GET() {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const users = await clerkClient.users.getUserList({ limit: 500 })
    
    const now = new Date()
    const cohorts: any = {
      day1: { total: 0, returned: 0 },
      day7: { total: 0, returned: 0 },
      day30: { total: 0, returned: 0 }
    }

    users.data.forEach(u => {
      const created = new Date(u.createdAt)
      const lastSignIn = u.lastSignInAt ? new Date(u.lastSignInAt) : null
      const daysSinceJoin = (now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24)

      if (daysSinceJoin >= 1) {
        cohorts.day1.total++
        if (lastSignIn && lastSignIn > created) cohorts.day1.returned++
      }

      if (daysSinceJoin >= 7) {
        cohorts.day7.total++
        const day7 = new Date(created.getTime() + 7 * 24 * 60 * 60 * 1000)
        if (lastSignIn && lastSignIn >= day7) cohorts.day7.returned++
      }

      if (daysSinceJoin >= 30) {
        cohorts.day30.total++
        const day30 = new Date(created.getTime() + 30 * 24 * 60 * 60 * 1000)
        if (lastSignIn && lastSignIn >= day30) cohorts.day30.returned++
      }
    })

    return NextResponse.json({
      retention: {
        day1: ((cohorts.day1.returned / cohorts.day1.total) * 100).toFixed(2) + '%',
        day7: ((cohorts.day7.returned / cohorts.day7.total) * 100).toFixed(2) + '%',
        day30: ((cohorts.day30.returned / cohorts.day30.total) * 100).toFixed(2) + '%'
      },
      cohorts
    })
  } catch (error) {
    console.error('Error getting retention:', error)
    return NextResponse.json({ error: 'Failed to get retention' }, { status: 500 })
  }
}
