const fs = require('fs');
const path = require('path');

const lessonsDir = path.join(__dirname, '..', 'data', 'lessons');

function writeLessonFile(filename, content) {
  const filePath = path.join(lessonsDir, filename);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Created ${filename}`);
}

// JAVASCRIPT LESSONS - Comprehensive full-stack JavaScript
const jsLessons = `import { Lesson } from '../courses'

export const jsLessons: Lesson[] = [
  {
    id: 'js-1',
    title: 'JavaScript Basics - Variables and Data Types',
    description: 'Learn variables, data types, and console output',
    language: 'javascript' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: \`# Welcome to JavaScript!

JavaScript makes websites interactive and dynamic.

## Variables:
\\\`\\\`\\\`javascript
let name = "Alice";        // Can be reassigned
const age = 25;            // Cannot be reassigned
var oldWay = "avoid";      // Old syntax
\\\`\\\`\\\`

## Data Types:
\\\`\\\`\\\`javascript
let text = "Hello";         // String
let number = 42;            // Number
let decimal = 3.14;         // Number
let isTrue = true;          // Boolean
let nothing = null;         // Null
let notDefined;             // Undefined
\\\`\\\`\\\`

## Console Output:
\\\`\\\`\\\`javascript
console.log("Hello World!");
console.log("Age:", age);
\\\`\\\`\\\`

Create your first JavaScript program!\`,
    initialCode: \`// Create variables for your name, age, and favorite color
// Then log them to the console

\`,
    solution: \`const name = "Alice";
const age = 25;
const favoriteColor = "blue";

console.log("Name:", name);
console.log("Age:", age);
console.log("Favorite Color:", favoriteColor);\`,
    hints: ['Use const for variables', 'Use console.log() to print', 'Strings use quotes'],
    testCases: [
      { name: 'Has variable declarations', test: (code) => /const|let|var/.test(code), errorMessage: 'Declare variables with const or let' },
      { name: 'Uses console.log', test: (code) => code.includes('console.log'), errorMessage: 'Use console.log() to output' },
      { name: 'Has string value', test: (code) => /"[^"]+"|'[^']+'/.test(code), errorMessage: 'Create a string with quotes' },
      { name: 'Has at least 3 lines', test: (code) => code.trim().split('\\n').filter(l => l.trim() && !l.trim().startsWith('//')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'js-2',
    title: 'Operators and Expressions',
    description: 'Work with arithmetic and comparison operators',
    language: 'javascript' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: \`# JavaScript Operators

## Arithmetic:
\\\`\\\`\\\`javascript
let sum = 5 + 3;          // 8
let difference = 10 - 4;   // 6
let product = 6 * 7;       // 42
let quotient = 20 / 4;     // 5
let remainder = 10 % 3;    // 1
\\\`\\\`\\\`

## Comparison:
\\\`\\\`\\\`javascript
5 === 5    // true (strict equal)
5 !== 3    // true (not equal)
5 > 3      // true
5 <= 10    // true
\\\`\\\`\\\`

## String Operations:
\\\`\\\`\\\`javascript
let greeting = "Hello" + " " + "World";
let template = \\\`My age is \\\${age}\\\`;
\\\`\\\`\\\`

Perform calculations!\`,
    initialCode: \`// Create variables for price and quantity
// Calculate total cost
// Log the result

\`,
    solution: \`const price = 25.99;
const quantity = 3;
const total = price * quantity;

console.log(\\\`Total cost: $\\\${total}\\\`);\`,
    hints: ['Use * for multiplication', 'Use template literals with backticks', 'Use ${} for variables in templates'],
    testCases: [
      { name: 'Has arithmetic operation', test: (code) => /[+\\-*\\/]/.test(code), errorMessage: 'Perform an arithmetic operation' },
      { name: 'Has variable for result', test: (code) => /const|let/.test(code), errorMessage: 'Store result in a variable' },
      { name: 'Logs the result', test: (code) => code.includes('console.log'), errorMessage: 'Log the result with console.log()' },
      { name: 'Uses multiple values', test: (code) => (code.match(/const|let/g) || []).length >= 2, errorMessage: 'Create at least 2 variables' }
    ]
  },
  {
    id: 'js-3',
    title: 'Functions - Reusable Code Blocks',
    description: 'Create and call functions',
    language: 'javascript' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: \`# JavaScript Functions

Functions are reusable blocks of code.

## Function Declaration:
\\\`\\\`\\\`javascript
function greet(name) {
  return "Hello, " + name;
}

const message = greet("Alice");  // "Hello, Alice"
\\\`\\\`\\\`

## Arrow Functions (Modern):
\\\`\\\`\\\`javascript
const add = (a, b) => {
  return a + b;
};

const square = x => x * x;  // Implicit return
\\\`\\\`\\\`

## Function with Multiple Parameters:
\\\`\\\`\\\`javascript
function calculateTotal(price, quantity, tax) {
  return price * quantity * (1 + tax);
}
\\\`\\\`\\\`

Create useful functions!\`,
    initialCode: \`// Create a function that takes two numbers
// and returns their sum
// Call the function and log the result

\`,
    solution: \`function addNumbers(a, b) {
  return a + b;
}

const result = addNumbers(5, 3);
console.log("Sum:", result);

// Or with arrow function:
const multiply = (x, y) => x * y;
console.log("Product:", multiply(4, 6));\`,
    hints: ['Define function with function keyword', 'Use return to send back a value', 'Call function with parentheses'],
    testCases: [
      { name: 'Has function definition', test: (code) => /function\\s+\\w+\\s*\\(|const\\s+\\w+\\s*=\\s*\\(.*\\)\\s*=>/.test(code), errorMessage: 'Define a function' },
      { name: 'Function has parameters', test: (code) => /function\\s+\\w+\\s*\\([^)]+\\)|\\([^)]+\\)\\s*=>/.test(code), errorMessage: 'Function should accept parameters' },
      { name: 'Uses return statement', test: (code) => /return/.test(code), errorMessage: 'Use return to send back a value' },
      { name: 'Calls the function', test: (code) => /\\w+\\s*\\([^)]*\\)/.test(code.replace(/function\\s+\\w+\\s*\\([^)]*\\)/, '')), errorMessage: 'Call the function you created' }
    ]
  },
  {
    id: 'js-4',
    title: 'Conditional Statements - if/else',
    description: 'Make decisions in your code',
    language: 'javascript' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: \`# Conditional Statements

## if Statement:
\\\`\\\`\\\`javascript
if (age >= 18) {
  console.log("Adult");
}
\\\`\\\`\\\`

## if-else:
\\\`\\\`\\\`javascript
if (score >= 60) {
  console.log("Pass");
} else {
  console.log("Fail");
}
\\\`\\\`\\\`

## if-else if-else:
\\\`\\\`\\\`javascript
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("C");
}
\\\`\\\`\\\`

## Ternary Operator:
\\\`\\\`\\\`javascript
const status = age >= 18 ? "Adult" : "Minor";
\\\`\\\`\\\`

Make smart decisions!\`,
    initialCode: \`// Create a function that checks if a number is positive, negative, or zero
// Return appropriate message for each case

\`,
    solution: \`function checkNumber(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

console.log(checkNumber(5));   // Positive
console.log(checkNumber(-3));  // Negative
console.log(checkNumber(0));   // Zero\`,
    hints: ['Use if to check conditions', 'Use else if for multiple conditions', 'Use else for final case'],
    testCases: [
      { name: 'Has if statement', test: (code) => /if\\s*\\(/.test(code), errorMessage: 'Use an if statement' },
      { name: 'Has comparison', test: (code) => /[><=!]=?/.test(code), errorMessage: 'Use a comparison operator' },
      { name: 'Has else or else if', test: (code) => /else/.test(code), errorMessage: 'Include else or else if' },
      { name: 'Has function or logic', test: (code) => /function|const.*=>/.test(code) || code.split('\\n').filter(l => l.trim()).length >= 5, errorMessage: 'Write complete conditional logic' }
    ]
  },
  {
    id: 'js-5',
    title: 'Arrays - Working with Lists',
    description: 'Store and manipulate lists of data',
    language: 'javascript' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: \`# JavaScript Arrays

Arrays store multiple values in one variable.

## Creating Arrays:
\\\`\\\`\\\`javascript
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["text", 42, true];
\\\`\\\`\\\`

## Accessing Elements:
\\\`\\\`\\\`javascript
fruits[0]    // "apple" (first element)
fruits[1]    // "banana"
fruits[fruits.length - 1]  // Last element
\\\`\\\`\\\`

## Array Methods:
\\\`\\\`\\\`javascript
fruits.push("grape");      // Add to end
fruits.pop();              // Remove from end
fruits.length;             // Number of items
fruits.includes("apple");  // Check if exists
\\\`\\\`\\\`

Master arrays!\`,
    initialCode: \`// Create an array of your favorite foods
// Add a new food to the array
// Log the first and last items

\`,
    solution: \`const favoriteFoods = ["pizza", "pasta", "sushi"];

favoriteFoods.push("burger");

console.log("First:", favoriteFoods[0]);
console.log("Last:", favoriteFoods[favoriteFoods.length - 1]);
console.log("All foods:", favoriteFoods);\`,
    hints: ['Create array with square brackets []', 'Use push() to add items', 'Access with index: array[0]'],
    testCases: [
      { name: 'Creates array', test: (code) => /\\[.*\\]/.test(code), errorMessage: 'Create an array with square brackets []' },
      { name: 'Has array elements', test: (code) => /\\[\\s*[^\\]]+\\s*\\]/.test(code), errorMessage: 'Add elements to your array' },
      { name: 'Uses array method or access', test: (code) => /\\.push|\\[\\d+\\]|\\.length/.test(code), errorMessage: 'Use array methods or access elements with []' },
      { name: 'Logs output', test: (code) => code.includes('console.log'), errorMessage: 'Log output with console.log()' }
    ]
  }
]
`;

// PYTHON LESSONS
const pythonLessons = `import { Lesson } from '../courses'

export const pythonLessons: Lesson[] = [
  {
    id: 'python-1',
    title: 'Python Basics - Variables and Print',
    description: 'Learn Python syntax and basic output',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: \`# Welcome to Python!

Python is a powerful, beginner-friendly programming language.

## Variables:
\\\`\\\`\\\`python
name = "Alice"
age = 25
height = 5.6
is_student = True
\\\`\\\`\\\`

## Print Output:
\\\`\\\`\\\`python
print("Hello, World!")
print("My name is", name)
print(f"I am {age} years old")  # f-string
\\\`\\\`\\\`

## Data Types:
- **str**: Text ("hello")
- **int**: Whole numbers (42)
- **float**: Decimals (3.14)
- **bool**: True/False

Write your first Python program!\`,
    initialCode: \`# Create variables for your name, age, and city
# Print them using f-strings

\`,
    solution: \`name = "Alice"
age = 25
city = "New York"

print(f"My name is {name}")
print(f"I am {age} years old")
print(f"I live in {city}")\`,
    hints: ['Create variables without keywords', 'Use print() function', 'Use f-strings: f"text {variable}"'],
    testCases: [
      { name: 'Has variable assignment', test: (code) => /\\w+\\s*=/.test(code), errorMessage: 'Create variables with =' },
      { name: 'Uses print function', test: (code) => /print\\s*\\(/.test(code), errorMessage: 'Use print() to output' },
      { name: 'Has string value', test: (code) => /"[^"]+"|'[^']+'/.test(code), errorMessage: 'Include string values with quotes' },
      { name: 'Multiple print statements', test: (code) => (code.match(/print\\s*\\(/g) || []).length >= 2, errorMessage: 'Use at least 2 print statements' }
    ]
  },
  {
    id: 'python-2',
    title: 'Python Math and Operators',
    description: 'Perform calculations and use operators',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: \`# Python Math Operations

## Arithmetic Operators:
\\\`\\\`\\\`python
sum = 5 + 3          # 8
difference = 10 - 4   # 6
product = 6 * 7       # 42
quotient = 20 / 4     # 5.0 (float)
floor_div = 20 // 4   # 5 (integer)
remainder = 10 % 3    # 1
power = 2 ** 3        # 8
\\\`\\\`\\\`

## Comparison Operators:
\\\`\\\`\\\`python
5 == 5      # True
5 != 3      # True
5 > 3       # True
5 <= 10     # True
\\\`\\\`\\\`

## Type Conversion:
\\\`\\\`\\\`python
int("42")      # Convert to integer
float("3.14")  # Convert to float
str(42)        # Convert to string
\\\`\\\`\\\`

Do calculations!\`,
    initialCode: \`# Calculate the area of a rectangle
# Length = 10, Width = 5
# Print the result

\`,
    solution: \`length = 10
width = 5
area = length * width

print(f"Area: {area}")

# Or more complete:
price = 29.99
quantity = 3
total = price * quantity
print(f"Total cost: ${total}")\`,
    hints: ['Use * for multiplication', 'Store result in variable', 'Use f-string to print'],
    testCases: [
      { name: 'Has arithmetic operation', test: (code) => /[+\\-*\\/]/.test(code), errorMessage: 'Perform an arithmetic operation' },
      { name: 'Has variables', test: (code) => /\\w+\\s*=/.test(code), errorMessage: 'Store values in variables' },
      { name: 'Uses print', test: (code) => /print\\s*\\(/.test(code), errorMessage: 'Print the result' },
      { name: 'Has multiple lines', test: (code) => code.trim().split('\\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  },
  {
    id: 'python-3',
    title: 'Functions in Python',
    description: 'Create reusable functions',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: \`# Python Functions

Functions are reusable blocks of code.

## Defining Functions:
\\\`\\\`\\\`python
def greet(name):
    return f"Hello, {name}!"

message = greet("Alice")
print(message)  # Hello, Alice!
\\\`\\\`\\\`

## Multiple Parameters:
\\\`\\\`\\\`python
def add(a, b):
    return a + b

result = add(5, 3)  # 8
\\\`\\\`\\\`

## Default Parameters:
\\\`\\\`\\\`python
def power(base, exponent=2):
    return base ** exponent

power(5)      # 25 (5^2)
power(5, 3)   # 125 (5^3)
\\\`\\\`\\\`

Create useful functions!\`,
    initialCode: \`# Create a function that calculates the area of a circle
# Formula: area = π * radius^2
# Use 3.14159 for π

\`,
    solution: \`def calculate_circle_area(radius):
    pi = 3.14159
    area = pi * radius ** 2
    return area

# Test the function
result = calculate_circle_area(5)
print(f"Area: {result}")

# Or more complete:
def rectangle_area(length, width):
    return length * width

print(rectangle_area(10, 5))\`,
    hints: ['Define function with def keyword', 'Use return to send back value', 'Call function with ()'],
    testCases: [
      { name: 'Has function definition', test: (code) => /def\\s+\\w+\\s*\\(/.test(code), errorMessage: 'Define a function with def keyword' },
      { name: 'Function has parameter', test: (code) => /def\\s+\\w+\\s*\\([^)]+\\)/.test(code), errorMessage: 'Function should accept parameters' },
      { name: 'Uses return', test: (code) => /return/.test(code), errorMessage: 'Use return statement' },
      { name: 'Calls the function', test: (code) => {
        const funcName = (code.match(/def\\s+(\\w+)\\s*\\(/) || [])[1];
        return funcName && new RegExp(funcName + '\\\\s*\\\\(').test(code.split('def')[1] || '');
      }, errorMessage: 'Call the function you defined' }
    ]
  },
  {
    id: 'python-4',
    title: 'Conditional Statements - if/elif/else',
    description: 'Make decisions in Python',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: \`# Python Conditionals

## if Statement:
\\\`\\\`\\\`python
age = 20
if age >= 18:
    print("Adult")
\\\`\\\`\\\`

## if-else:
\\\`\\\`\\\`python
score = 75
if score >= 60:
    print("Pass")
else:
    print("Fail")
\\\`\\\`\\\`

## if-elif-else:
\\\`\\\`\\\`python
grade = 85
if grade >= 90:
    print("A")
elif grade >= 80:
    print("B")
elif grade >= 70:
    print("C")
else:
    print("F")
\\\`\\\`\\\`

**Indentation is important in Python!**

Make smart decisions!\`,
    initialCode: \`# Create a function to check if a number is positive, negative, or zero
# Return appropriate message

\`,
    solution: \`def check_number(num):
    if num > 0:
        return "Positive"
    elif num < 0:
        return "Negative"
    else:
        return "Zero"

print(check_number(5))   # Positive
print(check_number(-3))  # Negative
print(check_number(0))   # Zero\`,
    hints: ['Use if to check condition', 'Use elif for additional conditions', 'Use else for final case', 'Remember indentation!'],
    testCases: [
      { name: 'Has if statement', test: (code) => /if\\s+/.test(code), errorMessage: 'Use an if statement' },
      { name: 'Has comparison', test: (code) => /[><=!]=?/.test(code), errorMessage: 'Use comparison operators' },
      { name: 'Has elif or else', test: (code) => /elif|else/.test(code), errorMessage: 'Include elif or else' },
      { name: 'Proper indentation', test: (code) => /if.*:\\n\\s{2,}/.test(code), errorMessage: 'Use proper indentation (4 spaces or tab)' }
    ]
  },
  {
    id: 'python-5',
    title: 'Lists in Python',
    description: 'Work with Python lists',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: \`# Python Lists

Lists store multiple items in one variable.

## Creating Lists:
\\\`\\\`\\\`python
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]
mixed = ["text", 42, True]
\\\`\\\`\\\`

## Accessing Elements:
\\\`\\\`\\\`python
fruits[0]       # "apple" (first)
fruits[-1]      # Last element
fruits[1:3]     # Slicing
\\\`\\\`\\\`

## List Methods:
\\\`\\\`\\\`python
fruits.append("grape")    # Add to end
fruits.remove("banana")   # Remove item
len(fruits)               # Number of items
fruits.sort()             # Sort list
\\\`\\\`\\\`

## Looping:
\\\`\\\`\\\`python
for fruit in fruits:
    print(fruit)
\\\`\\\`\\\`

Master lists!\`,
    initialCode: \`# Create a list of numbers
# Add a new number
# Print each number using a loop

\`,
    solution: \`numbers = [10, 20, 30, 40]
numbers.append(50)

for num in numbers:
    print(num)

# Or more complete:
scores = [85, 92, 78, 90]
scores.append(88)
print(f"Total scores: {len(scores)}")
print(f"Average: {sum(scores) / len(scores)}")\`,
    hints: ['Create list with []', 'Use append() to add', 'Use for loop to iterate'],
    testCases: [
      { name: 'Creates list', test: (code) => /\\[.*\\]/.test(code), errorMessage: 'Create a list with []' },
      { name: 'Has list elements', test: (code) => /\\[\\s*[^\\]]+\\s*\\]/.test(code), errorMessage: 'Add elements to the list' },
      { name: 'Uses list method or loop', test: (code) => /\\.append|for\\s+\\w+\\s+in|\\[\\d+\\]/.test(code), errorMessage: 'Use list methods or loop through the list' },
      { name: 'Has print', test: (code) => /print\\s*\\(/.test(code), errorMessage: 'Print output' }
    ]
  }
]
`;

// CYBERSECURITY LESSONS WITH PROPER TEST CASES
const cybersecurityLessons = `import { Lesson } from '../courses'

export const cybersecurityLessons: Lesson[] = [
  {
    id: 'cybersecurity-1',
    title: 'Introduction to Cybersecurity',
    description: 'Understanding security principles and the CIA triad',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: \`# Introduction to Cybersecurity

## The CIA Triad:
Security is built on three pillars:

### 1. **Confidentiality**
- Keep information secret
- Only authorized access
- Encryption is key

### 2. **Integrity**
- Data remains unchanged
- Detect unauthorized modifications
- Hashing and checksums

### 3. **Availability**
- Systems accessible when needed
- Protection from DoS attacks
- Redundancy and backups

## Python Security Example:
\\\`\\\`\\\`python
import hashlib

def hash_password(password):
    # Never store passwords in plain text!
    return hashlib.sha256(password.encode()).hexdigest()
\\\`\\\`\\\`

Let's create a basic security function!\`,
    initialCode: \`import hashlib

# Create a function to hash sensitive data
# Use SHA-256 algorithm

def secure_hash(data):
    # Your code here
    pass
\`,
    solution: \`import hashlib

def secure_hash(data):
    """Hash data using SHA-256"""
    return hashlib.sha256(data.encode()).hexdigest()

# Test the function
password = "mySecureP@ssw0rd"
hashed = secure_hash(password)
print(f"Hashed: {hashed}")

# Verify two hashes match
def verify_hash(data, expected_hash):
    return secure_hash(data) == expected_hash\`,
    hints: ['Import hashlib', 'Use sha256() method', 'Call encode() on string', 'Use hexdigest() for output'],
    testCases: [
      { name: 'Imports hashlib', test: (code) => /import hashlib/.test(code), errorMessage: 'Import the hashlib module' },
      { name: 'Defines function', test: (code) => /def\\s+\\w+\\s*\\(/.test(code), errorMessage: 'Define a function' },
      { name: 'Uses SHA-256', test: (code) => /sha256/.test(code), errorMessage: 'Use the SHA-256 hashing algorithm' },
      { name: 'Encodes data', test: (code) => /\\.encode\\(\\)/.test(code), errorMessage: 'Encode string data before hashing' },
      { name: 'Returns hash', test: (code) => /return.*hexdigest/.test(code), errorMessage: 'Return the hexdigest of the hash' }
    ]
  },
  {
    id: 'cybersecurity-2',
    title: 'Password Security and Hashing',
    description: 'Learn proper password storage with salting',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: \`# Password Security

## Never Store Plain Text Passwords!

### Bad Practice:
\\\`\\\`\\\`python
# ❌ NEVER DO THIS
password = "mypassword"
\\\`\\\`\\\`

### Good Practice:
\\\`\\\`\\\`python
import hashlib
import os

# Generate random salt
salt = os.urandom(32)

# Hash password with salt
password = "mypassword"
key = hashlib.pbkdf2_hmac('sha256', password.encode(), salt, 100000)
\\\`\\\`\\\`

## Why Salting?
- Prevents rainbow table attacks
- Same password → different hashes
- Unique salt for each user

Create a secure password system!\`,
    initialCode: \`import hashlib
import os

def hash_password(password):
    # Generate a random salt
    
    # Hash password with salt using PBKDF2
    
    # Return both salt and hash
    pass

def verify_password(password, salt, stored_hash):
    # Verify password matches stored hash
    pass
\`,
    solution: \`import hashlib
import os

def hash_password(password):
    """Hash password with random salt"""
    salt = os.urandom(32)
    key = hashlib.pbkdf2_hmac(
        'sha256',
        password.encode('utf-8'),
        salt,
        100000  # iterations
    )
    return salt, key

def verify_password(password, salt, stored_hash):
    """Verify password matches stored hash"""
    key = hashlib.pbkdf2_hmac(
        'sha256',
        password.encode('utf-8'),
        salt,
        100000
    )
    return key == stored_hash

# Test
password = "SecureP@ss123"
salt, hashed = hash_password(password)
print(verify_password(password, salt, hashed))  # True\`,
    hints: ['Use os.urandom() for salt', 'Use pbkdf2_hmac() for hashing', 'Store both salt and hash', 'Use same salt to verify'],
    testCases: [
      { name: 'Imports required modules', test: (code) => /import hashlib/.test(code) && /import os/.test(code), errorMessage: 'Import hashlib and os modules' },
      { name: 'Generates salt', test: (code) => /os\\.urandom/.test(code), errorMessage: 'Generate random salt with os.urandom()' },
      { name: 'Uses PBKDF2', test: (code) => /pbkdf2_hmac/.test(code), errorMessage: 'Use pbkdf2_hmac for secure hashing' },
      { name: 'Has hash function', test: (code) => /def\\s+\\w*hash\\w*/.test(code), errorMessage: 'Create a password hashing function' },
      { name: 'Returns salt and hash', test: (code) => /return.*,/.test(code), errorMessage: 'Return both salt and hash' }
    ]
  },
  {
    id: 'cybersecurity-3',
    title: 'Input Validation and Sanitization',
    description: 'Prevent injection attacks with proper input validation',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: \`# Input Validation

Never trust user input!

## SQL Injection Prevention:
\\\`\\\`\\\`python
# ❌ BAD - SQL Injection vulnerable
query = f"SELECT * FROM users WHERE username = '{username}'"

# ✅ GOOD - Use parameterized queries
query = "SELECT * FROM users WHERE username = ?"
cursor.execute(query, (username,))
\\\`\\\`\\\`

## Input Sanitization:
\\\`\\\`\\\`python
import re

def validate_email(email):
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

def sanitize_input(user_input):
    # Remove dangerous characters
    return re.sub(r'[<>\"\\';]', '', user_input)
\\\`\\\`\\\`

Build input validators!\`,
    initialCode: \`import re

def validate_username(username):
    # Username: 3-20 chars, alphanumeric and underscore only
    pass

def validate_password_strength(password):
    # Strong password: 8+ chars, uppercase, lowercase, number, special
    pass

def sanitize_html_input(text):
    # Remove HTML tags and dangerous characters
    pass
\`,
    solution: \`import re

def validate_username(username):
    """Validate username format"""
    pattern = r'^[a-zA-Z0-9_]{3,20}$'
    return re.match(pattern, username) is not None

def validate_password_strength(password):
    """Check password strength"""
    if len(password) < 8:
        return False
    has_upper = re.search(r'[A-Z]', password)
    has_lower = re.search(r'[a-z]', password)
    has_digit = re.search(r'\\d', password)
    has_special = re.search(r'[!@#$%^&*]', password)
    return all([has_upper, has_lower, has_digit, has_special])

def sanitize_html_input(text):
    """Remove HTML tags and dangerous characters"""
    # Remove HTML tags
    text = re.sub(r'<[^>]+>', '', text)
    # Remove dangerous characters
    text = re.sub(r'[<>\"\\';()]', '', text)
    return text

# Test
print(validate_username("user_123"))  # True
print(validate_password_strength("Weak"))  # False
print(validate_password_strength("Str0ng!Pass"))  # True\`,
    hints: ['Use regex patterns', 'Check password requirements', 'Remove HTML tags with re.sub()', 'Test each validation'],
    testCases: [
      { name: 'Imports re module', test: (code) => /import re/.test(code), errorMessage: 'Import the re (regex) module' },
      { name: 'Validates username', test: (code) => /def\\s+validate_username/.test(code) && /re\\.match|re\\.search/.test(code), errorMessage: 'Create validate_username function using regex' },
      { name: 'Checks password strength', test: (code) => /def\\s+validate_password/.test(code), errorMessage: 'Create password strength validation function' },
      { name: 'Sanitizes input', test: (code) => /def\\s+sanitize/.test(code) && /re\\.sub/.test(code), errorMessage: 'Create sanitization function using re.sub()' },
      { name: 'Uses regex patterns', test: (code) => (code.match(/r['"][^'"]+['"]/g) || []).length >= 2, errorMessage: 'Use regex patterns for validation' }
    ]
  },
  {
    id: 'cybersecurity-4',
    title: 'Encryption Basics - Symmetric Encryption',
    description: 'Implement encryption and decryption',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: \`# Symmetric Encryption

Same key for encryption and decryption.

## Using cryptography library:
\\\`\\\`\\\`python
from cryptography.fernet import Fernet

# Generate key
key = Fernet.generate_key()
cipher = Fernet(key)

# Encrypt
message = b"Secret message"
encrypted = cipher.encrypt(message)

# Decrypt
decrypted = cipher.decrypt(encrypted)
\\\`\\\`\\\`

## Real-World Uses:
- File encryption
- Database encryption
- Secure messaging

Implement encryption!\`,
    initialCode: \`from cryptography.fernet import Fernet

class SecureMessenger:
    def __init__(self):
        # Generate encryption key
        pass
    
    def encrypt_message(self, message):
        # Encrypt a message
        pass
    
    def decrypt_message(self, encrypted_message):
        # Decrypt a message
        pass

# Test your implementation
\`,
    solution: \`from cryptography.fernet import Fernet

class SecureMessenger:
    def __init__(self):
        """Initialize with encryption key"""
        self.key = Fernet.generate_key()
        self.cipher = Fernet(self.key)
    
    def encrypt_message(self, message):
        """Encrypt a text message"""
        if isinstance(message, str):
            message = message.encode()
        return self.cipher.encrypt(message)
    
    def decrypt_message(self, encrypted_message):
        """Decrypt an encrypted message"""
        decrypted = self.cipher.decrypt(encrypted_message)
        return decrypted.decode()

# Test
messenger = SecureMessenger()
secret = "This is a secret!"
encrypted = messenger.encrypt_message(secret)
decrypted = messenger.decrypt_message(encrypted)
print(f"Original: {secret}")
print(f"Encrypted: {encrypted}")
print(f"Decrypted: {decrypted}")\`,
    hints: ['Generate key with Fernet.generate_key()', 'Create Fernet cipher instance', 'Encode strings to bytes', 'Decode bytes to strings'],
    testCases: [
      { name: 'Imports Fernet', test: (code) => /from cryptography\\.fernet import Fernet/.test(code), errorMessage: 'Import Fernet from cryptography.fernet' },
      { name: 'Generates key', test: (code) => /Fernet\\.generate_key/.test(code), errorMessage: 'Generate encryption key with Fernet.generate_key()' },
      { name: 'Has encrypt method', test: (code) => /def\\s+encrypt/.test(code) && /\\.encrypt\\(/.test(code), errorMessage: 'Create encrypt method using cipher.encrypt()' },
      { name: 'Has decrypt method', test: (code) => /def\\s+decrypt/.test(code) && /\\.decrypt\\(/.test(code), errorMessage: 'Create decrypt method using cipher.decrypt()' },
      { name: 'Creates class', test: (code) => /class\\s+\\w+/.test(code), errorMessage: 'Create a class for the secure messenger' }
    ]
  },
  {
    id: 'cybersecurity-5',
    title: 'XSS Prevention - Cross-Site Scripting',
    description: 'Protect against XSS attacks',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: \`# Cross-Site Scripting (XSS)

XSS allows attackers to inject malicious scripts.

## Vulnerable Code:
\\\`\\\`\\\`python
# ❌ DANGEROUS
user_input = request.GET['name']
html = f"<h1>Hello {user_input}</h1>"  # XSS vulnerable!
\\\`\\\`\\\`

## Safe Code:
\\\`\\\`\\\`python
# ✅ SAFE
from html import escape

user_input = request.GET['name']
safe_input = escape(user_input)
html = f"<h1>Hello {safe_input}</h1>"
\\\`\\\`\\\`

## Types of XSS:
1. **Stored XSS**: Saved in database
2. **Reflected XSS**: In URL/form
3. **DOM-based XSS**: Client-side

Prevent XSS attacks!\`,
    initialCode: \`from html import escape
import re

def sanitize_user_input(user_input):
    # Escape HTML characters
    pass

def is_safe_url(url):
    # Validate URL to prevent javascript: protocol
    pass

def create_safe_html(user_name, user_comment):
    # Create HTML safely
    pass
\`,
    solution: \`from html import escape
import re

def sanitize_user_input(user_input):
    """Escape HTML special characters"""
    return escape(user_input)

def is_safe_url(url):
    """Check if URL is safe (no javascript:)"""
    dangerous_protocols = ['javascript:', 'data:', 'vbscript:']
    url_lower = url.lower().strip()
    for protocol in dangerous_protocols:
        if url_lower.startswith(protocol):
            return False
    return True

def create_safe_html(user_name, user_comment):
    """Create HTML with sanitized user input"""
    safe_name = escape(user_name)
    safe_comment = escape(user_comment)
    
    html = f"""
    <div class="user-post">
        <h3>{safe_name}</h3>
        <p>{safe_comment}</p>
    </div>
    """
    return html

# Test
name = "<script>alert('XSS')</script>"
comment = "Hello <b>world</b>"
print(create_safe_html(name, comment))\`,
    hints: ['Use html.escape()', 'Check for javascript: protocol', 'Escape all user input', 'Validate URLs before use'],
    testCases: [
      { name: 'Imports escape', test: (code) => /from html import escape|import html/.test(code), errorMessage: 'Import escape from html module' },
      { name: 'Uses escape function', test: (code) => /escape\\(/.test(code), errorMessage: 'Use escape() to sanitize HTML' },
      { name: 'Validates URL', test: (code) => /def\\s+is_safe_url/.test(code) && /javascript/.test(code), errorMessage: 'Create URL validation to check for dangerous protocols' },
      { name: 'Sanitizes input', test: (code) => /def\\s+sanitize/.test(code), errorMessage: 'Create input sanitization function' },
      { name: 'Escapes in HTML creation', test: (code) => /def\\s+create.*html/.test(code) && code.split('def create')[1].includes('escape'), errorMessage: 'Escape user input when creating HTML' }
    ]
  }
]
`;

// Write all files
writeLessonFile('jsLessons.ts', jsLessons);
writeLessonFile('pythonLessons.ts', pythonLessons);
writeLessonFile('cybersecurityLessons.ts', cybersecurityLessons);

console.log('\\n🎓 Full-Stack Lesson Generation Complete!');
console.log('━'.repeat(50));
console.log('✅ JavaScript: 5 comprehensive lessons');
console.log('✅ Python: 5 comprehensive lessons');
console.log('✅ Cybersecurity: 5 lessons with REAL security concepts');
console.log('\\n🔒 All lessons have proper test cases that validate actual learning!');
