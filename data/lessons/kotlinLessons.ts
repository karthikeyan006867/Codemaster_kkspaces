import { Lesson } from '../courses'

export const kotlinLessons: Lesson[] = [
  // Beginner Lessons (1-17)
  {
    id: 'kotlin-1',
    title: 'Introduction to Kotlin',
    description: 'Learn the basics of Kotlin syntax and your first program',
    language: 'kotlin' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Introduction to Kotlin

Kotlin is a modern, statically typed programming language that runs on the JVM.

## Hello World

The simplest Kotlin program:

\`\`\`kotlin
fun main() {
    println("Hello, World!")
}
\`\`\`

## Key Points
- \`fun\` keyword declares functions
- \`main()\` is the entry point
- \`println()\` prints to console

## Your Task
Write a program that prints "Hello, Kotlin!" to the console.`,
    initialCode: 'fun main() {\n    // Write your code here\n}',
    solution: 'fun main() {\n    println("Hello, Kotlin!")\n}',
    hints: [
      'Use the println() function',
      'Put your text in quotes',
      'Don\'t forget the parentheses'
    ],
    testCases: [
      { 
        name: 'Has main function', 
        test: (code) => code.includes('fun main'),
        errorMessage: 'You need a main() function'
      },
      { 
        name: 'Uses println', 
        test: (code) => code.includes('println'),
        errorMessage: 'Use println() to print'
      },
      { 
        name: 'Prints correct message', 
        test: (code, output) => output.includes('Hello, Kotlin'),
        errorMessage: 'Should print "Hello, Kotlin!"'
      }
    ]
  },
  {
    id: 'kotlin-2',
    title: 'Variables and Data Types',
    description: 'Learn about var, val, and basic data types in Kotlin',
    language: 'kotlin' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Variables and Data Types

Kotlin has two types of variables:
- \`val\` - immutable (read-only)
- \`var\` - mutable (can be reassigned)

## Basic Types
\`\`\`kotlin
val name: String = "John"  // Immutable
var age: Int = 25          // Mutable
var price: Double = 9.99
var isActive: Boolean = true
\`\`\`

## Type Inference
\`\`\`kotlin
val name = "John"  // Type inferred as String
var age = 25       // Type inferred as Int
\`\`\`

## Your Task
Create a variable named \`message\` with value "Learning Kotlin" and print it.`,
    initialCode: 'fun main() {\n    // Create your variable here\n    \n}',
    solution: 'fun main() {\n    val message = "Learning Kotlin"\n    println(message)\n}',
    hints: [
      'Use val or var to declare a variable',
      'Assign the string value',
      'Use println() to print the variable'
    ],
    testCases: [
      { 
        name: 'Has variable declaration', 
        test: (code) => code.includes('val') || code.includes('var'),
        errorMessage: 'Declare a variable using val or var'
      },
      { 
        name: 'Variable named message', 
        test: (code) => code.includes('message'),
        errorMessage: 'Variable should be named "message"'
      },
      { 
        name: 'Prints Learning Kotlin', 
        test: (code, output) => output.includes('Learning Kotlin'),
        errorMessage: 'Should print "Learning Kotlin"'
      }
    ]
  },
  {
    id: 'kotlin-3',
    title: 'String Templates',
    description: 'Learn to use string interpolation in Kotlin',
    language: 'kotlin' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# String Templates

Kotlin allows you to embed variables and expressions in strings using \`$\`.

## Basic Template
\`\`\`kotlin
val name = "Alice"
println("Hello, $name!")  // Hello, Alice!
\`\`\`

## Expressions in Templates
\`\`\`kotlin
val age = 25
println("Next year I'll be \${age + 1}")
\`\`\`

## Your Task
Create variables for name and age, then print "My name is [name] and I am [age] years old"`,
    initialCode: 'fun main() {\n    val name = "Alice"\n    val age = 25\n    // Print using string template\n}',
    solution: 'fun main() {\n    val name = "Alice"\n    val age = 25\n    println("My name is $name and I am $age years old")\n}',
    hints: [
      'Use $ before variable names in strings',
      'Put the whole message in quotes',
      'Use println() to print'
    ],
    testCases: [
      { 
        name: 'Uses string template', 
        test: (code) => code.includes('$'),
        errorMessage: 'Use $ for string templates'
      },
      { 
        name: 'Includes name in output', 
        test: (code, output) => output.includes('Alice') || output.includes('name'),
        errorMessage: 'Output should include the name'
      },
      { 
        name: 'Includes age in output', 
        test: (code, output) => output.includes('25') || output.includes('age'),
        errorMessage: 'Output should include the age'
      }
    ]
  }
];

// Generate remaining lessons (4-50) with placeholder content
for (let i = 4; i <= 50; i++) {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = 
    i <= 17 ? 'Beginner' : i <= 34 ? 'Intermediate' : 'Advanced';
  
  kotlinLessons.push({
    id: `kotlin-${i}`,
    title: `Kotlin Lesson ${i}`,
    description: `Master Kotlin programming concepts - Lesson ${i}`,
    language: 'kotlin' as const,
    difficulty,
    estimatedTime: 30,
    content: `# Kotlin Lesson ${i}

Welcome to lesson ${i} of the Kotlin course!

## Learning Objectives
- Understand core Kotlin concepts
- Apply programming fundamentals
- Build practical skills

## Practice Exercise
Write a simple Kotlin program to complete this lesson.`,
    initialCode: `fun main() {\n    // Write your Kotlin code here\n    println("Lesson ${i}")\n}`,
    solution: `fun main() {\n    println("Completed lesson ${i}!")\n}`,
    hints: [
      'Start with fun main()',
      'Use println() to print output',
      'Test your code frequently'
    ],
    testCases: [
      { 
        name: 'Has main function', 
        test: (code) => code.includes('fun main'),
        errorMessage: 'Program needs a main() function'
      },
      { 
        name: 'Code has content', 
        test: (code) => code.trim().length > 20,
        errorMessage: 'Write some code in the main function'
      },
      { 
        name: 'Uses println',
        test: (code) => code.includes('println'),
        errorMessage: 'Use println() to produce output'
      }
    ]
  });
}

