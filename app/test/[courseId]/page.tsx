'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Clock, AlertTriangle, CheckCircle, XCircle, Award, Eye, EyeOff } from 'lucide-react'
import { courses } from '@/data/courses'

// Define CourseTest type for client-side (without correctAnswer field)
interface TestQuestion {
  id: string
  question: string
  options: string[]
  difficulty: 'Easy' | 'Medium' | 'Hard'
}

interface CourseTest {
  courseId: string
  courseName: string
  passingScore: number
  timeLimit: number
  maxAttempts: number
  questions: TestQuestion[]
}

export default function CertificationTestPage() {
  const params = useParams()
  const router = useRouter()
  const { user } = useUser()
  const courseId = params.courseId as string

  const [test, setTest] = useState<CourseTest | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [testStarted, setTestStarted] = useState(false)
  const [testCompleted, setTestCompleted] = useState(false)
  const [score, setScore] = useState(0)
  const [attemptsLeft, setAttemptsLeft] = useState(3)
  const [tabSwitchCount, setTabSwitchCount] = useState(0)
  const [testFailed, setTestFailed] = useState(false)
  const [failReason, setFailReason] = useState('')
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const [allLessonsCompleted, setAllLessonsCompleted] = useState(false)
  const [projectCompleted, setProjectCompleted] = useState(false)

  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const visibilityRef = useRef(true)

  // Load test data and user attempts
  useEffect(() => {
    const loadTestData = async () => {
      // Fetch test questions from API (without correct answers)
      let loadedTest: CourseTest | null = null
      try {
        const response = await fetch(`/api/test/${courseId}`)
        const courseTest = await response.json()
        
        if (!courseTest || courseTest.error) {
          router.push('/certifications')
          return
        }
        
        loadedTest = courseTest
        setTest(courseTest)
        setTimeRemaining(courseTest.timeLimit * 60) // Convert to seconds
      } catch (error) {
        console.error('Failed to load test:', error)
        router.push('/certifications')
        return
      }
      
      // Check if user is admin and if all lessons are completed
      if (user) {
        // Check admin status
        try {
          const adminResponse = await fetch('/api/admin/check')
          const adminData = await adminResponse.json()
          setIsAdmin(adminData.isAdmin)
        } catch (error) {
          console.error('Failed to check admin status:', error)
        }

        // Check lesson and project completion
        const course = courses.find(c => c.id === courseId)
        if (course) {
          const metadata = user.publicMetadata as any || {}
          const completedLessons = metadata.completedLessons || []
          
          // Separate project lessons from regular lessons
          const regularLessons = course.lessons.filter(l => !l.isProject)
          const projectLessons = course.lessons.filter(l => l.isProject)
          
          // Check if all regular lessons are completed
          const allRegularCompleted = regularLessons.every(lesson => completedLessons.includes(lesson.id))
          setAllLessonsCompleted(allRegularCompleted)
          
          // Check if project is completed
          const projectComplete = projectLessons.length === 0 || projectLessons.every(lesson => completedLessons.includes(lesson.id))
          setProjectCompleted(projectComplete)
        }

        // Fetch user's attempt history
        if (loadedTest) {
          try {
            const response = await fetch(`/api/test-attempts/${courseId}`)
            const data = await response.json()
            setAttemptsLeft(loadedTest.maxAttempts - (data.attempts || 0))
          } catch (error) {
            console.error('Failed to load attempts:', error)
          }
        }
      }
      
      setLoading(false)
    }

    loadTestData()
  }, [courseId, user, router])

  const handleAnswer = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[questionIndex] = answerIndex
    setAnswers(newAnswers)
  }

  const handleTestEnd = useCallback(async (failed = false) => {
    if (timerRef.current) clearInterval(timerRef.current)
    
    setTestCompleted(true)
    
    if (!failed && test) {
      // Submit answers to server for validation
      try {
        const response = await fetch('/api/test-attempts/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            courseId,
            answers,
            tabSwitches: tabSwitchCount
          })
        })
        
        const result = await response.json()
        
        if (result.success) {
          setScore(result.score)
          // Score is calculated server-side, no client-side calculation
        }
      } catch (error) {
        console.error('Failed to save test result:', error)
      }
    } else {
      // Record failed attempt
      try {
        await fetch('/api/test-attempts/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            courseId,
            failed: true,
            failReason,
            tabSwitches: tabSwitchCount,
            answers: []
          })
        })
      } catch (error) {
        console.error('Failed to save failed attempt:', error)
      }
    }
  }, [test, answers, courseId, tabSwitchCount, failReason])

  // Tab visibility detection - FAIL test if user switches tabs
  useEffect(() => {
    if (!testStarted || testCompleted || testFailed) return

    const handleVisibilityChange = () => {
      if (document.hidden) {
        visibilityRef.current = false
        setTabSwitchCount(prev => prev + 1)
        
        // Auto-fail on tab switch
        setTestFailed(true)
        const reason = 'Test terminated: You switched tabs or minimized the window'
        setFailReason(reason)
        handleTestEnd(true)
      }
    }

    const handleBlur = () => {
      if (testStarted && !testCompleted && !testFailed) {
        visibilityRef.current = false
        setTabSwitchCount(prev => prev + 1)
        setTestFailed(true)
        const reason = 'Test terminated: Window lost focus'
        setFailReason(reason)
        handleTestEnd(true)
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('blur', handleBlur)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('blur', handleBlur)
    }
  }, [testStarted, testCompleted, testFailed, handleTestEnd])

  // Timer countdown
  useEffect(() => {
    if (!testStarted || testCompleted || testFailed) return

    timerRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          setTestFailed(true)
          setFailReason('Time expired')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [testStarted, testCompleted, testFailed])

  // Prevent right-click and copy-paste
  useEffect(() => {
    const preventCheating = (e: Event) => {
      if (testStarted && !testCompleted) {
        e.preventDefault()
        return false
      }
    }

    document.addEventListener('contextmenu', preventCheating)
    document.addEventListener('copy', preventCheating)

    return () => {
      document.removeEventListener('contextmenu', preventCheating)
      document.removeEventListener('copy', preventCheating)
    }
  }, [testStarted, testCompleted])

  const startTest = () => {
    if (attemptsLeft <= 0) {
      alert('You have exhausted all attempts for this test')
      return
    }
    
    // Request fullscreen (optional but recommended)
    const elem = document.documentElement
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch(err => console.log('Fullscreen denied'))
    }
    
    setTestStarted(true)
    setAnswers(new Array(test!.questions.length).fill(-1))
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950">
        <Navbar />
        <Sidebar />
        <main className="ml-0 md:ml-64 pt-16 transition-all duration-300">
          <div className="flex items-center justify-center h-screen">
            <div className="text-white text-xl">Loading test...</div>
          </div>
        </main>
      </div>
    )
  }

  if (!test) {
    return (
      <div className="min-h-screen bg-gray-950">
        <Navbar />
        <Sidebar />
        <main className="ml-0 md:ml-64 pt-16 transition-all duration-300">
          <div className="flex items-center justify-center h-screen">
            <div className="text-white text-xl">Test not found</div>
          </div>
        </main>
      </div>
    )
  }

  if (testFailed) {
    return (
      <div className="min-h-screen bg-gray-950">
        <Navbar />
        <Sidebar />
        <main className="ml-0 md:ml-64 pt-16 pb-20 transition-all duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="card-gradient border-2 border-red-500 rounded-2xl p-12 text-center">
              <XCircle className="h-24 w-24 text-red-500 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-white mb-4">Test Failed</h1>
              <p className="text-xl text-gray-300 mb-6">{failReason}</p>
              <div className="bg-gray-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Violation Details:</h3>
                <div className="space-y-2 text-gray-300">
                  <p>• Tab switches detected: {tabSwitchCount}</p>
                  <p>• Attempts remaining: {attemptsLeft - 1}</p>
                  <p>• Test integrity: Compromised</p>
                </div>
              </div>
              <button
                onClick={() => router.push(`/courses/${courseId}`)}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg transition"
              >
                Return to Course
              </button>
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (!testStarted) {
    const course = courses.find(c => c.id === courseId)
    
    return (
      <div className="min-h-screen bg-gray-950">
        <Navbar />
        <Sidebar />
        <main className="ml-0 md:ml-64 pt-16 pb-20 transition-all duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="card-gradient border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Award className="h-12 w-12 text-yellow-500" />
                <div>
                  <h1 className="text-3xl font-bold text-white">{test.courseName} Certification Test</h1>
                  <p className="text-gray-400">Final exam to earn your certificate</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-gray-400 text-sm">Questions</div>
                  <div className="text-2xl font-bold text-white">{test.questions.length}</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-gray-400 text-sm">Time Limit</div>
                  <div className="text-2xl font-bold text-white">{test.timeLimit} minutes</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-gray-400 text-sm">Passing Score</div>
                  <div className="text-2xl font-bold text-white">{test.passingScore}%</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-gray-400 text-sm">Attempts Left</div>
                  <div className="text-2xl font-bold text-yellow-500">{attemptsLeft}/3</div>
                </div>
              </div>

              <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div className="space-y-2 text-yellow-100">
                    <h3 className="font-bold text-lg">Important Rules:</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>You have {test.maxAttempts} attempts total to pass this test</li>
                      <li>Once you start, the timer cannot be paused</li>
                      <li><strong>Do NOT switch tabs or minimize the window - test will auto-fail</strong></li>
                      <li><strong>Do NOT close or refresh the browser - test will auto-fail</strong></li>
                      <li>Right-click and copy-paste are disabled</li>
                      <li>You must score {test.passingScore}% or higher to pass</li>
                      <li>After 3 failed attempts, you cannot retake this test</li>
                    </ul>
                  </div>
                </div>
              </div>

              {!allLessonsCompleted && !isAdmin && (
                <div className="bg-red-900/30 border border-red-700 rounded-lg p-6 mb-6">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg text-red-100 mb-2">Step 1: Complete All Lessons</h3>
                      <p className="text-red-100 text-sm">
                        You must complete all regular lessons before taking the final project.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {allLessonsCompleted && !projectCompleted && !isAdmin && (
                <div className="bg-orange-900/30 border border-orange-700 rounded-lg p-6 mb-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg text-orange-100 mb-2">Step 2: Complete Final Project</h3>
                      <p className="text-orange-100 text-sm">
                        Complete the final project before taking the certification test.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {isAdmin && (
                <div className="bg-purple-900/30 border border-purple-700 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-purple-400" />
                    <span className="text-purple-100 text-sm font-semibold">Admin Mode: Unlimited Attempts</span>
                  </div>
                </div>
              )}

              <div className="flex gap-4">
                <button
                  onClick={startTest}
                  disabled={(attemptsLeft <= 0 && !isAdmin) || (!allLessonsCompleted && !isAdmin) || (!projectCompleted && !isAdmin)}
                  className="flex-1 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg text-white font-bold text-lg hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {!allLessonsCompleted && !isAdmin 
                    ? 'Complete All Lessons First' 
                    : !projectCompleted && !isAdmin
                    ? 'Complete Final Project First'
                    : isAdmin 
                    ? 'Start Test (Admin)' 
                    : attemptsLeft > 0 
                    ? 'Start Test' 
                    : 'No Attempts Remaining'}
                </button>
                <button
                  onClick={() => router.push(`/courses/${courseId}`)}
                  className="px-8 py-4 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-semibold transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (testCompleted && !testFailed) {
    const passed = score >= test.passingScore
    
    return (
      <div className="min-h-screen bg-gray-950">
        <Navbar />
        <Sidebar />
        <main className="ml-0 md:ml-64 pt-16 pb-20 transition-all duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className={`card-gradient border-2 ${passed ? 'border-green-500' : 'border-red-500'} rounded-2xl p-12 text-center`}>
              {passed ? (
                <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-6" />
              ) : (
                <XCircle className="h-24 w-24 text-red-500 mx-auto mb-6" />
              )}
              
              <h1 className="text-4xl font-bold text-white mb-4">
                {passed ? 'Congratulations!' : 'Test Not Passed'}
              </h1>
              
              <div className="text-6xl font-bold mb-6" style={{ color: passed ? '#22c55e' : '#ef4444' }}>
                {score}%
              </div>

              <p className="text-xl text-gray-300 mb-8">
                {passed 
                  ? 'You have passed the certification test!' 
                  : `You need ${test.passingScore}% to pass. You can try again.`}
              </p>

              <div className="bg-gray-800 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Test Results:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400">Your Score</div>
                    <div className="text-2xl font-bold text-blue-500">
                      {score}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Questions Answered</div>
                    <div className="text-2xl font-bold text-green-500">
                      {answers.filter(a => a !== -1).length} / {test.questions.length}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Attempts Left</div>
                    <div className="text-2xl font-bold text-yellow-500">{attemptsLeft - 1}</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                {passed ? (
                  <button
                    onClick={() => router.push('/certifications')}
                    className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg text-white font-semibold hover:shadow-lg transition"
                  >
                    View Certificate
                  </button>
                ) : attemptsLeft > 1 ? (
                  <button
                    onClick={() => window.location.reload()}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg transition"
                  >
                    Try Again ({attemptsLeft - 1} attempts left)
                  </button>
                ) : null}
                
                <button
                  onClick={() => router.push(`/courses/${courseId}`)}
                  className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-semibold transition"
                >
                  Return to Course
                </button>
              </div>
            </div>

            {/* Review Answers - Simplified without correct answers */}
            <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold text-white mb-4">Your Answers</h2>
              {test.questions.map((question, idx) => {
                const userAnswer = answers[idx]
                
                return (
                  <div key={question.id} className="card-gradient border border-gray-700 rounded-xl p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-3">
                          Question {idx + 1}: {question.question}
                        </h3>
                        
                        <div className="space-y-2">
                          {question.options.map((option, optIdx) => (
                            <div
                              key={optIdx}
                              className={`p-3 rounded-lg ${
                                userAnswer === optIdx
                                  ? 'bg-blue-900/30 border border-blue-700'
                                  : 'bg-gray-800/50 border border-gray-700'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                {userAnswer === optIdx && (
                                  <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                                )}
                                <span className={userAnswer === optIdx ? 'text-blue-100' : 'text-gray-400'}>
                                  {option}
                                </span>
                              </div>
                            </div>
                          ))}
                          {userAnswer === -1 && (
                            <div className="text-yellow-500 text-sm">Not answered</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </main>
      </div>
    )
  }

  // Active test view
  const question = test.questions[currentQuestion]
  const progress = ((currentQuestion + 1) / test.questions.length) * 100
  const isLowTime = timeRemaining < 120 // Less than 2 minutes

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Sidebar />
      <main className="ml-0 md:ml-64 pt-16 pb-20 transition-all duration-300">
        {/* Top Bar - Timer and Progress */}
        <div className="bg-gray-900 border-b border-gray-700 sticky top-16 z-40">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-400">Monitored</span>
                </div>
                <div className="text-sm text-gray-400">
                  Question {currentQuestion + 1} of {test.questions.length}
                </div>
              </div>
              
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${isLowTime ? 'bg-red-900/30 text-red-400' : 'bg-gray-800 text-white'}`}>
                <Clock className={`h-5 w-5 ${isLowTime ? 'animate-pulse' : ''}`} />
                <span className="font-mono text-lg font-bold">{formatTime(timeRemaining)}</span>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="card-gradient border border-gray-700 rounded-2xl p-8 mb-6">
            <div className="flex items-start justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex-1">{question.question}</h2>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                question.difficulty === 'Easy' ? 'bg-green-900/30 text-green-400' :
                question.difficulty === 'Medium' ? 'bg-yellow-900/30 text-yellow-400' :
                'bg-red-900/30 text-red-400'
              }`}>
                {question.difficulty}
              </span>
            </div>

            <div className="space-y-3">
              {question.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(currentQuestion, idx)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition ${
                    answers[currentQuestion] === idx
                      ? 'border-blue-500 bg-blue-900/30'
                      : 'border-gray-700 hover:border-gray-600 bg-gray-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      answers[currentQuestion] === idx
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-600'
                    }`}>
                      {answers[currentQuestion] === idx && (
                        <div className="w-3 h-3 bg-white rounded-full" />
                      )}
                    </div>
                    <span className="text-gray-300">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
              disabled={currentQuestion === 0}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Previous
            </button>

            {currentQuestion < test.questions.length - 1 ? (
              <button
                onClick={() => setCurrentQuestion(prev => prev + 1)}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg transition"
              >
                Next Question
              </button>
            ) : (
              <button
                onClick={() => {
                  if (confirm('Submit your test? This cannot be undone.')) {
                    handleTestEnd(false)
                  }
                }}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg text-white font-bold hover:shadow-lg transition"
              >
                Submit Test
              </button>
            )}
          </div>

          {/* Question Navigation Grid */}
          <div className="mt-8 card-gradient border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Question Navigation</h3>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
              {test.questions.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentQuestion(idx)}
                  className={`aspect-square rounded-lg font-semibold text-sm transition ${
                    idx === currentQuestion
                      ? 'bg-blue-600 text-white'
                      : answers[idx] !== -1
                      ? 'bg-green-700 text-white'
                      : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
            <div className="flex gap-4 mt-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-700 rounded" />
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-700 rounded" />
                <span>Not Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-600 rounded" />
                <span>Current</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
