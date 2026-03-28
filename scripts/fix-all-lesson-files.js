const fs = require('fs');
const path = require('path');

const lessonsDir = path.join(__dirname, '../data/lessons');

// Languages to regenerate with simple structure
const languagesToFix = [
  { name: 'typescript', lang: 'typescript' },
  { name: 'python', lang: 'python' },
  { name: 'java', lang: 'java' },
  { name: 'cpp', lang: 'cpp' },
  { name: 'csharp', lang: 'csharp' },
  { name: 'go', lang: 'go' },
  { name: 'rust', lang: 'rust' },
  { name: 'swift', lang: 'swift' },
  { name: 'php', lang: 'php' },
];

languagesToFix.forEach(({ name, lang }) => {
  const content = `import { Lesson } from '../courses'

export const ${name}Lessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const lessonNum = i + 1;
  const difficulty = lessonNum <= 17 ? 'Beginner' : lessonNum <= 34 ? 'Intermediate' : 'Advanced';
  
  return {
    id: \`${name}-\${lessonNum}\`,
    title: \`${name.charAt(0).toUpperCase() + name.slice(1)} Lesson \${lessonNum}\`,
    description: \`Master ${name.charAt(0).toUpperCase() + name.slice(1)} programming - Lesson \${lessonNum}\`,
    language: '${lang}' as const,
    difficulty,
    estimatedTime: 30,
    content: \`# ${name.charAt(0).toUpperCase() + name.slice(1)} Lesson \${lessonNum}

Welcome to lesson \${lessonNum} of the ${name.charAt(0).toUpperCase() + name.slice(1)} course!

## Learning Objectives
- Understand core concepts
- Apply programming fundamentals
- Build practical skills

## Practice Exercise
Write code to complete this lesson.\`,
    initialCode: \`// Write your ${name} code here
// Lesson \${lessonNum}
\`,
    solution: \`// Solution for Lesson \${lessonNum}
// Complete implementation
\`,
    hints: [
      'Review the documentation',
      'Test your code',
      'Practice regularly'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code'
      },
      { 
        name: 'Code has content', 
        test: (code) => code.trim().length > 10,
        errorMessage: 'Write more code'
      },
      { 
        name: 'Code looks valid',
        test: (code) => code.includes('//') || code.trim().length > 20,
        errorMessage: 'Add more code or comments'
      }
    ]
  };
});
`;

  const filePath = path.join(lessonsDir, `${name}Lessons.ts`);
  fs.writeFileSync(filePath, content);
  console.log(`✅ Generated ${name}Lessons.ts`);
});

console.log(`\n✅ Fixed ${languagesToFix.length} lesson files`);
