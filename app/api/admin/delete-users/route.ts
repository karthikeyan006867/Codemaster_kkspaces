import { auth, clerkClient } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function DELETE() {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get the current user to check if admin
    const currentUser = await clerkClient.users.getUser(userId)
    const adminEmails = ['kaarthii009.g@gmail.com', 'karthii009.g@gmail.com']
    const isAdmin = currentUser.emailAddresses[0]?.emailAddress && adminEmails.includes(currentUser.emailAddresses[0].emailAddress)

    if (!isAdmin) {
      return NextResponse.json({ error: 'Forbidden - Admin access only' }, { status: 403 })
    }

    // Fetch all users except admins
    const { data: allUsers } = await clerkClient.users.getUserList({ limit: 500 })
    
    let deletedCount = 0
    for (const user of allUsers) {
      const userEmail = user.emailAddresses[0]?.emailAddress
      // Don't delete admin users
      if (!adminEmails.includes(userEmail || '')) {
        try {
          await clerkClient.users.deleteUser(user.id)
          deletedCount++
        } catch (error) {
          console.error(`Failed to delete user ${user.id}:`, error)
        }
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: `Deleted ${deletedCount} users`,
      deletedCount 
    })
  } catch (error) {
    console.error('Error deleting users:', error)
    return NextResponse.json({ error: 'Failed to delete users' }, { status: 500 })
  }
}
