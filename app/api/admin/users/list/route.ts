import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

export async function GET(request: Request) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '100')
    const offset = parseInt(searchParams.get('offset') || '0')

    const users = await clerkClient.users.getUserList({
      limit,
      offset,
    })

    const formattedUsers = users.data.map(u => ({
      id: u.id,
      email: u.emailAddresses[0]?.emailAddress,
      firstName: u.firstName,
      lastName: u.lastName,
      createdAt: u.createdAt,
      lastSignInAt: u.lastSignInAt,
      metadata: u.publicMetadata,
      imageUrl: u.imageUrl,
    }))

    return NextResponse.json({
      users: formattedUsers,
      totalCount: users.totalCount,
    })
  } catch (error) {
    console.error('Error listing users:', error)
    return NextResponse.json({ error: 'Failed to list users' }, { status: 500 })
  }
}
