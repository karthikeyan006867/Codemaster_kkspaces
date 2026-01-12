const fs = require('fs');
const path = require('path');

const lessonsDir = path.join(__dirname, '..', 'data', 'lessons');
const files = fs.readdirSync(lessonsDir)
  .filter(f => f.endsWith('Lessons.ts') && f !== 'integrationProjects.ts')
  .sort();

console.log('Final Lesson Counts Summary:\n');
console.log('='.repeat(50));

let total = 0;
let allMeet50 = true;

files.forEach(f => {
  const content = fs.readFileSync(path.join(lessonsDir, f), 'utf8');
  let count = 0;
  
  // Check for Array.from length
  const arrayFromMatch = content.match(/Array\.from\(\{\s*length:\s*(\d+)\s*\}/);
  if (arrayFromMatch) {
    count = parseInt(arrayFromMatch[1]);
  } else {
    // Count all { id: patterns
    const matches = content.match(/\{\s*\n?\s*id:\s*['"][^'"]+['"]/g) || [];
    count = matches.length;
  }
  
  total += count;
  const status = count >= 50 ? '✓' : '✗';
  const courseName = f.replace('Lessons.ts', '').padEnd(16);
  
  console.log(`${status} ${courseName} - ${count.toString().padStart(2)} lessons`);
  
  if (count < 50) {
    allMeet50 = false;
  }
});

console.log('='.repeat(50));
console.log(`\nTotal Lessons: ${total}`);
console.log(`Total Courses: ${files.length}`);
console.log(`Average: ${(total / files.length).toFixed(1)} lessons per course`);

if (allMeet50) {
  console.log('\n✓✓✓ SUCCESS! All courses have 50+ lessons! ✓✓✓');
} else {
  console.log('\n✗ Some courses still need more lessons');
}
