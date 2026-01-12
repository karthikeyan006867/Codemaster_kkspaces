import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Get platform analytics and statistics
export async function GET() {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const users = await clerkClient.users.getUserList({ limit: 500 })
    
    let totalLessons = 0
    let totalPoints = 0
    let totalAchievements = 0
    let activeUsers = 0
    const courseStats: any = {}
    const lessonCompletionMap: any = {}

    const now = new Date()
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)

    users.data.forEach(u => {
      const metadata = u.publicMetadata as any
      
      if (metadata?.completedLessons) {
        totalLessons += metadata.completedLessons.length
        metadata.completedLessons.forEach((lesson: string) => {
          lessonCompletionMap[lesson] = (lessonCompletionMap[lesson] || 0) + 1
        })
      }
      
      if (metadata?.points) totalPoints += metadata.points
      if (metadata?.achievements) totalAchievements += metadata.achievements.length
      
      if (u.lastSignInAt && new Date(u.lastSignInAt) > thirtyDaysAgo) {
        activeUsers++
      }

      // Course-specific stats
      if (metadata?.courses) {
        Object.entries(metadata.courses).forEach(([courseId, progress]: any) => {
          if (!courseStats[courseId]) {
            courseStats[courseId] = { enrolled: 0, totalProgress: 0 }
          }
          courseStats[courseId].enrolled++
          courseStats[courseId].totalProgress += progress.percentage || 0
        })
      }
    })

    // Most popular lessons
    const popularLessons = Object.entries(lessonCompletionMap)
      .sort((a: any, b: any) => b[1] - a[1])
      .slice(0, 10)
      .map(([lesson, count]) => ({ lesson, completions: count }))

    return NextResponse.json({
      totalUsers: users.totalCount,
      activeUsers,
      totalLessonsCompleted: totalLessons,
      totalPoints,
      totalAchievements,
      averageLessonsPerUser: (totalLessons / users.totalCount).toFixed(2),
      averagePointsPerUser: (totalPoints / users.totalCount).toFixed(2),
      courseStats,
      popularLessons,
      generatedAt: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error getting analytics:', error)
    return NextResponse.json({ error: 'Failed to get analytics' }, { status: 500 })
  }
}
