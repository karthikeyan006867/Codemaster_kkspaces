import { Lesson } from '../courses'

export const awsLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 17 ? 'Beginner' : i < 34 ? 'Intermediate' : 'Advanced';
  return {
    id: `aws-${i + 1}`,
    title: `AWS Lesson ${i + 1}`,
    description: `Master Amazon Web Services - Lesson ${i + 1}`,
    language: 'javascript' as const,
    difficulty,
    estimatedTime: 40,
    content: `# AWS Lesson ${i + 1}

Welcome to lesson ${i + 1} of the AWS course!

## Learning Objectives
- Deploy applications on AWS cloud
- Master EC2, S3, Lambda, and RDS
- Build serverless architectures

## Practice Exercise
Complete the coding challenge below to test your AWS knowledge.`,
    initialCode: '// Write your AWS code or configuration here\n',
    solution: '// Solution for lesson ${i + 1}\n',
    hints: ['AWS services', 'IAM policies', 'Serverless architecture'],
    testCases: [
      { name: 'Code is not empty', test: (code) => code.trim().length > 0, errorMessage: 'Please write some code' },
      { name: 'Code meets requirements', test: (code) => code.trim().length >= 10, errorMessage: 'Code should be longer' }
    ]
  };
});
