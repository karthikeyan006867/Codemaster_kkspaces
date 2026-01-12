import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Grant achievements to users
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await request.json()
    const { userId, achievementIds } = body

    if (!userId || !achievementIds || !Array.isArray(achievementIds)) {
      return NextResponse.json({ error: 'userId and achievementIds array required' }, { status: 400 })
    }

    const targetUser = await clerkClient.users.getUser(userId)
    const currentMetadata = targetUser.publicMetadata as any || {}
    const currentAchievements = currentMetadata.achievements || []
    
    const updatedAchievements = Array.from(new Set([...currentAchievements, ...achievementIds]))

    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        ...currentMetadata,
        achievements: updatedAchievements,
        lastUpdated: new Date().toISOString(),
        adminModifiedBy: email,
      }
    })

    return NextResponse.json({ 
      success: true,
      added: achievementIds.length,
      total: updatedAchievements.length
    })
  } catch (error) {
    console.error('Error granting achievements:', error)
    return NextResponse.json({ error: 'Failed to grant achievements' }, { status: 500 })
  }
}
