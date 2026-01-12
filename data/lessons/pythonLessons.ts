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

Python is one of the most popular programming languages in the world!

## Your First Python Program

\`\`\`python
print("Hello, World!")
\`\`\`

The \`print()\` function displays output.

## Variables

\`\`\`python
name = "Alice"
age = 25
print(f"Hi, I'm {name}")
\`\`\`

## Challenge
Create variables for your name and age, then print a greeting using an f-string.`,
    initialCode: `# Create your variables
name = "Your Name"
age = 20

# Print greeting using f-string
print(f"Hello, I'm {name} and I'm {age} years old")
`,
    solution: `name = "Alice"
age = 25
print(f"Hello, I'm {name} and I'm {age} years old")`,
    hints: ['Use f"..." for f-strings', 'Variables don\'t need quotes for numbers'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses print', test: (code: string, output: string) => code.includes('print('), errorMessage: 'Use print() function' },
      { name: 'Contains greeting', test: (code: string, output: string) => output.toLowerCase().includes('hello') || output.toLowerCase().includes('hi'), errorMessage: 'Output should contain a greeting' },
      { name: 'Shows age', test: (code: string, output: string) => /\d+/.test(output), errorMessage: 'Output should show age (a number)' }
    ]
  },
  {
    id: 'python-2',
    title: 'Math Operations',
    description: 'Perform calculations and use arithmetic operators',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: `# Python Math Operations 🔢

\`\`\`python
result = 10 + 5    # 15
result = 10 - 3    # 7
result = 4 * 6     # 24
result = 20 / 4    # 5.0
result = 2 ** 3    # 8 (power)
\`\`\`

## Challenge
Calculate and print: 50 + 25, 100 - 30, 8 * 7`,
    initialCode: `# Perform calculations
result1 = 50 + 25
result2 = 100 - 30
result3 = 8 * 7

# Print results
print(f"Addition: {result1}")
print(f"Subtraction: {result2}")
print(f"Multiplication: {result3}")
`,
    solution: `result1 = 50 + 25
result2 = 100 - 30
result3 = 8 * 7
print(f"Addition: {result1}")
print(f"Subtraction: {result2}")
print(f"Multiplication: {result3}")`,
    hints: ['Use +, -, * for operations', 'Print each result'],
    testCases: [
      { name: 'Shows 75', test: (code: string, output: string) => output.includes('75'), errorMessage: 'Should show 50 + 25 = 75' },
      { name: 'Shows 70', test: (code: string, output: string) => output.includes('70'), errorMessage: 'Should show 100 - 30 = 70' },
      { name: 'Shows 56', test: (code: string, output: string) => output.includes('56'), errorMessage: 'Should show 8 * 7 = 56' },
      { name: 'Multiple outputs', test: (code: string, output: string) => output.split('\n').length >= 3, errorMessage: 'Should print at least 3 lines' }
    ]
  },
  {
    id: 'python-3',
    title: 'Conditionals - If/Else',
    description: 'Make decisions with if/else statements',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Conditionals 🤔

\`\`\`python
age = 18
if age >= 18:
    print("Adult")
else:
    print("Minor")
\`\`\`

## Challenge
Create a variable for age. If >= 18 print "Can vote", else print "Too young"`,
    initialCode: `# Set age
age = 20

# Check voting eligibility
if age >= 18:
    print("Can vote")
else:
    print("Too young")
`,
    solution: `age = 20
if age >= 18:
    print("Can vote")
else:
    print("Too young")`,
    hints: ['Use if age >= 18:', 'Remember indentation!'],
    testCases: [
      { name: 'Has if statement', test: (code: string, output: string) => code.includes('if'), errorMessage: 'Use if statement' },
      { name: 'Checks age', test: (code: string, output: string) => />=?\s*18|18\s*<=?/.test(code), errorMessage: 'Check if age >= 18' },
      { name: 'Has output', test: (code: string, output: string) => output.toLowerCase().includes('vote') || output.toLowerCase().includes('young'), errorMessage: 'Output should mention voting eligibility' }
    ]
  },
  {
    id: 'python-4',
    title: 'Lists',
    description: 'Work with Python lists',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Python Lists 📋

\`\`\`python
fruits = ["apple", "banana", "orange"]
print(fruits[0])  # apple
fruits.append("mango")
print(len(fruits))  # 4
\`\`\`

## Challenge
Create a list of 3 fruits, add one more, print the first fruit and total count`,
    initialCode: `# Create list
fruits = ["apple", "banana", "orange"]

# Add a fruit
fruits.append("mango")

# Print first fruit and count
print(f"First fruit: {fruits[0]}")
print(f"Total fruits: {len(fruits)}")
`,
    solution: `fruits = ["apple", "banana", "orange"]
fruits.append("mango")
print(f"First fruit: {fruits[0]}")
print(f"Total fruits: {len(fruits)}")`,
    hints: ['Use .append() to add', 'Access with [0]', 'len() for count'],
    testCases: [
      { name: 'Creates list', test: (code: string, output: string) => code.includes('[') && code.includes(']'), errorMessage: 'Create a list with []' },
      { name: 'Shows count of 4', test: (code: string, output: string) => output.includes('4'), errorMessage: 'Should show 4 items after adding one' },
      { name: 'Shows first item', test: (code: string, output: string) => !!output.toLowerCase().match(/apple|banana|orange|grape|mango/), errorMessage: 'Should show the first fruit' }
    ]
  },
  {
    id: 'python-5',
    title: 'Loops',
    description: 'Repeat code with for loops',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Loops 🔁

\`\`\`python
for i in range(3):
    print(i)  # 0, 1, 2

numbers = [1, 2, 3]
for num in numbers:
    print(num * 2)  # 2, 4, 6
\`\`\`

## Challenge
Create a list [1, 2, 3, 4, 5] and print each number multiplied by 2`,
    initialCode: `# Create list
numbers = [1, 2, 3, 4, 5]

# Loop and print each * 2
for num in numbers:
    print(num * 2)
`,
    solution: `numbers = [1, 2, 3, 4, 5]
for num in numbers:
    print(num * 2)`,
    hints: ['Use for num in list:', 'Multiply with num * 2'],
    testCases: [
      { name: 'Has for loop', test: (code: string, output: string) => code.includes('for '), errorMessage: 'Use a for loop' },
      { name: 'Shows 2', test: (code: string, output: string) => output.includes('2'), errorMessage: 'Output should include 2 (1*2)' },
      { name: 'Shows 10', test: (code: string, output: string) => output.includes('10'), errorMessage: 'Output should include 10 (5*2)' },
      { name: 'Multiple lines', test: (code: string, output: string) => output.split('\n').length >= 5, errorMessage: 'Should output 5 numbers' }
    ]
  },

  // Lessons 6-50: Comprehensive topics with proper validation
    {
    id: 'python-6',
    title: 'Functions - Reusable Code',
    description: 'Create and use functions to organize code',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Functions 🔧

Functions let you reuse code!

## Creating Functions
\`\`\`python
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))  # Hello, Alice!
\`\`\`

## Function with Return
\`\`\`python
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # 8
\`\`\`

## Challenge
Create a function \`square(n)\` that returns n squared. Test it with numbers 1-5.`,
    initialCode: `# Create function that squares a number
def square(n):
    return n ** 2

# Test your function
for i in range(1, 6):
    print(f"{i} squared = {square(i)}")
`,
    solution: `def square(n):
    return n ** 2

for i in range(1, 6):
    print(f"{i} squared = {square(i)}")`,
    hints: ['Use def to define function', 'Return n ** 2 or n * n', 'Call function inside loop'],
    testCases: [
      { name: 'Has function', test: (code: string, output: string) => code.includes('def '), errorMessage: 'Must define a function with def' },
      { name: 'Returns value', test: (code: string, output: string) => code.includes('return'), errorMessage: 'Function should return a value' },
      { name: 'Shows squares', test: (code: string, output: string) => output.includes('1') && output.includes('25'), errorMessage: 'Should show 1 squared and 5 squared (25)' },
      { name: 'Multiple outputs', test: (code: string, output: string) => output.split('\n').length >= 5, errorMessage: 'Should print 5 results' }
    ]
  },
  {
    id: 'python-7',
    title: 'Dictionaries - Key-Value Pairs',
    description: 'Store and access data with dictionaries',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Dictionaries 📚

Dictionaries store key-value pairs.

## Creating Dictionaries
\`\`\`python
person = {
    "name": "Alice",
    "age": 25,
    "city": "NYC"
}

print(person["name"])  # Alice
print(person["age"])   # 25
\`\`\`

## Adding and Modifying
\`\`\`python
person["job"] = "Developer"  # Add new key
person["age"] = 26           # Update value
print(person)
\`\`\`

## Challenge
Create a dictionary for a book with title, author, year, and pages. Print each value.`,
    initialCode: `# Create a book dictionary
book = {
    "title": "Python Guide",
    "author": "John Doe",
    "year": 2024,
    "pages": 350
}

# Print each value
print(f"Title: {book['title']}")
print(f"Author: {book['author']}")
print(f"Year: {book['year']}")
print(f"Pages: {book['pages']}")
`,
    solution: `book = {
    "title": "Python Guide",
    "author": "John Doe",
    "year": 2024,
    "pages": 350
}

print(f"Title: {book['title']}")
print(f"Author: {book['author']}")
print(f"Year: {book['year']}")
print(f"Pages: {book['pages']}")`,
    hints: ['Use curly braces {} for dictionaries', 'Access with ["key"]', 'Strings need quotes, numbers don\'t'],
    testCases: [
      { name: 'Has dictionary', test: (code: string, output: string) => code.includes('{') && code.includes('}'), errorMessage: 'Must create a dictionary with {}' },
      { name: 'Has keys', test: (code: string, output: string) => code.includes('"title"') || code.includes("'title'"), errorMessage: 'Dictionary should have keys like "title"' },
      { name: 'Shows output', test: (code: string, output: string) => output.trim().length > 20, errorMessage: 'Should print dictionary values' },
      { name: 'Multiple lines', test: (code: string, output: string) => output.split('\n').length >= 4, errorMessage: 'Should print at least 4 values' }
    ]
  },
  {
    id: 'python-8',
    title: 'String Methods - Text Manipulation',
    description: 'Transform and manipulate strings',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# String Methods 📝

Python has many built-in string methods.

## Common Methods
\`\`\`python
text = "  Hello World  "

print(text.upper())      # HELLO WORLD
print(text.lower())      # hello world
print(text.strip())      # Hello World (removes spaces)
print(text.replace("World", "Python"))  # Hello Python
\`\`\`

## Checking Strings
\`\`\`python
text = "hello"
print(text.startswith("he"))  # True
print(text.endswith("lo"))    # True
print("123".isdigit())         # True
\`\`\`

## Challenge
Create a name variable, then print it in uppercase, lowercase, and capitalized.`,
    initialCode: `# String manipulation
name = "python programming"

# Print in different cases
print(f"Uppercase: {name.upper()}")
print(f"Lowercase: {name.lower()}")
print(f"Title Case: {name.title()}")
print(f"Length: {len(name)}")
`,
    solution: `name = "python programming"

print(f"Uppercase: {name.upper()}")
print(f"Lowercase: {name.lower()}")
print(f"Title Case: {name.title()}")
print(f"Length: {len(name)}")`,
    hints: ['Use .upper() for uppercase', 'Use .lower() for lowercase', 'Use .title() for title case', 'len() gets string length'],
    testCases: [
      { name: 'Uses string methods', test: (code: string, output: string) => code.includes('.upper') || code.includes('.lower') || code.includes('.title'), errorMessage: 'Must use string methods like .upper() or .lower()' },
      { name: 'Shows uppercase', test: (code: string, output: string) => /[A-Z]{5,}/.test(output), errorMessage: 'Should show uppercase text' },
      { name: 'Multiple outputs', test: (code: string, output: string) => output.split('\n').length >= 3, errorMessage: 'Should print multiple transformations' }
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
  {
    id: 'python-10',
    title: 'Tuples',
    description: 'Learn immutable sequences with tuples',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Tuples in Python

Tuples are immutable sequences - once created, they cannot be changed.

## Creating Tuples
\`\`\`python
# Create a tuple with parentheses
coordinates = (10, 20)
colors = ("red", "green", "blue")

# Tuples can hold mixed types
mixed = (1, "hello", 3.14, True)
\`\`\`

## Accessing Elements
\`\`\`python
point = (5, 10, 15)
print(point[0])  # 5
print(point[2])  # 15
\`\`\`

## Challenge
Create a tuple of your favorite numbers and print the first and last elements.`,
    initialCode: `# Create a tuple of numbers
numbers = (10, 20, 30, 40, 50)

# Print first element
print(numbers[0])

# Print last element
print(numbers[4])
`,
    solution: `numbers = (10, 20, 30, 40, 50)
print(numbers[0])
print(numbers[4])`,
    hints: ['Use parentheses () to create tuples', 'Access elements with [index]', 'Last element is at index 4'],
    testCases: [
      { name: 'Has tuple', test: (code: string, output: string) => code.includes('(') && code.includes(')'), errorMessage: 'Create a tuple with ()' },
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Prints first element', test: (code: string, output: string) => output.includes('10'), errorMessage: 'Print the first element' }
    ]
  },
  {
    id: 'python-11',
    title: 'Sets',
    description: 'Work with unique collections using sets',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Sets in Python

Sets are unordered collections of unique elements.

## Creating Sets
\`\`\`python
fruits = {"apple", "banana", "cherry"}
numbers = {1, 2, 3, 4, 5}
\`\`\`

## Challenge
Create a set and print its contents.`,
    initialCode: `# Create a set of colors
colors = {"red", "blue", "green"}

# Print the set
print(colors)
`,
    solution: `colors = {"red", "blue", "green"}
print(colors)`,
    hints: ['Use curly braces {} for sets', 'Sets contain unique elements'],
    testCases: [
      { name: 'Has output', test: (code: string, output: string) => output.trim().length > 0, errorMessage: 'Code must produce output' },
      { name: 'Uses Python syntax', test: (code: string, output: string) => !code.includes('//') && (code.includes('print(') || code.includes('=')), errorMessage: 'Use proper Python syntax' }
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
