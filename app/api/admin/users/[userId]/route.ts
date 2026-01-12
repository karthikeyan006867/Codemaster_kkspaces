import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/admin'

// Get user details
export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const targetUser = await clerkClient.users.getUser(params.userId)

    return NextResponse.json({
      id: targetUser.id,
      email: targetUser.emailAddresses[0]?.emailAddress,
      firstName: targetUser.firstName,
      lastName: targetUser.lastName,
      createdAt: targetUser.createdAt,
      lastSignInAt: targetUser.lastSignInAt,
      publicMetadata: targetUser.publicMetadata,
      privateMetadata: targetUser.privateMetadata,
      imageUrl: targetUser.imageUrl,
    })
  } catch (error) {
    console.error('Error getting user:', error)
    return NextResponse.json({ error: 'Failed to get user' }, { status: 500 })
  }
}

// Update user
export async function PATCH(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const body = await request.json()
    const { firstName, lastName, publicMetadata, privateMetadata } = body

    const updates: any = {}
    if (firstName !== undefined) updates.firstName = firstName
    if (lastName !== undefined) updates.lastName = lastName
    if (publicMetadata !== undefined) updates.publicMetadata = publicMetadata
    if (privateMetadata !== undefined) updates.privateMetadata = privateMetadata

    const updatedUser = await clerkClient.users.updateUser(params.userId, updates)

    return NextResponse.json({ success: true, user: updatedUser })
  } catch (error) {
    console.error('Error updating user:', error)
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 })
  }
}

// Delete user
export async function DELETE(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress
    
    if (!isAdmin(email)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    await clerkClient.users.deleteUser(params.userId)

    return NextResponse.json({ success: true, message: 'User deleted successfully' })
  } catch (error) {
    console.error('Error deleting user:', error)
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 })
  }
}
