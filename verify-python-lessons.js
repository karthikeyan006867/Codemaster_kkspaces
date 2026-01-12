// Quick verification script for Python lessons
const { pythonLessons } = require('./data/lessons/pythonLessons.ts');

console.log(`Total Python lessons: ${pythonLessons.length}`);
console.log('\nLesson IDs:');
pythonLessons.forEach((lesson, index) => {
  console.log(`${index + 1}. ${lesson.id} - ${lesson.title}`);
});

// Check for missing lessons
const expectedIds = [];
for (let i = 1; i <= 70; i++) {
  if (i === 37) {
    expectedIds.push('py-project-1');
  } else {
    expectedIds.push(`py-${i}`);
  }
}

const actualIds = pythonLessons.map(l => l.id);
const missing = expectedIds.filter(id => !actualIds.includes(id));
const extra = actualIds.filter(id => !expectedIds.includes(id));

if (missing.length > 0) {
  console.log('\nMissing lessons:', missing);
}
if (extra.length > 0) {
  console.log('\nExtra lessons:', extra);
}

console.log(`\nAll lessons present: ${missing.length === 0}`);
