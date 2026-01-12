import { Lesson } from '../courses'

const detailedRustLessons: Lesson[] = [
  {
    id: 'rust-1',
    title: 'Introduction to Rust',
    description: 'Learn Rust basics and the println! macro',
    language: 'rust' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Welcome to Rust!

Rust is a systems programming language focused on safety, speed, and concurrency.

## Your First Program

\`\`\`rust
fn main() {
    println!("Hello, World!");
}
\`\`\`

## Key Components
- \`fn main()\`: Entry function
- \`println!()\`: Macro (note the !) for printing
- Memory safe without garbage collection
- Zero-cost abstractions

## Your Task
Print "Hello, Rust!"`,
    initialCode: `fn main() {
    // Write your code here
}`,
    solution: `fn main() {
    println!("Hello, Rust!");
}`,
    hints: ['Use println! macro', 'Note the ! for macros', 'Text goes in quotes'],
    testCases: [
      { name: 'Has main function', test: (code) => code.includes('fn main'), errorMessage: 'Need main function' },
      { name: 'Uses println! macro', test: (code) => code.includes('println!'), errorMessage: 'Use println!()' },
      { name: 'Prints Hello, Rust', test: (code, output) => output.includes('Hello, Rust'), errorMessage: 'Should print "Hello, Rust!"' }
    ]
  },
  {
    id: 'rust-2',
    title: 'Variables and Mutability',
    description: 'Learn let bindings and mut keyword',
    language: 'rust' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Variables in Rust

## Immutable by Default
\`\`\`rust
let x = 5;        // Immutable
// x = 6;         // Error!

let mut y = 10;   // Mutable
y = 15;           // OK!
\`\`\`

## Type Annotations
\`\`\`rust
let age: i32 = 25;
let name: &str = "Alice";
let price: f64 = 19.99;
\`\`\`

## Your Task
Create mutable and immutable variables, modify the mutable one`,
    initialCode: `fn main() {
    // Declare variables
}`,
    solution: `fn main() {
    let x = 5;
    let mut y = 10;
    y = 15;
    println!("x: {}, y: {}", x, y);
}`,
    hints: ['Use mut for mutable variables', '{} is placeholder in println!', 'Immutable by default is safe'],
    testCases: [
      { name: 'Has let binding', test: (code) => code.includes('let'), errorMessage: 'Use let for variables' },
      { name: 'Uses mut keyword', test: (code) => code.includes('mut'), errorMessage: 'Use mut for mutable variable' },
      { name: 'Prints output', test: (code, output) => output.length > 5, errorMessage: 'Print the variables' }
    ]
  },
  {
    id: 'rust-3',
    title: 'Ownership Basics',
    description: 'Learn the core concept of ownership',
    language: 'rust' as const,
    difficulty: 'Beginner',
    estimatedTime: 40,
    content: `# Ownership in Rust

Rust's most unique feature - each value has a single owner.

\`\`\`rust
let s1 = String::from("hello");
let s2 = s1;  // s1 is moved, no longer valid
// println!("{}", s1);  // Error!
println!("{}", s2);     // OK!
\`\`\`

## Rules
1. Each value has one owner
2. Owner goes out of scope → value dropped
3. Move prevents double-free bugs

## Your Task
Create a String and transfer ownership`,
    initialCode: `fn main() {
    // Create and move a String
}`,
    solution: `fn main() {
    let s1 = String::from("Rust");
    let s2 = s1;
    println!("String: {}", s2);
}`,
    hints: ['Use String::from()', 'Assignment moves ownership', 'Old variable becomes invalid'],
    testCases: [
      { name: 'Creates String', test: (code) => code.includes('String::from'), errorMessage: 'Use String::from()' },
      { name: 'Has assignment', test: (code) => code.includes('='), errorMessage: 'Assign to transfer ownership' },
      { name: 'Prints output', test: (code, output) => output.length > 0, errorMessage: 'Print the string' }
    ]
  }
];

// Generate remaining lessons
for (let i = 4; i <= 50; i++) {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i <= 15 ? 'Beginner' : i <= 35 ? 'Intermediate' : 'Advanced';
  const topics = ['References', 'Borrowing', 'Slices', 'Structs', 'Enums', 'Match', 'Option', 'Result', 'Lifetimes', 'Traits'];
  const topic = topics[(i - 4) % topics.length];
  
  detailedRustLessons.push({
    id: `rust-${i}`,
    title: `${topic} in Rust`,
    description: `Master ${topic.toLowerCase()} for memory-safe programming`,
    language: 'rust' as const,
    difficulty,
    estimatedTime: 30 + (i % 20),
    content: `# ${topic} in Rust

Learn ${topic.toLowerCase()} - key to Rust's memory safety.

\`\`\`rust
fn main() {
    // ${topic} example
    println!("Learning ${topic}");
}
\`\`\`

Practice ${topic.toLowerCase()} concepts.`,
    initialCode: `fn main() {
    // Write ${topic} code
}`,
    solution: `fn main() {
    println!("${topic} completed!");
}`,
    hints: [`Focus on ${topic}`, 'Ownership prevents bugs', 'Compiler is helpful'],
    testCases: [
      { name: 'Has main', test: (code) => code.includes('fn main'), errorMessage: 'Need main function' },
      { name: 'Has code', test: (code) => code.length > 40, errorMessage: 'Write code' },
      { name: 'Produces output', test: (code, output) => output.length > 0, errorMessage: 'Should print' }
    ]
  });
}

export const rustLessons = detailedRustLessons
