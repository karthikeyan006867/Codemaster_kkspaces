import { currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'
import { courses } from '@/data/courses'

// Get all courses overview
export async function GET() {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const coursesData = courses.map(course => ({
      id: course.id,
      title: course.title,
      description: course.description,
      totalLessons: course.lessons.length,
      difficulty: course.difficulty,
      category: course.category,
      duration: course.duration,
      icon: course.icon,
      color: course.color
    }))

    return NextResponse.json({
      totalCourses: courses.length,
      courses: coursesData
    })
  } catch (error) {
    console.error('Error getting courses:', error)
    return NextResponse.json({ error: 'Failed to get courses' }, { status: 500 })
  }
}
