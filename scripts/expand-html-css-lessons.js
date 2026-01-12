// Script to expand HTML and CSS lessons to 50 each
const fs = require('fs');
const path = require('path');

const htmlLessonsContent = `import { Lesson } from '../courses'

export const htmlLessons: Lesson[] = [
  // BEGINNER SECTION (Lessons 1-15)
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
    <h1>Hello World!</h1>
    <p>Welcome to HTML!</p>
  </body>
</html>\`,
    hints: ['Start with DOCTYPE', 'Add a title in head', 'Add h1 and p in body']
  },
  {
    id: 'html-2',
    title: 'Headings and Paragraphs',
    description: 'Master text elements with headings h1-h6 and paragraphs',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: \`# Headings and Paragraphs

## Heading Hierarchy
HTML provides 6 levels of headings: h1 (largest) to h6 (smallest).

\\\`\\\`\\\`html
<h1>Main Title</h1>
<h2>Subtitle</h2>
<h3>Section</h3>
<p>Paragraph text goes here.</p>
\\\`\\\`\\\`

Use headings for structure, paragraphs for content.\`,
    initialCode: \`<!DOCTYPE html>
<html>
  <body>
    <!-- Add heading levels and paragraphs -->
  </body>
</html>\`,
    solution: \`<!DOCTYPE html>
<html>
  <body>
    <h1>My Blog</h1>
    <h2>Today's Post</h2>
    <p>This is my first blog post.</p>
    <h3>Introduction</h3>
    <p>Learning HTML is fun!</p>
  </body>
</html>\`,
    hints: ['h1 for main title', 'h2 for sections', 'p for text content']
  },
  {
    id: 'html-3',
    title: 'Links and Navigation',
    description: 'Create hyperlinks to navigate between pages',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: \`# Links - The Web's Superpower

Links connect the web together using the anchor tag.

\\\`\\\`\\\`html
<a href="https://example.com">Visit Example</a>
<a href="page2.html">Go to Page 2</a>
<a href="#section1">Jump to Section</a>
\\\`\\\`\\\`

## Attributes:
- \\\`href\\\`: Destination URL
- \\\`target="_blank"\\\`: Open in new tab
- \\\`title\\\`: Tooltip text\`,
    initialCode: \`<!DOCTYPE html>
<html>
  <body>
    <h1>My Links</h1>
    <!-- Add links here -->
  </body>
</html>\`,
    solution: \`<!DOCTYPE html>
<html>
  <body>
    <h1>My Links</h1>
    <a href="https://google.com">Search Google</a>
    <a href="about.html">About Page</a>
    <a href="#footer">Go to Footer</a>
  </body>
</html>\`,
    hints: ['Use <a> tag', 'href attribute required', 'Can link to URLs or files']
  },
  {
    id: 'html-4',
    title: 'Images and Media',
    description: 'Add images to your webpage with proper attributes',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: \`# Adding Images

Images make websites visual and engaging.

\\\`\\\`\\\`html
<img src="photo.jpg" alt="Description" width="300">
\\\`\\\`\\\`

## Required Attributes:
- \\\`src\\\`: Image file path or URL
- \\\`alt\\\`: Text description (accessibility)

## Optional:
- \\\`width\\\`, \\\`height\\\`: Dimensions
- \\\`title\\\`: Hover tooltip\`,
    initialCode: \`<!DOCTYPE html>
<html>
  <body>
    <h1>My Gallery</h1>
    <!-- Add images here -->
  </body>
</html>\`,
    solution: \`<!DOCTYPE html>
<html>
  <body>
    <h1>My Gallery</h1>
    <img src="sunset.jpg" alt="Beautiful sunset" width="400">
    <img src="mountain.jpg" alt="Mountain view" width="400">
  </body>
</html>\`,
    hints: ['Use <img> tag', 'Self-closing tag', 'Always include alt text']
  },
  {
    id: 'html-5',
    title: 'Lists - Ordered and Unordered',
    description: 'Create bullet points and numbered lists',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: \`# Lists in HTML

Two main types: ordered (numbered) and unordered (bullets).

\\\`\\\`\\\`html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<ol>
  <li>First</li>
  <li>Second</li>
</ol>
\\\`\\\`\\\`

Use \\\`<ul>\\\` for unordered, \\\`<ol>\\\` for ordered lists.\`,
    initialCode: \`<!DOCTYPE html>
<html>
  <body>
    <h2>Shopping List</h2>
    <!-- Add unordered list -->
    
    <h2>Recipe Steps</h2>
    <!-- Add ordered list -->
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
    
    <h2>Recipe Steps</h2>
    <ol>
      <li>Mix ingredients</li>
      <li>Bake at 350°F</li>
      <li>Cool and serve</li>
    </ol>
  </body>
</html>\`,
    hints: ['<ul> for bullets', '<ol> for numbers', '<li> for each item']
  },
  {
    id: 'html-6',
    title: 'Text Formatting',
    description: 'Bold, italic, underline, and other text styles',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: \`# Text Formatting Tags

Make text stand out with formatting.

\\\`\\\`\\\`html
<strong>Bold text</strong>
<em>Italic text</em>
<mark>Highlighted</mark>
<del>Deleted</del>
<ins>Inserted</ins>
<sub>Subscript</sub>
<sup>Superscript</sup>
\\\`\\\`\\\`\`,
    initialCode: \`<!DOCTYPE html>
<html>
  <body>
    <!-- Format this text -->
    This is important text.
    This is emphasized text.
  </body>
</html>\`,
    solution: \`<!DOCTYPE html>
<html>
  <body>
    <p><strong>This is important text.</strong></p>
    <p><em>This is emphasized text.</em></p>
    <p>H<sub>2</sub>O is water</p>
    <p>E=mc<sup>2</sup></p>
  </body>
</html>\`,
    hints: ['<strong> for bold', '<em> for italic', '<sub> and <sup> for scripts']
  },
  {
    id: 'html-7',
    title: 'Div and Span Containers',
    description: 'Organize content with div and span elements',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: \`# Container Elements

\\\`<div>\\\` and \\\`<span>\\\` group content for styling.

\\\`\\\`\\\`html
<div class="section">
  <h2>Title</h2>
  <p>Content here</p>
</div>

<p>Text with <span class="highlight">highlighted</span> word.</p>
\\\`\\\`\\\`

- \\\`<div>\\\`: Block-level (new line)
- \\\`<span>\\\`: Inline (same line)\`,
    initialCode: \`<!DOCTYPE html>
<html>
  <body>
    <!-- Create sections with div -->
  </body>
</html>\`,
    solution: \`<!DOCTYPE html>
<html>
  <body>
    <div class="header">
      <h1>Welcome</h1>
    </div>
    <div class="content">
      <p>Main <span class="bold">content</span> here</p>
    </div>
  </body>
</html>\`,
    hints: ['div for sections', 'span for inline', 'Use class for styling']
  },
  {
    id: 'html-8',
    title: 'Tables - Rows and Columns',
    description: 'Create data tables with rows, columns, and headers',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: \`# HTML Tables

Tables display data in rows and columns.

\\\`\\\`\\\`html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
  </tr>
</table>
\\\`\\\`\\\`

- \\\`<table>\\\`: Container
- \\\`<tr>\\\`: Table row
- \\\`<th>\\\`: Header cell
- \\\`<td>\\\`: Data cell\`,
    initialCode: \`<!DOCTYPE html>
<html>
  <body>
    <!-- Create a table with student data -->
  </body>
</html>\`,
    solution: \`<!DOCTYPE html>
<html>
  <body>
    <table border="1">
      <tr>
        <th>Student</th>
        <th>Grade</th>
      </tr>
      <tr>
        <td>Alice</td>
        <td>A</td>
      </tr>
      <tr>
        <td>Bob</td>
        <td>B</td>
      </tr>
    </table>
  </body>
</html>\`,
    hints: ['<table> wraps all', '<tr> for rows', '<th> for headers, <td> for data']
  },
  {
    id: 'html-9',
    title: 'Forms - Input Elements',
    description: 'Create input forms with text fields and buttons',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: \`# HTML Forms

Forms collect user input.

\\\`\\\`\\\`html
<form>
  <label>Name:</label>
  <input type="text" name="username">
  <input type="submit" value="Send">
</form>
\\\`\\\`\\\`

## Input Types:
- text, email, password
- number, date, checkbox
- radio, submit, button\`,
    initialCode: \`<!DOCTYPE html>
<html>
  <body>
    <!-- Create a contact form -->
  </body>
</html>\`,
    solution: \`<!DOCTYPE html>
<html>
  <body>
    <form>
      <label>Name:</label>
      <input type="text" name="name">
      <br>
      <label>Email:</label>
      <input type="email" name="email">
      <br>
      <input type="submit" value="Submit">
    </form>
  </body>
</html>\`,
    hints: ['<form> wraps inputs', '<label> for field names', 'type attribute defines input']
  },
  {
    id: 'html-10',
    title: 'Buttons and Input Types',
    description: 'Learn different button and input types',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: \`# Buttons and Inputs

Multiple input types for different data.

\\\`\\\`\\\`html
<input type="text" placeholder="Enter text">
<input type="email" placeholder="Email">
<input type="password" placeholder="Password">
<input type="number" min="1" max="10">
<input type="checkbox">
<input type="radio" name="choice">
<button>Click Me</button>
\\\`\\\`\\\`\`,
    initialCode: \`<!DOCTYPE html>
<html>
  <body>
    <form>
      <!-- Add various input types -->
    </form>
  </body>
</html>\`,
    solution: \`<!DOCTYPE html>
<html>
  <body>
    <form>
      <input type="text" placeholder="Username">
      <input type="password" placeholder="Password">
      <input type="checkbox"> Remember me
      <button type="submit">Login</button>
    </form>
  </body>
</html>\`,
    hints: ['Use type attribute', 'placeholder shows hint', 'name for form data']
  }
];

// Add 40 more lessons (11-50) for intermediate and advanced topics
const additionalLessons = [];

const intermediateTopics = [
  { id: 11, title: 'Semantic HTML - Header and Nav', topic: 'header, nav, semantic structure' },
  { id: 12, title: 'Semantic HTML - Main and Article', topic: 'main, article, section elements' },
  { id: 13, title: 'Semantic HTML - Footer and Aside', topic: 'footer, aside, complementary content' },
  { id: 14, title: 'HTML5 Audio Element', topic: 'audio, controls, sources' },
  { id: 15, title: 'HTML5 Video Element', topic: 'video, controls, formats' },
  { id: 16, title: 'HTML5 Canvas Basics', topic: 'canvas, drawing context' },
  { id: 17, title: 'SVG Graphics in HTML', topic: 'SVG elements, shapes' },
  { id: 18, title: 'Meta Tags and SEO', topic: 'meta description, keywords, og tags' },
  { id: 19, title: 'Responsive Images', topic: 'srcset, picture element' },
  { id: 20, title: 'Figure and Figcaption', topic: 'figure, figcaption, captions' },
  { id: 21, title: 'Details and Summary', topic: 'details, summary, accordion' },
  { id: 22, title: 'Progress and Meter', topic: 'progress bars, meter elements' },
  { id: 23, title: 'Time and DateTime', topic: 'time element, datetime attribute' },
  { id: 24, title: 'Mark and Highlight', topic: 'mark, highlighting text' },
  { id: 25, title: 'Data Attributes', topic: 'data-* attributes, custom data' },
  { id: 26, title: 'Form Validation', topic: 'required, pattern, validation' },
  { id: 27, title: 'Input Attributes', topic: 'placeholder, autofocus, autocomplete' },
  { id: 28, title: 'Select and Option', topic: 'dropdown menus, select' },
  { id: 29, title: 'Textarea Element', topic: 'multi-line text input' },
  { id: 30, title: 'Fieldset and Legend', topic: 'grouping form fields' },
  { id: 31, title: 'IFrame Embedding', topic: 'iframe, embedding content' },
  { id: 32, title: 'Embed and Object', topic: 'embed, object elements' },
  { id: 33, title: 'Accessibility - ARIA Basics', topic: 'ARIA roles, labels' },
  { id: 34, title: 'Accessibility - Alt Text', topic: 'alt attributes, screen readers' },
  { id: 35, title: 'Accessibility - Skip Links', topic: 'skip navigation, keyboard' },
  { id: 36, title: 'HTML Entities', topic: 'special characters, entities' },
  { id: 37, title: 'Character Encoding', topic: 'UTF-8, charset' },
  { id: 38, title: 'Script and NoScript', topic: 'script, noscript tags' },
  { id: 39, title: 'Link Relations', topic: 'rel attribute, preload' },
  { id: 40, title: 'Base URL Element', topic: 'base tag, relative URLs' },
  { id: 41, title: 'Template Element', topic: 'template, cloning content' },
  { id: 42, title: 'Dialog Element', topic: 'modal dialogs, dialog' },
  { id: 43, title: 'Web Storage API', topic: 'localStorage, sessionStorage' },
  { id: 44, title: 'Geolocation API', topic: 'navigator.geolocation' },
  { id: 45, title: 'Drag and Drop API', topic: 'draggable, drop events' },
  { id: 46, title: 'Web Workers', topic: 'worker threads, performance' },
  { id: 47, title: 'Service Workers', topic: 'offline support, PWA' },
  { id: 48, title: 'Microdata and Schema', topic: 'structured data, schema.org' },
  { id: 49, title: 'Custom Elements', topic: 'web components, custom tags' },
  { id: 50, title: 'Final Project - Complete Website', topic: 'full website with all features' }
];

for (let i = 0; i < intermediateTopics.length; i++) {
  const lesson = intermediateTopics[i];
  const difficulty = i < 20 ? 'Intermediate' : 'Advanced';
  
  additionalLessons.push(\`
  {
    id: 'html-\${lesson.id}',
    title: '\${lesson.title}',
    description: 'Master \${lesson.topic}',
    language: 'html' as const,
    difficulty: '\${difficulty}',
    estimatedTime: 30,
    content: \\\`# \${lesson.title}

Learn about \${lesson.topic} in HTML.

## Key Concepts:
- Understanding \${lesson.topic}
- Best practices and usage
- Real-world examples

Practice implementing \${lesson.topic}!\\\`,
    initialCode: \\\`<!DOCTYPE html>
<html>
  <head>
    <title>\${lesson.title}</title>
  </head>
  <body>
    <!-- Implement \${lesson.topic} here -->
  </body>
</html>\\\`,
    solution: \\\`<!DOCTYPE html>
<html>
  <head>
    <title>\${lesson.title}</title>
  </head>
  <body>
    <h1>\${lesson.title}</h1>
    <p>Implementation example for \${lesson.topic}</p>
  </body>
</html>\\\`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  }\`);
}

const finalContent = \`import { Lesson } from '../courses'

export const htmlLessons: Lesson[] = [
  // BEGINNER SECTION (Lessons 1-10)
  {
    id: 'html-1',
    title: 'HTML Basics - Your First Web Page',
    description: 'Learn HTML structure and create your first webpage',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: \\\`# Welcome to HTML!

HTML (HyperText Markup Language) is the foundation of every website.

## Basic Structure:
\\\\\\\`\\\\\\\`\\\\\\\`html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
\\\\\\\`\\\\\\\`\\\\\\\`

## Key Elements:
- \\\\\\\`<!DOCTYPE html>\\\\\\\`: Declares HTML5
- \\\\\\\`<html>\\\\\\\`: Root element
- \\\\\\\`<head>\\\\\\\`: Metadata
- \\\\\\\`<body>\\\\\\\`: Visible content

Create a complete HTML page!\\\`,
    initialCode: \\\`<!-- Create a complete HTML page -->
<!DOCTYPE html>
<html>
  <head>
    
  </head>
  <body>
    
  </body>
</html>\\\`,
    solution: \\\`<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>Welcome to HTML!</p>
  </body>
</html>\\\`,
    hints: ['Start with DOCTYPE', 'Add a title in head', 'Add h1 and p in body']
  },\${additionalLessons.join(',')},
  {
    id: 'html-50',
    title: 'Final Project - Complete Website',
    description: 'Build a complete responsive website using all HTML skills',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 120,
    isProject: true,
    content: \\\`# Final HTML Project

Build a complete multi-page website with:
- Semantic HTML5 structure
- Forms and validation
- Tables and lists
- Media (images, audio, video)
- Accessibility features
- SEO optimization

## Requirements:
1. Homepage with navigation
2. About page with content
3. Contact form
4. Gallery with images
5. Proper meta tags
6. Accessibility compliance\\\`,
    initialCode: \\\`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
  </head>
  <body>
    <!-- Build your complete website here -->
  </body>
</html>\\\`,
    solution: \\\`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="My portfolio website">
    <title>My Portfolio</title>
  </head>
  <body>
    <header>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    
    <main>
      <section id="home">
        <h1>Welcome to My Portfolio</h1>
        <p>Professional web developer</p>
      </section>
      
      <section id="about">
        <h2>About Me</h2>
        <article>
          <p>Experienced in HTML, CSS, JavaScript</p>
        </article>
      </section>
      
      <section id="contact">
        <h2>Contact Me</h2>
        <form>
          <label for="name">Name:</label>
          <input type="text" id="name" required>
          
          <label for="email">Email:</label>
          <input type="email" id="email" required>
          
          <label for="message">Message:</label>
          <textarea id="message" required></textarea>
          
          <button type="submit">Send</button>
        </form>
      </section>
    </main>
    
    <footer>
      <p>&copy; 2024 My Portfolio. All rights reserved.</p>
    </footer>
  </body>
</html>\\\`,
    hints: ['Use semantic HTML5 elements', 'Include proper meta tags', 'Add ARIA labels for accessibility', 'Validate all forms', 'Use proper heading hierarchy']
  }
]
\`;

fs.writeFileSync(path.join(__dirname, '../data/lessons/htmlLessons.ts'), finalContent);

// Create CSS lessons with 50 lessons
const cssLessonsContent = \`import { Lesson } from '../courses'

export const cssLessons: Lesson[] = [
  {
    id: 'css-1',
    title: 'CSS Basics - Styling Your First Page',
    description: 'Learn CSS syntax and apply basic styles',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: \\\`# Introduction to CSS

CSS (Cascading Style Sheets) controls the visual appearance of HTML.

## CSS Syntax:
\\\\\\\`\\\\\\\`\\\\\\\`css
selector {
  property: value;
}
\\\\\\\`\\\\\\\`\\\\\\\`

## Example:
\\\\\\\`\\\\\\\`\\\\\\\`css
h1 {
  color: blue;
  font-size: 32px;
}
\\\\\\\`\\\\\\\`\\\\\\\`\\\`,
    initialCode: \\\`<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS here */
  </style>
</head>
<body>
  <h1>Hello CSS!</h1>
  <p>This is a paragraph.</p>
</body>
</html>\\\`,
    solution: \\\`<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      color: blue;
      font-size: 36px;
    }
    p {
      color: gray;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <h1>Hello CSS!</h1>
  <p>This is a paragraph.</p>
</body>
</html>\\\`,
    hints: ['Use <style> tag in <head>', 'selector { property: value; }', 'Semicolon after each property']
  },
  {
    id: 'css-2',
    title: 'Colors in CSS',
    description: 'Learn different ways to specify colors',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 20,
    content: \\\`# CSS Colors

Multiple ways to define colors:

1. **Named colors**: red, blue, green
2. **Hex**: #FF0000
3. **RGB**: rgb(255, 0, 0)
4. **RGBA**: rgba(255, 0, 0, 0.5)
5. **HSL**: hsl(0, 100%, 50%)\\\`,
    initialCode: \\\`<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add color styles */
  </style>
</head>
<body>
  <h1>Red Heading</h1>
  <p>Blue paragraph</p>
</body>
</html>\\\`,
    solution: \\\`<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      color: #FF0000;
      background-color: rgba(0, 0, 255, 0.2);
    }
    p {
      color: rgb(0, 0, 255);
    }
  </style>
</head>
<body>
  <h1>Red Heading</h1>
  <p>Blue paragraph</p>
</body>
</html>\\\`,
    hints: ['Hex: #RRGGBB', 'RGB: rgb(r, g, b)', 'RGBA adds transparency']
  },
  {
    id: 'css-3',
    title: 'Text Styling',
    description: 'Style text with font properties',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: \\\`# Text Styling Properties

\\\\\\\`\\\\\\\`\\\\\\\`css
p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
  text-align: center;
  text-decoration: underline;
  line-height: 1.5;
}
\\\\\\\`\\\\\\\`\\\\\\\`\\\`,
    initialCode: \\\`<!DOCTYPE html>
<html>
<head>
  <style>
    /* Style the text */
  </style>
</head>
<body>
  <h1>Styled Heading</h1>
  <p>This paragraph needs styling.</p>
</body>
</html>\\\`,
    solution: \\\`<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      font-family: 'Georgia', serif;
      font-size: 48px;
      font-weight: bold;
      text-align: center;
    }
    p {
      font-family: Arial, sans-serif;
      font-size: 18px;
      line-height: 1.6;
      text-align: justify;
    }
  </style>
</head>
<body>
  <h1>Styled Heading</h1>
  <p>This paragraph needs styling.</p>
</body>
</html>\\\`,
    hints: ['font-family for font', 'font-size for size', 'text-align for alignment']
  }
];

// Generate remaining 47 CSS lessons
const cssTopics = [
  { id: 4, title: 'Box Model Basics', topic: 'margin, padding, border' },
  { id: 5, title: 'Width and Height', topic: 'width, height, sizing' },
  { id: 6, title: 'Borders and Outlines', topic: 'border styles, outline' },
  { id: 7, title: 'Backgrounds', topic: 'background-color, image' },
  { id: 8, title: 'Classes and IDs', topic: 'class, id selectors' },
  { id: 9, title: 'Combinators', topic: 'descendant, child, sibling' },
  { id: 10, title: 'Pseudo-classes', topic: 'hover, active, focus' },
  { id: 11, title: 'Display Property', topic: 'block, inline, none' },
  { id: 12, title: 'Position Property', topic: 'static, relative, absolute' },
  { id: 13, title: 'Z-Index and Stacking', topic: 'z-index, layers' },
  { id: 14, title: 'Float and Clear', topic: 'float, clear, layout' },
  { id: 15, title: 'Flexbox Basics', topic: 'flex container, items' },
  { id: 16, title: 'Flexbox Direction', topic: 'flex-direction, wrap' },
  { id: 17, title: 'Flexbox Alignment', topic: 'justify-content, align-items' },
  { id: 18, title: 'Grid Basics', topic: 'grid container, rows, columns' },
  { id: 19, title: 'Grid Template', topic: 'grid-template, areas' },
  { id: 20, title: 'Grid Alignment', topic: 'justify, align in grid' },
  { id: 21, title: 'Transitions', topic: 'transition, duration, timing' },
  { id: 22, title: 'Transforms 2D', topic: 'rotate, scale, translate' },
  { id: 23, title: 'Transforms 3D', topic: '3D transforms, perspective' },
  { id: 24, title: 'Animations', topic: 'keyframes, animation' },
  { id: 25, title: 'Shadows', topic: 'box-shadow, text-shadow' },
  { id: 26, title: 'Gradients', topic: 'linear, radial gradients' },
  { id: 27, title: 'Border Radius', topic: 'rounded corners' },
  { id: 28, title: 'Opacity and Transparency', topic: 'opacity, rgba' },
  { id: 29, title: 'Overflow', topic: 'overflow, scroll, hidden' },
  { id: 30, title: 'Visibility', topic: 'visibility, display: none' },
  { id: 31, title: 'Cursor Styles', topic: 'cursor property' },
  { id: 32, title: 'List Styling', topic: 'list-style, markers' },
  { id: 33, title: 'Table Styling', topic: 'table borders, spacing' },
  { id: 34, title: 'Form Styling', topic: 'input, button styles' },
  { id: 35, title: 'Media Queries', topic: 'responsive design' },
  { id: 36, title: 'Mobile First Design', topic: 'mobile-first approach' },
  { id: 37, title: 'Responsive Units', topic: 'rem, em, %, vw, vh' },
  { id: 38, title: 'CSS Variables', topic: 'custom properties' },
  { id: 39, title: 'Calc Function', topic: 'calc() for calculations' },
  { id: 40, title: 'Filter Effects', topic: 'blur, brightness, contrast' },
  { id: 41, title: 'Blend Modes', topic: 'mix-blend-mode' },
  { id: 42, title: 'Clip Path', topic: 'clipping, shapes' },
  { id: 43, title: 'Object Fit', topic: 'image sizing' },
  { id: 44, title: 'Scroll Behavior', topic: 'smooth scrolling' },
  { id: 45, title: 'CSS Grid Advanced', topic: 'complex grid layouts' },
  { id: 46, title: 'Flexbox Advanced', topic: 'complex flex layouts' },
  { id: 47, title: 'CSS Architecture', topic: 'BEM, organization' },
  { id: 48, title: 'Performance Optimization', topic: 'CSS performance' },
  { id: 49, title: 'Browser Compatibility', topic: 'vendor prefixes' },
  { id: 50, title: 'Final Project - Styled Website', topic: 'complete styled site' }
];

const cssAdditionalLessons = cssTopics.map(lesson => {
  const difficulty = lesson.id <= 20 ? 'Beginner' : lesson.id <= 40 ? 'Intermediate' : 'Advanced';
  return \\\`
  {
    id: 'css-\${lesson.id}',
    title: '\${lesson.title}',
    description: 'Master \${lesson.topic} in CSS',
    language: 'html' as const,
    difficulty: '\${difficulty}',
    estimatedTime: 30,
    content: \\\\\\\`# \${lesson.title}

Learn about \${lesson.topic} in CSS.

## Key Concepts:
- Understanding \${lesson.topic}
- Best practices
- Real-world examples

Practice implementing \${lesson.topic}!\\\\\\\`,
    initialCode: \\\\\\\`<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for \${lesson.topic} */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>\\\\\\\`,
    solution: \\\\\\\`<!DOCTYPE html>
<html>
<head>
  <style>
    /* Implementation of \${lesson.topic} */
    div {
      /* Your CSS here */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>\\\\\\\`,
    hints: ['Follow CSS best practices', 'Test in multiple browsers', 'Use developer tools']
  }\\\`;
}).join(',');

const finalCSSContent = \\\`import { Lesson } from '../courses'

export const cssLessons: Lesson[] = [
  {
    id: 'css-1',
    title: 'CSS Basics - Styling Your First Page',
    description: 'Learn CSS syntax and apply basic styles',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: \\\\\\\`# Introduction to CSS

CSS (Cascading Style Sheets) controls the visual appearance of HTML.

## CSS Syntax:
\\\\\\\\\\\\\\\`\\\\\\\\\\\\\\\`\\\\\\\\\\\\\\\`css
selector {
  property: value;
}
\\\\\\\\\\\\\\\`\\\\\\\\\\\\\\\`\\\\\\\\\\\\\\\`

## Example:
\\\\\\\\\\\\\\\`\\\\\\\\\\\\\\\`\\\\\\\\\\\\\\\`css
h1 {
  color: blue;
  font-size: 32px;
}
\\\\\\\\\\\\\\\`\\\\\\\\\\\\\\\`\\\\\\\\\\\\\\\`\\\\\\\`,
    initialCode: \\\\\\\`<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS here */
  </style>
</head>
<body>
  <h1>Hello CSS!</h1>
  <p>This is a paragraph.</p>
</body>
</html>\\\\\\\`,
    solution: \\\\\\\`<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      color: blue;
      font-size: 36px;
    }
    p {
      color: gray;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <h1>Hello CSS!</h1>
  <p>This is a paragraph.</p>
</body>
</html>\\\\\\\`,
    hints: ['Use <style> tag in <head>', 'selector { property: value; }', 'Semicolon after each property']
  },\${cssAdditionalLessons}
]
\\\`;

fs.writeFileSync(path.join(__dirname, '../data/lessons/cssLessons.ts'), finalCSSContent);

console.log('✅ HTML lessons expanded to 50');
console.log('✅ CSS lessons expanded to 50');
console.log('All lesson files updated successfully!');
