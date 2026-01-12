import { Lesson } from '../courses'

const detailedGoLessons: Lesson[] = [
  {
    id: 'go-1',
    title: 'Introduction to Go',
    description: 'Learn Go basics, package main, and fmt.Println',
    language: 'go' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Welcome to Go Programming!

Go (Golang) is a compiled, statically typed language designed for simplicity and efficiency.

## Your First Program

\`\`\`go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
\`\`\`

## Key Components
- \`package main\`: Entry package
- \`import "fmt"\`: Format and print package
- \`func main()\`: Entry function
- \`fmt.Println()\`: Print to console

## Your Task
Print "Hello, Go!"`,
    initialCode: `package main

import "fmt"

func main() {
    // Write your code here
}`,
    solution: `package main

import "fmt"

func main() {
    fmt.Println("Hello, Go!")
}`,
    hints: ['Use fmt.Println()', 'Put text in quotes', 'Import fmt package'],
    testCases: [
      { name: 'Has main function', test: (code) => code.includes('func main'), errorMessage: 'Need main function' },
      { name: 'Uses fmt.Println', test: (code) => code.includes('fmt.Println'), errorMessage: 'Use fmt.Println()' },
      { name: 'Prints Hello, Go', test: (code, output) => output.includes('Hello, Go'), errorMessage: 'Should print "Hello, Go!"' }
    ]
  },
  {
    id: 'go-2',
    title: 'Variables and Types',
    description: 'Learn variable declaration with var and := operators',
    language: 'go' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Variables in Go

## Declaration Methods
\`\`\`go
var name string = "Alice"  // Explicit type
var age = 25               // Type inference
score := 100               // Short declaration (inside functions)
\`\`\`

## Basic Types
- \`int\`, \`int64\`: integers
- \`float64\`: decimals
- \`string\`: text
- \`bool\`: true/false

## Your Task
Declare variables for name, age, and isStudent using := syntax`,
    initialCode: `package main

import "fmt"

func main() {
    // Declare variables
}`,
    solution: `package main

import "fmt"

func main() {
    name := "Alice"
    age := 20
    isStudent := true
    fmt.Println("Name:", name)
    fmt.Println("Age:", age)
    fmt.Println("Student:", isStudent)
}`,
    hints: ['Use := for short declaration', 'fmt.Println accepts multiple arguments', 'Comma separates arguments'],
    testCases: [
      { name: 'Uses := operator', test: (code) => code.includes(':='), errorMessage: 'Use := for declaration' },
      { name: 'Has variables', test: (code) => code.split(':=').length >= 3, errorMessage: 'Declare at least 2 variables' },
      { name: 'Prints output', test: (code, output) => output.length > 10, errorMessage: 'Print the variables' }
    ]
  },
  {
    id: 'go-3',
    title: 'Functions',
    description: 'Learn to declare and call functions with parameters and returns',
    language: 'go' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Functions in Go

\`\`\`go
func add(a int, b int) int {
    return a + b
}

// Shorter form (same type)
func multiply(a, b int) int {
    return a * b
}

// Multiple returns
func divmod(a, b int) (int, int) {
    return a / b, a % b
}
\`\`\`

## Your Task
Create a greet function that takes a name and returns a greeting`,
    initialCode: `package main

import "fmt"

func greet(name string) string {
    // Return greeting
}

func main() {
    fmt.Println(greet("Alice"))
}`,
    solution: `package main

import "fmt"

func greet(name string) string {
    return "Hello, " + name + "!"
}

func main() {
    fmt.Println(greet("Alice"))
}`,
    hints: ['Use + to concatenate strings', 'Return statement sends value back', 'Function signature shows return type'],
    testCases: [
      { name: 'Has greet function', test: (code) => code.includes('func greet'), errorMessage: 'Define greet function' },
      { name: 'Returns string', test: (code) => code.includes('return'), errorMessage: 'Return a greeting' },
      { name: 'Produces output', test: (code, output) => output.length > 5, errorMessage: 'Should print greeting' }
    ]
  }
];

// Generate remaining lessons
for (let i = 4; i <= 50; i++) {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i <= 15 ? 'Beginner' : i <= 35 ? 'Intermediate' : 'Advanced';
  const topics = ['Slices', 'Maps', 'Structs', 'Interfaces', 'Goroutines', 'Channels', 'Error Handling', 'Pointers', 'Methods', 'Packages'];
  const topic = topics[(i - 4) % topics.length];
  
  detailedGoLessons.push({
    id: `go-${i}`,
    title: `${topic} in Go`,
    description: `Learn ${topic.toLowerCase()} and how to use them effectively`,
    language: 'go' as const,
    difficulty,
    estimatedTime: 25 + (i % 15),
    content: `# ${topic} in Go

Master ${topic.toLowerCase()} - essential for Go programming.

\`\`\`go
package main

import "fmt"

func main() {
    // ${topic} example
    fmt.Println("Learning ${topic}")
}
\`\`\`

Practice ${topic.toLowerCase()} concepts in Go.`,
    initialCode: `package main

import "fmt"

func main() {
    // Write ${topic} code
}`,
    solution: `package main

import "fmt"

func main() {
    fmt.Println("${topic} completed!")
}`,
    hints: [`Focus on ${topic}`, 'Go is simple and clear', 'Test with go run'],
    testCases: [
      { name: 'Has main', test: (code) => code.includes('func main'), errorMessage: 'Need main function' },
      { name: 'Has import', test: (code) => code.includes('import'), errorMessage: 'Import packages' },
      { name: 'Produces output', test: (code, output) => output.length > 0, errorMessage: 'Should print' }
    ]
  });
}

export const goLessons = detailedGoLessons
