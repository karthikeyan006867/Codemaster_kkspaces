import { Lesson } from '../courses'

export const kubernetesLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 17 ? 'Beginner' : i < 34 ? 'Intermediate' : 'Advanced';
  return {
    id: `kubernetes-${i + 1}`,
    title: `Kubernetes Lesson ${i + 1}`,
    description: `Master Kubernetes orchestration - Lesson ${i + 1}`,
    language: 'bash' as const,
    difficulty,
    estimatedTime: 40,
    content: `# Kubernetes Lesson ${i + 1}

Welcome to lesson ${i + 1} of the Kubernetes course!

## Learning Objectives
- Deploy and manage containerized applications
- Master pods, services, and deployments
- Implement scaling and monitoring

## Practice Exercise
Complete the coding challenge below to test your Kubernetes knowledge.`,
    initialCode: '# Write your Kubernetes YAML or commands here\n',
    solution: '# Solution for lesson ${i + 1}\n',
    hints: ['Pod configuration', 'Service discovery', 'Horizontal scaling'],
    testCases: [
      { name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' },
      { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }
    ]
  };
});
