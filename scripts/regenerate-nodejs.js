const fs = require('fs');
const path = require('path');

const content = `import { Lesson } from '../courses'

export const nodejsLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const lessonNum = i + 1;
  const difficulty = lessonNum <= 17 ? 'Beginner' : lessonNum <= 34 ? 'Intermediate' : 'Advanced';
  
  return {
    id: \`node-\${lessonNum}\`,
    title: \`Node.js Lesson \${lessonNum}\`,
    description: \`Master Node.js backend development - Lesson \${lessonNum}\`,
    language: 'javascript' as const,
    difficulty,
    estimatedTime: 30,
    content: \`# Node.js Lesson \${lessonNum}

Welcome to lesson \${lessonNum} of the Node.js course!

## Learning Objectives
- Understand Node.js concepts
- Build backend applications
- Work with Express and APIs

## Practice Exercise
Write Node.js code to complete this lesson.\`,
    initialCode: \`const express = require('express')
const app = express()

// Your code here
\`,
    solution: \`const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Lesson \${lessonNum} Complete')
})

app.listen(3000)
\`,
    hints: [
      'Use Express for APIs',
      'Remember middleware order',
      'Test your endpoints'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code'
      },
      { 
        name: 'Code has content', 
        test: (code) => code.trim().length > 20,
        errorMessage: 'Write more comprehensive code'
      },
      { 
        name: 'Uses Node.js patterns',
        test: (code) => code.includes('require') || code.includes('import') || code.includes('const'),
        errorMessage: 'Use Node.js syntax'
      }
    ]
  };
});
`;

fs.writeFileSync(path.join(__dirname, '../data/lessons/nodejsLessons.ts'), content);
console.log('✅ Generated nodejsLessons.ts with 50 lessons');
