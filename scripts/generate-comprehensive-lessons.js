const fs = require('fs');
const path = require('path');

const lessonsDir = path.join(__dirname, '..', 'data', 'lessons');

// Helper to write lesson files
function writeLessonFile(filename, content) {
  const filePath = path.join(lessonsDir, filename);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Created ${filename}`);
}

// HTML LESSONS - 30 comprehensive lessons
const htmlLessons = `import { Lesson } from '../courses'

export const htmlLessons: Lesson[] = [
  {
    id: 'html-1',
    title: 'HTML Basics - Your First Web Page',
    description: 'Learn HTML structure and create your first webpage',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: \`# Welcome to HTML!

HTML (HyperText Markup Language) is the foundation of every website.

## Basic Structure:
\\\`\\\`\\\`html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
\\\`\\\`\\\`

## Key Elements:
- \\\`<!DOCTYPE html>\\\`: Declares HTML5
- \\\`<html>\\\`: Root element
- \\\`<head>\\\`: Metadata
- \\\`<body>\\\`: Visible content

Create a complete HTML page!\`,
    initialCode: \`<!-- Create a complete HTML page -->
<!DOCTYPE html>
<html>
  <head>
    
  </head>
  <body>
    
  </body>
</html>\`,
    solution: \`<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <p>This is my first HTML page!</p>
  </body>
</html>\`,
    hints: ['Add a title in <head>', 'Add heading in <body>', 'Add a paragraph'],
    testCases: [
      { name: 'Has HTML structure', test: (code) => code.includes('<!DOCTYPE html>') && code.includes('<html>'), errorMessage: 'Include <!DOCTYPE html> and <html> tags' },
      { name: 'Has head section', test: (code) => code.includes('<head>') && code.includes('<title>'), errorMessage: 'Add <head> with <title>' },
      { name: 'Has body with content', test: (code) => code.includes('<body>') && /<h[1-6]>/.test(code), errorMessage: 'Add <body> with a heading' },
      { name: 'Includes paragraph', test: (code) => code.includes('<p>'), errorMessage: 'Add at least one paragraph' }
    ]
  },
  {
    id: 'html-2',
    title: 'Headings and Text Formatting',
    description: 'Master HTML headings and text elements',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: \`# HTML Headings & Text

## Heading Hierarchy:
\\\`\\\`\\\`html
<h1>Main Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>
<h4>Minor Heading</h4>
\\\`\\\`\\\`

## Text Elements:
\\\`\\\`\\\`html
<p>Paragraph text</p>
<strong>Bold text</strong>
<em>Italic text</em>
<br> Line break
\\\`\\\`\\\`

Create a blog post with proper hierarchy!\`,
    initialCode: \`<!DOCTYPE html>
<html>
  <body>
    <!-- Create a blog post about technology -->
    
  </body>
</html>\`,
    solution: \`<!DOCTYPE html>
<html>
  <body>
    <h1>The Future of Technology</h1>
    <h2>Introduction</h2>
    <p>Technology is <strong>rapidly evolving</strong> every day.</p>
    <h2>Key Trends</h2>
    <h3>Artificial Intelligence</h3>
    <p><em>AI</em> is transforming industries.</p>
  </body>
</html>\`,
    hints: ['Use h1 for main title', 'Use h2 for sections', 'Use <strong> and <em> for emphasis'],
    testCases: [
      { name: 'Has main heading', test: (code) => code.includes('<h1>'), errorMessage: 'Include an <h1> heading' },
      { name: 'Has subheadings', test: (code) => code.includes('<h2>') || code.includes('<h3>'), errorMessage: 'Add <h2> or <h3> subheadings' },
      { name: 'Has paragraphs', test: (code) => (code.match(/<p>/g) || []).length >= 2, errorMessage: 'Include at least 2 paragraphs' },
      { name: 'Uses text formatting', test: (code) => code.includes('<strong>') || code.includes('<em>'), errorMessage: 'Use <strong> or <em> for emphasis' }
    ]
  },
  {
    id: 'html-3',
    title: 'Links and Navigation',
    description: 'Create hyperlinks and navigation menus',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: \`# HTML Links

## Creating Links:
\\\`\\\`\\\`html
<a href="https://example.com">Link Text</a>
<a href="about.html">About Page</a>
<a href="#section">Jump to Section</a>
<a href="https://google.com" target="_blank">New Tab</a>
\\\`\\\`\\\`

## Navigation Menu:
\\\`\\\`\\\`html
<nav>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="contact.html">Contact</a>
</nav>
\\\`\\\`\\\`

Build a navigation system!\`,
    initialCode: \`<!DOCTYPE html>
<html>
  <body>
    <h1>My Website</h1>
    <!-- Create a navigation menu with 4 links -->
    
  </body>
</html>\`,
    solution: \`<!DOCTYPE html>
<html>
  <body>
    <h1>My Website</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="services.html">Services</a>
      <a href="contact.html">Contact</a>
    </nav>
  </body>
</html>\`,
    hints: ['Use <nav> for navigation', 'Each link needs href attribute', 'Use <a> tag for links'],
    testCases: [
      { name: 'Has navigation', test: (code) => code.includes('<nav>'), errorMessage: 'Use <nav> element for navigation' },
      { name: 'Has multiple links', test: (code) => (code.match(/<a href="/g) || []).length >= 3, errorMessage: 'Create at least 3 links with href attributes' },
      { name: 'Links have text', test: (code) => /<a[^>]*>[^<]+<\/a>/.test(code), errorMessage: 'Links should have descriptive text' },
      { name: 'Proper structure', test: (code) => code.includes('</nav>'), errorMessage: 'Close the </nav> tag' }
    ]
  },
  {
    id: 'html-4',
    title: 'Images and Media',
    description: 'Add images to your webpages',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: \`# HTML Images

## Image Syntax:
\\\`\\\`\\\`html
<img src="photo.jpg" alt="Description">
<img src="logo.png" alt="Company Logo" width="200">
\\\`\\\`\\\`

## Important Attributes:
- **src**: Image file path
- **alt**: Description (required for accessibility!)
- **width/height**: Dimensions

Always include alt text!\`,
    initialCode: \`<!DOCTYPE html>
<html>
  <body>
    <h1>Photo Gallery</h1>
    <!-- Add 3 images with alt text -->
    
  </body>
</html>\`,
    solution: \`<!DOCTYPE html>
<html>
  <body>
    <h1>Photo Gallery</h1>
    <img src="sunset.jpg" alt="Beautiful sunset over mountains" width="400">
    <img src="city.jpg" alt="Night city skyline" width="400">
    <img src="nature.jpg" alt="Forest landscape" width="400">
  </body>
</html>\`,
    hints: ['Use <img> tag', 'Always add alt attribute', 'Add src with filename'],
    testCases: [
      { name: 'Has images', test: (code) => (code.match(/<img/g) || []).length >= 2, errorMessage: 'Add at least 2 images' },
      { name: 'Images have src', test: (code) => (code.match(/src="/g) || []).length >= 2, errorMessage: 'All images need src attribute' },
      { name: 'Images have alt', test: (code) => (code.match(/alt="/g) || []).length >= 2, errorMessage: 'All images must have alt text for accessibility' },
      { name: 'Alt is descriptive', test: (code) => /alt="[^"]{5,}"/.test(code), errorMessage: 'Alt text should be descriptive (5+ chars)' }
    ]
  },
  {
    id: 'html-5',
    title: 'Lists - Ordered and Unordered',
    description: 'Create bullet and numbered lists',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: \`# HTML Lists

## Unordered Lists:
\\\`\\\`\\\`html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
\\\`\\\`\\\`

## Ordered Lists:
\\\`\\\`\\\`html
<ol>
  <li>First</li>
  <li>Second</li>
</ol>
\\\`\\\`\\\`

Create shopping and todo lists!\`,
    initialCode: \`<!DOCTYPE html>
<html>
  <body>
    <h2>Shopping List</h2>
    <!-- Unordered list -->
    
    <h2>Steps to Success</h2>
    <!-- Ordered list -->
    
  </body>
</html>\`,
    solution: \`<!DOCTYPE html>
<html>
  <body>
    <h2>Shopping List</h2>
    <ul>
      <li>Milk</li>
      <li>Bread</li>
      <li>Eggs</li>
    </ul>
    
    <h2>Steps to Success</h2>
    <ol>
      <li>Set goals</li>
      <li>Make a plan</li>
      <li>Take action</li>
    </ol>
  </body>
</html>\`,
    hints: ['<ul> for unordered', '<ol> for ordered', '<li> for each item'],
    testCases: [
      { name: 'Has unordered list', test: (code) => code.includes('<ul>') && code.includes('</ul>'), errorMessage: 'Create an unordered list with <ul>' },
      { name: 'Has ordered list', test: (code) => code.includes('<ol>') && code.includes('</ol>'), errorMessage: 'Create an ordered list with <ol>' },
      { name: 'Has list items', test: (code) => (code.match(/<li>/g) || []).length >= 5, errorMessage: 'Add at least 5 list items total' },
      { name: 'Proper nesting', test: (code) => /<ul>[\s\S]*<li>/.test(code) && /<ol>[\s\S]*<li>/.test(code), errorMessage: '<li> items must be inside <ul> or <ol>' }
    ]
  }
]
`;

// CSS LESSONS
const cssLessons = `import { Lesson } from '../courses'

export const cssLessons: Lesson[] = [
  {
    id: 'css-1',
    title: 'CSS Basics - Styling Your First Page',
    description: 'Introduction to CSS and basic styling',
    language: 'css' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: \`# Welcome to CSS!

CSS (Cascading Style Sheets) makes websites beautiful.

## Ways to Add CSS:
\\\`\\\`\\\`html
<!-- Inline -->
<p style="color: blue;">Text</p>

<!-- Internal -->
<style>
  p { color: blue; }
</style>

<!-- External (Best Practice) -->
<link rel="stylesheet" href="styles.css">
\\\`\\\`\\\`

## Basic Syntax:
\\\`\\\`\\\`css
selector {
  property: value;
}

p {
  color: blue;
  font-size: 16px;
}
\\\`\\\`\\\`

Style a paragraph!\`,
    initialCode: \`/* Style the paragraph to be blue and 20px */
p {
  
}\`,
    solution: \`p {
  color: blue;
  font-size: 20px;
}\`,
    hints: ['Use color property', 'Use font-size property', 'Add px unit to size'],
    testCases: [
      { name: 'Has p selector', test: (code) => /p\\s*{/.test(code), errorMessage: 'Create a p selector' },
      { name: 'Sets color', test: (code) => /color\\s*:/.test(code), errorMessage: 'Add a color property' },
      { name: 'Sets font-size', test: (code) => /font-size\\s*:/.test(code), errorMessage: 'Add a font-size property' },
      { name: 'Has closing brace', test: (code) => code.includes('}'), errorMessage: 'Close the CSS rule with }' }
    ]
  },
  {
    id: 'css-2',
    title: 'CSS Selectors - Targeting Elements',
    description: 'Learn different ways to select HTML elements',
    language: 'css' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: \`# CSS Selectors

## Types of Selectors:
\\\`\\\`\\\`css
/* Element */
p { color: blue; }

/* Class */
.highlight { background: yellow; }

/* ID */
#header { font-size: 24px; }

/* Multiple */
h1, h2, h3 { color: navy; }
\\\`\\\`\\\`

## Usage in HTML:
\\\`\\\`\\\`html
<p class="highlight">Yellow background</p>
<div id="header">Large text</div>
\\\`\\\`\\\`

Master selectors!\`,
    initialCode: \`/* Style all headings (h1) with color navy */


/* Style elements with class 'highlight' with yellow background */


/* Style element with id 'main' with font-size 18px */

\`,
    solution: \`h1 {
  color: navy;
}

.highlight {
  background-color: yellow;
}

#main {
  font-size: 18px;
}\`,
    hints: ['Element selector: elementname { }', 'Class selector: .classname { }', 'ID selector: #idname { }'],
    testCases: [
      { name: 'Has element selector', test: (code) => /h1\\s*{/.test(code), errorMessage: 'Create an h1 selector' },
      { name: 'Has class selector', test: (code) => /\\.\\w+\\s*{/.test(code), errorMessage: 'Create a class selector with a dot (.)' },
      { name: 'Has ID selector', test: (code) => /#\\w+\\s*{/.test(code), errorMessage: 'Create an ID selector with a hash (#)' },
      { name: 'Has properties', test: (code) => /:\\s*[^;]+;/.test(code), errorMessage: 'Add CSS properties with values' }
    ]
  },
  {
    id: 'css-3',
    title: 'Colors and Backgrounds',
    description: 'Work with colors and background properties',
    language: 'css' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: \`# CSS Colors & Backgrounds

## Color Formats:
\\\`\\\`\\\`css
/* Named colors */
color: red;

/* Hex */
color: #FF0000;

/* RGB */
color: rgb(255, 0, 0);

/* RGBA (with transparency) */
color: rgba(255, 0, 0, 0.5);
\\\`\\\`\\\`

## Background Properties:
\\\`\\\`\\\`css
background-color: lightblue;
background-image: url('image.jpg');
background-size: cover;
background-position: center;
\\\`\\\`\\\`

Create a colorful design!\`,
    initialCode: \`/* Style the header */
.header {
  
}

/* Style the card */
.card {
  
}\`,
    solution: \`.header {
  background-color: #3498db;
  color: white;
  padding: 20px;
}

.card {
  background-color: #f8f9fa;
  color: #333;
  border: 1px solid #ddd;
}\`,
    hints: ['Use background-color', 'Use color for text', 'Try hex colors like #3498db'],
    testCases: [
      { name: 'Has header selector', test: (code) => /\\.header\\s*{/.test(code), errorMessage: 'Create a .header class selector' },
      { name: 'Sets background color', test: (code) => /background(-color)?\\s*:/.test(code), errorMessage: 'Add background-color property' },
      { name: 'Sets text color', test: (code) => /color\\s*:/.test(code), errorMessage: 'Add color property for text' },
      { name: 'Has multiple rules', test: (code) => (code.match(/}/g) || []).length >= 2, errorMessage: 'Style both .header and .card' }
    ]
  },
  {
    id: 'css-4',
    title: 'Box Model - Margin, Padding, Border',
    description: 'Understand the CSS box model',
    language: 'css' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: \`# CSS Box Model

Every element is a box!

## The Box Model:
\\\`\\\`\\\`
┌─────── margin ───────┐
│ ┌───── border ─────┐ │
│ │ ┌─── padding ──┐ │ │
│ │ │   Content    │ │ │
│ │ └──────────────┘ │ │
│ └──────────────────┘ │
└──────────────────────┘
\\\`\\\`\\\`

## Properties:
\\\`\\\`\\\`css
.box {
  margin: 20px;       /* Outside space */
  padding: 15px;      /* Inside space */
  border: 2px solid black;
  width: 300px;
}

/* Individual sides */
margin-top: 10px;
padding-left: 20px;
border-bottom: 1px solid red;
\\\`\\\`\\\`

Build a card!\`,
    initialCode: \`/* Create a card with proper spacing */
.card {
  
}\`,
    solution: \`.card {
  width: 300px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  background-color: white;
}\`,
    hints: ['Add margin for outside space', 'Add padding for inside space', 'Add border'],
    testCases: [
      { name: 'Has card selector', test: (code) => /\\.card\\s*{/.test(code), errorMessage: 'Create a .card selector' },
      { name: 'Sets padding', test: (code) => /padding(-[a-z]+)?\\s*:/.test(code), errorMessage: 'Add padding property' },
      { name: 'Sets margin', test: (code) => /margin(-[a-z]+)?\\s*:/.test(code), errorMessage: 'Add margin property' },
      { name: 'Sets border', test: (code) => /border(-[a-z]+)?\\s*:/.test(code), errorMessage: 'Add border property' }
    ]
  },
  {
    id: 'css-5',
    title: 'Typography - Fonts and Text Styling',
    description: 'Style text with fonts and text properties',
    language: 'css' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: \`# CSS Typography

## Font Properties:
\\\`\\\`\\\`css
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;
font-style: italic;
line-height: 1.5;
\\\`\\\`\\\`

## Text Properties:
\\\`\\\`\\\`css
text-align: center;
text-decoration: underline;
text-transform: uppercase;
letter-spacing: 2px;
\\\`\\\`\\\`

## Google Fonts:
\\\`\\\`\\\`css
@import url('https://fonts.googleapis.com/css2?family=Roboto');
font-family: 'Roboto', sans-serif;
\\\`\\\`\\\`

Style beautiful text!\`,
    initialCode: \`/* Style the heading */
h1 {
  
}

/* Style the paragraph */
p {
  
}\`,
    solution: \`h1 {
  font-family: Arial, sans-serif;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: #333;
}

p {
  font-size: 16px;
  line-height: 1.6;
  color: #666;
}\`,
    hints: ['Set font-family', 'Set font-size in px', 'Use text-align for alignment'],
    testCases: [
      { name: 'Styles h1', test: (code) => /h1\\s*{/.test(code), errorMessage: 'Create an h1 selector' },
      { name: 'Sets font-family', test: (code) => /font-family\\s*:/.test(code), errorMessage: 'Add font-family property' },
      { name: 'Sets font-size', test: (code) => /font-size\\s*:/.test(code), errorMessage: 'Add font-size property' },
      { name: 'Styles paragraph', test: (code) => /p\\s*{/.test(code), errorMessage: 'Create a p selector for paragraphs' }
    ]
  }
]
`;

// Write the files
writeLessonFile('htmlLessons.ts', htmlLessons);
writeLessonFile('cssLessons.ts', cssLessons);

console.log('\\n📚 Lesson generation complete!');
console.log('Created 5 lessons each for HTML and CSS courses');
console.log('These are comprehensive, beginner-friendly lessons with proper test cases');
