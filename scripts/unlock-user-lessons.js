// Script to unlock lessons for a specific user
// Usage: Run this script to unlock the first 7 HTML lessons for Arul G

const unlockLessonsForUser = async () => {
  const userId = 'user_37W'
  const userName = 'Arul G'
  const userEmail = '7a06arul@gmail.com'
  const courseId = 'html'
  
  // First 7 HTML lessons
  const lessonIds = [
    'html-1',
    'html-2', 
    'html-3',
    'html-4',
    'html-5',
    'html-6',
    'html-7'
  ]

  console.log('='.repeat(60))
  console.log('UNLOCKING LESSONS FOR USER')
  console.log('='.repeat(60))
  console.log(`User ID: ${userId}`)
  console.log(`User Name: ${userName}`)
  console.log(`User Email: ${userEmail}`)
  console.log(`Course: ${courseId.toUpperCase()}`)
  console.log(`Lessons to unlock: ${lessonIds.length}`)
  console.log('Lesson IDs:', lessonIds.join(', '))
  console.log('='.repeat(60))

  try {
    const response = await fetch('http://localhost:3000/api/admin/unlock-lessons', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        lessonIds,
        courseId
      })
    })

    const result = await response.json()

    if (response.ok) {
      console.log('\n✅ SUCCESS!')
      console.log('='.repeat(60))
      console.log(`Message: ${result.message}`)
      console.log(`Total completed lessons now: ${result.totalCompletedLessons}`)
      console.log('Unlocked lessons:', result.unlockedLessons.join(', '))
      console.log('='.repeat(60))
      console.log('\n📝 Next Steps:')
      console.log('1. User should sign in to the application')
      console.log('2. Navigate to the HTML course')
      console.log('3. The first 7 lessons should now show as completed/unlocked')
      console.log('='.repeat(60))
    } else {
      console.error('\n❌ ERROR!')
      console.error('='.repeat(60))
      console.error('Status:', response.status)
      console.error('Error:', result.error)
      if (result.details) {
        console.error('Details:', result.details)
      }
      console.error('='.repeat(60))
    }
  } catch (error) {
    console.error('\n❌ FETCH ERROR!')
    console.error('='.repeat(60))
    console.error('Make sure the dev server is running on http://localhost:3000')
    console.error('Error:', error instanceof Error ? error.message : error)
    console.error('='.repeat(60))
  }
}

// Run the script
console.log('\n🚀 Starting lesson unlock process...\n')
unlockLessonsForUser()
