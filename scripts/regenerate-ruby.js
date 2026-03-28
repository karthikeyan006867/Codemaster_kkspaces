const fs = require('fs');
const path = require('path');

const content = `import { Lesson } from '../courses'

export const rubyLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const lessonNum = i + 1;
  const difficulty = lessonNum <= 17 ? 'Beginner' : lessonNum <= 34 ? 'Intermediate' : 'Advanced';
  
  return {
    id: \`ruby-\${lessonNum}\`,
    title: \`Ruby Lesson \${lessonNum}\`,
    description: \`Master Ruby programming - Lesson \${lessonNum}\`,
    language: 'ruby' as const,
    difficulty,
    estimatedTime: 30,
    content: \`# Ruby Lesson \${lessonNum}

Welcome to lesson \${lessonNum} of the Ruby course!

## Learning Objectives
- Understand Ruby concepts
- Write elegant Ruby code
- Work with Ruby on Rails basics

## Practice Exercise
Write Ruby code to complete this lesson.\`,
    initialCode: \`# Write your Ruby code here
puts "Lesson \${lessonNum}"
\`,
    solution: \`# Solution for Lesson \${lessonNum}
def hello
  puts "Completed Lesson \${lessonNum}"
end

hello
\`,
    hints: [
      'Ruby is object-oriented',
      'Use puts for output',
      'Methods are defined with def'
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
        name: 'Uses Ruby syntax',
        test: (code) => code.includes('def') || code.includes('puts') || code.includes('#'),
        errorMessage: 'Use proper Ruby syntax'
      }
    ]
  };
});
`;

fs.writeFileSync(path.join(__dirname, '../data/lessons/rubyLessons.ts'), content);
console.log('✅ Generated rubyLessons.ts with 50 lessons');
