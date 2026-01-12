// Admin helper utilities and functions

import { clerkClient } from '@clerk/nextjs/server'

// Batch operations utilities
export const adminUtils = {
  // Find users by email pattern
  findUsersByEmail: async (pattern: string) => {
    const users = await clerkClient.users.getUserList({ limit: 500 })
    return users.data.filter(u => 
      u.emailAddresses[0]?.emailAddress.includes(pattern)
    )
  },

  // Find users by lesson completion
  findUsersByLessons: async (minLessons: number) => {
    const users = await clerkClient.users.getUserList({ limit: 500 })
    return users.data.filter(u => {
      const metadata = u.publicMetadata as any
      return (metadata?.completedLessons?.length || 0) >= minLessons
    })
  },

  // Find inactive users
  findInactiveUsers: async (days: number) => {
    const users = await clerkClient.users.getUserList({ limit: 500 })
    const cutoff = new Date(Date.now() - days * 24 * 60 * 60 * 1000)
    
    return users.data.filter(u => {
      if (!u.lastSignInAt) return true
      return new Date(u.lastSignInAt) < cutoff
    })
  },

  // Calculate user rank
  calculateUserRank: async (userId: string) => {
    const users = await clerkClient.users.getUserList({ limit: 500 })
    const sorted = users.data
      .map(u => ({
        id: u.id,
        points: (u.publicMetadata as any)?.points || 0
      }))
      .sort((a, b) => b.points - a.points)
    
    const rank = sorted.findIndex(u => u.id === userId) + 1
    return { rank, totalUsers: users.totalCount }
  },

  // Get course completion rate
  getCourseCompletionRate: async (courseId: string, totalLessons: number) => {
    const users = await clerkClient.users.getUserList({ limit: 500 })
    let totalCompletion = 0
    let enrolledUsers = 0

    users.data.forEach(u => {
      const metadata = u.publicMetadata as any
      const completedLessons = metadata?.completedLessons || []
      const courseLessons = completedLessons.filter((l: string) => 
        l.startsWith(`${courseId}-`)
      )
      
      if (courseLessons.length > 0) {
        enrolledUsers++
        totalCompletion += (courseLessons.length / totalLessons) * 100
      }
    })

    return {
      averageCompletion: enrolledUsers > 0 ? totalCompletion / enrolledUsers : 0,
      enrolledUsers,
      totalUsers: users.totalCount
    }
  },

  // Format user data for export
  formatUserForExport: (user: any) => {
    const metadata = user.publicMetadata as any || {}
    return {
      userId: user.id,
      email: user.emailAddresses[0]?.emailAddress,
      firstName: user.firstName,
      lastName: user.lastName,
      createdAt: new Date(user.createdAt).toISOString(),
      lastSignIn: user.lastSignInAt ? new Date(user.lastSignInAt).toISOString() : null,
      completedLessons: metadata.completedLessons || [],
      lessonsCount: (metadata.completedLessons || []).length,
      points: metadata.points || 0,
      streak: metadata.streak || 0,
      achievements: metadata.achievements || [],
      achievementsCount: (metadata.achievements || []).length,
      banned: metadata.banned || false,
      role: metadata.role || 'user',
      tags: metadata.tags || []
    }
  },

  // Generate CSV from users
  generateCSV: (users: any[]) => {
    const headers = [
      'User ID', 'Email', 'First Name', 'Last Name', 'Created At', 
      'Last Sign In', 'Lessons', 'Points', 'Streak', 'Achievements', 
      'Banned', 'Role'
    ]
    
    const rows = users.map(u => {
      const metadata = u.publicMetadata as any || {}
      return [
        u.id,
        u.emailAddresses[0]?.emailAddress || '',
        u.firstName || '',
        u.lastName || '',
        new Date(u.createdAt).toISOString(),
        u.lastSignInAt ? new Date(u.lastSignInAt).toISOString() : '',
        (metadata.completedLessons || []).length,
        metadata.points || 0,
        metadata.streak || 0,
        (metadata.achievements || []).length,
        metadata.banned ? 'Yes' : 'No',
        metadata.role || 'user'
      ]
    })

    return [headers, ...rows].map(row => row.join(',')).join('\n')
  },

  // Validate lesson IDs format
  validateLessonIds: (lessonIds: string[], courseId?: string) => {
    const valid = lessonIds.filter(id => {
      if (courseId) {
        return id.startsWith(`${courseId}-`) && /^[a-z]+-\d+$/.test(id)
      }
      return /^[a-z]+-\d+$/.test(id)
    })
    
    return {
      valid,
      invalid: lessonIds.filter(id => !valid.includes(id)),
      isValid: valid.length === lessonIds.length
    }
  }
}

// Statistics helpers
export const statsUtils = {
  // Calculate percentile
  calculatePercentile: (value: number, allValues: number[]) => {
    const sorted = [...allValues].sort((a, b) => a - b)
    const index = sorted.indexOf(value)
    return ((index / sorted.length) * 100).toFixed(2)
  },

  // Get time-based segments
  getTimeSegments: (days: number) => {
    const segments = []
    const now = new Date()
    
    for (let i = 0; i < days; i++) {
      const date = new Date(now)
      date.setDate(date.getDate() - i)
      segments.push({
        date: date.toISOString().split('T')[0],
        startOfDay: new Date(date.setHours(0, 0, 0, 0)),
        endOfDay: new Date(date.setHours(23, 59, 59, 999))
      })
    }
    
    return segments
  }
}
