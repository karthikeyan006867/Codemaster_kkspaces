import { Lesson } from '../courses'

const detailedSwiftLessons: Lesson[] = [
  {
    id: 'swift-1',
    title: 'Introduction to Swift',
    description: 'Learn Swift basics and the print function',
    language: 'swift' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Welcome to Swift!

Swift is Apple's powerful programming language for iOS, macOS, and more.

## Your First Program

\`\`\`swift
print("Hello, World!")
\`\`\`

## String Interpolation
\`\`\`swift
let name = "Alice"
print("Hello, \\(name)!")
\`\`\`

## Your Task
Print "Hello, Swift!" using string interpolation`,
    initialCode: `// Write your code here`,
    solution: `let language = "Swift"
print("Hello, \\(language)!")`,
    hints: ['Use \\() for interpolation', 'let creates constants', 'print() displays output'],
    testCases: [
      { name: 'Uses print', test: (code) => code.includes('print'), errorMessage: 'Use print()' },
      { name: 'Has variable', test: (code) => code.includes('let') || code.includes('var'), errorMessage: 'Create a variable' },
      { name: 'Prints output', test: (code, output) => output.includes('Hello'), errorMessage: 'Should print greeting' }
    ]
  },
  {
    id: 'swift-2',
    title: 'Variables and Constants',
    description: 'Learn the difference between var and let',
    language: 'swift' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Variables and Constants

## var vs let
\`\`\`swift
var age = 25        // Mutable
age = 26            // OK

let name = "Alice"  // Immutable
// name = "Bob"     // Error!
\`\`\`

## Type Annotations
\`\`\`swift
var score: Int = 100
let pi: Double = 3.14159
var text: String = "Swift"
\`\`\`

## Your Task
Create both mutable and immutable variables`,
    initialCode: `// Declare variables`,
    solution: `var count = 0
count = 10
let name = "Swift"
print("Count: \\(count), Name: \\(name)")`,
    hints: ['Use var for changeable values', 'Use let for constants', 'Prefer let when possible'],
    testCases: [
      { name: 'Has var', test: (code) => code.includes('var'), errorMessage: 'Create a var variable' },
      { name: 'Has let', test: (code) => code.includes('let'), errorMessage: 'Create a let constant' },
      { name: 'Prints output', test: (code, output) => output.length > 5, errorMessage: 'Print the values' }
    ]
  },
  {
    id: 'swift-3',
    title: 'Optionals',
    description: 'Learn to handle nil values safely',
    language: 'swift' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Optionals in Swift

Optionals represent a value that might be nil.

\`\`\`swift
var name: String? = "Alice"
name = nil  // OK

// Unwrapping with if let
if let unwrapped = name {
    print(unwrapped)
} else {
    print("No name")
}

// Nil coalescing
let display = name ?? "Guest"
\`\`\`

## Your Task
Create an optional and safely unwrap it`,
    initialCode: `// Create and unwrap an optional`,
    solution: `var value: String? = "Hello"
if let unwrapped = value {
    print(unwrapped)
}`,
    hints: ['Use ? for optional type', 'if let safely unwraps', '?? provides default value'],
    testCases: [
      { name: 'Has optional', test: (code) => code.includes('?'), errorMessage: 'Create an optional with ?' },
      { name: 'Unwraps safely', test: (code) => code.includes('if let') || code.includes('??'), errorMessage: 'Unwrap the optional' },
      { name: 'Produces output', test: (code, output) => output.length > 0, errorMessage: 'Print something' }
    ]
  }
];

// Generate remaining 47 lessons
for (let i = 4; i <= 50; i++) {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i <= 17 ? 'Beginner' : i <= 34 ? 'Intermediate' : 'Advanced';
  const topics = ['Arrays', 'Dictionaries', 'Functions', 'Closures', 'Classes', 'Structs', 'Protocols', 'Extensions', 'Generics', 'Error Handling'];
  const topic = topics[(i - 4) % topics.length];
  
  detailedSwiftLessons.push({
    id: `swift-${i}`,
    title: `${topic} in Swift`,
    description: `Learn ${topic} for iOS development`,
    language: 'swift' as const,
    difficulty,
    estimatedTime: 30 + (i % 15),
    content: `# ${topic}

Master ${topic} in Swift.

\`\`\`swift
// ${topic} example
print("Learning ${topic}")
\`\`\`

Practice ${topic} concepts.`,
    initialCode: `// ${topic} code`,
    solution: `print("${topic} completed!")`,
    hints: [`Learn ${topic}`, 'Swift is type-safe', 'Test on iOS/macOS'],
    testCases: [
      { name: 'Not empty', test: (code) => code.trim().length > 5, errorMessage: 'Write Swift code' }
    ]
  });
}

export const swiftLessons = detailedSwiftLessons
