import { Lesson } from '../courses'

export const bashLessons: Lesson[] = [
  {
    id: 'bash-1',
    title: 'Bash Basics',
    description: 'Introduction to shell scripting',
    language: 'bash' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# Bash Basics

## Overview
Introduction to shell scripting

## Learning Objectives
- Master bash basics
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Basic fundamentals
- Getting started
- Core syntax

## Example Code
\`\`\`bash
// Bash Basics example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of bash basics.

## Tips
- Start simple
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Bash Basics
// Write your Bash code here

`,
    solution: `// Solution for Bash Basics
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-2',
    title: 'Variables and Environment',
    description: 'Working with variables',
    language: 'bash' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Variables and Environment

## Overview
Working with variables

## Learning Objectives
- Master variables and environment
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Basic fundamentals
- Getting started
- Core syntax

## Example Code
\`\`\`bash
// Variables and Environment example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of variables and environment.

## Tips
- Start simple
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Variables and Environment
// Write your Bash code here

`,
    solution: `// Solution for Variables and Environment
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-3',
    title: 'Command Line Arguments',
    description: 'Process script arguments',
    language: 'bash' as const,
    difficulty: 'Beginner',
    estimatedTime: 40,
    content: `# Command Line Arguments

## Overview
Process script arguments

## Learning Objectives
- Master command line arguments
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Basic fundamentals
- Getting started
- Core syntax

## Example Code
\`\`\`bash
// Command Line Arguments example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of command line arguments.

## Tips
- Start simple
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Command Line Arguments
// Write your Bash code here

`,
    solution: `// Solution for Command Line Arguments
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-4',
    title: 'Conditional Statements',
    description: 'if, else, elif in bash',
    language: 'bash' as const,
    difficulty: 'Beginner',
    estimatedTime: 50,
    content: `# Conditional Statements

## Overview
if, else, elif in bash

## Learning Objectives
- Master conditional statements
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Basic fundamentals
- Getting started
- Core syntax

## Example Code
\`\`\`bash
// Conditional Statements example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of conditional statements.

## Tips
- Start simple
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Conditional Statements
// Write your Bash code here

`,
    solution: `// Solution for Conditional Statements
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-5',
    title: 'Loops - For and While',
    description: 'Iteration in bash scripts',
    language: 'bash' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# Loops - For and While

## Overview
Iteration in bash scripts

## Learning Objectives
- Master loops - for and while
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Basic fundamentals
- Getting started
- Core syntax

## Example Code
\`\`\`bash
// Loops - For and While example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of loops - for and while.

## Tips
- Start simple
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Loops - For and While
// Write your Bash code here

`,
    solution: `// Solution for Loops - For and While
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-6',
    title: 'Functions',
    description: 'Create reusable code blocks',
    language: 'bash' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Functions

## Overview
Create reusable code blocks

## Learning Objectives
- Master functions
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Basic fundamentals
- Getting started
- Core syntax

## Example Code
\`\`\`bash
// Functions example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of functions.

## Tips
- Start simple
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Functions
// Write your Bash code here

`,
    solution: `// Solution for Functions
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-7',
    title: 'File Operations',
    description: 'Read, write, and manipulate files',
    language: 'bash' as const,
    difficulty: 'Beginner',
    estimatedTime: 40,
    content: `# File Operations

## Overview
Read, write, and manipulate files

## Learning Objectives
- Master file operations
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Basic fundamentals
- Getting started
- Core syntax

## Example Code
\`\`\`bash
// File Operations example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of file operations.

## Tips
- Start simple
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// File Operations
// Write your Bash code here

`,
    solution: `// Solution for File Operations
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-8',
    title: 'String Manipulation',
    description: 'Work with text strings',
    language: 'bash' as const,
    difficulty: 'Beginner',
    estimatedTime: 50,
    content: `# String Manipulation

## Overview
Work with text strings

## Learning Objectives
- Master string manipulation
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Basic fundamentals
- Getting started
- Core syntax

## Example Code
\`\`\`bash
// String Manipulation example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of string manipulation.

## Tips
- Start simple
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// String Manipulation
// Write your Bash code here

`,
    solution: `// Solution for String Manipulation
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-9',
    title: 'Arrays',
    description: 'Arrays and associative arrays',
    language: 'bash' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# Arrays

## Overview
Arrays and associative arrays

## Learning Objectives
- Master arrays
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Basic fundamentals
- Getting started
- Core syntax

## Example Code
\`\`\`bash
// Arrays example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of arrays.

## Tips
- Start simple
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Arrays
// Write your Bash code here

`,
    solution: `// Solution for Arrays
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-10',
    title: 'Input/Output Redirection',
    description: 'Redirect stdin, stdout, stderr',
    language: 'bash' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Input/Output Redirection

## Overview
Redirect stdin, stdout, stderr

## Learning Objectives
- Master input/output redirection
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Basic fundamentals
- Getting started
- Core syntax

## Example Code
\`\`\`bash
// Input/Output Redirection example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of input/output redirection.

## Tips
- Start simple
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Input/Output Redirection
// Write your Bash code here

`,
    solution: `// Solution for Input/Output Redirection
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-11',
    title: 'Pipes and Filters',
    description: 'Combine commands with pipes',
    language: 'bash' as const,
    difficulty: 'Beginner',
    estimatedTime: 40,
    content: `# Pipes and Filters

## Overview
Combine commands with pipes

## Learning Objectives
- Master pipes and filters
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Basic fundamentals
- Getting started
- Core syntax

## Example Code
\`\`\`bash
// Pipes and Filters example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of pipes and filters.

## Tips
- Start simple
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Pipes and Filters
// Write your Bash code here

`,
    solution: `// Solution for Pipes and Filters
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-12',
    title: 'Regular Expressions',
    description: 'Pattern matching in bash',
    language: 'bash' as const,
    difficulty: 'Beginner',
    estimatedTime: 50,
    content: `# Regular Expressions

## Overview
Pattern matching in bash

## Learning Objectives
- Master regular expressions
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Basic fundamentals
- Getting started
- Core syntax

## Example Code
\`\`\`bash
// Regular Expressions example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of regular expressions.

## Tips
- Start simple
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Regular Expressions
// Write your Bash code here

`,
    solution: `// Solution for Regular Expressions
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-13',
    title: 'grep Command',
    description: 'Search text using patterns',
    language: 'bash' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# grep Command

## Overview
Search text using patterns

## Learning Objectives
- Master grep command
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Basic fundamentals
- Getting started
- Core syntax

## Example Code
\`\`\`bash
// grep Command example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of grep command.

## Tips
- Start simple
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// grep Command
// Write your Bash code here

`,
    solution: `// Solution for grep Command
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-14',
    title: 'sed Stream Editor',
    description: 'Text transformation',
    language: 'bash' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# sed Stream Editor

## Overview
Text transformation

## Learning Objectives
- Master sed stream editor
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Basic fundamentals
- Getting started
- Core syntax

## Example Code
\`\`\`bash
// sed Stream Editor example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of sed stream editor.

## Tips
- Start simple
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// sed Stream Editor
// Write your Bash code here

`,
    solution: `// Solution for sed Stream Editor
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-15',
    title: 'awk Text Processing',
    description: 'Advanced text processing',
    language: 'bash' as const,
    difficulty: 'Beginner',
    estimatedTime: 40,
    content: `# awk Text Processing

## Overview
Advanced text processing

## Learning Objectives
- Master awk text processing
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Basic fundamentals
- Getting started
- Core syntax

## Example Code
\`\`\`bash
// awk Text Processing example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of awk text processing.

## Tips
- Start simple
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// awk Text Processing
// Write your Bash code here

`,
    solution: `// Solution for awk Text Processing
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-16',
    title: 'find Command',
    description: 'Search for files and directories',
    language: 'bash' as const,
    difficulty: 'Beginner',
    estimatedTime: 50,
    content: `# find Command

## Overview
Search for files and directories

## Learning Objectives
- Master find command
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Basic fundamentals
- Getting started
- Core syntax

## Example Code
\`\`\`bash
// find Command example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of find command.

## Tips
- Start simple
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// find Command
// Write your Bash code here

`,
    solution: `// Solution for find Command
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-17',
    title: 'Process Management',
    description: 'Control running processes',
    language: 'bash' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# Process Management

## Overview
Control running processes

## Learning Objectives
- Master process management
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Basic fundamentals
- Getting started
- Core syntax

## Example Code
\`\`\`bash
// Process Management example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of process management.

## Tips
- Start simple
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Process Management
// Write your Bash code here

`,
    solution: `// Solution for Process Management
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-18',
    title: 'Background Jobs',
    description: 'Run commands in background',
    language: 'bash' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Background Jobs

## Overview
Run commands in background

## Learning Objectives
- Master background jobs
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Intermediate techniques
- Best practices
- Common patterns

## Example Code
\`\`\`bash
// Background Jobs example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of background jobs.

## Tips
- Focus on best practices
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Background Jobs
// Write your Bash code here

`,
    solution: `// Solution for Background Jobs
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-19',
    title: 'Signals and Traps',
    description: 'Handle signals in scripts',
    language: 'bash' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# Signals and Traps

## Overview
Handle signals in scripts

## Learning Objectives
- Master signals and traps
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Intermediate techniques
- Best practices
- Common patterns

## Example Code
\`\`\`bash
// Signals and Traps example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of signals and traps.

## Tips
- Focus on best practices
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Signals and Traps
// Write your Bash code here

`,
    solution: `// Solution for Signals and Traps
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-20',
    title: 'Error Handling',
    description: 'Robust error handling',
    language: 'bash' as const,
    difficulty: 'Intermediate',
    estimatedTime: 50,
    content: `# Error Handling

## Overview
Robust error handling

## Learning Objectives
- Master error handling
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Intermediate techniques
- Best practices
- Common patterns

## Example Code
\`\`\`bash
// Error Handling example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of error handling.

## Tips
- Focus on best practices
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Error Handling
// Write your Bash code here

`,
    solution: `// Solution for Error Handling
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-21',
    title: 'Debugging Scripts',
    description: 'Debug bash scripts effectively',
    language: 'bash' as const,
    difficulty: 'Intermediate',
    estimatedTime: 20,
    content: `# Debugging Scripts

## Overview
Debug bash scripts effectively

## Learning Objectives
- Master debugging scripts
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Intermediate techniques
- Best practices
- Common patterns

## Example Code
\`\`\`bash
// Debugging Scripts example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of debugging scripts.

## Tips
- Focus on best practices
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Debugging Scripts
// Write your Bash code here

`,
    solution: `// Solution for Debugging Scripts
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-22',
    title: 'Case Statements',
    description: 'Multi-way branch statements',
    language: 'bash' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Case Statements

## Overview
Multi-way branch statements

## Learning Objectives
- Master case statements
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Intermediate techniques
- Best practices
- Common patterns

## Example Code
\`\`\`bash
// Case Statements example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of case statements.

## Tips
- Focus on best practices
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Case Statements
// Write your Bash code here

`,
    solution: `// Solution for Case Statements
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-23',
    title: 'File Testing',
    description: 'Test file properties',
    language: 'bash' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# File Testing

## Overview
Test file properties

## Learning Objectives
- Master file testing
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Intermediate techniques
- Best practices
- Common patterns

## Example Code
\`\`\`bash
// File Testing example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of file testing.

## Tips
- Focus on best practices
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// File Testing
// Write your Bash code here

`,
    solution: `// Solution for File Testing
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-24',
    title: 'Arithmetic Operations',
    description: 'Perform calculations in bash',
    language: 'bash' as const,
    difficulty: 'Intermediate',
    estimatedTime: 50,
    content: `# Arithmetic Operations

## Overview
Perform calculations in bash

## Learning Objectives
- Master arithmetic operations
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Intermediate techniques
- Best practices
- Common patterns

## Example Code
\`\`\`bash
// Arithmetic Operations example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of arithmetic operations.

## Tips
- Focus on best practices
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Arithmetic Operations
// Write your Bash code here

`,
    solution: `// Solution for Arithmetic Operations
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-25',
    title: 'Date and Time',
    description: 'Work with dates and times',
    language: 'bash' as const,
    difficulty: 'Intermediate',
    estimatedTime: 20,
    content: `# Date and Time

## Overview
Work with dates and times

## Learning Objectives
- Master date and time
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Intermediate techniques
- Best practices
- Common patterns

## Example Code
\`\`\`bash
// Date and Time example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of date and time.

## Tips
- Focus on best practices
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Date and Time
// Write your Bash code here

`,
    solution: `// Solution for Date and Time
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-26',
    title: 'Networking Commands',
    description: 'Network-related operations',
    language: 'bash' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Networking Commands

## Overview
Network-related operations

## Learning Objectives
- Master networking commands
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Intermediate techniques
- Best practices
- Common patterns

## Example Code
\`\`\`bash
// Networking Commands example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of networking commands.

## Tips
- Focus on best practices
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Networking Commands
// Write your Bash code here

`,
    solution: `// Solution for Networking Commands
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-27',
    title: 'curl and wget',
    description: 'Download files and make HTTP requests',
    language: 'bash' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# curl and wget

## Overview
Download files and make HTTP requests

## Learning Objectives
- Master curl and wget
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Intermediate techniques
- Best practices
- Common patterns

## Example Code
\`\`\`bash
// curl and wget example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of curl and wget.

## Tips
- Focus on best practices
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// curl and wget
// Write your Bash code here

`,
    solution: `// Solution for curl and wget
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-28',
    title: 'SSH and SCP',
    description: 'Remote operations',
    language: 'bash' as const,
    difficulty: 'Intermediate',
    estimatedTime: 50,
    content: `# SSH and SCP

## Overview
Remote operations

## Learning Objectives
- Master ssh and scp
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Intermediate techniques
- Best practices
- Common patterns

## Example Code
\`\`\`bash
// SSH and SCP example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of ssh and scp.

## Tips
- Focus on best practices
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// SSH and SCP
// Write your Bash code here

`,
    solution: `// Solution for SSH and SCP
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-29',
    title: 'Cron Jobs',
    description: 'Schedule automated tasks',
    language: 'bash' as const,
    difficulty: 'Intermediate',
    estimatedTime: 20,
    content: `# Cron Jobs

## Overview
Schedule automated tasks

## Learning Objectives
- Master cron jobs
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Intermediate techniques
- Best practices
- Common patterns

## Example Code
\`\`\`bash
// Cron Jobs example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of cron jobs.

## Tips
- Focus on best practices
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Cron Jobs
// Write your Bash code here

`,
    solution: `// Solution for Cron Jobs
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-30',
    title: 'System Information',
    description: 'Gather system data',
    language: 'bash' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# System Information

## Overview
Gather system data

## Learning Objectives
- Master system information
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Intermediate techniques
- Best practices
- Common patterns

## Example Code
\`\`\`bash
// System Information example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of system information.

## Tips
- Focus on best practices
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// System Information
// Write your Bash code here

`,
    solution: `// Solution for System Information
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-31',
    title: 'Disk Usage Management',
    description: 'Monitor and manage disk space',
    language: 'bash' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# Disk Usage Management

## Overview
Monitor and manage disk space

## Learning Objectives
- Master disk usage management
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Intermediate techniques
- Best practices
- Common patterns

## Example Code
\`\`\`bash
// Disk Usage Management example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of disk usage management.

## Tips
- Focus on best practices
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Disk Usage Management
// Write your Bash code here

`,
    solution: `// Solution for Disk Usage Management
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-32',
    title: 'Archive and Compression',
    description: 'tar, gzip, zip operations',
    language: 'bash' as const,
    difficulty: 'Intermediate',
    estimatedTime: 50,
    content: `# Archive and Compression

## Overview
tar, gzip, zip operations

## Learning Objectives
- Master archive and compression
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Intermediate techniques
- Best practices
- Common patterns

## Example Code
\`\`\`bash
// Archive and Compression example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of archive and compression.

## Tips
- Focus on best practices
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Archive and Compression
// Write your Bash code here

`,
    solution: `// Solution for Archive and Compression
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-33',
    title: 'User Management',
    description: 'Manage users and groups',
    language: 'bash' as const,
    difficulty: 'Intermediate',
    estimatedTime: 20,
    content: `# User Management

## Overview
Manage users and groups

## Learning Objectives
- Master user management
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Intermediate techniques
- Best practices
- Common patterns

## Example Code
\`\`\`bash
// User Management example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of user management.

## Tips
- Focus on best practices
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// User Management
// Write your Bash code here

`,
    solution: `// Solution for User Management
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-34',
    title: 'Permissions and Ownership',
    description: 'File permissions management',
    language: 'bash' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Permissions and Ownership

## Overview
File permissions management

## Learning Objectives
- Master permissions and ownership
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Intermediate techniques
- Best practices
- Common patterns

## Example Code
\`\`\`bash
// Permissions and Ownership example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of permissions and ownership.

## Tips
- Focus on best practices
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Permissions and Ownership
// Write your Bash code here

`,
    solution: `// Solution for Permissions and Ownership
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-35',
    title: 'Shell Options',
    description: 'Configure shell behavior',
    language: 'bash' as const,
    difficulty: 'Advanced',
    estimatedTime: 40,
    content: `# Shell Options

## Overview
Configure shell behavior

## Learning Objectives
- Master shell options
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Advanced concepts
- Complex scenarios
- Optimization techniques

## Example Code
\`\`\`bash
// Shell Options example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of shell options.

## Tips
- Consider edge cases
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Shell Options
// Write your Bash code here

`,
    solution: `// Solution for Shell Options
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-36',
    title: 'Aliases and Functions',
    description: 'Create command shortcuts',
    language: 'bash' as const,
    difficulty: 'Advanced',
    estimatedTime: 50,
    content: `# Aliases and Functions

## Overview
Create command shortcuts

## Learning Objectives
- Master aliases and functions
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Advanced concepts
- Complex scenarios
- Optimization techniques

## Example Code
\`\`\`bash
// Aliases and Functions example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of aliases and functions.

## Tips
- Consider edge cases
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Aliases and Functions
// Write your Bash code here

`,
    solution: `// Solution for Aliases and Functions
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-37',
    title: 'Script Portability',
    description: 'Write portable shell scripts',
    language: 'bash' as const,
    difficulty: 'Advanced',
    estimatedTime: 20,
    content: `# Script Portability

## Overview
Write portable shell scripts

## Learning Objectives
- Master script portability
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Advanced concepts
- Complex scenarios
- Optimization techniques

## Example Code
\`\`\`bash
// Script Portability example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of script portability.

## Tips
- Consider edge cases
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Script Portability
// Write your Bash code here

`,
    solution: `// Solution for Script Portability
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-38',
    title: 'Command Substitution',
    description: 'Use command output in scripts',
    language: 'bash' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Command Substitution

## Overview
Use command output in scripts

## Learning Objectives
- Master command substitution
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Advanced concepts
- Complex scenarios
- Optimization techniques

## Example Code
\`\`\`bash
// Command Substitution example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of command substitution.

## Tips
- Consider edge cases
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Command Substitution
// Write your Bash code here

`,
    solution: `// Solution for Command Substitution
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-39',
    title: 'Here Documents',
    description: 'Multi-line string input',
    language: 'bash' as const,
    difficulty: 'Advanced',
    estimatedTime: 40,
    content: `# Here Documents

## Overview
Multi-line string input

## Learning Objectives
- Master here documents
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Advanced concepts
- Complex scenarios
- Optimization techniques

## Example Code
\`\`\`bash
// Here Documents example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of here documents.

## Tips
- Consider edge cases
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Here Documents
// Write your Bash code here

`,
    solution: `// Solution for Here Documents
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-40',
    title: 'Parameter Expansion',
    description: 'Advanced variable manipulation',
    language: 'bash' as const,
    difficulty: 'Advanced',
    estimatedTime: 50,
    content: `# Parameter Expansion

## Overview
Advanced variable manipulation

## Learning Objectives
- Master parameter expansion
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Advanced concepts
- Complex scenarios
- Optimization techniques

## Example Code
\`\`\`bash
// Parameter Expansion example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of parameter expansion.

## Tips
- Consider edge cases
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Parameter Expansion
// Write your Bash code here

`,
    solution: `// Solution for Parameter Expansion
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-41',
    title: 'Color Output',
    description: 'Add colors to terminal output',
    language: 'bash' as const,
    difficulty: 'Advanced',
    estimatedTime: 20,
    content: `# Color Output

## Overview
Add colors to terminal output

## Learning Objectives
- Master color output
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Advanced concepts
- Complex scenarios
- Optimization techniques

## Example Code
\`\`\`bash
// Color Output example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of color output.

## Tips
- Consider edge cases
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Color Output
// Write your Bash code here

`,
    solution: `// Solution for Color Output
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-42',
    title: 'Progress Bars',
    description: 'Create interactive progress indicators',
    language: 'bash' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Progress Bars

## Overview
Create interactive progress indicators

## Learning Objectives
- Master progress bars
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Advanced concepts
- Complex scenarios
- Optimization techniques

## Example Code
\`\`\`bash
// Progress Bars example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of progress bars.

## Tips
- Consider edge cases
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Progress Bars
// Write your Bash code here

`,
    solution: `// Solution for Progress Bars
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-43',
    title: 'Config File Parsing',
    description: 'Read configuration files',
    language: 'bash' as const,
    difficulty: 'Advanced',
    estimatedTime: 40,
    content: `# Config File Parsing

## Overview
Read configuration files

## Learning Objectives
- Master config file parsing
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Advanced concepts
- Complex scenarios
- Optimization techniques

## Example Code
\`\`\`bash
// Config File Parsing example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of config file parsing.

## Tips
- Consider edge cases
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Config File Parsing
// Write your Bash code here

`,
    solution: `// Solution for Config File Parsing
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-44',
    title: 'Log File Analysis',
    description: 'Analyze log files',
    language: 'bash' as const,
    difficulty: 'Advanced',
    estimatedTime: 50,
    content: `# Log File Analysis

## Overview
Analyze log files

## Learning Objectives
- Master log file analysis
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Advanced concepts
- Complex scenarios
- Optimization techniques

## Example Code
\`\`\`bash
// Log File Analysis example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of log file analysis.

## Tips
- Consider edge cases
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Log File Analysis
// Write your Bash code here

`,
    solution: `// Solution for Log File Analysis
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-45',
    title: 'Backup Scripts',
    description: 'Automated backup solutions',
    language: 'bash' as const,
    difficulty: 'Advanced',
    estimatedTime: 20,
    content: `# Backup Scripts

## Overview
Automated backup solutions

## Learning Objectives
- Master backup scripts
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Advanced concepts
- Complex scenarios
- Optimization techniques

## Example Code
\`\`\`bash
// Backup Scripts example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of backup scripts.

## Tips
- Consider edge cases
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Backup Scripts
// Write your Bash code here

`,
    solution: `// Solution for Backup Scripts
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-46',
    title: 'Deployment Scripts',
    description: 'Automate deployments',
    language: 'bash' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Deployment Scripts

## Overview
Automate deployments

## Learning Objectives
- Master deployment scripts
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Advanced concepts
- Complex scenarios
- Optimization techniques

## Example Code
\`\`\`bash
// Deployment Scripts example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of deployment scripts.

## Tips
- Consider edge cases
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Deployment Scripts
// Write your Bash code here

`,
    solution: `// Solution for Deployment Scripts
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-47',
    title: 'Monitoring Scripts',
    description: 'System monitoring automation',
    language: 'bash' as const,
    difficulty: 'Advanced',
    estimatedTime: 40,
    content: `# Monitoring Scripts

## Overview
System monitoring automation

## Learning Objectives
- Master monitoring scripts
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Advanced concepts
- Complex scenarios
- Optimization techniques

## Example Code
\`\`\`bash
// Monitoring Scripts example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of monitoring scripts.

## Tips
- Consider edge cases
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Monitoring Scripts
// Write your Bash code here

`,
    solution: `// Solution for Monitoring Scripts
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-48',
    title: 'Database Operations',
    description: 'Interact with databases',
    language: 'bash' as const,
    difficulty: 'Advanced',
    estimatedTime: 50,
    content: `# Database Operations

## Overview
Interact with databases

## Learning Objectives
- Master database operations
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Advanced concepts
- Complex scenarios
- Optimization techniques

## Example Code
\`\`\`bash
// Database Operations example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of database operations.

## Tips
- Consider edge cases
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Database Operations
// Write your Bash code here

`,
    solution: `// Solution for Database Operations
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-49',
    title: 'Web Scraping',
    description: 'Extract data from websites',
    language: 'bash' as const,
    difficulty: 'Advanced',
    estimatedTime: 20,
    content: `# Web Scraping

## Overview
Extract data from websites

## Learning Objectives
- Master web scraping
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Advanced concepts
- Complex scenarios
- Optimization techniques

## Example Code
\`\`\`bash
// Web Scraping example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of web scraping.

## Tips
- Consider edge cases
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Web Scraping
// Write your Bash code here

`,
    solution: `// Solution for Web Scraping
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  },
  {
    id: 'bash-50',
    title: 'Complete Automation Project',
    description: 'Build a full automation system',
    language: 'bash' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Complete Automation Project

## Overview
Build a full automation system

## Learning Objectives
- Master complete automation project
- Apply concepts in real projects
- Build practical skills in Bash

## Key Concepts
- Advanced concepts
- Complex scenarios
- Optimization techniques

## Example Code
\`\`\`bash
// Complete Automation Project example
// Your code here
\`\`\`

## Practice Exercise
Complete the challenge below to demonstrate your understanding of complete automation project.

## Tips
- Consider edge cases
- Test your code thoroughly
- Review documentation as needed
`,
    initialCode: `// Complete Automation Project
// Write your Bash code here

`,
    solution: `// Solution for Complete Automation Project
// Implement the complete solution here

`,
    hints: [
      'Review the key concepts above',
      'Start with a simple implementation',
      'Test incrementally',
      'Refer to documentation if needed'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code has minimum length', 
        test: (code: string) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      },
      { 
        name: 'No syntax errors detected', 
        test: (code: string) => !code.includes('undefined') || code.includes('//'), 
        errorMessage: 'Check your code for potential issues' 
      }
    ]
  }
]
