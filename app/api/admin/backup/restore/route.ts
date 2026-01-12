import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Restore from backup
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await request.json()
    const { users: backupUsers } = body

    if (!backupUsers || !Array.isArray(backupUsers)) {
      return NextResponse.json({ error: 'Invalid backup format' }, { status: 400 })
    }

    const results = []
    const errors = []

    for (const backupUser of backupUsers) {
      try {
        const { userId, publicMetadata } = backupUser
        
        await clerkClient.users.updateUserMetadata(userId, {
          publicMetadata: {
            ...publicMetadata,
            restoredAt: new Date().toISOString(),
            restoredBy: email
          }
        })

        results.push({ userId, success: true })
      } catch (error) {
        errors.push({ 
          userId: backupUser.userId, 
          error: error instanceof Error ? error.message : 'Unknown error' 
        })
      }
    }

    return NextResponse.json({
      success: true,
      restored: results.length,
      failed: errors.length,
      results,
      errors
    })
  } catch (error) {
    console.error('Error restoring backup:', error)
    return NextResponse.json({ error: 'Failed to restore backup' }, { status: 500 })
  }
}
