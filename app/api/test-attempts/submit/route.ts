import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { getCourseTest } from '@/data/courseTests'

// POST - Submit test attempt
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { courseId, answers, failed, failReason, tabSwitches } = body

    if (!courseId) {
      return NextResponse.json({ error: 'courseId required' }, { status: 400 })
    }

    // Calculate score SERVER-SIDE to prevent cheating
    let score = 0
    let passed = false
    
    if (!failed) {
      const test = getCourseTest(courseId)
      if (!test) {
        return NextResponse.json({ error: 'Test not found' }, { status: 404 })
      }

      // Validate answers server-side
      let correct = 0
      test.questions.forEach((q, idx) => {
        if (answers[idx] === q.correctAnswer) {
          correct++
        }
      })
      
      score = Math.round((correct / test.questions.length) * 100)
      passed = score >= test.passingScore
    }

    // Get current user metadata
    const currentMetadata = user.publicMetadata as any || {}
    const testAttempts = currentMetadata.testAttempts || {}
    const courseAttempts = testAttempts[courseId] || {
      attempts: 0,
      passed: false,
      bestScore: 0,
      lastAttempt: null,
      history: []
    }

    // Create new attempt record (don't store actual answers for security)
    const attemptRecord = {
      timestamp: new Date().toISOString(),
      score: score,
      passed: passed,
      failed: failed || false,
      failReason: failReason || null,
      tabSwitches: tabSwitches || 0
    }

    // Update course attempts
    const updatedCourseAttempts = {
      attempts: courseAttempts.attempts + 1,
      passed: courseAttempts.passed || passed,
      bestScore: Math.max(courseAttempts.bestScore || 0, score),
      lastAttempt: attemptRecord.timestamp,
      history: [...(courseAttempts.history || []), attemptRecord]
    }

    // Update test attempts in metadata
    testAttempts[courseId] = updatedCourseAttempts

    // Update user metadata with Clerk v5 client
    const client = await clerkClient()
    await client.users.updateUserMetadata(user.id, {
      publicMetadata: {
        ...currentMetadata,
        testAttempts
      }
    })

    return NextResponse.json({ 
      success: true,
      score: score,
      passed: passed,
      attempts: updatedCourseAttempts.attempts,
      bestScore: updatedCourseAttempts.bestScore
    })
  } catch (error) {
    console.error('Error submitting test attempt:', error)
    return NextResponse.json({ error: 'Failed to submit attempt' }, { status: 500 })
  }
}
