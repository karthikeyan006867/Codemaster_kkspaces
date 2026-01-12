import { NextResponse } from 'next/server'
import { withApiSecurity, requireAdmin, createSuccessResponse, createErrorResponse } from '@/lib/apiSecurity'
import { 
  getSecurityLogs, 
  getSecurityStats, 
  detectSuspiciousPatterns,
  exportSecurityLogs,
  SecurityEventType 
} from '@/lib/securityMonitoring'

export const GET = withApiSecurity(
  async (request) => {
    try {
      // Check admin authorization
      const adminError = await requireAdmin(request)
      if (adminError) return adminError

      // Parse query parameters
      const { searchParams } = new URL(request.url)
      const action = searchParams.get('action') || 'logs'
      const type = searchParams.get('type') as SecurityEventType | undefined
      const severity = searchParams.get('severity') as 'low' | 'medium' | 'high' | 'critical' | undefined
      const userId = searchParams.get('userId') || undefined
      const limit = parseInt(searchParams.get('limit') || '100', 10)
      const timeWindow = parseInt(searchParams.get('timeWindow') || '3600000', 10) // Default 1 hour
      const format = searchParams.get('format') as 'json' | 'csv' || 'json'

      switch (action) {
        case 'logs': {
          // Get filtered security logs
          const logs = getSecurityLogs({
            type,
            severity,
            userId,
            limit,
            startTime: Date.now() - timeWindow
          })
          return createSuccessResponse({ logs, count: logs.length })
        }

        case 'stats': {
          // Get security statistics
          const stats = getSecurityStats(timeWindow)
          return createSuccessResponse(stats)
        }

        case 'patterns': {
          // Detect suspicious patterns
          const patterns = detectSuspiciousPatterns()
          return createSuccessResponse({ 
            patterns,
            count: patterns.length,
            hasThreats: patterns.some(p => p.severity === 'critical' || p.severity === 'high')
          })
        }

        case 'export': {
          // Export logs
          const exportedLogs = exportSecurityLogs(format)
          
          if (format === 'csv') {
            return new NextResponse(exportedLogs, {
              headers: {
                'Content-Type': 'text/csv',
                'Content-Disposition': `attachment; filename="security-logs-${Date.now()}.csv"`
              }
            })
          }
          
          return createSuccessResponse({ 
            data: exportedLogs,
            format: 'json'
          })
        }

        default:
          return createErrorResponse('Invalid action parameter', 400)
      }
    } catch (error) {
      console.error('Error fetching security logs:', error)
      return createErrorResponse('Failed to fetch security logs', 500)
    }
  },
  {
    requireAuth: true,
    rateLimit: { maxRequests: 60, windowMs: 60000 }, // 60 requests per minute for admin
  }
)
