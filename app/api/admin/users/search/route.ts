import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Search users by various criteria
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await request.json()
    const { query, filters } = body

    const users = await clerkClient.users.getUserList({ limit: 500 })
    
    let filteredUsers = users.data

    // Text search
    if (query) {
      const searchLower = query.toLowerCase()
      filteredUsers = filteredUsers.filter(u => 
        u.emailAddresses[0]?.emailAddress.toLowerCase().includes(searchLower) ||
        u.firstName?.toLowerCase().includes(searchLower) ||
        u.lastName?.toLowerCase().includes(searchLower) ||
        u.id.toLowerCase().includes(searchLower)
      )
    }

    // Apply filters
    if (filters) {
      if (filters.minPoints !== undefined) {
        filteredUsers = filteredUsers.filter(u => 
          ((u.publicMetadata as any)?.points || 0) >= filters.minPoints
        )
      }
      
      if (filters.minLessons !== undefined) {
        filteredUsers = filteredUsers.filter(u => 
          ((u.publicMetadata as any)?.completedLessons?.length || 0) >= filters.minLessons
        )
      }

      if (filters.hasAchievements) {
        filteredUsers = filteredUsers.filter(u => 
          ((u.publicMetadata as any)?.achievements?.length || 0) > 0
        )
      }

      if (filters.createdAfter) {
        const date = new Date(filters.createdAfter)
        filteredUsers = filteredUsers.filter(u => new Date(u.createdAt) > date)
      }

      if (filters.lastSignInAfter) {
        const date = new Date(filters.lastSignInAfter)
        filteredUsers = filteredUsers.filter(u => 
          u.lastSignInAt && new Date(u.lastSignInAt) > date
        )
      }
    }

    const results = filteredUsers.map(u => ({
      id: u.id,
      email: u.emailAddresses[0]?.emailAddress,
      firstName: u.firstName,
      lastName: u.lastName,
      createdAt: u.createdAt,
      lastSignInAt: u.lastSignInAt,
      metadata: u.publicMetadata,
    }))

    return NextResponse.json({
      total: results.length,
      users: results
    })
  } catch (error) {
    console.error('Error searching users:', error)
    return NextResponse.json({ error: 'Failed to search users' }, { status: 500 })
  }
}
