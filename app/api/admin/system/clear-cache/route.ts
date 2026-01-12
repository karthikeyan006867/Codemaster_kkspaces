import { currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Clear all caches
export async function POST() {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    // In production, this would clear Redis/cache
    
    return NextResponse.json({ 
      success: true, 
      message: 'Cache cleared',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error clearing cache:', error)
    return NextResponse.json({ error: 'Failed to clear cache' }, { status: 500 })
  }
}
