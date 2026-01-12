import { Lesson } from '../courses'

export const javaLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 15 ? 'Beginner' : i < 30 ? 'Intermediate' : 'Advanced'
  return {
  id: `java-${i + 1}`,
  title: `Java ${i < 10 ? 'Fundamentals' : i < 25 ? 'OOP' : 'Spring'} - Lesson ${i + 1}`,
  description: `Master ${i < 10 ? 'Java basics' : i < 25 ? 'classes and objects' : 'Spring Boot'}`,
  content: `# Java Lesson ${i + 1}\n\n${i < 10 ? 'Syntax, Data Types, Control Flow' : i < 25 ? 'Classes, Inheritance, Interfaces' : 'Spring Framework, REST APIs'}\n\n\`\`\`java\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello Java");\n  }\n}\n\`\`\``,
  language: 'java' as const,
  difficulty,
  estimatedTime: 25 + i,
  initialCode: `public class Main {\n  public static void main(String[] args) {\n    // Your code\n  }\n}`,
  solution: `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello Java");\n    int x = 10;\n    System.out.println(x);\n  }\n}`,
  expectedOutput: 'Hello',
  hints: [`Java lesson ${i + 1}`, 'Strongly typed language', 'Classes are blueprints']
}
})
