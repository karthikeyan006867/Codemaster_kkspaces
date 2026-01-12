import { Lesson } from '../courses'

const detailedMongoDBLessons: Lesson[] = [
  {
    id: 'mongodb-1',
    title: 'MongoDB Introduction',
    description: 'Learn MongoDB basics and insert documents',
    language: 'javascript' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# MongoDB

MongoDB is a NoSQL document database.

## Documents
Data stored as JSON-like documents:
\`\`\`javascript
{
  name: "Alice",
  age: 25,
  email: "alice@email.com"
}
\`\`\`

## Insert Document
\`\`\`javascript
db.users.insertOne({
  name: "Alice",
  age: 25
})
\`\`\`

## Your Task
Insert a product document`,
    initialCode: `// Insert product document
db.products.insertOne({`,
    solution: `db.products.insertOne({ name: "Laptop", price: 999 })`,
    hints: ['Use insertOne()', 'Pass object with fields', 'db.collection.method()'],
    testCases: [
      { name: 'Uses insertOne', test: (code) => code.includes('insertOne'), errorMessage: 'Use insertOne()' },
      { name: 'Has object', test: (code) => code.includes('{') && code.includes('}'), errorMessage: 'Pass an object' }
    ]
  },
  {
    id: 'mongodb-2',
    title: 'Querying Documents',
    description: 'Find and filter documents',
    language: 'javascript' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Querying

Find documents with queries.

## Find All
\`\`\`javascript
db.users.find()
\`\`\`

## Find with Filter
\`\`\`javascript
db.users.find({ age: { $gt: 18 } })
db.products.find({ price: { $lt: 100 } })
\`\`\`

## Operators
- \`$gt\`: Greater than
- \`$lt\`: Less than
- \`$eq\`: Equal

## Your Task
Find products with price less than 50`,
    initialCode: `// Find cheap products`,
    solution: `db.products.find({ price: { $lt: 50 } })`,
    hints: ['Use find()', 'Pass filter object', '$lt for less than'],
    testCases: [
      { name: 'Uses find', test: (code) => code.includes('find'), errorMessage: 'Use find()' },
      { name: 'Has filter', test: (code) => code.includes('price'), errorMessage: 'Filter by price' }
    ]
  },
  {
    id: 'mongodb-3',
    title: 'Update Documents',
    description: 'Modify existing documents',
    language: 'javascript' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Update

Modify documents.

## Update One
\`\`\`javascript
db.users.updateOne(
  { name: "Alice" },
  { $set: { age: 26 } }
)
\`\`\`

## Update Operators
- \`$set\`: Set field value
- \`$inc\`: Increment number
- \`$push\`: Add to array

## Your Task
Update a product price`,
    initialCode: `// Update product price
db.products.updateOne(`,
    solution: `db.products.updateOne({ name: "Laptop" }, { $set: { price: 899 } })`,
    hints: ['Use updateOne()', 'First arg is filter', 'Second is $set update'],
    testCases: [
      { name: 'Uses updateOne', test: (code) => code.includes('updateOne'), errorMessage: 'Use updateOne()' },
      { name: 'Uses $set', test: (code) => code.includes('$set'), errorMessage: 'Use $set operator' }
    ]
  }
];

for (let i = 4; i <= 50; i++) {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i <= 17 ? 'Beginner' : i <= 34 ? 'Intermediate' : 'Advanced';
  const topics = ['Delete', 'Indexes', 'Aggregation', 'Projection', 'Sorting', 'Limit/Skip', 'Embedded Docs', 'References', 'Transactions', 'Sharding'];
  const topic = topics[(i - 4) % topics.length];
  
  detailedMongoDBLessons.push({
    id: `mongodb-${i}`,
    title: `${topic} in MongoDB`,
    description: `Learn ${topic} for NoSQL databases`,
    language: 'javascript' as const,
    difficulty,
    estimatedTime: 30 + (i % 15),
    content: `# ${topic}\n\nMaster ${topic} in MongoDB.\n\n\`\`\`javascript\ndb.collection.find()\n\`\`\``,
    initialCode: `// ${topic} query`,
    solution: `db.collection.find()`,
    hints: [`Learn ${topic}`, 'Document-based', 'Flexible schema'],
    testCases: [
      { name: 'Not empty', test: (code) => code.trim().length > 5, errorMessage: 'Write query' }
    ]
  });
}

export const mongodbLessons = detailedMongoDBLessons
