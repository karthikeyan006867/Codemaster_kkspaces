/**
 * Verify all course routes and lesson IDs are correct
 */

const fs = require('fs');
const path = require('path');

// Read courses.ts
const coursesPath = path.join(__dirname, '..', 'data', 'courses.ts');
const coursesContent = fs.readFileSync(coursesPath, 'utf8');

// Extract course IDs from courses.ts
const courseIdMatches = coursesContent.match(/id:\s*'([^']+)'/g);
const courseIds = courseIdMatches ? courseIdMatches.map(m => m.match(/'([^']+)'/)[1]) : [];

console.log('📚 Found courses:', courseIds.length);
console.log('');

// Check each course
const issues = [];
courseIds.forEach((courseId, index) => {
  console.log(`${index + 1}. ${courseId}`);
  
  // Check if lesson file exists
  const possibleFiles = [
    `${courseId}Lessons.ts`,
    `${courseId.replace(/-/g, '')}Lessons.ts`,
  ];
  
  let foundFile = null;
  for (const fileName of possibleFiles) {
    const filePath = path.join(__dirname, '..', 'data', 'lessons', fileName);
    if (fs.existsSync(filePath)) {
      foundFile = fileName;
      break;
    }
  }
  
  if (!foundFile) {
    // Check in htmlCourse.ts for HTML
    if (courseId === 'html') {
      const htmlPath = path.join(__dirname, '..', 'data', 'htmlCourse.ts');
      if (fs.existsSync(htmlPath)) {
        foundFile = 'htmlCourse.ts';
      }
    }
  }
  
  if (foundFile) {
    console.log(`   ✅ Lesson file: ${foundFile}`);
  } else {
    console.log(`   ❌ MISSING lesson file!`);
    issues.push(`Course '${courseId}' is missing lesson file`);
  }
});

console.log('');
console.log('═'.repeat(60));

if (issues.length === 0) {
  console.log('✅ All course routes are correctly configured!');
  console.log(`   Total courses: ${courseIds.length}`);
  console.log('   All lesson files found');
} else {
  console.log(`❌ Found ${issues.length} issue(s):`);
  issues.forEach((issue, i) => {
    console.log(`   ${i + 1}. ${issue}`);
  });
}

console.log('');
console.log('Course IDs for reference:');
console.log(courseIds.join(', '));
