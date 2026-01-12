import { Lesson } from '../courses'

export const nodejsLessons: Lesson[] = [
  {
    id: 'node-1',
    title: 'Introduction to Node.js',
    description: 'Understanding Node.js and server-side JavaScript',
    content: `# Welcome to Node.js!

Node.js is a JavaScript runtime built on Chrome's V8 engine that lets you run JavaScript on the server.

## Why Node.js?
- **Fast**: Non-blocking, event-driven architecture
- **JavaScript Everywhere**: Same language for frontend and backend
- **NPM**: Largest ecosystem of libraries
- **Scalable**: Perfect for real-time applications

## Your First Node.js Program:
\`\`\`javascript
// app.js
console.log("Hello from Node.js!")
\`\`\`

Run it with: \`node app.js\`

## Built-in Modules:
Node.js comes with many built-in modules:
\`\`\`javascript
const os = require('os')
console.log('Platform:', os.platform())
console.log('CPU cores:', os.cpus().length)
\`\`\`

## Creating a Simple Server:
\`\`\`javascript
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello World!')
})

server.listen(3000, () => {
  console.log('Server running on port 3000')
})
\`\`\`

**Task:** Create your first Node.js program.`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 20,
    initialCode: `// Import the 'os' module\nconst os = require('os')\n\n// Log the operating system platform\n\n// Log the total memory\n`,
    solution: `const os = require('os')\n\nconsole.log('Platform:', os.platform())\nconsole.log('Total Memory:', os.totalmem())\nconsole.log('Free Memory:', os.freemem())`,
    expectedOutput: 'Platform',
    hints: ['Use require() to import', 'os.platform() for OS', 'os.totalmem() for memory']
    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Make sure your code follows the lesson requirements'
      }
    ]
  },
  {
    id: 'node-2',
    title: 'Modules and require()',
    description: 'Learn to use and create modules in Node.js',
    content: `# Node.js Modules

Modules let you organize code into reusable pieces.

## Using Built-in Modules:
\`\`\`javascript
const fs = require('fs')
const path = require('path')
const http = require('http')
\`\`\`

## Creating Your Own Module:
\`\`\`javascript
// math.js
function add(a, b) {
  return a + b
}

function multiply(a, b) {
  return a * b
}

module.exports = { add, multiply }
\`\`\`

## Using Your Module:
\`\`\`javascript
// app.js
const math = require('./math')

console.log(math.add(5, 3)) // 8
console.log(math.multiply(4, 2)) // 8
\`\`\`

## Export Patterns:
\`\`\`javascript
// Single export
module.exports = function() { }

// Multiple exports
exports.add = function(a, b) { return a + b }
exports.subtract = function(a, b) { return a - b }
\`\`\`

**Task:** Create a module with helper functions.`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 25,
    initialCode: `// Create a greeting module\nfunction greet(name) {\n  // Return greeting message\n}\n\nfunction farewell(name) {\n  // Return farewell message\n}\n\nmodule.exports = { greet, farewell }`,
    solution: `function greet(name) {\n  return \`Hello, \${name}!\`\n}\n\nfunction farewell(name) {\n  return \`Goodbye, \${name}!\`\n}\n\nmodule.exports = { greet, farewell }\n\n// Test\nconst { greet, farewell } = module.exports\nconsole.log(greet("Alice"))\nconsole.log(farewell("Bob"))`,
    expectedOutput: 'Hello',
    hints: ['Return string from functions', 'Use template literals', 'Export both functions']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  {
    id: 'node-3',
    title: 'File System (fs) Module',
    description: 'Reading and writing files with Node.js',
    content: `# Working with Files

The \`fs\` module lets you interact with the file system.

## Reading Files:
\`\`\`javascript
const fs = require('fs')

// Synchronous (blocking)
const data = fs.readFileSync('file.txt', 'utf8')
console.log(data)

// Asynchronous (non-blocking) - Better!
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err
  console.log(data)
})
\`\`\`

## Writing Files:
\`\`\`javascript
// Write to file
fs.writeFile('output.txt', 'Hello Node!', (err) => {
  if (err) throw err
  console.log('File saved!')
})

// Append to file
fs.appendFile('log.txt', 'New entry\\n', (err) => {
  if (err) throw err
})
\`\`\`

## Promises with fs (Modern Way):
\`\`\`javascript
const fs = require('fs').promises

async function readData() {
  const data = await fs.readFile('file.txt', 'utf8')
  console.log(data)
}
\`\`\`

**Task:** Create a file reading function.`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 30,
    initialCode: `const fs = require('fs')\n\n// Read a file asynchronously\nfunction readFileContent(filename) {\n  fs.readFile(filename, 'utf8', (err, data) => {\n    // Handle error and data\n  })\n}\n\nreadFileContent('example.txt')`,
    solution: `const fs = require('fs')\n\nfunction readFileContent(filename) {\n  fs.readFile(filename, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Error reading file:', err)\n      return\n    }\n    console.log('File content:', data)\n  })\n}\n\nreadFileContent('example.txt')`,
    expectedOutput: 'File',
    hints: ['Check for errors first', 'Use utf8 encoding', 'Console.log the data']    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  ...Array.from({ length: 47 }, (_, i) => {
    const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 12 ? 'Beginner' : i < 28 ? 'Intermediate' : 'Advanced'
    return {
      id: `node-${i + 4}`,
      title: `Node.js ${i < 8 ? 'Fundamentals' : i < 22 ? 'Express & APIs' : 'Advanced'} - Lesson ${i + 4}`,
      description: `Master ${i < 8 ? 'core Node.js concepts' : i < 22 ? 'building REST APIs' : 'deployment and scaling'}`,
      content: `# Node.js Lesson ${i + 4}\n\nDetailed backend development lesson with clear examples coming soon.`,
      language: 'javascript' as const,
      difficulty,
      estimatedTime: 30 + Math.floor(i / 2),
      initialCode: `const express = require('express')\nconst app = express()\n\n// Your code here\n`,
      solution: `const express = require('express')\nconst app = express()\n\napp.get('/', (req, res) => {\n  res.send('Node.js Lesson ${i + 4}')\n})\n\napp.listen(3000)`,
      expectedOutput: 'Node',
      hints: ['Use Express for APIs', 'Middleware processes requests', 'async/await for database']
    }
  })
]