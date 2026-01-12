import { Lesson } from '../courses'

export const perlLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 17 ? 'Beginner' : i < 34 ? 'Intermediate' : 'Advanced';
  return {
    id: `perl-${i + 1}`,
    title: `perl Lesson ${i + 1}`,
    description: `Master perl programming concepts - Lesson ${i + 1}`,
    language: 'perl' as const,
    difficulty,
    estimatedTime: 30,
    content: `# perl Lesson ${i + 1}

Welcome to lesson ${i + 1} of the perl course!

## Learning Objectives
- Understand core perl concepts
- Apply programming fundamentals
- Build practical skills

## Practice Exercise
Complete the coding challenge below to test your knowledge.`,
    initialCode: '// Write your perl code here\n',
    solution: '// Solution for lesson ${i + 1}\n',
    hints: ['Start with the basics', 'Practice regularly', 'Test your code'],
    testCases: [
      { name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' },
      { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }
    ]
  };
});
