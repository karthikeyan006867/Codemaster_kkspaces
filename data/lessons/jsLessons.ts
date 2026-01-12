import { Lesson } from '../courses'

export const jsLessons = [
  {
    id: 'js-1',
    title: 'Variables and Data Types',
    description: 'Learn about JavaScript variables (let, const, var) and primitive data types',
    language: 'javascript' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Variables and Data Types in JavaScript

## Introduction to Variables

Variables are containers for storing data values. JavaScript has three ways to declare variables:

- **let**: Block-scoped, can be reassigned
- **const**: Block-scoped, cannot be reassigned (use for constants)
- **var**: Function-scoped (older syntax, avoid in modern code)

## Variable Declaration Examples

\`\`\`javascript
let name = "Alice";        // String variable
const age = 25;            // Constant number
let isStudent = true;      // Boolean
let score;                 // Undefined (declared but not assigned)
\`\`\`

## Primitive Data Types

JavaScript has 7 primitive types:

1. **String**: Text data - \`"hello"\`, \`'world'\`, \`\\\`template\\\`\`
2. **Number**: Integers and decimals - \`42\`, \`3.14\`, \`-7\`
3. **Boolean**: True or false - \`true\`, \`false\`
4. **Undefined**: Variable declared but not assigned
5. **Null**: Intentional absence of value
6. **Symbol**: Unique identifiers (advanced)
7. **BigInt**: Very large integers (advanced)

## Variable Naming Rules

- Must start with letter, \$, or _
- Can contain letters, digits, \$, _
- Case-sensitive (\`myVar\` ≠ \`myvar\`)
- Cannot use reserved keywords (\`let\`, \`class\`, etc.)
- Use camelCase convention: \`firstName\`, \`totalScore\`

## Best Practices

- Use \`const\` by default
- Use \`let\` when you need to reassign
- Avoid \`var\` in modern JavaScript
- Choose descriptive variable names
- Initialize variables when declaring them

## Exercise

Practice declaring variables of different types and using console.log() to display them!`,
    initialCode: `// Declare variables of different types
let greeting = "Hello, JavaScript!";
const pi = 3.14159;
let isLearning = true;

// Your code here: Create 3 more variables
// 1. A string for your name
// 2. A number for your age
// 3. A boolean for whether you like coding

// Log your variables
console.log(greeting);
console.log("Pi is approximately:", pi);
console.log("Am I learning?", isLearning);

// Log your variables here
`,
    solution: `// Declare variables of different types
let greeting = "Hello, JavaScript!";
const pi = 3.14159;
let isLearning = true;

// Create additional variables
let myName = "Alex";
let myAge = 20;
const likesCoding = true;

// Log all variables
console.log(greeting);
console.log("Pi is approximately:", pi);
console.log("Am I learning?", isLearning);
console.log("My name is:", myName);
console.log("I am", myAge, "years old");
console.log("Do I like coding?", likesCoding);

// Demonstrate reassignment with let
myAge = 21;
console.log("Next year I'll be:", myAge);

// typeof operator shows data types
console.log("Type of myName:", typeof myName);
console.log("Type of myAge:", typeof myAge);
console.log("Type of likesCoding:", typeof likesCoding);
`,
    hints: [
      'Use let for variables that might change, const for constants',
      'Strings can use single quotes, double quotes, or backticks',
      'Numbers don\'t need quotes: let age = 25 (not "25")',
      'Booleans are true or false without quotes',
      'console.log() can accept multiple arguments separated by commas',
      'The typeof operator shows the data type: typeof "hello" returns "string"'
    ],
    testCases: [
      { name: 'Declares string variable', test: (code: string, output: string) => /let\s+\w+\s*=\s*["'`]/.test(code) || /const\s+\w+\s*=\s*["'`]/.test(code), errorMessage: 'Must declare at least one string variable' },
      { name: 'Declares number variable', test: (code: string, output: string) => /let\s+\w+\s*=\s*\d/.test(code) || /const\s+\w+\s*=\s*\d/.test(code), errorMessage: 'Must declare at least one number variable' },
      { name: 'Declares boolean variable', test: (code: string, output: string) => /let\s+\w+\s*=\s*(true|false)/.test(code) || /const\s+\w+\s*=\s*(true|false)/.test(code), errorMessage: 'Must declare at least one boolean variable' },
      { name: 'Uses console.log', test: (code: string, output: string) => code.includes('console.log'), errorMessage: 'Must use console.log() to display output' },
      { name: 'Produces output', test: (code: string, output: string) => output.trim().length > 20, errorMessage: 'Must produce console output showing variable values' },
      { name: 'Uses let or const', test: (code: string, output: string) => code.includes('let ') || code.includes('const '), errorMessage: 'Must use let or const to declare variables' }
    ]
  },
  {
    id: 'js-2',
    title: 'Numbers and Math Operations',
    description: 'Master number manipulation, arithmetic operators, and the Math object',
    language: 'javascript' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Numbers and Math Operations

## Working with Numbers

JavaScript has a single number type that handles both integers and decimals (floating-point numbers).

\`\`\`javascript
let integer = 42;
let decimal = 3.14;
let negative = -7;
let scientific = 2.5e6;  // 2.5 × 10^6 = 2,500,000
\`\`\`

## Arithmetic Operators

JavaScript supports all basic math operations:

- **Addition**: \`5 + 3\` → \`8\`
- **Subtraction**: \`10 - 4\` → \`6\`
- **Multiplication**: \`6 * 7\` → \`42\`
- **Division**: \`20 / 4\` → \`5\`
- **Modulus** (remainder): \`17 % 5\` → \`2\`
- **Exponentiation**: \`2 ** 3\` → \`8\` (2³)

## Compound Assignment Operators

Shorthand for updating variables:

\`\`\`javascript
let x = 10;
x += 5;   // x = x + 5  → 15
x -= 3;   // x = x - 3  → 12
x *= 2;   // x = x * 2  → 24
x /= 4;   // x = x / 4  → 6
x++;      // x = x + 1  → 7
x--;      // x = x - 1  → 6
\`\`\`

## The Math Object

JavaScript provides built-in math functions through the Math object:

\`\`\`javascript
Math.round(4.7);      // 5 (rounds to nearest integer)
Math.floor(4.9);      // 4 (rounds down)
Math.ceil(4.1);       // 5 (rounds up)
Math.abs(-5);         // 5 (absolute value)
Math.sqrt(16);        // 4 (square root)
Math.pow(2, 3);       // 8 (2 to the power of 3)
Math.max(5, 10, 3);   // 10 (largest number)
Math.min(5, 10, 3);   // 3 (smallest number)
Math.random();        // Random decimal between 0 and 1
\`\`\`

## Random Numbers

Generate random integers within a range:

\`\`\`javascript
// Random integer from 1 to 10
let random = Math.floor(Math.random() * 10) + 1;

// Random integer from min to max
let randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
\`\`\`

## Number Precision

Be careful with decimal arithmetic:

\`\`\`javascript
console.log(0.1 + 0.2);  // 0.30000000000000004 (floating-point quirk)

// Fix with toFixed():
let sum = (0.1 + 0.2).toFixed(2);  // "0.30" (string)
let sumNumber = parseFloat(sum);    // 0.30 (number)
\`\`\`

## Exercise

Practice arithmetic operations and using Math functions to solve calculations!`,
    initialCode: `// Practice with numbers and math operations

// Basic arithmetic
let a = 15;
let b = 4;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);

// Your code here:
// 1. Calculate and log multiplication of a * b
// 2. Calculate and log division of a / b
// 3. Calculate and log remainder of a % b

// Math object practice
let number = 4.7;

// Use Math.round(), Math.floor(), Math.ceil()
console.log("Rounded:", Math.round(number));

// Your code here:
// 4. Use Math.floor() on the number
// 5. Use Math.ceil() on the number
// 6. Calculate square root of 25 using Math.sqrt()
// 7. Find the maximum of 15, 8, 23, 12
// 8. Generate a random number between 1 and 100
`,
    solution: `// Practice with numbers and math operations

// Basic arithmetic
let a = 15;
let b = 4;

console.log("Addition:", a + b);           // 19
console.log("Subtraction:", a - b);        // 11
console.log("Multiplication:", a * b);     // 60
console.log("Division:", a / b);           // 3.75
console.log("Remainder:", a % b);          // 3
console.log("Exponentiation:", a ** 2);    // 225

// Math object practice
let number = 4.7;

console.log("Rounded:", Math.round(number));     // 5
console.log("Floor:", Math.floor(number));       // 4
console.log("Ceiling:", Math.ceil(number));      // 5

// Square root
let squareRoot = Math.sqrt(25);
console.log("Square root of 25:", squareRoot);   // 5

// Maximum value
let maximum = Math.max(15, 8, 23, 12);
console.log("Maximum:", maximum);                // 23

// Minimum value
let minimum = Math.min(15, 8, 23, 12);
console.log("Minimum:", minimum);                // 8

// Random number between 1 and 100
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log("Random (1-100):", randomNum);

// Compound assignment operators
let counter = 10;
counter += 5;  // 15
counter *= 2;  // 30
counter--;     // 29
console.log("Counter after operations:", counter);

// Practical calculations
let price = 29.99;
let quantity = 3;
let total = price * quantity;
console.log(\`Total cost: $\${total.toFixed(2)}\`);

// Area of a circle
let radius = 5;
let area = Math.PI * Math.pow(radius, 2);
console.log(\`Circle area: \${area.toFixed(2)}\`);
`,
    hints: [
      'Multiplication uses the * operator: a * b',
      'Division uses the / operator: a / b',
      'Modulus (%) gives the remainder: 17 % 5 = 2',
      'Math.floor() rounds down, Math.ceil() rounds up',
      'Math.sqrt(x) calculates square root',
      'Math.max() can take multiple arguments: Math.max(1, 5, 3) returns 5',
      'Random 1-100: Math.floor(Math.random() * 100) + 1',
      'Use toFixed(2) to format decimals to 2 places'
    ],
    testCases: [
      { name: 'Uses multiplication', test: (code: string, output: string) => code.includes('*'), errorMessage: 'Must use multiplication operator (*)' },
      { name: 'Uses division', test: (code: string, output: string) => code.includes('/'), errorMessage: 'Must use division operator (/)' },
      { name: 'Uses Math.floor', test: (code: string, output: string) => code.includes('Math.floor'), errorMessage: 'Must use Math.floor()' },
      { name: 'Uses Math.ceil', test: (code: string, output: string) => code.includes('Math.ceil'), errorMessage: 'Must use Math.ceil()' },
      { name: 'Uses Math.sqrt', test: (code: string, output: string) => code.includes('Math.sqrt'), errorMessage: 'Must calculate square root with Math.sqrt()' },
      { name: 'Uses Math.max or Math.min', test: (code: string, output: string) => code.includes('Math.max') || code.includes('Math.min'), errorMessage: 'Must use Math.max() or Math.min()' },
      { name: 'Produces numeric output', test: (code: string, output: string) => /\d+/.test(output), errorMessage: 'Must produce output containing numbers' },
      { name: 'Multiple calculations shown', test: (code: string, output: string) => output.split('\n').filter(line => /\d/.test(line)).length >= 5, errorMessage: 'Must show at least 5 different calculations' }
    ]
  },
  {
    id: 'js-3',
    title: 'Strings and Template Literals',
    description: 'Work with text, string methods, concatenation, and modern template literals',
    language: 'javascript' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Strings and Template Literals

## Creating Strings

Strings can be created with single quotes, double quotes, or backticks:

\`\`\`javascript
let single = 'Hello';
let double = "World";
let template = \\\`Hello World\\\`;  // Template literal
\`\`\`

## String Concatenation

Combine strings using the + operator:

\`\`\`javascript
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;  // "John Doe"

let greeting = "Hello, " + firstName + "!";  // "Hello, John!"
\`\`\`

## Template Literals (Modern Way)

Use backticks and \${} for string interpolation:

\`\`\`javascript
let name = "Alice";
let age = 25;

// Embed variables directly
let message = \\\`My name is \${name} and I'm \${age} years old\\\`;

// Embed expressions
let price = 19.99;
let quantity = 3;
let total = \\\`Total: $\${price * quantity}\\\`;  // "Total: $59.97"

// Multi-line strings (no \\n needed)
let poem = \\\`Roses are red,
Violets are blue,
JavaScript is awesome,
And so are you!\\\`;
\`\`\`

## Common String Methods

### Length and Access

\`\`\`javascript
let text = "JavaScript";
console.log(text.length);        // 10
console.log(text[0]);            // "J" (first character)
console.log(text.charAt(4));     // "S" (character at index 4)
\`\`\`

### Case Conversion

\`\`\`javascript
let message = "Hello World";
console.log(message.toUpperCase());  // "HELLO WORLD"
console.log(message.toLowerCase());  // "hello world"
\`\`\`

### Searching and Extracting

\`\`\`javascript
let text = "JavaScript is amazing!";

// Search
console.log(text.includes("Java"));       // true
console.log(text.indexOf("is"));          // 11 (position)
console.log(text.startsWith("Java"));     // true
console.log(text.endsWith("!"));          // true

// Extract
console.log(text.slice(0, 10));           // "JavaScript"
console.log(text.substring(0, 10));       // "JavaScript"
console.log(text.split(" "));             // ["JavaScript", "is", "amazing!"]
\`\`\`

### Modifying Strings

\`\`\`javascript
let text = "  Hello World  ";
console.log(text.trim());                // "Hello World" (remove whitespace)
console.log(text.replace("World", "JS"));  // "  Hello JS  "
console.log(text.repeat(3));             // "  Hello World    Hello World    Hello World  "
\`\`\`

## Escape Characters

Special characters in strings:

\`\`\`javascript
let escaped = "Line 1\\nLine 2";     // \\n = newline
let tabbed = "Name:\\tJohn";        // \\t = tab
let quoted = "She said \\"Hi\\"";     // \\" = quote inside string
let path = "C:\\\\Users\\\\docs";     // \\\\ = single backslash
\`\`\`

## Exercise

Practice string manipulation, methods, and template literals!`,
    initialCode: `// Practice with strings and template literals

let firstName = "Alice";
let lastName = "Johnson";

// Concatenation
let fullName = firstName + " " + lastName;
console.log("Full name:", fullName);

// Your code here:
// 1. Create a greeting using template literals with firstName
// 2. Convert fullName to uppercase and log it
// 3. Convert fullName to lowercase and log it
// 4. Get the length of fullName and log it
// 5. Check if fullName includes "John" and log the result
// 6. Extract the first name from fullName using slice()
// 7. Split fullName into an array of words
// 8. Create a multi-line message using template literals

let age = 28;
let city = "New York";

// Create a bio using template literals
// Example: "Alice Johnson is 28 years old and lives in New York"
`,
    solution: `// Practice with strings and template literals

let firstName = "Alice";
let lastName = "Johnson";

// Concatenation (old way)
let fullName = firstName + " " + lastName;
console.log("Full name:", fullName);

// Template literals (modern way)
let greeting = \\\`Hello, \${firstName}! Welcome to JavaScript.\\\`;
console.log(greeting);

// Case conversion
let uppercase = fullName.toUpperCase();
let lowercase = fullName.toLowerCase();
console.log("Uppercase:", uppercase);
console.log("Lowercase:", lowercase);

// String properties and methods
let length = fullName.length;
console.log("Name length:", length);

let includesJohn = fullName.includes("John");
console.log("Includes 'John':", includesJohn);

let extracted = fullName.slice(0, 5);
console.log("First name extracted:", extracted);

let words = fullName.split(" ");
console.log("Split into words:", words);

// Multi-line string with template literals
let age = 28;
let city = "New York";

let bio = \\\`
Name: \${firstName} \${lastName}
Age: \${age}
City: \${city}
Status: Learning JavaScript
\\\`;
console.log(bio);

// More string methods
let email = "alice.johnson@example.com";
console.log("Email starts with 'alice':", email.startsWith("alice"));
console.log("Email ends with '.com':", email.endsWith(".com"));

let username = email.slice(0, email.indexOf("@"));
console.log("Username:", username);

// String replacement
let message = "I love Python!";
let corrected = message.replace("Python", "JavaScript");
console.log(corrected);

// Character access
console.log("First character of name:", firstName[0]);
console.log("Last character:", firstName[firstName.length - 1]);

// Trim whitespace
let messy = "   spaces everywhere   ";
console.log("Trimmed:", messy.trim());
`,
    hints: [
      'Template literals use backticks and ${} for variables: `Hello ${name}`',
      'toUpperCase() and toLowerCase() convert case',
      'length is a property, not a method: text.length (no parentheses)',
      'includes() checks if a string contains a substring',
      'slice(start, end) extracts a portion of a string',
      'split(" ") splits a string into an array by spaces',
      'Multi-line template literals don\'t need \\n',
      'String methods don\'t modify the original string, they return new ones'
    ],
    testCases: [
      { name: 'Uses template literals', test: (code: string, output: string) => /`[^`]*\$\{[^}]+\}[^`]*`/.test(code), errorMessage: 'Must use template literals with ${} syntax' },
      { name: 'Uses toUpperCase', test: (code: string, output: string) => code.includes('toUpperCase'), errorMessage: 'Must convert string to uppercase' },
      { name: 'Uses toLowerCase', test: (code: string, output: string) => code.includes('toLowerCase'), errorMessage: 'Must convert string to lowercase' },
      { name: 'Accesses length property', test: (code: string, output: string) => code.includes('.length'), errorMessage: 'Must get string length' },
      { name: 'Uses includes method', test: (code: string, output: string) => code.includes('includes'), errorMessage: 'Must use includes() to search string' },
      { name: 'Uses slice or substring', test: (code: string, output: string) => code.includes('slice') || code.includes('substring'), errorMessage: 'Must extract substring with slice() or substring()' },
      { name: 'Uses split method', test: (code: string, output: string) => code.includes('split'), errorMessage: 'Must split string into array' },
      { name: 'Produces varied output', test: (code: string, output: string) => output.split('\n').length >= 8, errorMessage: 'Must demonstrate multiple string operations with output' }
    ]
  },
  {
    id: 'js-4',
    title: 'Booleans and Comparison Operators',
    description: 'Learn boolean logic, comparison operators, and truthiness/falsiness',
    language: 'javascript' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Booleans and Comparison Operators

## Boolean Values

Booleans represent true or false:

\`\`\`javascript
let isOnline = true;
let isLoggedOut = false;
let hasPermission = true;
\`\`\`

## Comparison Operators

Compare values and get boolean results:

### Equality Operators

\`\`\`javascript
// Strict equality (checks value AND type)
5 === 5        // true
5 === "5"      // false (number !== string)

// Strict inequality
5 !== 5        // false
5 !== "5"      // true

// Loose equality (type coercion, avoid!)
5 == "5"       // true (converts string to number)
5 != "5"       // false

// Always use === and !== for safety!
\`\`\`

### Relational Operators

\`\`\`javascript
let age = 18;

age > 17       // true (greater than)
age < 21       // true (less than)
age >= 18      // true (greater than or equal)
age <= 18      // true (less than or equal)
\`\`\`

## Logical Operators

Combine boolean expressions:

### AND Operator (&&)

Both conditions must be true:

\`\`\`javascript
let age = 25;
let hasLicense = true;

// Can rent a car if age >= 21 AND has license
let canRent = age >= 21 && hasLicense;  // true

console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && true);   // false
console.log(false && false);  // false
\`\`\`

### OR Operator (||)

At least one condition must be true:

\`\`\`javascript
let isWeekend = true;
let isHoliday = false;

// Can sleep in if weekend OR holiday
let canSleepIn = isWeekend || isHoliday;  // true

console.log(true || true);    // true
console.log(true || false);   // true
console.log(false || true);   // true
console.log(false || false);  // false
\`\`\`

### NOT Operator (!)

Inverts a boolean value:

\`\`\`javascript
let isRaining = false;
let isSunny = !isRaining;     // true

console.log(!true);           // false
console.log(!false);          // true
console.log(!!true);          // true (double negation)
\`\`\`

## Truthiness and Falsiness

JavaScript converts values to booleans in logical contexts:

### Falsy Values (convert to false)

\`\`\`javascript
false         // obviously false
0             // zero
""            // empty string
null          // null
undefined     // undefined
NaN           // Not a Number

// All falsy values
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
\`\`\`

### Truthy Values (convert to true)

Everything else is truthy:

\`\`\`javascript
true          // obviously true
1, -1, 3.14   // any non-zero number
"hello"       // any non-empty string
[], {}        // arrays and objects (even empty!)

console.log(Boolean(42));         // true
console.log(Boolean("hello"));    // true
console.log(Boolean([]));         // true
\`\`\`

## Practical Examples

\`\`\`javascript
// Age verification
let age = 20;
let hasID = true;
let canEnter = age >= 18 && hasID;
console.log("Can enter club:", canEnter);

// Default values with OR
let username = "" || "Guest";  // "Guest" (empty string is falsy)
let count = 0 || 10;           // 10 (zero is falsy)

// Nullish coalescing (better for 0 and "")
let score = 0 ?? 100;          // 0 (only null/undefined are "nullish")

// Complex conditions
let temperature = 75;
let isComfortable = temperature >= 65 && temperature <= 80;
console.log("Comfortable?", isComfortable);
\`\`\`

## Exercise

Practice boolean logic, comparisons, and combining conditions!`,
    initialCode: `// Practice with booleans and comparisons

// Simple comparisons
let age = 22;
let minAge = 18;

console.log("Is adult?", age >= minAge);

// Your code here:
// 1. Check if age is exactly 22 using ===
// 2. Check if age is NOT 18 using !==
// 3. Check if age is greater than 21
// 4. Check if age is between 18 and 25 (inclusive) using &&

let hasTicket = true;
let hasID = true;

// 5. Check if person can enter (needs both ticket AND ID)
// 6. Create a variable isWeekend = false and isHoliday = true
//    Check if it's a day off (weekend OR holiday)

// 7. Test truthy/falsy values
let emptyString = "";
let zero = 0;
let someText = "Hello";

// Log the boolean conversion of these values
// Example: console.log("Empty string is truthy?", Boolean(emptyString));

// 8. Create a complex condition:
//    Can buy alcohol if: age >= 21 AND hasID AND NOT isClosed
let isClosed = false;
`,
    solution: `// Practice with booleans and comparisons

// Simple comparisons
let age = 22;
let minAge = 18;

console.log("Is adult?", age >= minAge);  // true

// Equality checks
console.log("Age is exactly 22:", age === 22);      // true
console.log("Age is not 18:", age !== 18);          // true
console.log("Age greater than 21:", age > 21);      // true

// Range check with AND
let inRange = age >= 18 && age <= 25;
console.log("Age between 18-25:", inRange);         // true

// Logical AND - both must be true
let hasTicket = true;
let hasID = true;
let canEnter = hasTicket && hasID;
console.log("Can enter event:", canEnter);          // true

// Logical OR - at least one must be true
let isWeekend = false;
let isHoliday = true;
let isDayOff = isWeekend || isHoliday;
console.log("Is day off:", isDayOff);               // true

// Truthy and falsy values
let emptyString = "";
let zero = 0;
let someText = "Hello";

console.log("Empty string is truthy?", Boolean(emptyString));  // false
console.log("Zero is truthy?", Boolean(zero));                 // false
console.log("'Hello' is truthy?", Boolean(someText));          // true

// Complex condition
let isClosed = false;
let canBuyAlcohol = age >= 21 && hasID && !isClosed;
console.log("Can buy alcohol:", canBuyAlcohol);     // true

// More examples
console.log("\\n=== More Comparisons ===");
let price = 50;
let budget = 100;
let canAfford = price <= budget;
console.log("Can afford ($50 <= $100):", canAfford);  // true

// NOT operator
let isRaining = false;
let goToBeach = !isRaining;
console.log("Should go to beach:", goToBeach);      // true

// Combining conditions
let temperature = 75;
let isNiceWeather = temperature >= 65 && temperature <= 85 && !isRaining;
console.log("Is nice weather:", isNiceWeather);     // true

// Default values using OR
let username = "";
let displayName = username || "Guest";
console.log("Display name:", displayName);          // "Guest"

// Practical password check
let password = "myPass123";
let isLongEnough = password.length >= 8;
let hasNumber = /\\d/.test(password);
let isValidPassword = isLongEnough && hasNumber;
console.log("Valid password:", isValidPassword);    // true
`,
    hints: [
      'Use === for strict equality (checks type and value)',
      'Use !== for strict inequality',
      'Combine conditions with && (AND) - both must be true',
      'Combine conditions with || (OR) - at least one must be true',
      'Use ! to negate: !false becomes true',
      'Range check: value >= min && value <= max',
      'Boolean() converts any value to true or false',
      'Falsy values: false, 0, "", null, undefined, NaN'
    ],
    testCases: [
      { name: 'Uses strict equality ===', test: (code: string, output: string) => code.includes('==='), errorMessage: 'Must use strict equality operator (===)' },
      { name: 'Uses strict inequality !==', test: (code: string, output: string) => code.includes('!=='), errorMessage: 'Must use strict inequality operator (!==)' },
      { name: 'Uses greater than >', test: (code: string, output: string) => code.includes('>'), errorMessage: 'Must use greater than operator (>)' },
      { name: 'Uses logical AND &&', test: (code: string, output: string) => code.includes('&&'), errorMessage: 'Must use logical AND (&&) to combine conditions' },
      { name: 'Uses logical OR ||', test: (code: string, output: string) => code.includes('||'), errorMessage: 'Must use logical OR (||)' },
      { name: 'Uses NOT operator !', test: (code: string, output: string) => code.includes('!'), errorMessage: 'Must use NOT operator (!)' },
      { name: 'Uses Boolean conversion', test: (code: string, output: string) => code.includes('Boolean('), errorMessage: 'Must use Boolean() to test truthy/falsy values' },
      { name: 'Shows comparison results', test: (code: string, output: string) => /true|false/i.test(output), errorMessage: 'Must display boolean comparison results' },
      { name: 'Multiple comparisons', test: (code: string, output: string) => output.split('\n').filter(line => /true|false/i.test(line)).length >= 6, errorMessage: 'Must demonstrate at least 6 different boolean operations' }
    ]
  },
  {
    id: 'js-5',
    title: 'Conditional Statements (if/else)',
    description: 'Control program flow with if, else if, else, and ternary operators',
    language: 'javascript' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Conditional Statements

## The if Statement

Execute code only when a condition is true:

\`\`\`javascript
let age = 18;

if (age >= 18) {
  console.log("You can vote!");
}
// Output: "You can vote!"
\`\`\`

## The if...else Statement

Provide an alternative when condition is false:

\`\`\`javascript
let temperature = 15;

if (temperature > 25) {
  console.log("It's hot outside!");
} else {
  console.log("It's cool outside!");
}
// Output: "It's cool outside!"
\`\`\`

## The if...else if...else Statement

Check multiple conditions:

\`\`\`javascript
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
// Output: "Grade: B"
\`\`\`

## Nested Conditionals

Put if statements inside other if statements:

\`\`\`javascript
let age = 20;
let hasLicense = true;

if (age >= 18) {
  if (hasLicense) {
    console.log("You can drive!");
  } else {
    console.log("Get a license first!");
  }
} else {
  console.log("Too young to drive!");
}
// Output: "You can drive!"
\`\`\`

## Ternary Operator (Shorthand)

Concise way to write simple if...else:

\`\`\`javascript
// Syntax: condition ? valueIfTrue : valueIfFalse

let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);  // "Adult"

// Equivalent to:
let status;
if (age >= 18) {
  status = "Adult";
} else {
  status = "Minor";
}
\`\`\`

### Ternary Operator Examples

\`\`\`javascript
// Simple conditions
let price = 100;
let discount = price > 50 ? 10 : 0;
console.log("Discount:", discount);  // 10

// In template literals
let temp = 30;
console.log(\\\`It's \${temp > 25 ? "hot" : "cool"}\\\`);

// Multiple (nested) - avoid if too complex
let score = 75;
let grade = score >= 90 ? "A" : 
            score >= 80 ? "B" :
            score >= 70 ? "C" : "F";
\`\`\`

## Switch Statement

Alternative for multiple specific value checks:

\`\`\`javascript
let day = "Monday";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Weekday");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Invalid day");
}
// Output: "Weekday"
\`\`\`

## Truthy/Falsy in Conditions

You can use any value in conditions:

\`\`\`javascript
let username = "Alice";

// Truthy check
if (username) {
  console.log(\\\`Welcome, \${username}!\\\`);
}

// Falsy check
let errors = 0;
if (!errors) {
  console.log("No errors found!");
}

// Guard clause pattern
if (!username) {
  console.log("Please enter a username");
  // Early return or exit
}
\`\`\`

## Best Practices

1. **Use strict equality**: Use \`===\` instead of \`==\`
2. **Curly braces**: Always use {} even for single-line blocks
3. **Early returns**: Exit early to avoid deep nesting
4. **Positive conditions**: Write \`if (isValid)\` instead of \`if (!isInvalid)\`
5. **Ternary for simple cases**: Only use for simple true/false assignments

## Exercise

Practice writing conditional logic for various scenarios!`,
    initialCode: `// Practice conditional statements

// Basic if statement
let age = 25;

if (age >= 18) {
  console.log("You are an adult");
}

// Your code here:
// 1. Write if/else to check if age >= 65 (senior) or not

let temperature = 28;
// 2. Write if/else if/else for temperature:
//    > 30: "Hot"
//    20-30: "Warm"
//    10-20: "Cool"
//    < 10: "Cold"

let score = 75;
// 3. Write if/else if/else for grade:
//    >= 90: A
//    >= 80: B
//    >= 70: C
//    >= 60: D
//    < 60: F

let username = "Alice";
let password = "secret123";
// 4. Nested if: Check username === "Alice" AND password === "secret123"
//    Print "Login successful" or "Login failed"

let num = 7;
// 5. Use ternary operator to check if num is even or odd
//    Hint: num % 2 === 0 means even

let day = "Saturday";
// 6. Use switch statement for day of week:
//    Monday-Friday: "Workday"
//    Saturday-Sunday: "Weekend"

// 7. Write a condition to check if a number is positive, negative, or zero
let number = -5;
`,
    solution: `// Practice conditional statements

// Basic if statement
let age = 25;

if (age >= 18) {
  console.log("You are an adult");
}

// If/else for senior check
if (age >= 65) {
  console.log("You are a senior citizen");
} else {
  console.log("You are not a senior citizen");
}

// Temperature check with multiple conditions
let temperature = 28;

if (temperature > 30) {
  console.log("Weather: Hot");
} else if (temperature >= 20) {
  console.log("Weather: Warm");
} else if (temperature >= 10) {
  console.log("Weather: Cool");
} else {
  console.log("Weather: Cold");
}

// Grade calculation
let score = 75;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}

console.log(\\\`Score: \${score}, Grade: \${grade}\\\`);

// Nested conditional for login
let username = "Alice";
let password = "secret123";

if (username === "Alice") {
  if (password === "secret123") {
    console.log("Login successful!");
  } else {
    console.log("Login failed: Incorrect password");
  }
} else {
  console.log("Login failed: User not found");
}

// Ternary operator for even/odd
let num = 7;
let evenOrOdd = num % 2 === 0 ? "even" : "odd";
console.log(\\\`\${num} is \${evenOrOdd}\\\`);

// Switch statement for days
let day = "Saturday";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log(\\\`\${day} is a workday\\\`);
    break;
  case "Saturday":
  case "Sunday":
    console.log(\\\`\${day} is the weekend!\\\`);
    break;
  default:
    console.log("Invalid day");
}

// Positive, negative, or zero
let number = -5;

if (number > 0) {
  console.log(\\\`\${number} is positive\\\`);
} else if (number < 0) {
  console.log(\\\`\${number} is negative\\\`);
} else {
  console.log("The number is zero");
}

// More practical examples
console.log("\\n=== More Examples ===");

// Age category
let personAge = 15;
let category;

if (personAge < 13) {
  category = "child";
} else if (personAge < 20) {
  category = "teenager";
} else if (personAge < 65) {
  category = "adult";
} else {
  category = "senior";
}

console.log(\\\`Age \${personAge} is \${category}\\\`);

// Discount calculation
let purchaseAmount = 150;
let discount;

if (purchaseAmount >= 200) {
  discount = 20;
} else if (purchaseAmount >= 100) {
  discount = 10;
} else {
  discount = 0;
}

console.log(\\\`Purchase: $\${purchaseAmount}, Discount: \${discount}%\\\`);

// Time greeting
let hour = 14;
let greeting;

if (hour < 12) {
  greeting = "Good morning";
} else if (hour < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

console.log(greeting);
`,
    hints: [
      'if/else syntax: if (condition) { code } else { code }',
      'else if for multiple conditions: if (...) { } else if (...) { } else { }',
      'Nested if: Put one if statement inside another',
      'Ternary: condition ? ifTrue : ifFalse',
      'Switch needs break statements to prevent fall-through',
      'Even check: number % 2 === 0',
      'Use && for multiple conditions: username === "Alice" && password === "secret"',
      'Template literals work great with conditions: `You are ${age >= 18 ? "adult" : "minor"}`'
    ],
    testCases: [
      { name: 'Uses if statement', test: (code: string, output: string) => /if\s*\(/.test(code), errorMessage: 'Must use if statement' },
      { name: 'Uses else statement', test: (code: string, output: string) => /else\s*{/.test(code) || /else\s+if/.test(code), errorMessage: 'Must use else or else if statement' },
      { name: 'Uses else if', test: (code: string, output: string) => /else\s+if/.test(code), errorMessage: 'Must use else if for multiple conditions' },
      { name: 'Uses ternary operator', test: (code: string, output: string) => /\?[^?]*:/.test(code), errorMessage: 'Must use ternary operator (condition ? true : false)' },
      { name: 'Uses switch statement', test: (code: string, output: string) => code.includes('switch'), errorMessage: 'Must use switch statement' },
      { name: 'Has break in switch', test: (code: string, output: string) => code.includes('break'), errorMessage: 'Switch statement must use break' },
      { name: 'Multiple conditions demonstrated', test: (code: string, output: string) => (code.match(/if\s*\(/g) || []).length >= 4, errorMessage: 'Must demonstrate at least 4 different conditional scenarios' },
      { name: 'Produces varied output', test: (code: string, output: string) => output.split('\n').filter(l => l.trim()).length >= 8, errorMessage: 'Must show output from multiple conditional branches' }
    ]
  },
  {
    id: 'js-6',
    title: 'Arrays - Creating and Accessing',
    description: 'Learn to create arrays, access elements, and understand array indexing',
    language: 'javascript' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Arrays in JavaScript

## What are Arrays?

Arrays store multiple values in a single variable. They're ordered collections indexed starting from 0.

\`\`\`javascript
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["text", 42, true, null];  // Can mix types
\`\`\`

## Creating Arrays

### Array Literal (Most Common)

\`\`\`javascript
let colors = ["red", "green", "blue"];
let empty = [];  // Empty array
\`\`\`

### Array Constructor

\`\`\`javascript
let arr1 = new Array(3);        // [undefined × 3] - 3 empty slots
let arr2 = new Array(1, 2, 3);  // [1, 2, 3]
\`\`\`

### Array.from() and Spread

\`\`\`javascript
let str = "hello";
let chars = Array.from(str);      // ["h", "e", "l", "l", "o"]

let copy = [...colors];           // ["red", "green", "blue"] (copy)
\`\`\`

## Accessing Array Elements

Use square brackets with the index (starting from 0):

\`\`\`javascript
let fruits = ["apple", "banana", "orange", "mango"];

console.log(fruits[0]);    // "apple" (first element)
console.log(fruits[1]);    // "banana" (second element)
console.log(fruits[2]);    // "orange"
console.log(fruits[3]);    // "mango" (last element)

// Negative indices don't work in JavaScript (unlike Python)
console.log(fruits[-1]);   // undefined (not "mango")

// Access last element
console.log(fruits[fruits.length - 1]);  // "mango"
\`\`\`

## Array Length

The \`.length\` property tells how many elements:

\`\`\`javascript
let numbers = [10, 20, 30, 40];
console.log(numbers.length);  // 4

// Last index is always length - 1
let lastIndex = numbers.length - 1;  // 3
let lastElement = numbers[lastIndex];  // 40
\`\`\`

## Modifying Array Elements

Arrays are mutable - you can change elements:

\`\`\`javascript
let colors = ["red", "green", "blue"];

// Change an element
colors[1] = "yellow";
console.log(colors);  // ["red", "yellow", "blue"]

// Add element beyond current length
colors[5] = "purple";
console.log(colors);  // ["red", "yellow", "blue", undefined, undefined, "purple"]
console.log(colors.length);  // 6
\`\`\`

## Checking if Value is an Array

\`\`\`javascript
let arr = [1, 2, 3];
let notArr = "hello";

console.log(Array.isArray(arr));      // true
console.log(Array.isArray(notArr));   // false
console.log(typeof arr);              // "object" (not helpful!)
\`\`\`

## Common Array Operations

### Adding Elements

\`\`\`javascript
let nums = [1, 2, 3];

nums.push(4);       // Add to end: [1, 2, 3, 4]
nums.unshift(0);    // Add to start: [0, 1, 2, 3, 4]
\`\`\`

### Removing Elements

\`\`\`javascript
let fruits = ["apple", "banana", "orange"];

fruits.pop();       // Remove from end: ["apple", "banana"]
fruits.shift();     // Remove from start: ["banana"]
\`\`\`

### Finding Elements

\`\`\`javascript
let colors = ["red", "green", "blue", "green"];

colors.includes("green");     // true
colors.indexOf("green");      // 1 (first occurrence)
colors.lastIndexOf("green");  // 3 (last occurrence)
colors.indexOf("purple");     // -1 (not found)
\`\`\`

## Multi-dimensional Arrays

Arrays can contain other arrays:

\`\`\`javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[0]);     // [1, 2, 3] (first row)
console.log(matrix[0][0]);  // 1 (first row, first column)
console.log(matrix[1][2]);  // 6 (second row, third column)
\`\`\`

## Exercise

Practice creating arrays, accessing elements, and basic array operations!`,
    initialCode: `// Practice with arrays

// Create an array of your favorite foods
let favoriteFoods = ["pizza", "sushi", "tacos"];

console.log("My favorite foods:", favoriteFoods);
console.log("First favorite:", favoriteFoods[0]);

// Your code here:
// 1. Create an array of 5 numbers
// 2. Access and log the first number
// 3. Access and log the last number (use .length)
// 4. Create an array with mixed types (string, number, boolean)
// 5. Change the second element of favoriteFoods to something else
// 6. Log the length of favoriteFoods
// 7. Check if favoriteFoods is an array using Array.isArray()
// 8. Create a 2D array (matrix) with at least 2 rows and 3 columns
// 9. Access and log a specific element from the matrix
// 10. Use push() to add an element to favoriteFoods
// 11. Use indexOf() to find the position of an element
`,
    solution: `// Practice with arrays

// Create an array of favorite foods
let favoriteFoods = ["pizza", "sushi", "tacos"];

console.log("My favorite foods:", favoriteFoods);
console.log("First favorite:", favoriteFoods[0]);
console.log("Length:", favoriteFoods.length);

// Array of numbers
let numbers = [10, 20, 30, 40, 50];
console.log("\\nNumbers array:", numbers);
console.log("First number:", numbers[0]);
console.log("Last number:", numbers[numbers.length - 1]);

// Mixed type array
let mixedArray = ["Alice", 25, true, null, 3.14];
console.log("\\nMixed array:", mixedArray);
console.log("Type of each element:");
mixedArray.forEach((item, index) => {
  console.log(\\\`  [\${index}]: \${item} (type: \${typeof item})\\\`);
});

// Modifying arrays
favoriteFoods[1] = "ramen";
console.log("\\nUpdated foods:", favoriteFoods);

// Check if array
console.log("Is favoriteFoods an array?", Array.isArray(favoriteFoods));
console.log("Is 'hello' an array?", Array.isArray("hello"));

// 2D Array (Matrix)
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("\\nMatrix:", matrix);
console.log("First row:", matrix[0]);
console.log("Element at [1][2]:", matrix[1][2]);  // 6
console.log("Center element:", matrix[1][1]);     // 5

// Adding elements
favoriteFoods.push("burger");
console.log("\\nAfter push:", favoriteFoods);

favoriteFoods.unshift("pasta");
console.log("After unshift:", favoriteFoods);

// Finding elements
let position = favoriteFoods.indexOf("tacos");
console.log("Position of 'tacos':", position);

let hasPizza = favoriteFoods.includes("pizza");
console.log("Has pizza?", hasPizza);

// Removing elements
let lastFood = favoriteFoods.pop();
console.log("Removed from end:", lastFood);
console.log("After pop:", favoriteFoods);

let firstFood = favoriteFoods.shift();
console.log("Removed from start:", firstFood);
console.log("After shift:", favoriteFoods);

// Array of strings
let colors = ["red", "green", "blue", "yellow", "green"];
console.log("\\nColors:", colors);
console.log("First 'green' at index:", colors.indexOf("green"));
console.log("Last 'green' at index:", colors.lastIndexOf("green"));

// Empty array and adding elements
let dynamicArray = [];
dynamicArray.push(1);
dynamicArray.push(2);
dynamicArray.push(3);
console.log("\\nDynamic array:", dynamicArray);
console.log("Length:", dynamicArray.length);
`,
    hints: [
      'Arrays start at index 0: first element is array[0]',
      'Last element is array[array.length - 1]',
      'Use square brackets to access: myArray[2]',
      'Array.isArray() checks if something is an array',
      'push() adds to end, unshift() adds to start',
      'pop() removes from end, shift() removes from start',
      'indexOf() finds first occurrence, returns -1 if not found',
      '2D array access: matrix[row][column]',
      'Arrays can hold mixed types: [1, "two", true]'
    ],
    testCases: [
      { name: 'Creates array literal', test: (code: string, output: string) => /\[.*\]/.test(code), errorMessage: 'Must create array using [...]' },
      { name: 'Accesses array element by index', test: (code: string, output: string) => /\[\d+\]/.test(code), errorMessage: 'Must access array element with [index]' },
      { name: 'Uses .length property', test: (code: string, output: string) => code.includes('.length'), errorMessage: 'Must use .length to get array size' },
      { name: 'Uses Array.isArray', test: (code: string, output: string) => code.includes('Array.isArray'), errorMessage: 'Must check if value is array with Array.isArray()' },
      { name: 'Uses push method', test: (code: string, output: string) => code.includes('.push'), errorMessage: 'Must add element with push()' },
      { name: 'Uses indexOf', test: (code: string, output: string) => code.includes('indexOf'), errorMessage: 'Must find element position with indexOf()' },
      { name: 'Creates 2D array', test: (code: string, output: string) => /\[\s*\[/.test(code), errorMessage: 'Must create nested array (2D array)' },
      { name: 'Shows array output', test: (code: string, output: string) => output.split('\n').length >= 8, errorMessage: 'Must demonstrate multiple array operations with output' }
    ]
  },
  {
    id: 'js-7',
    title: 'Functions - Basics',
    description: 'Learn to define and call functions, use parameters, and return values',
    language: 'javascript' as const,
    difficulty: 'Beginner',
    estimatedTime: 40,
    content: `# Functions in JavaScript

## What are Functions?

Functions are reusable blocks of code that perform specific tasks. They help organize code and avoid repetition.

## Function Declaration

The traditional way to create functions:

\`\`\`javascript
function greet() {
  console.log("Hello!");
}

greet();  // Call the function → "Hello!"
\`\`\`

## Functions with Parameters

Parameters let you pass data to functions:

\`\`\`javascript
function greet(name) {
  console.log(\\\`Hello, \${name}!\\\`);
}

greet("Alice");   // "Hello, Alice!"
greet("Bob");     // "Hello, Bob!"

// Multiple parameters
function add(a, b) {
  console.log(a + b);
}

add(5, 3);  // 8
add(10, 20);  // 30
\`\`\`

## Return Values

Functions can return results using \`return\`:

\`\`\`javascript
function add(a, b) {
  return a + b;
}

let sum = add(5, 3);       // sum = 8
let result = add(10, 20);  // result = 30
console.log(add(7, 2));    // 9

// Without return, function returns undefined
function sayHi() {
  console.log("Hi!");
  // No return statement
}

let value = sayHi();  // value = undefined
\`\`\`

## Return Stops Execution

Code after \`return\` is never executed:

\`\`\`javascript
function checkAge(age) {
  if (age < 18) {
    return "Too young";
  }
  return "Old enough";
  console.log("This never runs!");  // Unreachable
}
\`\`\`

## Default Parameters

Provide default values for parameters:

\`\`\`javascript
function greet(name = "Guest") {
  return \\\`Hello, \${name}!\\\`;
}

console.log(greet("Alice"));   // "Hello, Alice!"
console.log(greet());          // "Hello, Guest!"

function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2));   // 10
console.log(multiply(5));      // 5 (uses default b = 1)
\`\`\`

## Function Expression

Assign function to a variable:

\`\`\`javascript
const greet = function(name) {
  return \\\`Hello, \${name}!\\\`;
};

console.log(greet("Alice"));  // "Hello, Alice!"
\`\`\`

## Arrow Functions (Modern Syntax)

Concise function syntax (ES6+):

\`\`\`javascript
// Arrow function
const add = (a, b) => {
  return a + b;
};

// Shorter: implicit return (no braces needed)
const multiply = (a, b) => a * b;

// Single parameter: no parentheses needed
const square = x => x * x;

console.log(square(5));  // 25
console.log(multiply(3, 4));  // 12
\`\`\`

## Scope

Variables inside functions are local (only accessible inside):

\`\`\`javascript
let globalVar = "global";

function test() {
  let localVar = "local";
  console.log(globalVar);   // ✓ Can access global
  console.log(localVar);    // ✓ Can access local
}

test();
console.log(globalVar);     // ✓ Can access global
console.log(localVar);      // ✗ Error! localVar not defined outside function
\`\`\`

## Practical Examples

### Temperature Converter

\`\`\`javascript
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

console.log(celsiusToFahrenheit(0));    // 32
console.log(fahrenheitToCelsius(100));  // 37.78
\`\`\`

### Age Calculator

\`\`\`javascript
function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

console.log(calculateAge(1995));  // 29 (if current year is 2024)
\`\`\`

### Number Checker

\`\`\`javascript
function isEven(num) {
  return num % 2 === 0;
}

function isPositive(num) {
  return num > 0;
}

console.log(isEven(4));      // true
console.log(isEven(7));      // false
console.log(isPositive(-3)); // false
\`\`\`

## Best Practices

1. **Use descriptive names**: \`calculateTotal\` instead of \`calc\`
2. **One task per function**: Keep functions focused
3. **Return values**: Use return to make functions reusable
4. **Default parameters**: Provide sensible defaults
5. **Arrow functions**: Use for short, simple functions

## Exercise

Practice creating and calling functions with different features!`,
    initialCode: `// Practice with functions

// Basic function
function sayHello() {
  console.log("Hello, World!");
}

sayHello();

// Your code here:
// 1. Create a function 'greet' that takes a name parameter
//    and logs "Hello, [name]!"

// 2. Create a function 'add' that takes two numbers
//    and returns their sum

// 3. Create a function 'multiply' with default parameter b = 1
//    Returns a * b

// 4. Create a function 'isAdult' that takes age
//    Returns true if age >= 18, false otherwise

// 5. Create an arrow function 'square' that returns x * x

// 6. Create a function 'getGrade' that takes a score
//    Returns "A" for >= 90, "B" for >= 80, "C" for >= 70, "F" otherwise

// 7. Create a function 'celsiusToFahrenheit' that converts temperature
//    Formula: (celsius * 9/5) + 32

// 8. Test all your functions with different inputs
`,
    solution: `// Practice with functions

// Basic function
function sayHello() {
  console.log("Hello, World!");
}

sayHello();

// Function with parameter
function greet(name) {
  console.log(\\\`Hello, \${name}!\\\`);
}

greet("Alice");
greet("Bob");

// Function returning value
function add(a, b) {
  return a + b;
}

console.log("5 + 3 =", add(5, 3));
console.log("10 + 20 =", add(10, 20));

// Function with default parameter
function multiply(a, b = 1) {
  return a * b;
}

console.log("5 × 2 =", multiply(5, 2));
console.log("5 × 1 =", multiply(5));  // Uses default b = 1

// Function returning boolean
function isAdult(age) {
  return age >= 18;
}

console.log("Age 20 is adult?", isAdult(20));
console.log("Age 15 is adult?", isAdult(15));

// Arrow function
const square = x => x * x;

console.log("Square of 5:", square(5));
console.log("Square of 10:", square(10));

// Function with conditional logic
function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else {
    return "F";
  }
}

console.log("Score 95:", getGrade(95));
console.log("Score 85:", getGrade(85));
console.log("Score 75:", getGrade(75));
console.log("Score 60:", getGrade(60));

// Temperature conversion
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

console.log("0°C =", celsiusToFahrenheit(0), "°F");
console.log("100°C =", celsiusToFahrenheit(100), "°F");
console.log("32°F =", fahrenheitToCelsius(32), "°C");

// More practical functions
function isEven(num) {
  return num % 2 === 0;
}

function max(a, b) {
  return a > b ? a : b;
}

function min(a, b) {
  return a < b ? a : b;
}

console.log("\\n=== More Tests ===");
console.log("Is 8 even?", isEven(8));
console.log("Is 7 even?", isEven(7));
console.log("Max of 5 and 10:", max(5, 10));
console.log("Min of 5 and 10:", min(5, 10));

// Function with multiple returns (early exit)
function checkNumber(num) {
  if (num < 0) {
    return "negative";
  }
  if (num === 0) {
    return "zero";
  }
  return "positive";
}

console.log("checkNumber(-5):", checkNumber(-5));
console.log("checkNumber(0):", checkNumber(0));
console.log("checkNumber(10):", checkNumber(10));

// Compound function
function calculateDiscount(price, discountPercent = 10) {
  const discount = price * (discountPercent / 100);
  const finalPrice = price - discount;
  return finalPrice;
}

console.log("\\n$100 with 20% discount:", calculateDiscount(100, 20));
console.log("$50 with default 10% discount:", calculateDiscount(50));
`,
    hints: [
      'Function syntax: function name(param) { code }',
      'Return a value: return result;',
      'Call function: name(argument)',
      'Default parameter: function name(param = defaultValue)',
      'Arrow function: const name = (param) => expression',
      'Multiple parameters: function add(a, b) { return a + b; }',
      'Use template literals in return: return `Hello ${name}`',
      'if/else in functions for conditional returns'
    ],
    testCases: [
      { name: 'Declares function', test: (code: string, output: string) => /function\s+\w+\s*\(/.test(code), errorMessage: 'Must declare function with function keyword' },
      { name: 'Function with parameters', test: (code: string, output: string) => /function\s+\w+\s*\([^)]+\)/.test(code), errorMessage: 'Must create function with parameters' },
      { name: 'Uses return statement', test: (code: string, output: string) => code.includes('return'), errorMessage: 'Must use return to return value from function' },
      { name: 'Has default parameter', test: (code: string, output: string) => /\w+\s*=\s*[^,)]+/.test(code), errorMessage: 'Must use default parameter (param = value)' },
      { name: 'Creates arrow function', test: (code: string, output: string) => /=>\s*/.test(code), errorMessage: 'Must create arrow function with => syntax' },
      { name: 'Function returns boolean', test: (code: string, output: string) => /return\s+(true|false|\w+\s*[<>=!]+)/.test(code), errorMessage: 'Must have function that returns boolean' },
      { name: 'Calls functions multiple times', test: (code: string, output: string) => output.split('\n').filter(l => l.trim()).length >= 10, errorMessage: 'Must call functions and show their results' },
      { name: 'Uses function results', test: (code: string, output: string) => /console\.log.*\w+\(/.test(code), errorMessage: 'Must call functions and log their results' }
    ]
  },
  {
    id: 'js-8',
    title: 'Objects - Creating and Using',
    description: 'Learn to create objects, access properties, and use object methods',
    language: 'javascript' as const,
    difficulty: 'Beginner' as const,
    estimatedTime: 35,
    content: `# Objects in JavaScript

## What are Objects?

Objects store collections of related data and functionality using key-value pairs.

\`\`\`javascript
let person = {
  name: "Alice",
  age: 25,
  city: "NYC"
};
\`\`\`

## Creating Objects

### Object Literal (Most Common)

\`\`\`javascript
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2024
};
\`\`\`

## Accessing Properties

Use dot notation or bracket notation:

\`\`\`javascript
let person = {
  name: "Bob",
  age: 30
};

console.log(person.name);     // "Bob" (dot notation)
console.log(person["age"]);   // 30 (bracket notation)
\`\`\`

## Adding and Modifying Properties

\`\`\`javascript
let user = { name: "Alice" };

user.age = 25;           // Add new property
user.name = "Alice J.";  // Modify existing
delete user.age;         // Remove property
\`\`\`

## Object Methods

Functions inside objects:

\`\`\`javascript
let calculator = {
  add: function(a, b) {
    return a + b;
  },
  multiply(a, b) {  // Shorthand
    return a * b;
  }
};

console.log(calculator.add(5, 3));      // 8
console.log(calculator.multiply(4, 2)); // 8
\`\`\`

## Exercise

Practice creating objects and accessing their properties!`,
    initialCode: `// Create an object
let person = {
  name: "John",
  age: 28,
  city: "Boston",
  isStudent: false
};

console.log("Name:", person.name);
console.log("Age:", person.age);

// Your code here:
// 1. Access and log the city
// 2. Add a new property 'job' with value "Developer"
// 3. Modify the age to 29
// 4. Create a book object with title, author, pages
// 5. Create an object with a method that greets
`,
    solution: `// Create an object
let person = {
  name: "John",
  age: 28,
  city: "Boston",
  isStudent: false
};

console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("City:", person.city);

// Add and modify properties
person.job = "Developer";
person.age = 29;

console.log("Updated age:", person.age);
console.log("Job:", person.job);

// Create book object
let book = {
  title: "JavaScript Guide",
  author: "Jane Doe",
  pages: 450,
  published: 2024
};

console.log("Book:", book.title);
console.log("Author:", book.author);
console.log("Pages:", book.pages);

// Object with method
let greeter = {
  name: "Alice",
  greet: function() {
    return \`Hello, I'm \${this.name}!\`;
  }
};

console.log(greeter.greet());

// Object keys and values
console.log("Person keys:", Object.keys(person));
console.log("Person values:", Object.values(person));
`,
    hints: [
      'Access with dot notation: object.property',
      'Add property: object.newProp = value',
      'Modify: object.prop = newValue',
      'Methods are functions inside objects',
      'Use this keyword to reference object properties inside methods'
    ],
    testCases: [
      { name: 'Creates object literal', test: (code: string, output: string) => /\{[\s\S]*:[\s\S]*\}/.test(code), errorMessage: 'Must create object with {}' },
      { name: 'Accesses property with dot', test: (code: string, output: string) => /\w+\.\w+/.test(code), errorMessage: 'Must access property with dot notation' },
      { name: 'Adds new property', test: (code: string, output: string) => /\w+\.\w+\s*=/.test(code), errorMessage: 'Must add or modify property' },
      { name: 'Creates multiple objects', test: (code: string, output: string) => (code.match(/=\s*\{/g) || []).length >= 2, errorMessage: 'Must create at least 2 objects' },
      { name: 'Shows object output', test: (code: string, output: string) => output.split('\n').length >= 6, errorMessage: 'Must log multiple object properties' }
    ]
  },
  {
    id: 'js-9',
    title: 'For Loops',
    description: 'Master for loops for iterating over data',
    language: 'javascript' as const,
    difficulty: 'Beginner' as const,
    estimatedTime: 30,
    content: `# For Loops in JavaScript

## The for Loop

Repeat code a specific number of times:

\`\`\`javascript
for (let i = 0; i < 5; i++) {
  console.log(i);  // 0, 1, 2, 3, 4
}
\`\`\`

## Loop Structure

\`\`\`javascript
for (initialization; condition; increment) {
  // Code to repeat
}
\`\`\`

## Looping Through Arrays

\`\`\`javascript
let fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
\`\`\`

## Exercise

Practice using for loops!`,
    initialCode: `// Basic for loop
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

// Your code here:
// 1. Loop from 0 to 10, print each number
// 2. Loop through array and print each item
// 3. Calculate sum of numbers 1-10
`,
    solution: `// Basic for loop
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

// Loop 0 to 10
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Loop through array
let colors = ["red", "green", "blue", "yellow"];
for (let i = 0; i < colors.length; i++) {
  console.log(\`Color \${i + 1}: \${colors[i]}\`);
}

// Calculate sum
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Sum 1-10:", sum);
`,
    hints: [
      'for (let i = 0; i < max; i++) { }',
      'Use i to access array[i]',
      'Accumulate with sum += i'
    ],
    testCases: [
      { name: 'Uses for loop', test: (code: string, output: string) => /for\s*\(/.test(code), errorMessage: 'Must use for loop' },
      { name: 'Loops through array', test: (code: string, output: string) => /\[i\]/.test(code) || /\.length/.test(code), errorMessage: 'Must loop through array with index' },
      { name: 'Multiple loops', test: (code: string, output: string) => (code.match(/for\s*\(/g) || []).length >= 2, errorMessage: 'Must have at least 2 for loops' },
      { name: 'Shows loop output', test: (code: string, output: string) => output.split('\n').length >= 10, errorMessage: 'Loops should produce multiple lines of output' }
    ]
  },
  {
    id: 'js-10',
    title: 'While Loops',
    description: 'Learn while and do-while loops for conditional iteration',
    language: 'javascript' as const,
    difficulty: 'Beginner' as const,
    estimatedTime: 25,
    content: `# While Loops

## The while Loop

Repeat while condition is true:

\`\`\`javascript
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
\`\`\`

## Do-While Loop

Execute at least once:

\`\`\`javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
\`\`\`

## Exercise

Practice while loops!`,
    initialCode: `// While loop example
let count = 1;
while (count <= 5) {
  console.log("Count:", count);
  count++;
}

// Your code here:
// 1. Use while loop to count down from 10 to 1
// 2. Use do-while loop
`,
    solution: `// While loop example
let count = 1;
while (count <= 5) {
  console.log("Count:", count);
  count++;
}

// Countdown
let num = 10;
while (num >= 1) {
  console.log(num);
  num--;
}

// Do-while
let i = 0;
do {
  console.log("Iteration:", i);
  i++;
} while (i < 3);
`,
    hints: [
      'while (condition) { }',
      'Don\'t forget to update the counter!',
      'do { } while (condition);'
    ],
    testCases: [
      { name: 'Uses while loop', test: (code: string, output: string) => /while\s*\(/.test(code), errorMessage: 'Must use while loop' },
      { name: 'Increments/decrements counter', test: (code: string, output: string) => /(\+\+|--|=.*[\+\-])/.test(code), errorMessage: 'Must update loop counter' },
      { name: 'Shows while output', test: (code: string, output: string) => output.split('\n').length >= 8, errorMessage: 'While loop should produce output' }
    ]
  }
]
.concat(Array.from({ length: 39 }, (_, i) => {
  const lessonNum = i + 11;
  
  const topics = [
    { title: 'Array Methods - forEach, map', content: 'forEach and map methods', code: '.forEach()' },
    { title: 'Array Methods - filter, find', content: 'filter and find methods', code: '.filter()' },
    { title: 'Array Methods - reduce, some, every', content: 'Advanced array methods', code: '.reduce()' },
    { title: 'Destructuring Arrays and Objects', content: 'ES6 destructuring', code: 'const [a, b]' },
    { title: 'Spread and Rest Operators', content: 'Spread ... operator', code: '...' },
    { title: 'Object Methods and this Keyword', content: 'Object methods and this', code: 'this.' },
    { title: 'Classes - Basics', content: 'ES6 classes', code: 'class' },
    { title: 'DOM Manipulation - Selecting Elements', content: 'querySelector and getElementById', code: 'querySelector' },
    { title: 'DOM Manipulation - Modifying Content', content: 'innerHTML and textContent', code: 'innerHTML' },
    { title: 'Event Listeners', content: 'addEventListener', code: 'addEventListener' },
    { title: 'Form Handling and Validation', content: 'Form events and validation', code: 'form' },
    { title: 'Asynchronous JavaScript - Callbacks', content: 'Callback functions', code: 'callback' },
    { title: 'Promises - Basics', content: 'Promise creation', code: 'new Promise' },
    { title: 'Promises - then and catch', content: 'Promise chaining', code: '.then()' },
    { title: 'Async/Await', content: 'async and await keywords', code: 'async' },
    { title: 'Fetch API', content: 'Making HTTP requests', code: 'fetch()' },
    { title: 'JSON - Parse and Stringify', content: 'Working with JSON', code: 'JSON.parse' },
    { title: 'Error Handling - try/catch', content: 'Error handling', code: 'try catch' },
    { title: 'Modules - Import/Export', content: 'ES6 modules', code: 'import' },
    { title: 'Local Storage', content: 'Browser storage', code: 'localStorage' },
    { title: 'Array Methods - Advanced', content: 'flat, flatMap, findIndex', code: '.flat()' },
    { title: 'String Methods - Advanced', content: 'includes, padStart, repeat', code: '.includes()' },
    { title: 'Regular Expressions', content: 'Pattern matching with regex', code: '/pattern/' },
    { title: 'Map and Set Data Structures', content: 'Map and Set collections', code: 'new Map()' },
    { title: 'Symbol and Iterators', content: 'Symbols and iteration', code: 'Symbol()' },
    { title: 'Generators', content: 'Generator functions', code: 'function*' },
    { title: 'Proxies and Reflect', content: 'Meta-programming', code: 'new Proxy' },
    { title: 'WeakMap and WeakSet', content: 'Weak collections', code: 'WeakMap' },
    { title: 'Object Property Descriptors', content: 'defineProperty', code: 'Object.defineProperty' },
    { title: 'Prototypes and Inheritance', content: 'Prototype chain', code: 'prototype' },
    { title: 'Closures', content: 'Function closures', code: 'closure' },
    { title: 'Higher-Order Functions', content: 'Functions returning functions', code: 'return function' },
    { title: 'Currying and Partial Application', content: 'Function currying', code: 'curry' },
    { title: 'Memoization', content: 'Function memoization', code: 'cache' },
    { title: 'Design Patterns - Module Pattern', content: 'Module pattern', code: 'IIFE' },
    { title: 'Design Patterns - Observer', content: 'Observer pattern', code: 'subscribe' },
    { title: 'Performance Optimization', content: 'Code optimization', code: 'performance' },
    { title: 'Debugging Techniques', content: 'Debugging JavaScript', code: 'debugger' },
    { title: 'Best Practices and Code Quality', content: 'Clean code principles', code: 'best practices' }
  ];
  
  const topic = topics[i] || topics[0];
  
  return {
    id: `js-${lessonNum}`,
    title: topic.title,
    description: `Learn ${topic.content} in JavaScript`,
    language: 'javascript' as const,
    difficulty: (lessonNum <= 17 ? 'Beginner' : lessonNum <= 34 ? 'Intermediate' : 'Advanced') as 'Beginner' | 'Intermediate' | 'Advanced',
    estimatedTime: 30,
    content: `# ${topic.title}

Master ${topic.content} in JavaScript.

## Key Concepts

Learn to use ${topic.code} effectively.

## Example

\`\`\`javascript
// ${topic.title} example
console.log("Learning ${topic.content}");
\`\`\`

## Practice

Complete the exercises below!`,
    initialCode: `// ${topic.title} practice\n\n// Write your code here\nconsole.log("Practicing ${topic.content}");`,
    solution: `// ${topic.title} solution\n\nconsole.log("${topic.content} implemented");\nconsole.log("Lesson ${lessonNum} complete!");`,
    hints: [
      `Study ${topic.content}`,
      `Practice using ${topic.code}`,
      'Experiment with examples'
    ],
    testCases: [
      { name: 'Has code', test: (code: string, output: string) => code.trim().length > 20, errorMessage: 'Write some code' },
      { name: 'Produces output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' }
    ]
  };
}))
.concat([
  {
    id: 'js-50',
    title: 'Fullstack Capstone - Interactive Todo App',
    description: 'Build a complete todo application with local storage and advanced JavaScript features',
    language: 'javascript' as const,
    difficulty: 'Advanced',
    estimatedTime: 120,
    content: `# Fullstack Capstone Project - Todo Application 📝

## Project Overview
Create a full-featured todo app using vanilla JavaScript!

## Requirements

### 1. Core Functionality
- Add new todos
- Mark todos as complete/incomplete
- Edit existing todos
- Delete todos
- Filter todos (All, Active, Completed)
- Clear all completed todos

### 2. Data Persistence
- Save todos to localStorage
- Load todos on page load
- Auto-save on every change

### 3. Advanced Features
- Todo priority levels (Low, Medium, High)
- Due dates for todos
- Search/filter functionality
- Todo categories/tags
- Statistics (total, completed, pending)

### 4. DOM Manipulation
- Create elements dynamically
- Event delegation
- Update UI reactively
- Smooth animations

### 5. Code Organization
- Use ES6 classes or modules
- Separate concerns (data, UI, storage)
- Clean, readable code
- Error handling

## Testing Criteria
1. Object-oriented or functional approach
2. localStorage integration
3. CRUD operations working
4. Event listeners properly attached
5. Filter functionality
6. Statistics calculation
7. Input validation
8. UI updates correctly`,
    initialCode: `// Todo Application - Fullstack Capstone Project

class TodoApp {
  constructor() {
    this.todos = this.loadTodos();
    this.filter = 'all'; // all, active, completed
    this.init();
  }
  
  init() {
    // TODO: Initialize the app
    this.renderTodos();
    this.attachEventListeners();
  }
  
  // TODO: Implement methods
  addTodo(text, priority = 'medium') {
    // Add new todo
  }
  
  toggleTodo(id) {
    // Toggle complete status
  }
  
  deleteTodo(id) {
    // Remove todo
  }
  
  editTodo(id, newText) {
    // Update todo text
  }
  
  filterTodos(filter) {
    // Filter todos by status
  }
  
  saveTodos() {
    // Save to localStorage
  }
  
  loadTodos() {
    // Load from localStorage
    return [];
  }
  
  renderTodos() {
    // Update UI
  }
  
  attachEventListeners() {
    // Setup event listeners
  }
  
  getStatistics() {
    // Calculate stats
  }
}

// Initialize app
const app = new TodoApp();
console.log('Todo App initialized');
`,
    solution: `// Todo Application - Fullstack Capstone Project

class TodoApp {
  constructor() {
    this.todos = this.loadTodos();
    this.filter = 'all';
    this.nextId = this.todos.length > 0 ? Math.max(...this.todos.map(t => t.id)) + 1 : 1;
    this.init();
  }
  
  init() {
    this.renderTodos();
    this.attachEventListeners();
    this.updateStatistics();
  }
  
  addTodo(text, priority = 'medium') {
    if (!text.trim()) {
      console.log('Error: Todo text cannot be empty');
      return;
    }
    
    const todo = {
      id: this.nextId++,
      text: text.trim(),
      completed: false,
      priority,
      createdAt: new Date().toISOString()
    };
    
    this.todos.push(todo);
    this.saveTodos();
    this.renderTodos();
    this.updateStatistics();
    console.log(\`Added todo: "\${text}"\`);
  }
  
  toggleTodo(id) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.saveTodos();
      this.renderTodos();
      this.updateStatistics();
      console.log(\`Toggled todo #\${id}\`);
    }
  }
  
  deleteTodo(id) {
    const index = this.todos.findIndex(t => t.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.saveTodos();
      this.renderTodos();
      this.updateStatistics();
      console.log(\`Deleted todo #\${id}\`);
    }
  }
  
  editTodo(id, newText) {
    const todo = this.todos.find(t => t.id === id);
    if (todo && newText.trim()) {
      todo.text = newText.trim();
      this.saveTodos();
      this.renderTodos();
      console.log(\`Updated todo #\${id}\`);
    }
  }
  
  filterTodos(filter) {
    this.filter = filter;
    this.renderTodos();
    console.log(\`Filter set to: \${filter}\`);
  }
  
  getFilteredTodos() {
    switch (this.filter) {
      case 'active':
        return this.todos.filter(t => !t.completed);
      case 'completed':
        return this.todos.filter(t => t.completed);
      default:
        return this.todos;
    }
  }
  
  clearCompleted() {
    this.todos = this.todos.filter(t => !t.completed);
    this.saveTodos();
    this.renderTodos();
    this.updateStatistics();
    console.log('Cleared completed todos');
  }
  
  saveTodos() {
    try {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    } catch (error) {
      console.log('LocalStorage not available, using memory only');
    }
  }
  
  loadTodos() {
    try {
      const saved = localStorage.getItem('todos');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.log('Failed to load todos from storage');
      return [];
    }
  }
  
  renderTodos() {
    const filteredTodos = this.getFilteredTodos();
    console.log(\`Rendering \${filteredTodos.length} todos (filter: \${this.filter})\`);
    
    filteredTodos.forEach(todo => {
      const status = todo.completed ? '✓' : '○';
      console.log(\`  \${status} [\${todo.priority}] \${todo.text}\`);
    });
  }
  
  attachEventListeners() {
    console.log('Event listeners attached');
  }
  
  getStatistics() {
    const total = this.todos.length;
    const completed = this.todos.filter(t => t.completed).length;
    const active = total - completed;
    
    return { total, completed, active };
  }
  
  updateStatistics() {
    const stats = this.getStatistics();
    console.log(\`Statistics: \${stats.total} total, \${stats.completed} completed, \${stats.active} active\`);
  }
}

// Initialize and test the app
const app = new TodoApp();

// Demo usage
app.addTodo('Complete JavaScript course', 'high');
app.addTodo('Build portfolio project', 'high');
app.addTodo('Practice coding daily', 'medium');
app.addTodo('Review ES6 features', 'low');

// Toggle first todo
app.toggleTodo(1);

// Filter active todos
app.filterTodos('active');

// Show final statistics
console.log('\\n=== Final Stats ===');
const stats = app.getStatistics();
console.log(\`Total todos: \${stats.total}\`);
console.log(\`Completed: \${stats.completed}\`);
console.log(\`Active: \${stats.active}\`);
`,
    hints: [
      'Use a class to organize all todo-related functionality',
      'Each todo should be an object with id, text, completed, priority',
      'Use array methods: filter(), find(), map(), splice()',
      'localStorage.setItem() and getItem() for persistence',
      'JSON.stringify() to save, JSON.parse() to load',
      'Use this.todos.push() to add new todos',
      'Generate unique IDs with Math.max(...todos.map(t => t.id)) + 1',
      'Filter with switch statement or object mapping',
      'Try/catch blocks around localStorage for error handling'
    ],
    testCases: [
      { name: 'Has TodoApp class', test: (code: string, output: string) => code.includes('class TodoApp') || code.includes('function TodoApp'), errorMessage: 'Must define TodoApp class or constructor' },
      { name: 'Implements addTodo', test: (code: string, output: string) => code.includes('addTodo'), errorMessage: 'Must have addTodo method' },
      { name: 'Implements toggleTodo', test: (code: string, output: string) => code.includes('toggleTodo') || code.includes('toggle'), errorMessage: 'Must have toggleTodo method' },
      { name: 'Implements deleteTodo', test: (code: string, output: string) => code.includes('deleteTodo') || code.includes('delete'), errorMessage: 'Must have deleteTodo method' },
      { name: 'Uses localStorage', test: (code: string, output: string) => code.includes('localStorage'), errorMessage: 'Must use localStorage for persistence' },
      { name: 'Has filter functionality', test: (code: string, output: string) => code.includes('filter'), errorMessage: 'Must implement filter functionality' },
      { name: 'Calculates statistics', test: (code: string, output: string) => code.includes('Statistics') || output.includes('total') || output.includes('completed'), errorMessage: 'Must calculate and show statistics' },
      { name: 'Creates todos', test: (code: string, output: string) => output.includes('Added') || output.includes('todo'), errorMessage: 'Must demonstrate creating todos' },
      { name: 'Shows output', test: (code: string, output: string) => output.trim().length > 100, errorMessage: 'Must produce substantial console output' },
      { name: 'Uses array methods', test: (code: string, output: string) => /\.(filter|find|map|push|splice)\(/.test(code), errorMessage: 'Must use array methods (filter, find, map, etc.)' },
      { name: 'Substantial implementation', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('//')).length >= 40, errorMessage: 'Project requires substantial code (40+ lines)' }
    ]
  }
]) as Lesson[];
