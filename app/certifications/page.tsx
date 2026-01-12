'use client'

import { useState, useEffect, useMemo } from 'react'
import { useUser } from '@clerk/nextjs'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Certificate from '@/components/Certificate'
import { Award, Download, Share2, Lock, CheckCircle, Calendar, TrendingUp, ArrowLeft } from 'lucide-react'
import { useProgressStore } from '@/store/progressStore'
import { courses } from '@/data/courses'

interface Certificate {
  id: string
  title: string
  description: string
  courseId: string
  issueDate: string
  expiryDate?: string
  credentialId: string
  verificationUrl: string
  skills: string[]
  earned: boolean
  progress?: number
  testPassed?: boolean
  allLessonsCompleted?: boolean
  projectCompleted?: boolean
  testScore?: number
}

export default function CertificationsPage() {
  const { user, isLoaded } = useUser()
  const [viewingCert, setViewingCert] = useState<Certificate | null>(null)
  const { courseProgress, setUserId, loadProgressFromServer } = useProgressStore()

  // Load user progress from server when user is loaded
  useEffect(() => {
    if (isLoaded && user) {
      setUserId(user.id)
      // Always fetch fresh data from server on page load
      loadProgressFromServer()
    }
  }, [isLoaded, user, setUserId, loadProgressFromServer])

  // Generate certificates based on actual course completion + project + test pass
  const certificates: Certificate[] = useMemo(() => {
    if (!user) return []
    
    return courses.map(course => {
      const progress = courseProgress[course.id] || { completed: 0, total: course.lessons.length, percentage: 0 }
      
      const userMetadata = user.publicMetadata as any || {}
      const completedLessons = userMetadata.completedLessons || []
      
      // Separate project lessons from regular lessons
      const regularLessons = course.lessons.filter(l => !l.isProject)
      const projectLessons = course.lessons.filter(l => l.isProject)
      
      // Check if all lessons are completed (100% includes projects)
      const allLessonsCompleted = progress.percentage === 100
      
      // Check if project is completed specifically
      const projectCompleted = projectLessons.length === 0 || projectLessons.every(lesson => completedLessons.includes(lesson.id))
      
      // Check if user passed the certification test
      const testAttempts = userMetadata.testAttempts || {}
      const courseTest = testAttempts[course.id] || { passed: false, bestScore: 0 }
      const testPassed = courseTest.passed
      const testScore = courseTest.bestScore || 0
      
      // Certificate is earned if:
      // - 90%+ lessons completed OR all lessons complete
      // - Project completed (if exists)
      // - Test passed with 90%+ score
      const highProgress = progress.percentage >= 90
      const isCompleted = highProgress && projectCompleted && (testPassed || testScore >= 90)
      
      // Generate credential ID
      const courseCode = course.id.toUpperCase().substring(0, 3)
      const credentialId = isCompleted 
        ? `CERT-${courseCode}-${user?.id?.substring(0, 6) || '000'}-${new Date().getFullYear()}`
        : ''
      
      // Extract skills from course lessons (first 5 lesson titles as skills)
      const skills = course.lessons.slice(0, 5).map(lesson => lesson.title)
      
      return {
        id: course.id,
        title: course.title,
        description: course.description,
        courseId: course.id,
        issueDate: isCompleted ? new Date().toISOString() : '',
        credentialId: credentialId,
        verificationUrl: isCompleted ? `https://verify.codemaster.com/${credentialId}` : '',
        skills: skills,
        earned: isCompleted,
        progress: progress.percentage,
        testPassed,
        allLessonsCompleted,
        projectCompleted,
        testScore
      }
    })
  }, [courseProgress, user])

  const earnedCerts = certificates.filter(c => c.earned)
  const inProgressCerts = certificates.filter(c => !c.earned)

  const downloadCertificate = (cert: Certificate) => {
    // Download is handled by the Certificate component itself
    console.log('Certificate download triggered:', cert.title)
  }

  const shareCertificate = (cert: Certificate) => {
    if (navigator.share) {
      navigator.share({
        title: cert.title,
        text: `I earned ${cert.title} certification on CodeMaster!`,
        url: cert.verificationUrl
      }).catch(err => console.log('Share failed:', err))
    } else {
      navigator.clipboard.writeText(cert.verificationUrl)
      alert('Certificate link copied to clipboard!')
    }
  }

  // If viewing a certificate, show the full certificate view
  if (viewingCert) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <Sidebar />
        
        <main className="ml-0 md:ml-64 pt-16 pb-20 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <button
              onClick={() => setViewingCert(null)}
              className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Certifications
            </button>
            
            <Certificate
              userName={user?.fullName || user?.firstName || 'Student Name'}
              courseName={viewingCert.title}
              completionDate={new Date(viewingCert.issueDate).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
              credentialId={viewingCert.credentialId}
              skills={viewingCert.skills}              testScore={viewingCert.testScore}              onDownload={() => downloadCertificate(viewingCert)}
              onShare={() => shareCertificate(viewingCert)}
            />
          </div>
        </main>
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
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg shadow-md p-8 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Your Certifications</h1>
              <p className="text-yellow-100">Showcase your achievements and skills</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold">{earnedCerts.length}</div>
              <div className="text-yellow-100">Earned</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-yellow-500" />
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{earnedCerts.length}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Certificates Earned</div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-blue-500" />
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{inProgressCerts.length}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">In Progress</div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {Math.round((earnedCerts.length / certificates.length) * 100)}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Completion Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Earned Certificates */}
        {earnedCerts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Earned Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {earnedCerts.map((cert) => (
              <div key={cert.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-4">
                  <div className="flex items-center gap-3 text-white">
                    <Award className="w-6 h-6" />
                    <h3 className="font-bold text-lg">{cert.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{cert.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600 dark:text-gray-400">
                        Issued: {new Date(cert.issueDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-semibold">Credential ID:</span> {cert.credentialId}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setViewingCert(cert)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
                    >
                      <CheckCircle className="w-4 h-4" />
                      View Certificate
                    </button>
                    <button
                      onClick={() => downloadCertificate(cert)}
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => shareCertificate(cert)}
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}

        {/* No Earned Certificates Message */}
        {earnedCerts.length === 0 && (
          <div className="mb-12 text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              No Certificates Earned Yet
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Complete courses to earn certificates and showcase your skills!
            </p>
          </div>
        )}

        {/* In Progress */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Available Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inProgressCerts.map((cert) => (
              <div key={cert.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-100 dark:bg-gray-700 p-4">
                  <div className="flex items-center gap-3">
                    <Lock className="w-6 h-6 text-gray-500" />
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">{cert.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{cert.description}</p>
                  
                  {/* Requirements Checklist */}
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      {cert.allLessonsCompleted ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-gray-400" />
                      )}
                      <span className={cert.allLessonsCompleted ? 'text-green-600 font-semibold' : 'text-gray-600 dark:text-gray-400'}>
                        Complete all {courses.find(c => c.id === cert.id)?.lessons.length} lessons
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      {cert.testPassed ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-gray-400" />
                      )}
                      <span className={cert.testPassed ? 'text-green-600 font-semibold' : 'text-gray-600 dark:text-gray-400'}>
                        Pass certification test (70%)
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600 dark:text-gray-400">Course Progress</span>
                      <span className="font-semibold text-gray-900 dark:text-white">{cert.progress || 0}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all"
                        style={{ width: `${cert.progress || 0}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => window.location.href = `/courses/${cert.courseId}`}
                      className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                      Continue Learning ({cert.progress || 0}%)
                    </button>
                    
                    {cert.allLessonsCompleted && cert.projectCompleted && (
                      <button 
                        onClick={() => window.location.href = `/test/${cert.id}`}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded hover:shadow-lg transition-colors font-semibold"
                      >
                        Take Final Test
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </main>
    </div>
  )
}
