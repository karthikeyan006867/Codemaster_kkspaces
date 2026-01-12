'use client'

import { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { 
  Briefcase, TrendingUp, Target, Award, DollarSign, 
  MapPin, Star, BookOpen, Users, CheckCircle, ArrowRight
} from 'lucide-react'

interface CareerPath {
  id: string
  title: string
  description: string
  avgSalary: string
  demandLevel: 'high' | 'medium' | 'low'
  requiredSkills: string[]
  recommendedCourses: string[]
  jobCount: number
  growthRate: string
}

export default function CareerPage() {
  const { user, isLoaded } = useUser()
  const router = useRouter()
  const [careerPaths, setCareerPaths] = useState<CareerPath[]>([])
  const [selectedPath, setSelectedPath] = useState<CareerPath | null>(null)
  const [userSkills, setUserSkills] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (isLoaded && !user) {
      router.push('/sign-in')
      return
    }
    if (user) {
      loadCareerPaths()
      loadUserSkills()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, user])

  const loadCareerPaths = async () => {
    // Mock data - in real app, fetch from API
    const paths: CareerPath[] = [
      {
        id: 'frontend',
        title: 'Frontend Developer',
        description: 'Build beautiful, interactive user interfaces',
        avgSalary: '$85,000 - $130,000',
        demandLevel: 'high',
        requiredSkills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
        recommendedCourses: ['html', 'css', 'javascript', 'react', 'typescript'],
        jobCount: 12500,
        growthRate: '+15% yearly'
      },
      {
        id: 'backend',
        title: 'Backend Developer',
        description: 'Design and build server-side applications',
        avgSalary: '$90,000 - $140,000',
        demandLevel: 'high',
        requiredSkills: ['Python', 'Node.js', 'Database', 'API Design', 'Cloud'],
        recommendedCourses: ['python', 'nodejs', 'mongodb', 'aws'],
        jobCount: 10800,
        growthRate: '+12% yearly'
      },
      {
        id: 'fullstack',
        title: 'Full-Stack Developer',
        description: 'Master both frontend and backend development',
        avgSalary: '$95,000 - $150,000',
        demandLevel: 'high',
        requiredSkills: ['JavaScript', 'React', 'Node.js', 'Database', 'DevOps'],
        recommendedCourses: ['javascript', 'react', 'nodejs', 'mongodb', 'docker'],
        jobCount: 15300,
        growthRate: '+18% yearly'
      },
      {
        id: 'mobile',
        title: 'Mobile Developer',
        description: 'Create native and cross-platform mobile apps',
        avgSalary: '$88,000 - $135,000',
        demandLevel: 'high',
        requiredSkills: ['React Native', 'Flutter', 'iOS', 'Android', 'Mobile UI'],
        recommendedCourses: ['react', 'flutter', 'dart'],
        jobCount: 8900,
        growthRate: '+20% yearly'
      },
      {
        id: 'devops',
        title: 'DevOps Engineer',
        description: 'Automate and optimize development workflows',
        avgSalary: '$100,000 - $160,000',
        demandLevel: 'high',
        requiredSkills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Linux'],
        recommendedCourses: ['docker', 'kubernetes', 'aws', 'bash'],
        jobCount: 7600,
        growthRate: '+25% yearly'
      },
      {
        id: 'ml-engineer',
        title: 'ML Engineer',
        description: 'Build intelligent systems with machine learning',
        avgSalary: '$110,000 - $180,000',
        demandLevel: 'high',
        requiredSkills: ['Python', 'TensorFlow', 'ML Algorithms', 'Statistics', 'Data'],
        recommendedCourses: ['python', 'ml', 'tensorflow'],
        jobCount: 6200,
        growthRate: '+30% yearly'
      },
    ]
    setCareerPaths(paths)
    setLoading(false)
  }

  const loadUserSkills = () => {
    // Mock - get from user progress
    setUserSkills(['HTML', 'CSS', 'JavaScript', 'React'])
  }

  const getMatchScore = (path: CareerPath) => {
    const matchedSkills = path.requiredSkills.filter(skill => 
      userSkills.includes(skill)
    ).length
    return Math.round((matchedSkills / path.requiredSkills.length) * 100)
  }

  const getDemandColor = (level: string) => {
    switch(level) {
      case 'high': return 'text-green-600 bg-green-50'
      case 'medium': return 'text-yellow-600 bg-yellow-50'
      case 'low': return 'text-gray-600 bg-gray-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  if (!isLoaded || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 pb-20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Career Paths & Job Opportunities
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Explore career opportunities and track your progress toward your dream job
          </p>
        </div>

        {/* User Skills */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Your Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {userSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Career Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerPaths.map((path) => {
            const matchScore = getMatchScore(path)
            return (
              <div
                key={path.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 cursor-pointer"
                onClick={() => setSelectedPath(path)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {path.title}
                    </h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getDemandColor(path.demandLevel)}`}>
                      {path.demandLevel.toUpperCase()} DEMAND
                    </span>
                  </div>
                  <Briefcase className="w-8 h-8 text-blue-500" />
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {path.description}
                </p>

                {/* Stats */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{path.avgSalary}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{path.growthRate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-purple-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{path.jobCount.toLocaleString()} open positions</span>
                  </div>
                </div>

                {/* Match Score */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Skill Match</span>
                    <span className="text-sm font-bold text-blue-600">{matchScore}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${matchScore}%` }}
                    />
                  </div>
                </div>

                {/* Required Skills Preview */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Required Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {path.requiredSkills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className={`px-2 py-1 rounded text-xs ${
                          userSkills.includes(skill)
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                        }`}
                      >
                        {skill}
                        {userSkills.includes(skill) && ' ✓'}
                      </span>
                    ))}
                    {path.requiredSkills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs text-gray-600 dark:text-gray-300">
                        +{path.requiredSkills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedPath(path)
                  }}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  View Roadmap
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )
          })}
        </div>

        {/* Detail Modal */}
        {selectedPath && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedPath(null)}>
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedPath.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">{selectedPath.description}</p>
                </div>
                <button
                  onClick={() => setSelectedPath(null)}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  ✕
                </button>
              </div>

              {/* Skills Checklist */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Required Skills ({selectedPath.requiredSkills.filter(s => userSkills.includes(s)).length}/{selectedPath.requiredSkills.length})
                </h3>
                <div className="space-y-2">
                  {selectedPath.requiredSkills.map((skill) => {
                    const hasSkill = userSkills.includes(skill)
                    return (
                      <div key={skill} className="flex items-center gap-3">
                        {hasSkill ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                        )}
                        <span className={hasSkill ? 'text-gray-900 dark:text-white' : 'text-gray-500'}>
                          {skill}
                        </span>
                        {!hasSkill && (
                          <span className="ml-auto text-sm text-blue-600 hover:underline cursor-pointer">
                            Learn Now
                          </span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Recommended Courses */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Recommended Courses
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {selectedPath.recommendedCourses.map((course) => (
                    <button
                      key={course}
                      onClick={() => router.push(`/courses/${course}`)}
                      className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 text-sm"
                    >
                      {course.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Career Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <DollarSign className="w-6 h-6 text-green-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">Avg Salary</p>
                  <p className="font-bold text-gray-900 dark:text-white">{selectedPath.avgSalary.split(' - ')[0]}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">Growth Rate</p>
                  <p className="font-bold text-gray-900 dark:text-white">{selectedPath.growthRate}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Target className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">Open Jobs</p>
                  <p className="font-bold text-gray-900 dark:text-white">{selectedPath.jobCount.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </main>
    </div>
  )
}
