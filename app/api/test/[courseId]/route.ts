import { NextResponse } from 'next/server'
import { getCourseTest } from '@/data/courseTests'

// GET - Get test questions WITHOUT answers (for client-side display)
export async function GET(
  request: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const courseId = params.courseId
    const test = getCourseTest(courseId)
    
    if (!test) {
      return NextResponse.json({ error: 'Test not found' }, { status: 404 })
    }

    // Remove correct answers and explanations from questions
    const safeQuestions = test.questions.map(q => ({
      id: q.id,
      question: q.question,
      options: q.options,
      difficulty: q.difficulty
    }))

    return NextResponse.json({
      courseId: test.courseId,
      courseName: test.courseName,
      passingScore: test.passingScore,
      timeLimit: test.timeLimit,
      maxAttempts: test.maxAttempts,
      questions: safeQuestions
    })
  } catch (error) {
    console.error('Error fetching test:', error)
    return NextResponse.json({ error: 'Failed to fetch test' }, { status: 500 })
  }
}
