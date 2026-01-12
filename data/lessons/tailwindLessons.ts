import { Lesson } from '../courses'

export const tailwindLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 17 ? 'Beginner' : i < 34 ? 'Intermediate' : 'Advanced';
  return {
    id: `tailwind-${i + 1}`,
    title: `Tailwind CSS Lesson ${i + 1}`,
    description: `Master Tailwind CSS utility framework - Lesson ${i + 1}`,
    language: 'css' as const,
    difficulty,
    estimatedTime: 25,
    content: `# Tailwind CSS Lesson ${i + 1}

Welcome to lesson ${i + 1} of the Tailwind CSS course!

## Learning Objectives
- Build UIs with utility-first CSS
- Create responsive designs efficiently
- Customize themes and use plugins

## Practice Exercise
Complete the coding challenge below to test your Tailwind knowledge.`,
    initialCode: '<!-- Write your Tailwind HTML here -->\n',
    solution: '<!-- Solution for lesson ${i + 1} -->\n',
    hints: ['Utility classes', 'Responsive design', 'Custom configuration'],
    testCases: [
      { name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' },
      { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }
    ]
  };
});
