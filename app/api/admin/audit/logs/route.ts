import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Audit log of admin actions
export async function GET() {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const users = await clerkClient.users.getUserList({ limit: 500 })
    
    const auditLogs: any[] = []

    users.data.forEach(u => {
      const metadata = u.publicMetadata as any
      
      if (metadata?.adminModifiedAt) {
        auditLogs.push({
          userId: u.id,
          email: u.emailAddresses[0]?.emailAddress,
          action: 'Progress Modified',
          adminEmail: metadata.adminModifiedBy,
          timestamp: metadata.adminModifiedAt
        })
      }

      if (metadata?.bannedAt) {
        auditLogs.push({
          userId: u.id,
          email: u.emailAddresses[0]?.emailAddress,
          action: 'User Banned',
          adminEmail: metadata.bannedBy,
          timestamp: metadata.bannedAt,
          reason: metadata.bannedReason
        })
      }

      if (metadata?.roleUpdatedAt) {
        auditLogs.push({
          userId: u.id,
          email: u.emailAddresses[0]?.emailAddress,
          action: 'Role Updated',
          adminEmail: metadata.roleUpdatedBy,
          timestamp: metadata.roleUpdatedAt,
          newRole: metadata.role
        })
      }
    })

    auditLogs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

    return NextResponse.json({
      total: auditLogs.length,
      logs: auditLogs.slice(0, 100)
    })
  } catch (error) {
    console.error('Error getting audit logs:', error)
    return NextResponse.json({ error: 'Failed to get audit logs' }, { status: 500 })
  }
}
