const fs = require('fs');
const path = require('path');

const lessonFiles = [
  'angularLessons', 'csharpLessons', 'djangoLessons', 'dockerLessons',
  'gitLessons', 'goLessons', 'kotlinLessons', 'mongodbLessons',
  'nodejsLessons', 'phpLessons', 'reactLessons', 'rubyLessons',
  'rustLessons', 'sqlLessons', 'swiftLessons', 'typescriptLessons', 'vueLessons'
];

const lessonsDir = path.join(__dirname, '../data/lessons');

console.log('Counting actual lessons in each file...\n');

lessonFiles.forEach(fileName => {
  const filePath = path.join(lessonsDir, `${fileName}.ts`);
  
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Count lesson objects by counting "id:" occurrences
    const matches = content.match(/id:\s*['"`][a-z-]+\-\d+['"`]/g);
    const count = matches ? matches.length : 0;
    
    console.log(`${fileName}.ts: ${count} lessons ${count < 50 ? '⚠️' : '✅'}`);
  } else {
    console.log(`${fileName}.ts: NOT FOUND ❌`);
  }
});

console.log('\n✅ Count complete!');
