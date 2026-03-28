const fs = require('fs');
const path = require('path');

const content = `import { Lesson } from '../courses'

export const kotlinLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const lessonNum = i + 1;
  const difficulty = lessonNum <= 17 ? 'Beginner' : lessonNum <= 34 ? 'Intermediate' : 'Advanced';
  
  return {
    id: \`kotlin-\${lessonNum}\`,
    title: \`Kotlin Lesson \${lessonNum}\`,
    description: \`Master Kotlin programming concepts - Lesson \${lessonNum}\`,
    language: 'kotlin' as const,
    difficulty,
    estimatedTime: 30,
    content: \`# Kotlin Lesson \${lessonNum}

Welcome to lesson \${lessonNum} of the Kotlin course!

## Learning Objectives
- Understand core Kotlin concepts
- Apply programming fundamentals
- Build practical skills

## Practice Exercise
Write a simple Kotlin program to complete this lesson.\`,
    initialCode: \`fun main() {
    // Write your Kotlin code here
    println("Lesson \${lessonNum}")
}\`,
    solution: \`fun main() {
    println("Completed lesson \${lessonNum}")
}\`,
    hints: [
      'Start with fun main()',
      'Use println() to print output',
      'Test your code frequently'
    ],
    testCases: [
      { 
        name: 'Has main function', 
        test: (code) => code.includes('fun main'),
        errorMessage: 'Program needs a main() function'
      },
      { 
        name: 'Code has content', 
        test: (code) => code.trim().length > 20,
        errorMessage: 'Write some code in the main function'
      },
      { 
        name: 'Uses println',
        test: (code) => code.includes('println'),
        errorMessage: 'Use println() to produce output'
      }
    ]
  };
});
`;

fs.writeFileSync(path.join(__dirname, '../data/lessons/kotlinLessons.ts'), content);
console.log('✅ Generated kotlinLessons.ts with 50 lessons');
