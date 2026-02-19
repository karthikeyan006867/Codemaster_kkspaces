import { Lesson } from '../courses'

export const pythonLessons: Lesson[] = [
  {
    id: 'python-1',
    title: 'Python Basics - Your First Program',
    description: 'Learn Python syntax, variables, and the print() function',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Welcome to Python Programming! 🐍

Python is one of the most popular and versatile programming languages in the world, used for web development, data science, AI, automation, and more!

## Your First Python Program

Every Python journey starts with "Hello, World!":

\`\`\`python
print("Hello, World!")
\`\`\`

The \`print()\` function displays output to the console. You can print text, numbers, or variables.

## Variables in Python

Variables store data that you can reuse and manipulate:

\`\`\`python
# String variable
name = "Alice"

# Integer variable
age = 25

# Float variable
height = 5.7

# Boolean variable
is_student = True
\`\`\`

**Key Points:**
- Variables don't need type declarations (Python figures it out automatically)
- Use descriptive names (e.g., \`user_age\` not \`x\`)
- Follow snake_case convention for variable names

## F-Strings (Formatted Strings)

F-strings make it easy to insert variables into text:

\`\`\`python
name = "Alice"
age = 25
print(f"Hi, I'm {name} and I'm {age} years old")
# Output: Hi, I'm Alice and I'm 25 years old
\`\`\`

You can also do calculations inside f-strings:

\`\`\`python
print(f"Next year I'll be {age + 1} years old")
\`\`\`

## Challenge
Create variables for your name, age, and favorite hobby. Then print a personalized greeting using an f-string that includes all three!`,
    initialCode: `# Create your variables
name = "Your Name"
age = 20
hobby = "coding"

# Print greeting using f-string
print(f"Hello! I'm {name}, I'm {age} years old, and I love {hobby}!")
`,
    solution: `name = "Alice"
age = 25
hobby = "programming"
print(f"Hello! I'm {name}, I'm {age} years old, and I love {hobby}!")`,
    hints: [
      'Use f"..." for f-strings with curly braces {} for variables',
      'String values need quotes, numbers don\'t',
      'Make sure your greeting includes all three variables',
      'Variables are case-sensitive: name vs Name are different'
    ],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses print', test: (code: string, output: string) => code.includes('print('), errorMessage: 'Must use print() function' },
      { name: 'Creates variables', test: (code: string, output: string) => code.includes('name =') && code.includes('age ='), errorMessage: 'Must create name and age variables' },
      { name: 'Uses f-string', test: (code: string, output: string) => code.includes('f"') || code.includes("f'"), errorMessage: 'Must use f-string formatting (f"...")' },
      { name: 'Shows name', test: (code: string, output: string) => /[A-Za-z]{2,}/.test(output), errorMessage: 'Output should include a name (letters)' },
      { name: 'Shows age', test: (code: string, output: string) => /\d+/.test(output), errorMessage: 'Output should show age (a number)' },
      { name: 'Includes hobby', test: (code: string, output: string) => output.split(' ').length >= 8, errorMessage: 'Output should be descriptive and include your hobby' }
    ]
  },
  {
    id: 'python-2',
    title: 'Math Operations',
    description: 'Perform calculations and use arithmetic operators',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Python Math Operations 🔢

Python can perform all standard mathematical operations and more!

## Basic Arithmetic Operators

\`\`\`python
# Addition
result = 10 + 5    # 15

# Subtraction
result = 10 - 3    # 7

# Multiplication
result = 4 * 6     # 24

# Division (always returns float)
result = 20 / 4    # 5.0

# Floor Division (returns integer)
result = 20 // 4   # 5
result = 21 // 4   # 5 (rounds down)

# Modulo (remainder)
result = 17 % 5    # 2

# Exponentiation (power)
result = 2 ** 3    # 8 (2 to the power of 3)
\`\`\`

## Order of Operations

Python follows PEMDAS (Parentheses, Exponents, Multiplication/Division, Addition/Subtraction):

\`\`\`python
result = 2 + 3 * 4      # 14 (multiplication first)
result = (2 + 3) * 4    # 20 (parentheses first)
result = 10 + 2 ** 3    # 18 (exponent first: 10 + 8)
\`\`\`

## Practical Examples

\`\`\`python
# Calculate area of a rectangle
length = 10
width = 5
area = length * width
print(f"Area: {area} square units")

# Convert temperature from Celsius to Fahrenheit
celsius = 25
fahrenheit = (celsius * 9/5) + 32
print(f"{celsius}°C = {fahrenheit}°F")
\`\`\`

## Challenge
Create a calculator that performs multiple operations:
1. Calculate 50 + 25
2. Calculate 100 - 30
3. Calculate 8 * 7
4. Calculate 81 / 9
5. Calculate 2 to the power of 5

Print each result with a descriptive label.`,
    initialCode: `# Calculator Program

# Perform calculations
addition = 50 + 25
subtraction = 100 - 30
multiplication = 8 * 7
division = 81 / 9
power = 2 ** 5

# Print results with labels
print(f"Addition: 50 + 25 = {addition}")
print(f"Subtraction: 100 - 30 = {subtraction}")
print(f"Multiplication: 8 * 7 = {multiplication}")
print(f"Division: 81 / 9 = {division}")
print(f"Power: 2^5 = {power}")
`,
    solution: `addition = 50 + 25
subtraction = 100 - 30
multiplication = 8 * 7
division = 81 / 9
power = 2 ** 5

print(f"Addition: 50 + 25 = {addition}")
print(f"Subtraction: 100 - 30 = {subtraction}")
print(f"Multiplication: 8 * 7 = {multiplication}")
print(f"Division: 81 / 9 = {division}")
print(f"Power: 2^5 = {power}")`,
    hints: [
      'Use +, -, *, /, and ** for operations',
      'Store each result in a variable',
      'Use f-strings to print descriptive labels',
      'Remember: 2 ** 5 means 2 to the power of 5'
    ],
    testCases: [
      { name: 'Shows 75', test: (code: string, output: string) => output.includes('75'), errorMessage: 'Should show 50 + 25 = 75' },
      { name: 'Shows 70', test: (code: string, output: string) => output.includes('70'), errorMessage: 'Should show 100 - 30 = 70' },
      { name: 'Shows 56', test: (code: string, output: string) => output.includes('56'), errorMessage: 'Should show 8 * 7 = 56' },
      { name: 'Shows division', test: (code: string, output: string) => output.includes('9'), errorMessage: 'Should show 81 / 9 = 9' },
      { name: 'Shows power', test: (code: string, output: string) => output.includes('32'), errorMessage: 'Should show 2^5 = 32' },
      { name: 'Multiple outputs', test: (code: string, output: string) => output.split('\n').length >= 5, errorMessage: 'Should print at least 5 calculations' },
      { name: 'Uses arithmetic', test: (code: string, output: string) => code.includes('+') && code.includes('*'), errorMessage: 'Must use arithmetic operators' }
    ]
  },
  {
    id: 'python-3',
    title: 'Conditionals - If/Else',
    description: 'Make decisions with if/else statements',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Conditionals - Making Decisions 🤔

Conditionals allow your program to make decisions and execute different code based on conditions.

## Basic If Statement

\`\`\`python
age = 18
if age >= 18:
    print("You are an adult")
\`\`\`

**Important:** Python uses **indentation** (4 spaces or 1 tab) to define code blocks!

## If-Else Statement

\`\`\`python
age = 16
if age >= 18:
    print("You can vote")
else:
    print("Too young to vote")
\`\`\`

## If-Elif-Else Statement

For multiple conditions:

\`\`\`python
score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")
\`\`\`

## Comparison Operators

- \`==\` Equal to
- \`!=\` Not equal to
- \`>\` Greater than
- \`<\` Less than
- \`>=\` Greater than or equal to
- \`<=\` Less than or equal to

## Logical Operators

Combine multiple conditions:

\`\`\`python
age = 20
has_license = True

if age >= 18 and has_license:
    print("Can drive")

# OR operator
if age < 18 or age > 65:
    print("Discounted ticket")

# NOT operator
if not has_license:
    print("Need a license")
\`\`\`

## Challenge
Create a voting eligibility checker:
- Set an age variable
- If age >= 18, print "Can vote"
- If age >= 16 but < 18, print "Can pre-register"
- Otherwise, print "Too young"`,
    initialCode: `# Voting eligibility checker
age = 20

# Check voting eligibility with if-elif-else
if age >= 18:
    print("Can vote")
elif age >= 16:
    print("Can pre-register to vote")
else:
    print("Too young to vote")
`,
    solution: `age = 20

if age >= 18:
    print("Can vote")
elif age >= 16:
    print("Can pre-register to vote")
else:
    print("Too young to vote")`,
    hints: [
      'Use if age >= 18: for adults',
      'Use elif age >= 16: for pre-registration',
      'Use else: for under 16',
      'Remember: indentation is crucial in Python!',
      'Check conditions from highest to lowest'
    ],
    testCases: [
      { name: 'Has if statement', test: (code: string, output: string) => code.includes('if'), errorMessage: 'Must use if statement' },
      { name: 'Has elif or else', test: (code: string, output: string) => code.includes('elif') || code.includes('else'), errorMessage: 'Should use elif or else for multiple conditions' },
      { name: 'Checks age >= 18', test: (code: string, output: string) => />=?\s*18|18\s*<=?/.test(code), errorMessage: 'Must check if age >= 18' },
      { name: 'Has output', test: (code: string, output: string) => output.length > 0, errorMessage: 'Code must produce output' },
      { name: 'Mentions voting', test: (code: string, output: string) => output.toLowerCase().includes('vote') || output.toLowerCase().includes('young') || output.toLowerCase().includes('register'), errorMessage: 'Output should mention voting eligibility' }
    ]
  },
  {
    id: 'python-4',
    title: 'Lists - Collections of Data',
    description: 'Work with Python lists to store multiple values',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Python Lists 📋

Lists are ordered, changeable collections that can store multiple items.

## Creating Lists

\`\`\`python
# List of strings
fruits = ["apple", "banana", "orange"]

# List of numbers
numbers = [1, 2, 3, 4, 5]

# Mixed types (possible but not recommended)
mixed = ["Hello", 42, True, 3.14]

# Empty list
empty = []
\`\`\`

## Accessing Elements

Lists use **zero-based indexing** (first item is at index 0):

\`\`\`python
fruits = ["apple", "banana", "orange"]

print(fruits[0])   # apple (first item)
print(fruits[1])   # banana (second item)
print(fruits[-1])  # orange (last item)
print(fruits[-2])  # banana (second to last)
\`\`\`

## List Methods

\`\`\`python
fruits = ["apple", "banana"]

# Add item to end
fruits.append("orange")
print(fruits)  # ["apple", "banana", "orange"]

# Insert at specific position
fruits.insert(1, "mango")
print(fruits)  # ["apple", "mango", "banana", "orange"]

# Remove item
fruits.remove("banana")

# Get list length
count = len(fruits)
print(count)  # 3
\`\`\`

## Useful List Operations

\`\`\`python
numbers = [1, 2, 3, 4, 5]

# Check if item exists
if 3 in numbers:
    print("Found it!")

# Get min, max, sum
print(min(numbers))  # 1
print(max(numbers))  # 5
print(sum(numbers))  # 15
\`\`\`

## Challenge
Create a shopping list:
1. Start with ["milk", "bread", "eggs"]
2. Add "cheese" to the list
3. Add "butter" to the list
4. Print the first item
5. Print the total number of items`,
    initialCode: `# Shopping list program

# Create initial list
shopping_list = ["milk", "bread", "eggs"]

# Add items
shopping_list.append("cheese")
shopping_list.append("butter")

# Print first item and total count
print(f"First item: {shopping_list[0]}")
print(f"Total items: {len(shopping_list)}")
`,
    solution: `shopping_list = ["milk", "bread", "eggs"]
shopping_list.append("cheese")
shopping_list.append("butter")

print(f"First item: {shopping_list[0]}")
print(f"Total items: {len(shopping_list)}")`,
    hints: [
      'Use square brackets [] to create a list',
      'Use .append(item) to add items to the end',
      'Access first item with [0]',
      'Use len(list) to get the count',
      'Remember: lists are zero-indexed!'
    ],
    testCases: [
      { name: 'Creates list', test: (code: string, output: string) => code.includes('[') && code.includes(']'), errorMessage: 'Must create a list with []' },
      { name: 'Uses append', test: (code: string, output: string) => code.includes('.append('), errorMessage: 'Must use .append() to add items' },
      { name: 'Shows count of 5', test: (code: string, output: string) => output.includes('5'), errorMessage: 'Should show 5 items after adding two more' },
      { name: 'Shows first item', test: (code: string, output: string) => output.toLowerCase().includes('milk') || /[a-z]{3,}/.test(output), errorMessage: 'Should show the first item (milk or other)' },
      { name: 'Uses indexing', test: (code: string, output: string) => code.includes('[0]'), errorMessage: 'Should access first item with [0]' },
      { name: 'Uses len()', test: (code: string, output: string) => code.includes('len('), errorMessage: 'Should use len() to get count' }
    ]
  },
  {
    id: 'python-5',
    title: 'Loops - Repeating Code',
    description: 'Repeat code with for and while loops',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 40,
    content: `# Loops - Automation and Repetition 🔁

Loops let you repeat code multiple times, which is essential for processing collections and automating tasks.

## For Loops with range()

The \`range()\` function generates a sequence of numbers:

\`\`\`python
# Print numbers 0 to 4
for i in range(5):
    print(i)
# Output: 0, 1, 2, 3, 4

# Start and end
for i in range(2, 6):
    print(i)
# Output: 2, 3, 4, 5

# With step
for i in range(0, 10, 2):
    print(i)
# Output: 0, 2, 4, 6, 8
\`\`\`

## For Loops with Lists

Loop through each item in a list:

\`\`\`python
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(f"I like {fruit}")

# Output:
# I like apple
# I like banana
# I like cherry
\`\`\`

## While Loops

Repeat while a condition is true:

\`\`\`python
count = 0
while count < 5:
    print(count)
    count += 1  # Increment by 1

# Output: 0, 1, 2, 3, 4
\`\`\`

**Warning:** Make sure your while loop's condition eventually becomes False, or you'll create an infinite loop!

## Practical Examples

\`\`\`python
# Sum all numbers in a list
numbers = [1, 2, 3, 4, 5]
total = 0

for num in numbers:
    total += num

print(f"Sum: {total}")  # 15

# Process each item
prices = [10.99, 5.50, 3.25]
for price in prices:
    discounted = price * 0.9  # 10% off
    print(f"Was ${price}, now ${discounted:.2f}")
\`\`\`

## Break and Continue

Control loop flow:

\`\`\`python
# break - exit loop immediately
for i in range(10):
    if i == 5:
        break  # Stop at 5
    print(i)
# Output: 0, 1, 2, 3, 4

# continue - skip to next iteration
for i in range(5):
    if i == 2:
        continue  # Skip 2
    print(i)
# Output: 0, 1, 3, 4
\`\`\`

## Challenge
Create a program that:
1. Creates a list of numbers [1, 2, 3, 4, 5]
2. Loops through the list
3. Multiplies each number by 2
4. Prints each result`,
    initialCode: `# Number doubling program

# Create list of numbers
numbers = [1, 2, 3, 4, 5]

# Loop through and double each number
for num in numbers:
    doubled = num * 2
    print(f"{num} doubled is {doubled}")
`,
    solution: `numbers = [1, 2, 3, 4, 5]

for num in numbers:
    doubled = num * 2
    print(f"{num} doubled is {doubled}")`,
    hints: [
      'Use for num in numbers: to loop through the list',
      'Multiply with num * 2 inside the loop',
      'Print each result using f-strings',
      'The loop body must be indented'
    ],
    testCases: [
      { name: 'Has for loop', test: (code: string, output: string) => code.includes('for '), errorMessage: 'Must use a for loop' },
      { name: 'Loops through list', test: (code: string, output: string) => code.includes('in '), errorMessage: 'Should loop through a list with "for x in list"' },
      { name: 'Shows 2', test: (code: string, output: string) => output.includes('2'), errorMessage: 'Output should include 2 (1*2)' },
      { name: 'Shows 10', test: (code: string, output: string) => output.includes('10'), errorMessage: 'Output should include 10 (5*2)' },
      { name: 'Shows 4', test: (code: string, output: string) => output.includes('4'), errorMessage: 'Output should include 4 (2*2)' },
      { name: 'Multiple lines', test: (code: string, output: string) => output.split('\n').filter(l => l.trim()).length >= 5, errorMessage: 'Should output 5 results' },
      { name: 'Uses multiplication', test: (code: string, output: string) => code.includes('* 2') || code.includes('*2'), errorMessage: 'Should multiply by 2' }
    ]
  },

  // Lessons 6-50: Comprehensive topics with proper validation
    {
    id: 'python-6',
    title: 'Functions - Reusable Code',
    description: 'Create and use functions to organize code',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 40,
    content: `# Functions - Building Reusable Code 🔧

Functions are reusable blocks of code that perform specific tasks. They help organize code and avoid repetition.

## Defining Functions

\`\`\`python
def greet(name):
    return f"Hello, {name}!"

# Call the function
message = greet("Alice")
print(message)  # Hello, Alice!
\`\`\`

**Function Syntax:**
- \`def\` keyword to define
- Function name (use snake_case)
- Parameters in parentheses
- Colon and indented code block
- \`return\` to send back a value

## Parameters and Arguments

\`\`\`python
def add(a, b):
    """Add two numbers together"""
    return a + b

result = add(5, 3)
print(result)  # 8

# Multiple parameters
def describe_person(name, age, city):
    return f"{name} is {age} years old and lives in {city}"

print(describe_person("Bob", 30, "NYC"))
\`\`\`

## Default Parameters

\`\`\`python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))           # Hello, Alice!
print(greet("Bob", "Hi"))       # Hi, Bob!
\`\`\`

## Return Values

\`\`\`python
# Return a single value
def square(n):
    return n ** 2

# Return multiple values
def get_stats(numbers):
    return min(numbers), max(numbers), sum(numbers)

minimum, maximum, total = get_stats([1, 2, 3, 4, 5])
print(f"Min: {minimum}, Max: {maximum}, Sum: {total}")
\`\`\`

## Functions Without Return

\`\`\`python
def print_greeting(name):
    print(f"Welcome, {name}!")
    # No return - function returns None

print_greeting("Alice")
\`\`\`

## Practical Example

\`\`\`python
def calculate_discount(price, percent):
    """Calculate price after discount"""
    discount_amount = price * (percent / 100)
    final_price = price - discount_amount
    return final_price

original = 100
discounted = calculate_discount(original, 20)
print(f"Original: ${original}, After 20% off: ${discounted}")
# Output: Original: $100, After 20% off: $80.0
\`\`\`

## Challenge
Create a function called \`cube(n)\` that returns n cubed (n³).
Test it with numbers 1 through 5 and print each result.`,
    initialCode: `# Create function that cubes a number
def cube(n):
    """Return n cubed (n to the power of 3)"""
    return n ** 3

# Test your function with numbers 1-5
print("Cubing numbers 1-5:")
for i in range(1, 6):
    result = cube(i)
    print(f"{i} cubed = {result}")
`,
    solution: `def cube(n):
    """Return n cubed (n to the power of 3)"""
    return n ** 3

print("Cubing numbers 1-5:")
for i in range(1, 6):
    result = cube(i)
    print(f"{i} cubed = {result}")`,
    hints: [
      'Use def cube(n): to define the function',
      'Return n ** 3 (n to the power of 3)',
      'Call cube(i) inside the loop',
      'Use f-strings to format output nicely',
      'Expected results: 1, 8, 27, 64, 125'
    ],
    testCases: [
      { name: 'Has function definition', test: (code: string, output: string) => code.includes('def '), errorMessage: 'Must define a function with def' },
      { name: 'Function named cube', test: (code: string, output: string) => code.includes('def cube('), errorMessage: 'Function should be named cube' },
      { name: 'Returns value', test: (code: string, output: string) => code.includes('return'), errorMessage: 'Function must return a value' },
      { name: 'Uses exponentiation', test: (code: string, output: string) => code.includes('**') || code.includes('pow('), errorMessage: 'Should use ** or pow() for cubing' },
      { name: 'Shows 1 cubed', test: (code: string, output: string) => output.includes('1'), errorMessage: 'Should show 1³ = 1' },
      { name: 'Shows 8 (2 cubed)', test: (code: string, output: string) => output.includes('8'), errorMessage: 'Should show 2³ = 8' },
      { name: 'Shows 27 (3 cubed)', test: (code: string, output: string) => output.includes('27'), errorMessage: 'Should show 3³ = 27' },
      { name: 'Shows 125 (5 cubed)', test: (code: string, output: string) => output.includes('125'), errorMessage: 'Should show 5³ = 125' },
      { name: 'Multiple outputs', test: (code: string, output: string) => output.split('\n').filter(l => l.trim()).length >= 5, errorMessage: 'Should print 5 results' }
    ]
  },
  {
    id: 'python-7',
    title: 'Dictionaries - Key-Value Pairs',
    description: 'Store and access data with dictionaries',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 40,
    content: `# Dictionaries - Structured Data Storage 📚

Dictionaries store data as key-value pairs, making it easy to organize and access related information.

## Creating Dictionaries

\`\`\`python
# Dictionary with different data types
person = {
    "name": "Alice",
    "age": 25,
    "city": "NYC",
    "is_student": True
}

print(person["name"])  # Alice
print(person["age"])   # 25
\`\`\`

**Key Points:**
- Use curly braces \`{}\`
- Keys and values separated by \`:\`
- Keys must be unique
- Keys are usually strings
- Values can be any data type

## Accessing Dictionary Values

\`\`\`python
person = {"name": "Bob", "age": 30}

# Access with square brackets
print(person["name"])  # Bob

# Safe access with .get()
print(person.get("age"))      # 30
print(person.get("email"))    # None (no error)
print(person.get("email", "N/A"))  # N/A (default value)
\`\`\`

## Modifying Dictionaries

\`\`\`python
person = {"name": "Alice", "age": 25}

# Update existing value
person["age"] = 26

# Add new key-value pair
person["job"] = "Developer"
person["email"] = "alice@email.com"

print(person)
# {'name': 'Alice', 'age': 26, 'job': 'Developer', 'email': 'alice@email.com'}
\`\`\`

## Dictionary Methods

\`\`\`python
person = {"name": "Alice", "age": 25, "city": "NYC"}

# Get all keys
keys = person.keys()
print(list(keys))  # ['name', 'age', 'city']

# Get all values
values = person.values()
print(list(values))  # ['Alice', 25, 'NYC']

# Get key-value pairs
items = person.items()
for key, value in items:
    print(f"{key}: {value}")

# Check if key exists
if "name" in person:
    print("Name exists!")
\`\`\`

## Nested Dictionaries

\`\`\`python
students = {
    "student1": {"name": "Alice", "grade": 90},
    "student2": {"name": "Bob", "grade": 85}
}

print(students["student1"]["name"])  # Alice
print(students["student2"]["grade"])  # 85
\`\`\`

## Practical Example

\`\`\`python
# Product inventory
product = {
    "id": 101,
    "name": "Laptop",
    "price": 999.99,
    "in_stock": True,
    "quantity": 15
}

print(f"Product: {product['name']}")
print(f"Price: ${product['price']}")
print(f"Available: {product['quantity']} units")
\`\`\`

## Challenge
Create a dictionary representing a book with these keys:
- title
- author
- year
- pages
- rating (out of 5)

Then print each value in a formatted way.`,
    initialCode: `# Create a book dictionary
book = {
    "title": "Python Mastery",
    "author": "Jane Smith",
    "year": 2024,
    "pages": 450,
    "rating": 4.8
}

# Print each value in a formatted way
print(f"Title: {book['title']}")
print(f"Author: {book['author']}")
print(f"Published: {book['year']}")
print(f"Pages: {book['pages']}")
print(f"Rating: {book['rating']}/5.0")
`,
    solution: `book = {
    "title": "Python Mastery",
    "author": "Jane Smith",
    "year": 2024,
    "pages": 450,
    "rating": 4.8
}

print(f"Title: {book['title']}")
print(f"Author: {book['author']}")
print(f"Published: {book['year']}")
print(f"Pages: {book['pages']}")
print(f"Rating: {book['rating']}/5.0")`,
    hints: [
      'Use curly braces {} for dictionaries',
      'Format: "key": value with colon separating them',
      'Access values with ["key"]',
      'String keys need quotes, number values don\'t',
      'Use f-strings to format output nicely'
    ],
    testCases: [
      { name: 'Creates dictionary', test: (code: string, output: string) => code.includes('{') && code.includes('}') && code.includes(':'), errorMessage: 'Must create a dictionary with {} and key: value pairs' },
      { name: 'Has title key', test: (code: string, output: string) => code.includes('"title"') || code.includes("'title'"), errorMessage: 'Dictionary should have "title" key' },
      { name: 'Has author key', test: (code: string, output: string) => code.includes('"author"') || code.includes("'author'"), errorMessage: 'Dictionary should have "author" key' },
      { name: 'Has year key', test: (code: string, output: string) => code.includes('"year"') || code.includes("'year'"), errorMessage: 'Dictionary should have "year" key' },
      { name: 'Uses dictionary access', test: (code: string, output: string) => code.includes('["') || code.includes("[\'"), errorMessage: 'Must access dictionary values with ["key"]' },
      { name: 'Shows output', test: (code: string, output: string) => output.trim().length > 50, errorMessage: 'Should print all dictionary values' },
      { name: 'Multiple lines', test: (code: string, output: string) => output.split('\n').filter(l => l.trim()).length >= 5, errorMessage: 'Should print at least 5 formatted lines' },
      { name: 'Shows number', test: (code: string, output: string) => /\d{2,}/.test(output), errorMessage: 'Output should include numbers like year or pages' }
    ]
  },
`,
    initialCode: `# Text processing program
text = "  python programming  "

# Remove whitespace
cleaned = text.strip()

# Print in different cases
print(f"Uppercase: {cleaned.upper()}")
print(f"Lowercase: {cleaned.lower()}")
print(f"Title Case: {cleaned.title()}")
print(f"Length: {len(cleaned)} characters")
print(f"Letter 'p' appears: {cleaned.lower().count('p')} times")
`,
    solution: `text = "  python programming  "
cleaned = text.strip()

print(f"Uppercase: {cleaned.upper()}")
print(f"Lowercase: {cleaned.lower()}")
print(f"Title Case: {cleaned.title()}")
print(f"Length: {len(cleaned)} characters")
print(f"Letter 'p' appears: {cleaned.lower().count('p')} times")`,
    hints: [
      'Use .strip() to remove whitespace',
      'Use .upper() for uppercase, .lower() for lowercase',
      'Use .title() for title case',
      'len() gives the string length',
      'Use .count(letter) to count occurrences',
      'Convert to lowercase before counting for accuracy'
    ],
    testCases: [
      { name: 'Uses strip', test: (code: string, output: string) => code.includes('.strip'), errorMessage: 'Must use .strip() to remove whitespace' },
      { name: 'Uses string methods', test: (code: string, output: string) => code.includes('.upper') && (code.includes('.lower') || code.includes('.title')), errorMessage: 'Must use multiple string methods (.upper, .lower, .title)' },
      { name: 'Shows UPPERCASE', test: (code: string, output: string) => output.includes('PYTHON PROGRAMMING'), errorMessage: 'Should show text in UPPERCASE' },
      { name: 'Shows Title Case', test: (code: string, output: string) => output.includes('Python Programming'), errorMessage: 'Should show Title Case' },
      { name: 'Shows length', test: (code: string, output: string) => output.includes('18') || output.includes('Length'), errorMessage: 'Should show string length (18)' },
      { name: 'Counts letter p', test: (code: string, output: string) => output.includes('3') && code.includes('.count'), errorMessage: 'Should count letter p (appears 3 times)' },
      { name: 'Multiple outputs', test: (code: string, output: string) => output.split('\n').filter(l => l.trim()).length >= 5, errorMessage: 'Should print at least 5 different outputs' }
    ]
  },
  {
    id: 'python-9',
    title: 'List Comprehensions - Elegant Lists',
    description: 'Create lists in a single line of code',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# List Comprehensions ⚡

Create lists in a concise, elegant way.

## Basic Syntax
\`\`\`python
# Traditional way
squares = []
for i in range(5):
    squares.append(i ** 2)
print(squares)  # [0, 1, 4, 9, 16]

# List comprehension way
squares = [i ** 2 for i in range(5)]
print(squares)  # [0, 1, 4, 9, 16]
\`\`\`

## With Conditions
\`\`\`python
# Only even numbers
evens = [i for i in range(10) if i % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8]

# Only positive numbers
numbers = [-2, -1, 0, 1, 2]
positive = [n for n in numbers if n > 0]
print(positive)  # [1, 2]
\`\`\`

## Challenge
Create a list of cubes (n³) for numbers 1-10 that are divisible by 3.`,
    initialCode: `# List comprehension for cubes divisible by 3
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Create list of cubes for numbers divisible by 3
cubes = [n ** 3 for n in numbers if n % 3 == 0]

print(f"Numbers divisible by 3: {[n for n in numbers if n % 3 == 0]}")
print(f"Their cubes: {cubes}")
`,
    solution: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
cubes = [n ** 3 for n in numbers if n % 3 == 0]
print(f"Numbers divisible by 3: {[n for n in numbers if n % 3 == 0]}")
print(f"Their cubes: {cubes}")`,
    hints: ['Format: [expression for item in list if condition]', 'Use n ** 3 for cubes', 'Use if n % 3 == 0 to check divisibility', 'Should give [27, 216, 729]'],
    testCases: [
      { name: 'Uses list comprehension', test: (code: string, output: string) => /\[.+for.+in.+\]/.test(code), errorMessage: 'Must use list comprehension [x for x in ...]' },
      { name: 'Has condition', test: (code: string, output: string) => code.includes('if'), errorMessage: 'Should filter with if condition' },
      { name: 'Shows 27', test: (code: string, output: string) => output.includes('27'), errorMessage: 'Should include 27 (3³)' },
      { name: 'Shows 216', test: (code: string, output: string) => output.includes('216'), errorMessage: 'Should include 216 (6³)' }
    ]
  },
`,
    initialCode: `# RGB Color Tuple Program

# Create RGB tuple
color = (255, 128, 0)  # Orange color

# Unpack into variables
r, g, b = color

# Print each component
print(f"Red: {r}")
print(f"Green: {g}")
print(f"Blue: {b}")
print(f"Tuple length: {len(color)}")

# Create and unpack coordinates
coordinates = (40.7128, -74.0060)
latitude, longitude = coordinates
print(f"Location: {latitude}°N, {longitude}°W")
`,
    solution: `color = (255, 128, 0)
r, g, b = color

print(f"Red: {r}")
print(f"Green: {g}")
print(f"Blue: {b}")
print(f"Tuple length: {len(color)}")

coordinates = (40.7128, -74.0060)
latitude, longitude = coordinates
print(f"Location: {latitude}°N, {longitude}°W")`,
    hints: [
      'Use parentheses () to create tuples',
      'Unpack tuple with: r, g, b = color',
      'Access elements with indexing or unpacking',
      'Use len() to get tuple length',
      'Tuples are comma-separated values',
      'Print using f-strings for nice formatting'
    ],
    testCases: [
      { name: 'Creates tuple', test: (code: string, output: string) => code.includes('(') && code.includes(')') && code.includes(','), errorMessage: 'Must create tuple with parentheses and commas' },
      { name: 'Uses unpacking', test: (code: string, output: string) => /[a-z]+,\s*[a-z]+,\s*[a-z]+\s*=/.test(code), errorMessage: 'Should unpack tuple into variables (e.g., r, g, b = color)' },
      { name: 'Shows 255', test: (code: string, output: string) => output.includes('255'), errorMessage: 'Should show red value (255)' },
      { name: 'Shows 128', test: (code: string, output: string) => output.includes('128'), errorMessage: 'Should show green value (128)' },
      { name: 'Shows length', test: (code: string, output: string) => output.includes('3') && code.includes('len('), errorMessage: 'Should show tuple length (3)' },
      { name: 'Multiple tuples', test: (code: string, output: string) => (code.match(/\(/g) || []).length >= 2, errorMessage: 'Should create at least 2 tuples' },
      { name: 'Multiple outputs', test: (code: string, output: string) => output.split('\n').filter(l => l.trim()).length >= 5, errorMessage: 'Should print at least 5 lines of output' }
    ]
  },
  {
    id: 'python-11',
    title: 'Sets - Unique Collections',
    description: 'Work with unique collections using sets',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Sets - Unique Collections 📦

Sets are unordered collections that store only **unique** elements. Duplicates are automatically removed!

## Creating Sets

\`\`\`python
# Create a set with curly braces
fruits = {"apple", "banana", "cherry"}
numbers = {1, 2, 3, 4, 5}

# Create set from list (removes duplicates)
list_with_dupes = [1, 2, 2, 3, 3, 3, 4]
unique_nums = set(list_with_dupes)
print(unique_nums)  # {1, 2, 3, 4}

# Empty set (must use set(), not {})
empty_set = set()
\`\`\`

## Set Methods

\`\`\`python
colors = {"red", "blue"}

# Add element
colors.add("green")
print(colors)  # {"red", "blue", "green"}

# Remove element
colors.remove("blue")

# Check membership
if "red" in colors:
    print("Red is in the set!")

# Get set length
print(len(colors))  # 2
\`\`\`

## Set Operations

\`\`\`python
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

# Union (all elements from both)
print(a | b)  # {1, 2, 3, 4, 5, 6}

# Intersection (common elements)
print(a & b)  # {3, 4}

# Difference (in a but not in b)
print(a - b)  # {1, 2}
\`\`\`

## Practical Use - Remove Duplicates

\`\`\`python
# Remove duplicates from a list
numbers = [1, 2, 2, 3, 3, 3, 4, 4, 5]
unique = list(set(numbers))
print(unique)  # [1, 2, 3, 4, 5]
\`\`\`

## Challenge
Create two sets, add elements, find common elements, and count unique values.`,
    initialCode: `# Working with sets

# Create sets
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

# Add element to set1
set1.add(6)

# Find common elements (intersection)
common = set1 & set2

# Print results
print(f"Set 1: {set1}")
print(f"Set 2: {set2}")
print(f"Common elements: {common}")
print(f"Total unique in set1: {len(set1)}")

# Remove duplicates from list
duplicates = [1, 1, 2, 2, 3, 3, 4, 4]
unique_list = list(set(duplicates))
print(f"Unique values: {unique_list}")
`,
    solution: `set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

set1.add(6)
common = set1 & set2

print(f"Set 1: {set1}")
print(f"Set 2: {set2}")
print(f"Common elements: {common}")
print(f"Total unique in set1: {len(set1)}")

duplicates = [1, 1, 2, 2, 3, 3, 4, 4]
unique_list = list(set(duplicates))
print(f"Unique values: {unique_list}")`,
    hints: [
      'Use curly braces {} for sets',
      'Sets automatically remove duplicates',
      'Use .add() to add elements',
      'Use & for intersection (common elements)',
      'Use len() to count set elements',
      'Convert list to set to remove duplicates'
    ],
    testCases: [
      { name: 'Creates sets', test: (code: string, output: string) => code.includes('{') && code.includes('}'), errorMessage: 'Must create sets with curly braces' },
      { name: 'Uses add method', test: (code: string, output: string) => code.includes('.add('), errorMessage: 'Should use .add() to add elements' },
      { name: 'Finds intersection', test: (code: string, output: string) => code.includes('&') || code.includes('.intersection'), errorMessage: 'Must find common elements using & or .intersection()' },
      { name: 'Shows set1', test: (code: string, output: string) => /Set 1.*[1-6]/.test(output), errorMessage: 'Should display Set 1' },
      { name: 'Shows common elements', test: (code: string, output: string) => output.includes('Common') || (output.includes('4') && output.includes('5') && output.includes('6')), errorMessage: 'Should show common elements (4, 5, 6)' },
      { name: 'Uses len()', test: (code: string, output: string) => code.includes('len('), errorMessage: 'Should use len() to count elements' },
      { name: 'Removes duplicates', test: (code: string, output: string) => code.includes('set(') && code.includes('list('), errorMessage: 'Should convert list to set to remove duplicates' },
      { name: 'Multiple outputs', test: (code: string, output: string) => output.split('\n').filter(l => l.trim()).length >= 5, errorMessage: 'Should print at least 5 lines of output' }
    ]
  },
  {
    id: 'python-12',
    title: 'Dictionary Methods',
    description: 'Master dictionary operations and methods',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Dictionary Methods

Learn useful methods for working with dictionaries.

## Common Methods
\`\`\`python
person = {"name": "Alice", "age": 25}
keys = person.keys()
values = person.values()
\`\`\`

## Challenge
Create a dictionary and use methods to access its data.`,
    initialCode: `# Create a dictionary
car = {"brand": "Ford", "model": "Mustang", "year": 1964}

# Print all keys
print(car.keys())
`,
    solution: `car = {"brand": "Ford", "model": "Mustang", "year": 1964}
print(car.keys())`,
    hints: ['Use .keys() to get dictionary keys', 'Use .values() to get values'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => code.includes('print('), errorMessage: 'Use print() to show output' }
    ]
  },
  {
    id: 'python-13',
    title: 'Function Parameters',
    description: 'Learn to use function parameters and return values',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Function Parameters

Functions can accept parameters and return values.

## Example
\`\`\`python
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # 8
\`\`\`

## Challenge
Create a function that takes two numbers and returns their sum.`,
    initialCode: `# Define a function with parameters
def multiply(x, y):
    return x * y

# Call the function
result = multiply(4, 5)
print(result)
`,
    solution: `def multiply(x, y):
    return x * y

result = multiply(4, 5)
print(result)`,
    hints: ['Use def to define functions', 'Use return to send back values'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses function', test: (code: string, output: string) => code.includes('def '), errorMessage: 'Define a function with def' }
    ]
  },
  {
    id: 'python-14',
    title: 'Lambda Functions',
    description: 'Create anonymous functions with lambda',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Lambda Functions

Lambda functions are small anonymous functions.

## Example
\`\`\`python
square = lambda x: x ** 2
print(square(5))  # 25
\`\`\`

## Challenge
Create a lambda function to double a number.`,
    initialCode: `# Lambda function to double a number
double = lambda x: x * 2

print(double(10))
`,
    solution: `double = lambda x: x * 2
print(double(10))`,
    hints: ['Lambda syntax: lambda parameters: expression', 'Lambda returns the expression result'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows 20', test: (code: string, output: string) => output.includes('20'), errorMessage: 'Output should include 20' }
    ]
  },
  {
    id: 'python-15',
    title: 'Classes and Objects',
    description: 'Introduction to object-oriented programming',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Classes and Objects

Classes are blueprints for creating objects.

## Example
\`\`\`python
class Dog:
    def __init__(self, name):
        self.name = name
    
    def bark(self):
        print(f"{self.name} says Woof!")

my_dog = Dog("Buddy")
my_dog.bark()
\`\`\`

## Challenge
Create a class and make an object from it.`,
    initialCode: `# Create a simple class
class Cat:
    def __init__(self, name):
        self.name = name
    
    def meow(self):
        print(f"{self.name} says Meow!")

my_cat = Cat("Whiskers")
my_cat.meow()
`,
    solution: `class Cat:
    def __init__(self, name):
        self.name = name
    
    def meow(self):
        print(f"{self.name} says Meow!")

my_cat = Cat("Whiskers")
my_cat.meow()`,
    hints: ['Use class keyword to define a class', '__init__ is the constructor'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses class', test: (code: string, output: string) => code.includes('class '), errorMessage: 'Define a class' }
    ]
  },
  {
    id: 'python-16',
    title: 'Working with Data',
    description: 'Learn to process and manipulate data',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Working with Data

Learn to process and transform data in Python.

## Example
\`\`\`python
data = [1, 2, 3, 4, 5]
squared = [x**2 for x in data]
print(squared)
\`\`\`

## Challenge
Create a list and transform its data.`,
    initialCode: `# Process data
numbers = [1, 2, 3, 4, 5]
doubled = [x * 2 for x in numbers]
print(doubled)
`,
    solution: `numbers = [1, 2, 3, 4, 5]
doubled = [x * 2 for x in numbers]
print(doubled)`,
    hints: ['Use list comprehension', 'Transform data with operations'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows doubled values', test: (code: string, output: string) => output.includes('2') && output.includes('10'), errorMessage: 'Output should show doubled values' }
    ]
  },
  {
    id: 'python-17',
    title: 'Error Handling',
    description: 'Handle errors gracefully with try/except',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Error Handling

Use try/except to handle errors gracefully.

## Example
\`\`\`python
try:
    result = 10 / 2
    print(result)
except ZeroDivisionError:
    print("Cannot divide by zero!")
\`\`\`

## Challenge
Write code that handles potential errors.`,
    initialCode: `# Handle errors
try:
    number = 10
    result = number / 2
    print(result)
except:
    print("An error occurred")
`,
    solution: `try:
    number = 10
    result = number / 2
    print(result)
except:
    print("An error occurred")`,
    hints: ['Use try: to attempt code', 'Use except: to catch errors'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses try/except', test: (code: string, output: string) => code.includes('try') && code.includes('except'), errorMessage: 'Use try/except blocks' }
    ]
  },
  {
    id: 'python-18',
    title: 'Working with Modules',
    description: 'Import and use Python modules',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Working with Modules

Modules help you organize and reuse code.

## Built-in Modules
\`\`\`python
import math
print(math.pi)
print(math.sqrt(16))
\`\`\`

## Challenge
Use a built-in Python module.`,
    initialCode: `# Using math operations
x = 10
y = 5
print(x + y)
print(x * y)
`,
    solution: `x = 10
y = 5
print(x + y)
print(x * y)`,
    hints: ['Python has many built-in capabilities', 'Use arithmetic operators'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows sum', test: (code: string, output: string) => output.includes('15'), errorMessage: 'Output should include 15' }
    ]
  },
  {
    id: 'python-19',
    title: 'Advanced List Methods',
    description: 'Master powerful list operations',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Advanced List Methods

Learn powerful list operations.

## Examples
\`\`\`python
numbers = [3, 1, 4, 1, 5]
numbers.sort()
print(numbers)
\`\`\`

## Challenge
Practice using list methods.`,
    initialCode: `# Use list methods
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")
print(fruits)
`,
    solution: `fruits = ["apple", "banana", "cherry"]
fruits.append("orange")
print(fruits)`,
    hints: ['Use .append() to add items', 'Lists are mutable'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows orange', test: (code: string, output: string) => output.toLowerCase().includes('orange'), errorMessage: 'Should include orange' }
    ]
  },
  {
    id: 'python-20',
    title: 'String Formatting',
    description: 'Format strings with f-strings and methods',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# String Formatting

Learn to format strings beautifully.

## F-Strings
\`\`\`python
name = "Alice"
age = 25
print(f"My name is {name} and I am {age} years old")
\`\`\`

## Challenge
Use f-strings to format output.`,
    initialCode: `# Format strings
name = "Bob"
score = 95
print(f"{name} scored {score} points")
`,
    solution: `name = "Bob"
score = 95
print(f"{name} scored {score} points")`,
    hints: ['Use f"...{variable}..." for f-strings', 'Put variables in curly braces'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows Bob', test: (code: string, output: string) => output.includes('Bob'), errorMessage: 'Output should include Bob' }
    ]
  },
  {
    id: 'python-21',
    title: 'Nested Data Structures',
    description: 'Work with lists of dictionaries and complex data',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Nested Data Structures

Combine lists and dictionaries for complex data.

## Example
\`\`\`python
students = [
    {"name": "Alice", "grade": 95},
    {"name": "Bob", "grade": 87}
]
print(students[0]["name"])
\`\`\`

## Challenge
Create a list of dictionaries.`,
    initialCode: `# List of dictionaries
cars = [
    {"brand": "Ford", "year": 2020},
    {"brand": "Tesla", "year": 2022}
]
print(cars[0]["brand"])
`,
    solution: `cars = [
    {"brand": "Ford", "year": 2020},
    {"brand": "Tesla", "year": 2022}
]
print(cars[0]["brand"])`,
    hints: ['Use [index] to access list items', 'Use ["key"] to access dictionary values'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows Ford', test: (code: string, output: string) => output.includes('Ford'), errorMessage: 'Output should include Ford' }
    ]
  },
  {
    id: 'python-22',
    title: 'Boolean Logic',
    description: 'Master boolean operators and logic',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Boolean Logic

Use and, or, not for complex conditions.

## Example
\`\`\`python
age = 25
if age >= 18 and age < 65:
    print("Adult")
\`\`\`

## Challenge
Use boolean operators in conditions.`,
    initialCode: `# Boolean logic
temperature = 75
if temperature > 60 and temperature < 80:
    print("Perfect weather!")
`,
    solution: `temperature = 75
if temperature > 60 and temperature < 80:
    print("Perfect weather!")`,
    hints: ['Use and to combine conditions', 'Use or for either condition'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows Perfect', test: (code: string, output: string) => output.includes('Perfect'), errorMessage: 'Should output Perfect weather!' }
    ]
  },
  {
    id: 'python-23',
    title: 'While Loops',
    description: 'Learn to use while loops for repetition',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# While Loops

While loops repeat code while a condition is true.

## Example
\`\`\`python
count = 0
while count < 5:
    print(count)
    count = count + 1
\`\`\`

## Challenge
Create a while loop.`,
    initialCode: `# While loop
count = 1
while count <= 3:
    print(count)
    count = count + 1
`,
    solution: `count = 1
while count <= 3:
    print(count)
    count = count + 1`,
    hints: ['while condition: runs while true', 'Update counter to avoid infinite loops'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows 1', test: (code: string, output: string) => output.includes('1'), errorMessage: 'Output should include 1' }
    ]
  },
  {
    id: 'python-24',
    title: 'String Slicing',
    description: 'Master string manipulation with slicing',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# String Slicing

Extract parts of strings using slicing.

## Example
\`\`\`python
text = "Hello World"
print(text[0:5])  # Hello
print(text[6:])   # World
\`\`\`

## Challenge
Slice a string to get specific parts.`,
    initialCode: `# String slicing
message = "Python Programming"

# Get first 6 characters
print(message[0:6])

# Get last word
print(message[7:])
`,
    solution: `message = "Python Programming"
print(message[0:6])
print(message[7:])`,
    hints: ['Use [start:end] for slicing', 'Omit start or end for from beginning or to end'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows Python', test: (code: string, output: string) => output.includes('Python'), errorMessage: 'Should output Python' }
    ]
  },
  {
    id: 'python-25',
    title: 'Sorting Lists',
    description: 'Learn to sort and organize data',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Sorting Lists

Sort lists in ascending or descending order.

## Example
\`\`\`python
numbers = [5, 2, 8, 1, 9]
numbers.sort()
print(numbers)  # [1, 2, 5, 8, 9]
\`\`\`

## Challenge
Sort a list of numbers.`,
    initialCode: `# Sort a list
scores = [85, 92, 78, 95, 88]
scores.sort()
print(scores)
`,
    solution: `scores = [85, 92, 78, 95, 88]
scores.sort()
print(scores)`,
    hints: ['Use .sort() to sort in place', 'Use sorted() to get a new sorted list'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows 78', test: (code: string, output: string) => output.includes('78'), errorMessage: 'Should show sorted numbers' }
    ]
  },
  {
    id: 'python-26',
    title: 'Multiple Return Values',
    description: 'Return multiple values from functions',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Multiple Return Values

Functions can return multiple values as tuples.

## Example
\`\`\`python
def get_stats(numbers):
    return len(numbers), sum(numbers)

count, total = get_stats([1, 2, 3])
print(count, total)
\`\`\`

## Challenge
Create a function that returns multiple values.`,
    initialCode: `# Function with multiple returns
def min_max(numbers):
    return min(numbers), max(numbers)

smallest, largest = min_max([5, 2, 9, 1, 7])
print(smallest, largest)
`,
    solution: `def min_max(numbers):
    return min(numbers), max(numbers)

smallest, largest = min_max([5, 2, 9, 1, 7])
print(smallest, largest)`,
    hints: ['Return multiple values separated by commas', 'Unpack return values into variables'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows 1 and 9', test: (code: string, output: string) => output.includes('1') && output.includes('9'), errorMessage: 'Should show min (1) and max (9)' }
    ]
  },
  {
    id: 'python-27',
    title: 'Advanced List Methods',
    description: 'Master list manipulation techniques',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Advanced List Methods

Use powerful list methods for data manipulation.

## Methods
\`\`\`python
fruits = ["apple", "banana"]
fruits.insert(1, "orange")  # Insert at index
fruits.remove("apple")      # Remove by value
fruits.reverse()            # Reverse list
\`\`\`

## Challenge
Practice list methods.`,
    initialCode: `# List methods
numbers = [1, 2, 3, 4, 5]
numbers.reverse()
print(numbers)
`,
    solution: `numbers = [1, 2, 3, 4, 5]
numbers.reverse()
print(numbers)`,
    hints: ['Use .reverse() to reverse a list', 'Use .insert(index, item) to insert'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows reversed', test: (code: string, output: string) => output.includes('5') && output.includes('1'), errorMessage: 'List should be reversed' }
    ]
  },
  {
    id: 'python-28',
    title: 'Break and Continue',
    description: 'Control loop flow with break and continue',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Break and Continue

Control loop execution with break and continue.

## Example
\`\`\`python
for i in range(10):
    if i == 5:
        break  # Exit loop
    print(i)
\`\`\`

## Challenge
Use break to exit a loop early.`,
    initialCode: `# Break example
for num in range(1, 10):
    if num == 5:
        break
    print(num)
`,
    solution: `for num in range(1, 10):
    if num == 5:
        break
    print(num)`,
    hints: ['break exits the loop completely', 'continue skips to next iteration'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses break', test: (code: string, output: string) => code.includes('break'), errorMessage: 'Use break statement' }
    ]
  },
  {
    id: 'python-29',
    title: 'Enumerate Function',
    description: 'Loop with index and value using enumerate',
    language: 'python' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Enumerate

Get both index and value when looping.

## Example
\`\`\`python
fruits = ["apple", "banana", "cherry"]
for i, fruit in enumerate(fruits):
    print(i, fruit)
\`\`\`

## Challenge
Use enumerate to loop with indices.`,
    initialCode: `# Enumerate example
colors = ["red", "green", "blue"]
for index, color in enumerate(colors):
    print(index, color)
`,
    solution: `colors = ["red", "green", "blue"]
for index, color in enumerate(colors):
    print(index, color)`,
    hints: ['enumerate() returns index and value', 'Unpack both in for loop'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows 0', test: (code: string, output: string) => output.includes('0'), errorMessage: 'Should show index 0' }
    ]
  },
  {
    id: 'python-30',
    title: 'Zip Function',
    description: 'Combine multiple lists with zip',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 25,
    content: `# Zip Function

Combine multiple lists element by element.

## Example
\`\`\`python
names = ["Alice", "Bob"]
ages = [25, 30]
for name, age in zip(names, ages):
    print(name, age)
\`\`\`

## Challenge
Use zip to combine lists.`,
    initialCode: `# Zip example
fruits = ["apple", "banana", "cherry"]
prices = [1.2, 0.5, 2.0]
for fruit, price in zip(fruits, prices):
    print(fruit, price)
`,
    solution: `fruits = ["apple", "banana", "cherry"]
prices = [1.2, 0.5, 2.0]
for fruit, price in zip(fruits, prices):
    print(fruit, price)`,
    hints: ['zip() pairs elements from multiple lists', 'Unpack in for loop'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows apple', test: (code: string, output: string) => output.includes('apple'), errorMessage: 'Should show fruit names' }
    ]
  },
  {
    id: 'python-31',
    title: 'Map Function',
    description: 'Transform data with map function',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 25,
    content: `# Map Function

Apply a function to every item in a list.

## Example
\`\`\`python
numbers = [1, 2, 3, 4]
squared = list(map(lambda x: x**2, numbers))
print(squared)  # [1, 4, 9, 16]
\`\`\`

## Challenge
Use map to transform data.`,
    initialCode: `# Map example
numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, numbers))
print(doubled)
`,
    solution: `numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, numbers))
print(doubled)`,
    hints: ['map() applies function to each item', 'Convert result to list with list()'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows 10', test: (code: string, output: string) => output.includes('10'), errorMessage: 'Should show doubled values' }
    ]
  },
  {
    id: 'python-32',
    title: 'Filter Function',
    description: 'Filter data based on conditions',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 25,
    content: `# Filter Function

Keep only items that meet a condition.

## Example
\`\`\`python
numbers = [1, 2, 3, 4, 5, 6]
even = list(filter(lambda x: x % 2 == 0, numbers))
print(even)  # [2, 4, 6]
\`\`\`

## Challenge
Use filter to select specific items.`,
    initialCode: `# Filter example
numbers = [10, 15, 20, 25, 30]
above_15 = list(filter(lambda x: x > 15, numbers))
print(above_15)
`,
    solution: `numbers = [10, 15, 20, 25, 30]
above_15 = list(filter(lambda x: x > 15, numbers))
print(above_15)`,
    hints: ['filter() keeps items where function returns True', 'Convert to list with list()'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows 20', test: (code: string, output: string) => output.includes('20'), errorMessage: 'Should show filtered values' }
    ]
  },
  {
    id: 'python-33',
    title: 'Reduce Function',
    description: 'Combine list elements with reduce',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Reduce Function

Combine all elements into a single value.

## Example
\`\`\`python
numbers = [1, 2, 3, 4]
total = sum(numbers)
print(total)  # 10
\`\`\`

## Challenge
Sum all numbers in a list.`,
    initialCode: `# Sum with reduce concept
numbers = [5, 10, 15, 20]
total = sum(numbers)
print(total)
`,
    solution: `numbers = [5, 10, 15, 20]
total = sum(numbers)
print(total)`,
    hints: ['Use sum() to add all numbers', 'sum() returns total of all items'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows 50', test: (code: string, output: string) => output.includes('50'), errorMessage: 'Should show sum of 50' }
    ]
  },
  {
    id: 'python-34',
    title: 'Default Arguments',
    description: 'Use default parameter values in functions',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 25,
    content: `# Default Arguments

Functions can have default parameter values.

## Example
\`\`\`python
def greet(name="World"):
    print(f"Hello {name}")

greet()        # Hello World
greet("Alice") # Hello Alice
\`\`\`

## Challenge
Create a function with default arguments.`,
    initialCode: `# Default arguments
def power(base, exponent=2):
    return base ** exponent

print(power(5))
print(power(5, 3))
`,
    solution: `def power(base, exponent=2):
    return base ** exponent

print(power(5))
print(power(5, 3))`,
    hints: ['Set default with parameter=value', 'Default args come last'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows 25', test: (code: string, output: string) => output.includes('25'), errorMessage: 'Should show 5^2 = 25' }
    ]
  },
  {
    id: 'python-35',
    title: 'Global vs Local Scope',
    description: 'Understand variable scope in Python',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 25,
    content: `# Variable Scope

Variables have different scopes.

## Example
\`\`\`python
count = 0  # Global

def increment():
    global count
    count = count + 1

increment()
print(count)  # 1
\`\`\`

## Challenge
Work with global and local variables.`,
    initialCode: `# Global variable
total = 100

def add(value):
    global total
    total = total + value

add(50)
print(total)
`,
    solution: `total = 100

def add(value):
    global total
    total = total + value

add(50)
print(total)`,
    hints: ['Use global keyword to modify global variables', 'Local variables exist only in function'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows 150', test: (code: string, output: string) => output.includes('150'), errorMessage: 'Should show 150' }
    ]
  },
  {
    id: 'python-36',
    title: 'Args and Kwargs',
    description: 'Accept variable number of arguments',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Args and Kwargs

Accept variable arguments in functions.

## Example
\`\`\`python
def add_all(*args):
    return sum(args)

print(add_all(1, 2, 3, 4))  # 10
\`\`\`

## Challenge
Create a function with *args.`,
    initialCode: `# Variable arguments
def multiply_all(*numbers):
    result = 1
    for num in numbers:
        result = result * num
    return result

print(multiply_all(2, 3, 4))
`,
    solution: `def multiply_all(*numbers):
    result = 1
    for num in numbers:
        result = result * num
    return result

print(multiply_all(2, 3, 4))`,
    hints: ['*args captures multiple arguments as tuple', '**kwargs captures keyword arguments'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows 24', test: (code: string, output: string) => output.includes('24'), errorMessage: 'Should show 2*3*4 = 24' }
    ]
  },
  {
    id: 'python-37',
    title: 'File Reading',
    description: 'Read data from files',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 25,
    content: `# File Reading

Read content from files (simulated).

## Example
\`\`\`python
content = "Hello from file"
lines = content.split("\\n")
print(lines[0])
\`\`\`

## Challenge
Work with file content.`,
    initialCode: `# Simulated file content
file_content = "Line 1\\nLine 2\\nLine 3"
lines = file_content.split("\\n")
for line in lines:
    print(line)
`,
    solution: `file_content = "Line 1\\nLine 2\\nLine 3"
lines = file_content.split("\\n")
for line in lines:
    print(line)`,
    hints: ['Split by \\n to get lines', 'Loop through lines'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows Line 1', test: (code: string, output: string) => output.includes('Line 1'), errorMessage: 'Should show line content' }
    ]
  },
  {
    id: 'python-38',
    title: 'Working with JSON',
    description: 'Parse and work with JSON data',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 25,
    content: `# Working with JSON

Work with JSON-like data structures.

## Example
\`\`\`python
data = {"name": "Alice", "age": 25}
print(data["name"])
\`\`\`

## Challenge
Access nested data.`,
    initialCode: `# JSON-like data
person = {
    "name": "Bob",
    "age": 30,
    "city": "New York"
}
print(person["name"])
print(person["city"])
`,
    solution: `person = {
    "name": "Bob",
    "age": 30,
    "city": "New York"
}
print(person["name"])
print(person["city"])`,
    hints: ['Access with ["key"]', 'Dictionaries work like JSON'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows Bob', test: (code: string, output: string) => output.includes('Bob'), errorMessage: 'Should show name' }
    ]
  },
  {
    id: 'python-39',
    title: 'List Slicing Advanced',
    description: 'Master advanced slicing techniques',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 25,
    content: `# Advanced Slicing

Use step values and negative indices.

## Example
\`\`\`python
numbers = [0, 1, 2, 3, 4, 5]
print(numbers[::2])   # [0, 2, 4]
print(numbers[::-1])  # [5, 4, 3, 2, 1, 0]
\`\`\`

## Challenge
Use slicing with steps.`,
    initialCode: `# Advanced slicing
letters = ["a", "b", "c", "d", "e", "f"]
print(letters[::2])
print(letters[::-1])
`,
    solution: `letters = ["a", "b", "c", "d", "e", "f"]
print(letters[::2])
print(letters[::-1])`,
    hints: ['[::2] takes every 2nd item', '[::-1] reverses the list'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses slicing', test: (code: string, output: string) => code.includes('::'), errorMessage: 'Use :: slicing syntax' }
    ]
  },
  {
    id: 'python-40',
    title: 'Any and All',
    description: 'Check conditions across iterables',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 25,
    content: `# Any and All

Check if any or all elements meet a condition.

## Example
\`\`\`python
numbers = [1, 3, 5, 7]
print(all(n > 0 for n in numbers))  # True
print(any(n > 5 for n in numbers))  # True
\`\`\`

## Challenge
Use any() and all().`,
    initialCode: `# Any and All
scores = [85, 90, 78, 92, 88]
all_passing = all(score >= 60 for score in scores)
any_excellent = any(score >= 90 for score in scores)
print(all_passing)
print(any_excellent)
`,
    solution: `scores = [85, 90, 78, 92, 88]
all_passing = all(score >= 60 for score in scores)
any_excellent = any(score >= 90 for score in scores)
print(all_passing)
print(any_excellent)`,
    hints: ['all() returns True if all are True', 'any() returns True if at least one is True'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows True', test: (code: string, output: string) => output.includes('True'), errorMessage: 'Should show True' }
    ]
  },
  {
    id: 'python-41',
    title: 'Ternary Operator',
    description: 'Use conditional expressions',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 20,
    content: `# Ternary Operator

Write if-else in one line.

## Example
\`\`\`python
age = 20
status = "adult" if age >= 18 else "minor"
print(status)
\`\`\`

## Challenge
Use ternary expressions.`,
    initialCode: `# Ternary operator
score = 85
grade = "Pass" if score >= 60 else "Fail"
print(grade)
`,
    solution: `score = 85
grade = "Pass" if score >= 60 else "Fail"
print(grade)`,
    hints: ['value_if_true if condition else value_if_false', 'Compact if-else syntax'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows Pass', test: (code: string, output: string) => output.includes('Pass'), errorMessage: 'Should show Pass' }
    ]
  },
  {
    id: 'python-42',
    title: 'String join and split',
    description: 'Combine and separate strings',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 25,
    content: `# Join and Split

Combine and separate strings.

## Example
\`\`\`python
words = ["Python", "is", "awesome"]
sentence = " ".join(words)
print(sentence)
\`\`\`

## Challenge
Join and split strings.`,
    initialCode: `# Join and split
words = ["Hello", "World", "Python"]
sentence = " ".join(words)
print(sentence)

parts = sentence.split(" ")
print(parts)
`,
    solution: `words = ["Hello", "World", "Python"]
sentence = " ".join(words)
print(sentence)

parts = sentence.split(" ")
print(parts)`,
    hints: ['" ".join(list) combines with spaces', '.split(" ") separates by spaces'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows Hello', test: (code: string, output: string) => output.includes('Hello'), errorMessage: 'Should show joined text' }
    ]
  },
  {
    id: 'python-43',
    title: 'Set Operations',
    description: 'Perform set operations like union and intersection',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 25,
    content: `# Set Operations

Combine and compare sets.

## Example
\`\`\`python
a = {1, 2, 3}
b = {3, 4, 5}
print(a.union(b))         # {1, 2, 3, 4, 5}
print(a.intersection(b))  # {3}
\`\`\`

## Challenge
Use set operations.`,
    initialCode: `# Set operations
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
union = set1.union(set2)
print(union)
`,
    solution: `set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
union = set1.union(set2)
print(union)`,
    hints: ['.union() combines sets', '.intersection() finds common elements'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses sets', test: (code: string, output: string) => code.includes('{'), errorMessage: 'Use set syntax' }
    ]
  },
  {
    id: 'python-44',
    title: 'Dictionary Comprehension',
    description: 'Create dictionaries with comprehensions',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 25,
    content: `# Dictionary Comprehension

Create dictionaries in one line.

## Example
\`\`\`python
numbers = [1, 2, 3, 4]
squares = {n: n**2 for n in numbers}
print(squares)  # {1: 1, 2: 4, 3: 9, 4: 16}
\`\`\`

## Challenge
Use dict comprehension.`,
    initialCode: `# Dictionary comprehension
names = ["Alice", "Bob", "Charlie"]
lengths = {name: len(name) for name in names}
print(lengths)
`,
    solution: `names = ["Alice", "Bob", "Charlie"]
lengths = {name: len(name) for name in names}
print(lengths)`,
    hints: ['{key: value for item in list}', 'Like list comprehension but with key:value'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows Alice', test: (code: string, output: string) => output.includes('Alice'), errorMessage: 'Should show dict content' }
    ]
  },
  {
    id: 'python-45',
    title: 'Min, Max, and Sum',
    description: 'Use built-in aggregate functions',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 20,
    content: `# Aggregate Functions

Find min, max, and sum of collections.

## Example
\`\`\`python
numbers = [5, 2, 8, 1, 9]
print(min(numbers))  # 1
print(max(numbers))  # 9
print(sum(numbers))  # 25
\`\`\`

## Challenge
Use min, max, sum.`,
    initialCode: `# Aggregate functions
scores = [85, 92, 78, 95, 88]
print(min(scores))
print(max(scores))
print(sum(scores))
`,
    solution: `scores = [85, 92, 78, 95, 88]
print(min(scores))
print(max(scores))
print(sum(scores))`,
    hints: ['min() finds smallest', 'max() finds largest', 'sum() adds all'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows 78', test: (code: string, output: string) => output.includes('78'), errorMessage: 'Should show minimum' }
    ]
  },
  {
    id: 'python-46',
    title: 'Sorted Function',
    description: 'Sort with custom keys',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 25,
    content: `# Sorted with Key

Sort with custom criteria.

## Example
\`\`\`python
words = ["apple", "pie", "zoo", "at"]
by_length = sorted(words, key=len)
print(by_length)  # ['at', 'pie', 'zoo', 'apple']
\`\`\`

## Challenge
Sort with key function.`,
    initialCode: `# Sort by length
names = ["Alice", "Bob", "Charlotte", "Dan"]
sorted_names = sorted(names, key=len)
print(sorted_names)
`,
    solution: `names = ["Alice", "Bob", "Charlotte", "Dan"]
sorted_names = sorted(names, key=len)
print(sorted_names)`,
    hints: ['sorted(list, key=func) sorts by function result', 'key=len sorts by length'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows Bob', test: (code: string, output: string) => output.includes('Bob'), errorMessage: 'Should show sorted names' }
    ]
  },
  {
    id: 'python-47',
    title: 'Exception Handling Patterns',
    description: 'Handle multiple exception types',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 25,
    content: `# Exception Handling

Handle different error types.

## Example
\`\`\`python
try:
    result = 10 / 2
    print(result)
except ZeroDivisionError:
    print("Cannot divide by zero")
except Exception as e:
    print(f"Error: {e}")
\`\`\`

## Challenge
Handle exceptions properly.`,
    initialCode: `# Exception handling
try:
    numbers = [1, 2, 3]
    print(numbers[1])
except IndexError:
    print("Index out of range")
except Exception as e:
    print(f"Error: {e}")
`,
    solution: `try:
    numbers = [1, 2, 3]
    print(numbers[1])
except IndexError:
    print("Index out of range")
except Exception as e:
    print(f"Error: {e}")`,
    hints: ['Handle specific exceptions first', 'General Exception catches all'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows 2', test: (code: string, output: string) => output.includes('2'), errorMessage: 'Should show value' }
    ]
  },
  {
    id: 'python-48',
    title: 'Nested Loops',
    description: 'Work with loops inside loops',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 25,
    content: `# Nested Loops

Loop inside another loop.

## Example
\`\`\`python
for i in range(3):
    for j in range(2):
        print(i, j)
\`\`\`

## Challenge
Use nested loops.`,
    initialCode: `# Nested loops
for row in range(3):
    for col in range(3):
        print(row, col)
`,
    solution: `for row in range(3):
    for col in range(3):
        print(row, col)`,
    hints: ['Inner loop runs completely for each outer iteration', 'Useful for grids and matrices'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows 0 0', test: (code: string, output: string) => output.includes('0') && output.includes('0'), errorMessage: 'Should show coordinates' }
    ]
  },
  {
    id: 'python-49',
    title: 'Python Best Practices',
    description: 'Write clean and efficient Python code',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Python Best Practices

Write Pythonic code.

## Tips
- Use meaningful variable names
- Keep functions small and focused
- Use list comprehensions when appropriate
- Handle exceptions properly
- Write clear comments

## Challenge
Apply best practices.`,
    initialCode: `# Best practices
def calculate_average(numbers):
    if not numbers:
        return 0
    return sum(numbers) / len(numbers)

scores = [85, 90, 78, 92, 88]
avg = calculate_average(scores)
print(avg)
`,
    solution: `def calculate_average(numbers):
    if not numbers:
        return 0
    return sum(numbers) / len(numbers)

scores = [85, 90, 78, 92, 88]
avg = calculate_average(scores)
print(avg)`,
    hints: ['Use descriptive names', 'Check for edge cases', 'Keep it simple'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses function', test: (code: string, output: string) => code.includes('def '), errorMessage: 'Define a function' }
    ]
  },
  {
    id: 'python-50',
    title: 'Python Project - Data Analysis',
    description: 'Put it all together in a mini project',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 40,
    content: `# Final Project

Combine everything you learned.

## Project
Create a program that:
1. Works with data structures
2. Uses functions
3. Handles errors
4. Processes data

## Challenge
Build a complete solution.`,
    initialCode: `# Data analysis project
def analyze_scores(scores):
    if not scores:
        return {"min": 0, "max": 0, "avg": 0}
    
    return {
        "min": min(scores),
        "max": max(scores),
        "avg": sum(scores) / len(scores)
    }

test_scores = [85, 92, 78, 95, 88, 90]
analysis = analyze_scores(test_scores)
print("Min:", analysis["min"])
print("Max:", analysis["max"])
print("Average:", analysis["avg"])
`,
    solution: `def analyze_scores(scores):
    if not scores:
        return {"min": 0, "max": 0, "avg": 0}
    
    return {
        "min": min(scores),
        "max": max(scores),
        "avg": sum(scores) / len(scores)
    }

test_scores = [85, 92, 78, 95, 88, 90]
analysis = analyze_scores(test_scores)
print("Min:", analysis["min"])
print("Max:", analysis["max"])
print("Average:", analysis["avg"])`,
    hints: ['Use functions for organization', 'Return dictionaries for multiple values', 'Check for empty inputs'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Shows analysis', test: (code: string, output: string) => output.includes('Min') || output.includes('78'), errorMessage: 'Should show data analysis' }
    ]
  },
  {
    id: 'python-51',
    title: 'Fullstack Capstone Project - Task Manager API',
    description: 'Build a complete task management system with backend logic, data handling, and API simulation',
    language: 'python' as const,
    difficulty: 'Advanced',
    estimatedTime: 90,
    content: `# Fullstack Capstone Project 🚀

## Project Overview
Build a **Task Manager System** that demonstrates all your Python skills!

## Requirements

### 1. Task Class (OOP)
Create a Task class with:
- Properties: id, title, description, completed, priority
- Methods: mark_complete(), to_dict()

### 2. TaskManager Class
Implement CRUD operations:
- \`create_task(title, description, priority)\` - Add new task
- \`get_all_tasks()\` - Return all tasks
- \`get_task(task_id)\` - Find specific task
- \`update_task(task_id, ...)\` - Modify task
- \`delete_task(task_id)\` - Remove task
- \`filter_by_priority(priority)\` - Filter tasks

### 3. Data Validation
- Validate input (no empty titles)
- Handle errors gracefully
- Check task existence before operations

### 4. Statistics Function
Create \`get_statistics()\` that returns:
- Total tasks count
- Completed tasks count
- Pending tasks count
- Tasks by priority

## Example Output
\`\`\`
Task Manager System v1.0
======================
Created task #1: Complete Python Course
Created task #2: Build Portfolio Project
Task #1 marked as complete
Statistics:
  Total: 2 tasks
  Completed: 1
  Pending: 1
  High Priority: 1
\`\`\`

## Testing Criteria
Your code will be tested for:
1. Task class implementation
2. TaskManager CRUD operations
3. Statistics calculation
4. Error handling
5. Output formatting`,
    initialCode: `# Fullstack Capstone Project - Task Manager System

class Task:
    """Represents a single task"""
    def __init__(self, task_id, title, description, priority="Medium"):
        # TODO: Initialize task properties
        pass
    
    def mark_complete(self):
        # TODO: Mark task as completed
        pass
    
    def to_dict(self):
        # TODO: Return task as dictionary
        pass


class TaskManager:
    """Manages collection of tasks"""
    def __init__(self):
        self.tasks = []
        self.next_id = 1
    
    def create_task(self, title, description, priority="Medium"):
        # TODO: Create and add new task
        pass
    
    def get_all_tasks(self):
        # TODO: Return all tasks
        pass
    
    def get_task(self, task_id):
        # TODO: Find task by ID
        pass
    
    def update_task(self, task_id, title=None, description=None):
        # TODO: Update task properties
        pass
    
    def delete_task(self, task_id):
        # TODO: Remove task
        pass
    
    def filter_by_priority(self, priority):
        # TODO: Return tasks matching priority
        pass
    
    def get_statistics(self):
        # TODO: Calculate and return stats
        pass


# Test your implementation
manager = TaskManager()
print("Task Manager System v1.0")
print("=" * 22)

# Create tasks
manager.create_task("Complete Python Course", "Finish all 51 lessons", "High")
manager.create_task("Build Portfolio", "Create 3 projects", "High")
manager.create_task("Practice Daily", "Code for 30 minutes", "Medium")

# TODO: Implement functionality and test it
`,
    solution: `# Fullstack Capstone Project - Task Manager System

class Task:
    """Represents a single task"""
    def __init__(self, task_id, title, description, priority="Medium"):
        self.id = task_id
        self.title = title
        self.description = description
        self.priority = priority
        self.completed = False
    
    def mark_complete(self):
        self.completed = True
    
    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "priority": self.priority,
            "completed": self.completed
        }


class TaskManager:
    """Manages collection of tasks"""
    def __init__(self):
        self.tasks = []
        self.next_id = 1
    
    def create_task(self, title, description, priority="Medium"):
        if not title:
            raise ValueError("Title cannot be empty")
        task = Task(self.next_id, title, description, priority)
        self.tasks.append(task)
        print(f"Created task #{self.next_id}: {title}")
        self.next_id += 1
        return task
    
    def get_all_tasks(self):
        return self.tasks
    
    def get_task(self, task_id):
        for task in self.tasks:
            if task.id == task_id:
                return task
        return None
    
    def update_task(self, task_id, title=None, description=None):
        task = self.get_task(task_id)
        if task:
            if title:
                task.title = title
            if description:
                task.description = description
            print(f"Updated task #{task_id}")
        else:
            print(f"Task #{task_id} not found")
    
    def delete_task(self, task_id):
        task = self.get_task(task_id)
        if task:
            self.tasks.remove(task)
            print(f"Deleted task #{task_id}")
        else:
            print(f"Task #{task_id} not found")
    
    def filter_by_priority(self, priority):
        return [task for task in self.tasks if task.priority == priority]
    
    def get_statistics(self):
        total = len(self.tasks)
        completed = len([t for t in self.tasks if t.completed])
        pending = total - completed
        high_priority = len([t for t in self.tasks if t.priority == "High"])
        
        return {
            "total": total,
            "completed": completed,
            "pending": pending,
            "high_priority": high_priority
        }


# Test implementation
manager = TaskManager()
print("Task Manager System v1.0")
print("=" * 22)

# Create tasks
manager.create_task("Complete Python Course", "Finish all 51 lessons", "High")
manager.create_task("Build Portfolio", "Create 3 projects", "High")
manager.create_task("Practice Daily", "Code for 30 minutes", "Medium")

# Mark first task complete
task1 = manager.get_task(1)
if task1:
    task1.mark_complete()
    print(f"Task #{task1.id} marked as complete")

# Show statistics
stats = manager.get_statistics()
print(f"\\nStatistics:")
print(f"  Total: {stats['total']} tasks")
print(f"  Completed: {stats['completed']}")
print(f"  Pending: {stats['pending']}")
print(f"  High Priority: {stats['high_priority']}")
`,
    hints: [
      'Start by implementing the Task class with all properties',
      'In TaskManager, create_task should instantiate a Task and append to self.tasks',
      'Use list comprehension for filter_by_priority: [task for task in self.tasks if ...]',
      'get_task can use a for loop to find matching task.id',
      'mark_complete() simply sets self.completed = True',
      'For statistics, count tasks using len() and list comprehensions',
      'to_dict() should return a dictionary with all task properties',
      'Remember to increment self.next_id after creating each task'
    ],
    testCases: [
      { 
        name: 'Has Task class', 
        test: (code: string, output: string) => code.includes('class Task'), 
        errorMessage: 'Must define Task class' 
      },
      { 
        name: 'Has TaskManager class', 
        test: (code: string, output: string) => code.includes('class TaskManager'), 
        errorMessage: 'Must define TaskManager class' 
      },
      { 
        name: 'Implements create_task', 
        test: (code: string, output: string) => code.includes('def create_task'), 
        errorMessage: 'TaskManager must have create_task method' 
      },
      { 
        name: 'Implements get_statistics', 
        test: (code: string, output: string) => code.includes('def get_statistics'), 
        errorMessage: 'TaskManager must have get_statistics method' 
      },
      { 
        name: 'Creates tasks successfully', 
        test: (code: string, output: string) => output.includes('Created task') || output.includes('Task #'), 
        errorMessage: 'Should create and show task creation' 
      },
      { 
        name: 'Shows statistics', 
        test: (code: string, output: string) => output.includes('Statistics') || (output.includes('Total') && output.includes('Completed')), 
        errorMessage: 'Should display task statistics' 
      },
      { 
        name: 'Has substantial implementation', 
        test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 30, 
        errorMessage: 'Project requires substantial code (at least 30 lines)' 
      },
      { 
        name: 'Uses OOP concepts', 
        test: (code: string, output: string) => code.includes('self.') && code.includes('__init__'), 
        errorMessage: 'Must use object-oriented programming with self and __init__' 
      },
      { 
        name: 'Handles task completion', 
        test: (code: string, output: string) => output.toLowerCase().includes('complete'), 
        errorMessage: 'Should demonstrate task completion functionality' 
      },
      { 
        name: 'Shows numerical results', 
        test: (code: string, output: string) => /\d+/.test(output), 
        errorMessage: 'Output should include numerical statistics' 
      }
    ]
  }
];

function generateRemainingLessons() {
  const lessons = [];
  const topics = [
    { id: 6, title: 'Functions', content: 'def greet(name):\n    return f"Hello {name}"', expected: 'Hello' },
    { id: 7, title: 'Dictionaries', content: 'person = {"name": "Alice", "age": 25}', expected: 'Alice' },
    { id: 8, title: 'String Methods', content: 'text.upper(), text.lower(), text.strip()', expected: 'HELLO' },
    { id: 9, title: 'List Comprehensions', content: 'squares = [x**2 for x in range(5)]', expected: '16' },
    { id: 10, title: 'Tuples', content: 'coords = (10, 20)', expected: '10' }
  ];

  for (let i = 6; i <= 50; i++) {
    const topic = topics[Math.min(i - 6, topics.length - 1)] || { title: `Advanced Topic ${i}`, expected: 'output' };
    lessons.push(`  {
    id: 'python-${i}',
    title: '${topic.title}',
    description: 'Master ${topic.title.toLowerCase()} in Python',
    language: 'python' as const,
    difficulty: '${i <= 17 ? 'Beginner' : i <= 34 ? 'Intermediate' : 'Advanced'}',
    estimatedTime: 30,
    content: \`# ${topic.title}

Learn and practice ${topic.title.toLowerCase()}.

## Examples
Practice the concepts covered in this lesson.

## Challenge
Write code that demonstrates your understanding.\`,
    initialCode: \`# ${topic.title}
# Write your code here

\`,
    solution: \`# Example solution
print("Completed")
\`,
    hints: ['Review the lesson', 'Test your code'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=') || code.includes('def ')), errorMessage: 'Use proper Python syntax' },
      { name: 'Substantial code', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('#')).length >= 3, errorMessage: 'Write at least 3 lines of code' }
    ]
  }`);
  }
  
  return lessons.join(',\n');
}
