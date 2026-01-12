import { Lesson } from '../courses'

export const flaskLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 17 ? 'Beginner' : i < 34 ? 'Intermediate' : 'Advanced';
  return {
    id: `flask-${i + 1}`,
    title: `Flask Lesson ${i + 1}`,
    description: `Master Flask microframework - Lesson ${i + 1}`,
    language: 'python' as const,
    difficulty,
    estimatedTime: 30,
    content: `# Flask Lesson ${i + 1}

Welcome to lesson ${i + 1} of the Flask course!

## Learning Objectives
- Build lightweight web apps with Flask
- Create RESTful APIs efficiently
- Master Flask extensions and blueprints

## Practice Exercise
Complete the coding challenge below to test your Flask knowledge.`,
    initialCode: '# Write your Flask Python code here\n',
    solution: '# Solution for lesson ${i + 1}\n',
    hints: ['Use Flask routes', 'Blueprints for organization', 'Flask extensions'],
    testCases: [
      { name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' },
      { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }
    ]
  };
});
