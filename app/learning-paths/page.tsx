'use client'

import { useState } from 'react'
import { useProgressStore } from '@/store/progressStore'
import { courses } from '@/data/courses'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Link from 'next/link'
import { Map, Check, Lock, Award, TrendingUp, BookOpen, Code, Database, Smartphone, Brain, Globe, Zap, Shield } from 'lucide-react'

const learningPaths = [
  {
    id: 'web-dev',
    title: 'Full Stack Web Development',
    description: 'Master modern web development from frontend to backend',
    icon: Code,
    color: 'blue',
    duration: '16 weeks',
    courseIds: ['html', 'css', 'javascript', 'typescript', 'react', 'nodejs'],
    enrolled: true
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description: 'Build native and cross-platform mobile applications',
    icon: Smartphone,
    color: 'purple',
    duration: '14 weeks',
    courseIds: ['javascript', 'typescript', 'react', 'dart', 'swift', 'kotlin'],
    enrolled: true
  },
  {
    id: 'backend-dev',
    title: 'Backend Engineering',
    description: 'Learn server-side development and API design',
    icon: Database,
    color: 'green',
    duration: '12 weeks',
    courseIds: ['python', 'nodejs', 'sql', 'go', 'rust', 'java'],
    enrolled: false
  },
  {
    id: 'data-science',
    title: 'Data Science & Analytics',
    description: 'Analyze data and build analytical solutions',
    icon: TrendingUp,
    color: 'yellow',
    duration: '14 weeks',
    courseIds: ['python', 'r', 'sql', 'matlab', 'julia'],
    enrolled: false
  },
  {
    id: 'systems-prog',
    title: 'Systems Programming',
    description: 'Low-level programming and performance optimization',
    icon: Zap,
    color: 'red',
    duration: '12 weeks',
    courseIds: ['rust', 'go', 'csharp', 'cpp'],
    enrolled: false
  },
  {
    id: 'devops',
    title: 'DevOps & Automation',
    description: 'Automate deployments and manage infrastructure',
    icon: Shield,
    color: 'cyan',
    duration: '10 weeks',
    courseIds: ['bash', 'powershell', 'python', 'go'],
    enrolled: false
  },
  {
    id: 'functional',
    title: 'Functional Programming',
    description: 'Master functional programming paradigms',
    icon: Brain,
    color: 'indigo',
    duration: '10 weeks',
    courseIds: ['haskell', 'elixir', 'clojure', 'scala', 'fsharp', 'ocaml'],
    enrolled: false
  },
  {
    id: 'scripting',
    title: 'Scripting & Automation',
    description: 'Automate tasks with scripting languages',
    icon: Globe,
    color: 'pink',
    duration: '8 weeks',
    courseIds: ['python', 'ruby', 'php', 'perl', 'lua', 'groovy'],
    enrolled: false
  }
]

export default function LearningPathsPage() {
  const [selectedPath, setSelectedPath] = useState(learningPaths[0])
  const { completedLessons, courseProgress } = useProgressStore()

  const getPathProgress = (path: typeof learningPaths[0]) => {
    const pathCourses = courses.filter(c => path.courseIds.includes(c.id))
    if (pathCourses.length === 0) return 0
    
    const totalLessons = pathCourses.reduce((sum, course) => sum + course.lessons.length, 0)
    const completedInPath = completedLessons.filter(lessonId => 
      pathCourses.some(course => course.lessons.some(lesson => lesson.id === lessonId))
    ).length
    
    return Math.round((completedInPath / totalLessons) * 100)
  }

  const getCourseProgress = (courseId: string) => {
    const course = courses.find(c => c.id === courseId)
    if (!course) return 0
    
    const completed = completedLessons.filter(lessonId => 
      course.lessons.some(lesson => lesson.id === lessonId)
    ).length
    
    return Math.round((completed / course.lessons.length) * 100)
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 pb-20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
              <Map className="h-8 w-8 text-primary-400" />
              <span className="text-gradient">Learning Paths</span>
            </h1>
            <p className="text-gray-400">
              Follow structured paths to master your skills
            </p>
          </div>

          {/* Learning Paths Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {learningPaths.map((path) => {
              const Icon = path.icon
              const progress = getPathProgress(path)
              
              return (
                <div
                  key={path.id}
                  onClick={() => setSelectedPath(path)}
                  className={`card-gradient border-2 rounded-xl p-6 cursor-pointer transition-all ${
                    selectedPath.id === path.id
                      ? `border-${path.color}-500 shadow-lg`
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`bg-${path.color}-500/20 p-3 rounded-lg`}>
                      <Icon className={`h-6 w-6 text-${path.color}-400`} />
                    </div>
                    {path.enrolled && (
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                        Enrolled
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{path.description}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {path.courseIds.length} courses
                    </span>
                    <span>{path.duration}</span>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Progress</span>
                      <span className="text-sm font-semibold">{progress}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className={`bg-${path.color}-500 h-2 rounded-full transition-all`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  {!path.enrolled && (
                    <button className={`w-full mt-4 px-4 py-2 bg-${path.color}-500 text-white rounded-lg hover:opacity-90 transition-colors font-semibold`}>
                      Start Learning
                    </button>
                  )}
                </div>
              )
            })}
          </div>

          {/* Selected Path Details */}
          {selectedPath && (
            <div className="card-gradient border border-gray-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-6">{selectedPath.title} - Course Roadmap</h2>
              
              <div className="space-y-4">
                {selectedPath.courseIds.map((courseId, index) => {
                  const course = courses.find(c => c.id === courseId)
                  if (!course) return null
                  
                  const progress = getCourseProgress(courseId)
                  const isCompleted = progress === 100
                  const isStarted = progress > 0
                  
                  return (
                    <Link
                      key={courseId}
                      href={`/courses/${courseId}`}
                      className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-all hover:scale-[1.02] ${
                        isCompleted
                          ? 'border-green-500/30 bg-green-500/10'
                          : isStarted
                          ? 'border-primary-500/30 bg-primary-500/10'
                          : 'border-gray-700 bg-gray-800/30'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-2xl flex-shrink-0`}>
                        {course.icon}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-semibold">{course.title}</h3>
                          {isCompleted && <Award className="h-5 w-5 text-green-400" />}
                        </div>
                        <p className="text-sm text-gray-400 mb-2">{course.description}</p>
                        
                        {/* Progress bar */}
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-700 rounded-full h-1.5">
                            <div
                              className={`h-1.5 rounded-full transition-all ${
                                isCompleted ? 'bg-green-500' : 'bg-primary-500'
                              }`}
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-400 min-w-[3rem] text-right">{progress}%</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          isCompleted
                            ? 'bg-green-500/20 text-green-400'
                            : isStarted
                            ? 'bg-primary-500/20 text-primary-400'
                            : 'bg-gray-700 text-gray-400'
                        }`}>
                          {isCompleted ? 'Completed' : isStarted ? 'In Progress' : 'Not Started'}
                        </span>
                        <span className="text-xs text-gray-500">{course.lessons.length} lessons</span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
