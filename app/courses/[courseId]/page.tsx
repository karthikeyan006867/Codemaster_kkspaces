'use client'

import { useEffect } from 'react'
import { notFound } from 'next/navigation'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { courses } from '@/data/courses'
import { useProgressStore } from '@/store/progressStore'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { CheckCircle2, Clock, ArrowRight, BookOpen, Lock, Award } from 'lucide-react'

export default function CoursePage({ params }: { params: { courseId: string } }) {
  const { user, isLoaded } = useUser()
  const course = courses.find(c => c.id === params.courseId)
  const { isLessonCompleted, isLessonUnlocked, setUserId, loadProgressFromServer, completedLessons } = useProgressStore()

  // Load user progress from server when user is loaded
  useEffect(() => {
    if (isLoaded && user) {
      setUserId(user.id)
      // Load progress from server only once when user loads
      loadProgressFromServer()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, user])

  if (!course) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Course Header */}
          <div className="card-gradient p-8 rounded-2xl border border-gray-700 mb-8">
            <div className="flex items-start gap-6">
              <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-5xl flex-shrink-0`}>
                {course.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl font-bold">{course.title}</h1>
                  <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium border border-primary-500/30">
                    {course.difficulty}
                  </span>
                </div>
                <p className="text-xl text-gray-400 mb-4">{course.description}</p>
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.lessons.length} Lessons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <Link 
                    href={`/test/${course.id}`}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg hover:shadow-lg transition"
                  >
                    <Award className="h-4 w-4" />
                    <span className="font-semibold">Take Certification Test</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Lessons List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Course Lessons</h2>
            {course.lessons.map((lesson, index) => {
              const completed = isLessonCompleted(lesson.id)
              const unlocked = isLessonUnlocked(lesson.id, course.id)
              
              return unlocked ? (
                <Link
                  key={lesson.id}
                  href={`/courses/${course.id}/${lesson.id}`}
                  className={`block card-gradient p-6 rounded-xl border transition-all hover:scale-[1.01] group ${
                    completed 
                      ? 'border-green-500/50 bg-green-500/5 hover:border-green-500/70 hover:glow-green' 
                      : 'border-gray-700 hover:border-gray-600 hover:glow'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold ${
                        completed
                          ? 'bg-gradient-to-br from-green-500/30 to-emerald-500/30 border border-green-500/50 text-green-400'
                          : 'bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/30 text-primary-400'
                      }`}>
                        {completed ? <CheckCircle2 className="h-6 w-6" /> : index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <h3 className={`text-xl font-semibold transition-colors ${
                            completed ? 'text-green-400' : 'group-hover:text-primary-400'
                          }`}>
                            {lesson.title}
                          </h3>
                          {completed && (
                            <CheckCircle2 className="h-5 w-5 text-green-400" />
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Clock className="h-4 w-4" />
                          <span>{lesson.estimatedTime} min</span>
                        </div>
                      </div>
                      <p className="text-gray-400 mb-3">{lesson.description}</p>
                      <div className="flex items-center justify-between">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          lesson.difficulty === 'Beginner' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : lesson.difficulty === 'Intermediate'
                            ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                            : 'bg-red-500/20 text-red-400 border border-red-500/30'
                        }`}>
                          {lesson.difficulty}
                        </span>
                        <ArrowRight className={`h-5 w-5 group-hover:translate-x-2 transition-transform ${
                          completed ? 'text-green-400' : 'text-primary-400'
                        }`} />
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <div
                  key={lesson.id}
                  className="block card-gradient p-6 rounded-xl border border-gray-800 bg-gray-900/50 opacity-60 cursor-not-allowed"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center">
                        <Lock className="h-6 w-6 text-gray-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-semibold text-gray-600">
                            {lesson.title}
                          </h3>
                          <Lock className="h-5 w-5 text-gray-600" />
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>{lesson.estimatedTime} min</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">{lesson.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-600 border border-gray-700">
                          {lesson.difficulty}
                        </span>
                        <span className="text-sm text-gray-600">Complete previous lesson to unlock</span>
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
