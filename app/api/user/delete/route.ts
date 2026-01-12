import { auth, clerkClient } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function DELETE() {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Delete the user from Clerk
    await clerkClient.users.deleteUser(userId)

    return NextResponse.json({ 
      success: true, 
      message: 'Account deleted successfully' 
    })
  } catch (error) {
    console.error('Error deleting user account:', error)
    return NextResponse.json({ 
      error: 'Failed to delete account',
      message: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 })
  }
}
