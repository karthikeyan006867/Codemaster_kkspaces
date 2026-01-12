import { Lesson } from '../courses'

// Comprehensive C# Lessons with detailed educational content
export const csharpLessonsDetailed: Lesson[] = [
  // LESSON 1: Introduction to C#
  {
    id: 'csharp-1',
    title: 'Introduction to C# - Your First Program',
    description: 'Learn C# basics, .NET platform, and write your first Console application',
    content: `# Introduction to C# - Your First Program

## What is C#?

C# (pronounced "C-Sharp") is a modern, object-oriented programming language developed by Microsoft in 2000 as part of the .NET initiative. It combines the power of C++ with the simplicity of Visual Basic.

**Why Learn C#?**
- **Unity Game Development**: #1 language for Unity (50% of games)
- **Enterprise Applications**: Windows desktop, web, and cloud apps
- **Cross-Platform**: Runs on Windows, macOS, Linux (.NET Core)
- **Modern Language Features**: async/await, LINQ, pattern matching
- **Strong Type Safety**: Catches errors at compile time
- **Excellent Tooling**: Visual Studio, VS Code, Rider

## The .NET Platform

C# runs on the .NET platform:

\`\`\`
C# Code (.cs) → Compiler → Intermediate Language (IL) → CLR → Machine Code
                                                    (Common Language Runtime)
\`\`\`

**.NET Ecosystem:**
- **.NET Core**: Cross-platform (Windows, macOS, Linux)
- **.NET Framework**: Windows only (legacy)
- **Xamarin**: Mobile apps (iOS, Android)
- **Blazor**: WebAssembly apps in C#

## C# Program Structure

Every C# program has:
- **Namespace**: Organizes code
- **Class**: Container for methods
- **Main Method**: Entry point

\`\`\`csharp
using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
}
\`\`\`

**C# 9+ Top-Level Statements** (Simpler):

\`\`\`csharp
using System;

Console.WriteLine("Hello, World!");
// No class or Main method needed!
\`\`\`

## Console Output Methods

### Console.WriteLine()
Prints with newline

\`\`\`csharp
Console.WriteLine("Hello");
Console.WriteLine("World");
// Output:
// Hello
// World
\`\`\`

### Console.Write()
Prints without newline

\`\`\`csharp
Console.Write("Hello ");
Console.Write("World");
// Output: Hello World
\`\`\`

### String Interpolation
Modern way to format strings

\`\`\`csharp
string name = "Alice";
int age = 25;

// String interpolation (C# 6+)
Console.WriteLine($"Name: {name}, Age: {age}");

// Old way (string.Format)
Console.WriteLine("Name: {0}, Age: {1}", name, age);

// Concatenation (avoid)
Console.WriteLine("Name: " + name + ", Age: " + age);
\`\`\`

## Comments

\`\`\`csharp
// Single-line comment

/* 
 * Multi-line comment
 * Useful for documentation
 */

/// <summary>
/// XML Documentation comment
/// Used to generate API documentation
/// </summary>
/// <param name="name">Parameter description</param>
\`\`\`

## C# Naming Conventions

- **Classes & Methods**: PascalCase (\`Program\`, \`CalculateTotal\`)
- **Variables & Parameters**: camelCase (\`firstName\`, \`totalCount\`)
- **Constants**: PascalCase (\`MaxValue\`, \`DefaultTimeout\`)
- **Private Fields**: _camelCase (\`_userName\`, \`_count\`)

## Data Types at a Glance

\`\`\`csharp
// Numbers
int age = 25;
double price = 19.99;
decimal money = 100.50m; // Use for currency

// Text
char grade = 'A';
string name = "Alice";

// Boolean
bool isActive = true;

// Using var (type inference)
var city = "New York"; // Compiler determines type
\`\`\`

## Console Input

\`\`\`csharp
Console.Write("Enter your name: ");
string name = Console.ReadLine();

Console.Write("Enter your age: ");
int age = int.Parse(Console.ReadLine());

Console.WriteLine($"Hello, {name}! You are {age} years old.");
\`\`\`

## Common Mistakes to Avoid

1. **Forgetting Semicolons**: Every statement needs \`;\`
2. **Case Sensitivity**: \`console\` ≠ \`Console\`
3. **String Concatenation**: Use \`$""\` interpolation instead of \`+\`
4. **Null Reference**: Check for null before using objects
5. **Not Using \`var\`**: Use \`var\` when type is obvious

## C# vs Other Languages

| Feature | C# | Java | JavaScript |
|---------|-----|------|------------|
| Platform | .NET | JVM | Browser/Node |
| Syntax | Modern | Verbose | Flexible |
| Type Safety | Strong | Strong | Weak |
| Async | async/await | CompletableFuture | Promises |
| Properties | Built-in | Getters/Setters | None |

## Real-World Example

\`\`\`csharp
using System;

class Program
{
    static void Main()
    {
        // Interactive greeting program
        Console.WriteLine("╔════════════════════════════╗");
        Console.WriteLine("║  Welcome to C# Learning!  ║");
        Console.WriteLine("╚════════════════════════════╝");
        
        Console.Write("\\nWhat's your name? ");
        string name = Console.ReadLine();
        
        Console.Write("How old are you? ");
        int age = int.Parse(Console.ReadLine());
        
        Console.WriteLine($"\\nNice to meet you, {name}!");
        
        if (age < 18)
            Console.WriteLine("You're a minor.");
        else
            Console.WriteLine("You're an adult.");
            
        Console.WriteLine($"\\nIn 10 years, you'll be {age + 10}!");
    }
}
\`\`\`

## Modern C# Features (C# 10+)

### Global Usings
\`\`\`csharp
// In one file (e.g., GlobalUsings.cs)
global using System;
global using System.Collections.Generic;

// Now available in all files automatically
\`\`\`

### File-Scoped Namespaces
\`\`\`csharp
namespace MyApp; // Applies to entire file

class Program
{
    // No nested braces needed
}
\`\`\`

### Top-Level Statements
\`\`\`csharp
// Entire program
Console.WriteLine("Hello!");
\`\`\`

## Why C# is Powerful

1. **Unity Game Development**: Most popular game engine
2. **Enterprise Software**: Banking, healthcare, e-commerce
3. **Cloud Development**: Azure, microservices
4. **Desktop Apps**: Windows, macOS, Linux (Avalonia, MAUI)
5. **Web Development**: ASP.NET Core, Blazor`,
    language: 'csharp',
    difficulty: 'Beginner',
    estimatedTime: 20,
    initialCode: `using System;

class Program
{
    static void Main()
    {
        // TODO: Print "Welcome to C#!" to the console
        // TODO: Create a variable with your name and print it
        // TODO: Create a variable with your age and print it
        
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        // Solution: Personalized greeting
        
        Console.WriteLine("Welcome to C#!");
        
        string name = "Alice";
        int age = 25;
        
        // Modern string interpolation
        Console.WriteLine($"My name is {name}");
        Console.WriteLine($"I am {age} years old");
        
        // Alternative: All in one line
        Console.WriteLine($"\\nGreeting: My name is {name} and I am {age} years old.");
    }
}`,
    expectedOutput: 'Welcome to C#!\nMy name is Alice\nI am 25 years old',
    hints: [
      'Use Console.WriteLine() to print with automatic newline',
      'String interpolation uses $"text {variable}" syntax',
      'Variables are declared with type name like: string name = "value";'
    ]
  },

  // LESSON 2: Variables and Data Types
  {
    id: 'csharp-2',
    title: 'Variables and Data Types in C#',
    description: 'Master C# variables, value types, reference types, and type conversion',
    content: `# Variables and Data Types in C#

## Variable Declaration

C# is **strongly typed** - every variable has a specific type:

\`\`\`csharp
// Explicit type declaration
int age = 25;
string name = "Alice";

// Type inference with var (C# 3+)
var city = "New York";    // string
var count = 100;          // int
var price = 19.99;        // double

// Multiple declarations
int x = 1, y = 2, z = 3;
\`\`\`

## Value Types vs Reference Types

### Value Types
Stored directly in memory (stack)

\`\`\`csharp
// Copying a value type copies the value
int a = 10;
int b = a;    // b gets a COPY of a's value
b = 20;

Console.WriteLine(a); // 10 (unchanged)
Console.WriteLine(b); // 20
\`\`\`

### Reference Types
Stored as reference to memory (heap)

\`\`\`csharp
// Copying a reference type copies the REFERENCE
int[] arr1 = { 1, 2, 3 };
int[] arr2 = arr1;  // arr2 points to SAME array
arr2[0] = 99;

Console.WriteLine(arr1[0]); // 99 (changed!)
Console.WriteLine(arr2[0]); // 99
\`\`\`

## Numeric Types

### Integer Types

\`\`\`csharp
// Signed integers
sbyte tiny = -128;           // -128 to 127 (8-bit)
short small = -32000;        // -32,768 to 32,767 (16-bit)
int normal = 2000000;        // -2.1B to 2.1B (32-bit)
long huge = 9000000000L;     // -9.2Q to 9.2Q (64-bit)

// Unsigned integers (positive only)
byte b = 255;                // 0 to 255 (8-bit)
ushort us = 65000;           // 0 to 65,535 (16-bit)
uint ui = 4000000000;        // 0 to 4.3B (32-bit)
ulong ul = 18000000000000;   // 0 to 18.4Q (64-bit)
\`\`\`

### Floating-Point Types

\`\`\`csharp
// float - 32-bit, ~7 digits precision
float price1 = 19.99f;       // Note the 'f' suffix
float pi = 3.14159f;

// double - 64-bit, ~15 digits precision (DEFAULT)
double price2 = 19.99;       // No suffix needed
double precise = 3.14159265359;

// decimal - 128-bit, ~28 digits (for MONEY)
decimal salary = 50000.50m;  // Note the 'm' suffix
decimal tax = 0.075m;
\`\`\`

**When to use:**
- \`float\`: Graphics, scientific computing
- \`double\`: General decimal calculations
- \`decimal\`: Money, financial calculations

## Character and String Types

### char
Single Unicode character

\`\`\`csharp
char grade = 'A';
char symbol = '@';
char newline = '\\n';
char unicode = '\\u0041'; // 'A' in Unicode

Console.WriteLine(grade);   // A
\`\`\`

### string
Sequence of characters (reference type)

\`\`\`csharp
string name = "Alice";
string empty = "";
string nullable = null;

// String interpolation
string greeting = $"Hello, {name}!";

// Verbatim string (ignores escape sequences)
string path = @"C:\\Users\\Alice\\Documents";

// Raw string literals (C# 11+)
string json = """
              {
                "name": "Alice",
                "age": 25
              }
              """;
\`\`\`

## Boolean Type

\`\`\`csharp
bool isActive = true;
bool hasAccess = false;

// From expressions
bool isAdult = age >= 18;
bool inRange = (x > 0 && x < 100);
\`\`\`

## Nullable Types

Allow value types to be null:

\`\`\`csharp
// Nullable syntax
int? nullableInt = null;
double? nullableDouble = null;

// Check for value
if (nullableInt.HasValue)
{
    Console.WriteLine(nullableInt.Value);
}

// Null-coalescing operator
int value = nullableInt ?? 0; // Use 0 if null

// Null-conditional operator
string? name = null;
int? length = name?.Length;   // null (no NullReferenceException)
\`\`\`

## Type Conversion

### Implicit Conversion (Safe)

\`\`\`csharp
int myInt = 100;
long myLong = myInt;      // int → long (automatic)
double myDouble = myInt;  // int → double (automatic)

Console.WriteLine(myDouble); // 100.0
\`\`\`

### Explicit Conversion (Cast)

\`\`\`csharp
double myDouble = 9.78;
int myInt = (int)myDouble; // Cast to int (loses decimal)

Console.WriteLine(myInt); // 9

// May throw exception
int big = 1000;
byte small = (byte)big;   // Overflow! Result: 232
\`\`\`

### Parse and TryParse

\`\`\`csharp
// Parse - throws exception if invalid
string text = "123";
int number = int.Parse(text);

// TryParse - returns bool, no exception
string input = "abc";
if (int.TryParse(input, out int result))
{
    Console.WriteLine($"Valid number: {result}");
}
else
{
    Console.WriteLine("Invalid number");
}
\`\`\`

### Convert Class

\`\`\`csharp
string text = "123";
int num = Convert.ToInt32(text);
double dbl = Convert.ToDouble(text);
bool flag = Convert.ToBoolean("true");

// Handles null better than Parse
string nullText = null;
int zero = Convert.ToInt32(nullText); // 0 (not exception)
\`\`\`

## Constants and Read-Only

### const
Compile-time constant

\`\`\`csharp
const double PI = 3.14159;
const int MAX_USERS = 100;

// Cannot reassign
// PI = 3.14; // ERROR
\`\`\`

### readonly
Runtime constant (set in constructor)

\`\`\`csharp
class Config
{
    public readonly string ServerUrl;
    
    public Config(string url)
    {
        ServerUrl = url; // Can set in constructor
    }
}
\`\`\`

## var vs Dynamic

### var
Type determined at compile time

\`\`\`csharp
var name = "Alice";   // string
var age = 25;         // int

// name = 123; // ERROR: cannot convert int to string
\`\`\`

### dynamic
Type determined at runtime

\`\`\`csharp
dynamic value = "Hello";
Console.WriteLine(value); // Hello

value = 123;             // OK - can change type
Console.WriteLine(value); // 123

// No compile-time checking
value.NonExistentMethod(); // Compiles! Runtime error
\`\`\`

## Default Values

\`\`\`csharp
int defaultInt = default;       // 0
double defaultDouble = default; // 0.0
bool defaultBool = default;     // false
string defaultString = default; // null

// Generic default
T GetDefault<T>() => default(T);
\`\`\`

## Real-World Example

\`\`\`csharp
using System;

class Program
{
    static void Main()
    {
        // E-commerce cart calculator
        Console.WriteLine("╔══════════════════════════╗");
        Console.WriteLine("║   Shopping Cart Total    ║");
        Console.WriteLine("╚══════════════════════════╝\\n");
        
        // Product details
        string product = "Laptop";
        decimal price = 899.99m;
        int quantity = 2;
        const decimal TAX_RATE = 0.08m;
        
        // Calculations
        decimal subtotal = price * quantity;
        decimal tax = subtotal * TAX_RATE;
        decimal total = subtotal + tax;
        
        // Display
        Console.WriteLine($"Product: {product}");
        Console.WriteLine($"Price: {price:C}");        // Currency format
        Console.WriteLine($"Quantity: {quantity}");
        Console.WriteLine($"Subtotal: {subtotal:C}");
        Console.WriteLine($"Tax (8%): {tax:C}");
        Console.WriteLine($"━━━━━━━━━━━━━━━━━━━━━━━━");
        Console.WriteLine($"Total: {total:C}");
    }
}
\`\`\`

## Best Practices

1. **Use \`var\`** when type is obvious: \`var list = new List<int>();\`
2. **Use \`decimal\`** for money calculations
3. **Use nullable types** when null is valid: \`int? age\`
4. **Use \`TryParse\`** instead of \`Parse\` for user input
5. **Name constants** in PascalCase: \`const int MaxRetries = 3;\``,
    language: 'csharp',
    difficulty: 'Beginner',
    estimatedTime: 25,
    initialCode: `using System;

class Program
{
    static void Main()
    {
        // TODO: Create a temperature converter (Celsius to Fahrenheit)
        // Formula: F = (C * 9/5) + 32
        
        // TODO: Ask user for temperature in Celsius
        // TODO: Convert to Fahrenheit
        // TODO: Display both temperatures
        
    }
}`,
    solution: `using System;

class Program
{
    static void Main()
    {
        // Solution: Temperature converter
        
        Console.Write("Enter temperature in Celsius: ");
        
        // Use TryParse for safe input
        if (double.TryParse(Console.ReadLine(), out double celsius))
        {
            // Convert to Fahrenheit
            double fahrenheit = (celsius * 9 / 5) + 32;
            
            // Display results
            Console.WriteLine($"\\n{celsius}°C = {fahrenheit}°F");
            
            // Alternative with string interpolation formatting
            Console.WriteLine($"{celsius:F1}°C = {fahrenheit:F1}°F");
        }
        else
        {
            Console.WriteLine("Invalid input!");
        }
    }
}`,
    expectedOutput: 'Enter temperature in Celsius: 25\n25°C = 77°F',
    hints: [
      'Use Console.ReadLine() to get user input as string',
      'Convert string to double using double.TryParse() for safety',
      'Formula: fahrenheit = (celsius * 9 / 5) + 32',
      'Use {value:F1} in string interpolation for 1 decimal place'
    ]
  }
]
