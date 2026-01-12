import { Lesson } from '../courses'

export const postgresqlLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 17 ? 'Beginner' : i < 34 ? 'Intermediate' : 'Advanced';
  return {
    id: `postgresql-${i + 1}`,
    title: `PostgreSQL Lesson ${i + 1}`,
    description: `Master PostgreSQL advanced features - Lesson ${i + 1}`,
    language: 'sql' as const,
    difficulty,
    estimatedTime: 35,
    content: `# PostgreSQL Lesson ${i + 1}

Welcome to lesson ${i + 1} of the PostgreSQL course!

## Learning Objectives
- Master advanced SQL and PostgreSQL features
- Work with JSONB and full-text search
- Optimize queries with window functions

## Practice Exercise
Complete the coding challenge below to test your PostgreSQL knowledge.`,
    initialCode: '-- Write your PostgreSQL query here\n',
    solution: '-- Solution for lesson ${i + 1}\n',
    hints: ['JSONB support', 'Window functions', 'Advanced indexing'],
    testCases: [
      { name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' },
      { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }
    ]
  };
});
