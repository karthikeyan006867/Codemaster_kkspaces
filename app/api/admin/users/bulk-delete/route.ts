import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Bulk delete users
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await request.json()
    const { userIds } = body

    if (!userIds || !Array.isArray(userIds)) {
      return NextResponse.json({ error: 'userIds array required' }, { status: 400 })
    }

    const results = []
    const errors = []

    for (const userId of userIds) {
      try {
        await clerkClient.users.deleteUser(userId)
        results.push({ userId, success: true })
      } catch (error) {
        errors.push({ 
          userId, 
          error: error instanceof Error ? error.message : 'Unknown error' 
        })
      }
    }

    return NextResponse.json({
      success: true,
      deleted: results.length,
      failed: errors.length,
      results,
      errors
    })
  } catch (error) {
    console.error('Error bulk deleting users:', error)
    return NextResponse.json({ error: 'Failed to bulk delete' }, { status: 500 })
  }
}
