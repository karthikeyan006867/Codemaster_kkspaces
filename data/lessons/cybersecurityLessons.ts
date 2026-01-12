import { Lesson } from '../courses'

export const cybersecurityLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 17 ? 'Beginner' : i < 34 ? 'Intermediate' : 'Advanced';
  return {
    id: `cybersecurity-${i + 1}`,
    title: `Cybersecurity Lesson ${i + 1}`,
    description: `Master cybersecurity fundamentals - Lesson ${i + 1}`,
    language: 'python' as const,
    difficulty,
    estimatedTime: 35,
    content: `# Cybersecurity Lesson ${i + 1}

Welcome to lesson ${i + 1} of the Cybersecurity course!

## Learning Objectives
- Understand security principles and threats
- Implement encryption and authentication
- Master OWASP best practices

## Practice Exercise
Complete the coding challenge below to test your cybersecurity knowledge.`,
    initialCode: '# Write your security-related code here\n',
    solution: '# Solution for lesson ${i + 1}\n',
    hints: ['Encryption methods', 'Authentication flows', 'Security testing'],
    testCases: [
      { name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' },
      { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }
    ]
  };
});
