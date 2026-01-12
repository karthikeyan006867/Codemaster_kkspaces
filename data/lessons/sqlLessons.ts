import { Lesson } from '../courses'

const detailedSQLLessons: Lesson[] = [
  {
    id: 'sql-1',
    title: 'Introduction to SQL',
    description: 'Learn SQL basics and SELECT statement',
    language: 'sql' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Welcome to SQL!

SQL (Structured Query Language) is the standard language for managing relational databases.

## Your First Query

\`\`\`sql
SELECT * FROM users;
\`\`\`

## Key Concepts
- **SELECT**: Retrieve data from tables
- **FROM**: Specify which table
- **WHERE**: Filter results
- **ORDER BY**: Sort results

## Your Task
Write a query to select all columns from a table called products`,
    initialCode: `-- Write your SQL query here`,
    solution: `SELECT * FROM products;`,
    hints: ['Use SELECT * to get all columns', 'FROM specifies the table', 'End with semicolon'],
    testCases: [
      { name: 'Has SELECT', test: (code) => code.toUpperCase().includes('SELECT'), errorMessage: 'Use SELECT' },
      { name: 'Has FROM', test: (code) => code.toUpperCase().includes('FROM'), errorMessage: 'Use FROM clause' },
      { name: 'References products', test: (code) => code.toLowerCase().includes('products'), errorMessage: 'Query products table' }
    ]
  },
  {
    id: 'sql-2',
    title: 'WHERE Clause',
    description: 'Filter data with conditions',
    language: 'sql' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# WHERE Clause

Filter rows based on conditions.

\`\`\`sql
SELECT * FROM users WHERE age > 18;
SELECT * FROM products WHERE price < 50;
SELECT * FROM orders WHERE status = 'shipped';
\`\`\`

## Operators
- \`=\`: Equal
- \`>\`, \`<\`: Greater/less than
- \`>=\`, \`<=\`: Greater/less or equal
- \`!=\` or \`<>\`: Not equal
- \`AND\`, \`OR\`: Combine conditions

## Your Task
Select all products where price is less than 100`,
    initialCode: `-- Filter products by price`,
    solution: `SELECT * FROM products WHERE price < 100;`,
    hints: ['Use WHERE for filtering', 'Use < for less than', 'Compare price column'],
    testCases: [
      { name: 'Has WHERE', test: (code) => code.toUpperCase().includes('WHERE'), errorMessage: 'Use WHERE clause' },
      { name: 'Filters price', test: (code) => code.toLowerCase().includes('price'), errorMessage: 'Filter by price' },
      { name: 'Uses comparison', test: (code) => code.includes('<') || code.includes('>'), errorMessage: 'Use comparison operator' }
    ]
  },
  {
    id: 'sql-3',
    title: 'INSERT Statement',
    description: 'Add new data to tables',
    language: 'sql' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# INSERT Data

Add new rows to tables.

\`\`\`sql
INSERT INTO users (name, email, age) 
VALUES ('Alice', 'alice@email.com', 25);

INSERT INTO products (name, price) 
VALUES ('Laptop', 999.99);
\`\`\`

## Syntax
1. \`INSERT INTO table_name (columns)\`
2. \`VALUES (values)\`

## Your Task
Insert a new user with name 'Bob' and email 'bob@email.com'`,
    initialCode: `-- Insert a new user`,
    solution: `INSERT INTO users (name, email) VALUES ('Bob', 'bob@email.com');`,
    hints: ['Use INSERT INTO', 'List columns in ()', 'VALUES contains data'],
    testCases: [
      { name: 'Has INSERT', test: (code) => code.toUpperCase().includes('INSERT'), errorMessage: 'Use INSERT' },
      { name: 'Has VALUES', test: (code) => code.toUpperCase().includes('VALUES'), errorMessage: 'Use VALUES' },
      { name: 'Inserts user', test: (code) => code.toLowerCase().includes('users'), errorMessage: 'Insert into users table' }
    ]
  }
];

// Generate remaining lessons
for (let i = 4; i <= 50; i++) {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i <= 17 ? 'Beginner' : i <= 34 ? 'Intermediate' : 'Advanced';
  const topics = ['UPDATE', 'DELETE', 'JOIN', 'GROUP BY', 'HAVING', 'Subqueries', 'Indexes', 'Views', 'Transactions', 'Functions'];
  const topic = topics[(i - 4) % topics.length];
  
  detailedSQLLessons.push({
    id: `sql-${i}`,
    title: `${topic} in SQL`,
    description: `Learn ${topic} for data manipulation`,
    language: 'sql' as const,
    difficulty,
    estimatedTime: 30 + (i % 15),
    content: `# ${topic} in SQL

Master ${topic} - essential for database operations.

\`\`\`sql
-- ${topic} example
SELECT * FROM table_name;
\`\`\`

Practice ${topic} concepts.`,
    initialCode: `-- Write ${topic} query`,
    solution: `-- ${topic} solution\nSELECT * FROM table_name;`,
    hints: [`Focus on ${topic}`, 'Test your queries', 'Use proper syntax'],
    testCases: [
      { name: 'Has SQL keywords', test: (code) => code.toUpperCase().includes('SELECT') || code.toUpperCase().includes('INSERT'), errorMessage: 'Write SQL' },
      { name: 'Not empty', test: (code) => code.trim().length > 10, errorMessage: 'Write a query' }
    ]
  });
}

export const sqlLessons = detailedSQLLessons
