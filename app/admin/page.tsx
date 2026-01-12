'use client'

import { useUser } from '@clerk/nextjs'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { 
  Users, TrendingUp, Award, BookOpen, Search, Download, Filter, BarChart3, 
  Plus, Trash2, Edit, CheckCircle, XCircle, RefreshCw, Lock, Unlock,
  UserPlus, Settings, AlertCircle
} from 'lucide-react'
import { courses } from '@/data/courses'

interface UserProgress {
  userId: string
  email: string
  name: string
  imageUrl: string
  completedLessons: string[]
  achievements: string[]
  points: number
  streak: number
  lastActive: string
  createdAt: string
}

type TabType = 'users' | 'courses' | 'lessons' | 'stats'

export default function AdminDashboard() {
  const { user, isLoaded } = useUser()
  const [users, setUsers] = useState<UserProgress[]>([])
  const [filteredUsers, setFilteredUsers] = useState<UserProgress[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState<'points' | 'lessons' | 'recent'>('points')
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<TabType>('users')
  const [selectedUser, setSelectedUser] = useState<string | null>(null)
  const [selectedCourse, setSelectedCourse] = useState<string>('')
  const [selectedLessons, setSelectedLessons] = useState<string[]>([])
  const [pointsAmount, setPointsAmount] = useState<number>(0)
  const [pointsOperation, setPointsOperation] = useState<'set' | 'add' | 'subtract'>('set')
  
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalLessons: 0,
    averageProgress: 0,
    activeToday: 0
  })

  // Admin email check - using same logic as middleware
  const adminEmails = ['kaarthii009.g@gmail.com', 'karthii009.g@gmail.com']
  const userEmail = user?.emailAddresses?.[0]?.emailAddress?.toLowerCase()
  const publicMetadata = user?.publicMetadata as { role?: string } | undefined
  
  // Check both role and email (same as middleware)
  const isAdminByRole = publicMetadata?.role === 'admin'
  const isAdminByEmail = userEmail && adminEmails.includes(userEmail)
  const isAdmin = isAdminByRole || isAdminByEmail
  
  // Debug logging
  useEffect(() => {
    if (isLoaded && user) {
      console.log('Admin check:', {
        userEmail,
        publicMetadata,
        isAdminByRole,
        isAdminByEmail,
        isAdmin
      })
      
      // Redirect non-admin users to dashboard
      if (!isAdmin) {
        window.location.href = '/dashboard'
      }
    }
  }, [isLoaded, user, userEmail, publicMetadata, isAdminByRole, isAdminByEmail, isAdmin])

  useEffect(() => {
    if (isLoaded && isAdmin) {
      fetchAllUsers()
    }
  }, [isLoaded, isAdmin])

  useEffect(() => {
    // Filter and sort users
    let filtered = users.filter(u => 
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase())
    )

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'points') return b.points - a.points
      if (sortBy === 'lessons') return b.completedLessons.length - a.completedLessons.length
      if (sortBy === 'recent') return new Date(b.lastActive).getTime() - new Date(a.lastActive).getTime()
      return 0
    })

    setFilteredUsers(filtered)
  }, [searchTerm, sortBy, users])

  const fetchAllUsers = async () => {
    try {
      const response = await fetch('/api/admin/users')
      const data = await response.json()
      
      if (data.users) {
        setUsers(data.users)
        setFilteredUsers(data.users)
        
        // Calculate stats
        const totalLessons = data.users.reduce((sum: number, u: UserProgress) => sum + u.completedLessons.length, 0)
        const activeToday = data.users.filter((u: UserProgress) => {
          const lastActive = new Date(u.lastActive)
          const today = new Date()
          return lastActive.toDateString() === today.toDateString()
        }).length

        setStats({
          totalUsers: data.users.length,
          totalLessons,
          averageProgress: data.users.length > 0 ? Math.round(totalLessons / data.users.length) : 0,
          activeToday
        })
      }
    } catch (error) {
      console.error('Failed to fetch users:', error)
    } finally {
      setLoading(false)
    }
  }

  const addLessonsToUser = async () => {
    if (!selectedUser || selectedLessons.length === 0) {
      alert('Please select a user and at least one lesson')
      return
    }

    try {
      setLoading(true)
      const response = await fetch('/api/admin/users/add-lessons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: selectedUser,
          lessonIds: selectedLessons,
          courseId: selectedCourse
        })
      })

      const data = await response.json()
      
      if (data.success) {
        alert(`✅ Successfully added ${data.added} lessons!`)
        setSelectedLessons([])
        fetchAllUsers()
      } else {
        alert(`❌ Error: ${data.error}`)
      }
    } catch (error) {
      console.error('Failed to add lessons:', error)
      alert('❌ Failed to add lessons')
    } finally {
      setLoading(false)
    }
  }

  const removeLessonsFromUser = async () => {
    if (!selectedUser || selectedLessons.length === 0) {
      alert('Please select a user and at least one lesson')
      return
    }

    if (!confirm(`Remove ${selectedLessons.length} lessons from this user?`)) {
      return
    }

    try {
      setLoading(true)
      const response = await fetch('/api/admin/users/remove-lessons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: selectedUser,
          lessonIds: selectedLessons
        })
      })

      const data = await response.json()
      
      if (data.success) {
        alert(`✅ Successfully removed ${data.removed} lessons!`)
        setSelectedLessons([])
        fetchAllUsers()
      } else {
        alert(`❌ Error: ${data.error}`)
      }
    } catch (error) {
      console.error('Failed to remove lessons:', error)
      alert('❌ Failed to remove lessons')
    } finally {
      setLoading(false)
    }
  }

  const resetUserProgress = async (userId: string, resetType: 'all' | 'lessons' | 'achievements' | 'points') => {
    if (!confirm(`Reset ${resetType} for this user? This cannot be undone!`)) {
      return
    }

    try {
      setLoading(true)
      const response = await fetch('/api/admin/users/reset-progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, resetType })
      })

      const data = await response.json()
      
      if (data.success) {
        alert(`✅ Successfully reset ${resetType}!`)
        fetchAllUsers()
      } else {
        alert(`❌ Error: ${data.error}`)
      }
    } catch (error) {
      console.error('Failed to reset progress:', error)
      alert('❌ Failed to reset progress')
    } finally {
      setLoading(false)
    }
  }

  const updateUserPoints = async (userId: string, points: number, operation: 'set' | 'add' | 'subtract') => {
    try {
      setLoading(true)
      const response = await fetch('/api/admin/users/update-points', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, points, operation })
      })

      const data = await response.json()
      
      if (data.success) {
        alert(`✅ Points updated! Previous: ${data.previousPoints}, New: ${data.newPoints}`)
        fetchAllUsers()
      } else {
        alert(`❌ Error: ${data.error}`)
      }
    } catch (error) {
      console.error('Failed to update points:', error)
      alert('❌ Failed to update points')
    } finally {
      setLoading(false)
    }
  }

  const exportData = () => {
    const csv = [
      ['Name', 'Email', 'Completed Lessons', 'Points', 'Streak', 'Achievements', 'Last Active'].join(','),
      ...filteredUsers.map(u => [
        u.name,
        u.email,
        u.completedLessons.length,
        u.points,
        u.streak,
        u.achievements.length,
        u.lastActive
      ].join(','))
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `user-progress-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }

  const deleteAllUsers = async () => {
    if (!confirm('⚠️ WARNING: This will delete ALL users except admins. This action cannot be undone. Are you sure?')) {
      return
    }

    if (!confirm('Final confirmation: Delete all non-admin users?')) {
      return
    }

    try {
      setLoading(true)
      const response = await fetch('/api/admin/delete-users', {
        method: 'DELETE'
      })
      
      const data = await response.json()
      
      if (data.success) {
        alert(`✅ Successfully deleted ${data.deletedCount} users`)
        fetchAllUsers()
      } else {
        alert(`❌ Error: ${data.error}`)
      }
    } catch (error) {
      console.error('Failed to delete users:', error)
      alert('❌ Failed to delete users')
    } finally {
      setLoading(false)
    }
  }

  const toggleLessonSelection = (lessonId: string) => {
    setSelectedLessons(prev => 
      prev.includes(lessonId) 
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
    )
  }

  const selectAllLessons = () => {
    if (!selectedCourse) return
    const course = courses.find(c => c.id === selectedCourse)
    if (course) {
      const allLessonIds = course.lessons.map(lesson => lesson.id)
      setSelectedLessons(allLessonIds)
    }
  }

  const clearLessonSelection = () => {
    setSelectedLessons([])
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-950">
        <Navbar />
        <Sidebar />
        <main className="ml-0 md:ml-64 pt-16 pb-20">
          <div className="max-w-4xl mx-auto px-6 py-20 text-center">
            <h1 className="text-4xl font-bold text-red-500 mb-4">Access Denied</h1>
            <p className="text-gray-400">You don&apos;t have permission to access this page.</p>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 pb-20">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-gradient">Admin Dashboard</span>
            </h1>
            <p className="text-gray-400">Manage users and track platform analytics</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="card-gradient border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Users className="h-8 w-8 text-blue-500" />
                <span className="text-2xl font-bold">{stats.totalUsers}</span>
              </div>
              <h3 className="text-gray-400 text-sm">Total Users</h3>
            </div>

            <div className="card-gradient border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <BookOpen className="h-8 w-8 text-green-500" />
                <span className="text-2xl font-bold">{stats.totalLessons}</span>
              </div>
              <h3 className="text-gray-400 text-sm">Lessons Completed</h3>
            </div>

            <div className="card-gradient border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="h-8 w-8 text-purple-500" />
                <span className="text-2xl font-bold">{stats.averageProgress}</span>
              </div>
              <h3 className="text-gray-400 text-sm">Avg Lessons/User</h3>
            </div>

            <div className="card-gradient border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Award className="h-8 w-8 text-yellow-500" />
                <span className="text-2xl font-bold">{stats.activeToday}</span>
              </div>
              <h3 className="text-gray-400 text-sm">Active Today</h3>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-6 border-b border-gray-700">
            <button
              onClick={() => setActiveTab('users')}
              className={`px-6 py-3 font-medium transition-colors border-b-2 ${
                activeTab === 'users' 
                  ? 'border-blue-500 text-blue-500' 
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              <Users className="inline h-5 w-5 mr-2" />
              Users
            </button>
            <button
              onClick={() => setActiveTab('lessons')}
              className={`px-6 py-3 font-medium transition-colors border-b-2 ${
                activeTab === 'lessons' 
                  ? 'border-green-500 text-green-500' 
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              <BookOpen className="inline h-5 w-5 mr-2" />
              Lesson Management
            </button>
            <button
              onClick={() => setActiveTab('courses')}
              className={`px-6 py-3 font-medium transition-colors border-b-2 ${
                activeTab === 'courses' 
                  ? 'border-purple-500 text-purple-500' 
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              <Award className="inline h-5 w-5 mr-2" />
              Courses
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`px-6 py-3 font-medium transition-colors border-b-2 ${
                activeTab === 'stats' 
                  ? 'border-yellow-500 text-yellow-500' 
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              <BarChart3 className="inline h-5 w-5 mr-2" />
              Statistics
            </button>
          </div>

          {/* Users Tab */}
          {activeTab === 'users' && (
            <>
          {/* Controls */}
          <div className="card-gradient border border-gray-700 rounded-xl p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 w-full md:max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search users by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                >
                  <option value="points">Sort by Points</option>
                  <option value="lessons">Sort by Lessons</option>
                  <option value="recent">Sort by Recent</option>
                </select>

                <button
                  onClick={exportData}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90 transition text-white"
                >
                  <Download className="h-4 w-4" />
                  Export CSV
                </button>

                <button
                  onClick={deleteAllUsers}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition text-white"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete All
                </button>
              </div>
            </div>
          </div>

          {/* Users Table */}
          <div className="card-gradient border border-gray-700 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800 border-b border-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">User</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Lessons</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Points</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Streak</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Achievements</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Last Active</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {loading ? (
                    <tr>
                      <td colSpan={8} className="px-6 py-12 text-center text-gray-400">
                        Loading users...
                      </td>
                    </tr>
                  ) : filteredUsers.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="px-6 py-12 text-center text-gray-400">
                        No users found
                      </td>
                    </tr>
                  ) : (
                    filteredUsers.map((userProgress) => (
                      <tr key={userProgress.userId} className="hover:bg-gray-800/50 transition">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <Image
                              src={userProgress.imageUrl || '/default-avatar.svg'}
                              alt={userProgress.name}
                              width={40}
                              height={40}
                              className="rounded-full border-2 border-gray-700"
                            />
                            <div>
                              <div className="font-medium text-white">{userProgress.name}</div>
                              <div className="text-xs text-gray-500">ID: {userProgress.userId.slice(0, 8)}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-400">{userProgress.email}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium">
                            {userProgress.completedLessons.length}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium">
                            {userProgress.points}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium">
                            🔥 {userProgress.streak}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-medium">
                            🏆 {userProgress.achievements.length}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-400">
                          {new Date(userProgress.lastActive).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <button
                              onClick={() => {
                                setSelectedUser(userProgress.userId)
                                setActiveTab('lessons')
                              }}
                              className="px-3 py-1 text-sm bg-blue-600 hover:bg-blue-700 rounded-lg transition text-white"
                            >
                              <Edit className="inline h-3 w-3 mr-1" />
                              Edit
                            </button>
                            <button
                              onClick={() => resetUserProgress(userProgress.userId, 'all')}
                              className="px-3 py-1 text-sm bg-red-600 hover:bg-red-700 rounded-lg transition text-white"
                            >
                              <RefreshCw className="inline h-3 w-3 mr-1" />
                              Reset
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
            </>
          )}

          {/* Lesson Management Tab */}
          {activeTab === 'lessons' && (
            <div className="space-y-6">
              {/* Selection Cards Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* User Selection Card */}
                <div className="card-gradient border border-gray-700 rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                    <UserPlus className="h-6 w-6 text-blue-500" />
                    1. Select User
                  </h2>
                  <select
                    value={selectedUser || ''}
                    onChange={(e) => setSelectedUser(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white mb-4"
                  >
                    <option value="">Choose a user...</option>
                    {users.map(u => (
                      <option key={u.userId} value={u.userId}>
                        {u.name} ({u.email}) - {u.completedLessons.length} lessons
                      </option>
                    ))}
                  </select>

                  {selectedUser && (() => {
                    const selectedUserData = users.find(u => u.userId === selectedUser)
                    return selectedUserData ? (
                      <div className="bg-gray-800 rounded-lg p-4 space-y-3">
                        <div className="flex items-center gap-3 mb-3">
                          <Image
                            src={selectedUserData.imageUrl || '/default-avatar.svg'}
                            alt={selectedUserData.name}
                            width={50}
                            height={50}
                            className="rounded-full border-2 border-gray-600"
                          />
                          <div>
                            <div className="font-bold text-white">{selectedUserData.name}</div>
                            <div className="text-sm text-gray-400">{selectedUserData.email}</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="bg-gray-700 rounded p-2">
                            <span className="text-gray-400">Lessons:</span>
                            <span className="ml-2 font-bold text-blue-400">{selectedUserData.completedLessons.length}</span>
                          </div>
                          <div className="bg-gray-700 rounded p-2">
                            <span className="text-gray-400">Points:</span>
                            <span className="ml-2 font-bold text-purple-400">{selectedUserData.points}</span>
                          </div>
                          <div className="bg-gray-700 rounded p-2">
                            <span className="text-gray-400">Streak:</span>
                            <span className="ml-2 font-bold text-orange-400">🔥 {selectedUserData.streak}</span>
                          </div>
                          <div className="bg-gray-700 rounded p-2">
                            <span className="text-gray-400">Achievements:</span>
                            <span className="ml-2 font-bold text-yellow-400">🏆 {selectedUserData.achievements.length}</span>
                          </div>
                        </div>
                        
                        <div className="pt-3 border-t border-gray-700 space-y-3">
                          <h3 className="text-sm font-semibold text-gray-300">Quick Actions:</h3>
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              onClick={() => resetUserProgress(selectedUserData.userId, 'lessons')}
                              className="px-3 py-2 text-xs bg-orange-600 hover:bg-orange-700 rounded transition text-white"
                            >
                              Reset Lessons
                            </button>
                            <button
                              onClick={() => resetUserProgress(selectedUserData.userId, 'points')}
                              className="px-3 py-2 text-xs bg-purple-600 hover:bg-purple-700 rounded transition text-white"
                            >
                              Reset Points
                            </button>
                            <button
                              onClick={() => resetUserProgress(selectedUserData.userId, 'achievements')}
                              className="px-3 py-2 text-xs bg-yellow-600 hover:bg-yellow-700 rounded transition text-white"
                            >
                              Reset Achievements
                            </button>
                            <button
                              onClick={() => resetUserProgress(selectedUserData.userId, 'all')}
                              className="px-3 py-2 text-xs bg-red-600 hover:bg-red-700 rounded transition text-white"
                            >
                              Reset All
                            </button>
                          </div>
                          
                          <div className="pt-2 border-t border-gray-700">
                            <h3 className="text-sm font-semibold text-gray-300 mb-2">Adjust Points:</h3>
                            <div className="space-y-2">
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  value={pointsAmount}
                                  onChange={(e) => setPointsAmount(Number(e.target.value))}
                                  placeholder="Points amount"
                                  className="flex-1 px-3 py-2 text-sm bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                                />
                                <select
                                  value={pointsOperation}
                                  onChange={(e) => setPointsOperation(e.target.value as any)}
                                  className="px-3 py-2 text-sm bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                                >
                                  <option value="set">Set</option>
                                  <option value="add">Add</option>
                                  <option value="subtract">Subtract</option>
                                </select>
                              </div>
                              <button
                                onClick={() => {
                                  if (pointsAmount !== 0 || pointsOperation === 'set') {
                                    updateUserPoints(selectedUserData.userId, pointsAmount, pointsOperation)
                                  } else {
                                    alert('Please enter a points amount')
                                  }
                                }}
                                className="w-full px-3 py-2 text-xs bg-purple-600 hover:bg-purple-700 rounded transition text-white font-medium"
                              >
                                Update Points
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null
                  })()}
                </div>

                {/* Course Selection Card */}
                <div className="card-gradient border border-gray-700 rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-green-500" />
                    2. Select Course
                  </h2>
                  
                  <select
                    value={selectedCourse}
                    onChange={(e) => {
                      setSelectedCourse(e.target.value)
                      setSelectedLessons([])
                    }}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white mb-4"
                    disabled={!selectedUser}
                  >
                    <option value="">Choose a course...</option>
                    {courses.map(course => (
                      <option key={course.id} value={course.id}>
                        {course.title} ({course.lessons.length} lessons)
                      </option>
                    ))}
                  </select>

                  {selectedCourse && (() => {
                    const selectedCourseData = courses.find(c => c.id === selectedCourse)
                    const selectedUserData = users.find(u => u.userId === selectedUser)
                    
                    return selectedCourseData ? (
                      <div className="bg-gray-800 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="font-bold text-white">{selectedCourseData.title}</h3>
                          <div className="flex gap-2">
                            <button
                              onClick={selectAllLessons}
                              className="px-3 py-1 text-xs bg-green-600 hover:bg-green-700 rounded transition text-white"
                            >
                              <CheckCircle className="inline h-3 w-3 mr-1" />
                              Select All
                            </button>
                            <button
                              onClick={clearLessonSelection}
                              className="px-3 py-1 text-xs bg-gray-600 hover:bg-gray-700 rounded transition text-white"
                            >
                              <XCircle className="inline h-3 w-3 mr-1" />
                              Clear
                            </button>
                          </div>
                        </div>
                        
                        <div className="bg-gray-700 rounded p-3 mb-3 text-sm text-gray-300">
                          <AlertCircle className="inline h-4 w-4 mr-2 text-blue-400" />
                          Selected: <span className="font-bold text-white">{selectedLessons.length}</span> / {selectedCourseData.lessons.length} lessons
                        </div>

                        <div className="max-h-96 overflow-y-auto space-y-2">
                          {selectedCourseData.lessons.map((lesson, idx) => {
                            const lessonId = lesson.id
                            const isCompleted = selectedUserData?.completedLessons.includes(lessonId)
                            const isSelected = selectedLessons.includes(lessonId)
                            
                            return (
                              <div
                                key={idx}
                                onClick={() => toggleLessonSelection(lessonId)}
                                className={`p-3 rounded cursor-pointer transition ${
                                  isSelected 
                                    ? 'bg-green-600 hover:bg-green-700' 
                                    : 'bg-gray-700 hover:bg-gray-600'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    {isSelected ? (
                                      <CheckCircle className="h-5 w-5 text-white" />
                                    ) : (
                                      <div className="h-5 w-5 border-2 border-gray-500 rounded" />
                                    )}
                                    <span className="text-sm font-medium text-white">
                                      Lesson {idx + 1}: {lesson.title}
                                    </span>
                                  </div>
                                  {isCompleted && (
                                    <span className="px-2 py-1 text-xs bg-blue-500 text-white rounded">
                                      Completed
                                    </span>
                                  )}
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    ) : null
                  })()}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="card-gradient border border-gray-700 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                  <Settings className="h-6 w-6 text-purple-500" />
                  3. Perform Action
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={addLessonsToUser}
                    disabled={!selectedUser || selectedLessons.length === 0 || loading}
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium"
                  >
                    <Plus className="h-5 w-5" />
                    Add {selectedLessons.length} Lesson{selectedLessons.length !== 1 ? 's' : ''} to User
                  </button>
                  <button
                    onClick={removeLessonsFromUser}
                    disabled={!selectedUser || selectedLessons.length === 0 || loading}
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium"
                  >
                    <Trash2 className="h-5 w-5" />
                    Remove {selectedLessons.length} Lesson{selectedLessons.length !== 1 ? 's' : ''} from User
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Courses Tab */}
          {activeTab === 'courses' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map(course => (
                <div key={course.id} className="card-gradient border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-white">{course.title}</h3>
                    <span className="px-3 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full font-medium">
                      {course.lessons.length} lessons
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">{course.description}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <BookOpen className="h-4 w-4" />
                    Course ID: {course.id}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Statistics Tab */}
          {activeTab === 'stats' && (
            <div className="space-y-6">
              <div className="card-gradient border border-gray-700 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-white">Platform Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400">{courses.length}</div>
                    <div className="text-sm text-gray-400">Total Courses</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">
                      {courses.reduce((sum, c) => sum + c.lessons.length, 0)}
                    </div>
                    <div className="text-sm text-gray-400">Total Lessons Available</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-400">{stats.totalUsers}</div>
                    <div className="text-sm text-gray-400">Registered Users</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-400">{stats.totalLessons}</div>
                    <div className="text-sm text-gray-400">Lessons Completed by Users</div>
                  </div>
                </div>
              </div>

              <div className="card-gradient border border-gray-700 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 text-white">User Engagement</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4">
                    <span className="text-gray-400">Average Lessons per User</span>
                    <span className="text-xl font-bold text-white">{stats.averageProgress}</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4">
                    <span className="text-gray-400">Active Today</span>
                    <span className="text-xl font-bold text-white">{stats.activeToday}</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4">
                    <span className="text-gray-400">Completion Rate</span>
                    <span className="text-xl font-bold text-white">
                      {courses.reduce((sum, c) => sum + c.lessons.length, 0) > 0
                        ? Math.round((stats.totalLessons / (courses.reduce((sum, c) => sum + c.lessons.length, 0) * stats.totalUsers || 1)) * 100)
                        : 0}%
                    </span>
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
