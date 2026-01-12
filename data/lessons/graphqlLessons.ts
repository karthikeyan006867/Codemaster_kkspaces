import { Lesson } from '../courses'

export const graphqlLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 17 ? 'Beginner' : i < 34 ? 'Intermediate' : 'Advanced';
  return {
    id: `graphql-${i + 1}`,
    title: `GraphQL Lesson ${i + 1}`,
    description: `Master GraphQL API development - Lesson ${i + 1}`,
    language: 'javascript' as const,
    difficulty,
    estimatedTime: 35,
    content: `# GraphQL Lesson ${i + 1}

Welcome to lesson ${i + 1} of the GraphQL course!

## Learning Objectives
- Build modern APIs with GraphQL
- Define schemas and resolvers
- Implement mutations and subscriptions

## Practice Exercise
Complete the coding challenge below to test your GraphQL knowledge.`,
    initialCode: '// Write your GraphQL schema or resolvers here\n',
    solution: '// Solution for lesson ${i + 1}\n',
    hints: ['Schema definition', 'Resolver patterns', 'Apollo Server'],
    testCases: [
      { name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' },
      { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }
    ]
  };
});
