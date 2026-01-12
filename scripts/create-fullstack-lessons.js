const fs = require('fs');
const path = require('path');

// This script creates comprehensive lessons for full-stack development

const lessonsDir = path.join(__dirname, '..', 'data', 'lessons');

// HTML Lessons - 30 comprehensive lessons
const htmlLessonsContent = `import { Lesson } from '../courses'

export const htmlLessons: Lesson[] = [
  // BEGINNER SECTION (Lessons 1-10)
  {
    id: 'html-1',
    title: 'Introduction to HTML - Structure of a Web Page',
    description: 'Learn the basics of HTML and create your first web page',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: \`# Welcome to HTML!

HTML (HyperText Markup Language) is the standard language for creating web pages.

## What is HTML?
- **H**yper**T**ext **M**arkup **L**anguage
- Uses tags to structure content
- Foundation of every website

## Basic HTML Structure:
\\\`\\\`\\\`html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first webpage.</p>
  </body>
</html>
\\\`\\\`\\\`

## Key Elements:
- \\\`<!DOCTYPE html>\\\`: Declares HTML5
- \\\`<html>\\\`: Root element
- \\\`<head>\\\`: Metadata (title, links)
- \\\`<body>\\\`: Visible content

**Task:** Create a basic HTML page with a heading and paragraph.\`,
    initialCode: \`<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <!-- Add your heading and paragraph here -->
    
  </body>
</html>\`,
    solution: \`<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <p>This is my first HTML page!</p>
  </body>
</html>\`,
    hints: ['Use <h1> for the main heading', 'Use <p> for paragraphs', 'Place content inside <body>'],
    testCases: [
      { name: 'Contains HTML structure', test: (code) => code.includes('<html>') && code.includes('</html>'), errorMessage: 'Your code must include <html> tags' },
      { name: 'Has body section', test: (code) => code.includes('<body>') && code.includes('</body>'), errorMessage: 'Include a <body> section' },
      { name: 'Contains heading', test: (code) => /<h[1-6]>/.test(code), errorMessage: 'Add a heading (h1-h6) tag' },
      { name: 'Contains paragraph', test: (code) => code.includes('<p>') && code.includes('</p>'), errorMessage: 'Add a paragraph (<p>) tag' }
    ]
  },
  {
    id: 'html-2',
    title: 'Headings and Paragraphs',
    description: 'Master text formatting with headings and paragraphs',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: \`# HTML Headings and Paragraphs

Learn to structure content with headings and text.

## Heading Levels (h1-h6):
\\\`\\\`\\\`html
<h1>Main Title</h1>
<h2>Subtitle</h2>
<h3>Section Heading</h3>
<h4>Subsection</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>
\\\`\\\`\\\`

## Paragraphs:
\\\`\\\`\\\`html
<p>This is a paragraph of text.</p>
<p>Each paragraph is a separate block.</p>
\\\`\\\`\\\`

## Best Practices:
- Use **one h1** per page
- Follow hierarchy: h1 → h2 → h3
- Use paragraphs for readable text

**Task:** Create a page with a proper heading hierarchy.\`,
    initialCode: \`<!DOCTYPE html>
<html>
  <body>
    <!-- Create a heading hierarchy about your favorite hobby -->
    
  </body>
</html>\`,
    solution: \`<!DOCTYPE html>
<html>
  <body>
    <h1>My Favorite Hobby: Photography</h1>
    <h2>Why I Love Photography</h2>
    <p>Photography allows me to capture beautiful moments.</p>
    <h2>Types of Photography</h2>
    <h3>Portrait Photography</h3>
    <p>Capturing people and their expressions.</p>
    <h3>Landscape Photography</h3>
    <p>Beautiful scenes from nature.</p>
  </body>
</html>\`,
    hints: ['Start with h1 for the main topic', 'Use h2 for major sections', 'Use h3 for subsections'],
    testCases: [
      { name: 'Has h1 heading', test: (code) => code.includes('<h1>'), errorMessage: 'Include an <h1> main heading' },
      { name: 'Has h2 heading', test: (code) => code.includes('<h2>'), errorMessage: 'Include at least one <h2> heading' },
      { name: 'Has paragraphs', test: (code) => (code.match(/<p>/g) || []).length >= 2, errorMessage: 'Include at least 2 paragraphs' },
      { name: 'Proper nesting order', test: (code) => code.indexOf('<h1>') < code.lastIndexOf('</body>'), errorMessage: 'Headings should be inside body' }
    ]
  },
  {
    id: 'html-3',
    title: 'Links and Navigation',
    description: 'Create hyperlinks to navigate between pages',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: \`# HTML Links

Links connect web pages together, making the web navigable.

## Basic Link Syntax:
\\\`\\\`\\\`html
<a href="https://www.example.com">Visit Example</a>
\\\`\\\`\\\`

## Link Types:
\\\`\\\`\\\`html
<!-- External link -->
<a href="https://google.com">Google</a>

<!-- Internal page -->
<a href="about.html">About Us</a>

<!-- Same page anchor -->
<a href="#section1">Jump to Section</a>

<!-- Open in new tab -->
<a href="https://example.com" target="_blank">New Tab</a>
\\\`\\\`\\\`

## Attributes:
- \\\`href\\\`: URL destination
- \\\`target="_blank"\\\`: Opens new tab
- \\\`title\\\`: Tooltip text

**Task:** Create a navigation menu with links.\`,
    initialCode: \`<!DOCTYPE html>
<html>
  <body>
    <h1>My Website</h1>
    <nav>
      <!-- Add 4 links: Home, About, Services, Contact -->
      
    </nav>
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
    hints: ['Use <a> tag for links', 'href attribute specifies the URL', 'Put links inside <nav> element'],
    testCases: [
      { name: 'Contains nav element', test: (code) => code.includes('<nav>'), errorMessage: 'Use a <nav> element for navigation' },
      { name: 'Has multiple links', test: (code) => (code.match(/<a /g) || []).length >= 3, errorMessage: 'Include at least 3 links' },
      { name: 'Links have href', test: (code) => (code.match(/href="/g) || []).length >= 3, errorMessage: 'All links need href attributes' },
      { name: 'Links are closed', test: (code) => (code.match(/<\/a>/g) || []).length >= 3, errorMessage: 'Close all <a> tags' }
    ]
  },
  {
    id: 'html-4',
    title: 'Images and Media',
    description: 'Add images and multimedia to your web pages',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: \`# HTML Images

Images make web pages visually appealing and informative.

## Image Tag:
\\\`\\\`\\\`html
<img src="image.jpg" alt="Description">
\\\`\\\`\\\`

## Image Attributes:
\\\`\\\`\\\`html
<img 
  src="photo.jpg" 
  alt="A beautiful sunset"
  width="600"
  height="400"
  title="Sunset Photo"
>
\\\`\\\`\\\`

## Important:
- \\\`src\\\`: Image file path or URL
- \\\`alt\\\`: Description for accessibility
- **Always** include alt text!

## Image Sources:
\\\`\\\`\\\`html
<!-- Local file -->
<img src="images/logo.png" alt="Logo">

<!-- Online image -->
<img src="https://example.com/photo.jpg" alt="Photo">
\\\`\\\`\\\`

**Task:** Add images to a photo gallery page.\`,
    initialCode: \`<!DOCTYPE html>
<html>
  <body>
    <h1>My Photo Gallery</h1>
    <!-- Add 3 images with alt text -->
    
  </body>
</html>\`,
    solution: \`<!DOCTYPE html>
<html>
  <body>
    <h1>My Photo Gallery</h1>
    <img src="nature.jpg" alt="Beautiful nature landscape" width="400">
    <img src="city.jpg" alt="City skyline at night" width="400">
    <img src="ocean.jpg" alt="Ocean waves crashing" width="400">
  </body>
</html>\`,
    hints: ['Use <img> tag', 'Always add alt attribute', 'You can set width/height'],
    testCases: [
      { name: 'Contains images', test: (code) => (code.match(/<img/g) || []).length >= 2, errorMessage: 'Include at least 2 images' },
      { name: 'Images have src', test: (code) => (code.match(/src="/g) || []).length >= 2, errorMessage: 'All images need src attributes' },
      { name: 'Images have alt text', test: (code) => (code.match(/alt="/g) || []).length >= 2, errorMessage: 'All images must have alt attributes for accessibility' },
      { name: 'Alt text is descriptive', test: (code) => /alt="[^"]{3,}"/.test(code), errorMessage: 'Alt text should be descriptive' }
    ]
  },
  {
    id: 'html-5',
    title: 'Lists - Ordered and Unordered',
    description: 'Create bullet points and numbered lists',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: \`# HTML Lists

Lists organize information in a clear, scannable format.

## Unordered List (Bullets):
\\\`\\\`\\\`html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
\\\`\\\`\\\`

## Ordered List (Numbers):
\\\`\\\`\\\`html
<ol>
  <li>Step one</li>
  <li>Step two</li>
  <li>Step three</li>
</ol>
\\\`\\\`\\\`

## Nested Lists:
\\\`\\\`\\\`html
<ul>
  <li>Fruits
    <ul>
      <li>Apples</li>
      <li>Oranges</li>
    </ul>
  </li>
  <li>Vegetables</li>
</ul>
\\\`\\\`\\\`

**Task:** Create shopping and todo lists.\`,
    initialCode: \`<!DOCTYPE html>
<html>
  <body>
    <h2>Shopping List</h2>
    <!-- Create an unordered list -->
    
    <h2>Todo List (Priority Order)</h2>
    <!-- Create an ordered list -->
    
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
      <li>Coffee</li>
    </ul>
    
    <h2>Todo List (Priority Order)</h2>
    <ol>
      <li>Finish homework</li>
      <li>Exercise</li>
      <li>Read book</li>
    </ol>
  </body>
</html>\`,
    hints: ['<ul> for unordered (bullets)', '<ol> for ordered (numbers)', '<li> for each item'],
    testCases: [
      { name: 'Has unordered list', test: (code) => code.includes('<ul>'), errorMessage: 'Create an unordered list with <ul>' },
      { name: 'Has ordered list', test: (code) => code.includes('<ol>'), errorMessage: 'Create an ordered list with <ol>' },
      { name: 'Lists have items', test: (code) => (code.match(/<li>/g) || []).length >= 5, errorMessage: 'Add at least 5 list items total' },
      { name: 'Lists are closed', test: (code) => code.includes('</ul>') && code.includes('</ol>'), errorMessage: 'Close all list tags properly' }
    ]
  }
]
`;

fs.writeFileSync(path.join(lessonsDir, 'htmlLessons.ts'), htmlLessonsContent);
console.log('✅ HTML lessons created successfully!');
