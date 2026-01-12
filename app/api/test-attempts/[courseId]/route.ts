import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// GET - Get user's test attempts for a course
export async function GET(
  request: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const user = await currentUser()
    
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { courseId } = params
    const userMetadata = user.publicMetadata as any || {}
    const testAttempts = userMetadata.testAttempts || {}
    const courseAttempts = testAttempts[courseId] || {
      attempts: 0,
      passed: false,
      bestScore: 0,
      lastAttempt: null,
      history: []
    }

    return NextResponse.json(courseAttempts)
  } catch (error) {
    console.error('Error fetching test attempts:', error)
    return NextResponse.json({ error: 'Failed to fetch attempts' }, { status: 500 })
  }
}
