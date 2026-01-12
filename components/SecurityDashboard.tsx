/**
 * Security Dashboard Component
 * Real-time security monitoring and threat visualization
 */
'use client'

import { useEffect, useState, useCallback } from 'react'
import { AdvancedSecurityMonitor } from '@/lib/advancedSecurityMonitoring'

type SecurityMetrics = {
  totalEvents: number
  eventsByType: Record<string, number>
  eventsBySeverity: Record<string, number>
  blockedIPs: number
  topThreats: Array<any>
}

type ThreatLevel = {
  level: 'low' | 'medium' | 'high' | 'critical'
  score: number
}

export default function SecurityDashboard() {
  const [metrics, setMetrics] = useState<SecurityMetrics | null>(null)
  const [threatLevel, setThreatLevel] = useState<ThreatLevel>({ level: 'low', score: 0 })
  const [recentEvents, setRecentEvents] = useState<any[]>([])
  const [timeRange, setTimeRange] = useState(3600000) // 1 hour default

  const loadSecurityData = useCallback(() => {
    try {
      const dashboardData = AdvancedSecurityMonitor.getDashboardData()
      const metricsData = AdvancedSecurityMonitor.getMetrics(timeRange)
      const events = AdvancedSecurityMonitor.getRecentSecurityEvents(100)
      
      setMetrics(metricsData)
      setThreatLevel(dashboardData.threatLevel)
      setRecentEvents(events)
    } catch (error) {
      console.error('Failed to load security data:', error)
    }
  }, [timeRange])

  useEffect(() => {
    loadSecurityData()
    
    // Refresh every 30 seconds
    const interval = setInterval(loadSecurityData, 30000)
    return () => clearInterval(interval)
  }, [loadSecurityData])

  const getThreatLevelColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-500'
      case 'medium': return 'bg-yellow-500'
      case 'high': return 'bg-orange-500'
      case 'critical': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'text-green-600'
      case 'medium': return 'text-yellow-600'
      case 'high': return 'text-orange-600'
      case 'critical': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const exportLogs = () => {
    const logs = AdvancedSecurityMonitor.exportLogs()
    const blob = new Blob([logs], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `security-logs-${new Date().toISOString()}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  if (!metrics) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading security data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Security Dashboard</h1>
          <p className="text-gray-600 mt-2">Real-time security monitoring and threat detection</p>
        </div>

        {/* Threat Level Indicator */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Overall Threat Level</h2>
              <p className="text-gray-600 mt-1">Based on last 24 hours of activity</p>
            </div>
            <div className="text-center">
              <div className={`inline-block px-8 py-4 rounded-lg ${getThreatLevelColor(threatLevel.level)} text-white`}>
                <div className="text-3xl font-bold uppercase">{threatLevel.level}</div>
                <div className="text-sm mt-1">Score: {threatLevel.score}/100</div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Events</p>
                <p className="text-2xl font-bold text-gray-900">{metrics.totalEvents.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-red-500 rounded-md p-3">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Critical Events</p>
                <p className="text-2xl font-bold text-gray-900">{metrics.eventsBySeverity.critical || 0}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">High Severity</p>
                <p className="text-2xl font-bold text-gray-900">{metrics.eventsBySeverity.high || 0}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-gray-700 rounded-md p-3">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Blocked IPs</p>
                <p className="text-2xl font-bold text-gray-900">{metrics.blockedIPs}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Time Range Selector */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Time Range</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setTimeRange(3600000)}
                className={`px-4 py-2 rounded ${timeRange === 3600000 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                1 Hour
              </button>
              <button
                onClick={() => setTimeRange(86400000)}
                className={`px-4 py-2 rounded ${timeRange === 86400000 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                24 Hours
              </button>
              <button
                onClick={() => setTimeRange(604800000)}
                className={`px-4 py-2 rounded ${timeRange === 604800000 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                7 Days
              </button>
              <button
                onClick={exportLogs}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 ml-4"
              >
                Export Logs
              </button>
            </div>
          </div>
        </div>

        {/* Events by Type */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Events by Type</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(metrics.eventsByType).map(([type, count]) => (
              <div key={type} className="border rounded-lg p-4">
                <p className="text-sm text-gray-600 capitalize">{type.replace(/_/g, ' ')}</p>
                <p className="text-2xl font-bold text-gray-900">{count}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Threats */}
        {metrics.topThreats.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Threats</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Severity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      IP Address
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {metrics.topThreats.slice(0, 10).map((threat) => (
                    <tr key={threat.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(threat.timestamp).toLocaleTimeString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">
                        {threat.type.replace(/_/g, ' ')}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${getSeverityColor(threat.severity)}`}>
                        {threat.severity.toUpperCase()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {threat.ip || 'N/A'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                        {JSON.stringify(threat.details)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Recent Events */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Security Events</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Severity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Path
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentEvents.slice(0, 20).map((event) => (
                  <tr key={event.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(event.timestamp).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">
                      {event.type.replace(/_/g, ' ')}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${getSeverityColor(event.severity)}`}>
                      {event.severity.toUpperCase()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {event.blocked ? (
                        <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">Blocked</span>
                      ) : (
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Allowed</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                      {event.path || 'N/A'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
