const fs = require('fs');
const path = require('path');

const content = `import { Lesson } from '../courses'

export const reactLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const lessonNum = i + 1;
  const difficulty = lessonNum <= 17 ? 'Beginner' : lessonNum <= 34 ? 'Intermediate' : 'Advanced';
  
  return {
    id: \`react-\${lessonNum}\`,
    title: \`React Lesson \${lessonNum}\`,
    description: \`Master React development - Lesson \${lessonNum}\`,
    language: 'javascript' as const,
    difficulty,
    estimatedTime: 30,
    content: \`# React Lesson \${lessonNum}

Welcome to lesson \${lessonNum} of the React course!

## Learning Objectives
- Understand React concepts
- Build modern UI components
- Work with hooks and state

## Practice Exercise
Write React code to complete this lesson.\`,
    initialCode: \`import React from 'react'

function App() {
  // Your code here
  
  return (
    <div>
      <h1>React Lesson \${lessonNum}</h1>
    </div>
  )
}

export default App
\`,
    solution: \`import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <h1>Lesson \${lessonNum}</h1>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  )
}

export default App
\`,
    hints: [
      'Use functional components',
      'Remember hooks rules',
      'Props flow downward'
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
        name: 'Uses React patterns',
        test: (code) => code.includes('React') || code.includes('return') || code.includes('function'),
        errorMessage: 'Use React component syntax'
      }
    ]
  };
});
`;

fs.writeFileSync(path.join(__dirname, '../data/lessons/reactLessons.ts'), content);
console.log('✅ Generated reactLessons.ts with 50 lessons');
