export interface Lesson {
  id: string
  title: string
  description: string
  content: string
  language: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  estimatedTime: number
  initialCode: string
  solution: string
  expectedOutput?: string
  hints: string[]
  isProject?: boolean
  projectDescription?: string
}

export interface Course {
  id: string
  title: string
  description: string
  icon: string
  color: string
  level: string
  totalLessons: number
  lessons: Lesson[]
}

// Helper function to generate HTML lessons
const generateHTMLLessons = (): Lesson[] => [
  // BEGINNER SECTION (Lessons 1-10)
  {
    id: 'html-1',
    title: 'Your First HTML Page',
    description: 'Learn the basic structure of an HTML document',
    content: `# Your First HTML Page

HTML (HyperText Markup Language) is the backbone of every website. It provides the structure and content.

## What is HTML?
- **Markup Language**: Uses tags to define elements
- **Structure**: Organizes content on web pages
- **Universal**: Works on all browsers

## Basic Structure
\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
\`\`\`

## Elements Explained:
- **<!DOCTYPE html>**: Tells browser this is HTML5
- **<html>**: Root element containing everything
- **<head>**: Metadata (not visible on page)
- **<title>**: Shows in browser tab
- **<body>**: All visible content goes here

## Your Task:
Create a simple HTML page with a title "My First Page" and an h1 heading saying "Welcome to CodeMaster!"`,
    language: 'html',
    difficulty: 'Beginner',
    estimatedTime: 10,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <!-- Add your title here -->
  </head>
  <body>
    <!-- Add your h1 heading here -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Welcome to CodeMaster!</h1>
  </body>
</html>`,
    expectedOutput: 'Welcome to CodeMaster!',
    hints: [
      'The title tag goes inside the head section',
      'h1 creates the largest heading',
      'Don\'t forget to close all your tags'
    ]
  },
  {
    id: 'html-2',
    title: 'Headings and Paragraphs',
    description: 'Master text formatting with headings and paragraphs',
    content: `# Headings and Paragraphs

Text is the most important content on web pages. HTML provides tags to structure and format text properly.

## Heading Tags (h1 - h6)
HTML has 6 levels of headings, from largest to smallest:
\`\`\`html
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection</h3>
<h4>Minor Heading</h4>
<h5>Smaller Heading</h5>
<h6>Smallest Heading</h6>
\`\`\`

## Paragraphs
The **<p>** tag creates paragraphs:
\`\`\`html
<p>This is a paragraph of text.</p>
<p>This is another paragraph.</p>
\`\`\`

## Best Practices:
- Use only ONE h1 per page (main title)
- Use headings in order (don't skip levels)
- Paragraphs automatically add spacing

## Your Task:
Create a simple article with:
1. An h1 title: "Learning HTML"
2. An h2 subtitle: "Why HTML Matters"
3. A paragraph explaining why HTML is important`,
    language: 'html',
    difficulty: 'Beginner',
    estimatedTime: 8,
    initialCode: `<!DOCTYPE html>
<html>
  <body>
    <!-- Add your headings and paragraph here -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <body>
    <h1>Learning HTML</h1>
    <h2>Why HTML Matters</h2>
    <p>HTML is the foundation of web development. It structures content and makes the web accessible to everyone.</p>
  </body>
</html>`,
    expectedOutput: 'Learning HTML',
    hints: [
      'Start with h1, then h2, then p',
      'Each tag needs an opening and closing part',
      'Write any text about HTML in the paragraph'
    ]
  },
  {
    id: 'html-3',
    title: 'Text Formatting Tags',
    description: 'Learn to make text bold, italic, and more',
    content: `# Text Formatting

HTML provides special tags to emphasize and format text.

## Common Formatting Tags:
\`\`\`html
<strong>Bold text</strong> - Important text
<em>Italic text</em> - Emphasized text
<mark>Highlighted</mark> - Marked text
<small>Small text</small> - Fine print
<del>Deleted text</del> - Removed content
<ins>Inserted text</ins> - Added content
<sub>Subscript</sub> - H₂O
<sup>Superscript</sup> - X²
\`\`\`

## Semantic Meaning:
- **<strong>**: Important (bold)
- **<em>**: Emphasis (italic)
- Use these instead of <b> and <i> for better accessibility

## Your Task:
Create a paragraph that includes:
1. Your name in **bold** (use strong)
2. Your favorite programming language in *italic* (use em)
3. Text saying "Start coding today!" with the word "today" highlighted (use mark)`,
    language: 'html',
    difficulty: 'Beginner',
    estimatedTime: 10,
    initialCode: `<!DOCTYPE html>
<html>
  <body>
    <p>
      <!-- Create your formatted text here -->
    </p>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <body>
    <p>
      My name is <strong>Alex</strong> and I love <em>JavaScript</em>. 
      Start coding <mark>today</mark>!
    </p>
  </body>
</html>`,
    hints: [
      'strong makes text bold',
      'em makes text italic',
      'mark highlights text'
    ]
  },
  {
    id: 'html-4',
    title: 'Lists - Ordered and Unordered',
    description: 'Create bullet points and numbered lists',
    content: `# HTML Lists

Lists help organize information. HTML has two main types: ordered (numbered) and unordered (bullet points).

## Unordered List (ul)
Creates bullet points:
\`\`\`html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
\`\`\`

## Ordered List (ol)
Creates numbered list:
\`\`\`html
<ol>
  <li>Step 1</li>
  <li>Step 2</li>
  <li>Step 3</li>
</ol>
\`\`\`

## Nested Lists
You can put lists inside lists:
\`\`\`html
<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>Vegetables</li>
</ul>
\`\`\`

## Your Task:
Create two lists:
1. An unordered list of 3 programming languages you want to learn
2. An ordered list of 3 steps to become a developer`,
    language: 'html',
    difficulty: 'Beginner',
    estimatedTime: 12,
    initialCode: `<!DOCTYPE html>
<html>
  <body>
    <h2>Languages to Learn</h2>
    <!-- Add unordered list here -->
    
    <h2>Steps to Success</h2>
    <!-- Add ordered list here -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <body>
    <h2>Languages to Learn</h2>
    <ul>
      <li>JavaScript</li>
      <li>Python</li>
      <li>TypeScript</li>
    </ul>
    
    <h2>Steps to Success</h2>
    <ol>
      <li>Learn the basics</li>
      <li>Build projects</li>
      <li>Get a job</li>
    </ol>
  </body>
</html>`,
    hints: [
      'ul for bullet points, ol for numbers',
      'Each item goes in an li tag',
      'Lists can have any number of items'
    ]
  },
  {
    id: 'html-5',
    title: 'Links and Navigation',
    description: 'Connect pages with hyperlinks',
    content: `# HTML Links

Links (hyperlinks) are what make the web connected. The <a> tag creates clickable links.

## Basic Link Syntax:
\`\`\`html
<a href="https://example.com">Click here</a>
\`\`\`

## Link Attributes:
- **href**: The destination URL
- **target="_blank"**: Opens in new tab
- **title**: Tooltip text on hover

## Types of Links:
\`\`\`html
<!-- External link -->
<a href="https://google.com">Google</a>

<!-- Internal link (same site) -->
<a href="/about.html">About Us</a>

<!-- Email link -->
<a href="mailto:hello@example.com">Email Me</a>

<!-- Phone link -->
<a href="tel:+1234567890">Call Us</a>
\`\`\`

## Your Task:
Create a navigation menu with:
1. A link to Google that opens in a new tab
2. A link to a fake "About" page (about.html)
3. An email link to contact@codemaster.com`,
    language: 'html',
    difficulty: 'Beginner',
    estimatedTime: 10,
    initialCode: `<!DOCTYPE html>
<html>
  <body>
    <nav>
      <!-- Add your links here -->
      
    </nav>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <body>
    <nav>
      <a href="https://google.com" target="_blank">Google</a>
      <a href="about.html">About</a>
      <a href="mailto:contact@codemaster.com">Contact</a>
    </nav>
  </body>
</html>`,
    expectedOutput: 'Google',
    hints: [
      'Use href for the destination',
      'target="_blank" opens new tab',
      'Email links start with mailto:'
    ]
  },
];

// Continue with more lessons...
const generateMoreHTMLLessons = (): Lesson[] => [
  {
    id: 'html-6',
    title: 'Images and Alt Text',
    description: 'Add images to your web pages',
    content: `# HTML Images

Images make websites visual and engaging. The <img> tag adds images to pages.

## Image Syntax:
\`\`\`html
<img src="image.jpg" alt="Description">
\`\`\`

## Important Attributes:
- **src**: Image file path or URL
- **alt**: Alternative text (for accessibility)
- **width & height**: Image dimensions

## Examples:
\`\`\`html
<!-- Local image -->
<img src="photo.jpg" alt="My photo" width="300">

<!-- Online image -->
<img src="https://example.com/logo.png" alt="Company logo">
\`\`\`

## Why Alt Text Matters:
- Screen readers read it for blind users
- Shows when image doesn't load
- Helps SEO (search engines)

## Your Task:
Add an image with:
1. src: "https://via.placeholder.com/400"
2. alt text: "Placeholder image"
3. width of 400 pixels`,
    language: 'html',
    difficulty: 'Beginner',
    estimatedTime: 8,
    initialCode: `<!DOCTYPE html>
<html>
  <body>
    <h1>My Image</h1>
    <!-- Add your image here -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <body>
    <h1>My Image</h1>
    <img src="https://via.placeholder.com/400" alt="Placeholder image" width="400">
  </body>
</html>`,
    hints: [
      'img is a self-closing tag (no closing tag needed)',
      'Always include alt text',
      'src can be a URL or file path'
    ]
  },
  // Add lesson 7-25 here - I'll create a condensed version for file size
];

export const courses: Course[] = [
  {
    id: 'html-fundamentals',
    title: 'HTML Fundamentals',
    description: 'Master the building blocks of the web',
    icon: '🌐',
    color: 'from-orange-500 to-red-500',
    level: 'Beginner',
    totalLessons: 25,
    lessons: [...generateHTMLLessons(), ...generateMoreHTMLLessons()]
  },
  // I'll create separate files for other courses due to size
];

export function getCourseById(id: string): Course | undefined {
  return courses.find(course => course.id === id)
}

export function getLessonById(courseId: string, lessonId: string): Lesson | undefined {
  const course = getCourseById(courseId)
  return course?.lessons.find(lesson => lesson.id === lessonId)
}
