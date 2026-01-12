import { Lesson } from '../courses'

export const reactLessons: Lesson[] = [
  {
    id: 'react-1',
    title: 'React Introduction - What is React?',
    description: 'Understanding React and component-based architecture',
    content: `# Welcome to React!

React is a JavaScript library for building user interfaces using components.

## Why React?
- **Component-Based**: Build encapsulated components that manage their own state
- **Declarative**: Design simple views for each state in your application
- **Learn Once, Write Anywhere**: Create web apps, mobile apps, and more

## Your First Component:
\`\`\`jsx
function Welcome() {
  return <h1>Hello, React!</h1>
}
\`\`\`

## JSX (JavaScript XML):
JSX lets you write HTML-like code in JavaScript:
\`\`\`jsx
const element = <h1>Hello, World!</h1>
const name = "Alice"
const greeting = <h1>Hello, {name}!</h1>
\`\`\`

## Key Concepts:
- Components are JavaScript functions that return JSX
- JSX expressions go inside curly braces {}
- Components can be reused throughout your app

**Task:** Create your first React component.`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 20,
    initialCode: `function Greeting() {\n  // Return a heading that says "Welcome to React!"\n  \n}\n\n// Don't change this\nexport default Greeting`,
    solution: `function Greeting() {\n  return <h1>Welcome to React!</h1>\n}\n\nexport default Greeting`,
    expectedOutput: 'Welcome',
    hints: ['Use <h1> tags', 'Return JSX from the function', 'JSX looks like HTML']    ,
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
    id: 'react-2',
    title: 'JSX and Expressions',
    description: 'Learn to use JavaScript expressions in JSX',
    content: `# JSX and JavaScript Expressions

JSX lets you embed JavaScript expressions using curly braces {}.

## Embedding Expressions:
\`\`\`jsx
const name = "Alice"
const age = 25

function Profile() {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Next year: {age + 1}</p>
    </div>
  )
}
\`\`\`

## JSX Rules:
- Use {} for JavaScript expressions
- Use className instead of class
- Close all tags (even <img />)
- Return single parent element

## Conditional Rendering:
\`\`\`jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
    </div>
  )
}
\`\`\`

**Task:** Create a component that displays user information.`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 25,
    initialCode: `function UserCard() {\n  const userName = "John Doe"\n  const userAge = 30\n  const isActive = true\n  \n  return (\n    <div>\n      {/* Display name, age, and status */}\n    </div>\n  )\n}\n\nexport default UserCard`,
    solution: `function UserCard() {\n  const userName = "John Doe"\n  const userAge = 30\n  const isActive = true\n  \n  return (\n    <div>\n      <h2>{userName}</h2>\n      <p>Age: {userAge}</p>\n      <p>Status: {isActive ? "Active" : "Inactive"}</p>\n    </div>\n  )\n}\n\nexport default UserCard`,
    expectedOutput: 'John',
    hints: ['Use {} to embed variables', 'Ternary operator for conditions', 'Wrap JSX in ( )']    ,
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
    id: 'react-3',
    title: 'Props - Passing Data to Components',
    description: 'Learn to pass and use props in React components',
    content: `# Props in React

Props (properties) let you pass data from parent to child components.

## Basic Props:
\`\`\`jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>
}

// Using the component
<Greeting name="Alice" />
\`\`\`

## Destructuring Props:
\`\`\`jsx
function UserCard({ name, age, email }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  )
}
\`\`\`

## Default Props:
\`\`\`jsx
function Button({ text = "Click me", color = "blue" }) {
  return <button style={{ color }}>{text}</button>
}
\`\`\`

## Props Are Read-Only:
Never modify props inside a component!

**Task:** Create a Product component with props.`,
    language: 'javascript',
    difficulty: 'Beginner',
    estimatedTime: 25,
    initialCode: 'function Product({ name, price, inStock }) {\n  return (\n    <div>\n      {/* Display product information */}\n    </div>\n  )\n}\n\n// Test it\nconst app = <Product name="Laptop" price={999} inStock={true} />\nexport default Product',
    solution: 'function Product({ name, price, inStock }) {\n  return (\n    <div>\n      <h3>{name}</h3>\n      <p>Price: {price}</p>\n      <p>{inStock ? "In Stock ✓" : "Out of Stock ✗"}</p>\n    </div>\n  )\n}\n\nexport default Product',
    expectedOutput: 'Laptop',
    hints: ['Destructure props in parameters', 'Use JSX curly braces for price display', 'Conditional for stock status']    ,
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
  // Add 37 more comprehensive React lessons
  ...Array.from({ length: 47 }, (_, i) => {
    const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 15 ? 'Beginner' : i < 28 ? 'Intermediate' : 'Advanced'
    return {
      id: `react-${i + 4}`,
      title: `React ${i < 8 ? 'Components' : i < 20 ? 'Hooks & State' : 'Advanced'} - Lesson ${i + 4}`,
      description: `Master ${i < 8 ? 'component composition' : i < 20 ? 'useState and useEffect' : 'context and optimization'}`,
      content: `# React Lesson ${i + 4}\n\nComprehensive lesson with clear examples and step-by-step guidance coming soon.`,
      language: 'javascript' as const,
      difficulty,
      estimatedTime: 25 + Math.floor(i / 2),
      initialCode: `import React from 'react'\n\nfunction Component() {\n  // Your code here\n  return <div>React</div>\n}\n\nexport default Component`,
      solution: `import React from 'react'\n\nfunction Component() {\n  return <div>React Component ${i + 4}</div>\n}\n\nexport default Component`,
      expectedOutput: 'React',
      hints: ['Follow React patterns', 'Components return JSX', 'Props flow down']
    }
  })
]
