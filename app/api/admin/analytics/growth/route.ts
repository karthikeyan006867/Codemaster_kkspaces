import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Get growth analytics
export async function GET(request: Request) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const { searchParams } = new URL(request.url)
    const days = parseInt(searchParams.get('days') || '30')

    const users = await clerkClient.users.getUserList({ limit: 500 })
    
    const dailySignups: any = {}
    const now = new Date()
    
    for (let i = 0; i < days; i++) {
      const date = new Date(now)
      date.setDate(date.getDate() - i)
      const dateKey = date.toISOString().split('T')[0]
      dailySignups[dateKey] = 0
    }

    users.data.forEach(u => {
      const created = new Date(u.createdAt)
      const dateKey = created.toISOString().split('T')[0]
      if (dailySignups[dateKey] !== undefined) {
        dailySignups[dateKey]++
      }
    })

    const growth = Object.entries(dailySignups)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([date, signups]) => ({ date, signups }))

    return NextResponse.json({ 
      days,
      totalUsers: users.totalCount,
      growth
    })
  } catch (error) {
    console.error('Error getting growth:', error)
    return NextResponse.json({ error: 'Failed to get growth' }, { status: 500 })
  }
}
