import { Lesson } from '../courses'

// First 3 lessons with complete, detailed content
const detailedJavaLessons: Lesson[] = [
  {
    id: 'java-1',
    title: 'Introduction to Java',
    description: 'Learn Java syntax, main method, and your first program',
    language: 'java' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Welcome to Java Programming!

Java is a powerful, object-oriented programming language used for building enterprise applications, Android apps, and much more.

## Your First Java Program

\`\`\`java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

## Key Components
- \`public class Main\`: Declares a class named Main
- \`public static void main(String[] args)\`: Entry point
- \`System.out.println()\`: Prints to console

## Your Task
Write a program that prints "Hello, Java!"`,
    initialCode: `public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`,
    hints: ['Use System.out.println()', 'Put text in quotes', 'End with semicolon'],
    testCases: [
      { name: 'Has main method', test: (code) => code.includes('public static void main'), errorMessage: 'Needs main method' },
      { name: 'Uses System.out.println', test: (code) => code.includes('System.out.println'), errorMessage: 'Use System.out.println()' },
      { name: 'Prints Hello, Java', test: (code, output) => output.includes('Hello, Java'), errorMessage: 'Should print "Hello, Java!"' }
    ]
  },
  {
    id: 'java-2',
    title: 'Variables and Data Types',
    description: 'Learn primitive types and variable declaration',
    language: 'java' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Variables and Data Types

## Primitive Types
- \`int\`: integers (-2^31 to 2^31-1)
- \`double\`: decimals
- \`boolean\`: true/false
- \`char\`: single character

\`\`\`java
int age = 25;
double price = 19.99;
boolean isActive = true;
char grade = 'A';
String name = "Alice";
\`\`\`

## Your Task
Create and print variables for name, age, height, isStudent`,
    initialCode: `public class Main {
    public static void main(String[] args) {
        // Declare variables
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        String name = "Alice";
        int age = 20;
        double height = 1.75;
        boolean isStudent = true;
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}`,
    hints: ['Declare with type name', 'Use + to concatenate', 'Print each value'],
    testCases: [
      { name: 'Has variables', test: (code) => code.includes('int') && code.includes('double'), errorMessage: 'Declare variables' },
      { name: 'Prints output', test: (code, output) => output.length > 10, errorMessage: 'Print the variables' }
    ]
  },
  {
    id: 'java-3',
    title: 'Operators and Expressions',
    description: 'Learn arithmetic, comparison, and logical operators',
    language: 'java' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Operators

## Arithmetic Operators
\`\`\`java
int a = 10, b = 3;
int sum = a + b;      // 13
int diff = a - b;     // 7
int product = a * b;  // 30
int quotient = a / b; // 3
int remainder = a % b; // 1
\`\`\`

## Your Task
Calculate and print sum, difference, product of two numbers`,
    initialCode: `public class Main {
    public static void main(String[] args) {
        int num1 = 15;
        int num2 = 4;
        // Calculate and print
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int num1 = 15, num2 = 4;
        System.out.println("Sum: " + (num1 + num2));
        System.out.println("Difference: " + (num1 - num2));
        System.out.println("Product: " + (num1 * num2));
    }
}`,
    hints: ['Use +, -, * operators', 'Print with labels', 'Use parentheses'],
    testCases: [
      { name: 'Uses operators', test: (code) => code.includes('+') || code.includes('*'), errorMessage: 'Use arithmetic operators' },
      { name: 'Has output', test: (code, output) => output.length > 5, errorMessage: 'Print results' }
    ]
  }
];

// Generate remaining 47 lessons
for (let i = 4; i <= 50; i++) {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i <= 15 ? 'Beginner' : i <= 35 ? 'Intermediate' : 'Advanced';
  const topics = ['Control Flow', 'Loops', 'Arrays', 'Methods', 'Classes', 'Inheritance', 'Interfaces', 'Collections', 'Exception Handling', 'File I/O'];
  const topic = topics[(i - 4) % topics.length];
  
  detailedJavaLessons.push({
    id: `java-${i}`,
    title: `${topic} in Java`,
    description: `Learn ${topic.toLowerCase()} and apply them effectively`,
    language: 'java' as const,
    difficulty,
    estimatedTime: 30 + (i % 10),
    content: `# ${topic} in Java

Master ${topic.toLowerCase()} - essential for Java programming.

\`\`\`java
public class Main {
    public static void main(String[] args) {
        // ${topic} example
        System.out.println("Learning ${topic}");
    }
}
\`\`\`

Practice ${topic.toLowerCase()} concepts.`,
    initialCode: `public class Main {
    public static void main(String[] args) {
        // Write ${topic} code
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        System.out.println("${topic} completed!");
    }
}`,
    hints: [`Focus on ${topic}`, 'Test frequently', 'Read errors'],
    testCases: [
      { name: 'Has main', test: (code) => code.includes('main'), errorMessage: 'Need main method' },
      { name: 'Has content', test: (code) => code.length > 50, errorMessage: 'Write code' },
      { name: 'Produces output', test: (code, output) => output.length > 0, errorMessage: 'Should print' }
    ]
  });
}

export const javaLessons = detailedJavaLessons
