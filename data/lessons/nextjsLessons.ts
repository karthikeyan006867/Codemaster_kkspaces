import { Lesson } from '../courses'

export const nextjsLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 17 ? 'Beginner' : i < 34 ? 'Intermediate' : 'Advanced';
  return {
    id: `nextjs-${i + 1}`,
    title: `Next.js Lesson ${i + 1}`,
    description: `Master Next.js React framework - Lesson ${i + 1}`,
    language: 'react' as const,
    difficulty,
    estimatedTime: 35,
    content: `# Next.js Lesson ${i + 1}

Welcome to lesson ${i + 1} of the Next.js course!

## Learning Objectives
- Build full-stack apps with Next.js
- Master SSR, SSG, and ISR rendering
- Implement API routes and middleware

## Practice Exercise
Complete the coding challenge below to test your Next.js knowledge.`,
    initialCode: '// Write your Next.js code here\n',
    solution: '// Solution for lesson ${i + 1}\n',
    hints: ['Server components', 'App router', 'API routes'],
    testCases: [
      { name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' },
      { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }
    ]
  };
});
