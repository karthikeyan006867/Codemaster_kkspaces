import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Import user progress from JSON
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await request.json()
    const { imports, mergeMode = 'replace' } = body

    if (!imports || !Array.isArray(imports)) {
      return NextResponse.json({ error: 'imports array required' }, { status: 400 })
    }

    const results = []
    const errors = []

    for (const item of imports) {
      try {
        const { userId, metadata } = item
        
        if (!userId) {
          errors.push({ item, error: 'Missing userId' })
          continue
        }

        const targetUser = await clerkClient.users.getUser(userId)
        const currentMetadata = targetUser.publicMetadata as any || {}

        let newMetadata
        if (mergeMode === 'merge') {
          newMetadata = { ...currentMetadata, ...metadata }
        } else {
          newMetadata = metadata
        }

        newMetadata.importedAt = new Date().toISOString()
        newMetadata.importedBy = email

        await clerkClient.users.updateUserMetadata(userId, {
          publicMetadata: newMetadata
        })

        results.push({ userId, success: true })
      } catch (error) {
        errors.push({ 
          item, 
          error: error instanceof Error ? error.message : 'Unknown error' 
        })
      }
    }

    return NextResponse.json({
      success: true,
      imported: results.length,
      failed: errors.length,
      results,
      errors
    })
  } catch (error) {
    console.error('Error importing data:', error)
    return NextResponse.json({ error: 'Failed to import data' }, { status: 500 })
  }
}
