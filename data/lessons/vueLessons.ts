import { Lesson } from '../courses'

export const vueLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 17 ? 'Beginner' : i < 34 ? 'Intermediate' : 'Advanced';
  return {
    id: `vue-${i + 1}`,
    title: `Vue - Lesson ${i + 1}`,
    description: `Learn Vue - Part ${i + 1}`,
    language: 'javascript' as const,
    difficulty,
    estimatedTime: 30,
    content: `# Vue Lesson ${i + 1}

## Overview
Master Vue programming and concepts.

## Practice
Complete the exercise to test your knowledge.
`,
    initialCode: `// Write your Vue code here\n\n`,
    solution: `// Solution for Vue lesson ${i + 1}\n\n`,
    hints: ['Study the documentation', 'Practice regularly', 'Test your code'],
    testCases: [
      { name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' },
      { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }
    ]
  };
});
