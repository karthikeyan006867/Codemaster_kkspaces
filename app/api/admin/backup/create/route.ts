import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Backup all user data
export async function GET() {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const users = await clerkClient.users.getUserList({ limit: 500 })
    
    const backup = {
      timestamp: new Date().toISOString(),
      createdBy: email,
      totalUsers: users.totalCount,
      users: users.data.map(u => ({
        userId: u.id,
        email: u.emailAddresses[0]?.emailAddress,
        firstName: u.firstName,
        lastName: u.lastName,
        createdAt: u.createdAt,
        publicMetadata: u.publicMetadata,
      }))
    }

    return NextResponse.json(backup)
  } catch (error) {
    console.error('Error creating backup:', error)
    return NextResponse.json({ error: 'Failed to create backup' }, { status: 500 })
  }
}
