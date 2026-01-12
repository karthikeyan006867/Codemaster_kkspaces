import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Get completion analytics
export async function GET() {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const users = await clerkClient.users.getUserList({ limit: 500 })
    
    const completionRanges = {
      '0-10': 0,
      '11-25': 0,
      '26-50': 0,
      '51-75': 0,
      '76-99': 0,
      '100+': 0
    }

    let totalLessons = 0

    users.data.forEach(u => {
      const metadata = u.publicMetadata as any
      const lessons = (metadata?.completedLessons || []).length
      totalLessons += lessons

      if (lessons === 0) completionRanges['0-10']++
      else if (lessons <= 10) completionRanges['0-10']++
      else if (lessons <= 25) completionRanges['11-25']++
      else if (lessons <= 50) completionRanges['26-50']++
      else if (lessons <= 75) completionRanges['51-75']++
      else if (lessons <= 99) completionRanges['76-99']++
      else completionRanges['100+']++
    })

    return NextResponse.json({
      averageLessons: (totalLessons / users.totalCount).toFixed(2),
      totalLessons,
      distribution: completionRanges
    })
  } catch (error) {
    console.error('Error getting completion analytics:', error)
    return NextResponse.json({ error: 'Failed to get completion analytics' }, { status: 500 })
  }
}
