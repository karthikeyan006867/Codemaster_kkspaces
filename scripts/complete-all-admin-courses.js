// Complete all courses for admin user
const { createClerkClient } = require('@clerk/clerk-sdk-node');

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

async function completeAllCoursesForAdmin() {
  try {
    // Find admin user (you need to replace this with actual admin user ID)
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
    const users = await clerkClient.users.getUserList({ emailAddress: [adminEmail] });
    
    if (users.length === 0) {
      console.error(`Admin user not found with email: ${adminEmail}`);
      console.log('Please set ADMIN_EMAIL environment variable');
      return;
    }

    const adminUser = users[0];
    console.log(`Found admin user: ${adminUser.emailAddresses[0].emailAddress}`);

    // All course IDs
    const courseIds = [
      'python', 'javascript', 'html-css', 'react', 'nodejs', 'typescript', 'vue', 
      'angular', 'nextjs', 'mongodb', 'sql', 'postgresql', 'graphql', 'rest-api',
      'docker', 'kubernetes', 'aws', 'git', 'linux', 'cpp', 'java', 'csharp',
      'php', 'ruby', 'go', 'rust', 'swift', 'kotlin', 'flutter', 'react-native',
      'tailwind', 'bootstrap', 'sass', 'webpack', 'vite', 'firebase', 'redis',
      'elasticsearch', 'nginx', 'ci-cd', 'testing', 'algorithms', 'data-structures',
      'machine-learning', 'ai', 'blockchain', 'cybersecurity', 'devops', 'cloud',
      'mobile-dev'
    ];

    // Create progress data - all lessons completed with full points
    const completedLessons = {};
    const testResults = {};
    
    courseIds.forEach(courseId => {
      // Mark all lessons as completed (assuming 50 lessons per course)
      for (let i = 1; i <= 50; i++) {
        const lessonId = `${courseId}-${i}`;
        completedLessons[lessonId] = {
          completed: true,
          completedAt: new Date().toISOString(),
          score: 100,
          timeSpent: 300 // 5 minutes
        };
      }
      
      // Mark test as passed
      testResults[courseId] = {
        attempts: 1,
        passed: true,
        score: 100,
        lastAttempt: new Date().toISOString()
      };
    });

    const metadata = {
      completedLessons,
      testResults,
      points: courseIds.length * 5000, // 5000 points per course
      streak: 100,
      level: 50,
      achievements: ['speedster', 'perfect-score', 'quick-learner', 'code-master', 
                     'problem-solver', 'streak-master', 'course-crusher', 'all-rounder'],
      certificates: courseIds.map(id => ({
        courseId: id,
        earnedAt: new Date().toISOString(),
        score: 100
      }))
    };

    // Update user metadata
    await clerkClient.users.updateUser(adminUser.id, {
      publicMetadata: metadata
    });

    console.log(`\n✅ Successfully completed all courses for admin user!`);
    console.log(`📊 Total Points: ${metadata.points}`);
    console.log(`🎓 Certificates Earned: ${courseIds.length}`);
    console.log(`⭐ Level: ${metadata.level}`);
    console.log(`\nAdmin can now access all certification tests and full-stack projects!`);

  } catch (error) {
    console.error('Error completing courses:', error);
    process.exit(1);
  }
}

completeAllCoursesForAdmin();
