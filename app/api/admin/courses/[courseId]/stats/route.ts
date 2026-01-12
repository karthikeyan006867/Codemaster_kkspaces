import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Get course statistics
export async function GET(
  request: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const users = await clerkClient.users.getUserList({ limit: 500 })
    const courseId = params.courseId

    let enrolled = 0
    let totalProgress = 0
    const lessonCompletions: any = {}

    users.data.forEach(u => {
      const metadata = u.publicMetadata as any
      const completedLessons = metadata?.completedLessons || []
      
      const courseLessons = completedLessons.filter((l: string) => l.startsWith(`${courseId}-`))
      
      if (courseLessons.length > 0) {
        enrolled++
        courseLessons.forEach((lesson: string) => {
          lessonCompletions[lesson] = (lessonCompletions[lesson] || 0) + 1
        })
      }

      if (metadata?.courses && metadata.courses[courseId]) {
        totalProgress += metadata.courses[courseId].percentage || 0
      }
    })

    const averageProgress = enrolled > 0 ? totalProgress / enrolled : 0

    return NextResponse.json({
      courseId,
      enrolled,
      averageProgress: averageProgress.toFixed(2),
      lessonCompletions,
      totalUsers: users.totalCount,
      enrollmentRate: ((enrolled / users.totalCount) * 100).toFixed(2)
    })
  } catch (error) {
    console.error('Error getting course stats:', error)
    return NextResponse.json({ error: 'Failed to get course stats' }, { status: 500 })
  }
}
