/**
 * Script to delete all lessons and points for a specific user
 * Usage: node scripts/delete-user-progress.js
 */

const USER_EMAIL = 'saikrishnansaket10@gmail.com'
const CLERK_SECRET_KEY = 'sk_test_OG7V2CceBFfxkdHLJxLczbvYeNX84SdIvoMtBD9aVb'

if (!CLERK_SECRET_KEY) {
  console.error('❌ CLERK_SECRET_KEY not found in environment variables')
  process.exit(1)
}

async function deleteUserProgress() {
  try {
    console.log('🔍 Step 1: Finding user by email...')
    console.log(`   Email: ${USER_EMAIL}`)
    
    // Get all users from Clerk
    const getUsersResponse = await fetch('https://api.clerk.com/v1/users?limit=500', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${CLERK_SECRET_KEY}`,
        'Content-Type': 'application/json'
      }
    })

    if (!getUsersResponse.ok) {
      const errorText = await getUsersResponse.text()
      throw new Error(`Failed to get users: ${getUsersResponse.status} - ${errorText}`)
    }

    const usersData = await getUsersResponse.json()
    
    console.log('   Response received, checking data structure...')
    
    // Handle both possible response formats
    const userData = usersData.data || usersData
    
    if (!Array.isArray(userData)) {
      console.error('❌ Unexpected response format:', usersData)
      throw new Error('Expected an array of users')
    }
    
    console.log(`   Found ${userData.length} users total`)
    
    // Find user by email
    const targetUser = userData.find(user => 
      user.email_addresses?.some(email => email.email_address === USER_EMAIL)
    )

    if (!targetUser) {
      console.log('❌ User not found with email:', USER_EMAIL)
      console.log('\n📋 Available users:')
      userData.forEach(user => {
        const email = user.email_addresses?.[0]?.email_address || 'No email'
        console.log(`   - ${email} (${user.first_name || ''} ${user.last_name || ''})`)
      })
      process.exit(1)
    }

    const userId = targetUser.id
    console.log('✅ User found!')
    console.log(`   ID: ${userId}`)
    console.log(`   Name: ${targetUser.first_name || ''} ${targetUser.last_name || ''}`)
    console.log(`   Email: ${targetUser.email_addresses?.[0]?.email_address || 'N/A'}`)

    // Get current metadata
    const currentMetadata = targetUser.public_metadata || {}
    const currentLessons = currentMetadata.completedLessons || []
    const currentPoints = currentMetadata.points || 0
    
    console.log('\n📊 Current Progress:')
    console.log(`   Completed Lessons: ${currentLessons.length}`)
    console.log(`   Points: ${currentPoints}`)
    console.log(`   Achievements: ${(currentMetadata.achievements || []).length}`)
    console.log(`   Streak: ${currentMetadata.streak || 0}`)

    // Step 2: Reset user's progress
    console.log('\n🗑️  Step 2: Deleting all lessons and points...')
    
    const updateResponse = await fetch(`https://api.clerk.com/v1/users/${userId}/metadata`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${CLERK_SECRET_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        public_metadata: {
          ...currentMetadata,
          completedLessons: [],
          points: 0,
          completedChallenges: [],
          lastUpdated: new Date().toISOString(),
          adminReset: true,
          resetAt: new Date().toISOString(),
          resetReason: 'Admin requested deletion of all lessons and points'
        }
      })
    })

    if (!updateResponse.ok) {
      const errorText = await updateResponse.text()
      throw new Error(`Failed to update user: ${updateResponse.status} - ${errorText}`)
    }

    const updatedUser = await updateResponse.json()
    const newMetadata = updatedUser.public_metadata || {}

    console.log('✅ Successfully deleted user progress!')
    console.log('\n📊 New Progress:')
    console.log(`   Completed Lessons: ${(newMetadata.completedLessons || []).length}`)
    console.log(`   Points: ${newMetadata.points || 0}`)
    console.log(`   Deleted Lessons: ${currentLessons.length}`)
    console.log(`   Deleted Points: ${currentPoints}`)
    console.log(`   Reset At: ${newMetadata.resetAt}`)

    console.log('\n✨ All done! User progress has been reset.')
    
  } catch (error) {
    console.error('\n❌ Error:', error.message)
    process.exit(1)
  }
}

// Run the script
deleteUserProgress()
