import { currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Get feature flags
export async function GET() {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    // In production, these would come from a database
    const flags = {
      enableChallenges: true,
      enableLeaderboard: true,
      enableAchievements: true,
      enableSocialFeatures: false,
      enableBetaFeatures: false,
      maintenanceMode: false
    }

    return NextResponse.json({ flags })
  } catch (error) {
    console.error('Error getting flags:', error)
    return NextResponse.json({ error: 'Failed to get flags' }, { status: 500 })
  }
}

// Update feature flags
export async function POST(request: Request) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await request.json()
    // In production, save to database
    
    return NextResponse.json({ success: true, flags: body })
  } catch (error) {
    console.error('Error updating flags:', error)
    return NextResponse.json({ error: 'Failed to update flags' }, { status: 500 })
  }
}
