const fs = require('fs');
const path = require('path');

const lessonsDir = path.join(__dirname, '../data/lessons');
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('Lessons.ts') && !f.endsWith('.backup'));

console.log('🔍 Final Lesson Verification\n');

let totalLessons = 0;
let completeCount = 0;
const issues = [];

files.forEach(fileName => {
  try {
    const content = fs.readFileSync(path.join(lessonsDir, fileName), 'utf8');
    
    // Check for Array.from pattern first
    const arrayFromMatch = content.match(/Array\.from\(\{\s*length:\s*(\d+)\s*\}/);
    let count = 0;
    
    if (arrayFromMatch) {
      // Dynamically generated lessons
      count = parseInt(arrayFromMatch[1]);
    } else {
      // Count manually defined lessons
      const lessonMatches = content.match(/{\s*id:\s*['"`][a-z0-9-]+['"`]/g) || [];
      count = lessonMatches.length;
    }
    
    totalLessons += count;
    
    if (count >= 50) {
      console.log(`✅ ${fileName}: ${count} lessons`);
      completeCount++;
    } else {
      console.log(`⚠️  ${fileName}: ${count} lessons (needs ${50 - count} more)`);
      issues.push({ file: fileName, current: count, needed: 50 - count });
    }
  } catch (e) {
    console.log(`❌ ${fileName}: Error reading file`);
    issues.push({ file: fileName, error: true });
  }
});

console.log(`\n📊 Summary:`);
console.log(`✅ Complete courses: ${completeCount}/${files.length}`);
console.log(`📈 Total lessons: ${totalLessons}`);
console.log(`Average per course: ${Math.round(totalLessons / files.length)}`);

if (issues.length > 0) {
  console.log(`\n⚠️  Courses needing attention: ${issues.length}`);
  issues.forEach(i => {
    if (!i.error) {
      console.log(`   - ${i.file}: ${i.current}/50 (${i.needed} needed)`);
    }
  });
} else {
  console.log(`\n🎉 All courses have 50+ lessons!`);
}
