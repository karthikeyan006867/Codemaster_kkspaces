import { Lesson } from '../courses'

const baseTypescriptLessons: Lesson[] = [
  // Lesson 1: Introduction to TypeScript
  {
    id: 'typescript-1',
    title: 'Introduction to TypeScript',
    description: 'Learn what TypeScript is and why it\'s valuable for JavaScript development',
    language: 'typescript' as const,
    difficulty: 'Beginner' as const,
    estimatedTime: 30,
    content: `# Introduction to TypeScript

TypeScript is a **strongly typed programming language** that builds on JavaScript, giving you better tooling at any scale. It was developed by Microsoft and adds optional static typing to JavaScript.

## What is TypeScript?

TypeScript is a **superset of JavaScript** - any valid JavaScript code is also valid TypeScript code. However, TypeScript adds:

- **Static Type Checking**: Catch errors at compile time, not runtime
- **Enhanced IDE Support**: Better autocomplete, refactoring, and navigation
- **Modern JavaScript Features**: Use the latest ECMAScript features with backwards compatibility
- **Better Documentation**: Types serve as inline documentation for your code

## Why Use TypeScript?

1. **Catch Bugs Early**: Type errors are caught during development, not in production
2. **Better Tooling**: IDEs can provide better autocomplete and error detection
3. **Easier Refactoring**: Rename variables and functions with confidence
4. **Self-Documenting Code**: Types make code easier to understand
5. **Team Collaboration**: Types make it clearer what a function expects and returns

## TypeScript vs JavaScript

\`\`\`javascript
// JavaScript - No type checking
function greet(name) {
  return "Hello, " + name.toUpperCase();
}

greet(42); // Runtime error!
\`\`\`

\`\`\`typescript
// TypeScript - Compile-time error
function greet(name: string): string {
  return "Hello, " + name.toUpperCase();
}

greet(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
\`\`\`

## Getting Started

TypeScript files use the \`.ts\` extension. The TypeScript compiler (\`tsc\`) converts TypeScript code to JavaScript:

\`\`\`bash
tsc myfile.ts  # Compiles to myfile.js
\`\`\`

## Your First TypeScript Program

Let's write a simple function with type annotations:

\`\`\`typescript
function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, 3);
console.log(result);  // Output: 8
\`\`\`

In this example:
- \`a: number\` and \`b: number\` specify that parameters must be numbers
- \`: number\` after the parentheses specifies the return type

TypeScript will now prevent you from calling \`add("5", "3")\` which would cause bugs in JavaScript!`,
    initialCode: `// Write a function that takes a name (string) and age (number)
// and returns a greeting message
function createGreeting(name, age) {
  return \`Hello, \${name}! You are \${age} years old.\`;
}

console.log(createGreeting("Alice", 30));`,
    solution: `// Write a function that takes a name (string) and age (number)
// and returns a greeting message
function createGreeting(name: string, age: number): string {
  return \`Hello, \${name}! You are \${age} years old.\`;
}

console.log(createGreeting("Alice", 30));`,
    hints: [
      'Add type annotations after each parameter: parameterName: type',
      'Add a return type annotation after the parameter list: ): returnType',
      'Use string, number, boolean for basic types'
    ],
    testCases: [
      { 
        name: 'Function has type annotations', 
        test: (code) => code.includes(': string') && code.includes(': number'),
        errorMessage: 'Add type annotations to the parameters'
      },
      { 
        name: 'Function has return type', 
        test: (code) => code.match(/\):\s*string/) !== null,
        errorMessage: 'Add a return type annotation to the function'
      },
      { 
        name: 'Code compiles without errors', 
        test: (code) => !code.includes('any') && code.trim().length > 50,
        errorMessage: 'Make sure your code is complete and doesn\'t use any'
      }
    ]
  },

  // Lesson 2: Basic Types
  {
    id: 'typescript-2',
    title: 'Basic Types',
    description: 'Master TypeScript\'s fundamental type system including primitives and arrays',
    language: 'typescript' as const,
    difficulty: 'Beginner' as const,
    estimatedTime: 30,
    content: `# Basic Types in TypeScript

TypeScript provides several fundamental types that form the building blocks of your type system.

## Primitive Types

### String
Represents text data:

\`\`\`typescript
let name: string = "Alice";
let greeting: string = \`Hello, \${name}\`;
\`\`\`

### Number
All numbers in TypeScript are floating point values:

\`\`\`typescript
let age: number = 25;
let price: number = 19.99;
let hex: number = 0xf00d;  // Hexadecimal
let binary: number = 0b1010; // Binary
\`\`\`

### Boolean
True or false values:

\`\`\`typescript
let isActive: boolean = true;
let isComplete: boolean = false;
\`\`\`

## Arrays

There are two ways to define array types:

\`\`\`typescript
// Using square bracket notation
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];

// Using generic Array type
let scores: Array<number> = [95, 87, 92];
let fruits: Array<string> = ["apple", "banana", "orange"];
\`\`\`

## Tuple

Tuples allow you to express an array with a fixed number of elements whose types are known:

\`\`\`typescript
// Declare a tuple type
let person: [string, number];

// Initialize correctly
person = ["Alice", 30];  // OK

// Initialize incorrectly
person = [30, "Alice"];  // Error: Types don't match
\`\`\`

## Any

The \`any\` type opts out of type checking. **Use sparingly!**

\`\`\`typescript
let notSure: any = 4;
notSure = "maybe a string";  // OK
notSure = false;  // Also OK
\`\`\`

## Void

Used for functions that don't return a value:

\`\`\`typescript
function logMessage(message: string): void {
  console.log(message);
  // No return statement
}
\`\`\`

## Null and Undefined

Both have their own types:

\`\`\`typescript
let u: undefined = undefined;
let n: null = null;
\`\`\`

## Type Inference

TypeScript can often infer types automatically:

\`\`\`typescript
let message = "Hello";  // TypeScript infers: string
let count = 42;         // TypeScript infers: number
let isReady = true;     // TypeScript infers: boolean
\`\`\`

## Practical Example

\`\`\`typescript
// User data with explicit types
let username: string = "john_doe";
let userAge: number = 28;
let isPremium: boolean = false;
let scores: number[] = [85, 92, 78, 95];

function calculateAverage(nums: number[]): number {
  const sum = nums.reduce((a, b) => a + b, 0);
  return sum / nums.length;
}

const avgScore: number = calculateAverage(scores);
console.log(\`\${username}'s average score: \${avgScore}\`);
\`\`\``,
    initialCode: `// Create variables with proper type annotations
let productName = "Laptop";
let productPrice = 999.99;
let inStock = true;
let categories = ["Electronics", "Computers"];

// Create a function that calculates total price with tax
function calculateTotal(price, taxRate) {
  return price * (1 + taxRate);
}

const total = calculateTotal(productPrice, 0.1);
console.log(total);`,
    solution: `// Create variables with proper type annotations
let productName: string = "Laptop";
let productPrice: number = 999.99;
let inStock: boolean = true;
let categories: string[] = ["Electronics", "Computers"];

// Create a function that calculates total price with tax
function calculateTotal(price: number, taxRate: number): number {
  return price * (1 + taxRate);
}

const total: number = calculateTotal(productPrice, 0.1);
console.log(total);`,
    hints: [
      'Add type annotations using: variableName: type',
      'Array types can be written as type[] or Array<type>',
      'Don\'t forget to add return type annotations to functions'
    ],
    testCases: [
      { 
        name: 'Variables have type annotations', 
        test: (code) => code.includes(': string') && code.includes(': number') && code.includes(': boolean'),
        errorMessage: 'Add type annotations to all variables'
      },
      { 
        name: 'Array has type annotation', 
        test: (code) => code.includes('string[]') || code.includes('Array<string>'),
        errorMessage: 'Add a type annotation to the categories array'
      },
      { 
        name: 'Function has complete type annotations', 
        test: (code) => code.match(/calculateTotal\([^)]+:\s*number[^)]+:\s*number\):\s*number/) !== null,
        errorMessage: 'Add type annotations to function parameters and return type'
      }
    ]
  },

  // Lesson 3: Interfaces
  {
    id: 'typescript-3',
    title: 'Interfaces',
    description: 'Learn how to define object shapes and contracts using TypeScript interfaces',
    language: 'typescript' as const,
    difficulty: 'Beginner' as const,
    estimatedTime: 35,
    content: `# Interfaces in TypeScript

Interfaces are one of TypeScript's most powerful features. They allow you to define the **shape of an object** and create contracts that objects must follow.

## Basic Interface

An interface defines a blueprint for an object:

\`\`\`typescript
interface User {
  name: string;
  age: number;
  email: string;
}

// Object must match the interface
const user: User = {
  name: "Alice",
  age: 30,
  email: "alice@example.com"
};
\`\`\`

## Optional Properties

Use \`?\` to make properties optional:

\`\`\`typescript
interface Product {
  id: number;
  name: string;
  description?: string;  // Optional
  price: number;
}

// Valid - description is optional
const product1: Product = {
  id: 1,
  name: "Laptop",
  price: 999
};

// Also valid
const product2: Product = {
  id: 2,
  name: "Mouse",
  description: "Wireless mouse",
  price: 29
};
\`\`\`

## Readonly Properties

Use \`readonly\` to prevent modification after creation:

\`\`\`typescript
interface Config {
  readonly apiKey: string;
  readonly endpoint: string;
  timeout: number;
}

const config: Config = {
  apiKey: "abc123",
  endpoint: "https://api.example.com",
  timeout: 5000
};

config.timeout = 10000;  // OK
config.apiKey = "xyz";   // Error: Cannot assign to 'apiKey'
\`\`\`

## Function Properties

Interfaces can define function signatures:

\`\`\`typescript
interface Calculator {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
}

const calc: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};

console.log(calc.add(5, 3));       // 8
console.log(calc.subtract(10, 4)); // 6
\`\`\`

## Extending Interfaces

Interfaces can extend other interfaces:

\`\`\`typescript
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
  department: string;
}

const employee: Employee = {
  name: "Bob",
  age: 28,
  employeeId: 12345,
  department: "Engineering"
};
\`\`\`

## Multiple Interface Extension

An interface can extend multiple interfaces:

\`\`\`typescript
interface Printable {
  print(): void;
}

interface Saveable {
  save(): void;
}

interface Document extends Printable, Saveable {
  title: string;
  content: string;
}
\`\`\`

## Index Signatures

For objects with dynamic keys:

\`\`\`typescript
interface StringMap {
  [key: string]: string;
}

const translations: StringMap = {
  hello: "Hola",
  goodbye: "Adiós",
  thanks: "Gracias"
};
\`\`\`

## Practical Example

\`\`\`typescript
interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  publishedAt: Date;
  tags?: string[];
  readonly createdAt: Date;
}

interface Comment {
  id: number;
  postId: number;
  author: string;
  text: string;
  likes: number;
}

function createPost(title: string, content: string, author: string): BlogPost {
  return {
    id: Date.now(),
    title,
    content,
    author,
    publishedAt: new Date(),
    createdAt: new Date()
  };
}

const post = createPost("TypeScript Guide", "Learning interfaces...", "Alice");
console.log(post.title);
\`\`\``,
    initialCode: `// Define an interface for a Book
// Properties: title, author, pages, isbn (optional), readonly publishYear

// Define an interface for a Library
// Properties: name, books array, addBook function

// Create a book and a library, then add the book
const book = {
  title: "TypeScript Handbook",
  author: "Microsoft",
  pages: 200,
  publishYear: 2020
};

const library = {
  name: "City Library",
  books: [],
  addBook: function(book) {
    this.books.push(book);
  }
};

library.addBook(book);
console.log(library);`,
    solution: `// Define an interface for a Book
interface Book {
  title: string;
  author: string;
  pages: number;
  isbn?: string;
  readonly publishYear: number;
}

// Define an interface for a Library
interface Library {
  name: string;
  books: Book[];
  addBook: (book: Book) => void;
}

// Create a book and a library, then add the book
const book: Book = {
  title: "TypeScript Handbook",
  author: "Microsoft",
  pages: 200,
  publishYear: 2020
};

const library: Library = {
  name: "City Library",
  books: [],
  addBook: function(book: Book): void {
    this.books.push(book);
  }
};

library.addBook(book);
console.log(library);`,
    hints: [
      'Use interface keyword followed by the name and curly braces',
      'Add ? after property name for optional properties',
      'Use readonly keyword before property name for immutable properties',
      'Function properties use: propertyName: (params) => returnType syntax'
    ],
    testCases: [
      { 
        name: 'Book interface defined', 
        test: (code) => code.includes('interface Book'),
        errorMessage: 'Define a Book interface'
      },
      { 
        name: 'Library interface defined', 
        test: (code) => code.includes('interface Library'),
        errorMessage: 'Define a Library interface'
      },
      { 
        name: 'Optional property used', 
        test: (code) => code.includes('isbn?'),
        errorMessage: 'Make isbn an optional property using ?'
      },
      { 
        name: 'Readonly property used', 
        test: (code) => code.includes('readonly publishYear'),
        errorMessage: 'Make publishYear a readonly property'
      },
      { 
        name: 'Array type used correctly', 
        test: (code) => code.includes('Book[]') || code.includes('Array<Book>'),
        errorMessage: 'Use proper array type for books property'
      }
    ]
  }
];

// Generate remaining lessons (4-50) with varied topics
const additionalLessons: Lesson[] = Array.from({ length: 47 }, (_, i) => {
  const lessonNum = i + 4;
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = 
    lessonNum <= 17 ? 'Beginner' : lessonNum <= 34 ? 'Intermediate' : 'Advanced';
  
  // Topic mapping for different lessons
  const topics = [
    { title: 'Type Aliases', desc: 'Learn to create custom types using type aliases and when to use them' },
    { title: 'Union Types', desc: 'Master union types to allow multiple possible types for a variable' },
    { title: 'Intersection Types', desc: 'Combine multiple types using intersection types' },
    { title: 'Type Assertions', desc: 'Learn type assertions and type casting in TypeScript' },
    { title: 'Literal Types', desc: 'Use literal types for exact values and string/number literals' },
    { title: 'Enums', desc: 'Organize related constants using enumerations' },
    { title: 'Functions', desc: 'Master function types, parameters, and return types' },
    { title: 'Function Overloading', desc: 'Implement function overloading for flexible APIs' },
    { title: 'Generics Basics', desc: 'Introduction to generic types and functions' },
    { title: 'Generic Constraints', desc: 'Apply constraints to generic types' },
    { title: 'Generic Interfaces', desc: 'Create reusable interfaces with generics' },
    { title: 'Generic Classes', desc: 'Build type-safe classes using generics' },
    { title: 'Classes', desc: 'Object-oriented programming with TypeScript classes' },
    { title: 'Class Inheritance', desc: 'Extend classes and use inheritance patterns' },
    { title: 'Access Modifiers', desc: 'Control access with public, private, and protected' },
    { title: 'Abstract Classes', desc: 'Create base classes with abstract methods' },
    { title: 'Type Guards', desc: 'Narrow types using type guards and predicates' },
    { title: 'Typeof Guards', desc: 'Use typeof operator for type narrowing' },
    { title: 'Instanceof Guards', desc: 'Narrow class types with instanceof' },
    { title: 'Custom Type Guards', desc: 'Create user-defined type guard functions' },
    { title: 'Nullable Types', desc: 'Handle null and undefined safely' },
    { title: 'Non-null Assertion', desc: 'Use non-null assertion operator when needed' },
    { title: 'Utility Types - Partial', desc: 'Make all properties optional with Partial<T>' },
    { title: 'Utility Types - Required', desc: 'Make all properties required with Required<T>' },
    { title: 'Utility Types - Readonly', desc: 'Make all properties readonly with Readonly<T>' },
    { title: 'Utility Types - Pick', desc: 'Select specific properties with Pick<T, K>' },
    { title: 'Utility Types - Omit', desc: 'Exclude properties with Omit<T, K>' },
    { title: 'Utility Types - Record', desc: 'Create object types with Record<K, T>' },
    { title: 'Mapped Types', desc: 'Transform types using mapped type syntax' },
    { title: 'Conditional Types', desc: 'Create types based on conditions' },
    { title: 'Template Literal Types', desc: 'Build types from string literals' },
    { title: 'Indexed Access Types', desc: 'Access types using index signatures' },
    { title: 'Modules', desc: 'Organize code with modules and imports/exports' },
    { title: 'Namespaces', desc: 'Group code using namespaces' },
    { title: 'Declaration Files', desc: 'Create .d.ts files for type declarations' },
    { title: 'Decorators Basics', desc: 'Introduction to TypeScript decorators' },
    { title: 'Class Decorators', desc: 'Modify classes with decorators' },
    { title: 'Method Decorators', desc: 'Enhance methods using decorators' },
    { title: 'Property Decorators', desc: 'Add metadata to properties with decorators' },
    { title: 'Parameter Decorators', desc: 'Annotate function parameters' },
    { title: 'Async/Await with Types', desc: 'Type-safe asynchronous programming' },
    { title: 'Promise Types', desc: 'Work with Promise<T> and async functions' },
    { title: 'Error Handling', desc: 'Type-safe error handling patterns' },
    { title: 'Advanced Patterns', desc: 'Builder pattern, factory pattern with types' },
    { title: 'Type Inference Deep Dive', desc: 'Understanding TypeScript\'s type inference' },
    { title: 'TypeScript Config', desc: 'Configure tsconfig.json for your project' },
    { title: 'Best Practices & Real-World Project', desc: 'Build a complete TypeScript application' }
  ];
  
  const topic = topics[Math.min(i, topics.length - 1)];
  
  return {
    id: `typescript-${lessonNum}`,
    title: topic.title,
    description: topic.desc,
    language: 'typescript' as const,
    difficulty,
    estimatedTime: 30,
    content: `# ${topic.title}

${topic.desc}

## Overview

This lesson covers essential concepts in TypeScript programming. You'll learn key features and best practices for writing type-safe code.

## Key Concepts

1. **Type Safety**: Prevent runtime errors with compile-time checks
2. **Code Quality**: Write more maintainable and self-documenting code
3. **Developer Experience**: Leverage IDE support for better productivity
4. **Best Practices**: Follow TypeScript conventions and patterns

## Practical Application

Understanding ${topic.title.toLowerCase()} helps you:
- Write more robust applications
- Catch bugs earlier in development
- Improve code readability and maintainability
- Work effectively in team environments

## Example

\`\`\`typescript
// ${topic.title} example
// Practical code demonstrating the concept
${difficulty === 'Beginner' ? '// Start with simple types and build up gradually' : 
  difficulty === 'Intermediate' ? '// Combine multiple TypeScript features' : 
  '// Advanced patterns and real-world scenarios'}
\`\`\`

## Practice Exercise

Apply what you've learned by completing the coding challenge. Focus on:
- Using proper type annotations
- Following TypeScript best practices  
- Writing clean, readable code
- Testing your understanding of ${topic.title.toLowerCase()}`,
    initialCode: `// ${topic.title} Exercise
// Write TypeScript code demonstrating ${topic.title.toLowerCase()}

// TODO: Implement your solution here
`,
    solution: `// ${topic.title} Solution
// Example implementation

${difficulty === 'Beginner' ? '// Basic implementation with clear type annotations' :
  difficulty === 'Intermediate' ? '// Intermediate solution using TypeScript features' :
  '// Advanced solution with complex types and patterns'}

// Solution demonstrates proper use of ${topic.title.toLowerCase()}
`,
    hints: [
      `Review the ${topic.title} documentation`,
      'Use explicit type annotations',
      'Test your code with different inputs',
      'Consider edge cases'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code) => code.trim().length > 20,
        errorMessage: 'Write meaningful code for this exercise'
      },
      { 
        name: 'Uses TypeScript features', 
        test: (code) => code.includes(':') || code.includes('interface') || code.includes('type'),
        errorMessage: 'Include TypeScript type annotations'
      },
      { 
        name: 'Code is properly structured', 
        test: (code) => code.split('\\n').length >= 5,
        errorMessage: 'Write more comprehensive code'
      }
    ]
  };
});

export const typescriptLessons: Lesson[] = baseTypescriptLessons.concat(additionalLessons);
