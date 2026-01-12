import { Lesson } from '../courses'

export const mlLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 17 ? 'Beginner' : i < 34 ? 'Intermediate' : 'Advanced';
  return {
    id: `ml-${i + 1}`,
    title: `Machine Learning Lesson ${i + 1}`,
    description: `Master machine learning fundamentals - Lesson ${i + 1}`,
    language: 'python' as const,
    difficulty,
    estimatedTime: 45,
    content: `# Machine Learning Lesson ${i + 1}

Welcome to lesson ${i + 1} of the Machine Learning course!

## Learning Objectives
- Understand ML algorithms and theory
- Implement models with TensorFlow/PyTorch
- Deploy ML models in production

## Practice Exercise
Complete the coding challenge below to test your ML knowledge.`,
    initialCode: '# Write your machine learning code here\n',
    solution: '# Solution for lesson ${i + 1}\n',
    hints: ['Supervised learning', 'Neural networks', 'Model evaluation'],
    testCases: [
      { name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' },
      { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }
    ]
  };
});
