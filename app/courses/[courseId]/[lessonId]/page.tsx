'use client'

import { useState, useEffect } from 'react'
import { notFound, useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { courses } from '@/data/courses'
import { useProgressStore } from '@/store/progressStore'
import { useSettingsStore } from '@/store/settingsStore'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import CodeEditor from '@/components/CodeEditor'
import { ArrowLeft, ArrowRight, Lightbulb, CheckCircle2, BookOpen } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

export default function LessonPage({ 
  params 
}: { 
  params: { courseId: string; lessonId: string } 
}) {
  const { user, isLoaded } = useUser()
  const course = courses.find(c => c.id === params.courseId)
  const lesson = course?.lessons.find(l => l.id === params.lessonId)
  
  const { completeLesson, isLessonCompleted, isLessonUnlocked, setUserId, loadProgressFromServer } = useProgressStore()
  const { settings } = useSettingsStore()
  const [showHints, setShowHints] = useState(settings.showHintsAutomatically)
  const [completed, setCompleted] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(true)
  const router = useRouter()

  // Load user progress from server when user is loaded
  useEffect(() => {
    if (isLoaded && user) {
      setUserId(user.id)
      // Load progress from server only once when user loads
      loadProgressFromServer()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, user])

  useEffect(() => {
    if (lesson) {
      setCompleted(isLessonCompleted(lesson.id))
      setIsUnlocked(isLessonUnlocked(lesson.id, params.courseId))
      
      // Redirect if lesson is locked
      if (!isLessonUnlocked(lesson.id, params.courseId)) {
        router.push(`/courses/${params.courseId}`)
      }
    }
  }, [lesson, isLessonCompleted, isLessonUnlocked, params.courseId, router])

  // Auto-expand hints if setting is enabled
  useEffect(() => {
    setShowHints(settings.showHintsAutomatically)
  }, [settings.showHintsAutomatically])

  if (!course || !lesson) {
    notFound()
  }

  const currentIndex = course.lessons.findIndex(l => l.id === lesson.id)
  const nextLesson = course.lessons[currentIndex + 1]
  const prevLesson = course.lessons[currentIndex - 1]

  const handleSuccess = () => {
    if (lesson && !completed) {
      completeLesson(lesson.id, params.courseId)
      setCompleted(true)
    }
    
    // Auto-play next lesson if setting is enabled
    if (settings.autoPlayNextLesson && nextLesson) {
      setTimeout(() => {
        router.push(`/courses/${params.courseId}/${nextLesson.id}`)
      }, 2000)
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/courses" className="hover:text-white transition-colors">
              Courses
            </Link>
            <span>/</span>
            <Link href={`/courses/${course.id}`} className="hover:text-white transition-colors">
              {course.title}
            </Link>
            <span>/</span>
            <span className="text-white">{lesson.title}</span>
          </div>

          {/* Lesson Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl md:text-4xl font-bold">{lesson.title}</h1>
              {completed && (
                <CheckCircle2 className="h-8 w-8 text-green-400 animate-bounce" />
              )}
            </div>
            <p className="text-gray-400 text-lg">{lesson.description}</p>
            <div className="flex items-center gap-4 mt-4 text-sm">
              <span className={`px-3 py-1 rounded-full ${
                lesson.difficulty === 'Beginner' 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : lesson.difficulty === 'Intermediate'
                  ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}>
                {lesson.difficulty}
              </span>
              <span className="text-gray-400">⏱️ {lesson.estimatedTime} minutes</span>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Lesson Content */}
            <div className="space-y-6">
              <div className="card-gradient p-6 rounded-xl border border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-5 w-5 text-primary-400" />
                  <h2 className="text-xl font-bold">Lesson Content</h2>
                </div>
                <div className="prose prose-invert max-w-none">
                  <ReactMarkdown
                    components={{
                      h1: ({...props}) => <h1 className="text-2xl font-bold mb-4 text-white" {...props} />,
                      h2: ({...props}) => <h2 className="text-xl font-bold mb-3 mt-6 text-white" {...props} />,
                      h3: ({...props}) => <h3 className="text-lg font-bold mb-2 mt-4 text-white" {...props} />,
                      p: ({...props}) => <p className="mb-4 text-gray-300 leading-relaxed" {...props} />,
                      ul: ({...props}) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-300" {...props} />,
                      ol: ({...props}) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-300" {...props} />,
                      li: ({...props}) => <li className="text-gray-300" {...props} />,
                      code: ({inline, ...props}: any) => 
                        inline ? (
                          <code className="bg-gray-800 px-2 py-0.5 rounded text-primary-400 text-sm" {...props} />
                        ) : (
                          <code className="block bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto" {...props} />
                        ),
                      strong: ({...props}) => <strong className="font-bold text-white" {...props} />,
                    }}
                  >
                    {lesson.content}
                  </ReactMarkdown>
                </div>
              </div>

              {/* Hints */}
              <div className="card-gradient p-6 rounded-xl border border-gray-700">
                <button
                  onClick={() => setShowHints(!showHints)}
                  className="flex items-center gap-2 text-lg font-bold mb-4 hover:text-primary-400 transition-colors"
                >
                  <Lightbulb className="h-5 w-5" />
                  <span>Hints {showHints ? '▼' : '▶'}</span>
                </button>
                {showHints && lesson.hints && (
                  <ul className="space-y-2">
                    {lesson.hints.map((hint, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-400">
                        <span className="text-primary-400 font-bold">{index + 1}.</span>
                        <span>{hint}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Code Editor */}
            <div className="lg:sticky lg:top-24 self-start">
              <div className="card-gradient p-4 rounded-xl border border-gray-700">
                <CodeEditor
                  language={lesson.language}
                  initialCode={lesson.initialCode}
                  expectedOutput={lesson.expectedOutput}
                  testCases={lesson.testCases}
                  onSuccess={handleSuccess}
                />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-800">
            <div>
              {prevLesson ? (
                <Link
                  href={`/courses/${params.courseId}/${prevLesson.id}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                >
                  <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <div className="text-xs text-gray-500">Previous</div>
                    <div className="font-semibold">{prevLesson.title}</div>
                  </div>
                </Link>
              ) : (
                <div></div>
              )}
            </div>

            <div className="text-center">
              <Link
                href={`/courses/${params.courseId}`}
                className="text-primary-400 hover:text-primary-300 transition-colors font-medium"
              >
                Back to Course
              </Link>
            </div>

            <div>
              {nextLesson ? (
                completed ? (
                  <Link
                    href={`/courses/${params.courseId}/${nextLesson.id}`}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                  >
                    <div className="text-right">
                      <div className="text-xs text-gray-500">Next</div>
                      <div className="font-semibold">{nextLesson.title}</div>
                    </div>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <div className="flex items-center gap-2 text-gray-600 cursor-not-allowed">
                    <div className="text-right">
                      <div className="text-xs text-gray-600">Next (Complete this lesson first)</div>
                      <div className="font-semibold">{nextLesson.title}</div>
                    </div>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )
              ) : (
                <div className="text-green-400 font-semibold">
                  ✓ Course Complete!
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
