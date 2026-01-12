import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Update user points
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await request.json()
    const { userId, points, operation = 'set' } = body

    if (!userId || points === undefined) {
      return NextResponse.json({ error: 'userId and points required' }, { status: 400 })
    }

    const targetUser = await clerkClient.users.getUser(userId)
    const currentMetadata = targetUser.publicMetadata as any || {}
    const currentPoints = currentMetadata.points || 0

    let newPoints = points
    if (operation === 'add') {
      newPoints = currentPoints + points
    } else if (operation === 'subtract') {
      newPoints = Math.max(0, currentPoints - points)
    }

    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        ...currentMetadata,
        points: newPoints,
        lastUpdated: new Date().toISOString(),
        adminModifiedBy: email,
      }
    })

    return NextResponse.json({ 
      success: true,
      previousPoints: currentPoints,
      newPoints,
      operation
    })
  } catch (error) {
    console.error('Error updating points:', error)
    return NextResponse.json({ error: 'Failed to update points' }, { status: 500 })
  }
}
