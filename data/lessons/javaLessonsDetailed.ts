import { Lesson } from '../courses'

// Comprehensive Java Lessons with detailed educational content
export const javaLessonsDetailed: Lesson[] = [
  // LESSON 1: Introduction to Java
  {
    id: 'java-1',
    title: 'Introduction to Java - Your First Program',
    description: 'Learn Java basics, structure, and write your first Hello World program',
    content: `# Introduction to Java - Your First Program

## What is Java?

Java is a powerful, object-oriented programming language created by James Gosling at Sun Microsystems in 1995. Today, it powers billions of devices from smartphones (Android) to enterprise servers.

**Why Learn Java?**
- **Platform Independent**: Write once, run anywhere (WORA)
- **Object-Oriented**: Models real-world concepts
- **Strongly Typed**: Catches errors at compile time
- **Enterprise Standard**: Used by 90% of Fortune 500 companies
- **Android Development**: Official language for Android apps
- **Large Ecosystem**: Massive library and framework collection

## How Java Works

1. **Write** code in \`.java\` files
2. **Compile** to bytecode (\`.class\` files)
3. **Run** on Java Virtual Machine (JVM)

\`\`\`
HelloWorld.java  →  javac  →  HelloWorld.class  →  JVM  →  Output
 (source code)    (compiler)    (bytecode)        (runs)
\`\`\`

## Java Program Structure

Every Java program needs:
- **Class**: Container for code
- **main Method**: Entry point
- **Statements**: Instructions ending with \`;\`

\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

**Breaking it down:**
- \`public class HelloWorld\`: Declares a public class
- \`public static void main\`: The method where program starts
- \`String[] args\`: Command-line arguments
- \`System.out.println()\`: Prints to console

## Output Methods

### System.out.println()
Prints with newline

\`\`\`java
System.out.println("Hello");
System.out.println("World");
// Output:
// Hello
// World
\`\`\`

### System.out.print()
Prints without newline

\`\`\`java
System.out.print("Hello ");
System.out.print("World");
// Output: Hello World
\`\`\`

### System.out.printf()
Formatted output

\`\`\`java
String name = "Alice";
int age = 25;
System.out.printf("Name: %s, Age: %d%n", name, age);
// Output: Name: Alice, Age: 25
\`\`\`

## Comments

\`\`\`java
// Single-line comment

/* 
 * Multi-line comment
 * Useful for documentation
 */

/**
 * JavaDoc comment
 * Used to generate documentation
 * @author Your Name
 */
\`\`\`

## Java Naming Conventions

- **Classes**: PascalCase (\`HelloWorld\`, \`UserAccount\`)
- **Methods**: camelCase (\`printMessage\`, \`calculateTotal\`)
- **Variables**: camelCase (\`firstName\`, \`totalCount\`)
- **Constants**: UPPER_SNAKE_CASE (\`MAX_SIZE\`, \`PI_VALUE\`)

## Common Mistakes to Avoid

1. **Case Sensitivity**: \`Main\` ≠ \`main\`
2. **Missing Semicolons**: Every statement needs \`;\`
3. **Class Name Mismatch**: File name must match class name
4. **Package Statement**: Should be first line (if used)

## Real-World Example

\`\`\`java
public class Welcome {
    public static void main(String[] args) {
        // Display company welcome message
        System.out.println("=================================");
        System.out.println("  Welcome to TechCorp Solutions  ");
        System.out.println("=================================");
        System.out.println();
        System.out.println("Java Version: " + System.getProperty("java.version"));
        System.out.println("OS: " + System.getProperty("os.name"));
    }
}
\`\`\`

## Java vs Other Languages

| Feature | Java | Python | JavaScript |
|---------|------|--------|------------|
| Typing | Static | Dynamic | Dynamic |
| Compilation | Compiled | Interpreted | Interpreted |
| Speed | Fast | Slower | Fast |
| Use Case | Enterprise | Data Science | Web |

## Why Java is Still Relevant (2024)

1. **Android Development**: 3+ billion Android devices
2. **Enterprise Systems**: Banking, healthcare, e-commerce
3. **Big Data**: Hadoop, Apache Spark
4. **Cloud Computing**: Spring Boot microservices
5. **Job Market**: Consistently top 3 in demand`,
    language: 'java',
    difficulty: 'Beginner',
    estimatedTime: 20,
    initialCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Print "Hello, Java!" to the console
        // TODO: Print your name on a new line
        // TODO: Print your favorite programming language
        
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        // Solution: Personalized greeting
        
        System.out.println("Hello, Java!");
        System.out.println("My name is Alice");
        System.out.println("My favorite language is Java");
        
        // Alternative with formatted output
        String name = "Alice";
        String language = "Java";
        System.out.printf("%nName: %s%nFavorite Language: %s%n", name, language);
    }
}`,
    expectedOutput: 'Hello, Java!\nMy name is Alice\nMy favorite language is Java',
    hints: [
      'Use System.out.println() to print with automatic newline',
      'Each statement must end with a semicolon ;',
      'Strings are enclosed in double quotes ""'
    ]
  },

  // LESSON 2: Variables and Data Types
  {
    id: 'java-2',
    title: 'Variables and Primitive Data Types',
    description: 'Master Java variables, primitive types, and type conversion',
    content: `# Variables and Primitive Data Types

## What are Variables?

Variables are containers that store data values. In Java, you must **declare** the type before using a variable.

\`\`\`java
int age = 25;          // Declare and initialize
String name;           // Declare only
name = "Alice";        // Initialize later
\`\`\`

## Java's 8 Primitive Types

### 1. Integer Types

#### byte (8-bit)
Range: -128 to 127

\`\`\`java
byte age = 25;
byte temperature = -10;
// Use when memory is critical
\`\`\`

#### short (16-bit)
Range: -32,768 to 32,767

\`\`\`java
short year = 2024;
short population = 30000;
\`\`\`

#### int (32-bit) - Most Common
Range: -2.1 billion to 2.1 billion

\`\`\`java
int count = 1000000;
int balance = -5000;
// Default choice for integers
\`\`\`

#### long (64-bit)
Range: -9.2 quintillion to 9.2 quintillion

\`\`\`java
long worldPopulation = 8000000000L; // Note the 'L' suffix
long distance = 384400L; // km to moon
\`\`\`

### 2. Floating-Point Types

#### float (32-bit)
6-7 decimal digits precision

\`\`\`java
float price = 19.99f; // Note the 'f' suffix
float pi = 3.14f;
\`\`\`

#### double (64-bit) - Most Common
15 decimal digits precision

\`\`\`java
double exactPrice = 19.99;
double piPrecise = 3.14159265359;
// Default choice for decimals
\`\`\`

### 3. Character Type

#### char (16-bit Unicode)
Single character

\`\`\`java
char grade = 'A';
char symbol = '@';
char unicode = '\\u0041'; // Unicode for 'A'
\`\`\`

### 4. Boolean Type

#### boolean
true or false only

\`\`\`java
boolean isActive = true;
boolean hasAccess = false;
boolean isAdult = age >= 18; // From expression
\`\`\`

## Variable Declaration Syntax

\`\`\`java
// Single declaration
int count = 0;

// Multiple declarations
int x = 10, y = 20, z = 30;

// Declaration without initialization
int value;
value = 100; // Initialize later

// Final variables (constants)
final double PI = 3.14159;
final int MAX_USERS = 100;
// PI = 3.14; // ERROR: cannot reassign final variable
\`\`\`

## Type Conversion

### Implicit Conversion (Widening)
Automatic conversion from smaller to larger type

\`\`\`java
int myInt = 100;
long myLong = myInt;      // int → long (automatic)
double myDouble = myInt;  // int → double (automatic)

System.out.println(myDouble); // 100.0
\`\`\`

**Widening Order:**
\`\`\`
byte → short → int → long → float → double
              char ↗
\`\`\`

### Explicit Conversion (Narrowing)
Manual conversion from larger to smaller type

\`\`\`java
double myDouble = 9.78;
int myInt = (int) myDouble; // Cast to int

System.out.println(myInt); // 9 (decimal part lost!)

// Potential data loss
long bigNumber = 1000000L;
int smaller = (int) bigNumber; // OK if within int range
\`\`\`

## Arithmetic with Different Types

\`\`\`java
int a = 5;
int b = 2;

// Integer division
int result1 = a / b;
System.out.println(result1); // 2 (not 2.5!)

// Get decimal result
double result2 = (double) a / b;
System.out.println(result2); // 2.5

// Mixed types
int x = 10;
double y = 3.5;
double z = x + y; // int promoted to double
System.out.println(z); // 13.5
\`\`\`

## String (Reference Type)

Strings are objects, not primitives:

\`\`\`java
String name = "Alice";
String greeting = "Hello, " + name; // Concatenation
String multiLine = """
                   This is a
                   multi-line string
                   in Java 15+
                   """;

// String methods
int length = name.length();         // 5
char first = name.charAt(0);        // 'A'
String upper = name.toUpperCase();  // "ALICE"
boolean contains = name.contains("Ali"); // true
\`\`\`

## Variable Scope

### Local Variables
Declared inside methods

\`\`\`java
public class Example {
    public static void main(String[] args) {
        int localVar = 10; // Local to main method
        System.out.println(localVar);
    }
    
    public static void test() {
        // System.out.println(localVar); // ERROR: not accessible
    }
}
\`\`\`

### Instance Variables
Declared inside class, outside methods

\`\`\`java
public class User {
    String name;    // Instance variable
    int age;        // Instance variable
    
    public void display() {
        System.out.println(name); // Accessible here
    }
}
\`\`\`

## Best Practices

1. **Use Meaningful Names**: \`totalCount\` not \`tc\`
2. **Choose Right Type**: \`int\` for counters, \`double\` for money
3. **Initialize Variables**: Don't leave uninitialized
4. **Use \`final\`** for constants: \`final int MAX_SIZE = 100\`
5. **Avoid Magic Numbers**: Use named constants

## Common Pitfalls

\`\`\`java
// Integer division trap
int result = 5 / 2;
System.out.println(result); // 2, not 2.5!

// Overflow
int maxInt = Integer.MAX_VALUE;
int overflow = maxInt + 1;
System.out.println(overflow); // -2147483648 (overflow!)

// Uninitialized local variable
int x;
// System.out.println(x); // ERROR: variable might not be initialized
\`\`\`

## Real-World Example

\`\`\`java
public class ShoppingCart {
    public static void main(String[] args) {
        // Product details
        String productName = "Laptop";
        double price = 899.99;
        int quantity = 2;
        final double TAX_RATE = 0.08; // 8% tax
        
        // Calculate total
        double subtotal = price * quantity;
        double tax = subtotal * TAX_RATE;
        double total = subtotal + tax;
        
        // Display receipt
        System.out.println("====== RECEIPT ======");
        System.out.printf("Product: %s%n", productName);
        System.out.printf("Price: $%.2f%n", price);
        System.out.printf("Quantity: %d%n", quantity);
        System.out.printf("Subtotal: $%.2f%n", subtotal);
        System.out.printf("Tax (8%%): $%.2f%n", tax);
        System.out.printf("Total: $%.2f%n", total);
    }
}
\`\`\``,
    language: 'java',
    difficulty: 'Beginner',
    estimatedTime: 25,
    initialCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Create variables for a student record
        // TODO: String name - student's name
        // TODO: int age - student's age
        // TODO: double gpa - student's GPA (0.0 to 4.0)
        // TODO: boolean isEnrolled - enrollment status
        
        // TODO: Display all information in a formatted way
        
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        // Solution: Student record
        
        String name = "Alice Johnson";
        int age = 20;
        double gpa = 3.85;
        boolean isEnrolled = true;
        
        // Display information
        System.out.println("====== STUDENT RECORD ======");
        System.out.printf("Name: %s%n", name);
        System.out.printf("Age: %d%n", age);
        System.out.printf("GPA: %.2f%n", gpa);
        System.out.printf("Enrolled: %s%n", isEnrolled ? "Yes" : "No");
        
        // Alternative concatenation method
        System.out.println("\\n" + name + " is " + age + " years old with a GPA of " + gpa);
    }
}`,
    expectedOutput: '====== STUDENT RECORD ======\nName: Alice Johnson\nAge: 20\nGPA: 3.85\nEnrolled: Yes',
    hints: [
      'Use String for text, int for whole numbers, double for decimals, boolean for true/false',
      'System.out.printf() allows formatted output with %s (string), %d (integer), %f (float)',
      'Variables must be declared with their type before use'
    ]
  },

  // LESSON 3: Operators
  {
    id: 'java-3',
    title: 'Java Operators - Arithmetic, Comparison, and Logical',
    description: 'Master all Java operators and expressions',
    content: `# Java Operators

## Arithmetic Operators

### Basic Math Operations

\`\`\`java
int a = 10, b = 3;

System.out.println(a + b);  // 13  (Addition)
System.out.println(a - b);  // 7   (Subtraction)
System.out.println(a * b);  // 30  (Multiplication)
System.out.println(a / b);  // 3   (Division - integer)
System.out.println(a % b);  // 1   (Modulus - remainder)

// Division with decimals
double result = 10.0 / 3.0;
System.out.println(result); // 3.3333...
\`\`\`

### Increment and Decrement

\`\`\`java
int count = 5;

// Post-increment (use then increment)
int x = count++;
System.out.println(x);      // 5 (original value)
System.out.println(count);  // 6 (incremented)

// Pre-increment (increment then use)
int y = ++count;
System.out.println(y);      // 7 (incremented value)
System.out.println(count);  // 7

// Same for decrement
count--;  // Post-decrement
--count;  // Pre-decrement
\`\`\`

### Compound Assignment

\`\`\`java
int num = 10;

num += 5;  // num = num + 5  (15)
num -= 3;  // num = num - 3  (12)
num *= 2;  // num = num * 2  (24)
num /= 4;  // num = num / 4  (6)
num %= 4;  // num = num % 4  (2)
\`\`\`

## Comparison Operators

Return boolean (true/false)

\`\`\`java
int a = 10, b = 20;

System.out.println(a == b);  // false (equal to)
System.out.println(a != b);  // true  (not equal to)
System.out.println(a > b);   // false (greater than)
System.out.println(a < b);   // true  (less than)
System.out.println(a >= b);  // false (greater than or equal)
System.out.println(a <= b);  // true  (less than or equal)
\`\`\`

### Comparing Strings

\`\`\`java
String str1 = "hello";
String str2 = "hello";
String str3 = "Hello";

// DON'T use == for strings
System.out.println(str1 == str2);  // May be true (but unreliable)

// DO use .equals() for strings
System.out.println(str1.equals(str2));  // true
System.out.println(str1.equals(str3));  // false (case-sensitive)

// Case-insensitive comparison
System.out.println(str1.equalsIgnoreCase(str3));  // true
\`\`\`

## Logical Operators

Combine boolean expressions

### AND Operator (&&)
Both must be true

\`\`\`java
int age = 25;
boolean hasLicense = true;

// Can rent car if age >= 21 AND has license
boolean canRent = (age >= 21) && hasLicense;
System.out.println(canRent); // true

// Short-circuit: if first is false, second isn't checked
boolean result = (age < 18) && (age / 0 > 0); // No error! Short-circuits
\`\`\`

### OR Operator (||)
At least one must be true

\`\`\`java
boolean isWeekend = false;
boolean isHoliday = true;

// Day off if weekend OR holiday
boolean dayOff = isWeekend || isHoliday;
System.out.println(dayOff); // true

// Short-circuit: if first is true, second isn't checked
boolean result = (age > 18) || (age / 0 > 0); // No error! Short-circuits
\`\`\`

### NOT Operator (!)
Inverts boolean value

\`\`\`java
boolean isLoggedIn = false;
boolean needsLogin = !isLoggedIn;
System.out.println(needsLogin); // true

// Double negation
boolean value = true;
System.out.println(!!value); // true (same as original)
\`\`\`

## Operator Precedence

Order of evaluation (highest to lowest):

\`\`\`java
// 1. Parentheses ()
// 2. Unary: ++, --, !
// 3. Multiplication: *, /, %
// 4. Addition: +, -
// 5. Comparison: <, >, <=, >=
// 6. Equality: ==, !=
// 7. Logical AND: &&
// 8. Logical OR: ||

// Example
int result = 10 + 5 * 2;
System.out.println(result); // 20 (not 30)

// Use parentheses for clarity
int result2 = (10 + 5) * 2;
System.out.println(result2); // 30
\`\`\`

## Ternary Operator

Shorthand for if-else

\`\`\`java
// Syntax: condition ? valueIfTrue : valueIfFalse

int age = 20;
String status = (age >= 18) ? "Adult" : "Minor";
System.out.println(status); // Adult

// Nested ternary (use sparingly)
int score = 85;
String grade = (score >= 90) ? "A" : 
               (score >= 80) ? "B" : 
               (score >= 70) ? "C" : "F";
System.out.println(grade); // B
\`\`\`

## Bitwise Operators

Work at bit level (advanced)

\`\`\`java
int a = 5;  // 0101 in binary
int b = 3;  // 0011 in binary

System.out.println(a & b);  // 1   (AND: 0001)
System.out.println(a | b);  // 7   (OR:  0111)
System.out.println(a ^ b);  // 6   (XOR: 0110)
System.out.println(~a);     // -6  (NOT: inverts all bits)
System.out.println(a << 1); // 10  (Left shift: 1010)
System.out.println(a >> 1); // 2   (Right shift: 0010)
\`\`\`

## Practical Examples

### Tip Calculator

\`\`\`java
double billAmount = 50.00;
double tipPercentage = 0.18; // 18%

double tipAmount = billAmount * tipPercentage;
double totalAmount = billAmount + tipAmount;

System.out.printf("Bill: $%.2f%n", billAmount);
System.out.printf("Tip (18%%): $%.2f%n", tipAmount);
System.out.printf("Total: $%.2f%n", totalAmount);
\`\`\`

### Even/Odd Checker

\`\`\`java
int number = 42;
boolean isEven = (number % 2 == 0);

System.out.println(number + " is " + (isEven ? "even" : "odd"));
\`\`\`

### Age Category

\`\`\`java
int age = 25;
String category;

if (age < 13) {
    category = "Child";
} else if (age < 20) {
    category = "Teenager";
} else if (age < 65) {
    category = "Adult";
} else {
    category = "Senior";
}

System.out.println("Age category: " + category);
\`\`\`

## Common Mistakes

\`\`\`java
// Using = instead of ==
int x = 5;
// if (x = 10) { } // ERROR: cannot convert int to boolean

// Integer division
int result = 5 / 2;
System.out.println(result); // 2 (not 2.5!)

// String comparison with ==
String s1 = new String("hello");
String s2 = new String("hello");
System.out.println(s1 == s2);  // false
System.out.println(s1.equals(s2));  // true (correct way)
\`\`\`

## Best Practices

1. **Use parentheses** for clarity: \`(a + b) * c\`
2. **Avoid complex expressions**: Break into multiple lines
3. **Use .equals()** for string comparison
4. **Check for division by zero** before dividing
5. **Prefer readability** over cleverness`,
    language: 'java',
    difficulty: 'Beginner',
    estimatedTime: 30,
    initialCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Create a simple calculator
        // Create variables: num1 = 15, num2 = 4
        // Calculate and display:
        // - Addition
        // - Subtraction
        // - Multiplication
        // - Division (as double)
        // - Remainder (modulus)
        
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        // Solution: Simple calculator
        
        int num1 = 15;
        int num2 = 4;
        
        // Perform operations
        int sum = num1 + num2;
        int difference = num1 - num2;
        int product = num1 * num2;
        double quotient = (double) num1 / num2;  // Cast for decimal result
        int remainder = num1 % num2;
        
        // Display results
        System.out.println("====== CALCULATOR ======");
        System.out.printf("%d + %d = %d%n", num1, num2, sum);
        System.out.printf("%d - %d = %d%n", num1, num2, difference);
        System.out.printf("%d * %d = %d%n", num1, num2, product);
        System.out.printf("%d / %d = %.2f%n", num1, num2, quotient);
        System.out.printf("%d %% %d = %d%n", num1, num2, remainder);
    }
}`,
    expectedOutput: '====== CALCULATOR ======\n15 + 4 = 19\n15 - 4 = 11\n15 * 4 = 60\n15 / 4 = 3.75\n15 % 4 = 3',
    hints: [
      'For decimal division, cast one number to double: (double) num1 / num2',
      'The modulus operator % gives the remainder after division',
      'Use System.out.printf() with %d for integers and %.2f for decimals with 2 decimal places'
    ]
  }
]
