import { Lesson } from '../courses'

// Comprehensive PHP Lessons with detailed educational content
export const phpLessonsDetailed: Lesson[] = [
  // LESSON 1: PHP Basics & Echo
  {
    id: 'php-1',
    title: 'Introduction to PHP - Your First Script',
    description: 'Learn PHP basics, syntax, and how to display output using echo and print',
    content: `# Introduction to PHP - Your First Script

## What is PHP?

PHP (Hypertext Preprocessor) is a widely-used server-side scripting language designed for web development. Created by Rasmus Lerdorf in 1994, PHP powers over 77% of websites including WordPress, Facebook, and Wikipedia.

**Why Learn PHP?**
- **Easy to Learn**: Forgiving syntax, great for beginners
- **Web-Focused**: Built specifically for web development
- **Widely Used**: Runs on most web servers
- **Strong Ecosystem**: Frameworks like Laravel, Symfony, CodeIgniter
- **Free & Open Source**: No licensing costs

## PHP Syntax Basics

PHP code is embedded in HTML and executes on the server:

\`\`\`php
<?php
  // PHP code goes here
?>
\`\`\`

**Key Points:**
- Always start with \`<?php\`
- End with \`?>\` (optional at end of file)
- Statements end with semicolon \`;\`
- Case-sensitive for variables, case-insensitive for keywords

## Displaying Output

### echo - Most Common
Fast, can output multiple values, no return value

\`\`\`php
<?php
echo "Hello, PHP!";
echo "Hello", " ", "World"; // Multiple arguments
echo "<h1>Welcome</h1>"; // Can output HTML
?>
\`\`\`

### print - Alternative
Similar to echo, but returns 1 (can be used in expressions)

\`\`\`php
<?php
print "Hello, World!";
$result = print "Text"; // $result = 1
?>
\`\`\`

### var_dump() - Debugging
Shows type and value - great for debugging

\`\`\`php
<?php
$name = "Alice";
var_dump($name); // string(5) "Alice"

$age = 25;
var_dump($age); // int(25)
?>
\`\`\`

## PHP in HTML

PHP can be mixed with HTML:

\`\`\`php
<!DOCTYPE html>
<html>
<head>
    <title>My PHP Page</title>
</head>
<body>
    <h1><?php echo "Welcome to PHP!"; ?></h1>
    <p>The current time is: <?php echo date('H:i:s'); ?></p>
</body>
</html>
\`\`\`

## Comments in PHP

\`\`\`php
<?php
// Single-line comment

# Also a single-line comment

/* 
   Multi-line comment
   Useful for longer explanations
*/

echo "Hello"; // Inline comment
?>
\`\`\`

## Real-World Example

\`\`\`php
<?php
// Dynamic greeting based on time
$hour = date('H');

if ($hour < 12) {
    echo "Good morning!";
} elseif ($hour < 18) {
    echo "Good afternoon!";
} else {
    echo "Good evening!";
}
?>
\`\`\`

## Why PHP is Powerful

1. **Server-Side Processing**: Runs before HTML reaches browser
2. **Database Integration**: Easy MySQL, PostgreSQL, MongoDB connectivity
3. **Session Management**: Built-in user authentication
4. **File Handling**: Upload, download, manipulate files
5. **API Development**: Create RESTful APIs easily`,
    language: 'php',
    difficulty: 'Beginner',
    estimatedTime: 20,
    initialCode: `<?php
// Welcome to PHP!
// Create a program that displays your name and age

// TODO: Create a variable $name with your name
// TODO: Create a variable $age with your age
// TODO: Use echo to display: "My name is [name] and I am [age] years old"

?>`,
    solution: `<?php
// Solution: Personalized greeting

$name = "Alice";
$age = 25;

echo "My name is " . $name . " and I am " . $age . " years old";

// Alternative with concatenation operator .
// PHP uses . for string concatenation (not +)
?>`,
    expectedOutput: 'My name is Alice and I am 25 years old',
    hints: [
      'Variables in PHP start with $ (dollar sign)',
      'Use . (dot) to concatenate strings in PHP',
      'echo can display the result of concatenation'
    ]
  },

  // LESSON 2: Variables & Data Types
  {
    id: 'php-2',
    title: 'Variables & Data Types in PHP',
    description: 'Master PHP variables, data types, and type juggling',
    content: `# Variables & Data Types in PHP

## Variables in PHP

Variables are containers for storing data. In PHP, variables:
- Start with \`$\` symbol
- Followed by a letter or underscore
- Case-sensitive (\`$name\` ≠ \`$Name\`)
- No need to declare type

\`\`\`php
<?php
$message = "Hello";
$count = 42;
$price = 19.99;
$isActive = true;
?>
\`\`\`

## PHP Data Types

### 1. String
Text enclosed in quotes

\`\`\`php
<?php
$single = 'Single quotes';
$double = "Double quotes";
$name = "Alice";
$greeting = "Hello, $name"; // Variable interpolation with double quotes
$literal = 'Hello, $name'; // No interpolation with single quotes
?>
\`\`\`

### 2. Integer
Whole numbers (positive or negative)

\`\`\`php
<?php
$age = 25;
$year = 2024;
$negative = -10;
$hex = 0x1A; // Hexadecimal
$octal = 0755; // Octal
?>
\`\`\`

### 3. Float (Double)
Decimal numbers

\`\`\`php
<?php
$price = 19.99;
$pi = 3.14159;
$scientific = 2.5e3; // 2500
?>
\`\`\`

### 4. Boolean
True or false values

\`\`\`php
<?php
$isLoggedIn = true;
$hasAccess = false;

// These also evaluate to false:
$zero = 0;
$emptyString = "";
$null = null;
?>
\`\`\`

### 5. Array
Collection of values

\`\`\`php
<?php
$colors = array("red", "green", "blue");
$numbers = [1, 2, 3, 4, 5]; // Short syntax

// Associative array
$person = [
    "name" => "John",
    "age" => 30,
    "city" => "New York"
];
?>
\`\`\`

### 6. NULL
Represents no value

\`\`\`php
<?php
$empty = null;
$notSet = NULL; // Case-insensitive

// Unset variable becomes NULL
unset($name);
?>
\`\`\`

## Type Checking

\`\`\`php
<?php
$var = "Hello";

// Get type as string
echo gettype($var); // string

// Check specific type
var_dump(is_string($var)); // bool(true)
var_dump(is_int($var));    // bool(false)
var_dump(is_array($var));  // bool(false)
var_dump(is_bool($var));   // bool(false)
?>
\`\`\`

## Type Juggling (Automatic Conversion)

PHP automatically converts types when needed:

\`\`\`php
<?php
$num = "5"; // String
$result = $num + 10; // PHP converts "5" to integer
echo $result; // 15

$concat = $num . 10; // Concatenation keeps as string
echo $concat; // "510"
?>
\`\`\`

## Type Casting (Manual Conversion)

\`\`\`php
<?php
$string = "123";
$number = (int)$string; // Cast to integer
var_dump($number); // int(123)

$float = (float)"19.99";
var_dump($float); // float(19.99)

$bool = (bool)1;
var_dump($bool); // bool(true)
?>
\`\`\`

## Variable Scope

### Global Scope
Variables outside functions

\`\`\`php
<?php
$globalVar = "I'm global";

function test() {
    global $globalVar; // Access global variable
    echo $globalVar;
}
?>
\`\`\`

### Local Scope
Variables inside functions

\`\`\`php
<?php
function test() {
    $localVar = "I'm local";
    echo $localVar; // Works
}

test();
// echo $localVar; // Error: undefined variable
?>
\`\`\`

## Constants

Values that don't change:

\`\`\`php
<?php
define("SITE_NAME", "My Website");
echo SITE_NAME; // My Website

// Modern syntax (PHP 5.3+)
const MAX_SIZE = 1000;
echo MAX_SIZE; // 1000
?>
\`\`\`

## Variable Variables

Variable whose name is dynamic:

\`\`\`php
<?php
$var = "hello";
$$var = "world";

echo $hello; // "world"
// $$var becomes $hello
?>
\`\`\`

## Best Practices

1. **Use Descriptive Names**: \`$userAge\` not \`$ua\`
2. **camelCase Convention**: \`$firstName\` not \`$first_name\`
3. **Initialize Variables**: Always set initial value
4. **Check Before Using**: Use \`isset()\` or \`empty()\`
5. **Type Hinting**: Use in function parameters (PHP 7+)`,
    language: 'php',
    difficulty: 'Beginner',
    estimatedTime: 25,
    initialCode: `<?php
// Variable practice
// Create variables of different types and display them

// TODO: Create a string variable $product with product name
// TODO: Create an integer variable $quantity
// TODO: Create a float variable $pricePerUnit
// TODO: Calculate total: $total = $quantity * $pricePerUnit
// TODO: Display: "Product: [name], Quantity: [qty], Total: $[total]"

?>`,
    solution: `<?php
// Solution: Product calculation

$product = "Laptop";
$quantity = 3;
$pricePerUnit = 899.99;

// Calculate total
$total = $quantity * $pricePerUnit;

// Display formatted output
echo "Product: " . $product . ", Quantity: " . $quantity . ", Total: $" . number_format($total, 2);

// Alternative with printf (cleaner)
// printf("Product: %s, Quantity: %d, Total: $%.2f", $product, $quantity, $total);
?>`,
    expectedOutput: 'Product: Laptop, Quantity: 3, Total: $2699.97',
    hints: [
      'Remember: variables start with $',
      'Use * for multiplication in PHP',
      'number_format() can format decimal places'
    ]
  },

  // LESSON 3: String Operations
  {
    id: 'php-3',
    title: 'String Manipulation in PHP',
    description: 'Master string functions, concatenation, and formatting',
    content: `# String Manipulation in PHP

## Creating Strings

### Single vs Double Quotes

\`\`\`php
<?php
$name = "Alice";

// Double quotes: Variable interpolation
$greeting = "Hello, $name!";
echo $greeting; // Hello, Alice!

// Single quotes: Literal string
$literal = 'Hello, $name!';
echo $literal; // Hello, $name!

// Curly braces for complex expressions
$message = "User {$name}'s account";
?>
\`\`\`

## String Concatenation

Join strings using dot (.)

\`\`\`php
<?php
$first = "John";
$last = "Doe";

// Concatenation
$fullName = $first . " " . $last;
echo $fullName; // John Doe

// Concatenation assignment
$text = "Hello";
$text .= " World";
echo $text; // Hello World
?>
\`\`\`

## String Length

\`\`\`php
<?php
$text = "Hello, World!";
$length = strlen($text);
echo $length; // 13

// Multibyte string length (for Unicode)
$unicode = "Hello 世界";
echo mb_strlen($unicode); // Correct Unicode length
?>
\`\`\`

## Case Conversion

\`\`\`php
<?php
$text = "Hello World";

echo strtoupper($text); // HELLO WORLD
echo strtolower($text); // hello world
echo ucfirst($text);    // Hello world (first letter uppercase)
echo ucwords($text);    // Hello World (each word capitalized)
?>
\`\`\`

## String Replacement

\`\`\`php
<?php
$text = "Hello World";

// Replace substring
$newText = str_replace("World", "PHP", $text);
echo $newText; // Hello PHP

// Case-insensitive replacement
$result = str_ireplace("HELLO", "Hi", $text);
echo $result; // Hi World

// Replace multiple
$search = ["Hello", "World"];
$replace = ["Hi", "PHP"];
echo str_replace($search, $replace, $text); // Hi PHP
?>
\`\`\`

## Substring Extraction

\`\`\`php
<?php
$text = "Hello, World!";

// Get substring
$sub = substr($text, 0, 5);
echo $sub; // Hello

// From position to end
echo substr($text, 7); // World!

// Negative offset (from end)
echo substr($text, -6); // World!

// Length with negative offset
echo substr($text, 0, -7); // Hello
?>
\`\`\`

## Finding Substrings

\`\`\`php
<?php
$text = "Hello, World!";

// Find position (returns false if not found)
$pos = strpos($text, "World");
echo $pos; // 7

// Case-insensitive search
$pos = stripos($text, "world");
echo $pos; // 7

// Check if string contains substring
if (strpos($text, "World") !== false) {
    echo "Found!";
}

// PHP 8+ - cleaner syntax
if (str_contains($text, "World")) {
    echo "Found!";
}
?>
\`\`\`

## String Splitting

\`\`\`php
<?php
// Split into array
$text = "apple,banana,orange";
$fruits = explode(",", $text);
print_r($fruits);
// Array([0] => apple [1] => banana [2] => orange)

// Limit splits
$parts = explode(",", $text, 2);
// Array([0] => apple [1] => banana,orange)

// Join array into string
$joined = implode(" - ", $fruits);
echo $joined; // apple - banana - orange
?>
\`\`\`

## Trimming Whitespace

\`\`\`php
<?php
$text = "  Hello World  ";

echo trim($text);   // "Hello World"
echo ltrim($text);  // "Hello World  "
echo rtrim($text);  // "  Hello World"

// Remove specific characters
$path = "/var/www/html/";
echo trim($path, "/"); // var/www/html
?>
\`\`\`

## String Formatting

\`\`\`php
<?php
$name = "Alice";
$age = 25;
$price = 19.99;

// sprintf - format and return
$text = sprintf("Name: %s, Age: %d, Price: $%.2f", $name, $age, $price);
echo $text;

// printf - format and echo
printf("Name: %s, Age: %d\\n", $name, $age);

// Number formatting
echo number_format(1234567.89, 2); // 1,234,567.89
echo number_format(1234567.89, 2, '.', ','); // 1,234,567.89
?>
\`\`\`

## String Comparison

\`\`\`php
<?php
$str1 = "hello";
$str2 = "Hello";

// Case-sensitive
if ($str1 == $str2) {
    echo "Equal";
} else {
    echo "Not equal"; // This prints
}

// Case-insensitive
if (strcasecmp($str1, $str2) == 0) {
    echo "Equal (case-insensitive)";
}

// String comparison for sorting
echo strcmp("apple", "banana"); // Negative (apple < banana)
?>
\`\`\`

## Practical Example

\`\`\`php
<?php
// URL slug generator
function createSlug($text) {
    // Convert to lowercase
    $text = strtolower($text);
    
    // Replace spaces with hyphens
    $text = str_replace(" ", "-", $text);
    
    // Remove special characters
    $text = preg_replace('/[^a-z0-9\\-]/', '', $text);
    
    // Remove multiple hyphens
    $text = preg_replace('/-+/', '-', $text);
    
    // Trim hyphens
    $text = trim($text, '-');
    
    return $text;
}

$title = "Hello World! This is PHP";
echo createSlug($title); // hello-world-this-is-php
?>
\`\`\``,
    language: 'php',
    difficulty: 'Beginner',
    estimatedTime: 25,
    initialCode: `<?php
// String manipulation practice
// Create a simple text processor

// TODO: Create a variable $email with "  USER@EXAMPLE.COM  "
// TODO: Remove whitespace using trim()
// TODO: Convert to lowercase using strtolower()
// TODO: Extract the username (part before @)
// TODO: Display: "Username: [username]"

?>`,
    solution: `<?php
// Solution: Email processor

$email = "  USER@EXAMPLE.COM  ";

// Clean up the email
$email = trim($email);                // Remove whitespace
$email = strtolower($email);          // Convert to lowercase

// Extract username (part before @)
$atPosition = strpos($email, "@");
$username = substr($email, 0, $atPosition);

// Display result
echo "Username: " . $username;

// Alternative one-liner
// $username = substr(strtolower(trim($email)), 0, strpos($email, "@"));
?>`,
    expectedOutput: 'Username: user',
    hints: [
      'Use trim() to remove leading/trailing whitespace',
      'strtolower() converts entire string to lowercase',
      'strpos() finds position of @ character',
      'substr() extracts characters from start to @'
    ]
  }
]
