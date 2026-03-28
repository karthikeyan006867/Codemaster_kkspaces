const fs = require('fs');
const path = require('path');

// List of all lesson files that need completion
const lessonFiles = [
  'angularLessons', 'awsLessons', 'bashLessons', 'clojureLessons', 'crystalLessons',
  'csharpLessons', 'cybersecurityLessons', 'dartLessons', 'djangoLessons', 'dockerLessons',
  'elixirLessons', 'erlangLessons', 'flaskLessons', 'fsharpLessons', 'gitLessons',
  'goLessons', 'graphqlLessons', 'groovyLessons', 'haskellLessons', 'juliaLessons',
  'kotlinLessons', 'kubernetesLessons', 'luaLessons', 'matlabLessons', 'mlLessons',
  'mongodbLessons', 'nextjsLessons', 'nodejsLessons', 'objectivecLessons', 'ocamlLessons',
  'perlLessons', 'phpLessons', 'postgresqlLessons', 'powershellLessons', 'rLessons',
  'reactLessons', 'rubyLessons', 'rustLessons', 'scalaLessons', 'sqlLessons',
  'swiftLessons', 'tailwindLessons', 'typescriptLessons', 'vueLessons'
];

// Check which files have placeholder lessons
const lessonsDir = path.join(__dirname, '../data/lessons');

console.log('Checking lesson files...\n');

lessonFiles.forEach(fileName => {
  const filePath = path.join(lessonsDir, `${fileName}.ts`);
  
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it uses Array.from pattern (placeholder lessons)
    const hasPlaceholder = content.includes('Array.from({ length: 50 }');
    const lineCount = content.split('\n').length;
    
    console.log(`${fileName}.ts:`);
    console.log(`  - Lines: ${lineCount}`);
    console.log(`  - Has placeholders: ${hasPlaceholder ? 'YES ❌' : 'NO ✅'}`);
    console.log('');
  } else {
    console.log(`${fileName}.ts: NOT FOUND ❌\n`);
  }
});

console.log('\n✅ Analysis complete!');
