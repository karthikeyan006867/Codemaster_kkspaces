import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Batch update multiple users
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await request.json()
    const { userIds, updates } = body

    if (!userIds || !Array.isArray(userIds) || !updates) {
      return NextResponse.json({ error: 'userIds array and updates object required' }, { status: 400 })
    }

    const results = []
    const errors = []

    for (const userId of userIds) {
      try {
        const targetUser = await clerkClient.users.getUser(userId)
        const currentMetadata = targetUser.publicMetadata as any || {}

        const newMetadata = {
          ...currentMetadata,
          ...updates,
          lastUpdated: new Date().toISOString(),
          adminModifiedBy: email,
          adminModifiedAt: new Date().toISOString()
        }

        await clerkClient.users.updateUserMetadata(userId, {
          publicMetadata: newMetadata
        })

        results.push({ userId, success: true })
      } catch (error) {
        errors.push({ userId, error: error instanceof Error ? error.message : 'Unknown error' })
      }
    }

    return NextResponse.json({ 
      success: true,
      updated: results.length,
      failed: errors.length,
      results,
      errors
    })
  } catch (error) {
    console.error('Error batch updating users:', error)
    return NextResponse.json({ error: 'Failed to batch update users' }, { status: 500 })
  }
}
