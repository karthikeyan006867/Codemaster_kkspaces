const fs = require('fs');
const path = require('path');

const lessonsDir = path.join(__dirname, '..', 'data', 'lessons');
const files = fs.readdirSync(lessonsDir)
  .filter(f => f.endsWith('Lessons.ts') && f !== 'integrationProjects.ts');

console.log('Lesson Counts Summary:\n');
console.log('='.repeat(50));

let total = 0;
let coursesUnder50 = [];

files.forEach(f => {
  const content = fs.readFileSync(path.join(lessonsDir, f), 'utf8');
  let count = 0;
  
  const arrayFromMatch = content.match(/Array\.from\(\{\s*length:\s*(\d+)\s*\}/);
  if (arrayFromMatch) {
    count = parseInt(arrayFromMatch[1]);
  } else {
    // Count actual lesson objects by matching complete lesson structure
    // Look for patterns like: { id: 'something',
    const lessonMatches = content.match(/\{\s*\n?\s*id:\s*['"][^'"]+['"]/g);
    count = lessonMatches ? lessonMatches.length : 0;
  }
  
  total += count;
  const status = count >= 50 ? '✓' : '✗';
  const courseName = f.replace('Lessons.ts', '').padEnd(16);
  
  console.log(`${status} ${courseName} - ${count.toString().padStart(2)} lessons`);
  
  if (count < 50) {
    coursesUnder50.push({ name: f, count });
  }
});

console.log('='.repeat(50));
console.log(`Total: ${files.length} courses with ${total} lessons`);
console.log(`Average: ${Math.round(total / files.length)} lessons per course`);

if (coursesUnder50.length > 0) {
  console.log(`\nCourses under 50 lessons:`);
  coursesUnder50.forEach(c => console.log(`  - ${c.name}: ${c.count} lessons`));
} else {
  console.log(`\n✓ All courses have 50+ lessons!`);
}
