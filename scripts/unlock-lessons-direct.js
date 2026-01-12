// Direct script to unlock lessons using Clerk API
// This script can run without the dev server

const CLERK_SECRET_KEY = 'sk_test_OG7V2CceBFfxkdHLJxLczbvYeNX84SdIvoMtBD9aVb'
const USER_ID = 'user_37W'
const USER_NAME = 'Arul G'
const USER_EMAIL = '7a06arul@gmail.com'

// First 7 HTML lessons to unlock
const lessonIds = [
  'html-1',
  'html-2', 
  'html-3',
  'html-4',
  'html-5',
  'html-6',
  'html-7'
]

async function unlockLessons() {
  console.log('\n' + '='.repeat(60))
  console.log('🔓 UNLOCKING LESSONS VIA CLERK API')
  console.log('='.repeat(60))
  console.log(`User ID: ${USER_ID}`)
  console.log(`User Name: ${USER_NAME}`)
  console.log(`User Email: ${USER_EMAIL}`)
  console.log(`Course: HTML`)
  console.log(`Lessons to unlock: ${lessonIds.length}`)
  console.log('Lesson IDs:', lessonIds.join(', '))
  console.log('='.repeat(60))

  try {
    // Step 1: Get current user data
    console.log('\n📡 Step 1: Fetching current user data from Clerk...')
    const getUserResponse = await fetch(`https://api.clerk.com/v1/users/${USER_ID}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${CLERK_SECRET_KEY}`,
        'Content-Type': 'application/json'
      }
    })

    if (!getUserResponse.ok) {
      const errorText = await getUserResponse.text()
      throw new Error(`Failed to get user: ${getUserResponse.status} - ${errorText}`)
    }

    const userData = await getUserResponse.json()
    console.log('✅ User found successfully!')
    console.log(`   Name: ${userData.first_name} ${userData.last_name}`)
    console.log(`   Email: ${userData.email_addresses?.[0]?.email_address || 'N/A'}`)
    
    const currentMetadata = userData.public_metadata || {}
    const currentCompletedLessons = currentMetadata.completedLessons || []
    console.log(`   Current completed lessons: ${currentCompletedLessons.length}`)

    // Step 2: Merge new lessons with existing ones
    console.log('\n📝 Step 2: Merging lessons...')
    const updatedLessons = Array.from(new Set([...currentCompletedLessons, ...lessonIds]))
    const newLessonsAdded = updatedLessons.length - currentCompletedLessons.length
    console.log(`   Previous count: ${currentCompletedLessons.length}`)
    console.log(`   New lessons being added: ${newLessonsAdded}`)
    console.log(`   Total after update: ${updatedLessons.length}`)

    // Step 3: Update user metadata
    console.log('\n💾 Step 3: Updating user metadata in Clerk...')
    const updateResponse = await fetch(`https://api.clerk.com/v1/users/${USER_ID}/metadata`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${CLERK_SECRET_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        public_metadata: {
          ...currentMetadata,
          completedLessons: updatedLessons,
          lastUpdated: new Date().toISOString()
        }
      })
    })

    if (!updateResponse.ok) {
      const errorText = await updateResponse.text()
      throw new Error(`Failed to update user: ${updateResponse.status} - ${errorText}`)
    }

    const updateResult = await updateResponse.json()
    console.log('✅ Metadata updated successfully!')

    // Success summary
    console.log('\n' + '='.repeat(60))
    console.log('🎉 SUCCESS!')
    console.log('='.repeat(60))
    console.log(`✓ Unlocked ${newLessonsAdded} new lessons for ${USER_NAME}`)
    console.log(`✓ Total completed lessons: ${updatedLessons.length}`)
    console.log('\n📚 Unlocked HTML Lessons:')
    lessonIds.forEach((id, index) => {
      console.log(`   ${index + 1}. ${id}`)
    })
    console.log('\n📝 Next Steps:')
    console.log('   1. User should sign in at: http://localhost:3000/sign-in')
    console.log('   2. Navigate to the HTML course')
    console.log('   3. The first 7 lessons should now be marked as completed')
    console.log('='.repeat(60) + '\n')

  } catch (error) {
    console.error('\n' + '='.repeat(60))
    console.error('❌ ERROR!')
    console.error('='.repeat(60))
    console.error('Error:', error instanceof Error ? error.message : error)
    console.error('='.repeat(60) + '\n')
    process.exit(1)
  }
}

// Run the script
unlockLessons()
