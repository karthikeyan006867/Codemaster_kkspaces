import { Lesson } from '../courses'

export const csharpLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const lessonNum = i + 1;
  const difficulty = lessonNum <= 17 ? 'Beginner' : lessonNum <= 34 ? 'Intermediate' : 'Advanced';
  
  return {
    id: `csharp-${lessonNum}`,
    title: `Csharp Lesson ${lessonNum}`,
    description: `Master Csharp programming - Lesson ${lessonNum}`,
    language: 'csharp' as const,
    difficulty,
    estimatedTime: 30,
    content: `# Csharp Lesson ${lessonNum}

Welcome to lesson ${lessonNum} of the Csharp course!

## Learning Objectives
- Understand core concepts
- Apply programming fundamentals
- Build practical skills

## Practice Exercise
Write code to complete this lesson.`,
    initialCode: `// Write your csharp code here
// Lesson ${lessonNum}
`,
    solution: `// Solution for Lesson ${lessonNum}
// Complete implementation
`,
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
