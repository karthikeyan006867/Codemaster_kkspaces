import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Export all users data
export async function GET(request: Request) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const { searchParams } = new URL(request.url)
    const format = searchParams.get('format') || 'json'

    const users = await clerkClient.users.getUserList({ limit: 500 })
    
    const exportData = users.data.map(u => ({
      userId: u.id,
      email: u.emailAddresses[0]?.emailAddress,
      firstName: u.firstName,
      lastName: u.lastName,
      createdAt: u.createdAt,
      lastSignInAt: u.lastSignInAt,
      completedLessons: (u.publicMetadata as any)?.completedLessons || [],
      achievements: (u.publicMetadata as any)?.achievements || [],
      points: (u.publicMetadata as any)?.points || 0,
      streak: (u.publicMetadata as any)?.streak || 0,
    }))

    if (format === 'csv') {
      const csvRows = [
        ['User ID', 'Email', 'First Name', 'Last Name', 'Created At', 'Last Sign In', 'Completed Lessons', 'Achievements', 'Points', 'Streak'],
        ...exportData.map(u => [
          u.userId,
          u.email,
          u.firstName || '',
          u.lastName || '',
          new Date(u.createdAt).toISOString(),
          u.lastSignInAt ? new Date(u.lastSignInAt).toISOString() : '',
          u.completedLessons.length,
          u.achievements.length,
          u.points,
          u.streak
        ])
      ]
      
      const csv = csvRows.map(row => row.join(',')).join('\n')
      
      return new NextResponse(csv, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="users-export-${Date.now()}.csv"`
        }
      })
    }

    return NextResponse.json({
      exportDate: new Date().toISOString(),
      totalUsers: exportData.length,
      data: exportData
    })
  } catch (error) {
    console.error('Error exporting users:', error)
    return NextResponse.json({ error: 'Failed to export users' }, { status: 500 })
  }
}
