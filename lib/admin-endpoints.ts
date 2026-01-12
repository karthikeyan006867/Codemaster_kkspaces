// Admin API endpoints documentation

export interface AdminEndpoints {
  // User Management (15 endpoints)
  'GET /api/admin/users/list': 'List all users with pagination'
  'GET /api/admin/users/[userId]': 'Get specific user details'
  'PATCH /api/admin/users/[userId]': 'Update user information'
  'DELETE /api/admin/users/[userId]': 'Delete a user'
  'POST /api/admin/users/search': 'Search users by criteria'
  'POST /api/admin/users/add-lessons': 'Add lessons to user'
  'POST /api/admin/users/remove-lessons': 'Remove lessons from user'
  'POST /api/admin/users/update-progress': 'Update user progress'
  'POST /api/admin/users/reset-progress': 'Reset user progress'
  'POST /api/admin/users/batch-update': 'Batch update multiple users'
  'POST /api/admin/users/grant-achievements': 'Grant achievements to user'
  'POST /api/admin/users/update-points': 'Update user points'
  'POST /api/admin/users/update-streak': 'Update user streak'
  'POST /api/admin/users/ban': 'Ban or unban user'
  'POST /api/admin/users/set-role': 'Set user role'
  'POST /api/admin/users/bulk-delete': 'Delete multiple users'

  // Course Management (5 endpoints)
  'GET /api/admin/courses/list': 'List all courses'
  'GET /api/admin/courses/[courseId]/stats': 'Get course statistics'
  'POST /api/admin/courses/enroll': 'Enroll user in course'
  'POST /api/admin/courses/unenroll': 'Unenroll user from course'
  'POST /api/admin/unlock-lessons': 'Unlock specific lessons for user'

  // Analytics & Reporting (3 endpoints)
  'GET /api/admin/analytics/stats': 'Platform analytics'
  'GET /api/admin/activity/logs': 'User activity logs'
  'GET /api/admin/system/health': 'System health metrics'

  // Leaderboard Management (2 endpoints)
  'GET /api/admin/leaderboard/get': 'Get leaderboard data'
  'POST /api/admin/leaderboard/reset': 'Reset leaderboard'

  // Notifications (2 endpoints)
  'POST /api/admin/notifications/send': 'Send notification to user'
  'POST /api/admin/notifications/broadcast': 'Broadcast to all users'

  // Data Management (5 endpoints)
  'GET /api/admin/export/users': 'Export users data (JSON/CSV)'
  'POST /api/admin/import/progress': 'Import user progress'
  'GET /api/admin/backup/create': 'Create full backup'
  'POST /api/admin/backup/restore': 'Restore from backup'
  'GET /api/admin/system/flags': 'Get feature flags'
  'POST /api/admin/system/flags': 'Update feature flags'

  // Admin Access (1 endpoint)
  'GET /api/admin/check': 'Check if user is admin'
}

// Total: 33+ endpoints created so far
