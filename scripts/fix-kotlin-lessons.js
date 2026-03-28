const fs = require('fs');
const path = require('path');

const lessonsDir = path.join(__dirname, '../data/lessons');

const kotlinLessons = [];

for (let i = 1; i <= 50; i++) {
  const difficulty = i <= 17 ? 'Beginner' : i <= 34 ? 'Intermediate' : 'Advanced';
  
  const specialLessons = {
    1: {
      title: 'Introduction to Kotlin',
      desc: 'Learn the basics of Kotlin syntax and your first program',
      content: `# Introduction to Kotlin

Kotlin is a modern, statically typed programming language that runs on the JVM.

## Hello World

The simplest Kotlin program:

\`\`\`kotlin
fun main() {
    println("Hello, World")
}
\`\`\`

## Key Points
- \`fun\` keyword declares functions
- \`main()\` is the entry point
- \`println()\` prints to console`,
      initialCode: 'fun main() {\n    // Write your code here\n}',
      solution: 'fun main() {\n    println("Hello, World")\n}'
    },
    2: {
      title: 'Variables and Data Types',
      desc: 'Master Kotlin variables, val vs var, and basic types',
      content: `# Variables and Data Types

## Declaring Variables
- \`val\`: immutable (read-only)
- \`var\`: mutable

\`\`\`kotlin
val name = "Alice"     // Cannot be changed
var age = 25            // Can be changed
age = 26                // OK
\`\`\`

## Basic Types
- Int, Long, Double, Float
- String, Char
- Boolean

## Type Inference
Kotlin can infer types:
\`\`\`kotlin
val x = 42  // Inferred as Int
\`\`\``,
      initialCode: 'fun main() {\n    // Declare variables here\n}',
      solution: 'fun main() {\n    val name = "Alice"\n    var age = 25\n    println("Name: $name, Age: $age")\n}'
    },
    3: {
      title: 'String Templates',
      desc: 'Learn to use string interpolation in Kotlin',
      content: `# String Templates

Kotlin allows you to embed variables and expressions in strings using \`$\`.

## Basic Template
\`\`\`kotlin
val name = "Alice"
println("Hello, $name")  // Hello, Alice
\`\`\`

## Expressions in Templates
\`\`\`kotlin
val age = 25
println("Next year I will be \${age + 1}")
\`\`\`

## Your Task
Create variables for name and age, then print "My name is [name] and I am [age] years old"`,
      initialCode: 'fun main() {\n    val name = "Alice"\n    val age = 25\n    // Print using string template\n}',
      solution: 'fun main() {\n    val name = "Alice"\n    val age = 25\n    println("My name is $name and I am $age years old")\n}'
    }
  };

  const lesson = specialLessons[i] || {
    title: `Kotlin Lesson ${i}`,
    desc: `Master Kotlin programming concepts - Lesson ${i}`,
    content: `# Kotlin Lesson ${i}

Welcome to lesson ${i} of the Kotlin course!

## Learning Objectives
- Understand core Kotlin concepts
- Apply programming fundamentals
- Build practical skills

## Practice Exercise
Write a simple Kotlin program to complete this lesson.`,
    initialCode: `fun main() {\n    // Write your Kotlin code here\n    println("Lesson ${i}")\n}`,
    solution: `fun main() {\n    println("Completed lesson ${i}")\n}`
  };

  kotlinLessons.push({
    id: `kotlin-${i}`,
    title: lesson.title,
    description: lesson.desc,
    language: 'kotlin',
    difficulty,
    estimatedTime: 30,
    content: lesson.content,
    initialCode: lesson.initialCode,
    solution: lesson.solution,
    hints: [
      'Start with fun main()',
      'Use println() to print output',
      'Test your code frequently'
    ],
    testCases: [
      { 
        name: 'Has main function', 
        test: '(code) => code.includes(\'fun main\')',
        errorMessage: 'Program needs a main() function'
      },
      { 
        name: 'Code has content', 
        test: '(code) => code.trim().length > 20',
        errorMessage: 'Write some code in the main function'
      },
      { 
        name: 'Uses println',
        test: '(code) => code.includes(\'println\')',
        errorMessage: 'Use println() to produce output'
      }
    ]
  });
}

// Generate the TypeScript file content
const fileContent = `import { Lesson } from '../courses'

export const kotlinLessons: Lesson[] = [
${kotlinLessons.map(lesson => `  {
    id: '${lesson.id}',
    title: '${lesson.title.replace(/'/g, "\\'")}',
    description: '${lesson.description.replace(/'/g, "\\'")}',
    language: '${lesson.language}' as const,
    difficulty: '${lesson.difficulty}',
    estimatedTime: ${lesson.estimatedTime},
    content: \`${lesson.content}\`,
    initialCode: \`${lesson.initialCode}\`,
    solution: \`${lesson.solution}\`,
    hints: [${lesson.hints.map(h => `'${h.replace(/'/g, "\\'")}'`).join(', ')}],
    testCases: [
${lesson.testCases.map(tc => `      { 
        name: '${tc.name.replace(/'/g, "\\'")}', 
        test: ${tc.test}, 
        errorMessage: '${tc.errorMessage.replace(/'/g, "\\'")}' 
      }`).join(',\n')}
    ]
  }`).join(',\n')}
]
`;

fs.writeFileSync(path.join(lessonsDir, 'kotlinLessons.ts'), fileContent);
console.log('✅ Fixed kotlinLessons.ts with 50 properly formatted lessons');
