import { Lesson } from '../courses'

export const jsLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 17 ? 'Beginner' : i < 34 ? 'Intermediate' : 'Advanced';
  return {
    id: `js-${i + 1}`,
    title: `Js - Lesson ${i + 1}`,
    description: `Learn Js - Part ${i + 1}`,
    language: 'javascript' as const,
    difficulty,
    estimatedTime: 30,
    content: `# Js Lesson ${i + 1}

## Overview
Master Js programming and concepts.

## Practice
Complete the exercise to test your knowledge.
`,
    initialCode: `// Write your Js code here\n\n`,
    solution: `// Solution for Js lesson ${i + 1}\n\n`,
    hints: ['Study the documentation', 'Practice regularly', 'Test your code'],
    testCases: [
      { name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' },
      { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }
    ]
  };
});
