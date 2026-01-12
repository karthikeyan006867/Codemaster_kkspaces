import { Lesson } from '../courses'

export const htmlLessons: Lesson[] = [
  {
    id: 'html-1',
    title: 'HTML Basics - Your First Web Page',
    description: 'Learn the fundamental structure of HTML documents and create your first web page',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# HTML Basics - Your First Web Page

## Introduction to HTML
HTML (HyperText Markup Language) is the standard markup language for creating web pages. Every web page you see is built with HTML!

## Basic Structure
Every HTML document follows this structure:
- **DOCTYPE**: Tells the browser this is an HTML5 document
- **html**: Root element that contains all content
- **head**: Contains metadata (title, links to CSS, etc.)
- **body**: Contains the visible content

## Key Concepts:
- \`<!DOCTYPE html>\` - HTML5 declaration
- \`<html>\` - Root element
- \`<head>\` - Document metadata
- \`<title>\` - Browser tab title
- \`<body>\` - Visible content

## Example:
\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <p>This is my first HTML page!</p>
  </body>
</html>
\`\`\`

## Your Task:
Create a simple web page about yourself with:
1. A proper HTML5 structure
2. A descriptive title
3. A heading with your name
4. A paragraph introducing yourself`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <!-- Add a heading with your name -->
    
    <!-- Add a paragraph about yourself -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Welcome to My Page</title>
  </head>
  <body>
    <h1>Hello, I'm Alex</h1>
    <p>I'm learning HTML and excited to build my first website. This is the beginning of my web development journey!</p>
  </body>
</html>`,
    hints: [
      'Make sure to include the DOCTYPE declaration at the very top',
      'The <title> tag appears in the browser tab, not on the page',
      'Use <h1> for your main heading and <p> for paragraphs',
      'All visible content goes inside the <body> tag'
    ],
    testCases: [
      { name: 'Has DOCTYPE', test: (code: string) => code.includes('<!DOCTYPE html>'), errorMessage: 'Must include <!DOCTYPE html> declaration' },
      { name: 'Has html tags', test: (code: string) => code.includes('<html>') && code.includes('</html>'), errorMessage: 'Must have opening and closing <html> tags' },
      { name: 'Has head section', test: (code: string) => code.includes('<head>') && code.includes('</head>'), errorMessage: 'Must include <head> section' },
      { name: 'Has title', test: (code: string) => code.includes('<title>') && code.includes('</title>'), errorMessage: 'Must include a <title> tag in the head' },
      { name: 'Has body section', test: (code: string) => code.includes('<body>') && code.includes('</body>'), errorMessage: 'Must include <body> section' },
      { name: 'Has h1 heading', test: (code: string) => code.includes('<h1>'), errorMessage: 'Must include an <h1> heading' },
      { name: 'Has paragraph', test: (code: string) => code.includes('<p>'), errorMessage: 'Must include at least one <p> paragraph' }
    ]
  },
  {
    id: 'html-2',
    title: 'Headings and Paragraphs',
    description: 'Master HTML headings (h1-h6) and paragraph formatting',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Headings and Paragraphs

## Understanding Headings
HTML provides six levels of headings, from \`<h1>\` (most important) to \`<h6>\` (least important).

### Heading Hierarchy:
- **h1**: Main page title (use only once per page)
- **h2**: Major sections
- **h3**: Subsections within h2
- **h4-h6**: Further subdivisions

## Paragraphs
The \`<p>\` tag defines paragraphs. Browsers automatically add space before and after paragraphs.

## Best Practices:
- Don't skip heading levels (don't jump from h1 to h3)
- Use headings to create a clear document outline
- Keep paragraphs focused on one idea

## Example:
\`\`\`html
<h1>Web Development Guide</h1>
<p>This is an introduction to web development.</p>

<h2>HTML Basics</h2>
<p>HTML is the foundation of web pages.</p>

<h3>Getting Started</h3>
<p>Begin with simple examples and practice regularly.</p>
\`\`\`

## Your Task:
Create a blog post about a topic you enjoy with:
1. One main h1 heading
2. At least two h2 section headings
3. One h3 subsection
4. Several paragraphs with meaningful content`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>My Blog Post</title>
  </head>
  <body>
    <!-- Add your main h1 title here -->
    
    <!-- Add introduction paragraph -->
    
    <!-- Add first h2 section -->
    
    <!-- Add section paragraph -->
    
    <!-- Add second h2 section -->
    
    <!-- Add section paragraph -->
    
    <!-- Add an h3 subsection -->
    
    <!-- Add subsection paragraph -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Learning to Code</title>
  </head>
  <body>
    <h1>My Journey Learning Web Development</h1>
    <p>Starting to learn web development has been an exciting adventure. Every day brings new challenges and opportunities to grow.</p>
    
    <h2>Why I Started</h2>
    <p>I've always been fascinated by how websites work. The ability to create something that millions of people can access from anywhere in the world is incredible.</p>
    
    <h2>What I'm Learning</h2>
    <p>My focus right now is on mastering the fundamentals: HTML, CSS, and JavaScript.</p>
    
    <h3>HTML - The Foundation</h3>
    <p>HTML is where everything begins. It provides the structure and content that makes up every web page.</p>
  </body>
</html>`,
    hints: [
      'Start with an h1 for your main title',
      'Use h2 for major sections of your article',
      'Use h3 to break down an h2 section into smaller parts',
      'Write meaningful content in your paragraphs - make it personal!',
      'Proper heading hierarchy helps with SEO and accessibility'
    ],
    testCases: [
      { name: 'Has h1 heading', test: (code: string) => code.includes('<h1>'), errorMessage: 'Must include an <h1> heading' },
      { name: 'Has h2 headings', test: (code: string) => (code.match(/<h2>/g) || []).length >= 2, errorMessage: 'Must include at least 2 <h2> headings' },
      { name: 'Has h3 heading', test: (code: string) => code.includes('<h3>'), errorMessage: 'Must include at least one <h3> heading' },
      { name: 'Has paragraphs', test: (code: string) => (code.match(/<p>/g) || []).length >= 3, errorMessage: 'Must include at least 3 paragraphs' },
      { name: 'Substantial content', test: (code: string) => code.replace(/<[^>]*>/g, '').trim().length > 200, errorMessage: 'Content should be substantial (200+ characters of text)' }
    ]
  },
  {
    id: 'html-3',
    title: 'Links and Navigation',
    description: 'Create hyperlinks to connect pages and websites',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Links and Navigation

## The Anchor Tag
The \`<a>\` tag creates hyperlinks. The \`href\` attribute specifies the destination URL.

### Types of Links:
1. **External links**: Link to other websites
2. **Internal links**: Link to other pages on your site
3. **Anchor links**: Jump to sections on the same page
4. **Email links**: Open the user's email client

## Examples:
\`\`\`html
<!-- External link -->
<a href="https://www.google.com">Visit Google</a>

<!-- Internal link -->
<a href="/about.html">About Us</a>

<!-- Anchor link -->
<a href="#section1">Jump to Section 1</a>

<!-- Email link -->
<a href="mailto:hello@example.com">Email Us</a>

<!-- Open in new tab -->
<a href="https://example.com" target="_blank">New Tab</a>
\`\`\`

## Best Practices:
- Use descriptive link text (not "click here")
- Add \`target="_blank"\` for external links
- Include \`rel="noopener"\` with target="_blank" for security

## Your Task:
Create a resource page with:
1. At least 3 external links to helpful websites
2. Descriptive link text
3. Links that open in new tabs`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>My Learning Resources</title>
  </head>
  <body>
    <h1>Web Development Resources</h1>
    <p>Here are some helpful resources for learning web development:</p>
    
    <!-- Add 3 external links to learning resources -->
    <!-- Example: MDN Web Docs, freeCodeCamp, W3Schools -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>My Learning Resources</title>
  </head>
  <body>
    <h1>Web Development Resources</h1>
    <p>Here are some helpful resources for learning web development:</p>
    
    <p><a href="https://developer.mozilla.org" target="_blank" rel="noopener">MDN Web Docs</a> - Comprehensive documentation for web technologies</p>
    
    <p><a href="https://www.freecodecamp.org" target="_blank" rel="noopener">freeCodeCamp</a> - Free coding courses and tutorials</p>
    
    <p><a href="https://www.w3schools.com" target="_blank" rel="noopener">W3Schools</a> - Easy-to-understand tutorials and examples</p>
  </body>
</html>`,
    hints: [
      'Use the <a> tag with href attribute',
      'Add target="_blank" to open links in new tabs',
      'Include rel="noopener" for security when using target="_blank"',
      'Use descriptive text between <a> and </a>',
      'Make sure URLs start with https://'
    ],
    testCases: [
      { name: 'Has anchor tags', test: (code: string) => (code.match(/<a /g) || []).length >= 3, errorMessage: 'Must include at least 3 <a> tags' },
      { name: 'Has href attributes', test: (code: string) => (code.match(/href="/g) || []).length >= 3, errorMessage: 'Each link must have an href attribute' },
      { name: 'Has external links', test: (code: string) => code.includes('https://') || code.includes('http://'), errorMessage: 'Must include external links starting with https://' },
      { name: 'Opens in new tab', test: (code: string) => code.includes('target="_blank"'), errorMessage: 'At least one link should open in a new tab (target="_blank")' },
      { name: 'Has descriptive text', test: (code: string) => /<a[^>]*>[^<]{5,}<\/a>/.test(code), errorMessage: 'Links should have descriptive text (not just single words)' }
    ]
  },
  {
    id: 'html-4',
    title: 'Images and Media',
    description: 'Add images to your web pages with proper accessibility',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Images and Media

## The Image Tag
The \`<img>\` tag embeds images in web pages. It's a self-closing tag (no closing tag needed).

## Required Attributes:
- **src**: Path to the image file
- **alt**: Alternative text for accessibility and SEO

## Optional Attributes:
- **width/height**: Image dimensions in pixels
- **title**: Tooltip text on hover

## Examples:
\`\`\`html
<!-- Basic image -->
<img src="photo.jpg" alt="A beautiful sunset">

<!-- With dimensions -->
<img src="logo.png" alt="Company logo" width="200" height="100">

<!-- From URL -->
<img src="https://example.com/image.jpg" alt="Description">
\`\`\`

## Image Best Practices:
1. **Always include alt text** - Critical for accessibility
2. Use descriptive alt text that explains the image
3. For decorative images, use alt=""
4. Optimize image file sizes for faster loading
5. Use appropriate image formats (JPG for photos, PNG for graphics)

## Your Task:
Create a photo gallery page with:
1. A heading for the gallery
2. At least 3 images with proper alt text
3. Captions for each image using paragraphs
4. Appropriate image dimensions`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>My Photo Gallery</title>
  </head>
  <body>
    <h1>My Photo Gallery</h1>
    
    <!-- Add 3 images with alt text and captions -->
    <!-- You can use placeholder images from: -->
    <!-- https://via.placeholder.com/300x200 -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>My Photo Gallery</title>
  </head>
  <body>
    <h1>My Photo Gallery</h1>
    
    <h2>Nature Photography</h2>
    
    <img src="https://via.placeholder.com/300x200/4CAF50/ffffff?text=Mountain+View" 
         alt="Scenic mountain landscape with snow-capped peaks" 
         width="300" 
         height="200">
    <p>A breathtaking view of the mountains at sunrise.</p>
    
    <img src="https://via.placeholder.com/300x200/2196F3/ffffff?text=Ocean+Waves" 
         alt="Ocean waves crashing on sandy beach" 
         width="300" 
         height="200">
    <p>The peaceful sound of ocean waves.</p>
    
    <img src="https://via.placeholder.com/300x200/FF9800/ffffff?text=Forest+Path" 
         alt="Sunlit path through autumn forest" 
         width="300" 
         height="200">
    <p>A serene walk through the autumn forest.</p>
  </body>
</html>`,
    hints: [
      'Use the <img> tag with both src and alt attributes',
      'Alt text should describe what the image shows',
      'You can use https://via.placeholder.com for test images',
      'Add width and height attributes to specify image dimensions',
      'Use <p> tags for image captions'
    ],
    testCases: [
      { name: 'Has img tags', test: (code: string) => (code.match(/<img/g) || []).length >= 3, errorMessage: 'Must include at least 3 <img> tags' },
      { name: 'Has src attributes', test: (code: string) => (code.match(/src="/g) || []).length >= 3, errorMessage: 'Each image must have a src attribute' },
      { name: 'Has alt attributes', test: (code: string) => (code.match(/alt="/g) || []).length >= 3, errorMessage: 'Each image must have alt text for accessibility' },
      { name: 'Alt text is descriptive', test: (code: string) => /alt="[^"]{10,}"/.test(code), errorMessage: 'Alt text should be descriptive (at least 10 characters)' },
      { name: 'Has captions', test: (code: string) => (code.match(/<p>/g) || []).length >= 3, errorMessage: 'Include paragraph captions for your images' }
    ]
  },
  {
    id: 'html-5',
    title: 'Lists - Ordered and Unordered',
    description: 'Create ordered and unordered lists to organize information',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Lists - Ordered and Unordered

## Two Types of Lists

### Unordered Lists (\`<ul>\`)
Use for items where order doesn't matter (bullet points):
\`\`\`html
<ul>
  <li>Apples</li>
  <li>Bananas</li>
  <li>Oranges</li>
</ul>
\`\`\`

### Ordered Lists (\`<ol>\`)
Use for sequential items or rankings (numbered):
\`\`\`html
<ol>
  <li>Wake up</li>
  <li>Brush teeth</li>
  <li>Eat breakfast</li>
</ol>
\`\`\`

## Nested Lists
You can nest lists inside lists:
\`\`\`html
<ul>
  <li>Fruits
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
    </ul>
  </li>
  <li>Vegetables</li>
</ul>
\`\`\`

## When to Use Each:
- **Unordered lists**: Shopping lists, features, menu items
- **Ordered lists**: Instructions, rankings, steps in a process

## Your Task:
Create a recipe page with:
1. An unordered list of ingredients (at least 5 items)
2. An ordered list of cooking instructions (at least 5 steps)
3. Proper headings for each section`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>My Favorite Recipe</title>
  </head>
  <body>
    <h1>Chocolate Chip Cookies</h1>
    
    <h2>Ingredients</h2>
    <!-- Add an unordered list of ingredients -->
    
    <h2>Instructions</h2>
    <!-- Add an ordered list of cooking steps -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>My Favorite Recipe</title>
  </head>
  <body>
    <h1>Chocolate Chip Cookies</h1>
    
    <h2>Ingredients</h2>
    <ul>
      <li>2 cups all-purpose flour</li>
      <li>1 cup butter, softened</li>
      <li>3/4 cup sugar</li>
      <li>2 eggs</li>
      <li>1 teaspoon vanilla extract</li>
      <li>1 teaspoon baking soda</li>
      <li>2 cups chocolate chips</li>
    </ul>
    
    <h2>Instructions</h2>
    <ol>
      <li>Preheat oven to 375°F (190°C)</li>
      <li>Mix butter and sugar until creamy</li>
      <li>Beat in eggs and vanilla</li>
      <li>Gradually blend in flour and baking soda</li>
      <li>Stir in chocolate chips</li>
      <li>Drop spoonfuls onto baking sheet</li>
      <li>Bake for 9-11 minutes until golden</li>
      <li>Cool on wire rack and enjoy!</li>
    </ol>
  </body>
</html>`,
    hints: [
      'Use <ul> for unordered lists (ingredients)',
      'Use <ol> for ordered lists (numbered steps)',
      'Each item goes in an <li> tag',
      'Remember to close all tags properly',
      'Add h2 headings to separate sections'
    ],
    testCases: [
      { name: 'Has unordered list', test: (code: string) => code.includes('<ul>') && code.includes('</ul>'), errorMessage: 'Must include a <ul> unordered list' },
      { name: 'Has ordered list', test: (code: string) => code.includes('<ol>') && code.includes('</ol>'), errorMessage: 'Must include an <ol> ordered list' },
      { name: 'Has list items', test: (code: string) => (code.match(/<li>/g) || []).length >= 10, errorMessage: 'Must have at least 10 list items total (5 in each list)' },
      { name: 'Has section headings', test: (code: string) => (code.match(/<h2>/g) || []).length >= 2, errorMessage: 'Include h2 headings for Ingredients and Instructions' },
      { name: 'Proper nesting', test: (code: string) => /<ul>[\s\S]*<li>[\s\S]*<\/li>[\s\S]*<\/ul>/.test(code) && /<ol>[\s\S]*<li>[\s\S]*<\/li>[\s\S]*<\/ol>/.test(code), errorMessage: 'List items must be properly nested inside ul/ol tags' }
    ]
  },
  {
    id: 'html-6',
    title: 'Text Formatting',
    description: 'Use semantic HTML tags to format and emphasize text',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Text Formatting

## Semantic Text Elements
HTML provides semantic tags that give meaning to text formatting:

### Important vs Visual Formatting:
- **Semantic**: Conveys meaning (\`<strong>\`, \`<em>\`)
- **Visual**: Just appearance (\`<b>\`, \`<i>\`) - avoid these!

## Common Formatting Tags:

### \`<strong>\` - Strong Importance
\`\`\`html
<p>This is <strong>very important</strong> information!</p>
\`\`\`
Displays as **bold** and conveys importance to screen readers.

### \`<em>\` - Emphasis
\`\`\`html
<p>I <em>really</em> love coding!</p>
\`\`\`
Displays as *italic* and adds vocal stress when read aloud.

### \`<mark>\` - Highlighted Text
\`\`\`html
<p>The answer is <mark>42</mark>.</p>
\`\`\`
Highlights text like a yellow marker.

### Other Useful Tags:
- \`<small>\`: Smaller text (fine print)
- \`<code>\`: Code snippets
- \`<br>\`: Line break
- \`<hr>\`: Horizontal rule (divider)

## Example:
\`\`\`html
<p>To install: <code>npm install react</code></p>
<p><strong>Warning:</strong> This is <em>critical</em>!</p>
<p>Price: <small>$99.99</small></p>
\`\`\`

## Your Task:
Create an article with:
1. A paragraph using <strong> for important text
2. A paragraph using <em> for emphasis
3. A paragraph using <mark> to highlight key information
4. At least one <code> tag for a code example`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>HTML Formatting Guide</title>
  </head>
  <body>
    <h1>Text Formatting in HTML</h1>
    
    <!-- Add a paragraph with <strong> for important text -->
    
    <!-- Add a paragraph with <em> for emphasis -->
    
    <!-- Add a paragraph with <mark> to highlight text -->
    
    <!-- Add a paragraph with <code> for a code example -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>HTML Formatting Guide</title>
  </head>
  <body>
    <h1>Text Formatting in HTML</h1>
    
    <p><strong>Important:</strong> Always save your work before closing your editor. Data loss can happen unexpectedly!</p>
    
    <p>When learning to code, practice is <em>essential</em>. The more you code, the better you become.</p>
    
    <p>Remember this key concept: <mark>HTML provides structure, CSS provides style, and JavaScript provides behavior</mark>.</p>
    
    <p>To create a paragraph in HTML, use the <code>&lt;p&gt;</code> tag. It's one of the most common elements you'll use.</p>
    
    <hr>
    
    <p><small>Article written on January 1, 2026</small></p>
  </body>
</html>`,
    hints: [
      'Use <strong> to make text bold AND convey importance',
      'Use <em> to italicize text AND add emphasis',
      'Use <mark> to highlight key information',
      'Use <code> for inline code examples',
      'These are semantic tags - they have meaning beyond just styling'
    ],
    testCases: [
      { name: 'Has strong tag', test: (code: string) => code.includes('<strong>'), errorMessage: 'Must include <strong> tag for important text' },
      { name: 'Has em tag', test: (code: string) => code.includes('<em>'), errorMessage: 'Must include <em> tag for emphasis' },
      { name: 'Has mark tag', test: (code: string) => code.includes('<mark>'), errorMessage: 'Must include <mark> tag for highlighted text' },
      { name: 'Has code tag', test: (code: string) => code.includes('<code>'), errorMessage: 'Must include <code> tag for code examples' },
      { name: 'Has paragraphs', test: (code: string) => (code.match(/<p>/g) || []).length >= 4, errorMessage: 'Create at least 4 paragraphs demonstrating different formatting' }
    ]
  },
  {
    id: 'html-7',
    title: 'Div and Span Containers',
    description: 'Learn to use div and span for grouping and styling content',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Div and Span Containers

## Generic Container Elements
The div and span tags are generic containers used for grouping and styling.

### div - Block-Level Container
Takes up full width, starts on new line. Used for sections and layouts.

### span - Inline Container
Takes only needed width, stays inline. Used for styling text portions.

## Your Task:
Create card layouts with divs and use spans to highlight specific words.`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Content Cards</title>
    <style>
      .card { border: 1px solid #ccc; padding: 20px; margin: 10px; }
    </style>
  </head>
  <body>
    <h1>My Cards</h1>
    <!-- Create 3 div cards with headings, paragraphs, and highlighted spans -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Content Cards</title>
    <style>
      .card { border: 1px solid #ccc; padding: 20px; margin: 10px; }
    </style>
  </head>
  <body>
    <h1>My Cards</h1>
    <div class="card">
      <h2>HTML</h2>
      <p>HTML is the <span style="color: blue;">foundation</span> of web development.</p>
    </div>
    <div class="card">
      <h2>CSS</h2>
      <p>CSS makes websites <span style="color: green;">beautiful</span>.</p>
    </div>
    <div class="card">
      <h2>JavaScript</h2>
      <p>JavaScript adds <span style="color: red;">interactivity</span>.</p>
    </div>
  </body>
</html>`,
    hints: ['Use div for containers', 'Add class="card" to divs', 'Use span with style attribute for highlighting'],
    testCases: [
      { name: 'Has div tags', test: (code: string) => (code.match(/<div/g) || []).length >= 3, errorMessage: 'Must include at least 3 div containers' },
      { name: 'Has span tags', test: (code: string) => (code.match(/<span/g) || []).length >= 3, errorMessage: 'Must use at least 3 span tags' },
      { name: 'Divs have content', test: (code: string) => /<div[^>]*>[\s\S]*<h[1-6]>[\s\S]*<\/div>/.test(code), errorMessage: 'Divs should contain headings and paragraphs' }
    ]
  },
    {
    id: 'html-8',
    title: 'Tables - Rows and Columns',
    description: 'Create data tables with rows, columns, and headers',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Tables - Rows and Columns

## HTML Table Structure
Tables organize data in rows and columns using table, thead, tbody, tr, th, and td elements.

## Your Task:
Create a class schedule table with headers and data rows.`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Class Schedule</title>
    <style>
      table { border-collapse: collapse; width: 100%; }
      th, td { border: 1px solid #ddd; padding: 12px; }
      th { background-color: #4CAF50; color: white; }
    </style>
  </head>
  <body>
    <h1>Weekly Schedule</h1>
    <!-- Create table with thead and tbody -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Class Schedule</title>
    <style>
      table { border-collapse: collapse; width: 100%; }
      th, td { border: 1px solid #ddd; padding: 12px; }
      th { background-color: #4CAF50; color: white; }
    </style>
  </head>
  <body>
    <h1>Weekly Schedule</h1>
    <table>
      <thead>
        <tr><th>Day</th><th>Time</th><th>Subject</th></tr>
      </thead>
      <tbody>
        <tr><td>Monday</td><td>9:00 AM</td><td>Math</td></tr>
        <tr><td>Tuesday</td><td>10:00 AM</td><td>Science</td></tr>
        <tr><td>Wednesday</td><td>11:00 AM</td><td>History</td></tr>
        <tr><td>Thursday</td><td>2:00 PM</td><td>English</td></tr>
        <tr><td>Friday</td><td>3:00 PM</td><td>Art</td></tr>
      </tbody>
    </table>
  </body>
</html>`,
    hints: ['Use thead for headers', 'Use tbody for data', 'Each tr is a row', 'Use th in thead, td in tbody'],
    testCases: [
      { name: 'Has table', test: (code) => code.includes('<table'), errorMessage: 'Must include table element' },
      { name: 'Has thead', test: (code) => code.includes('<thead>'), errorMessage: 'Must include thead section' },
      { name: 'Has tbody', test: (code) => code.includes('<tbody>'), errorMessage: 'Must include tbody section' },
      { name: 'Has headers', test: (code) => (code.match(/<th>/g) || []).length >= 3, errorMessage: 'Must have at least 3 th headers' },
      { name: 'Has data rows', test: (code) => (code.match(/<tr>/g) || []).length >= 6, errorMessage: 'Must have 6+ rows' }
    ]
  },
    {
    id: 'html-9',
    title: 'Forms - Input Elements',
    description: 'Create interactive forms to collect user information',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Forms - Input Elements

## HTML Forms
Forms collect user input using form, label, input, and textarea elements.

## Your Task:
Create a contact form with name, email, message, and submit button.`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Contact Form</title>
    <style>
      form { max-width: 500px; margin: 20px; }
      label { display: block; margin-top: 10px; }
      input, textarea { width: 100%; padding: 8px; margin-top: 5px; }
    </style>
  </head>
  <body>
    <h1>Contact Us</h1>
    <!-- Create form with name, email, message, submit -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Contact Form</title>
    <style>
      form { max-width: 500px; margin: 20px; }
      label { display: block; margin-top: 10px; }
      input, textarea { width: 100%; padding: 8px; margin-top: 5px; }
    </style>
  </head>
  <body>
    <h1>Contact Us</h1>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      
      <label for="message">Message:</label>
      <textarea id="message" name="message" rows="5" required></textarea>
      
      <input type="submit" value="Send">
    </form>
  </body>
</html>`,
    hints: ['Wrap inputs in form tag', 'Use label with for attribute', 'Match label for to input id', 'Add required attribute'],
    testCases: [
      { name: 'Has form', test: (code) => code.includes('<form'), errorMessage: 'Must include form element' },
      { name: 'Has text input', test: (code) => code.includes('type="text"'), errorMessage: 'Must include text input' },
      { name: 'Has email input', test: (code) => code.includes('type="email"'), errorMessage: 'Must include email input' },
      { name: 'Has textarea', test: (code) => code.includes('<textarea'), errorMessage: 'Must include textarea' },
      { name: 'Has submit', test: (code) => code.includes('type="submit"'), errorMessage: 'Must include submit button' },
      { name: 'Has labels', test: (code) => (code.match(/<label/g) || []).length >= 3, errorMessage: 'Must include labels' }
    ]
  },
    {
    id: 'html-10',
    title: 'Buttons and Input Types',
    description: 'Explore different button types and HTML5 input types',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Buttons and Input Types

## HTML5 Input Types
HTML5 provides many input types: email, date, number, time, color, range, etc.

## Your Task:
Create a registration form using various input types.`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Registration</title>
    <style>
      form { max-width: 600px; margin: 20px; }
      label { display: block; margin-top: 10px; }
      input { width: 100%; padding: 8px; margin-top: 5px; }
    </style>
  </head>
  <body>
    <h1>Event Registration</h1>
    <!-- Add inputs: email, date, number, time, submit, reset -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Registration</title>
    <style>
      form { max-width: 600px; margin: 20px; }
      label { display: block; margin-top: 10px; }
      input { width: 100%; padding: 8px; margin-top: 5px; }
      button { padding: 10px 20px; margin: 10px 5px 0 0; }
    </style>
  </head>
  <body>
    <h1>Event Registration</h1>
    <form>
      <label for="email">Email:</label>
      <input type="email" id="email" required>
      
      <label for="date">Birth Date:</label>
      <input type="date" id="date" required>
      
      <label for="tickets">Tickets:</label>
      <input type="number" id="tickets" min="1" max="10" value="1">
      
      <label for="time">Preferred Time:</label>
      <input type="time" id="time">
      
      <label for="color">T-Shirt Color:</label>
      <input type="color" id="color" value="#4CAF50">
      
      <button type="submit">Register</button>
      <button type="reset">Clear</button>
    </form>
  </body>
</html>`,
    hints: ['Use type="email" for validation', 'Use type="date" for date picker', 'Use type="number" with min/max', 'Add submit and reset buttons'],
    testCases: [
      { name: 'Has email input', test: (code) => code.includes('type="email"'), errorMessage: 'Must include email input' },
      { name: 'Has date input', test: (code) => code.includes('type="date"'), errorMessage: 'Must include date input' },
      { name: 'Has number input', test: (code) => code.includes('type="number"'), errorMessage: 'Must include number input' },
      { name: 'Has time/color/range', test: (code) => code.includes('type="time"') || code.includes('type="color"') || code.includes('type="range"'), errorMessage: 'Include more HTML5 input types' },
      { name: 'Has buttons', test: (code) => code.includes('type="submit"') && (code.includes('type="reset"') || (code.match(/<button/g) || []).length >= 2), errorMessage: 'Include submit and reset buttons' }
    ]
  },
  {
    id: 'html-11',
    title: 'Semantic HTML - Header and Nav',
    description: 'Learn to create semantic website headers with navigation',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Semantic HTML5: Header and Navigation

## Introduction
Semantic HTML5 introduces elements that describe their meaning clearly. The \`<header>\` and \`<nav>\` elements help organize website structure.

## The Header Element
The \`<header>\` represents introductory content or navigational aids. It typically contains:
- Logo/brand
- Site title
- Main navigation
- Search bar

## The Nav Element
The \`<nav>\` element defines a section of navigation links. It should only wrap major navigation blocks.

## Example Structure
\`\`\`html
<header>
  <h1>My Website</h1>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
\`\`\`

## Your Task
Create a website header with:
1. A \`<header>\` element containing a site title
2. A \`<nav>\` element with at least 4 navigation links
3. Use a list (\`<ul>\` and \`<li>\`) for the navigation items
4. Include proper link hrefs`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Website Header</title>
  </head>
  <body>
    <!-- Create your header with navigation here -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Website Header</title>
  </head>
  <body>
    <header>
      <h1>TechBlog</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#articles">Articles</a></li>
          <li><a href="#tutorials">Tutorials</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  </body>
</html>`,
    hints: [
      'Start with a <header> element',
      'Place a <nav> inside the header',
      'Use <ul> and <li> for navigation structure',
      'Each <li> should contain an <a> tag',
      'Add at least 4 navigation links'
    ],
    testCases: [
      { name: 'Has header element', test: (code) => code.includes('<header>') && code.includes('</header>'), errorMessage: 'Must include <header> element' },
      { name: 'Has nav element', test: (code) => code.includes('<nav>') && code.includes('</nav>'), errorMessage: 'Must include <nav> element' },
      { name: 'Has unordered list', test: (code) => code.includes('<ul>') && code.includes('</ul>'), errorMessage: 'Must use <ul> for navigation' },
      { name: 'Has list items', test: (code) => (code.match(/<li>/g) || []).length >= 4, errorMessage: 'Must have at least 4 list items' },
      { name: 'Has navigation links', test: (code) => (code.match(/<a\s+href/g) || []).length >= 4, errorMessage: 'Must have at least 4 links with href attributes' }
    ]
  },
  {
    id: 'html-12',
    title: 'Semantic HTML - Main and Article',
    description: 'Learn to structure main content with article elements',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Main and Article Elements

## Introduction
The \`<main>\` and \`<article>\` elements help structure your page content semantically.

## The Main Element
The \`<main>\` element contains the primary content of the page. There should only be ONE \`<main>\` per page.

## The Article Element
The \`<article>\` represents self-contained content that could be distributed independently (blog posts, news articles, forum posts).

## Example Structure
\`\`\`html
<main>
  <article>
    <h2>Article Title</h2>
    <p>Article content goes here...</p>
  </article>
  <article>
    <h2>Another Article</h2>
    <p>More content...</p>
  </article>
</main>
\`\`\`

## Your Task
Create a blog structure with:
1. A \`<main>\` element containing the page content
2. At least 2 \`<article>\` elements inside main
3. Each article should have a heading (\`<h2>\`) and paragraph`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Blog Articles</title>
  </head>
  <body>
    <!-- Create main element with articles here -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Blog Articles</title>
  </head>
  <body>
    <main>
      <article>
        <h2>Getting Started with HTML5</h2>
        <p>HTML5 introduces semantic elements that make our code more meaningful and accessible.</p>
      </article>
      <article>
        <h2>Why Semantic HTML Matters</h2>
        <p>Semantic HTML improves SEO, accessibility, and code maintainability.</p>
      </article>
      <article>
        <h2>Building Better Websites</h2>
        <p>Using the right HTML elements helps create professional, accessible websites.</p>
      </article>
    </main>
  </body>
</html>`,
    hints: [
      'Start with a <main> element',
      'Add multiple <article> elements inside main',
      'Each article needs a heading',
      'Add paragraph content to each article',
      'Articles should be self-contained content'
    ],
    testCases: [
      { name: 'Has main element', test: (code) => code.includes('<main>') && code.includes('</main>'), errorMessage: 'Must include <main> element' },
      { name: 'Has article elements', test: (code) => (code.match(/<article>/g) || []).length >= 2, errorMessage: 'Must have at least 2 <article> elements' },
      { name: 'Articles have headings', test: (code) => (code.match(/<h2>/g) || []).length >= 2, errorMessage: 'Each article should have an <h2> heading' },
      { name: 'Articles have paragraphs', test: (code) => (code.match(/<p>/g) || []).length >= 2, errorMessage: 'Each article should have content in <p> tags' },
      { name: 'Proper nesting', test: (code) => code.indexOf('<main>') < code.indexOf('<article>'), errorMessage: 'Articles should be inside <main> element' }
    ]
  },
  {
    id: 'html-13',
    title: 'Semantic HTML - Footer and Aside',
    description: 'Master footer and aside elements for sidebars and page footers',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Semantic HTML - Footer and Aside

## Introduction to Footer and Aside
The \`<footer>\` and \`<aside>\` elements are semantic HTML5 tags that give meaning to different parts of your webpage.

## The Footer Element
The \`<footer>\` element represents footer content for its nearest sectioning element or the document. Footers typically contain:
- Copyright information
- Contact details
- Social media links
- Site navigation
- Legal information

### Example Footer:
\`\`\`html
<footer>
  <p>&copy; 2024 My Company. All rights reserved.</p>
  <nav>
    <a href="/about">About</a>
    <a href="/privacy">Privacy</a>
    <a href="/terms">Terms</a>
  </nav>
</footer>
\`\`\`

## The Aside Element
The \`<aside>\` element represents content that is tangentially related to the main content. Common uses:
- Sidebars with related links
- Pull quotes
- Advertising
- Author bio boxes
- Related articles

### Example Aside:
\`\`\`html
<aside>
  <h3>Related Articles</h3>
  <ul>
    <li><a href="/article1">Getting Started with HTML</a></li>
    <li><a href="/article2">CSS Fundamentals</a></li>
  </ul>
</aside>
\`\`\`

## Combining Footer and Aside
\`\`\`html
<article>
  <h1>Main Content</h1>
  <p>Article content here...</p>
  
  <aside>
    <h3>Did You Know?</h3>
    <p>HTML5 introduced semantic elements in 2014!</p>
  </aside>
</article>

<footer>
  <p>Published on January 1, 2024</p>
</footer>
\`\`\`

## Your Task:
Create a blog post page with:
1. A main article with heading and paragraphs
2. An aside with "Related Articles" (at least 2 links)
3. A footer with copyright and navigation links`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Blog Post with Footer and Aside</title>
  </head>
  <body>
    <main>
      <article>
        <h1>Understanding HTML5 Semantic Elements</h1>
        <p>Your article content here...</p>
        
        <!-- Add an aside with related articles -->
        
      </article>
    </main>
    
    <!-- Add a footer with copyright and links -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Blog Post with Footer and Aside</title>
  </head>
  <body>
    <main>
      <article>
        <h1>Understanding HTML5 Semantic Elements</h1>
        <p>HTML5 introduced powerful semantic elements that help structure web pages with meaning.</p>
        <p>Using semantic HTML improves accessibility, SEO, and code maintainability.</p>
        
        <aside>
          <h3>Related Articles</h3>
          <ul>
            <li><a href="/semantic-nav">Mastering Nav Elements</a></li>
            <li><a href="/html5-guide">Complete HTML5 Guide</a></li>
            <li><a href="/accessibility">Web Accessibility Basics</a></li>
          </ul>
        </aside>
      </article>
    </main>
    
    <footer>
      <p>&copy; 2024 Web Development Blog. All rights reserved.</p>
      <nav>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy Policy</a>
      </nav>
    </footer>
  </body>
</html>`,
    hints: [
      'The <footer> element goes at the bottom of the page or section',
      'Use <aside> for content that is related but not essential to main content',
      'Footers often contain copyright info with &copy; entity',
      'Include navigation links in the footer using <nav> element',
      'Aside should have its own heading (h2 or h3)'
    ],
    testCases: [
      { name: 'Has aside element', test: (code: string) => code.includes('<aside>') && code.includes('</aside>'), errorMessage: 'Must include <aside> element' },
      { name: 'Has footer element', test: (code: string) => code.includes('<footer>') && code.includes('</footer>'), errorMessage: 'Must include <footer> element' },
      { name: 'Aside has heading', test: (code: string) => /<aside[\s\S]*?<h[2-3]>[\s\S]*?<\/aside>/.test(code), errorMessage: 'Aside should contain a heading (h2 or h3)' },
      { name: 'Aside has links', test: (code: string) => /<aside[\s\S]*?<a[\s\S]*?<\/aside>/.test(code), errorMessage: 'Aside should contain links to related content' },
      { name: 'Footer has content', test: (code: string) => /<footer>[\s\S]{10,}<\/footer>/.test(code), errorMessage: 'Footer must have substantial content' },
      { name: 'Has copyright symbol', test: (code: string) => code.includes('&copy;') || code.includes('©'), errorMessage: 'Footer should include copyright symbol (&copy;)' }
    ]
  },
  {
    id: 'html-14',
    title: 'HTML5 Audio Element',
    description: 'Embed and control audio playback with the HTML5 audio element',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# HTML5 Audio Element

## Introduction to HTML5 Audio
The \`<audio>\` element allows you to embed audio content in web pages without requiring plugins. It's perfect for music players, podcasts, and sound effects.

## Basic Audio Syntax
\`\`\`html
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  <source src="song.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
\`\`\`

## Key Attributes:

### \`controls\`
Displays playback controls (play, pause, volume, progress bar)
\`\`\`html
<audio src="music.mp3" controls></audio>
\`\`\`

### \`autoplay\` (use sparingly!)
Starts playing automatically when page loads
\`\`\`html
<audio src="music.mp3" autoplay></audio>
\`\`\`

### \`loop\`
Repeats the audio when it ends
\`\`\`html
<audio src="background.mp3" loop></audio>
\`\`\`

### \`muted\`
Starts with audio muted
\`\`\`html
<audio src="music.mp3" muted controls></audio>
\`\`\`

### \`preload\`
Controls how the audio loads:
- \`none\`: Don't preload
- \`metadata\`: Load only metadata (duration, etc.)
- \`auto\`: Load the entire file

## Multiple Audio Sources
Provide multiple formats for browser compatibility:
\`\`\`html
<audio controls>
  <source src="podcast.mp3" type="audio/mpeg">
  <source src="podcast.ogg" type="audio/ogg">
  <source src="podcast.wav" type="audio/wav">
  Your browser doesn't support audio playback.
</audio>
\`\`\`

## Common Audio Formats:
- **MP3**: Most widely supported (audio/mpeg)
- **OGG**: Open-source alternative (audio/ogg)
- **WAV**: Uncompressed, high quality (audio/wav)
- **AAC**: Apple devices (audio/aac)

## Complete Example:
\`\`\`html
<h2>My Favorite Song</h2>
<audio controls preload="metadata">
  <source src="favorite-song.mp3" type="audio/mpeg">
  <source src="favorite-song.ogg" type="audio/ogg">
  <p>Your browser doesn't support HTML5 audio. 
     <a href="favorite-song.mp3">Download the audio file</a>.</p>
</audio>
\`\`\`

## Your Task:
Create a podcast player page with:
1. A heading for the podcast episode
2. An audio player with controls
3. Multiple source formats (mp3 and ogg)
4. Fallback text for unsupported browsers
5. A paragraph describing the episode`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Podcast Player</title>
  </head>
  <body>
    <h1>The Web Dev Podcast</h1>
    
    <!-- Add episode heading -->
    
    <!-- Add audio player with controls and multiple sources -->
    
    <!-- Add episode description -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Podcast Player</title>
  </head>
  <body>
    <h1>The Web Dev Podcast</h1>
    
    <h2>Episode 42: Introduction to HTML5 Audio</h2>
    
    <audio controls preload="metadata">
      <source src="episode-42.mp3" type="audio/mpeg">
      <source src="episode-42.ogg" type="audio/ogg">
      <p>Your browser doesn't support HTML5 audio. 
         <a href="episode-42.mp3">Download the episode</a>.</p>
    </audio>
    
    <p><strong>Episode Description:</strong> In this episode, we explore the HTML5 audio element, 
       discussing its attributes, supported formats, and best practices for embedding audio in web pages.</p>
    
    <p><strong>Duration:</strong> 45 minutes</p>
    <p><strong>Published:</strong> January 1, 2024</p>
  </body>
</html>`,
    hints: [
      'Use the controls attribute to show playback controls',
      'Provide multiple <source> elements for browser compatibility',
      'Always include fallback text inside the <audio> tag',
      'MP3 (type="audio/mpeg") is the most widely supported format',
      'Use preload="metadata" to load duration info without downloading the full file',
      'Add descriptive text around the audio player for context'
    ],
    testCases: [
      { name: 'Has audio element', test: (code: string) => code.includes('<audio'), errorMessage: 'Must include <audio> element' },
      { name: 'Has controls attribute', test: (code: string) => /<audio[^>]*controls/.test(code), errorMessage: 'Audio element should have controls attribute' },
      { name: 'Has source elements', test: (code: string) => (code.match(/<source/g) || []).length >= 2, errorMessage: 'Should have at least 2 <source> elements for compatibility' },
      { name: 'Has audio type', test: (code: string) => code.includes('type="audio/'), errorMessage: 'Source elements must specify audio type (e.g., type="audio/mpeg")' },
      { name: 'Has fallback content', test: (code: string) => /<audio[\s\S]*?>[\s\S]*?<[^s][^o]/.test(code), errorMessage: 'Include fallback content for browsers that don\'t support audio' },
      { name: 'Has description', test: (code: string) => (code.match(/<p>/g) || []).length >= 1, errorMessage: 'Add at least one paragraph describing the audio content' }
    ]
  },
  {
    id: 'html-15',
    title: 'HTML5 Video Element',
    description: 'Embed and control video playback with the HTML5 video element',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# HTML5 Video Element

## Introduction to HTML5 Video
The \`<video>\` element allows you to embed video content directly in your web pages without plugins like Flash. It's the modern standard for video playback.

## Basic Video Syntax
\`\`\`html
<video width="640" height="360" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  Your browser doesn't support HTML5 video.
</video>
\`\`\`

## Essential Attributes:

### \`controls\`
Shows playback controls (play, pause, volume, fullscreen)
\`\`\`html
<video src="demo.mp4" controls></video>
\`\`\`

### \`width\` and \`height\`
Set the display dimensions in pixels
\`\`\`html
<video width="800" height="450" src="video.mp4"></video>
\`\`\`

### \`poster\`
Image displayed before video plays
\`\`\`html
<video poster="thumbnail.jpg" src="video.mp4" controls></video>
\`\`\`

### \`autoplay\` and \`muted\`
Autoplay requires muted for most browsers
\`\`\`html
<video autoplay muted loop controls>
  <source src="background.mp4" type="video/mp4">
</video>
\`\`\`

## Video Formats:
- **MP4 (H.264)**: Most widely supported (video/mp4)
- **WebM**: Open-source, good compression (video/webm)
- **Ogg**: Open-source alternative (video/ogg)

## Complete Example:
\`\`\`html
<article>
  <h2>Product Demo</h2>
  <video width="720" height="405" controls poster="demo-thumbnail.jpg">
    <source src="product-demo.mp4" type="video/mp4">
    <source src="product-demo.webm" type="video/webm">
    <track src="captions-en.vtt" kind="subtitles" srclang="en" label="English">
    <p>Your browser doesn't support HTML5 video. 
       <a href="product-demo.mp4">Download the video</a>.</p>
  </video>
  <p>Watch our comprehensive product demonstration above.</p>
</article>
\`\`\`

## Accessibility with \`<track>\`
Add captions/subtitles for accessibility:
\`\`\`html
<video controls>
  <source src="lecture.mp4" type="video/mp4">
  <track src="subtitles-en.vtt" kind="subtitles" srclang="en" label="English">
  <track src="subtitles-es.vtt" kind="subtitles" srclang="es" label="Español">
</video>
\`\`\`

## Your Task:
Create a tutorial video page with:
1. A heading for the tutorial title
2. A video element with controls and poster image
3. Multiple source formats (mp4 and webm)
4. Specific width (720px) and height (405px)
5. Fallback text for unsupported browsers
6. A paragraph describing what the video teaches`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Video Tutorial</title>
  </head>
  <body>
    <h1>Web Development Tutorials</h1>
    
    <!-- Add tutorial heading -->
    
    <!-- Add video element with poster, controls, and multiple sources -->
    
    <!-- Add tutorial description -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Video Tutorial</title>
  </head>
  <body>
    <h1>Web Development Tutorials</h1>
    
    <h2>HTML5 Video Tutorial - Complete Guide</h2>
    
    <video width="720" height="405" controls poster="video-thumbnail.jpg">
      <source src="html5-video-tutorial.mp4" type="video/mp4">
      <source src="html5-video-tutorial.webm" type="video/webm">
      <track src="subtitles-en.vtt" kind="subtitles" srclang="en" label="English">
      <p>Your browser doesn't support HTML5 video. 
         <a href="html5-video-tutorial.mp4">Download the tutorial</a>.</p>
    </video>
    
    <p><strong>Tutorial Description:</strong> Learn how to use the HTML5 video element to embed videos 
       in your web pages. This tutorial covers all attributes, multiple source formats, and accessibility 
       features including captions and subtitles.</p>
    
    <p><strong>Duration:</strong> 15 minutes | <strong>Level:</strong> Beginner</p>
  </body>
</html>`,
    hints: [
      'Use width="720" and height="405" for 16:9 aspect ratio',
      'Add controls attribute to show playback controls',
      'Include poster attribute to show a thumbnail before play',
      'Provide both MP4 and WebM formats for better compatibility',
      'Always include fallback content inside the <video> tag',
      'Use <track> element for captions (optional but recommended)'
    ],
    testCases: [
      { name: 'Has video element', test: (code: string) => code.includes('<video'), errorMessage: 'Must include <video> element' },
      { name: 'Has controls', test: (code: string) => /<video[^>]*controls/.test(code), errorMessage: 'Video should have controls attribute' },
      { name: 'Has dimensions', test: (code: string) => /<video[^>]*width="[^"]+"[^>]*height="[^"]+"/.test(code) || /<video[^>]*height="[^"]+"[^>]*width="[^"]+"/.test(code), errorMessage: 'Video must have width and height attributes' },
      { name: 'Has multiple sources', test: (code: string) => (code.match(/<source/g) || []).length >= 2, errorMessage: 'Should have at least 2 <source> elements for compatibility' },
      { name: 'Has video type', test: (code: string) => code.includes('type="video/'), errorMessage: 'Source elements must specify video type (e.g., type="video/mp4")' },
      { name: 'Has fallback', test: (code: string) => /<video[\s\S]*?>[\s\S]*?<p>/.test(code), errorMessage: 'Include fallback content for browsers that don\'t support video' }
    ]
  },
  {
    id: 'html-16',
    title: 'HTML5 Canvas Basics',
    description: 'Draw graphics and animations with the HTML5 canvas element',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# HTML5 Canvas Basics

## Introduction to Canvas
The \`<canvas>\` element is a drawing surface that allows you to create graphics using JavaScript. It's perfect for games, data visualization, image editing, and animations.

## Basic Canvas Setup
\`\`\`html
<canvas id="myCanvas" width="400" height="300">
  Your browser doesn't support canvas.
</canvas>
\`\`\`

## Key Attributes:
- \`width\`: Canvas width in pixels (default: 300)
- \`height\`: Canvas height in pixels (default: 150)
- \`id\`: Identifier for JavaScript access

## Drawing with JavaScript
Canvas requires JavaScript to draw. Here's the basic workflow:

### 1. Get the Canvas Element
\`\`\`javascript
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
\`\`\`

### 2. Draw Shapes
\`\`\`javascript
// Rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 100, 75);

// Circle
ctx.beginPath();
ctx.arc(200, 100, 50, 0, Math.PI * 2);
ctx.fillStyle = 'red';
ctx.fill();

// Line
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(400, 300);
ctx.strokeStyle = 'green';
ctx.lineWidth = 3;
ctx.stroke();
\`\`\`

## Complete Example:
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Canvas Demo</title>
</head>
<body>
  <h1>Canvas Graphics</h1>
  <canvas id="myCanvas" width="600" height="400" style="border: 1px solid black;">
    Your browser doesn't support the canvas element.
  </canvas>
  
  <script>
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    
    // Draw a blue rectangle
    ctx.fillStyle = '#3498db';
    ctx.fillRect(50, 50, 150, 100);
    
    // Draw a red circle
    ctx.beginPath();
    ctx.arc(400, 200, 75, 0, Math.PI * 2);
    ctx.fillStyle = '#e74c3c';
    ctx.fill();
    
    // Draw green text
    ctx.font = '30px Arial';
    ctx.fillStyle = '#27ae60';
    ctx.fillText('Hello Canvas!', 200, 350);
  </script>
</body>
</html>
\`\`\`

## Common Canvas Uses:
- **Games**: 2D and simple 3D games
- **Charts**: Data visualization and graphs
- **Image Editing**: Filters and effects
- **Animations**: Custom animations and effects
- **Signatures**: Digital signature capture

## Your Task:
Create a canvas drawing page with:
1. A heading describing the canvas
2. A canvas element (500x400 pixels) with an id
3. A border style on the canvas
4. JavaScript that draws at least 2 shapes (rectangle and circle)
5. Fallback text for unsupported browsers`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Canvas Drawing</title>
  </head>
  <body>
    <h1>My Canvas Drawing</h1>
    
    <!-- Add a canvas element with id, width=500, height=400 -->
    <!-- Add style="border: 2px solid black;" -->
    
    <script>
      // Get canvas and context
      const canvas = document.getElementById('drawingCanvas');
      const ctx = canvas.getContext('2d');
      
      // Draw a rectangle
      
      // Draw a circle
      
    </script>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Canvas Drawing</title>
  </head>
  <body>
    <h1>My Canvas Drawing</h1>
    
    <canvas id="drawingCanvas" width="500" height="400" style="border: 2px solid black;">
      Your browser doesn't support the HTML5 canvas element.
    </canvas>
    
    <script>
      const canvas = document.getElementById('drawingCanvas');
      const ctx = canvas.getContext('2d');
      
      // Draw a blue rectangle
      ctx.fillStyle = '#3498db';
      ctx.fillRect(100, 100, 150, 100);
      
      // Draw a red circle
      ctx.beginPath();
      ctx.arc(350, 200, 60, 0, Math.PI * 2);
      ctx.fillStyle = '#e74c3c';
      ctx.fill();
      
      // Draw a green line
      ctx.beginPath();
      ctx.moveTo(50, 350);
      ctx.lineTo(450, 350);
      ctx.strokeStyle = '#27ae60';
      ctx.lineWidth = 4;
      ctx.stroke();
      
      // Draw text
      ctx.font = '24px Arial';
      ctx.fillStyle = '#2c3e50';
      ctx.fillText('Canvas Graphics!', 150, 50);
    </script>
  </body>
</html>`,
    hints: [
      'Canvas element needs width, height, and id attributes',
      'Use style attribute to add a border: style="border: 2px solid black;"',
      'Get the 2D context with: canvas.getContext(\'2d\')',
      'Use fillRect(x, y, width, height) to draw rectangles',
      'Use arc(x, y, radius, startAngle, endAngle) for circles',
      'Set fillStyle before drawing to change colors'
    ],
    testCases: [
      { name: 'Has canvas element', test: (code: string) => code.includes('<canvas'), errorMessage: 'Must include <canvas> element' },
      { name: 'Canvas has id', test: (code: string) => /<canvas[^>]*id="[^"]+"/.test(code), errorMessage: 'Canvas must have an id attribute' },
      { name: 'Canvas has dimensions', test: (code: string) => /<canvas[^>]*width="[^"]+"[^>]*height="[^"]+"/.test(code) || /<canvas[^>]*height="[^"]+"[^>]*width="[^"]+"/.test(code), errorMessage: 'Canvas must have width and height attributes' },
      { name: 'Has script tag', test: (code: string) => code.includes('<script>'), errorMessage: 'Must include <script> tag to draw on canvas' },
      { name: 'Gets canvas context', test: (code: string) => code.includes('getContext'), errorMessage: 'JavaScript should get the canvas context with getContext(\'2d\')' },
      { name: 'Has fallback text', test: (code: string) => /<canvas[\s\S]*?>[\s\S]*?[A-Za-z]+[\s\S]*?<\/canvas>/.test(code), errorMessage: 'Include fallback text inside <canvas> tag' }
    ]
  },
  {
    id: 'html-17',
    title: 'SVG Graphics',
    description: 'Create scalable vector graphics directly in HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# SVG Graphics

## Introduction to SVG
SVG (Scalable Vector Graphics) is an XML-based format for creating vector images that scale perfectly at any size. Unlike raster images (JPG, PNG), SVG graphics never lose quality.

## Why Use SVG?
- **Scalable**: Look crisp at any size
- **Small file size**: Efficient for simple graphics
- **Editable**: Can be styled with CSS
- **Accessible**: Text content is searchable
- **Animatable**: Can be animated with CSS or JavaScript

## Basic SVG Structure
\`\`\`html
<svg width="200" height="200">
  <!-- SVG shapes go here -->
</svg>
\`\`\`

## Common SVG Shapes:

### Rectangle
\`\`\`html
<svg width="200" height="100">
  <rect x="10" y="10" width="180" height="80" fill="blue" />
</svg>
\`\`\`

### Circle
\`\`\`html
<svg width="200" height="200">
  <circle cx="100" cy="100" r="80" fill="red" stroke="black" stroke-width="3" />
</svg>
\`\`\`

### Line
\`\`\`html
<svg width="200" height="200">
  <line x1="0" y1="0" x2="200" y2="200" stroke="green" stroke-width="2" />
</svg>
\`\`\`

### Polygon (Triangle)
\`\`\`html
<svg width="200" height="200">
  <polygon points="100,10 40,180 190,180" fill="purple" />
</svg>
\`\`\`

### Path (Complex Shapes)
\`\`\`html
<svg width="200" height="200">
  <path d="M 10 10 L 100 100 L 10 100 Z" fill="orange" />
</svg>
\`\`\`

### Text
\`\`\`html
<svg width="200" height="100">
  <text x="10" y="50" font-family="Arial" font-size="24" fill="navy">
    SVG Text
  </text>
</svg>
\`\`\`

## Complete Icon Example:
\`\`\`html
<svg width="100" height="100" viewBox="0 0 100 100">
  <!-- Smiley face -->
  <circle cx="50" cy="50" r="45" fill="yellow" stroke="black" stroke-width="2" />
  <circle cx="35" cy="40" r="5" fill="black" />  <!-- Left eye -->
  <circle cx="65" cy="40" r="5" fill="black" />  <!-- Right eye -->
  <path d="M 30 60 Q 50 75 70 60" stroke="black" stroke-width="3" fill="none" /> <!-- Smile -->
</svg>
\`\`\`

## SVG Attributes:
- \`viewBox\`: Defines the coordinate system (important for scaling)
- \`fill\`: Shape fill color
- \`stroke\`: Border color
- \`stroke-width\`: Border thickness
- \`opacity\`: Transparency (0-1)

## Your Task:
Create an SVG logo page with:
1. A heading for your logo
2. An SVG element (300x300 pixels)
3. At least 3 different shapes (circle, rectangle, polygon, etc.)
4. Different fill colors for each shape
5. At least one shape with a stroke (border)`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>SVG Logo</title>
  </head>
  <body>
    <h1>My SVG Logo</h1>
    
    <!-- Create an SVG with multiple shapes -->
    <svg width="300" height="300">
      <!-- Add a rectangle -->
      
      <!-- Add a circle -->
      
      <!-- Add another shape (polygon, line, or path) -->
      
    </svg>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>SVG Logo</title>
  </head>
  <body>
    <h1>My SVG Logo</h1>
    
    <svg width="300" height="300" viewBox="0 0 300 300">
      <!-- Background rectangle -->
      <rect x="0" y="0" width="300" height="300" fill="#ecf0f1" />
      
      <!-- Main circle -->
      <circle cx="150" cy="150" r="100" fill="#3498db" stroke="#2c3e50" stroke-width="5" />
      
      <!-- Inner circle -->
      <circle cx="150" cy="150" r="60" fill="#e74c3c" />
      
      <!-- Triangle -->
      <polygon points="150,80 120,140 180,140" fill="#f39c12" stroke="#d35400" stroke-width="2" />
      
      <!-- Text -->
      <text x="150" y="250" font-family="Arial" font-size="24" fill="#2c3e50" text-anchor="middle">
        LOGO
      </text>
    </svg>
    
    <p>This logo uses SVG graphics that scale perfectly at any size!</p>
  </body>
</html>`,
    hints: [
      'SVG element needs width and height attributes',
      'Use <rect> for rectangles: <rect x="0" y="0" width="100" height="50" fill="blue" />',
      'Use <circle> for circles: <circle cx="50" cy="50" r="40" fill="red" />',
      'Use <polygon> for triangles and complex shapes',
      'Add stroke="color" stroke-width="3" for borders',
      'Colors can be names (red, blue) or hex codes (#3498db)'
    ],
    testCases: [
      { name: 'Has SVG element', test: (code: string) => code.includes('<svg'), errorMessage: 'Must include <svg> element' },
      { name: 'SVG has dimensions', test: (code: string) => /<svg[^>]*width="[^"]+"[^>]*height="[^"]+"/.test(code) || /<svg[^>]*height="[^"]+"[^>]*width="[^"]+"/.test(code), errorMessage: 'SVG must have width and height attributes' },
      { name: 'Has multiple shapes', test: (code: string) => (code.match(/<(rect|circle|polygon|line|path|ellipse)/g) || []).length >= 3, errorMessage: 'Must include at least 3 SVG shapes (rect, circle, polygon, etc.)' },
      { name: 'Shapes have fill', test: (code: string) => (code.match(/fill="[^"]+"/g) || []).length >= 2, errorMessage: 'At least 2 shapes should have fill colors' },
      { name: 'Has stroke', test: (code: string) => code.includes('stroke='), errorMessage: 'At least one shape should have a stroke (border)' },
      { name: 'Closes SVG tag', test: (code: string) => code.includes('</svg>'), errorMessage: "Don't forget to close the </svg> tag" }
    ]
  },
  {
    id: 'html-18',
    title: 'Meta Tags and SEO',
    description: 'Optimize your web pages with essential meta tags for SEO and social sharing',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Meta Tags and SEO

## Introduction to Meta Tags
Meta tags provide information about your HTML document to browsers, search engines, and social media platforms. They go in the \`<head>\` section and are crucial for SEO (Search Engine Optimization).

## Essential Meta Tags

### Character Encoding
**Always include this first!**
\`\`\`html
<meta charset="UTF-8">
\`\`\`

### Viewport (Mobile Responsiveness)
**Required for responsive design:**
\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

### Description
**Appears in search results (150-160 characters):**
\`\`\`html
<meta name="description" content="Learn HTML5 with comprehensive tutorials, examples, and hands-on projects. Perfect for beginners!">
\`\`\`

### Keywords (Less important now)
\`\`\`html
<meta name="keywords" content="HTML, CSS, JavaScript, web development, tutorial">
\`\`\`

### Author
\`\`\`html
<meta name="author" content="John Doe">
\`\`\`

## Open Graph Tags (Social Media)
Control how your page looks when shared on Facebook, LinkedIn, etc.

\`\`\`html
<meta property="og:title" content="Amazing Web Development Course">
<meta property="og:description" content="Learn to build modern websites from scratch">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:url" content="https://example.com/course">
<meta property="og:type" content="website">
\`\`\`

## Twitter Card Tags
\`\`\`html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Web Dev Course">
<meta name="twitter:description" content="Learn modern web development">
<meta name="twitter:image" content="https://example.com/twitter-image.jpg">
\`\`\`

## Other Important Meta Tags

### Robots (Search Engine Indexing)
\`\`\`html
<meta name="robots" content="index, follow">
<!-- Or block search engines: -->
<meta name="robots" content="noindex, nofollow">
\`\`\`

### Refresh/Redirect
\`\`\`html
<!-- Refresh after 5 seconds -->
<meta http-equiv="refresh" content="5">
<!-- Redirect to another page -->
<meta http-equiv="refresh" content="0; url=https://example.com">
\`\`\`

### Theme Color (Mobile Browsers)
\`\`\`html
<meta name="theme-color" content="#3498db">
\`\`\`

## Complete Example:
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Professional web development services - custom websites, e-commerce, and web applications">
  <meta name="keywords" content="web development, websites, e-commerce, SEO">
  <meta name="author" content="WebDev Pro">
  
  <!-- Open Graph -->
  <meta property="og:title" content="WebDev Pro - Professional Web Development">
  <meta property="og:description" content="We build amazing websites">
  <meta property="og:image" content="https://webdevpro.com/og-image.jpg">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  
  <title>WebDev Pro - Professional Web Development</title>
</head>
<body>
  <h1>Welcome to WebDev Pro</h1>
</body>
</html>
\`\`\`

## Your Task:
Create a landing page with proper meta tags:
1. Character encoding (UTF-8)
2. Viewport meta tag for mobile
3. Description meta tag (write a compelling 150-character description)
4. Author meta tag
5. At least 2 Open Graph meta tags (og:title and og:description)
6. A meaningful page title and h1 heading`,
    initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Add charset meta tag -->
  
  <!-- Add viewport meta tag -->
  
  <!-- Add description meta tag -->
  
  <!-- Add author meta tag -->
  
  <!-- Add Open Graph tags -->
  
  <title>My Awesome Website</title>
</head>
<body>
  <h1>My Awesome Website</h1>
  <p>Welcome to my site!</p>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Discover the best web development tutorials, tips, and resources. Learn HTML, CSS, JavaScript, and modern frameworks with our comprehensive guides.">
  <meta name="keywords" content="web development, HTML, CSS, JavaScript, tutorials, programming">
  <meta name="author" content="Jane Smith">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph Tags -->
  <meta property="og:title" content="Web Development Tutorials - Learn to Code">
  <meta property="og:description" content="Comprehensive tutorials for modern web development. Perfect for beginners and advanced developers.">
  <meta property="og:image" content="https://example.com/og-image.jpg">
  <meta property="og:url" content="https://example.com">
  <meta property="og:type" content="website">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Web Development Tutorials">
  
  <meta name="theme-color" content="#3498db">
  
  <title>Web Development Tutorials - Learn to Code</title>
</head>
<body>
  <h1>Web Development Tutorials</h1>
  <p>Learn modern web development with our comprehensive, beginner-friendly tutorials!</p>
</body>
</html>`,
    hints: [
      'Charset should always be the first meta tag: <meta charset="UTF-8">',
      'Viewport tag is: <meta name="viewport" content="width=device-width, initial-scale=1.0">',
      'Description should be compelling and 150-160 characters long',
      'Open Graph tags use property="og:..." instead of name',
      'Description meta helps with SEO - write it carefully!',
      'All meta tags go in the <head> section, before <title>'
    ],
    testCases: [
      { name: 'Has charset meta', test: (code: string) => /<meta[^>]*charset="UTF-8"/i.test(code), errorMessage: 'Must include <meta charset="UTF-8"> for character encoding' },
      { name: 'Has viewport meta', test: (code: string) => /<meta[^>]*name="viewport"/.test(code), errorMessage: 'Must include viewport meta tag for mobile responsiveness' },
      { name: 'Has description meta', test: (code: string) => /<meta[^>]*name="description"[^>]*content="[^"]{20,}"/.test(code), errorMessage: 'Must include description meta tag with meaningful content (20+ chars)' },
      { name: 'Has author meta', test: (code: string) => /<meta[^>]*name="author"/.test(code), errorMessage: 'Must include author meta tag' },
      { name: 'Has Open Graph tags', test: (code: string) => (code.match(/<meta[^>]*property="og:/g) || []).length >= 2, errorMessage: 'Must include at least 2 Open Graph meta tags (og:title, og:description)' },
      { name: 'Meta tags in head', test: (code: string) => /<head[\s\S]*<meta[\s\S]*<\/head>/.test(code), errorMessage: 'All meta tags must be inside the <head> section' }
    ]
  },
  {
    id: 'html-19',
    title: 'Responsive Images',
    description: 'Create responsive images that adapt to different screen sizes using srcset and picture',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Responsive Images

## Why Responsive Images?
Different devices need different image sizes. Responsive images ensure:
- **Faster loading** on mobile (smaller images)
- **Better quality** on desktop (larger images)
- **Bandwidth savings** (only load what's needed)

## The \`srcset\` Attribute
Let the browser choose the best image based on device pixel density or viewport width.

### Device Pixel Ratio (DPR)
\`\`\`html
<img src="photo.jpg" 
     srcset="photo.jpg 1x, 
             photo-2x.jpg 2x, 
             photo-3x.jpg 3x"
     alt="Responsive photo">
\`\`\`
- \`1x\`: Normal screens
- \`2x\`: Retina/high-DPI screens
- \`3x\`: Ultra high-DPI screens

### Width Descriptors
\`\`\`html
<img src="photo-800.jpg"
     srcset="photo-400.jpg 400w,
             photo-800.jpg 800w,
             photo-1200.jpg 1200w"
     sizes="(max-width: 600px) 100vw, 
            (max-width: 1000px) 50vw,
            33vw"
     alt="Responsive photo">
\`\`\`

## The \`sizes\` Attribute
Tells the browser how much space the image will take:
\`\`\`html
sizes="(max-width: 600px) 100vw,  <!-- Full width on small screens -->
       (max-width: 1000px) 50vw,   <!-- Half width on medium screens -->
       33vw"                        <!-- One third on large screens -->
\`\`\`

## The \`<picture>\` Element
Provide different images for different scenarios (art direction):

\`\`\`html
<picture>
  <source media="(min-width: 1000px)" srcset="large-landscape.jpg">
  <source media="(min-width: 600px)" srcset="medium-portrait.jpg">
  <img src="small-square.jpg" alt="Responsive image">
</picture>
\`\`\`

## Picture with WebP Support
Serve modern formats with fallbacks:
\`\`\`html
<picture>
  <source type="image/webp" srcset="photo.webp">
  <source type="image/jpeg" srcset="photo.jpg">
  <img src="photo.jpg" alt="Photo with WebP support">
</picture>
\`\`\`

## Complete Example:
\`\`\`html
<h2>Product Gallery</h2>

<!-- Simple responsive with srcset -->
<img src="product-800.jpg"
     srcset="product-400.jpg 400w,
             product-800.jpg 800w,
             product-1600.jpg 1600w"
     sizes="(max-width: 600px) 100vw, 50vw"
     alt="Product photo"
     loading="lazy">

<!-- Art direction with picture -->
<picture>
  <source media="(min-width: 800px)" srcset="hero-wide.jpg">
  <source media="(min-width: 400px)" srcset="hero-medium.jpg">
  <img src="hero-small.jpg" alt="Hero banner" loading="lazy">
</picture>
\`\`\`

## Loading Attribute
Improve performance with lazy loading:
\`\`\`html
<img src="image.jpg" alt="Lazy loaded" loading="lazy">
\`\`\`
- \`lazy\`: Load when near viewport (default for below-fold images)
- \`eager\`: Load immediately

## Your Task:
Create a responsive image gallery:
1. A heading for the gallery
2. At least one image using \`srcset\` with width descriptors (400w, 800w, 1200w)
3. Include the \`sizes\` attribute
4. At least one \`<picture>\` element with 2+ sources
5. Proper alt text on all images
6. Use loading="lazy" on at least one image`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Image Gallery</title>
  </head>
  <body>
    <h1>Responsive Image Gallery</h1>
    
    <h2>Image with srcset</h2>
    <!-- Add an img with srcset and sizes attributes -->
    
    <h2>Art Direction with Picture</h2>
    <!-- Add a picture element with multiple sources -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Image Gallery</title>
  </head>
  <body>
    <h1>Responsive Image Gallery</h1>
    
    <h2>Landscape Photography</h2>
    <img src="landscape-800.jpg"
         srcset="landscape-400.jpg 400w,
                 landscape-800.jpg 800w,
                 landscape-1200.jpg 1200w"
         sizes="(max-width: 600px) 100vw,
                (max-width: 1000px) 80vw,
                60vw"
         alt="Beautiful mountain landscape at sunset"
         loading="lazy">
    
    <h2>Product Showcase</h2>
    <picture>
      <source media="(min-width: 1000px)" srcset="product-large.jpg">
      <source media="(min-width: 600px)" srcset="product-medium.jpg">
      <img src="product-small.jpg" alt="Featured product display" loading="lazy">
    </picture>
    
    <h2>Modern Format Support</h2>
    <picture>
      <source type="image/webp" srcset="photo.webp">
      <source type="image/jpeg" srcset="photo.jpg">
      <img src="photo.jpg" alt="Photo with WebP support" loading="lazy">
    </picture>
  </body>
</html>`,
    hints: [
      'srcset uses width descriptors like: srcset="image-400.jpg 400w, image-800.jpg 800w"',
      'sizes describes how much space the image takes at different breakpoints',
      'Picture element must contain an <img> tag as the last child (fallback)',
      'Use media="(min-width: 600px)" in <source> for art direction',
      'loading="lazy" improves performance by deferring image loading',
      'Always include meaningful alt text for accessibility'
    ],
    testCases: [
      { name: 'Has srcset attribute', test: (code: string) => code.includes('srcset='), errorMessage: 'Must use srcset attribute for responsive images' },
      { name: 'srcset has width descriptors', test: (code: string) => /srcset="[^"]*\d+w/.test(code), errorMessage: 'srcset should include width descriptors (e.g., 400w, 800w)' },
      { name: 'Has sizes attribute', test: (code: string) => code.includes('sizes='), errorMessage: 'Must include sizes attribute with srcset' },
      { name: 'Has picture element', test: (code: string) => code.includes('<picture>'), errorMessage: 'Must include <picture> element for art direction' },
      { name: 'Picture has sources', test: (code: string) => /<picture[\s\S]*?<source[\s\S]*?<img/.test(code), errorMessage: 'Picture element must contain <source> and <img> elements' },
      { name: 'Has lazy loading', test: (code: string) => code.includes('loading="lazy"'), errorMessage: 'Use loading="lazy" for performance optimization' }
    ]
  },
  {
    id: 'html-20',
    title: 'Figure and Figcaption',
    description: 'Use semantic figure and figcaption elements for images, diagrams, and code examples',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Figure and Figcaption

## Introduction to Figure Element
The \`<figure>\` element represents self-contained content that is referenced from the main content but could be moved to another location without affecting the flow.

The \`<figcaption>\` element provides a caption or legend for the figure.

## Why Use Figure?
- **Semantic meaning**: Makes content structure clear
- **Accessibility**: Screen readers know it's a captioned element
- **SEO benefits**: Search engines understand content relationships
- **Styling flexibility**: Easy to style figures consistently

## Basic Syntax
\`\`\`html
<figure>
  <img src="diagram.jpg" alt="System architecture diagram">
  <figcaption>Figure 1: System Architecture Overview</figcaption>
</figure>
\`\`\`

## Common Use Cases:

### 1. Images with Captions
\`\`\`html
<figure>
  <img src="sunset.jpg" alt="Sunset over mountains">
  <figcaption>A beautiful sunset captured in the Rocky Mountains, July 2024</figcaption>
</figure>
\`\`\`

### 2. Code Snippets
\`\`\`html
<figure>
  <pre><code>
function greet(name) {
  return \`Hello, \${name}!\`;
}
  </code></pre>
  <figcaption>Listing 1: Simple greeting function in JavaScript</figcaption>
</figure>
\`\`\`

### 3. Diagrams and Charts
\`\`\`html
<figure>
  <svg width="200" height="100">
    <rect x="10" y="10" width="80" height="80" fill="blue" />
  </svg>
  <figcaption>Figure 2: Sample SVG graphic</figcaption>
</figure>
\`\`\`

### 4. Quotes (Block Quotes)
\`\`\`html
<figure>
  <blockquote>
    <p>The only way to do great work is to love what you do.</p>
  </blockquote>
  <figcaption>— Steve Jobs, <cite>Stanford Commencement Speech</cite></figcaption>
</figure>
\`\`\`

### 5. Videos
\`\`\`html
<figure>
  <video controls width="640" height="360">
    <source src="tutorial.mp4" type="video/mp4">
  </video>
  <figcaption>Video 1: Introduction to HTML5 (15 minutes)</figcaption>
</figure>
\`\`\`

### 6. Multiple Images
\`\`\`html
<figure>
  <img src="photo1.jpg" alt="Step 1">
  <img src="photo2.jpg" alt="Step 2">
  <img src="photo3.jpg" alt="Step 3">
  <figcaption>Figure 3: Three-step installation process</figcaption>
</figure>
\`\`\`

## Figcaption Position
Figcaption can be first or last:
\`\`\`html
<!-- Caption below (common) -->
<figure>
  <img src="photo.jpg" alt="Description">
  <figcaption>Caption text</figcaption>
</figure>

<!-- Caption above -->
<figure>
  <figcaption>Figure 1: Caption text</figcaption>
  <img src="photo.jpg" alt="Description">
</figure>
\`\`\`

## Complete Example:
\`\`\`html
<article>
  <h2>Understanding HTML5 Semantic Elements</h2>
  
  <p>HTML5 introduced many new semantic elements...</p>
  
  <figure>
    <img src="html5-elements.png" alt="HTML5 semantic elements diagram">
    <figcaption>
      <strong>Figure 1:</strong> Common HTML5 semantic elements and their purposes.
      Diagram created by WebDev Team, 2024.
    </figcaption>
  </figure>
  
  <p>As shown in Figure 1, semantic elements provide meaning...</p>
</article>
\`\`\`

## Your Task:
Create an educational article page with:
1. An article with a descriptive heading
2. At least 2 figure elements with different content types:
   - One figure with an image and caption
   - One figure with a code block (use \`<pre><code>\`) and caption
3. Each figcaption should have descriptive text
4. Paragraphs explaining the content`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Learning Figures</title>
  </head>
  <body>
    <article>
      <h1>HTML Best Practices</h1>
      
      <p>In this article, we'll explore HTML best practices...</p>
      
      <!-- Add a figure with an image and caption -->
      
      <p>Explanation of the image above...</p>
      
      <!-- Add a figure with a code example and caption -->
      
      <p>The code above demonstrates...</p>
    </article>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Learning Figures</title>
  </head>
  <body>
    <article>
      <h1>HTML Best Practices</h1>
      
      <p>In this article, we'll explore HTML best practices including the use of semantic elements like the figure tag.</p>
      
      <figure>
        <img src="html-structure.png" alt="HTML document structure diagram" width="600">
        <figcaption><strong>Figure 1:</strong> The basic structure of an HTML5 document showing head and body sections.</figcaption>
      </figure>
      
      <p>As shown in Figure 1, every HTML document follows a standard structure with head and body sections.</p>
      
      <figure>
        <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;My Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello World&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        <figcaption><strong>Listing 1:</strong> Basic HTML5 template with proper DOCTYPE and structure.</figcaption>
      </figure>
      
      <p>The code above demonstrates the minimal HTML5 template you should start with for every web page.</p>
      
      <figure>
        <blockquote>
          <p>Good HTML structure is the foundation of great web development.</p>
        </blockquote>
        <figcaption>— Web Standards Best Practices Guide, <cite>W3C</cite></figcaption>
      </figure>
    </article>
  </body>
</html>`,
    hints: [
      'Figure element wraps content + caption together',
      'Figcaption can be the first or last child of figure',
      'Use <strong> or <b> for "Figure 1:" prefix in captions',
      'For code examples, use <pre><code> inside figure',
      'Figures should be self-contained and referenced in text',
      'Always include alt text on images inside figures'
    ],
    testCases: [
      { name: 'Has figure elements', test: (code: string) => (code.match(/<figure>/g) || []).length >= 2, errorMessage: 'Must include at least 2 <figure> elements' },
      { name: 'Has figcaption elements', test: (code: string) => (code.match(/<figcaption>/g) || []).length >= 2, errorMessage: 'Each figure should have a <figcaption>' },
      { name: 'Figure contains content', test: (code: string) => /<figure>[\s\S]*?<(img|pre|blockquote|svg|video)[\s\S]*?<\/figure>/.test(code), errorMessage: 'Figure should contain content (img, code, etc.)' },
      { name: 'Has image in figure', test: (code: string) => /<figure[\s\S]*?<img[\s\S]*?<\/figure>/.test(code), errorMessage: 'At least one figure should contain an <img> element' },
      { name: 'Has code in figure', test: (code: string) => /<figure[\s\S]*?<(pre|code)[\s\S]*?<\/figure>/.test(code), errorMessage: 'At least one figure should contain code (<pre> or <code>)' },
      { name: 'Captions have text', test: (code: string) => /<figcaption>[\s\S]{5,}<\/figcaption>/.test(code), errorMessage: 'Figcaptions should have descriptive text (5+ characters)' }
    ]
  },
  {
    id: 'html-21',
    title: 'Details and Summary',
    description: 'Create interactive disclosure widgets with details and summary elements',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Details and Summary

## Introduction
The \`<details>\` element creates an interactive disclosure widget that users can open and close. The \`<summary>\` element provides a heading for the details content.

**No JavaScript needed!** This is a native HTML solution for accordions and expandable content.

## Basic Syntax
\`\`\`html
<details>
  <summary>Click to expand</summary>
  <p>Hidden content appears here when opened!</p>
</details>
\`\`\`

## Open by Default
\`\`\`html
<details open>
  <summary>This is open by default</summary>
  <p>Content is visible immediately.</p>
</details>
\`\`\`

## Common Use Cases:

### 1. FAQ (Frequently Asked Questions)
\`\`\`html
<h2>Frequently Asked Questions</h2>

<details>
  <summary>What is HTML?</summary>
  <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages.</p>
</details>

<details>
  <summary>How do I learn HTML?</summary>
  <p>Start with the basics: document structure, elements, and attributes. Practice by building simple web pages.</p>
</details>
\`\`\`

### 2. Expandable Content Sections
\`\`\`html
<details>
  <summary>System Requirements</summary>
  <ul>
    <li>Operating System: Windows 10 or macOS 10.15+</li>
    <li>RAM: 8GB minimum, 16GB recommended</li>
    <li>Storage: 256GB SSD</li>
    <li>Browser: Chrome, Firefox, Safari, or Edge (latest version)</li>
  </ul>
</details>
\`\`\`

### 3. Code Examples with Explanations
\`\`\`html
<details>
  <summary>View Code Example</summary>
  <pre><code>
function calculateTotal(price, tax) {
  return price + (price * tax);
}
  </code></pre>
  <p>This function calculates the total price including tax.</p>
</details>
\`\`\`

### 4. Nested Details (Accordion)
\`\`\`html
<details>
  <summary>Web Development</summary>
  
  <details>
    <summary>Frontend</summary>
    <p>HTML, CSS, JavaScript, React, Vue</p>
  </details>
  
  <details>
    <summary>Backend</summary>
    <p>Node.js, Python, PHP, Ruby</p>
  </details>
</details>
\`\`\`

### 5. Spoiler Content
\`\`\`html
<details>
  <summary>⚠️ Spoiler Warning</summary>
  <p>The main character discovers they have superpowers!</p>
</details>
\`\`\`

## Styling with CSS
\`\`\`html
<style>
  details {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    margin: 10px 0;
  }
  
  summary {
    font-weight: bold;
    cursor: pointer;
    padding: 5px;
  }
  
  summary:hover {
    background-color: #f0f0f0;
  }
  
  details[open] summary {
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }
</style>
\`\`\`

## Complete Example:
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>FAQ Page</title>
  <style>
    details { margin: 15px 0; padding: 10px; border: 1px solid #ddd; }
    summary { font-weight: bold; cursor: pointer; }
  </style>
</head>
<body>
  <h1>Product FAQ</h1>
  
  <details>
    <summary>What's included in the box?</summary>
    <ul>
      <li>Main device</li>
      <li>USB-C cable</li>
      <li>Quick start guide</li>
      <li>Warranty card</li>
    </ul>
  </details>
  
  <details open>
    <summary>How long is the warranty?</summary>
    <p>All products come with a 2-year manufacturer's warranty covering defects in materials and workmanship.</p>
  </details>
  
  <details>
    <summary>Do you ship internationally?</summary>
    <p>Yes! We ship to over 50 countries worldwide. Shipping costs and times vary by destination.</p>
  </details>
</body>
</html>
\`\`\`

## Your Task:
Create an FAQ page with:
1. A heading ("Frequently Asked Questions")
2. At least 3 details elements with different questions
3. Each details should have a summary (the question)
4. Each should have an answer (paragraph, list, or other content)
5. Make one details element open by default
6. Include varied content (paragraphs, lists, etc.)`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>FAQ Page</title>
    <style>
      details { margin: 10px 0; padding: 10px; border: 1px solid #ccc; }
      summary { font-weight: bold; cursor: pointer; }
    </style>
  </head>
  <body>
    <h1>Frequently Asked Questions</h1>
    
    <!-- Add a details element with question and answer -->
    
    <!-- Add another details element (make this one open by default) -->
    
    <!-- Add a third details element -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>FAQ Page</title>
    <style>
      details { margin: 10px 0; padding: 10px; border: 1px solid #ccc; border-radius: 5px; }
      summary { font-weight: bold; cursor: pointer; padding: 5px; }
      summary:hover { background-color: #f0f0f0; }
    </style>
  </head>
  <body>
    <h1>Frequently Asked Questions</h1>
    
    <details>
      <summary>What are the system requirements?</summary>
      <ul>
        <li>Modern web browser (Chrome, Firefox, Safari, Edge)</li>
        <li>Internet connection</li>
        <li>JavaScript enabled</li>
        <li>Minimum screen resolution: 1024x768</li>
      </ul>
    </details>
    
    <details open>
      <summary>How do I get started?</summary>
      <p>Getting started is easy! Simply create an account, complete your profile, and you'll have access to all features immediately. No credit card required for the free trial.</p>
      <p>Check out our <a href="/quick-start">Quick Start Guide</a> for step-by-step instructions.</p>
    </details>
    
    <details>
      <summary>What payment methods do you accept?</summary>
      <p>We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual subscriptions.</p>
    </details>
    
    <details>
      <summary>Is there a mobile app available?</summary>
      <p>Yes! Our mobile app is available for both iOS and Android devices. Download it from the App Store or Google Play Store.</p>
    </details>
    
    <details>
      <summary>Can I cancel my subscription anytime?</summary>
      <p>Absolutely! You can cancel your subscription at any time from your account settings. There are no cancellation fees, and you'll retain access until the end of your billing period.</p>
    </details>
  </body>
</html>`,
    hints: [
      'Details element contains both summary and content',
      'Summary is what users click to expand/collapse',
      'Add open attribute to make a details element open by default',
      'Content can be paragraphs, lists, images, or any HTML',
      'No JavaScript needed - it\'s built into HTML!',
      'Style with CSS to match your design'
    ],
    testCases: [
      { name: 'Has details elements', test: (code: string) => (code.match(/<details/g) || []).length >= 3, errorMessage: 'Must include at least 3 <details> elements' },
      { name: 'Has summary elements', test: (code: string) => (code.match(/<summary>/g) || []).length >= 3, errorMessage: 'Each details should have a <summary> element' },
      { name: 'One is open by default', test: (code: string) => /<details[^>]*open/.test(code), errorMessage: 'At least one details should have the open attribute' },
      { name: 'Details have content', test: (code: string) => /<details[\s\S]*?<summary>[\s\S]*?<\/summary>[\s\S]*?<(p|ul|ol|div)[\s\S]*?<\/details>/.test(code), errorMessage: 'Details should have content after the summary (paragraphs, lists, etc.)' },
      { name: 'Summaries have text', test: (code: string) => /<summary>[\s\S]{5,}<\/summary>/.test(code), errorMessage: 'Summary elements should have meaningful question text' }
    ]
  },
  {
    id: 'html-22',
    title: 'Progress and Meter',
    description: 'Display progress indicators and measurements with progress and meter elements',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Progress and Meter

## Introduction
HTML5 provides two elements for displaying measurements:
- \`<progress>\`: Shows task completion (downloads, uploads, installations)
- \`<meter>\`: Shows measurements within a known range (disk usage, ratings, scores)

## The Progress Element
Shows the completion progress of a task.

### Basic Syntax
\`\`\`html
<progress value="70" max="100">70%</progress>
\`\`\`

### Attributes:
- \`value\`: Current progress (0 to max)
- \`max\`: Maximum value (default: 1)

### Examples:

**File Upload:**
\`\`\`html
<label for="file-upload">Uploading file...</label>
<progress id="file-upload" value="45" max="100">45%</progress>
<p>45% complete</p>
\`\`\`

**Indeterminate Progress:**
\`\`\`html
<progress></progress>  <!-- No value = indeterminate/loading -->
<p>Loading...</p>
\`\`\`

**Course Completion:**
\`\`\`html
<p>Course Progress: 8 of 12 lessons complete</p>
<progress value="8" max="12">67%</progress>
\`\`\`

## The Meter Element
Shows a scalar measurement within a known range.

### Basic Syntax
\`\`\`html
<meter value="6" min="0" max="10">6 out of 10</meter>
\`\`\`

### Attributes:
- \`value\`: Current measurement
- \`min\`: Minimum value (default: 0)
- \`max\`: Maximum value (default: 1)
- \`low\`: Lower bound of low range
- \`high\`: Lower bound of high range
- \`optimum\`: Optimal value

### Color Coding
Browsers color-code meters based on the value:
- **Green**: Value is in the optimal range
- **Yellow**: Value is acceptable but not optimal
- **Red**: Value is in a poor range

### Examples:

**Disk Usage:**
\`\`\`html
<label>Disk Usage:</label>
<meter value="80" min="0" max="100" low="30" high="70" optimum="20">
  80% used
</meter>
<p>80 GB of 100 GB used</p>
\`\`\`

**Rating:**
\`\`\`html
<p>Customer Rating:</p>
<meter value="4.5" min="0" max="5" optimum="5">4.5 out of 5</meter>
\`\`\`

**Battery Level:**
\`\`\`html
<label>Battery Level:</label>
<meter value="25" min="0" max="100" low="20" high="80" optimum="100">
  25%
</meter>
\`\`\`

**Temperature:**
\`\`\`html
<meter value="75" min="0" max="100" low="30" high="80" optimum="50">
  75°F
</meter>
<p>Current temperature: 75°F</p>
\`\`\`

## Progress vs Meter - When to Use?

**Use \`<progress>\`:**
- Task completion (uploads, downloads, installations)
- Form completion
- Multi-step processes
- Loading states

**Use \`<meter>\`:**
- Disk usage
- Ratings and scores
- Temperature, speed, or other measurements
- Anything with an optimal range

## Complete Example:
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Progress and Meter Demo</title>
  <style>
    progress, meter { width: 300px; height: 30px; }
    .status { margin: 20px 0; }
  </style>
</head>
<body>
  <h1>Dashboard</h1>
  
  <div class="status">
    <h2>Download Progress</h2>
    <progress value="75" max="100">75%</progress>
    <p>75 MB of 100 MB downloaded</p>
  </div>
  
  <div class="status">
    <h2>Storage Usage</h2>
    <meter value="85" min="0" max="100" low="30" high="70" optimum="20">
      85%
    </meter>
    <p>85% of storage used - Consider cleaning up files</p>
  </div>
  
  <div class="status">
    <h2>Course Completion</h2>
    <progress value="12" max="20">60%</progress>
    <p>12 of 20 lessons completed</p>
  </div>
</body>
</html>
\`\`\`

## Your Task:
Create a dashboard page with:
1. A heading for the dashboard
2. At least 2 progress elements showing different tasks
3. At least 2 meter elements showing different measurements
4. Proper labels and descriptions for each
5. Use min, max, value attributes appropriately
6. For meters, include low, high, and optimum values`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>System Dashboard</title>
    <style>
      progress, meter { width: 250px; height: 25px; }
      .metric { margin: 15px 0; }
    </style>
  </head>
  <body>
    <h1>System Dashboard</h1>
    
    <div class="metric">
      <h2>Installation Progress</h2>
      <!-- Add a progress element -->
    </div>
    
    <div class="metric">
      <h2>CPU Usage</h2>
      <!-- Add a meter element -->
    </div>
    
    <!-- Add more progress and meter elements -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>System Dashboard</title>
    <style>
      progress, meter { width: 250px; height: 25px; }
      .metric { margin: 15px 0; padding: 10px; border: 1px solid #ddd; }
    </style>
  </head>
  <body>
    <h1>System Dashboard</h1>
    
    <div class="metric">
      <h2>Installation Progress</h2>
      <progress value="65" max="100">65%</progress>
      <p>Installing updates... 65% complete</p>
    </div>
    
    <div class="metric">
      <h2>File Upload</h2>
      <progress value="320" max="500">64%</progress>
      <p>Uploading: 320 MB of 500 MB</p>
    </div>
    
    <div class="metric">
      <h2>CPU Usage</h2>
      <meter value="45" min="0" max="100" low="30" high="70" optimum="20">
        45%
      </meter>
      <p>Current CPU usage: 45% - Normal</p>
    </div>
    
    <div class="metric">
      <h2>Memory Usage</h2>
      <meter value="12" min="0" max="16" low="8" high="14" optimum="4">
        12 GB
      </meter>
      <p>Memory: 12 GB of 16 GB used</p>
    </div>
    
    <div class="metric">
      <h2>Disk Space</h2>
      <meter value="450" min="0" max="500" low="100" high="400" optimum="50">
        450 GB
      </meter>
      <p>Disk: 450 GB of 500 GB used - Running low!</p>
    </div>
    
    <div class="metric">
      <h2>System Rating</h2>
      <meter value="8.5" min="0" max="10" optimum="10">8.5 out of 10</meter>
      <p>Performance Score: 8.5/10</p>
    </div>
  </body>
</html>`,
    hints: [
      'Progress: <progress value="50" max="100">50%</progress>',
      'Meter: <meter value="75" min="0" max="100">75%</meter>',
      'Use value and max for both elements',
      'For meter, add low, high, and optimum for color coding',
      'Progress is for tasks in progress, meter is for measurements',
      'Always provide fallback text between the tags'
    ],
    testCases: [
      { name: 'Has progress elements', test: (code: string) => (code.match(/<progress/g) || []).length >= 2, errorMessage: 'Must include at least 2 <progress> elements' },
      { name: 'Has meter elements', test: (code: string) => (code.match(/<meter/g) || []).length >= 2, errorMessage: 'Must include at least 2 <meter> elements' },
      { name: 'Progress has value', test: (code: string) => /<progress[^>]*value="[^"]+"/.test(code), errorMessage: 'Progress elements should have value attribute' },
      { name: 'Progress has max', test: (code: string) => /<progress[^>]*max="[^"]+"/.test(code), errorMessage: 'Progress elements should have max attribute' },
      { name: 'Meter has value', test: (code: string) => /<meter[^>]*value="[^"]+"/.test(code), errorMessage: 'Meter elements should have value attribute' },
      { name: 'Meter has range attributes', test: (code: string) => /<meter[^>]*(low|high|optimum)="[^"]+"/.test(code), errorMessage: 'Meter should include low, high, or optimum attributes' }
    ]
  },
  {
    id: 'html-23',
    title: 'Time Element',
    description: 'Represent dates and times semantically with the HTML5 time element',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Time Element

## Introduction
The \`<time>\` element represents a specific time, date, or duration in a machine-readable format while displaying it in a human-friendly way.

## Why Use the Time Element?
- **SEO**: Search engines can better understand dates
- **Accessibility**: Screen readers can announce dates properly
- **Automation**: Browsers/extensions can add events to calendars
- **Localization**: Can be formatted based on user's locale

## Basic Syntax
\`\`\`html
<time datetime="2024-01-01">January 1, 2024</time>
\`\`\`

## The datetime Attribute
Provides a machine-readable format (ISO 8601).

### Date Formats:

**Full Date:**
\`\`\`html
<time datetime="2024-12-25">Christmas Day 2024</time>
\`\`\`

**Year and Month:**
\`\`\`html
<time datetime="2024-07">July 2024</time>
\`\`\`

**Year Only:**
\`\`\`html
<time datetime="2024">The year 2024</time>
\`\`\`

### Time Formats:

**Time Only:**
\`\`\`html
<time datetime="14:30">2:30 PM</time>
\`\`\`

**Date and Time:**
\`\`\`html
<time datetime="2024-01-01T09:00">January 1, 2024 at 9:00 AM</time>
\`\`\`

**Date, Time, and Timezone:**
\`\`\`html
<time datetime="2024-01-01T09:00:00-05:00">
  January 1, 2024 at 9:00 AM EST
</time>
\`\`\`

### Duration Formats:

**Hours and Minutes:**
\`\`\`html
<p>Video duration: <time datetime="PT2H30M">2 hours 30 minutes</time></p>
\`\`\`

**Days:**
\`\`\`html
<p>Project timeline: <time datetime="P7D">7 days</time></p>
\`\`\`

**Format Guide:**
- \`P\` = Period (for durations)
- \`T\` = Time separator
- \`Y\` = Years, \`M\` = Months, \`D\` = Days
- \`H\` = Hours, \`M\` = Minutes, \`S\` = Seconds

## Common Use Cases:

### 1. Blog Post Publish Date
\`\`\`html
<article>
  <h2>Getting Started with HTML</h2>
  <p>Published on <time datetime="2024-01-15">January 15, 2024</time></p>
</article>
\`\`\`

### 2. Event Information
\`\`\`html
<p>Join us for the conference on 
   <time datetime="2024-09-15T09:00:00-05:00">
     September 15, 2024 at 9:00 AM CDT
   </time>
</p>
\`\`\`

### 3. Last Updated Timestamp
\`\`\`html
<footer>
  <p>Last updated: 
     <time datetime="2024-01-01T14:30:00Z">
       January 1, 2024, 2:30 PM UTC
     </time>
  </p>
</footer>
\`\`\`

### 4. Historical Dates
\`\`\`html
<p>The Declaration of Independence was signed on 
   <time datetime="1776-07-04">July 4, 1776</time>.
</p>
\`\`\`

### 5. Video/Audio Duration
\`\`\`html
<p>Episode length: <time datetime="PT45M">45 minutes</time></p>
\`\`\`

### 6. Relative Time with Absolute datetime
\`\`\`html
<p>Posted <time datetime="2024-01-01T10:00:00Z">2 hours ago</time></p>
\`\`\`

## Complete Example:
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Blog Post</title>
</head>
<body>
  <article>
    <h1>Understanding HTML5 Semantic Elements</h1>
    
    <p>
      <strong>Published:</strong> 
      <time datetime="2024-01-15T10:00:00-05:00">
        January 15, 2024 at 10:00 AM EST
      </time>
    </p>
    
    <p>
      <strong>Reading time:</strong> 
      <time datetime="PT8M">8 minutes</time>
    </p>
    
    <p>Welcome to our comprehensive guide on HTML5 semantic elements...</p>
    
    <footer>
      <p>
        Last updated: 
        <time datetime="2024-01-20T15:30:00-05:00">
          January 20, 2024
        </time>
      </p>
    </footer>
  </article>
  
  <section>
    <h2>Upcoming Events</h2>
    <p>
      Next webinar: <time datetime="2024-02-01T14:00:00-05:00">
        February 1, 2024 at 2:00 PM EST
      </time>
    </p>
  </section>
</body>
</html>
\`\`\`

## Your Task:
Create a blog post page with:
1. An article with heading and content
2. Publication date using time element
3. Last updated timestamp
4. Reading time duration
5. At least one upcoming event with date/time
6. All time elements must have datetime attributes`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Blog Post with Time Elements</title>
  </head>
  <body>
    <article>
      <h1>My Blog Post Title</h1>
      
      <!-- Add published date with time element -->
      <p>Published: </p>
      
      <!-- Add reading time duration -->
      <p>Reading time: </p>
      
      <p>Your article content here...</p>
      
      <footer>
        <!-- Add last updated timestamp -->
        <p>Last updated: </p>
      </footer>
    </article>
    
    <section>
      <h2>Upcoming Events</h2>
      <!-- Add an event with date/time -->
      <p>Next workshop: </p>
    </section>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Blog Post with Time Elements</title>
  </head>
  <body>
    <article>
      <h1>Mastering Modern Web Development</h1>
      
      <p>
        <strong>Published:</strong> 
        <time datetime="2024-01-15T09:00:00-05:00">
          January 15, 2024 at 9:00 AM EST
        </time>
      </p>
      
      <p>
        <strong>Reading time:</strong> 
        <time datetime="PT12M">12 minutes</time>
      </p>
      
      <p>In this comprehensive guide, we'll explore the essential skills and technologies 
         needed to become a proficient web developer in <time datetime="2024">2024</time>.</p>
      
      <p>The web development landscape has evolved significantly since 
         <time datetime="2010">2010</time>, with new frameworks and best practices emerging regularly.</p>
      
      <footer>
        <p>
          <strong>Last updated:</strong> 
          <time datetime="2024-01-20T14:30:00-05:00">
            January 20, 2024 at 2:30 PM
          </time>
        </p>
      </footer>
    </article>
    
    <section>
      <h2>Upcoming Events</h2>
      <p>
        <strong>Next workshop:</strong> 
        <time datetime="2024-02-10T18:00:00-05:00">
          February 10, 2024 at 6:00 PM EST
        </time>
      </p>
      <p>
        <strong>Conference:</strong> 
        <time datetime="2024-03-15">March 15-17, 2024</time>
      </p>
      <p>
        <strong>Duration:</strong> 
        <time datetime="P3D">3 days</time>
      </p>
    </section>
  </body>
</html>`,
    hints: [
      'Always include datetime attribute: <time datetime="2024-01-01">...</time>',
      'Date format: YYYY-MM-DD (e.g., 2024-01-15)',
      'Date and time: 2024-01-15T14:30:00-05:00',
      'Duration format starts with P: PT2H30M (2 hours 30 minutes)',
      'Display text can be human-friendly while datetime is machine-readable',
      'Use time element for any date, time, or duration'
    ],
    testCases: [
      { name: 'Has time elements', test: (code: string) => (code.match(/<time/g) || []).length >= 4, errorMessage: 'Must include at least 4 <time> elements' },
      { name: 'Has datetime attributes', test: (code: string) => (code.match(/datetime="[^"]+"/g) || []).length >= 4, errorMessage: 'All time elements must have datetime attribute' },
      { name: 'Has date format', test: (code: string) => /datetime="\d{4}-\d{2}-\d{2}/.test(code), errorMessage: 'At least one datetime should be a proper date (YYYY-MM-DD)' },
      { name: 'Has duration', test: (code: string) => /datetime="PT?[^"]+"/.test(code), errorMessage: 'Include at least one duration (starts with P or PT)' },
      { name: 'Time has content', test: (code: string) => /<time[^>]*>[\s\S]{3,}<\/time>/.test(code), errorMessage: 'Time elements should have display text between tags' },
      { name: 'In article context', test: (code: string) => /<article[\s\S]*<time[\s\S]*<\/article>/.test(code), errorMessage: 'At least one time element should be inside an article' }
    ]
  },
  {
    id: 'html-24',
    title: 'The Mark Element - Highlighting Text',
    description: 'Learn to highlight important text using the <mark> element',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# The Mark Element - Highlighting Text

## Introduction
The \`<mark>\` element is used to highlight or mark text that has special relevance or importance in a particular context. It's like using a highlighter pen on text - it draws attention to specific words or phrases that are relevant to the user's current activity or search.

## When to Use Mark
The \`<mark>\` element should be used for:
- **Search Results**: Highlighting search terms in results
- **Reference Highlighting**: Marking quoted or referenced text
- **Current Context**: Indicating text relevant to the current discussion
- **Code Changes**: Showing modified portions in documentation

## Key Concepts

### Basic Syntax
\`\`\`html
<p>The <mark>highlighted text</mark> stands out.</p>
\`\`\`

### Search Results Example
\`\`\`html
<article>
  <h2>Search Results for "HTML"</h2>
  <p><mark>HTML</mark> is the standard markup language for creating web pages.
  Learning <mark>HTML</mark> is essential for web development.</p>
</article>
\`\`\`

### Multiple Highlights
\`\`\`html
<p>Our <mark>special offer</mark> includes <mark>free shipping</mark> and 
<mark>30-day returns</mark>.</p>
\`\`\`

## Styling Mark Elements
By default, \`<mark>\` has a yellow background. You can customize it with CSS:
\`\`\`html
<style>
  mark { background-color: #ffeb3b; color: #000; }
  mark.important { background-color: #f44336; color: #fff; }
</style>
\`\`\`

## Your Task
Create a search results page that:
1. Shows a paragraph of text about web development
2. Highlights multiple instances of the search term "web"
3. Uses at least 3 \`<mark>\` elements
4. Includes a heading explaining the search context`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Search Results</title>
  </head>
  <body>
    <!-- Add a heading showing what was searched -->
    
    <!-- Add a paragraph about web development with highlighted search terms -->
    <p>
      <!-- Use <mark> to highlight instances of "web" in your text -->
    </p>
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Search Results</title>
  </head>
  <body>
    <h1>Search Results for "web"</h1>
    
    <article>
      <h2>What is Web Development?</h2>
      <p><mark>Web</mark> development is the process of building and maintaining websites. 
      A <mark>web</mark> developer uses HTML, CSS, and JavaScript to create <mark>web</mark> pages 
      that run in a browser. Modern <mark>web</mark> applications are powerful and interactive.</p>
    </article>
    
    <article>
      <h2>Learning Web Design</h2>
      <p>The <mark>web</mark> design process involves planning, creating, and maintaining 
      <mark>web</mark> content that is both functional and visually appealing.</p>
    </article>
  </body>
</html>`,
    hints: [
      'Use <mark> to wrap individual words or phrases you want to highlight',
      'You can use <mark> multiple times in the same paragraph',
      'The mark element works inside any text content (p, article, div, etc.)',
      'Add a descriptive heading to explain what is being highlighted',
      'Highlight at least 3 instances of the word "web" in your content',
      'The mark element should wrap only the specific text to highlight, not entire sentences',
      'Remember to close each <mark> tag with </mark>'
    ],
    testCases: [
      { name: 'Has mark elements', test: (code: string) => (code.match(/<mark>/g) || []).length >= 3, errorMessage: 'Must include at least 3 <mark> elements' },
      { name: 'Mark elements closed', test: (code: string) => (code.match(/<mark>/g) || []).length === (code.match(/<\/mark>/g) || []).length, errorMessage: 'All <mark> tags must be properly closed' },
      { name: 'Has heading', test: (code: string) => code.includes('<h1>') || code.includes('<h2>'), errorMessage: 'Must include a heading' },
      { name: 'Has paragraph', test: (code: string) => code.includes('<p>') && code.includes('</p>'), errorMessage: 'Must include paragraph text' },
      { name: 'Mark used in paragraph', test: (code: string) => /<p>[\s\S]*<mark>[\s\S]*<\/mark>[\s\S]*<\/p>/.test(code), errorMessage: 'Must use <mark> elements inside paragraph content' },
      { name: 'Highlights search term', test: (code: string) => /<mark>.*web.*<\/mark>/i.test(code), errorMessage: 'Should highlight instances of the search term' }
    ]
  },
  {
    id: 'html-25',
    title: 'The Abbr Element - Abbreviations',
    description: 'Learn to properly mark up abbreviations and acronyms',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# The Abbr Element - Abbreviations

## Introduction
The \`<abbr>\` element represents an abbreviation or acronym. It helps users understand shortened terms by providing the full expansion via the \`title\` attribute. This improves accessibility and user experience, especially for screen reader users and those unfamiliar with the terminology.

## Why Use Abbr?
- **Accessibility**: Screen readers can announce the full term
- **User Education**: Users can hover to see the full meaning
- **SEO**: Search engines understand the content better
- **Professional Writing**: Follows web standards for technical content

## Key Concepts

### Basic Syntax
\`\`\`html
<p>The <abbr title="World Wide Web">WWW</abbr> changed everything.</p>
\`\`\`

### Common Abbreviations
\`\`\`html
<p><abbr title="Hypertext Markup Language">HTML</abbr> is used to structure content.</p>
<p><abbr title="Cascading Style Sheets">CSS</abbr> handles the styling.</p>
<p><abbr title="JavaScript">JS</abbr> adds interactivity.</p>
\`\`\`

### Technical Documentation
\`\`\`html
<article>
  <h2>API Documentation</h2>
  <p>Our <abbr title="Application Programming Interface">API</abbr> 
  supports <abbr title="Representational State Transfer">REST</abbr> 
  and returns data in <abbr title="JavaScript Object Notation">JSON</abbr> format.</p>
</article>
\`\`\`

### Organizational Abbreviations
\`\`\`html
<p>The <abbr title="World Health Organization">WHO</abbr> and 
<abbr title="United Nations">UN</abbr> work together on global health initiatives.</p>
\`\`\`

## Styling Abbr
\`\`\`html
<style>
  abbr {
    text-decoration: underline dotted;
    cursor: help;
  }
</style>
\`\`\`

## Your Task
Create a tech glossary page that:
1. Includes at least 5 different abbreviations
2. Each abbr has a proper \`title\` attribute with the full expansion
3. Uses abbreviations in meaningful sentences
4. Includes a mix of technology acronyms`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Tech Glossary</title>
  </head>
  <body>
    <h1>Web Development Terms</h1>
    
    <!-- Add a paragraph explaining web technologies -->
    <p>
      <!-- Use <abbr title="full term">SHORT</abbr> for abbreviations -->
    </p>
    
    <!-- Add more paragraphs with different abbreviations -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Tech Glossary</title>
  </head>
  <body>
    <h1>Web Development Terms</h1>
    
    <article>
      <h2>Core Technologies</h2>
      <p><abbr title="Hypertext Markup Language">HTML</abbr> provides the structure 
      of web pages, while <abbr title="Cascading Style Sheets">CSS</abbr> handles 
      the visual presentation.</p>
      
      <p><abbr title="JavaScript">JS</abbr> adds interactivity to websites and 
      can communicate with <abbr title="Application Programming Interface">APIs</abbr> 
      to fetch data.</p>
    </article>
    
    <article>
      <h2>Modern Development</h2>
      <p>Modern web apps often use <abbr title="Single Page Application">SPA</abbr> 
      architecture and <abbr title="Asynchronous JavaScript and XML">AJAX</abbr> 
      for smooth user experiences.</p>
      
      <p>Developers use <abbr title="Version Control System">VCS</abbr> like Git 
      to manage code changes.</p>
    </article>
  </body>
</html>`,
    hints: [
      'Use <abbr title="Full Term">SHORT</abbr> syntax',
      'The title attribute should contain the complete, expanded form',
      'You can use multiple abbr elements in one paragraph',
      'Common tech abbreviations: HTML, CSS, JS, API, URL, HTTP, JSON, XML',
      'Make sure each abbreviation appears within actual sentence content',
      'Include at least 5 different abbreviations throughout your page',
      'The title attribute is required for abbr to be useful'
    ],
    testCases: [
      { name: 'Has abbr elements', test: (code: string) => (code.match(/<abbr/g) || []).length >= 5, errorMessage: 'Must include at least 5 <abbr> elements' },
      { name: 'Abbr has title attribute', test: (code: string) => /<abbr[^>]*title="[^"]+"/.test(code), errorMessage: 'Abbr elements must have title attribute with full expansion' },
      { name: 'All abbr closed', test: (code: string) => (code.match(/<abbr/g) || []).length === (code.match(/<\/abbr>/g) || []).length, errorMessage: 'All <abbr> tags must be properly closed' },
      { name: 'Has heading', test: (code: string) => code.includes('<h1>') || code.includes('<h2>'), errorMessage: 'Must include a heading' },
      { name: 'Has paragraphs', test: (code: string) => (code.match(/<p>/g) || []).length >= 2, errorMessage: 'Must include at least 2 paragraphs' },
      { name: 'Multiple different abbreviations', test: (code: string) => /<abbr[^>]*title=".*HTML.*"/i.test(code) || /<abbr[^>]*title=".*CSS.*"/i.test(code) || /<abbr[^>]*title=".*API.*"/i.test(code), errorMessage: 'Should include common tech abbreviations like HTML, CSS, or API' }
    ]
  },
  {
    id: 'html-26',
    title: 'Blockquote and Cite - Quotations',
    description: 'Learn to properly format quotations and citations in HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Blockquote and Cite - Quotations

## Introduction
The \`<blockquote>\` element is used for longer quotations that are set off from the main text, while the \`<cite>\` element indicates the title of a creative work or the name of a referenced source. Together, they provide semantic meaning for quoted content and proper attribution.

## When to Use These Elements
- **Blockquote**: For multi-line quotations from other sources
- **Cite**: For titles of books, articles, movies, songs, or other works
- **Q**: For short inline quotations (brief alternative)

## Key Concepts

### Basic Blockquote
\`\`\`html
<blockquote>
  <p>The only way to do great work is to love what you do.</p>
</blockquote>
\`\`\`

### Blockquote with Citation
\`\`\`html
<blockquote cite="https://example.com/source">
  <p>Be yourself; everyone else is already taken.</p>
  <footer>— <cite>Oscar Wilde</cite></footer>
</blockquote>
\`\`\`

### Multiple Paragraph Quote
\`\`\`html
<blockquote>
  <p>First paragraph of the quotation.</p>
  <p>Second paragraph continues the quote.</p>
  <footer>— Author Name, <cite>Book Title</cite></footer>
</blockquote>
\`\`\`

### Inline Citation
\`\`\`html
<p>As mentioned in <cite>The Art of War</cite>, strategy is important.</p>
\`\`\`

### The cite Attribute
The \`cite\` attribute (different from the \`<cite>\` element) provides a URL reference:
\`\`\`html
<blockquote cite="https://www.example.com/article">
  <p>Quoted text here.</p>
</blockquote>
\`\`\`

## Styling Examples
\`\`\`html
<style>
  blockquote {
    border-left: 4px solid #ccc;
    padding-left: 20px;
    margin-left: 0;
    font-style: italic;
  }
  cite { font-style: normal; font-weight: bold; }
</style>
\`\`\`

## Your Task
Create a quotes page that includes:
1. At least 2 blockquotes with different quotes
2. Each blockquote should have a \`<cite>\` element crediting the source
3. Use the \`cite\` attribute on at least one blockquote
4. Include proper paragraph structure inside blockquotes
5. Add a page heading and introduction`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Famous Quotes</title>
  </head>
  <body>
    <h1>Inspirational Quotes</h1>
    
    <!-- Add your first blockquote with citation -->
    <blockquote>
      <p><!-- Add quote text here --></p>
      <footer>— <cite><!-- Author or source --></cite></footer>
    </blockquote>
    
    <!-- Add a second blockquote -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Famous Quotes</title>
  </head>
  <body>
    <h1>Inspirational Quotes</h1>
    
    <article>
      <h2>Words of Wisdom</h2>
      
      <blockquote cite="https://example.com/einstein">
        <p>Imagination is more important than knowledge. Knowledge is limited. 
        Imagination encircles the world.</p>
        <footer>— <cite>Albert Einstein</cite></footer>
      </blockquote>
      
      <blockquote>
        <p>The future belongs to those who believe in the beauty of their dreams.</p>
        <footer>— <cite>Eleanor Roosevelt</cite></footer>
      </blockquote>
      
      <blockquote cite="https://example.com/jobs">
        <p>Innovation distinguishes between a leader and a follower.</p>
        <footer>— <cite>Steve Jobs</cite></footer>
      </blockquote>
    </article>
    
    <p>These quotes from <cite>Great Leaders of History</cite> inspire us daily.</p>
  </body>
</html>`,
    hints: [
      'Use <blockquote> for the entire quotation block',
      'Put quote text inside <p> tags within the blockquote',
      'Use <footer> with <cite> to credit the author or source',
      'The cite attribute takes a URL, while <cite> element shows visible text',
      'You can nest multiple paragraphs inside a single blockquote',
      'Include at least 2 complete blockquote elements',
      'The <cite> element can also be used inline in regular paragraphs'
    ],
    testCases: [
      { name: 'Has blockquote elements', test: (code: string) => (code.match(/<blockquote/g) || []).length >= 2, errorMessage: 'Must include at least 2 <blockquote> elements' },
      { name: 'Blockquotes closed', test: (code: string) => (code.match(/<blockquote/g) || []).length === (code.match(/<\/blockquote>/g) || []).length, errorMessage: 'All <blockquote> tags must be properly closed' },
      { name: 'Has cite elements', test: (code: string) => (code.match(/<cite/g) || []).length >= 2, errorMessage: 'Must include at least 2 <cite> elements for attribution' },
      { name: 'Paragraphs in blockquote', test: (code: string) => /<blockquote[\s\S]*<p>[\s\S]*<\/p>[\s\S]*<\/blockquote>/.test(code), errorMessage: 'Blockquotes should contain <p> elements' },
      { name: 'Has cite attribute', test: (code: string) => /<blockquote[^>]*cite="[^"]+"/.test(code), errorMessage: 'At least one blockquote should have a cite attribute with URL' },
      { name: 'Has heading', test: (code: string) => code.includes('<h1>') || code.includes('<h2>'), errorMessage: 'Must include a heading for the page' }
    ]
  },
  {
    id: 'html-27',
    title: 'Code, Pre, and Samp Elements',
    description: 'Learn to display code and computer output properly',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Code, Pre, and Samp Elements

## Introduction
HTML provides specific elements for displaying computer code, preformatted text, and sample output. These semantic elements help browsers and screen readers understand that content represents code or computer-related text, and they preserve formatting like spaces and line breaks.

## The Three Elements

### 1. \`<code>\` - Inline Code
Represents a fragment of computer code (function names, variables, etc.):
\`\`\`html
<p>Use the <code>console.log()</code> function to print output.</p>
<p>The <code>getElementById()</code> method returns an element.</p>
\`\`\`

### 2. \`<pre>\` - Preformatted Text
Preserves spaces, line breaks, and indentation. Essential for code blocks:
\`\`\`html
<pre>
function greet(name) {
  return "Hello, " + name;
}
</pre>
\`\`\`

### 3. \`<samp>\` - Sample Output
Represents sample output from a computer program:
\`\`\`html
<p>The program outputs: <samp>Hello, World!</samp></p>
\`\`\`

## Combining Elements

### Code Block with Pre
\`\`\`html
<pre><code>const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled);</code></pre>
\`\`\`

### Complete Example
\`\`\`html
<article>
  <h2>JavaScript Example</h2>
  <p>First, define a function using <code>function</code> keyword:</p>
  
  <pre><code>function add(a, b) {
  return a + b;
}</code></pre>
  
  <p>When you call <code>add(2, 3)</code>, it outputs:</p>
  <samp>5</samp>
</article>
\`\`\`

## Key Differences
- **\`<code>\`**: Inline code snippets (function names, variables)
- **\`<pre>\`**: Block-level, preserves all whitespace and formatting
- **\`<samp>\`**: Shows program output or computer-generated text

## Styling
\`\`\`html
<style>
  code, samp { 
    background: #f4f4f4; 
    padding: 2px 6px; 
    border-radius: 3px;
    font-family: monospace;
  }
  pre {
    background: #f4f4f4;
    padding: 15px;
    border-radius: 5px;
    overflow-x: auto;
  }
</style>
\`\`\`

## Your Task
Create a programming tutorial page that:
1. Uses \`<code>\` for at least 3 inline code references
2. Includes a \`<pre>\` block with multi-line code
3. Shows sample output using \`<samp>\`
4. Combines \`<pre>\` and \`<code>\` for a formatted code block
5. Has clear headings and explanatory text`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Code Tutorial</title>
  </head>
  <body>
    <h1>JavaScript Basics</h1>
    
    <!-- Add a paragraph mentioning code elements using <code> -->
    <p>
      <!-- Example: The <code>console.log()</code> function... -->
    </p>
    
    <!-- Add a code block using <pre><code> -->
    <pre><code>
<!-- Add formatted code here -->
    </code></pre>
    
    <!-- Show sample output using <samp> -->
    <p>Output: <samp><!-- result here --></samp></p>
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Code Tutorial</title>
  </head>
  <body>
    <h1>JavaScript Basics</h1>
    
    <article>
      <h2>Variables and Functions</h2>
      <p>In JavaScript, use <code>const</code> or <code>let</code> to declare variables. 
      The <code>function</code> keyword creates reusable code blocks.</p>
      
      <h3>Example Function</h3>
      <pre><code>function multiply(x, y) {
  const result = x * y;
  console.log(result);
  return result;
}</code></pre>
      
      <p>Calling <code>multiply(4, 5)</code> produces the output:</p>
      <samp>20</samp>
      
      <h3>Array Methods</h3>
      <p>The <code>map()</code> method transforms arrays:</p>
      <pre><code>const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled);</code></pre>
      
      <p>Console output: <samp>[2, 4, 6]</samp></p>
    </article>
  </body>
</html>`,
    hints: [
      'Use <code> for inline code like function names or keywords',
      'Use <pre><code> together for multi-line code blocks',
      'The <pre> element preserves all spaces and line breaks',
      'Use <samp> to show what the program outputs',
      'Include at least 3 instances of <code> for inline references',
      'Your <pre> block should contain multiple lines of formatted code',
      'Monospace font is automatically applied to code, pre, and samp elements'
    ],
    testCases: [
      { name: 'Has code elements', test: (code: string) => (code.match(/<code/g) || []).length >= 3, errorMessage: 'Must include at least 3 <code> elements' },
      { name: 'Has pre element', test: (code: string) => code.includes('<pre>') && code.includes('</pre>'), errorMessage: 'Must include <pre> element for code blocks' },
      { name: 'Has samp element', test: (code: string) => code.includes('<samp>') && code.includes('</samp>'), errorMessage: 'Must include <samp> element for sample output' },
      { name: 'Pre contains code', test: (code: string) => /<pre[\s\S]*<code[\s\S]*<\/code[\s\S]*<\/pre>/.test(code), errorMessage: 'Should combine <pre> and <code> for formatted code blocks' },
      { name: 'All elements closed', test: (code: string) => (code.match(/<code/g) || []).length === (code.match(/<\/code>/g) || []).length, errorMessage: 'All <code> tags must be properly closed' },
      { name: 'Has heading', test: (code: string) => code.includes('<h1>') || code.includes('<h2>'), errorMessage: 'Must include headings for the tutorial' }
    ]
  },
  {
    id: 'html-28',
    title: 'Kbd and Var Elements - User Input',
    description: 'Learn to mark keyboard input and variables in documentation',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Kbd and Var Elements - User Input

## Introduction
HTML provides semantic elements for representing user input and variables in technical documentation. The \`<kbd>\` element represents keyboard input, while \`<var>\` represents mathematical or programming variables. These elements help create clear, professional technical content.

## The Elements

### 1. \`<kbd>\` - Keyboard Input
Represents user input from a keyboard or other input device:
\`\`\`html
<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save your work.</p>
<p>Type <kbd>exit</kbd> to quit the program.</p>
\`\`\`

### 2. \`<var>\` - Variables
Represents a variable in mathematical expressions or programming:
\`\`\`html
<p>The formula is <var>E</var> = <var>mc</var><sup>2</sup></p>
<p>Set <var>x</var> = 10 and <var>y</var> = 20</p>
\`\`\`

## Common Use Cases

### Keyboard Shortcuts
\`\`\`html
<dl>
  <dt>Save</dt>
  <dd><kbd>Ctrl</kbd> + <kbd>S</kbd></dd>
  
  <dt>Copy</dt>
  <dd><kbd>Ctrl</kbd> + <kbd>C</kbd></dd>
  
  <dt>Paste</dt>
  <dd><kbd>Ctrl</kbd> + <kbd>V</kbd></dd>
</dl>
\`\`\`

### Command Line Instructions
\`\`\`html
<p>To install the package, type:</p>
<pre><kbd>npm install package-name</kbd></pre>
\`\`\`

### Mathematical Formulas
\`\`\`html
<p>The Pythagorean theorem states that 
<var>a</var><sup>2</sup> + <var>b</var><sup>2</sup> = <var>c</var><sup>2</sup></p>
\`\`\`

### Programming Variables
\`\`\`html
<p>Initialize <var>counter</var> to 0, then increment it inside the loop.</p>
<code>let <var>total</var> = <var>price</var> * <var>quantity</var>;</code>
\`\`\`

## Combining with Other Elements
\`\`\`html
<article>
  <h2>Quick Start Guide</h2>
  <p>Open the terminal and enter: <kbd>cd myproject</kbd></p>
  <p>Set the <var>PORT</var> variable in your config file.</p>
  <p>Press <kbd>Enter</kbd> to confirm.</p>
</article>
\`\`\`

## Styling
\`\`\`html
<style>
  kbd {
    background: #f4f4f4;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 2px 6px;
    font-family: monospace;
  }
  var {
    font-style: italic;
    font-weight: bold;
  }
</style>
\`\`\`

## Your Task
Create a software tutorial page that:
1. Shows at least 3 keyboard shortcuts using \`<kbd>\`
2. Demonstrates at least 2 variables using \`<var>\`
3. Includes examples of both keyboard combinations (like Ctrl+S) and single keys
4. Uses variables in a mathematical or programming context
5. Has clear headings and instructions`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Keyboard Shortcuts Guide</title>
  </head>
  <body>
    <h1>Essential Shortcuts</h1>
    
    <!-- Add keyboard shortcut examples -->
    <p>Press <kbd><!-- key here --></kbd> to ...</p>
    
    <!-- Add variable examples -->
    <p>Set <var><!-- variable name --></var> to ...</p>
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Keyboard Shortcuts Guide</title>
  </head>
  <body>
    <h1>Essential Shortcuts</h1>
    
    <article>
      <h2>Text Editing Shortcuts</h2>
      <ul>
        <li>Save: <kbd>Ctrl</kbd> + <kbd>S</kbd></li>
        <li>Undo: <kbd>Ctrl</kbd> + <kbd>Z</kbd></li>
        <li>Redo: <kbd>Ctrl</kbd> + <kbd>Y</kbd></li>
        <li>Find: <kbd>Ctrl</kbd> + <kbd>F</kbd></li>
      </ul>
    </article>
    
    <article>
      <h2>Terminal Commands</h2>
      <p>Navigate to your project: <kbd>cd myproject</kbd></p>
      <p>List files: <kbd>ls</kbd> or <kbd>dir</kbd></p>
      <p>Press <kbd>Tab</kbd> for autocomplete.</p>
    </article>
    
    <article>
      <h2>Variable Assignment</h2>
      <p>In the formula <var>y</var> = <var>mx</var> + <var>b</var>, 
      <var>m</var> represents the slope.</p>
      <p>Set <var>username</var> and <var>password</var> in your configuration.</p>
    </article>
  </body>
</html>`,
    hints: [
      'Use <kbd> for individual keys and key combinations',
      'For combinations like Ctrl+S, use <kbd>Ctrl</kbd> + <kbd>S</kbd>',
      'Use <var> for mathematical variables or programming variable names',
      'Include at least 3 different keyboard shortcuts',
      'Include at least 2 different variables',
      'Variables are typically shown in italic by default',
      'Kbd elements often look like keyboard keys with borders'
    ],
    testCases: [
      { name: 'Has kbd elements', test: (code: string) => (code.match(/<kbd/g) || []).length >= 3, errorMessage: 'Must include at least 3 <kbd> elements' },
      { name: 'Has var elements', test: (code: string) => (code.match(/<var/g) || []).length >= 2, errorMessage: 'Must include at least 2 <var> elements' },
      { name: 'Kbd elements closed', test: (code: string) => (code.match(/<kbd/g) || []).length === (code.match(/<\/kbd>/g) || []).length, errorMessage: 'All <kbd> tags must be properly closed' },
      { name: 'Var elements closed', test: (code: string) => (code.match(/<var/g) || []).length === (code.match(/<\/var>/g) || []).length, errorMessage: 'All <var> tags must be properly closed' },
      { name: 'Has heading', test: (code: string) => code.includes('<h1>') || code.includes('<h2>'), errorMessage: 'Must include headings' },
      { name: 'Has paragraphs or lists', test: (code: string) => code.includes('<p>') || code.includes('<li>'), errorMessage: 'Must include content with kbd and var elements' }
    ]
  },
  {
    id: 'html-29',
    title: 'Sub and Sup - Subscript and Superscript',
    description: 'Learn to create subscripts and superscripts for formulas and references',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Sub and Sup - Subscript and Superscript

## Introduction
The \`<sub>\` and \`<sup>\` elements create subscript and superscript text respectively. These are essential for mathematical formulas, chemical equations, footnote references, and ordinal numbers. The text appears smaller and positioned below (sub) or above (sup) the baseline.

## The Elements

### \`<sup>\` - Superscript
Raises text above the baseline:
\`\`\`html
<p>E = mc<sup>2</sup></p>
<p>x<sup>2</sup> + y<sup>2</sup> = z<sup>2</sup></p>
\`\`\`

### \`<sub>\` - Subscript
Lowers text below the baseline:
\`\`\`html
<p>H<sub>2</sub>O is the chemical formula for water.</p>
<p>CO<sub>2</sub> is carbon dioxide.</p>
\`\`\`

## Common Use Cases

### Mathematical Formulas
\`\`\`html
<p>The area of a circle is πr<sup>2</sup></p>
<p>The sum from i=1 to n: Σ<sub>i=1</sub><sup>n</sup></p>
<p>2<sup>8</sup> = 256</p>
\`\`\`

### Chemical Formulas
\`\`\`html
<p>Common chemicals:</p>
<ul>
  <li>Water: H<sub>2</sub>O</li>
  <li>Carbon Dioxide: CO<sub>2</sub></li>
  <li>Glucose: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></li>
  <li>Sulfuric Acid: H<sub>2</sub>SO<sub>4</sub></li>
</ul>
\`\`\`

### Footnote References
\`\`\`html
<p>According to recent studies<sup>1</sup>, the results show significant improvement.
Further research<sup>2</sup> confirms these findings.</p>
<footer>
  <p><sup>1</sup> Smith, J. (2024). Research Journal.</p>
  <p><sup>2</sup> Jones, A. (2024). Science Today.</p>
</footer>
\`\`\`

### Ordinal Numbers
\`\`\`html
<p>The race results:</p>
<ul>
  <li>1<sup>st</sup> place: Sarah</li>
  <li>2<sup>nd</sup> place: Mike</li>
  <li>3<sup>rd</sup> place: Emma</li>
</ul>
\`\`\`

### Combining Both
\`\`\`html
<p>The equation log<sub>2</sub>(x<sup>3</sup>) demonstrates both subscript and superscript.</p>
\`\`\`

## Complex Examples
\`\`\`html
<article>
  <h2>Chemistry Class</h2>
  <p>The reaction: 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</p>
  <p>Energy released: 286 kJ/mol<sup>-1</sup></p>
</article>

<article>
  <h2>Physics Formulas</h2>
  <p>Einstein's equation: E = mc<sup>2</sup></p>
  <p>Kinetic energy: KE = ½mv<sup>2</sup></p>
</article>
\`\`\`

## Your Task
Create a science reference page that:
1. Includes at least 3 superscript examples (formulas, exponents, or references)
2. Includes at least 3 subscript examples (chemical formulas or mathematical notation)
3. Shows both mathematical and chemical applications
4. Uses proper headings to organize content
5. Demonstrates at least one example using both sub and sup together`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Science Reference</title>
  </head>
  <body>
    <h1>Science Formulas</h1>
    
    <!-- Add mathematical formulas with superscripts -->
    <p><!-- Example: E = mc<sup>2</sup> --></p>
    
    <!-- Add chemical formulas with subscripts -->
    <p><!-- Example: H<sub>2</sub>O --></p>
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Science Reference</title>
  </head>
  <body>
    <h1>Science Reference Guide</h1>
    
    <article>
      <h2>Famous Physics Formulas</h2>
      <ul>
        <li>Einstein's Mass-Energy: E = mc<sup>2</sup></li>
        <li>Pythagorean Theorem: a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></li>
        <li>Area of Circle: A = πr<sup>2</sup></li>
        <li>Power: 10<sup>3</sup> = 1000</li>
      </ul>
    </article>
    
    <article>
      <h2>Common Chemical Formulas</h2>
      <ul>
        <li>Water: H<sub>2</sub>O</li>
        <li>Carbon Dioxide: CO<sub>2</sub></li>
        <li>Methane: CH<sub>4</sub></li>
        <li>Glucose: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></li>
      </ul>
    </article>
    
    <article>
      <h2>Advanced Notation</h2>
      <p>The logarithm: log<sub>10</sub>(x<sup>2</sup>) combines subscript base and superscript exponent.</p>
      <p>Chemical reaction: 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O + Energy</p>
    </article>
    
    <footer>
      <p>References<sup>1,2,3</sup> available upon request.</p>
    </footer>
  </body>
</html>`,
    hints: [
      'Use <sup> for exponents, powers, and ordinal indicators (1st, 2nd)',
      'Use <sub> for chemical element counts and mathematical subscripts',
      'Common superscripts: ², ³, ⁴ or use <sup>2</sup>, <sup>3</sup>, <sup>4</sup>',
      'Chemical formulas need subscripts: H<sub>2</sub>O not H2O',
      'Include at least 3 examples of each (sub and sup)',
      'You can combine both in one expression: log<sub>2</sub>(x<sup>3</sup>)',
      'Close all sub and sup tags properly'
    ],
    testCases: [
      { name: 'Has sup elements', test: (code: string) => (code.match(/<sup/g) || []).length >= 3, errorMessage: 'Must include at least 3 <sup> elements' },
      { name: 'Has sub elements', test: (code: string) => (code.match(/<sub/g) || []).length >= 3, errorMessage: 'Must include at least 3 <sub> elements' },
      { name: 'Sup elements closed', test: (code: string) => (code.match(/<sup/g) || []).length === (code.match(/<\/sup>/g) || []).length, errorMessage: 'All <sup> tags must be properly closed' },
      { name: 'Sub elements closed', test: (code: string) => (code.match(/<sub/g) || []).length === (code.match(/<\/sub>/g) || []).length, errorMessage: 'All <sub> tags must be properly closed' },
      { name: 'Has heading', test: (code: string) => code.includes('<h1>') || code.includes('<h2>'), errorMessage: 'Must include headings' },
      { name: 'Contains formulas', test: (code: string) => (code.includes('<sup>2</sup>') || code.includes('<sub>2</sub>')), errorMessage: 'Should include mathematical or chemical formulas' }
    ]
  },
  {
    id: 'html-30',
    title: 'Details and Summary - Accordions',
    description: 'Create interactive disclosure widgets with details and summary elements',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Details and Summary - Accordions

## Introduction
The \`<details>\` and \`<summary>\` elements create native HTML accordions or collapsible sections without any JavaScript. Users can click to expand and collapse content, making them perfect for FAQs, advanced options, and progressive disclosure patterns.

## Basic Structure
The \`<summary>\` is the visible heading/trigger, and \`<details>\` contains the collapsible content:
\`\`\`html
<details>
  <summary>Click to expand</summary>
  <p>This content is hidden until the user clicks the summary.</p>
</details>
\`\`\`

## Key Features
- **No JavaScript Required**: Works natively in all modern browsers
- **Accessible**: Built-in keyboard support and screen reader friendly
- **Open Attribute**: Add \`open\` to show content by default

## Common Patterns

### FAQ Section
\`\`\`html
<h2>Frequently Asked Questions</h2>

<details>
  <summary>What is HTML?</summary>
  <p>HTML (HyperText Markup Language) is the standard markup language 
  for creating web pages.</p>
</details>

<details>
  <summary>How do I learn HTML?</summary>
  <p>Start with the basics: document structure, common elements, 
  and semantic HTML. Practice by building simple pages.</p>
</details>
\`\`\`

### Advanced Settings
\`\`\`html
<details>
  <summary>Advanced Options</summary>
  <div>
    <label>
      <input type="checkbox" name="debug">
      Enable debugging mode
    </label>
    <label>
      <input type="checkbox" name="verbose">
      Verbose logging
    </label>
  </div>
</details>
\`\`\`

### Open by Default
\`\`\`html
<details open>
  <summary>Important Notice</summary>
  <p>This section is expanded by default.</p>
</details>
\`\`\`

### Nested Details
\`\`\`html
<details>
  <summary>Chapter 1</summary>
  <p>Introduction to the topic...</p>
  
  <details>
    <summary>Section 1.1</summary>
    <p>Detailed content for section 1.1</p>
  </details>
  
  <details>
    <summary>Section 1.2</summary>
    <p>Detailed content for section 1.2</p>
  </details>
</details>
\`\`\`

### Complete Example
\`\`\`html
<article>
  <h2>Product Specifications</h2>
  
  <details>
    <summary>Dimensions</summary>
    <ul>
      <li>Width: 10 inches</li>
      <li>Height: 15 inches</li>
      <li>Depth: 3 inches</li>
    </ul>
  </details>
  
  <details>
    <summary>Technical Specs</summary>
    <dl>
      <dt>Processor</dt>
      <dd>Quad-core 2.4 GHz</dd>
      <dt>RAM</dt>
      <dd>16 GB DDR4</dd>
    </dl>
  </details>
</article>
\`\`\`

## Your Task
Create an FAQ page that:
1. Uses at least 3 \`<details>\` elements
2. Each has a descriptive \`<summary>\`
3. One should be open by default
4. Include varied content (paragraphs, lists, etc.)
5. Organize with proper headings`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>FAQ Page</title>
  </head>
  <body>
    <h1>Frequently Asked Questions</h1>
    
    <!-- Add first FAQ item -->
    <details>
      <summary><!-- Question here --></summary>
      <p><!-- Answer here --></p>
    </details>
    
    <!-- Add more details elements -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>FAQ Page</title>
  </head>
  <body>
    <h1>Frequently Asked Questions</h1>
    
    <article>
      <h2>Getting Started</h2>
      
      <details open>
        <summary>What is web development?</summary>
        <p>Web development is the process of building and maintaining websites. 
        It includes web design, web content development, client-side scripting, 
        and server-side scripting.</p>
      </details>
      
      <details>
        <summary>What languages should I learn first?</summary>
        <p>Start with these core technologies:</p>
        <ul>
          <li>HTML - for structure</li>
          <li>CSS - for styling</li>
          <li>JavaScript - for interactivity</li>
        </ul>
      </details>
      
      <details>
        <summary>How long does it take to learn?</summary>
        <p>Learning the basics can take 3-6 months with consistent practice. 
        However, web development is a continuous learning journey as 
        technologies evolve.</p>
      </details>
      
      <details>
        <summary>What tools do I need?</summary>
        <ul>
          <li>A code editor (VS Code, Sublime Text)</li>
          <li>A web browser (Chrome, Firefox)</li>
          <li>Version control (Git)</li>
        </ul>
      </details>
    </article>
  </body>
</html>`,
    hints: [
      'The <summary> element must be the first child of <details>',
      'Add the open attribute to make a details element expanded by default',
      'You can put any HTML content inside details (paragraphs, lists, etc.)',
      'Include at least 3 details elements',
      'Make one details element open by default with the open attribute',
      'The summary text should be a clear question or heading',
      'Details elements work without JavaScript automatically'
    ],
    testCases: [
      { name: 'Has details elements', test: (code: string) => (code.match(/<details/g) || []).length >= 3, errorMessage: 'Must include at least 3 <details> elements' },
      { name: 'Has summary elements', test: (code: string) => (code.match(/<summary/g) || []).length >= 3, errorMessage: 'Must include at least 3 <summary> elements' },
      { name: 'Details closed properly', test: (code: string) => (code.match(/<details/g) || []).length === (code.match(/<\/details>/g) || []).length, errorMessage: 'All <details> tags must be properly closed' },
      { name: 'Summary in details', test: (code: string) => /<details[\s\S]*?<summary[\s\S]*?<\/summary>[\s\S]*?<\/details>/.test(code), errorMessage: 'Each <details> must contain a <summary>' },
      { name: 'One open by default', test: (code: string) => /<details[^>]*open/.test(code), errorMessage: 'At least one details element should have the open attribute' },
      { name: 'Has heading', test: (code: string) => code.includes('<h1>') || code.includes('<h2>'), errorMessage: 'Must include a heading for the page' }
    ]
  },
  {
    id: 'html-31',
    title: 'Progress and Meter Elements',
    description: 'Display progress bars and measurement gauges with native HTML',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Progress and Meter Elements

## Introduction
HTML provides two elements for showing values visually: \`<progress>\` for showing completion progress (like file uploads), and \`<meter>\` for displaying measurements within a known range (like disk usage or ratings). Both create native UI widgets without requiring CSS or JavaScript for basic functionality.

## The Elements

### \`<progress>\` - Progress Indicator
Shows task completion (0% to 100%):
\`\`\`html
<progress value="70" max="100">70%</progress>
\`\`\`

### \`<meter>\` - Gauge/Measurement
Displays a scalar measurement within a range:
\`\`\`html
<meter value="6" min="0" max="10">6 out of 10</meter>
\`\`\`

## Progress Element in Detail

### Basic Progress Bar
\`\`\`html
<label for="file-progress">Upload Progress:</label>
<progress id="file-progress" value="45" max="100">45%</progress>
\`\`\`

### Indeterminate Progress
Omit the \`value\` attribute for an indeterminate/loading state:
\`\`\`html
<progress max="100">Loading...</progress>
\`\`\`

### Multiple Progress Indicators
\`\`\`html
<div>
  <p>Step 1: <progress value="100" max="100"></progress> Complete</p>
  <p>Step 2: <progress value="60" max="100"></progress> In Progress</p>
  <p>Step 3: <progress value="0" max="100"></progress> Not Started</p>
</div>
\`\`\`

## Meter Element in Detail

### Basic Meter
\`\`\`html
<label for="disk-usage">Disk Usage:</label>
<meter id="disk-usage" value="75" min="0" max="100">75%</meter>
\`\`\`

### Meter with Thresholds
Use \`low\`, \`high\`, and \`optimum\` for color coding:
\`\`\`html
<meter value="85" min="0" max="100" low="30" high="70" optimum="50">
  85% (High)
</meter>
\`\`\`

## Your Task
Create a dashboard that:
1. Shows at least 2 \`<progress>\` elements with different values
2. Includes at least 2 \`<meter>\` elements
3. Uses labels to describe what each indicator measures
4. Demonstrates different value ranges
5. Includes proper headings and organization`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Status Dashboard</title>
  </head>
  <body>
    <h1>Dashboard</h1>
    
    <!-- Add progress indicators -->
    <p>Task 1: <progress value="50" max="100"></progress></p>
    
    <!-- Add meter gauges -->
    <p>Level: <meter value="7" min="0" max="10"></meter></p>
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Status Dashboard</title>
  </head>
  <body>
    <h1>Project Status Dashboard</h1>
    
    <article>
      <h2>Project Tasks</h2>
      <div>
        <p>
          <label for="design">UI Design:</label>
          <progress id="design" value="100" max="100">100%</progress>
          Complete
        </p>
        <p>
          <label for="backend">Backend Development:</label>
          <progress id="backend" value="65" max="100">65%</progress>
          In Progress
        </p>
        <p>
          <label for="testing">Testing:</label>
          <progress id="testing" value="30" max="100">30%</progress>
          Started
        </p>
      </div>
    </article>
    
    <article>
      <h2>System Resources</h2>
      <div>
        <p>
          <label for="cpu">CPU Usage:</label>
          <meter id="cpu" value="45" min="0" max="100" low="30" high="80">45%</meter>
        </p>
        <p>
          <label for="memory">Memory:</label>
          <meter id="memory" value="78" min="0" max="100" low="30" high="80">78%</meter>
        </p>
        <p>
          <label for="storage">Storage:</label>
          <meter id="storage" value="55" min="0" max="100" low="30" high="80">55%</meter>
        </p>
      </div>
    </article>
  </body>
</html>`,
    hints: [
      'Use <progress value="X" max="100"> for percentage completion',
      'Use <meter> for gauges and measurements',
      'Always include value and max attributes',
      'Add labels to describe what each indicator shows',
      'Include at least 2 progress and 2 meter elements',
      'Meter can have low, high, and optimum attributes for color zones',
      'The text between tags is fallback for old browsers'
    ],
    testCases: [
      { name: 'Has progress elements', test: (code: string) => (code.match(/<progress/g) || []).length >= 2, errorMessage: 'Must include at least 2 <progress> elements' },
      { name: 'Has meter elements', test: (code: string) => (code.match(/<meter/g) || []).length >= 2, errorMessage: 'Must include at least 2 <meter> elements' },
      { name: 'Progress has value', test: (code: string) => /<progress[^>]*value="[^"]+"/.test(code), errorMessage: 'Progress elements should have value attribute' },
      { name: 'Meter has value', test: (code: string) => /<meter[^>]*value="[^"]+"/.test(code), errorMessage: 'Meter elements should have value attribute' },
      { name: 'Elements closed', test: (code: string) => (code.match(/<progress/g) || []).length === (code.match(/<\/progress>/g) || []).length, errorMessage: 'All elements must be properly closed' },
      { name: 'Has labels or descriptions', test: (code: string) => code.includes('<label') || code.includes('<p>'), errorMessage: 'Include labels or text describing each indicator' },
      { name: 'Has heading', test: (code: string) => code.includes('<h1>') || code.includes('<h2>'), errorMessage: 'Must include headings' }
    ]
  },
  {
    id: 'html-32',
    title: 'Data Attributes - Custom Data',
    description: 'Store custom data in HTML elements with data-* attributes',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Data Attributes - Custom Data

## Introduction
HTML5 data attributes (\`data-*\`) allow you to store custom data directly on HTML elements. These are perfect for JavaScript interactions, storing metadata, or passing information to CSS. The asterisk (*) can be replaced with any valid attribute name.

## Why Use Data Attributes?
- **JavaScript Integration**: Easy access via JavaScript (\`dataset\` API)
- **Valid HTML**: Custom data without invalidating your HTML
- **CSS Hooks**: Can be used in CSS selectors and content
- **Metadata Storage**: Store info about elements without visual display

## Basic Syntax
\`\`\`html
<div data-user-id="12345" data-role="admin">User Info</div>
<button data-action="delete" data-confirm="true">Delete</button>
\`\`\`

## Common Use Cases

### Product Cards
\`\`\`html
<article class="product" data-product-id="ABC123" data-price="29.99" 
         data-category="electronics" data-stock="15">
  <h3>Wireless Mouse</h3>
  <p>Price: $29.99</p>
  <button data-action="add-to-cart">Add to Cart</button>
</article>
\`\`\`

### Configuration Data
\`\`\`html
<div class="gallery" data-autoplay="true" data-interval="3000" 
     data-transition="fade">
  <img src="image1.jpg" alt="Image 1">
  <img src="image2.jpg" alt="Image 2">
</div>
\`\`\`

### User Information
\`\`\`html
<div class="user-card" data-user-id="567" data-username="johndoe" 
     data-role="moderator" data-joined="2024-01-15">
  <h4>John Doe</h4>
  <p>Moderator since 2024</p>
</div>
\`\`\`

### Interactive Elements
\`\`\`html
<button data-modal-target="signup" data-modal-size="large">Sign Up</button>
<button data-modal-target="login" data-modal-size="small">Log In</button>
\`\`\`

## Accessing with JavaScript
\`\`\`html
<div id="user" data-user-id="123" data-user-name="Alice"></div>

<script>
  const user = document.getElementById('user');
  console.log(user.dataset.userId);    // "123"
  console.log(user.dataset.userName);  // "Alice"
</script>
\`\`\`

## Using in CSS
\`\`\`html
<style>
  [data-status="active"] { color: green; }
  [data-status="inactive"] { color: gray; }
  
  .badge::after {
    content: attr(data-count);
  }
</style>

<p data-status="active">Active User</p>
<span class="badge" data-count="5">Notifications</span>
\`\`\`

## Best Practices
- Use lowercase with hyphens: \`data-user-name\` not \`data-userName\`
- Don't store sensitive data (it's visible in HTML)
- Keep values simple (strings and numbers)
- Use semantic meaning in attribute names

## Your Task
Create a product catalog page that:
1. Has at least 3 product cards
2. Each product uses at least 3 data attributes (id, price, category)
3. Includes action buttons with data attributes
4. Uses data attributes meaningfully (not just random attributes)
5. Has proper semantic HTML structure`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Product Catalog</title>
  </head>
  <body>
    <h1>Products</h1>
    
    <!-- Add product cards with data attributes -->
    <article data-product-id="" data-price="" data-category="">
      <h2><!-- Product name --></h2>
      <p>Price: $<!-- price --></p>
      <button data-action="add-to-cart">Add to Cart</button>
    </article>
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Product Catalog</title>
  </head>
  <body>
    <h1>Electronics Store</h1>
    
    <section class="products">
      <article class="product" data-product-id="KB001" data-price="79.99" 
               data-category="accessories" data-stock="25">
        <h2>Mechanical Keyboard</h2>
        <p>Price: $79.99</p>
        <p>In Stock: 25</p>
        <button data-action="add-to-cart" data-product-id="KB001">Add to Cart</button>
        <button data-action="wishlist" data-product-id="KB001">Add to Wishlist</button>
      </article>
      
      <article class="product" data-product-id="MS002" data-price="49.99" 
               data-category="accessories" data-stock="50">
        <h2>Wireless Mouse</h2>
        <p>Price: $49.99</p>
        <p>In Stock: 50</p>
        <button data-action="add-to-cart" data-product-id="MS002">Add to Cart</button>
        <button data-action="wishlist" data-product-id="MS002">Add to Wishlist</button>
      </article>
      
      <article class="product" data-product-id="HD003" data-price="129.99" 
               data-category="audio" data-stock="15" data-featured="true">
        <h2>Premium Headphones</h2>
        <p>Price: $129.99</p>
        <p>In Stock: 15</p>
        <span data-badge="featured">Featured Product</span>
        <button data-action="add-to-cart" data-product-id="HD003">Add to Cart</button>
        <button data-action="wishlist" data-product-id="HD003">Add to Wishlist</button>
      </article>
    </section>
  </body>
</html>`,
    hints: [
      'Data attributes start with data- followed by your custom name',
      'Use descriptive names: data-product-id, data-price, data-category',
      'Values are strings, so numbers need quotes: data-price="29.99"',
      'You can have multiple data attributes on one element',
      'Include at least 3 products, each with at least 3 data attributes',
      'Buttons can also have data attributes for actions',
      'Common attributes: data-id, data-status, data-type, data-value'
    ],
    testCases: [
      { name: 'Has data attributes', test: (code: string) => (code.match(/data-[a-z-]+="[^"]*"/g) || []).length >= 9, errorMessage: 'Must include at least 9 data attributes (3 products × 3 attributes each)' },
      { name: 'Has data-product-id', test: (code: string) => (code.match(/data-product-id="[^"]+"/g) || []).length >= 3, errorMessage: 'Each product should have a data-product-id attribute' },
      { name: 'Has data-price', test: (code: string) => (code.match(/data-price="[^"]+"/g) || []).length >= 3, errorMessage: 'Each product should have a data-price attribute' },
      { name: 'Has data-category', test: (code: string) => (code.match(/data-category="[^"]+"/g) || []).length >= 3, errorMessage: 'Each product should have a data-category attribute' },
      { name: 'Has multiple products', test: (code: string) => (code.match(/<article/g) || []).length >= 3 || (code.match(/<div[^>]*class="product"/g) || []).length >= 3, errorMessage: 'Must include at least 3 product elements' },
      { name: 'Has buttons with data', test: (code: string) => /<button[^>]*data-[a-z-]+="[^"]*"/.test(code), errorMessage: 'Buttons should have data attributes for actions' },
      { name: 'Has heading', test: (code: string) => code.includes('<h1>') || code.includes('<h2>'), errorMessage: 'Must include headings' }
    ]
  },
  {
    id: 'html-33',
    title: 'Accessibility - ARIA',
    description: 'Master ARIA attributes for enhanced accessibility',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Accessibility - ARIA Attributes

## Introduction to ARIA
ARIA (Accessible Rich Internet Applications) provides additional semantics to make web content more accessible to people using assistive technologies like screen readers.

## Key ARIA Attributes

### Role Attributes
- **role="navigation"** - Identifies navigation regions
- **role="banner"** - Page header/banner
- **role="main"** - Main content area
- **role="complementary"** - Supporting content
- **role="contentinfo"** - Footer information

### State & Property Attributes
- **aria-label** - Provides accessible name
- **aria-labelledby** - References another element for labeling
- **aria-describedby** - References descriptive text
- **aria-hidden** - Hides content from screen readers
- **aria-expanded** - Indicates if element is expanded/collapsed
- **aria-live** - Announces dynamic content changes

## When to Use ARIA
1. When semantic HTML isn't sufficient
2. For dynamic/interactive widgets
3. To provide additional context
4. **Important**: Don't use ARIA when semantic HTML works!

## Example:
\`\`\`html
<button aria-label="Close dialog" aria-expanded="true">
  <span aria-hidden="true">×</span>
</button>

<div role="alert" aria-live="polite">
  Form submitted successfully!
</div>
\`\`\`

## Your Task:
Create an accessible navigation menu and alert system using ARIA attributes:
1. Navigation with proper ARIA role and label
2. Expandable menu button with aria-expanded
3. Live region for notifications
4. Hidden decorative icons`,
    initialCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>ARIA Examples</title>
  </head>
  <body>
    <!-- Create a navigation with role and aria-label -->
    <nav>
      <button>Menu ☰</button>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    
    <!-- Create a live region for alerts -->
    <div>
      <p>Welcome to our website!</p>
    </div>
    
    <!-- Create a button with aria-label for icon -->
    <button>
      <span>❌</span>
    </button>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>ARIA Examples</title>
  </head>
  <body>
    <!-- Navigation with ARIA -->
    <nav role="navigation" aria-label="Main navigation">
      <button aria-expanded="false" aria-controls="nav-menu">
        Menu <span aria-hidden="true">☰</span>
      </button>
      <ul id="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    
    <!-- Live region for dynamic alerts -->
    <div role="alert" aria-live="polite" aria-atomic="true">
      <p>Welcome to our website!</p>
    </div>
    
    <!-- Button with accessible label -->
    <button aria-label="Close notification">
      <span aria-hidden="true">❌</span>
    </button>
    
    <!-- Status message -->
    <div role="status" aria-live="polite">
      <p>3 new messages</p>
    </div>
  </body>
</html>`,
    hints: [
      'Use role="navigation" on the nav element for explicit semantics',
      'Add aria-label to provide accessible names for navigation regions',
      'Use aria-expanded on buttons that control expandable content',
      'aria-controls should reference the ID of the controlled element',
      'Set aria-hidden="true" on decorative icons that shouldn\'t be read',
      'role="alert" creates a live region for important messages',
      'aria-live="polite" announces changes without interrupting'
    ],
    testCases: [
      { name: 'Has nav with role', test: (code: string) => code.includes('<nav') && code.includes('role="navigation"'), errorMessage: 'Navigation must have role="navigation"' },
      { name: 'Has aria-label', test: (code: string) => code.includes('aria-label='), errorMessage: 'Must include aria-label attribute' },
      { name: 'Has aria-expanded', test: (code: string) => code.includes('aria-expanded='), errorMessage: 'Button must have aria-expanded attribute' },
      { name: 'Has aria-hidden', test: (code: string) => code.includes('aria-hidden="true"'), errorMessage: 'Decorative icons should have aria-hidden="true"' },
      { name: 'Has live region', test: (code: string) => code.includes('aria-live='), errorMessage: 'Must include aria-live for dynamic content' },
      { name: 'Has role alert or status', test: (code: string) => code.includes('role="alert"') || code.includes('role="status"'), errorMessage: 'Must include role="alert" or role="status"' }
    ]
  },
  {
    id: 'html-34',
    title: 'Meta Tags - SEO Optimization',
    description: 'Master meta tags for search engine optimization',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Meta Tags for SEO

## Introduction to SEO Meta Tags
Meta tags provide metadata about your HTML document and are crucial for search engine optimization (SEO). They help search engines understand your content and can significantly impact your site's visibility.

## Essential SEO Meta Tags

### 1. Title Tag
\`\`\`html
<title>Your Page Title - Brand Name</title>
\`\`\`
- Most important SEO element
- Keep it under 60 characters
- Include primary keyword

### 2. Meta Description
\`\`\`html
<meta name="description" content="A compelling 150-160 character description">
\`\`\`
- Appears in search results
- Should be unique for each page
- Include call-to-action

### 3. Charset & Viewport
\`\`\`html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

### 4. Keywords (Less Important Now)
\`\`\`html
<meta name="keywords" content="web development, HTML, SEO">
\`\`\`

### 5. Author & Copyright
\`\`\`html
<meta name="author" content="John Doe">
<meta name="copyright" content="Company Name">
\`\`\`

### 6. Robots Instructions
\`\`\`html
<meta name="robots" content="index, follow">
\`\`\`
- index/noindex - Should search engines index this page?
- follow/nofollow - Should they follow links?

## Best Practices
1. Every page should have unique title and description
2. Include target keywords naturally
3. Write for humans, not just search engines
4. Keep titles under 60 characters
5. Keep descriptions under 160 characters

## Your Task:
Create a complete SEO-optimized head section for a blog post about web development with all essential meta tags.`,
    initialCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Add charset meta tag -->
    
    <!-- Add viewport meta tag -->
    
    <!-- Add a compelling title (under 60 chars) -->
    
    <!-- Add meta description (under 160 chars) -->
    
    <!-- Add keywords meta tag -->
    
    <!-- Add author meta tag -->
    
    <!-- Add robots meta tag -->
    
  </head>
  <body>
    <h1>My Blog Post</h1>
    <p>Content goes here...</p>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learn HTML5 Basics - Complete Beginner's Guide | WebDev Blog</title>
    <meta name="description" content="Master HTML5 fundamentals with our comprehensive beginner's guide. Learn tags, elements, and best practices to build your first website today.">
    <meta name="keywords" content="HTML5, web development, beginner tutorial, HTML basics, learn coding">
    <meta name="author" content="Jane Smith">
    <meta name="robots" content="index, follow">
    <meta name="language" content="English">
    <link rel="canonical" href="https://example.com/learn-html5-basics">
  </head>
  <body>
    <article>
      <h1>Learn HTML5 Basics - Complete Beginner's Guide</h1>
      <p>Welcome to our comprehensive guide on HTML5 fundamentals...</p>
    </article>
  </body>
</html>`,
    hints: [
      'Start with charset UTF-8 as the very first meta tag',
      'Viewport meta tag is essential for mobile responsiveness',
      'Title should be descriptive and include primary keyword',
      'Meta description should summarize the page in 150-160 characters',
      'Use robots content="index, follow" to allow search engine crawling',
      'Include keywords meta tag with comma-separated relevant terms',
      'Add canonical link to specify preferred URL version'
    ],
    testCases: [
      { name: 'Has charset meta', test: (code: string) => code.includes('<meta charset="UTF-8">'), errorMessage: 'Must include charset UTF-8 meta tag' },
      { name: 'Has viewport meta', test: (code: string) => code.includes('name="viewport"'), errorMessage: 'Must include viewport meta tag' },
      { name: 'Has title tag', test: (code: string) => code.includes('<title>') && code.includes('</title>'), errorMessage: 'Must include title tag' },
      { name: 'Has meta description', test: (code: string) => code.includes('name="description"') && code.includes('content='), errorMessage: 'Must include meta description' },
      { name: 'Has meta keywords', test: (code: string) => code.includes('name="keywords"'), errorMessage: 'Must include meta keywords tag' },
      { name: 'Has meta author', test: (code: string) => code.includes('name="author"'), errorMessage: 'Must include meta author tag' },
      { name: 'Has robots meta', test: (code: string) => code.includes('name="robots"'), errorMessage: 'Must include robots meta tag' }
    ]
  },
  {
    id: 'html-35',
    title: 'Meta Tags - Social Media (Open Graph & Twitter Cards)',
    description: 'Master Open Graph and Twitter Card meta tags for social sharing',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Meta Tags for Social Media

## Introduction to Social Meta Tags
When you share a link on Facebook, Twitter, or LinkedIn, special meta tags control how your content appears. These tags create rich previews with images, titles, and descriptions.

## Open Graph Protocol (Facebook, LinkedIn)

Open Graph tags were created by Facebook and are now used widely:

### Essential OG Tags
\`\`\`html
<meta property="og:title" content="Your Page Title">
<meta property="og:description" content="Page description">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:url" content="https://example.com/page">
<meta property="og:type" content="website">
\`\`\`

### Additional OG Tags
\`\`\`html
<meta property="og:site_name" content="Your Site Name">
<meta property="og:locale" content="en_US">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
\`\`\`

## Twitter Card Tags

Twitter has its own meta tags for card previews:

### Twitter Card Types
\`\`\`html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@yourusername">
<meta name="twitter:creator" content="@authorname">
<meta name="twitter:title" content="Your Title">
<meta name="twitter:description" content="Description">
<meta name="twitter:image" content="https://example.com/image.jpg">
\`\`\`

### Card Types:
- **summary** - Small card with thumbnail
- **summary_large_image** - Large card with prominent image
- **app** - Mobile app download card
- **player** - Video/audio player card

## Image Best Practices
- **Facebook/OG**: 1200×630 pixels (1.91:1 ratio)
- **Twitter**: 1200×600 pixels (2:1 ratio)
- Use JPEG or PNG format
- Keep file size under 5MB
- Use absolute URLs

## Your Task:
Create a complete set of social media meta tags for a blog article that will look great when shared on Facebook, Twitter, and LinkedIn.`,
    initialCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Amazing Web Development Tips</title>
    
    <!-- Add Open Graph meta tags -->
    
    
    <!-- Add Twitter Card meta tags -->
    
    
  </head>
  <body>
    <article>
      <h1>10 Essential Web Development Tips</h1>
      <p>Boost your coding skills with these proven techniques...</p>
    </article>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>10 Essential Web Development Tips - DevMaster Blog</title>
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://devmaster.com/web-dev-tips">
    <meta property="og:title" content="10 Essential Web Development Tips">
    <meta property="og:description" content="Boost your coding skills with these proven techniques from industry experts. Learn HTML, CSS, and JavaScript best practices.">
    <meta property="og:image" content="https://devmaster.com/images/web-dev-tips.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:site_name" content="DevMaster Blog">
    <meta property="og:locale" content="en_US">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@devmaster">
    <meta name="twitter:creator" content="@johndoe">
    <meta name="twitter:title" content="10 Essential Web Development Tips">
    <meta name="twitter:description" content="Boost your coding skills with these proven techniques from industry experts.">
    <meta name="twitter:image" content="https://devmaster.com/images/web-dev-tips.jpg">
  </head>
  <body>
    <article>
      <h1>10 Essential Web Development Tips</h1>
      <p>Boost your coding skills with these proven techniques...</p>
    </article>
  </body>
</html>`,
    hints: [
      'Use property="og:..." for Open Graph tags (not name=)',
      'Use name="twitter:..." for Twitter Card tags',
      'og:image and twitter:image should be absolute URLs (https://...)',
      'Include both og:title and twitter:title even if they\'re the same',
      'twitter:card value should be "summary_large_image" for big preview',
      'og:type should be "article" for blog posts, "website" for pages',
      'Include image dimensions with og:image:width and og:image:height'
    ],
    testCases: [
      { name: 'Has OG title', test: (code: string) => code.includes('property="og:title"'), errorMessage: 'Must include og:title meta tag' },
      { name: 'Has OG description', test: (code: string) => code.includes('property="og:description"'), errorMessage: 'Must include og:description meta tag' },
      { name: 'Has OG image', test: (code: string) => code.includes('property="og:image"'), errorMessage: 'Must include og:image meta tag' },
      { name: 'Has OG URL', test: (code: string) => code.includes('property="og:url"'), errorMessage: 'Must include og:url meta tag' },
      { name: 'Has Twitter card', test: (code: string) => code.includes('name="twitter:card"'), errorMessage: 'Must include twitter:card meta tag' },
      { name: 'Has Twitter image', test: (code: string) => code.includes('name="twitter:image"'), errorMessage: 'Must include twitter:image meta tag' },
      { name: 'Has Twitter title', test: (code: string) => code.includes('name="twitter:title"'), errorMessage: 'Must include twitter:title meta tag' }
    ]
  },
  {
    id: 'html-36',
    title: 'Link Relationships (rel attribute)',
    description: 'Master the rel attribute for defining link relationships',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Link Relationships - The rel Attribute

## Introduction to Link Relationships
The \`rel\` attribute defines the relationship between the current document and the linked resource. It's crucial for SEO, performance, and security.

## Common rel Values for <link> Tags

### 1. Stylesheets
\`\`\`html
<link rel="stylesheet" href="styles.css">
\`\`\`

### 2. Icons
\`\`\`html
<link rel="icon" href="favicon.ico">
<link rel="apple-touch-icon" href="icon.png">
\`\`\`

### 3. Preloading Resources
\`\`\`html
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://cdn.example.com">
\`\`\`

### 4. Canonical URL
\`\`\`html
<link rel="canonical" href="https://example.com/page">
\`\`\`

### 5. Alternate Versions
\`\`\`html
<link rel="alternate" hreflang="es" href="https://example.com/es">
<link rel="alternate" type="application/rss+xml" href="feed.xml">
\`\`\`

## Common rel Values for <a> Tags

### 1. External Links
\`\`\`html
<a href="https://external.com" rel="external">External Site</a>
\`\`\`

### 2. Nofollow (SEO)
\`\`\`html
<a href="untrusted.com" rel="nofollow">Don't pass SEO value</a>
\`\`\`

### 3. Noopener/Noreferrer (Security)
\`\`\`html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Safe external link
</a>
\`\`\`

### 4. Navigation
\`\`\`html
<a href="page2.html" rel="next">Next Page</a>
<a href="page1.html" rel="prev">Previous Page</a>
\`\`\`

### 5. Author/License
\`\`\`html
<a href="/author" rel="author">About the Author</a>
<a href="/license" rel="license">License Info</a>
\`\`\`

## Performance rel Values
- **preload** - High priority resource needed soon
- **prefetch** - Low priority resource for next navigation
- **preconnect** - Establish early connection to domain
- **dns-prefetch** - Resolve DNS early

## Security Best Practice
Always use \`rel="noopener noreferrer"\` on external links with \`target="_blank"\` to prevent security vulnerabilities.

## Your Task:
Create a complete HTML head section with various link relationships including stylesheet, favicon, preconnect, and canonical URL.`,
    initialCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Link Relationships Example</title>
    
    <!-- Add stylesheet link -->
    
    <!-- Add favicon link -->
    
    <!-- Add preconnect for Google Fonts -->
    
    <!-- Add canonical URL -->
    
  </head>
  <body>
    <h1>Understanding Link Relationships</h1>
    
    <!-- Add external link with proper rel -->
    <p>Visit <a href="https://example.com">Example Site</a></p>
    
    <!-- Add navigation links -->
    <nav>
      <a href="page1.html">Previous</a>
      <a href="page3.html">Next</a>
    </nav>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Link Relationships Example</title>
    
    <!-- Stylesheet -->
    <link rel="stylesheet" href="styles.css">
    
    <!-- Favicons -->
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="apple-touch-icon" href="apple-touch-icon.png">
    
    <!-- Performance optimization -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="dns-prefetch" href="https://cdn.example.com">
    <link rel="preload" href="main.js" as="script">
    
    <!-- SEO -->
    <link rel="canonical" href="https://example.com/page">
    <link rel="alternate" hreflang="es" href="https://example.com/es/page">
  </head>
  <body>
    <h1>Understanding Link Relationships</h1>
    
    <!-- External link with security -->
    <p>Visit <a href="https://example.com" target="_blank" rel="noopener noreferrer external">Example Site</a></p>
    
    <!-- Navigation with rel -->
    <nav>
      <a href="page1.html" rel="prev">Previous Article</a>
      <a href="page3.html" rel="next">Next Article</a>
    </nav>
    
    <!-- Author and license -->
    <footer>
      <a href="/author" rel="author">About the Author</a>
      <a href="/license" rel="license">License Information</a>
    </footer>
  </body>
</html>`,
    hints: [
      'Use rel="stylesheet" for CSS files',
      'Use rel="icon" for favicons',
      'Use rel="preconnect" to establish early connections to external domains',
      'Use rel="canonical" to specify the preferred URL for SEO',
      'Always add rel="noopener noreferrer" to external links with target="_blank"',
      'Use rel="prev" and rel="next" for pagination navigation',
      'Multiple rel values can be space-separated: rel="noopener noreferrer external"'
    ],
    testCases: [
      { name: 'Has stylesheet link', test: (code: string) => code.includes('rel="stylesheet"'), errorMessage: 'Must include stylesheet link with rel="stylesheet"' },
      { name: 'Has favicon link', test: (code: string) => code.includes('rel="icon"'), errorMessage: 'Must include favicon with rel="icon"' },
      { name: 'Has preconnect', test: (code: string) => code.includes('rel="preconnect"'), errorMessage: 'Must include preconnect for performance' },
      { name: 'Has canonical URL', test: (code: string) => code.includes('rel="canonical"'), errorMessage: 'Must include canonical URL' },
      { name: 'Has noopener noreferrer', test: (code: string) => code.includes('noopener') && code.includes('noreferrer'), errorMessage: 'External links should have noopener noreferrer' },
      { name: 'Has navigation rel', test: (code: string) => code.includes('rel="prev"') || code.includes('rel="next"'), errorMessage: 'Should include prev or next rel for navigation' }
    ]
  },
  {
    id: 'html-37',
    title: 'Microdata Basics (Schema.org)',
    description: 'Master structured data with Schema.org microdata',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Microdata and Schema.org

## Introduction to Microdata
Microdata is a specification to nest structured data within HTML content. It helps search engines understand your content better, leading to rich snippets in search results.

## Key Microdata Attributes

### itemscope
Defines the scope of a new item:
\`\`\`html
<div itemscope itemtype="https://schema.org/Person">
  <!-- Person data here -->
</div>
\`\`\`

### itemtype
Specifies the type of item (from schema.org):
- Person
- Product
- Recipe
- Event
- Article
- Organization
- And many more...

### itemprop
Defines properties of the item:
\`\`\`html
<span itemprop="name">John Doe</span>
<span itemprop="jobTitle">Web Developer</span>
\`\`\`

## Common Schema Types

### Person
\`\`\`html
<div itemscope itemtype="https://schema.org/Person">
  <span itemprop="name">Jane Smith</span>
  <span itemprop="jobTitle">Software Engineer</span>
  <a itemprop="email" href="mailto:jane@example.com">Email</a>
</div>
\`\`\`

### Product
\`\`\`html
<div itemscope itemtype="https://schema.org/Product">
  <span itemprop="name">Laptop Pro</span>
  <span itemprop="price" content="999.99">$999.99</span>
  <span itemprop="brand">TechBrand</span>
</div>
\`\`\`

### Article
\`\`\`html
<article itemscope itemtype="https://schema.org/Article">
  <h1 itemprop="headline">How to Learn HTML</h1>
  <span itemprop="author">John Doe</span>
  <time itemprop="datePublished" datetime="2024-01-15">Jan 15, 2024</time>
</article>
\`\`\`

### Recipe
\`\`\`html
<div itemscope itemtype="https://schema.org/Recipe">
  <span itemprop="name">Chocolate Cake</span>
  <span itemprop="recipeYield">8 servings</span>
  <span itemprop="cookTime" content="PT30M">30 minutes</span>
</div>
\`\`\`

## Benefits of Microdata
1. **Rich Snippets** - Enhanced search results with images, ratings, prices
2. **Better SEO** - Search engines understand content context
3. **Voice Search** - Helps virtual assistants find information
4. **Knowledge Graph** - Your data can appear in Google's Knowledge Panel

## Testing Microdata
Use Google's Rich Results Test: https://search.google.com/test/rich-results

## Your Task:
Create a person profile and product card using proper Schema.org microdata attributes.`,
    initialCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Microdata Examples</title>
  </head>
  <body>
    <h1>Structured Data Examples</h1>
    
    <!-- Create a Person with microdata -->
    <div>
      <h2>Sarah Johnson</h2>
      <p>Senior Web Developer at TechCorp</p>
      <p>Email: sarah@techcorp.com</p>
    </div>
    
    <!-- Create a Product with microdata -->
    <div>
      <h3>Wireless Headphones</h3>
      <p>Price: $149.99</p>
      <p>Brand: AudioPro</p>
    </div>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Microdata Examples</title>
  </head>
  <body>
    <h1>Structured Data Examples</h1>
    
    <!-- Person with Schema.org microdata -->
    <div itemscope itemtype="https://schema.org/Person">
      <h2 itemprop="name">Sarah Johnson</h2>
      <p>
        <span itemprop="jobTitle">Senior Web Developer</span> at 
        <span itemprop="worksFor" itemscope itemtype="https://schema.org/Organization">
          <span itemprop="name">TechCorp</span>
        </span>
      </p>
      <p>Email: <a itemprop="email" href="mailto:sarah@techcorp.com">sarah@techcorp.com</a></p>
      <p itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
        <span itemprop="addressLocality">San Francisco</span>,
        <span itemprop="addressRegion">CA</span>
      </p>
    </div>
    
    <!-- Product with Schema.org microdata -->
    <div itemscope itemtype="https://schema.org/Product">
      <h3 itemprop="name">Wireless Headphones</h3>
      <img itemprop="image" src="headphones.jpg" alt="Wireless Headphones">
      <p>Price: <span itemprop="price" content="149.99">$149.99</span></p>
      <p>Brand: <span itemprop="brand">AudioPro</span></p>
      <p itemprop="description">Premium noise-canceling wireless headphones with 30-hour battery life.</p>
      <div itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
        Rating: <span itemprop="ratingValue">4.5</span> out of 
        <span itemprop="bestRating">5</span> based on 
        <span itemprop="reviewCount">89</span> reviews
      </div>
    </div>
  </body>
</html>`,
    hints: [
      'Use itemscope to define the scope of an item',
      'itemtype should be a full Schema.org URL like "https://schema.org/Person"',
      'Use itemprop on elements to define properties like name, price, email',
      'Nested items (like Organization within Person) need their own itemscope',
      'For prices, use content attribute for machine-readable value',
      'Common Person properties: name, jobTitle, email, address, worksFor',
      'Common Product properties: name, price, brand, description, image'
    ],
    testCases: [
      { name: 'Has itemscope', test: (code: string) => code.includes('itemscope'), errorMessage: 'Must include itemscope attribute' },
      { name: 'Has itemtype', test: (code: string) => code.includes('itemtype="https://schema.org/'), errorMessage: 'Must include itemtype with Schema.org URL' },
      { name: 'Has Person type', test: (code: string) => code.includes('schema.org/Person'), errorMessage: 'Must include Person schema type' },
      { name: 'Has Product type', test: (code: string) => code.includes('schema.org/Product'), errorMessage: 'Must include Product schema type' },
      { name: 'Has itemprop name', test: (code: string) => code.includes('itemprop="name"'), errorMessage: 'Must use itemprop="name" for names' },
      { name: 'Has itemprop price', test: (code: string) => code.includes('itemprop="price"'), errorMessage: 'Product must have itemprop="price"' },
      { name: 'Multiple itemprops', test: (code: string) => (code.match(/itemprop=/g) || []).length >= 5, errorMessage: 'Should have at least 5 different item properties' }
    ]
  },
  {
    id: 'html-38',
    title: 'Canvas Element - Drawing Graphics',
    description: 'Master the HTML5 Canvas element for dynamic graphics',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# HTML5 Canvas Element

## Introduction to Canvas
The \`<canvas>\` element provides a bitmap surface for drawing graphics using JavaScript. It's perfect for charts, games, animations, and image manipulation.

## Basic Canvas Setup
\`\`\`html
<canvas id="myCanvas" width="400" height="300">
  Your browser doesn't support canvas.
</canvas>
\`\`\`

## Canvas Context
You need JavaScript to draw on canvas:
\`\`\`javascript
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
\`\`\`

## Drawing Shapes

### Rectangles
\`\`\`javascript
ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 100, 50);  // x, y, width, height
ctx.strokeRect(120, 10, 100, 50);  // outline only
\`\`\`

### Paths & Lines
\`\`\`javascript
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(100, 100);
ctx.closePath();
ctx.stroke();  // or ctx.fill()
\`\`\`

### Circles & Arcs
\`\`\`javascript
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);  // x, y, radius, startAngle, endAngle
ctx.fill();
\`\`\`

### Text
\`\`\`javascript
ctx.font = '30px Arial';
ctx.fillText('Hello Canvas!', 10, 50);
ctx.strokeText('Outlined Text', 10, 100);
\`\`\`

## Styling
\`\`\`javascript
ctx.fillStyle = '#FF0000';      // Fill color
ctx.strokeStyle = 'green';      // Stroke color
ctx.lineWidth = 5;              // Line thickness
ctx.globalAlpha = 0.5;          // Transparency
\`\`\`

## Common Use Cases
1. **Data Visualization** - Charts and graphs
2. **Games** - 2D game graphics
3. **Image Editing** - Filters and manipulation
4. **Animations** - Dynamic visual effects
5. **Signatures** - Capture signatures

## Canvas vs SVG
- **Canvas**: Bitmap, better for pixel manipulation and animations
- **SVG**: Vector, better for scalable graphics and interactive elements

## Your Task:
Create a canvas element with inline JavaScript that draws a simple scene with rectangles, circles, and text.`,
    initialCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Canvas Drawing</title>
  </head>
  <body>
    <h1>My Canvas Drawing</h1>
    
    <!-- Create a canvas element (400x300) -->
    <canvas id="myCanvas" width="400" height="300" style="border: 1px solid black;">
      Canvas not supported
    </canvas>
    
    <script>
      // Get the canvas and context
      const canvas = document.getElementById('myCanvas');
      const ctx = canvas.getContext('2d');
      
      // TODO: Draw a blue rectangle
      
      // TODO: Draw a red circle
      
      // TODO: Add some text
      
    </script>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Canvas Drawing - Simple Scene</title>
  </head>
  <body>
    <h1>My Canvas Drawing</h1>
    
    <canvas id="myCanvas" width="400" height="300" style="border: 1px solid black;">
      Your browser doesn't support the HTML5 canvas element.
    </canvas>
    
    <script>
      const canvas = document.getElementById('myCanvas');
      const ctx = canvas.getContext('2d');
      
      // Draw sky background
      ctx.fillStyle = '#87CEEB';
      ctx.fillRect(0, 0, 400, 200);
      
      // Draw ground
      ctx.fillStyle = '#90EE90';
      ctx.fillRect(0, 200, 400, 100);
      
      // Draw sun
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.arc(350, 50, 30, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw house
      ctx.fillStyle = '#8B4513';
      ctx.fillRect(100, 150, 120, 100);
      
      // Draw roof
      ctx.fillStyle = '#A52A2A';
      ctx.beginPath();
      ctx.moveTo(90, 150);
      ctx.lineTo(160, 100);
      ctx.lineTo(230, 150);
      ctx.closePath();
      ctx.fill();
      
      // Draw door
      ctx.fillStyle = '#654321';
      ctx.fillRect(140, 190, 40, 60);
      
      // Draw window
      ctx.fillStyle = '#ADD8E6';
      ctx.fillRect(120, 170, 30, 30);
      ctx.fillRect(170, 170, 30, 30);
      
      // Add text
      ctx.fillStyle = '#000000';
      ctx.font = '20px Arial';
      ctx.fillText('My House', 140, 280);
    </script>
  </body>
</html>`,
    hints: [
      'Canvas element needs width and height attributes (not CSS)',
      'Get the 2D context with canvas.getContext(\'2d\')',
      'Set fillStyle before drawing filled shapes',
      'Use fillRect(x, y, width, height) to draw rectangles',
      'For circles, use beginPath(), arc(), and fill()',
      'arc() parameters: x, y, radius, startAngle (0), endAngle (Math.PI * 2)',
      'Use fillText(text, x, y) to draw text on canvas'
    ],
    testCases: [
      { name: 'Has canvas element', test: (code: string) => code.includes('<canvas') && code.includes('</canvas>'), errorMessage: 'Must include canvas element' },
      { name: 'Canvas has ID', test: (code: string) => code.includes('id="myCanvas"') || code.includes("id='myCanvas'"), errorMessage: 'Canvas must have id="myCanvas"' },
      { name: 'Canvas has dimensions', test: (code: string) => code.includes('width=') && code.includes('height='), errorMessage: 'Canvas must have width and height attributes' },
      { name: 'Gets 2D context', test: (code: string) => code.includes("getContext('2d')") || code.includes('getContext("2d")'), errorMessage: 'Must get 2D context from canvas' },
      { name: 'Draws shapes', test: (code: string) => code.includes('fillRect') || code.includes('arc'), errorMessage: 'Must draw at least one shape (fillRect or arc)' },
      { name: 'Has script tag', test: (code: string) => code.includes('<script>') && code.includes('</script>'), errorMessage: 'Must include script tag for drawing code' }
    ]
  },
  {
    id: 'html-39',
    title: 'SVG Graphics - Scalable Vector Graphics',
    description: 'Master inline SVG for scalable, crisp graphics',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# SVG - Scalable Vector Graphics

## Introduction to SVG
SVG (Scalable Vector Graphics) is an XML-based vector image format. Unlike raster images (PNG, JPG), SVG graphics stay crisp at any size and are perfect for logos, icons, and illustrations.

## Basic SVG Structure
\`\`\`html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <!-- SVG shapes go here -->
</svg>
\`\`\`

## SVG Basic Shapes

### Rectangle
\`\`\`html
<rect x="10" y="10" width="100" height="50" fill="blue" />
\`\`\`

### Circle
\`\`\`html
<circle cx="100" cy="100" r="50" fill="red" />
\`\`\`

### Ellipse
\`\`\`html
<ellipse cx="100" cy="100" rx="80" ry="50" fill="green" />
\`\`\`

### Line
\`\`\`html
<line x1="0" y1="0" x2="200" y2="200" stroke="black" stroke-width="2" />
\`\`\`

### Polyline & Polygon
\`\`\`html
<polyline points="10,10 50,50 10,90" fill="none" stroke="blue" />
<polygon points="100,10 150,100 50,100" fill="yellow" />
\`\`\`

### Path (Most Powerful)
\`\`\`html
<path d="M 10 10 L 50 50 L 10 90" stroke="black" fill="none" />
\`\`\`

## SVG Text
\`\`\`html
<text x="10" y="50" font-family="Arial" font-size="20" fill="black">
  Hello SVG!
</text>
\`\`\`

## SVG Styling
\`\`\`html
<circle cx="50" cy="50" r="40" 
  fill="lightblue" 
  stroke="navy" 
  stroke-width="3" 
  opacity="0.7" />
\`\`\`

## SVG Groups
\`\`\`html
<g id="house" transform="translate(50,50)">
  <rect width="60" height="60" fill="brown" />
  <polygon points="0,0 30,-30 60,0" fill="red" />
</g>
\`\`\`

## Advantages of SVG
1. **Scalable** - Perfect at any size
2. **Small File Size** - Text-based, compresses well
3. **Accessible** - Text can be selected, searchable
4. **Animatable** - CSS and JavaScript animations
5. **SEO Friendly** - Text content is indexable

## SVG vs Canvas
- **SVG**: Vector, DOM-based, better for static graphics and logos
- **Canvas**: Bitmap, pixel-based, better for games and complex animations

## Your Task:
Create an inline SVG image with multiple shapes (rectangles, circles, text) to draw a simple icon or illustration.`,
    initialCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>SVG Graphics</title>
  </head>
  <body>
    <h1>My SVG Graphics</h1>
    
    <!-- Create an SVG element (300x300) -->
    <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg" style="border: 1px solid black;">
      <!-- TODO: Draw a rectangle -->
      
      <!-- TODO: Draw a circle -->
      
      <!-- TODO: Add some text -->
      
    </svg>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SVG Graphics - Smiley Face</title>
  </head>
  <body>
    <h1>My SVG Graphics</h1>
    
    <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg" style="border: 1px solid #ccc;">
      <!-- Background -->
      <rect width="300" height="300" fill="#f0f0f0" />
      
      <!-- Face (yellow circle) -->
      <circle cx="150" cy="150" r="100" fill="#FFD700" stroke="#FFA500" stroke-width="3" />
      
      <!-- Left eye -->
      <circle cx="120" cy="130" r="10" fill="#000" />
      
      <!-- Right eye -->
      <circle cx="180" cy="130" r="10" fill="#000" />
      
      <!-- Smile (arc path) -->
      <path d="M 100 160 Q 150 200 200 160" stroke="#000" stroke-width="4" fill="none" stroke-linecap="round" />
      
      <!-- Text -->
      <text x="150" y="260" font-family="Arial" font-size="24" fill="#333" text-anchor="middle">
        Happy Face!
      </text>
      
      <!-- Decorative star -->
      <polygon points="250,30 260,50 280,50 265,65 270,85 250,70 230,85 235,65 220,50 240,50" fill="#FFD700" />
    </svg>
    
    <p>SVG graphics scale perfectly at any size!</p>
  </body>
</html>`,
    hints: [
      'SVG element needs width, height, and xmlns="http://www.w3.org/2000/svg"',
      'Use <rect> with x, y, width, height attributes',
      'Use <circle> with cx (center x), cy (center y), and r (radius)',
      'Set fill attribute to color shapes',
      'Use stroke and stroke-width for outlines',
      'Use <text> with x, y for positioning text',
      'text-anchor="middle" centers text at x coordinate'
    ],
    testCases: [
      { name: 'Has SVG element', test: (code: string) => code.includes('<svg') && code.includes('</svg>'), errorMessage: 'Must include SVG element' },
      { name: 'SVG has dimensions', test: (code: string) => code.includes('width=') && code.includes('height='), errorMessage: 'SVG must have width and height' },
      { name: 'Has xmlns', test: (code: string) => code.includes('xmlns="http://www.w3.org/2000/svg"'), errorMessage: 'SVG must have xmlns attribute' },
      { name: 'Has circle', test: (code: string) => code.includes('<circle'), errorMessage: 'Must include at least one circle element' },
      { name: 'Has rectangle or other shape', test: (code: string) => code.includes('<rect') || code.includes('<polygon') || code.includes('<path'), errorMessage: 'Must include rectangle or other shape' },
      { name: 'Has text element', test: (code: string) => code.includes('<text'), errorMessage: 'Must include text element' }
    ]
  },
  {
    id: 'html-40',
    title: 'Base URL Element',
    description: 'Master the <base> tag for setting default URLs',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# The <base> Element

## Introduction to Base URL
The \`<base>\` element specifies the base URL and/or target for all relative URLs in a document. It must be placed in the \`<head>\` section and there can only be one \`<base>\` element per document.

## Basic Syntax
\`\`\`html
<head>
  <base href="https://www.example.com/" target="_blank">
</head>
\`\`\`

## The href Attribute
Sets the base URL for all relative URLs:

### Without <base>
\`\`\`html
<a href="/about">About</a>
<!-- Links to: [current-domain]/about -->
\`\`\`

### With <base>
\`\`\`html
<head>
  <base href="https://example.com/docs/">
</head>
<body>
  <a href="intro.html">Intro</a>
  <!-- Links to: https://example.com/docs/intro.html -->
</body>
\`\`\`

## The target Attribute
Sets the default target for all links:

\`\`\`html
<head>
  <base target="_blank">
</head>
<body>
  <a href="https://example.com">Link</a>
  <!-- Opens in new tab by default -->
</body>
\`\`\`

## Common Use Cases

### 1. Documentation Sites
\`\`\`html
<base href="https://docs.example.com/v2/">
<a href="api/reference.html">API Reference</a>
<!-- Resolves to: https://docs.example.com/v2/api/reference.html -->
\`\`\`

### 2. Image Paths
\`\`\`html
<base href="https://cdn.example.com/">
<img src="images/logo.png" alt="Logo">
<!-- Loads from: https://cdn.example.com/images/logo.png -->
\`\`\`

### 3. Default Link Behavior
\`\`\`html
<base target="_parent">
<!-- All links open in parent frame by default -->
\`\`\`

## Important Considerations

### Rules:
1. Must be inside \`<head>\` section
2. Must come before any elements that use URLs
3. Only one \`<base>\` element per document
4. Self-closing tag (no closing tag needed)

### Target Values:
- **_blank** - Opens in new tab/window
- **_self** - Opens in same frame (default)
- **_parent** - Opens in parent frame
- **_top** - Opens in full window
- **framename** - Opens in named frame

### Caution:
Using \`<base>\` affects ALL relative URLs including:
- Links (\`<a href>\`)
- Images (\`<img src>\`)
- Scripts (\`<script src>\`)
- Stylesheets (\`<link href>\`)
- Forms (\`<form action>\`)

## Your Task:
Create an HTML page with a base URL that sets the default domain and target, then use relative URLs for links and images.`,
    initialCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Base URL Example</title>
    
    <!-- Add a base element with href and target -->
    
  </head>
  <body>
    <h1>Documentation Links</h1>
    
    <!-- Add links using relative URLs -->
    <nav>
      <a href="getting-started.html">Getting Started</a>
      <a href="api/reference.html">API Reference</a>
      <a href="tutorials/basics.html">Tutorials</a>
    </nav>
    
    <!-- Add an image using relative URL -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Base URL Example</title>
    
    <!-- Base URL for all relative links and resources -->
    <base href="https://docs.example.com/v2/" target="_blank">
  </head>
  <body>
    <h1>Documentation Links</h1>
    
    <p>All links below will open in a new tab and resolve relative to the base URL.</p>
    
    <nav>
      <!-- These resolve to https://docs.example.com/v2/[path] -->
      <a href="getting-started.html">Getting Started</a>
      <a href="api/reference.html">API Reference</a>
      <a href="tutorials/basics.html">Tutorials</a>
      <a href="faq.html">FAQ</a>
    </nav>
    
    <!-- Image resolves to https://docs.example.com/v2/images/logo.png -->
    <img src="images/logo.png" alt="Documentation Logo" width="200">
    
    <!-- Override default target for this specific link -->
    <p>
      <a href="home.html" target="_self">Home (opens in same tab)</a>
    </p>
    
    <!-- Absolute URLs are not affected by base -->
    <p>
      <a href="https://www.google.com">Google (absolute URL)</a>
    </p>
  </body>
</html>`,
    hints: [
      'The <base> tag must be placed in the <head> section',
      'Use href attribute to set the base URL',
      'Use target attribute to set default link behavior',
      '<base> is a self-closing tag (no closing tag needed)',
      'target="_blank" makes all links open in new tabs',
      'Only one <base> element is allowed per document',
      'Absolute URLs (starting with http/https) ignore the base href'
    ],
    testCases: [
      { name: 'Has base element', test: (code: string) => code.includes('<base'), errorMessage: 'Must include <base> element' },
      { name: 'Base has href', test: (code: string) => code.includes('href=') && code.toLowerCase().includes('<base'), errorMessage: 'Base element must have href attribute' },
      { name: 'Base has target', test: (code: string) => code.includes('target='), errorMessage: 'Base element should have target attribute' },
      { name: 'Base in head', test: (code: string) => {
        const headMatch = code.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
        return headMatch ? headMatch[1].includes('<base') : false;
      }, errorMessage: 'Base element must be inside <head> section' },
      { name: 'Has relative links', test: (code: string) => {
        const hasRelativeHref = /<a\s+[^>]*href="(?!https?:\/\/)([^"]*)"/.test(code);
        return hasRelativeHref;
      }, errorMessage: 'Should have at least one link with relative URL' }
    ]
  },
  {
    id: 'html-41',
    title: 'Template Element - Reusable HTML',
    description: 'Master the <template> tag for reusable HTML content',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 35,
    content: `# The <template> Element

## Introduction to Templates
The \`<template>\` element holds HTML content that is not rendered when the page loads. It can be instantiated later using JavaScript, making it perfect for dynamic content and components.

## Basic Template Structure
\`\`\`html
<template id="my-template">
  <div class="card">
    <h3>Title</h3>
    <p>Description</p>
  </div>
</template>
\`\`\`

## Key Features
1. **Not Rendered**: Content inside \`<template>\` is not displayed
2. **Not Active**: Scripts don't run, images don't load
3. **Cloneable**: Can be cloned and used multiple times
4. **Document Fragment**: Contains a DocumentFragment

## Using Templates with JavaScript

### Basic Usage
\`\`\`javascript
// Get the template
const template = document.getElementById('my-template');

// Clone the template content
const clone = template.content.cloneNode(true);

// Modify the clone
clone.querySelector('h3').textContent = 'New Title';

// Add to the document
document.body.appendChild(clone);
\`\`\`

### Creating Multiple Instances
\`\`\`javascript
const template = document.getElementById('card-template');
const container = document.getElementById('cards');

const data = [
  { title: 'Card 1', text: 'Description 1' },
  { title: 'Card 2', text: 'Description 2' }
];

data.forEach(item => {
  const clone = template.content.cloneNode(true);
  clone.querySelector('.title').textContent = item.title;
  clone.querySelector('.text').textContent = item.text;
  container.appendChild(clone);
});
\`\`\`

## Common Use Cases

### 1. Card Components
\`\`\`html
<template id="user-card">
  <div class="user-card">
    <img class="avatar" src="" alt="">
    <h4 class="name"></h4>
    <p class="email"></p>
  </div>
</template>
\`\`\`

### 2. List Items
\`\`\`html
<template id="list-item">
  <li>
    <span class="item-name"></span>
    <button class="delete">Delete</button>
  </li>
</template>
\`\`\`

### 3. Table Rows
\`\`\`html
<template id="table-row">
  <tr>
    <td class="id"></td>
    <td class="name"></td>
    <td class="status"></td>
  </tr>
</template>
\`\`\`

## Template vs Other Approaches

**Template**: ✅ Clean HTML, ✅ Parsed once, ✅ Efficient  
**String Concatenation**: ❌ Hard to maintain, ❌ Security risks  
**Hidden Divs**: ❌ Still in DOM, ❌ CSS may affect

## Browser Support
Supported in all modern browsers. For older browsers, content is displayed (fallback).

## Best Practices
1. Use meaningful IDs for templates
2. Always clone with \`cloneNode(true)\` for deep copy
3. Modify clones before adding to DOM
4. Use templates for repeated structures
5. Combine with Web Components for advanced use

## Your Task:
Create a template for a product card and use JavaScript to instantiate it with different data.`,
    initialCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Template Example</title>
    <style>
      .product-card {
        border: 1px solid #ccc;
        padding: 15px;
        margin: 10px;
        width: 200px;
      }
    </style>
  </head>
  <body>
    <h1>Product List</h1>
    
    <!-- Create a template for product cards -->
    <template id="product-template">
      <div class="product-card">
        <h3 class="product-name"></h3>
        <p class="product-price"></p>
        <button>Add to Cart</button>
      </div>
    </template>
    
    <!-- Container for products -->
    <div id="products"></div>
    
    <script>
      // Product data
      const products = [
        { name: 'Laptop', price: '$999' },
        { name: 'Mouse', price: '$29' },
        { name: 'Keyboard', price: '$79' }
      ];
      
      // TODO: Get template and container
      
      // TODO: Loop through products and create cards
      
    </script>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Template Element - Product Cards</title>
    <style>
      .product-card {
        border: 2px solid #4CAF50;
        border-radius: 8px;
        padding: 20px;
        margin: 10px;
        width: 220px;
        display: inline-block;
        text-align: center;
        background-color: #f9f9f9;
      }
      .product-name {
        color: #333;
        margin: 10px 0;
      }
      .product-price {
        color: #4CAF50;
        font-size: 24px;
        font-weight: bold;
      }
      button {
        background-color: #4CAF50;
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 4px;
      }
    </style>
  </head>
  <body>
    <h1>Product List</h1>
    
    <!-- Template definition (not rendered) -->
    <template id="product-template">
      <div class="product-card">
        <h3 class="product-name"></h3>
        <p class="product-price"></p>
        <p class="product-description"></p>
        <button>Add to Cart</button>
      </div>
    </template>
    
    <!-- Container for instantiated products -->
    <div id="products"></div>
    
    <script>
      // Product data
      const products = [
        { name: 'Laptop Pro', price: '$999', description: 'High-performance laptop' },
        { name: 'Wireless Mouse', price: '$29', description: 'Ergonomic design' },
        { name: 'Mechanical Keyboard', price: '$79', description: 'RGB backlight' },
        { name: 'USB-C Hub', price: '$49', description: '7-in-1 adapter' }
      ];
      
      // Get template and container
      const template = document.getElementById('product-template');
      const container = document.getElementById('products');
      
      // Create a card for each product
      products.forEach(product => {
        // Clone the template content
        const clone = template.content.cloneNode(true);
        
        // Fill in the data
        clone.querySelector('.product-name').textContent = product.name;
        clone.querySelector('.product-price').textContent = product.price;
        clone.querySelector('.product-description').textContent = product.description;
        
        // Add event listener to button
        clone.querySelector('button').addEventListener('click', () => {
          alert(\`Added \${product.name} to cart!\`);
        });
        
        // Add to the DOM
        container.appendChild(clone);
      });
    </script>
  </body>
</html>`,
    hints: [
      'Define template with <template id="...">, content won\'t be displayed',
      'Access template with document.getElementById()',
      'Clone with template.content.cloneNode(true) for deep copy',
      'Modify clone\'s content using querySelector before appending',
      'Use appendChild() to add clone to the document',
      'Loop through array data to create multiple instances',
      'You can add event listeners to cloned elements'
    ],
    testCases: [
      { name: 'Has template element', test: (code: string) => code.includes('<template') && code.includes('</template>'), errorMessage: 'Must include <template> element' },
      { name: 'Template has ID', test: (code: string) => code.includes('id="product-template"') || code.includes("id='product-template'"), errorMessage: 'Template must have id="product-template"' },
      { name: 'Has script tag', test: (code: string) => code.includes('<script>') && code.includes('</script>'), errorMessage: 'Must include JavaScript in <script> tag' },
      { name: 'Uses cloneNode', test: (code: string) => code.includes('cloneNode'), errorMessage: 'Must use cloneNode to clone template content' },
      { name: 'Gets template content', test: (code: string) => code.includes('.content'), errorMessage: 'Must access template.content' },
      { name: 'Has container div', test: (code: string) => code.includes('id="products"'), errorMessage: 'Must have container div with id="products"' }
    ]
  },
  {
    id: 'html-42',
    title: 'Dialog Element - Native Modals',
    description: 'Master the <dialog> element for accessible modals and dialogs',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# The <dialog> Element

## Introduction to Dialog
The \`<dialog>\` element represents a dialog box or interactive component like a modal, alert, or popup. It provides built-in accessibility features and is much better than custom modal implementations.

## Basic Dialog Structure
\`\`\`html
<dialog id="myDialog">
  <h2>Dialog Title</h2>
  <p>Dialog content goes here.</p>
  <button>Close</button>
</dialog>
\`\`\`

## Opening and Closing Dialogs

### Show as Modal (with backdrop)
\`\`\`javascript
const dialog = document.getElementById('myDialog');
dialog.showModal();  // Shows as modal with backdrop
\`\`\`

### Show as Non-Modal
\`\`\`javascript
dialog.show();  // Shows without backdrop, page still interactive
\`\`\`

### Close Dialog
\`\`\`javascript
dialog.close();  // Closes the dialog
\`\`\`

## Complete Example
\`\`\`html
<dialog id="confirmDialog">
  <form method="dialog">
    <h2>Confirm Action</h2>
    <p>Are you sure you want to proceed?</p>
    <button value="cancel">Cancel</button>
    <button value="confirm">Confirm</button>
  </form>
</dialog>

<script>
  const dialog = document.getElementById('confirmDialog');
  
  // Open dialog
  document.getElementById('openBtn').addEventListener('click', () => {
    dialog.showModal();
  });
  
  // Handle close
  dialog.addEventListener('close', () => {
    console.log(dialog.returnValue);  // 'cancel' or 'confirm'
  });
</script>
\`\`\`

## Key Features

### 1. Backdrop (::backdrop)
Style the backdrop with CSS:
\`\`\`css
dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}
\`\`\`

### 2. Form Integration
Using \`method="dialog"\` on a form automatically closes the dialog:
\`\`\`html
<dialog>
  <form method="dialog">
    <button>Close</button>
  </form>
</dialog>
\`\`\`

### 3. ESC Key
Pressing ESC automatically closes modal dialogs.

### 4. Focus Management
When opened, focus moves to the first focusable element inside.

### 5. Return Value
\`\`\`javascript
dialog.returnValue;  // Value from button that closed it
\`\`\`

## Dialog vs showModal()

**show()**: Non-modal, page remains interactive  
**showModal()**: Modal, blocks interaction with page, shows backdrop

## Accessibility Benefits
1. **Built-in ARIA**: Proper roles automatically applied
2. **Focus Trap**: Focus stays within modal
3. **ESC to Close**: Standard keyboard interaction
4. **Screen Reader Support**: Announced correctly

## Styling Dialogs
\`\`\`css
dialog {
  border: none;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

dialog::backdrop {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
}
\`\`\`

## Browser Support
Supported in all modern browsers. Use polyfill for older browsers.

## Your Task:
Create a dialog element with open/close functionality, proper form integration, and styled backdrop.`,
    initialCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Dialog Example</title>
    <style>
      dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.5);
      }
    </style>
  </head>
  <body>
    <h1>Dialog Example</h1>
    
    <!-- Button to open dialog -->
    <button id="openDialog">Open Dialog</button>
    
    <!-- Create a dialog element -->
    <dialog id="myDialog">
      <h2>Welcome!</h2>
      <p>This is a dialog box.</p>
      <!-- Add a close button -->
    </dialog>
    
    <script>
      // TODO: Get dialog element
      
      // TODO: Add click event to open button
      
      // TODO: Add click event to close button
      
    </script>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dialog Element - Subscription Modal</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        padding: 20px;
      }
      
      dialog {
        border: none;
        border-radius: 12px;
        padding: 30px;
        max-width: 400px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      }
      
      dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(4px);
      }
      
      dialog h2 {
        margin-top: 0;
        color: #333;
      }
      
      dialog form {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      
      dialog input {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 16px;
      }
      
      dialog button {
        padding: 12px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
      }
      
      dialog button[value="subscribe"] {
        background-color: #4CAF50;
        color: white;
      }
      
      dialog button[value="cancel"] {
        background-color: #f44336;
        color: white;
      }
      
      #openDialog {
        padding: 15px 30px;
        font-size: 18px;
        background-color: #2196F3;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <h1>Dialog Element Example</h1>
    <p>Click the button below to open a modal dialog.</p>
    
    <!-- Button to open dialog -->
    <button id="openDialog">Subscribe to Newsletter</button>
    
    <!-- Dialog element -->
    <dialog id="myDialog">
      <form method="dialog">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest updates delivered to your inbox!</p>
        
        <input type="email" placeholder="Enter your email" required>
        
        <button value="subscribe" type="submit">Subscribe</button>
        <button value="cancel" type="button" id="cancelBtn">Cancel</button>
      </form>
    </dialog>
    
    <script>
      // Get elements
      const dialog = document.getElementById('myDialog');
      const openBtn = document.getElementById('openDialog');
      const cancelBtn = document.getElementById('cancelBtn');
      
      // Open dialog as modal
      openBtn.addEventListener('click', () => {
        dialog.showModal();
      });
      
      // Close dialog
      cancelBtn.addEventListener('click', () => {
        dialog.close();
      });
      
      // Listen for dialog close event
      dialog.addEventListener('close', () => {
        if (dialog.returnValue === 'subscribe') {
          alert('Thank you for subscribing!');
        } else {
          console.log('Dialog cancelled');
        }
      });
      
      // Close on backdrop click
      dialog.addEventListener('click', (e) => {
        if (e.target === dialog) {
          dialog.close();
        }
      });
    </script>
  </body>
</html>`,
    hints: [
      'Create dialog with <dialog id="myDialog">',
      'Use dialog.showModal() to open as modal with backdrop',
      'Use dialog.close() to close the dialog',
      'Forms with method="dialog" automatically close the dialog on submit',
      'Style backdrop with dialog::backdrop CSS selector',
      'Button value attribute becomes dialog.returnValue',
      'ESC key automatically closes modal dialogs'
    ],
    testCases: [
      { name: 'Has dialog element', test: (code: string) => code.includes('<dialog') && code.includes('</dialog>'), errorMessage: 'Must include <dialog> element' },
      { name: 'Dialog has ID', test: (code: string) => code.includes('id="myDialog"') || code.includes("id='myDialog'"), errorMessage: 'Dialog must have id="myDialog"' },
      { name: 'Has open button', test: (code: string) => code.includes('id="openDialog"'), errorMessage: 'Must have button with id="openDialog"' },
      { name: 'Uses showModal', test: (code: string) => code.includes('showModal'), errorMessage: 'Must use showModal() to open dialog' },
      { name: 'Uses close method', test: (code: string) => code.includes('.close()'), errorMessage: 'Must use .close() to close dialog' },
      { name: 'Has script tag', test: (code: string) => code.includes('<script>') && code.includes('</script>'), errorMessage: 'Must include JavaScript in <script> tag' }
    ]
  },
  {
    id: 'html-43',
    title: 'Picture Element - Responsive Images',
    description: 'Master the <picture> element for art direction and responsive images',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 35,
    content: `# The <picture> Element

## Introduction to Picture
The \`<picture>\` element provides a container for multiple image sources, allowing browsers to choose the most appropriate image based on viewport size, resolution, or image format support.

## Basic Picture Structure
\`\`\`html
<picture>
  <source media="(min-width: 800px)" srcset="large.jpg">
  <source media="(min-width: 400px)" srcset="medium.jpg">
  <img src="small.jpg" alt="Description">
</picture>
\`\`\`

## Key Concepts

### 1. Art Direction
Serve different images at different breakpoints:
\`\`\`html
<picture>
  <!-- Desktop: wide landscape photo -->
  <source media="(min-width: 1024px)" srcset="hero-desktop.jpg">
  
  <!-- Tablet: cropped version -->
  <source media="(min-width: 768px)" srcset="hero-tablet.jpg">
  
  <!-- Mobile: portrait crop -->
  <img src="hero-mobile.jpg" alt="Hero image">
</picture>
\`\`\`

### 2. Modern Image Formats
Serve WebP with fallback to JPEG:
\`\`\`html
<picture>
  <source type="image/webp" srcset="photo.webp">
  <source type="image/jpeg" srcset="photo.jpg">
  <img src="photo.jpg" alt="Photo">
</picture>
\`\`\`

### 3. Retina/High-DPI Displays
\`\`\`html
<picture>
  <source srcset="image-2x.jpg 2x, image-1x.jpg 1x">
  <img src="image-1x.jpg" alt="High resolution image">
</picture>
\`\`\`

## <source> Attributes

### media
Media query to match:
\`\`\`html
<source media="(min-width: 800px)" srcset="large.jpg">
\`\`\`

### srcset
Image source(s) to use:
\`\`\`html
<source srcset="image.jpg">
<source srcset="image-1x.jpg 1x, image-2x.jpg 2x">
\`\`\`

### type
MIME type of the image:
\`\`\`html
<source type="image/webp" srcset="image.webp">
<source type="image/avif" srcset="image.avif">
\`\`\`

## Complete Example
\`\`\`html
<picture>
  <!-- Modern formats -->
  <source type="image/avif" srcset="hero.avif">
  <source type="image/webp" srcset="hero.webp">
  
  <!-- Responsive sizes -->
  <source media="(min-width: 1200px)" srcset="hero-xl.jpg">
  <source media="(min-width: 768px)" srcset="hero-lg.jpg">
  <source media="(min-width: 480px)" srcset="hero-md.jpg">
  
  <!-- Fallback -->
  <img src="hero-sm.jpg" alt="Hero banner" loading="lazy">
</picture>
\`\`\`

## Picture vs img srcset

**<picture>**: Art direction (different crops/compositions)  
**img srcset**: Resolution switching (same image, different sizes)

## Important Rules

1. **Always include <img>**: Required as fallback
2. **img comes last**: After all <source> elements
3. **Alt on img**: Always provide alt text
4. **Browser picks first match**: Order matters
5. **Source is self-closing**: No closing tag

## Use Cases

1. **Art Direction**: Different crops for mobile/desktop
2. **Format Support**: WebP for modern browsers, JPEG fallback
3. **Resolution Switching**: Retina vs standard displays
4. **Bandwidth Optimization**: Smaller images on mobile
5. **Dark Mode**: Different images for light/dark themes

## Browser Support
Excellent support in all modern browsers.

## Your Task:
Create a responsive picture element with multiple sources for different screen sizes and image formats.`,
    initialCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Picture Element</title>
  </head>
  <body>
    <h1>Responsive Images with Picture</h1>
    
    <!-- Create a picture element with multiple sources -->
    <picture>
      <!-- Add source for desktop (min-width: 1024px) -->
      
      <!-- Add source for tablet (min-width: 768px) -->
      
      <!-- Add source for WebP format -->
      
      <!-- Add img fallback -->
      
    </picture>
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Picture Element - Responsive Hero Image</title>
    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
      }
      
      picture {
        display: block;
      }
      
      img {
        width: 100%;
        height: auto;
        display: block;
      }
      
      .content {
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
      }
    </style>
  </head>
  <body>
    <h1 style="text-align: center; padding: 20px;">Responsive Images with Picture Element</h1>
    
    <!-- Responsive picture with multiple sources -->
    <picture>
      <!-- Modern image formats (checked first) -->
      <source type="image/webp" srcset="hero-desktop.webp" media="(min-width: 1024px)">
      <source type="image/webp" srcset="hero-tablet.webp" media="(min-width: 768px)">
      <source type="image/webp" srcset="hero-mobile.webp">
      
      <!-- Desktop (wide landscape) -->
      <source media="(min-width: 1024px)" srcset="hero-desktop.jpg">
      
      <!-- Tablet (cropped for tablet) -->
      <source media="(min-width: 768px)" srcset="hero-tablet.jpg">
      
      <!-- Mobile fallback (portrait orientation) -->
      <img src="hero-mobile.jpg" alt="Beautiful landscape showing mountains and lake at sunset" loading="lazy">
    </picture>
    
    <div class="content">
      <h2>About Responsive Images</h2>
      <p>The picture above adapts to your screen size, serving different images for mobile, tablet, and desktop views.</p>
      <p>It also prioritizes modern WebP format with JPEG fallback for older browsers.</p>
      
      <h3>Another Example - Product Image</h3>
      <picture>
        <source type="image/webp" srcset="product-2x.webp 2x, product-1x.webp 1x">
        <source type="image/jpeg" srcset="product-2x.jpg 2x, product-1x.jpg 1x">
        <img src="product-1x.jpg" alt="Premium wireless headphones" width="400" height="300">
      </picture>
    </div>
  </body>
</html>`,
    hints: [
      'Picture element contains multiple <source> elements and one <img>',
      'Use media attribute with media queries: media="(min-width: 768px)"',
      'Use type attribute to specify image format: type="image/webp"',
      'The <img> element must come last and serves as fallback',
      'Always include alt text on the <img> element',
      'Browser uses the first <source> that matches',
      'Order matters - put modern formats and larger screens first'
    ],
    testCases: [
      { name: 'Has picture element', test: (code: string) => code.includes('<picture>') && code.includes('</picture>'), errorMessage: 'Must include <picture> element' },
      { name: 'Has source elements', test: (code: string) => (code.match(/<source/g) || []).length >= 2, errorMessage: 'Must have at least 2 <source> elements' },
      { name: 'Has img fallback', test: (code: string) => {
        const pictureMatch = code.match(/<picture[^>]*>([\s\S]*?)<\/picture>/i);
        return pictureMatch ? pictureMatch[1].includes('<img') : false;
      }, errorMessage: 'Must include <img> element inside <picture>' },
      { name: 'Source has media query', test: (code: string) => code.includes('media='), errorMessage: 'At least one <source> should have media attribute' },
      { name: 'Source has srcset', test: (code: string) => code.includes('srcset='), errorMessage: '<source> elements must have srcset attribute' },
      { name: 'Has alt text', test: (code: string) => code.includes('alt='), errorMessage: 'The <img> element must have alt attribute' }
    ]
  },
  {
    id: 'html-44',
    title: 'Source Element - Multiple Media Sources',
    description: 'Master the <source> element for video and audio',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# The <source> Element

## Introduction to Source
The \`<source>\` element specifies multiple media resources for \`<video>\`, \`<audio>\`, and \`<picture>\` elements. Browsers select the first source they support, providing format fallbacks.

## Source with Video

### Basic Video Sources
\`\`\`html
<video controls width="640" height="360">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  <source src="movie.ogg" type="video/ogg">
  Your browser doesn't support video.
</video>
\`\`\`

### Video Codecs
\`\`\`html
<video controls>
  <source src="video.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
  <source src="video.webm" type='video/webm; codecs="vp8, vorbis"'>
</video>
\`\`\`

## Source with Audio

### Multiple Audio Formats
\`\`\`html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  <source src="audio.wav" type="audio/wav">
  Your browser doesn't support audio.
</audio>
\`\`\`

## Source Attributes

### src (required)
URL of the media file:
\`\`\`html
<source src="video.mp4">
\`\`\`

### type (important)
MIME type helps browser choose without downloading:
\`\`\`html
<source src="video.webm" type="video/webm">
\`\`\`

### media (for picture)
Media query for responsive images:
\`\`\`html
<source media="(min-width: 800px)" srcset="large.jpg">
\`\`\`

## Common Media Types

### Video
- **video/mp4** - H.264 (best compatibility)
- **video/webm** - VP8/VP9 (open format)
- **video/ogg** - Theora (older)

### Audio
- **audio/mpeg** - MP3 (universal)
- **audio/ogg** - Ogg Vorbis
- **audio/wav** - WAV (uncompressed)
- **audio/aac** - AAC

## Complete Video Example
\`\`\`html
<video controls width="800" poster="preview.jpg">
  <!-- Modern format -->
  <source src="video.webm" type="video/webm">
  
  <!-- Universal fallback -->
  <source src="video.mp4" type="video/mp4">
  
  <!-- Older fallback -->
  <source src="video.ogg" type="video/ogg">
  
  <!-- Text fallback -->
  <p>Your browser doesn't support HTML5 video. 
     <a href="video.mp4">Download the video</a>.
  </p>
</video>
\`\`\`

## Complete Audio Example
\`\`\`html
<audio controls loop>
  <source src="music.mp3" type="audio/mpeg">
  <source src="music.ogg" type="audio/ogg">
  Your browser doesn't support audio playback.
</audio>
\`\`\`

## Browser Selection Process
1. Browser checks each \`<source>\` in order
2. Selects first one it can play (based on type)
3. If none supported, shows fallback content
4. Doesn't download unsupported formats

## Best Practices

1. **Order by preference**: Put best format first
2. **Always include type**: Helps browser choose efficiently
3. **Provide fallback**: Text/link for unsupported browsers
4. **Use multiple formats**: Ensure cross-browser compatibility
5. **Test on devices**: Different browsers support different formats

## Recommended Format Strategy

### Video
1. WebM (modern browsers, small size)
2. MP4/H.264 (universal compatibility)

### Audio
1. MP3 (universal)
2. OGG (backup for Firefox)

## Your Task:
Create a video element with multiple source formats and an audio element with format fallbacks.`,
    initialCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Source Element</title>
  </head>
  <body>
    <h1>Multiple Media Sources</h1>
    
    <h2>Video with Multiple Formats</h2>
    <!-- Create a video element with controls -->
    <video controls width="640">
      <!-- Add WebM source -->
      
      <!-- Add MP4 source -->
      
      <!-- Add fallback text -->
      
    </video>
    
    <h2>Audio with Multiple Formats</h2>
    <!-- Create an audio element with controls -->
    <audio controls>
      <!-- Add MP3 source -->
      
      <!-- Add OGG source -->
      
      <!-- Add fallback text -->
      
    </audio>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Source Element - Multiple Media Formats</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        max-width: 900px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f5f5f5;
      }
      
      h1 {
        color: #333;
        text-align: center;
      }
      
      section {
        background: white;
        padding: 20px;
        margin: 20px 0;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      
      video, audio {
        width: 100%;
        max-width: 640px;
        display: block;
        margin: 15px 0;
      }
      
      .fallback {
        background-color: #fff3cd;
        padding: 10px;
        border-left: 4px solid #ffc107;
        margin: 10px 0;
      }
    </style>
  </head>
  <body>
    <h1>Multiple Media Sources Example</h1>
    
    <section>
      <h2>Video with Multiple Source Formats</h2>
      <p>Browser will automatically select the first supported format.</p>
      
      <video controls width="640" height="360" poster="video-poster.jpg">
        <!-- WebM format (modern, efficient) -->
        <source src="demo-video.webm" type="video/webm">
        
        <!-- MP4 format (universal compatibility) -->
        <source src="demo-video.mp4" type="video/mp4">
        
        <!-- OGG format (Firefox fallback) -->
        <source src="demo-video.ogg" type="video/ogg">
        
        <!-- Fallback for browsers that don't support video -->
        <div class="fallback">
          <p>Your browser doesn't support HTML5 video. 
             <a href="demo-video.mp4">Download the video</a> instead.
          </p>
        </div>
      </video>
    </section>
    
    <section>
      <h2>Audio with Multiple Source Formats</h2>
      <p>Background music with format fallbacks for all browsers.</p>
      
      <audio controls loop>
        <!-- MP3 format (best compatibility) -->
        <source src="background-music.mp3" type="audio/mpeg">
        
        <!-- OGG format (open source alternative) -->
        <source src="background-music.ogg" type="audio/ogg">
        
        <!-- WAV format (uncompressed fallback) -->
        <source src="background-music.wav" type="audio/wav">
        
        <!-- Fallback text -->
        <p>Your browser doesn't support HTML5 audio playback.</p>
      </audio>
    </section>
    
    <section>
      <h2>Why Multiple Sources?</h2>
      <ul>
        <li><strong>Browser Compatibility:</strong> Different browsers support different formats</li>
        <li><strong>File Size:</strong> Modern formats like WebM are more efficient</li>
        <li><strong>Quality:</strong> Some formats offer better quality at same size</li>
        <li><strong>Fallback:</strong> Ensures content works everywhere</li>
      </ul>
    </section>
  </body>
</html>`,
    hints: [
      'Use <source> elements inside <video> or <audio> tags',
      'Add type attribute to help browser choose format quickly',
      'src attribute specifies the media file path',
      'List formats in order of preference (best first)',
      'Common video types: video/mp4, video/webm, video/ogg',
      'Common audio types: audio/mpeg, audio/ogg, audio/wav',
      'Always include fallback text after all <source> elements'
    ],
    testCases: [
      { name: 'Has video element', test: (code: string) => code.includes('<video') && code.includes('</video>'), errorMessage: 'Must include <video> element' },
      { name: 'Video has controls', test: (code: string) => /<video[^>]*controls/.test(code), errorMessage: 'Video should have controls attribute' },
      { name: 'Has audio element', test: (code: string) => code.includes('<audio') && code.includes('</audio>'), errorMessage: 'Must include <audio> element' },
      { name: 'Has source elements', test: (code: string) => (code.match(/<source/g) || []).length >= 3, errorMessage: 'Must have at least 3 <source> elements total' },
      { name: 'Source has type', test: (code: string) => code.includes('type="video/') || code.includes('type="audio/'), errorMessage: '<source> elements should have type attribute' },
      { name: 'Source has src', test: (code: string) => /<source[^>]*src=/.test(code), errorMessage: '<source> elements must have src attribute' }
    ]
  },
  {
    id: 'html-45',
    title: 'Track Element - Video Captions & Subtitles',
    description: 'Master the <track> element for accessible video captions',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# The <track> Element

## Introduction to Track
The \`<track>\` element provides text tracks for \`<video>\` and \`<audio>\` elements. Text tracks include subtitles, captions, descriptions, chapters, and metadata - crucial for accessibility.

## Basic Track Structure
\`\`\`html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <track kind="captions" src="captions-en.vtt" srclang="en" label="English">
</video>
\`\`\`

## Track Attributes

### kind (type of text track)
- **subtitles** - Translation of dialogue (default)
- **captions** - Dialogue + sound effects (for deaf/hard of hearing)
- **descriptions** - Audio descriptions for blind users
- **chapters** - Chapter titles for navigation
- **metadata** - Not visible, used by scripts

### src (required)
URL to the WebVTT (.vtt) file:
\`\`\`html
<track src="captions.vtt">
\`\`\`

### srclang
Language of the track text:
\`\`\`html
<track srclang="en">
\`\`\`

### label
Title shown to user:
\`\`\`html
<track label="English Captions">
\`\`\`

### default
Which track to enable by default:
\`\`\`html
<track default>
\`\`\`

## WebVTT File Format

WebVTT (Web Video Text Tracks) is the format for track files:

\`\`\`vtt
WEBVTT

00:00:00.000 --> 00:00:03.000
Welcome to our video tutorial.

00:00:03.500 --> 00:00:07.000
Today we'll learn about HTML5.

00:00:07.500 --> 00:00:10.000
Let's get started!
\`\`\`

## Multiple Language Tracks
\`\`\`html
<video controls>
  <source src="movie.mp4" type="video/mp4">
  
  <!-- English captions (default) -->
  <track kind="captions" src="captions-en.vtt" 
         srclang="en" label="English" default>
  
  <!-- Spanish subtitles -->
  <track kind="subtitles" src="subtitles-es.vtt" 
         srclang="es" label="Español">
  
  <!-- French subtitles -->
  <track kind="subtitles" src="subtitles-fr.vtt" 
         srclang="fr" label="Français">
</video>
\`\`\`

## Captions vs Subtitles

**Captions**:
- Include sound effects: [door slams], [music playing]
- For deaf/hard of hearing
- Same language as audio
- Use kind="captions"

**Subtitles**:
- Translation only
- For foreign language
- Use kind="subtitles"

## Chapters for Navigation
\`\`\`html
<video controls>
  <source src="lecture.mp4" type="video/mp4">
  <track kind="chapters" src="chapters.vtt" srclang="en">
</video>
\`\`\`

Chapters VTT:
\`\`\`vtt
WEBVTT

00:00:00.000 --> 00:05:00.000
Introduction

00:05:00.000 --> 00:15:00.000
Main Content

00:15:00.000 --> 00:20:00.000
Conclusion
\`\`\`

## Complete Example
\`\`\`html
<video controls width="640" height="360" poster="poster.jpg">
  <source src="lecture.mp4" type="video/mp4">
  <source src="lecture.webm" type="video/webm">
  
  <!-- Captions for accessibility -->
  <track kind="captions" src="captions-en.vtt" 
         srclang="en" label="English Captions" default>
  
  <!-- Spanish subtitles -->
  <track kind="subtitles" src="subtitles-es.vtt" 
         srclang="es" label="Español">
  
  <!-- Chapter markers -->
  <track kind="chapters" src="chapters.vtt" 
         srclang="en" label="Chapters">
  
  <!-- Audio descriptions -->
  <track kind="descriptions" src="descriptions.vtt" 
         srclang="en" label="Audio Descriptions">
</video>
\`\`\`

## Why Use Tracks?

1. **Accessibility** - Required for WCAG compliance
2. **SEO** - Search engines can index captions
3. **User Experience** - Users in quiet environments
4. **International** - Easy translation support
5. **Legal** - Required by law in many cases

## Browser Support
Excellent support in all modern browsers.

## Your Task:
Create a video element with multiple track elements for captions in different languages.`,
    initialCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Track Element</title>
  </head>
  <body>
    <h1>Video with Captions</h1>
    
    <!-- Create a video element -->
    <video controls width="640">
      <!-- Add video source -->
      <source src="tutorial.mp4" type="video/mp4">
      
      <!-- Add English captions track (default) -->
      
      <!-- Add Spanish subtitles track -->
      
      <!-- Add chapters track -->
      
      <p>Your browser doesn't support video.</p>
    </video>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Track Element - Accessible Video</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f0f0f0;
      }
      
      h1 {
        color: #333;
        text-align: center;
      }
      
      .video-container {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      
      video {
        width: 100%;
        max-width: 640px;
        display: block;
        margin: 20px auto;
        border-radius: 4px;
      }
      
      .info {
        background-color: #e7f3ff;
        padding: 15px;
        border-left: 4px solid #2196F3;
        margin: 20px 0;
      }
      
      .info h3 {
        margin-top: 0;
      }
    </style>
  </head>
  <body>
    <h1>Accessible Video with Multiple Tracks</h1>
    
    <div class="video-container">
      <h2>HTML5 Tutorial Video</h2>
      
      <video controls width="640" height="360" poster="video-poster.jpg">
        <!-- Video sources -->
        <source src="html-tutorial.mp4" type="video/mp4">
        <source src="html-tutorial.webm" type="video/webm">
        
        <!-- English captions (default, for accessibility) -->
        <track kind="captions" 
               src="captions-en.vtt" 
               srclang="en" 
               label="English Captions" 
               default>
        
        <!-- Spanish subtitles -->
        <track kind="subtitles" 
               src="subtitles-es.vtt" 
               srclang="es" 
               label="Español">
        
        <!-- French subtitles -->
        <track kind="subtitles" 
               src="subtitles-fr.vtt" 
               srclang="fr" 
               label="Français">
        
        <!-- Chapter markers for navigation -->
        <track kind="chapters" 
               src="chapters.vtt" 
               srclang="en" 
               label="Chapters">
        
        <!-- Audio descriptions for visually impaired -->
        <track kind="descriptions" 
               src="descriptions.vtt" 
               srclang="en" 
               label="Audio Descriptions">
        
        <!-- Fallback -->
        <p>Your browser doesn't support HTML5 video. 
           <a href="html-tutorial.mp4">Download the video</a>.
        </p>
      </video>
      
      <div class="info">
        <h3>Accessibility Features:</h3>
        <ul>
          <li><strong>Captions:</strong> Click CC button to enable captions in multiple languages</li>
          <li><strong>Chapters:</strong> Navigate to specific sections using the chapters menu</li>
          <li><strong>Audio Descriptions:</strong> Additional audio track describing visual elements</li>
        </ul>
      </div>
    </div>
  </body>
</html>`,
    hints: [
      'Use <track> element inside <video> or <audio> tags',
      'kind attribute specifies type: captions, subtitles, chapters, descriptions',
      'src points to a WebVTT (.vtt) file with timed text',
      'srclang specifies language code (en, es, fr, etc.)',
      'label is what users see in the captions menu',
      'Add default attribute to enable a track by default',
      'Captions include sound effects, subtitles are translations only'
    ],
    testCases: [
      { name: 'Has video element', test: (code: string) => code.includes('<video') && code.includes('</video>'), errorMessage: 'Must include <video> element' },
      { name: 'Has track elements', test: (code: string) => (code.match(/<track/g) || []).length >= 2, errorMessage: 'Must have at least 2 <track> elements' },
      { name: 'Track has kind', test: (code: string) => code.includes('kind='), errorMessage: 'Track elements should have kind attribute' },
      { name: 'Track has src', test: (code: string) => /<track[^>]*src=/.test(code), errorMessage: 'Track elements must have src attribute' },
      { name: 'Track has srclang', test: (code: string) => code.includes('srclang='), errorMessage: 'Track elements should have srclang attribute' },
      { name: 'Track has label', test: (code: string) => /<track[^>]*label=/.test(code), errorMessage: 'Track elements should have label attribute' },
      { name: 'Has default track', test: (code: string) => code.includes('default'), errorMessage: 'One track should have default attribute' }
    ]
  },
  {
    id: 'html-46',
    title: 'Map and Area Elements - Image Maps',
    description: 'Master <map> and <area> for creating clickable image regions',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 35,
    content: `# Image Maps - <map> and <area>

## Introduction to Image Maps
Image maps allow you to create clickable regions on an image. Different areas of the image can link to different destinations, making single images interactive.

## Basic Structure
\`\`\`html
<img src="map.jpg" alt="World Map" usemap="#worldmap">

<map name="worldmap">
  <area shape="rect" coords="0,0,100,100" href="region1.html" alt="Region 1">
  <area shape="circle" coords="200,200,50" href="region2.html" alt="Region 2">
</map>
\`\`\`

## The <map> Element

### name Attribute (required)
Connects map to image via usemap:
\`\`\`html
<map name="mymap"></map>
<img usemap="#mymap">
\`\`\`

## The <area> Element

Defines clickable regions within the map.

### shape Attribute
Defines the region shape:

**rect** - Rectangle
\`\`\`html
<area shape="rect" coords="x1,y1,x2,y2">
<!-- x1,y1 = top-left corner, x2,y2 = bottom-right corner -->
\`\`\`

**circle** - Circle
\`\`\`html
<area shape="circle" coords="centerX,centerY,radius">
<!-- centerX,centerY = center point, radius = circle radius -->
\`\`\`

**poly** - Polygon
\`\`\`html
<area shape="poly" coords="x1,y1,x2,y2,x3,y3,...">
<!-- List of x,y coordinates for each vertex -->
\`\`\`

**default** - Entire image
\`\`\`html
<area shape="default" href="default.html">
\`\`\`

### coords Attribute
Coordinates defining the shape (in pixels from top-left):
- **Rectangle**: left,top,right,bottom
- **Circle**: centerX,centerY,radius
- **Polygon**: x1,y1,x2,y2,x3,y3,...

### Other Attributes
\`\`\`html
<area 
  shape="rect" 
  coords="10,10,100,100" 
  href="page.html" 
  alt="Description" 
  target="_blank"
  title="Tooltip text">
\`\`\`

## Complete Example - Office Floor Plan
\`\`\`html
<img src="office-floor.jpg" alt="Office Floor Plan" usemap="#officemap" width="600">

<map name="officemap">
  <!-- Conference room (rectangle) -->
  <area shape="rect" coords="50,50,200,150" 
        href="conference.html" 
        alt="Conference Room" 
        title="Conference Room A">
  
  <!-- Reception desk (circle) -->
  <area shape="circle" coords="300,250,60" 
        href="reception.html" 
        alt="Reception" 
        title="Reception Desk">
  
  <!-- Kitchen (polygon) -->
  <area shape="poly" coords="400,50,500,50,500,200,450,250,400,200" 
        href="kitchen.html" 
        alt="Kitchen" 
        title="Employee Kitchen">
</map>
\`\`\`

## Real-World Use Cases

### 1. Geographic Maps
\`\`\`html
<img src="world-map.jpg" usemap="#worldmap">
<map name="worldmap">
  <area shape="poly" coords="..." href="/usa" alt="United States">
  <area shape="poly" coords="..." href="/canada" alt="Canada">
  <area shape="poly" coords="..." href="/mexico" alt="Mexico">
</map>
\`\`\`

### 2. Product Features
\`\`\`html
<img src="laptop.jpg" usemap="#laptopmap">
<map name="laptopmap">
  <area shape="rect" coords="50,100,150,200" href="screen-specs.html" alt="Display">
  <area shape="rect" coords="200,250,300,300" href="keyboard.html" alt="Keyboard">
  <area shape="circle" coords="350,150,30" href="webcam.html" alt="Webcam">
</map>
\`\`\`

### 3. Infographics
\`\`\`html
<img src="infographic.jpg" usemap="#infomap">
<map name="infomap">
  <area shape="rect" coords="..." href="stat1.html" alt="Statistic 1">
  <area shape="rect" coords="..." href="stat2.html" alt="Statistic 2">
</map>
\`\`\`

## Accessibility Considerations

1. **Always include alt**: Describe each clickable area
2. **Use title**: Provide tooltip for sighted users
3. **Test without images**: Links should still work
4. **Consider alternatives**: SVG may be better for complex maps

## Tools for Creating Image Maps

1. **Online Image Map Generators**
2. **Browser DevTools** - Inspect coordinates
3. **Image Editors** - Photoshop, GIMP (show coordinates)

## Responsive Considerations

Image maps use absolute pixel coordinates, which can be problematic on responsive sites. Consider:
- Using SVG with clickable elements instead
- JavaScript libraries for responsive image maps
- CSS-based solutions for simple cases

## Best Practices

1. Use descriptive alt text for each area
2. Keep coordinate calculations organized
3. Test all clickable regions
4. Provide visual feedback (CSS :hover on parent img)
5. Consider SVG for better scalability
6. Document coordinate calculations

## Your Task:
Create an image map with multiple clickable regions using different shapes (rectangle, circle, polygon).`,
    initialCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Map Example</title>
  </head>
  <body>
    <h1>Clickable Image Map</h1>
    
    <!-- Create an image with usemap -->
    <img src="office-layout.jpg" alt="Office Layout" usemap="#officemap" width="600">
    
    <!-- Create a map element -->
    <map name="officemap">
      <!-- Add a rectangular area (office 1) -->
      
      <!-- Add a circular area (lobby) -->
      
      <!-- Add a polygon area (conference room) -->
      
    </map>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Map - Interactive Office Layout</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f5f5f5;
      }
      
      h1 {
        color: #333;
        text-align: center;
      }
      
      .map-container {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        text-align: center;
      }
      
      img {
        max-width: 100%;
        height: auto;
        border: 2px solid #ddd;
        border-radius: 4px;
      }
      
      .info {
        background-color: #e3f2fd;
        padding: 15px;
        margin-top: 20px;
        border-radius: 4px;
        text-align: left;
      }
      
      .info h3 {
        margin-top: 0;
        color: #1976d2;
      }
    </style>
  </head>
  <body>
    <h1>Interactive Office Layout Map</h1>
    
    <div class="map-container">
      <p>Click on different areas of the office to learn more:</p>
      
      <!-- Image with map -->
      <img src="office-layout.jpg" 
           alt="Office floor plan with clickable regions" 
           usemap="#officemap" 
           width="600" 
           height="400">
      
      <!-- Map definition -->
      <map name="officemap">
        <!-- Office 1 (rectangle in top-left) -->
        <area shape="rect" 
              coords="50,50,200,150" 
              href="#office1" 
              alt="Office 1 - CEO" 
              title="Click for Office 1 details">
        
        <!-- Office 2 (rectangle in top-right) -->
        <area shape="rect" 
              coords="400,50,550,150" 
              href="#office2" 
              alt="Office 2 - Manager" 
              title="Click for Office 2 details">
        
        <!-- Lobby (circle in center) -->
        <area shape="circle" 
              coords="300,250,70" 
              href="#lobby" 
              alt="Main Lobby" 
              title="Click for Lobby details">
        
        <!-- Conference Room (polygon on bottom-left) -->
        <area shape="poly" 
              coords="50,300,50,380,180,380,200,350,200,300" 
              href="#conference" 
              alt="Conference Room" 
              title="Click for Conference Room details">
        
        <!-- Break Room (rectangle bottom-right) -->
        <area shape="rect" 
              coords="400,300,550,380" 
              href="#breakroom" 
              alt="Break Room" 
              title="Click for Break Room details">
      </map>
      
      <div class="info">
        <h3>How to Use This Map:</h3>
        <ul>
          <li>Hover over different areas to see tooltips</li>
          <li>Click regions to navigate to room details</li>
          <li>Rectangle shapes: Offices and Break Room</li>
          <li>Circle shape: Main Lobby area</li>
          <li>Polygon shape: Conference Room</li>
        </ul>
      </div>
    </div>
    
    <!-- Destination sections -->
    <div id="office1" style="margin-top: 40px; padding: 20px; background: white; border-radius: 8px;">
      <h2>Office 1 - CEO</h2>
      <p>Executive office with private meeting area.</p>
    </div>
  </body>
</html>`,
    hints: [
      'Use usemap="#mapname" on img to connect to map',
      'Map name attribute must match (without #): <map name="mapname">',
      'Area shape="rect" uses coords="left,top,right,bottom"',
      'Area shape="circle" uses coords="centerX,centerY,radius"',
      'Area shape="poly" uses coords="x1,y1,x2,y2,x3,y3,..." for vertices',
      'Always include href and alt attributes on area elements',
      'Coordinates are in pixels from top-left corner of image'
    ],
    testCases: [
      { name: 'Has img element', test: (code: string) => code.includes('<img') && code.includes('usemap='), errorMessage: 'Must include <img> with usemap attribute' },
      { name: 'Has map element', test: (code: string) => code.includes('<map') && code.includes('</map>'), errorMessage: 'Must include <map> element' },
      { name: 'Map has name', test: (code: string) => /<map[^>]*name=/.test(code), errorMessage: 'Map element must have name attribute' },
      { name: 'Has area elements', test: (code: string) => (code.match(/<area/g) || []).length >= 3, errorMessage: 'Must have at least 3 <area> elements' },
      { name: 'Area has shape', test: (code: string) => code.includes('shape='), errorMessage: 'Area elements must have shape attribute' },
      { name: 'Area has coords', test: (code: string) => code.includes('coords='), errorMessage: 'Area elements must have coords attribute' },
      { name: 'Area has href', test: (code: string) => /<area[^>]*href=/.test(code), errorMessage: 'Area elements should have href attribute' },
      { name: 'Area has alt', test: (code: string) => /<area[^>]*alt=/.test(code), errorMessage: 'Area elements must have alt attribute for accessibility' }
    ]
  },
  {
    id: 'html-47',
    title: 'Slot Element - Web Components',
    description: 'Master the <slot> element for flexible web components',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 35,
    content: `# The <slot> Element

## Introduction to Slots
The \`<slot>\` element is part of Web Components technology. It creates placeholders inside a custom element that users can fill with their own markup, making components flexible and reusable.

## Basic Slot Concept

### Component Definition (Shadow DOM)
\`\`\`html
<template id="my-card">
  <div class="card">
    <h2><slot name="title">Default Title</slot></h2>
    <div class="content">
      <slot>Default content goes here</slot>
    </div>
  </div>
</template>
\`\`\`

### Component Usage
\`\`\`html
<my-card>
  <span slot="title">Custom Title</span>
  <p>This is my custom content!</p>
</my-card>
\`\`\`

## Types of Slots

### 1. Default Slot (unnamed)
Captures all content not assigned to named slots:
\`\`\`html
<template>
  <div>
    <slot></slot>  <!-- Catches unassigned content -->
  </div>
</template>
\`\`\`

### 2. Named Slots
Captures content with matching slot attribute:
\`\`\`html
<template>
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>  <!-- default slot -->
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</template>
\`\`\`

Usage:
\`\`\`html
<my-component>
  <h1 slot="header">Page Title</h1>
  <p>Main content here</p>
  <p slot="footer">Footer text</p>
</my-component>
\`\`\`

## Complete Web Component Example

### Define the Component
\`\`\`html
<template id="user-card-template">
  <style>
    .card {
      border: 2px solid #ccc;
      padding: 20px;
      border-radius: 8px;
    }
  </style>
  <div class="card">
    <h3><slot name="name">Anonymous User</slot></h3>
    <p><slot name="role">No role specified</slot></p>
    <div class="bio">
      <slot>No bio available</slot>
    </div>
  </div>
</template>

<script>
  class UserCard extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById('user-card-template');
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  customElements.define('user-card', UserCard);
</script>
\`\`\`

### Use the Component
\`\`\`html
<user-card>
  <span slot="name">John Doe</span>
  <span slot="role">Senior Developer</span>
  <p>Passionate about web technologies and open source.</p>
</user-card>
\`\`\`

## Slot Fallback Content

Content inside \`<slot>\` tags is shown when no content is provided:
\`\`\`html
<template>
  <slot name="header">
    <h2>Default Header</h2>  <!-- Shown if no header slot provided -->
  </slot>
</template>
\`\`\`

## Multiple Elements in One Slot
\`\`\`html
<my-component>
  <div slot="content">
    <h3>Title</h3>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </div>
</my-component>
\`\`\`

## Slot Events in JavaScript

### slotchange Event
\`\`\`javascript
const slot = shadowRoot.querySelector('slot');
slot.addEventListener('slotchange', (e) => {
  const nodes = slot.assignedNodes();
  console.log('Slot content changed:', nodes);
});
\`\`\`

### assignedElements()
\`\`\`javascript
const slot = shadowRoot.querySelector('slot[name="header"]');
const elements = slot.assignedElements();
// Returns only element nodes (not text nodes)
\`\`\`

## Real-World Use Cases

### 1. Card Component
\`\`\`html
<template id="card">
  <div class="card">
    <div class="card-header"><slot name="header"></slot></div>
    <div class="card-body"><slot></slot></div>
    <div class="card-footer"><slot name="footer"></slot></div>
  </div>
</template>
\`\`\`

### 2. Dialog Component
\`\`\`html
<template id="dialog">
  <div class="overlay">
    <div class="dialog">
      <h2><slot name="title">Dialog</slot></h2>
      <div class="content"><slot></slot></div>
      <div class="actions"><slot name="actions"></slot></div>
    </div>
  </div>
</template>
\`\`\`

### 3. Tab Panel
\`\`\`html
<template id="tabs">
  <div class="tabs">
    <div class="tab-headers"><slot name="tab"></slot></div>
    <div class="tab-content"><slot name="panel"></slot></div>
  </div>
</template>
\`\`\`

## Benefits of Slots

1. **Flexibility** - Users customize components
2. **Encapsulation** - Styles don't leak
3. **Reusability** - One component, many uses
4. **Composability** - Nest components easily
5. **Default Content** - Fallbacks for missing content

## Browser Support
Excellent support in all modern browsers.

## Best Practices

1. Provide meaningful default content
2. Use named slots for specific content areas
3. Document expected slot content
4. Use semantic HTML in slot content
5. Test with and without slotted content

## Your Task:
Create a custom card component using template, shadow DOM, and slots for flexible content insertion.`,
    initialCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Slot Element</title>
  </head>
  <body>
    <h1>Web Component with Slots</h1>
    
    <!-- Define a template with slots -->
    <template id="card-template">
      <style>
        .card {
          border: 1px solid #ccc;
          padding: 20px;
          margin: 10px;
        }
      </style>
      <div class="card">
        <!-- Add a named slot for title -->
        <h2><slot name="title">Default Title</slot></h2>
        
        <!-- Add a default slot for content -->
        <slot>Default content</slot>
      </div>
    </template>
    
    <!-- Use the custom element -->
    <card-component>
      <span slot="title">My Card Title</span>
      <p>This is the card content.</p>
    </card-component>
    
    <script>
      // TODO: Define custom element class
      // TODO: Register custom element
    </script>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slot Element - Custom Card Component</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        max-width: 900px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f0f0f0;
      }
      
      h1 {
        color: #333;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <h1>Web Component with Slots</h1>
    
    <!-- Template definition -->
    <template id="card-template">
      <style>
        .card {
          background: white;
          border: 2px solid #4CAF50;
          border-radius: 8px;
          padding: 20px;
          margin: 15px 0;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .card-header {
          border-bottom: 1px solid #eee;
          padding-bottom: 10px;
          margin-bottom: 15px;
        }
        
        .card-header h2 {
          margin: 0;
          color: #4CAF50;
        }
        
        .card-body {
          color: #666;
          line-height: 1.6;
        }
        
        .card-footer {
          border-top: 1px solid #eee;
          padding-top: 10px;
          margin-top: 15px;
          font-size: 14px;
          color: #999;
        }
      </style>
      
      <div class="card">
        <div class="card-header">
          <h2><slot name="title">Untitled Card</slot></h2>
        </div>
        <div class="card-body">
          <slot>No content provided</slot>
        </div>
        <div class="card-footer">
          <slot name="footer">Card footer</slot>
        </div>
      </div>
    </template>
    
    <!-- Custom element instances -->
    <card-component>
      <span slot="title">Welcome Card</span>
      <p>This is a custom web component using slots!</p>
      <p>You can add any HTML content here.</p>
      <span slot="footer">Created: January 2026</span>
    </card-component>
    
    <card-component>
      <strong slot="title">Features</strong>
      <ul>
        <li>Reusable components</li>
        <li>Encapsulated styles</li>
        <li>Flexible content with slots</li>
      </ul>
      <em slot="footer">Last updated today</em>
    </card-component>
    
    <card-component>
      <span slot="title">Default Content Example</span>
      <!-- No footer slot provided, will show default -->
    </card-component>
    
    <script>
      // Define custom element class
      class CardComponent extends HTMLElement {
        constructor() {
          super();
          
          // Attach shadow DOM
          const shadowRoot = this.attachShadow({ mode: 'open' });
          
          // Get template
          const template = document.getElementById('card-template');
          
          // Clone and append template content
          shadowRoot.appendChild(template.content.cloneNode(true));
        }
      }
      
      // Register custom element
      customElements.define('card-component', CardComponent);
      
      console.log('Card component registered successfully!');
    </script>
  </body>
</html>`,
    hints: [
      'Define a <template> with <slot> elements for content placeholders',
      'Named slots use name attribute: <slot name="title">',
      'Default slot has no name attribute: <slot></slot>',
      'Create a class extending HTMLElement',
      'Use attachShadow({ mode: "open" }) to create shadow DOM',
      'Clone template.content and append to shadow root',
      'Register with customElements.define(\'element-name\', Class)',
      'Content uses slot="name" to target named slots'
    ],
    testCases: [
      { name: 'Has template element', test: (code: string) => code.includes('<template') && code.includes('</template>'), errorMessage: 'Must include <template> element' },
      { name: 'Template has ID', test: (code: string) => /<template[^>]*id=/.test(code), errorMessage: 'Template must have an id attribute' },
      { name: 'Has slot elements', test: (code: string) => (code.match(/<slot/g) || []).length >= 2, errorMessage: 'Template must have at least 2 <slot> elements' },
      { name: 'Has named slot', test: (code: string) => /<slot[^>]*name=/.test(code), errorMessage: 'Must have at least one named slot' },
      { name: 'Has custom element usage', test: (code: string) => /<card-component/.test(code) || /<[a-z]+-[a-z]+/.test(code), errorMessage: 'Must use custom element (e.g., <card-component>)' },
      { name: 'Has script tag', test: (code: string) => code.includes('<script>') && code.includes('</script>'), errorMessage: 'Must include JavaScript in <script> tag' },
      { name: 'Defines custom element', test: (code: string) => code.includes('customElements.define'), errorMessage: 'Must register custom element with customElements.define()' },
      { name: 'Uses attachShadow', test: (code: string) => code.includes('attachShadow'), errorMessage: 'Must use attachShadow() to create shadow DOM' }
    ]
  },
  {
    id: 'html-48',
    title: 'Custom Elements - Creating Your Own HTML Tags',
    description: 'Master custom elements to create reusable components',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 40,
    content: `# Custom Elements

## Introduction to Custom Elements
Custom Elements allow you to create your own HTML tags with custom behavior. They're a core technology of Web Components, enabling you to extend HTML with new elements.

## Defining a Custom Element

### Basic Structure
\`\`\`javascript
class MyElement extends HTMLElement {
  constructor() {
    super();  // Always call super() first
    // Element initialization
  }
  
  connectedCallback() {
    // Called when element is added to DOM
    this.innerHTML = '<p>Hello from custom element!</p>';
  }
}

// Register the custom element
customElements.define('my-element', MyElement);
\`\`\`

### Usage
\`\`\`html
<my-element></my-element>
\`\`\`

## Naming Rules

1. **Must contain hyphen**: \`my-element\` ✓, \`myelement\` ✗
2. **Lowercase only**: \`my-element\` ✓, \`My-Element\` ✗
3. **Start with letter**: \`a-element\` ✓, \`1-element\` ✗
4. **No reserved names**: Can't override built-in elements

## Lifecycle Callbacks

### connectedCallback()
Called when element is inserted into DOM:
\`\`\`javascript
connectedCallback() {
  console.log('Element added to page');
  this.render();
}
\`\`\`

### disconnectedCallback()
Called when element is removed from DOM:
\`\`\`javascript
disconnectedCallback() {
  console.log('Element removed');
  // Cleanup: remove event listeners, etc.
}
\`\`\`

### attributeChangedCallback()
Called when observed attributes change:
\`\`\`javascript
static get observedAttributes() {
  return ['color', 'size'];  // Which attributes to watch
}

attributeChangedCallback(name, oldValue, newValue) {
  console.log(\`\${name} changed from \${oldValue} to \${newValue}\`);
  this.render();
}
\`\`\`

### adoptedCallback()
Called when element is moved to new document:
\`\`\`javascript
adoptedCallback() {
  console.log('Element moved to new document');
}
\`\`\`

## Complete Example - User Badge

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Custom Elements</title>
</head>
<body>
  <user-badge name="Alice" role="Admin" color="blue"></user-badge>
  <user-badge name="Bob" role="User"></user-badge>
  
  <script>
    class UserBadge extends HTMLElement {
      static get observedAttributes() {
        return ['name', 'role', 'color'];
      }
      
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
      }
      
      connectedCallback() {
        this.render();
      }
      
      attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
          this.render();
        }
      }
      
      render() {
        const name = this.getAttribute('name') || 'Unknown';
        const role = this.getAttribute('role') || 'Guest';
        const color = this.getAttribute('color') || 'gray';
        
        this.shadowRoot.innerHTML = \`
          <style>
            .badge {
              display: inline-block;
              padding: 10px 15px;
              background: \${color};
              color: white;
              border-radius: 5px;
              font-family: Arial;
            }
            .name { font-weight: bold; }
            .role { font-size: 12px; opacity: 0.9; }
          </style>
          <div class="badge">
            <div class="name">\${name}</div>
            <div class="role">\${role}</div>
          </div>
        \`;
      }
    }
    
    customElements.define('user-badge', UserBadge);
  </script>
</body>
</html>
\`\`\`

## Attributes and Properties

### Reading Attributes
\`\`\`javascript
const value = this.getAttribute('my-attr');
const hasAttr = this.hasAttribute('my-attr');
\`\`\`

### Setting Attributes
\`\`\`javascript
this.setAttribute('my-attr', 'value');
this.removeAttribute('my-attr');
\`\`\`

### Properties (JavaScript)
\`\`\`javascript
class MyElement extends HTMLElement {
  get value() {
    return this.getAttribute('value');
  }
  
  set value(val) {
    this.setAttribute('value', val);
  }
}

// Usage
const el = document.querySelector('my-element');
el.value = 'new value';  // Uses setter
\`\`\`

## Extending Built-in Elements

### Customized Built-in
\`\`\`javascript
class FancyButton extends HTMLButtonElement {
  connectedCallback() {
    this.addEventListener('click', () => {
      this.style.transform = 'scale(0.95)';
    });
  }
}

customElements.define('fancy-button', FancyButton, { extends: 'button' });
\`\`\`

### Usage
\`\`\`html
<button is="fancy-button">Click Me</button>
\`\`\`

## Shadow DOM Integration

\`\`\`javascript
class MyElement extends HTMLElement {
  constructor() {
    super();
    // Attach shadow DOM for encapsulation
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = '<p>Shadow content</p>';
  }
}
\`\`\`

## Event Handling

\`\`\`javascript
class ClickCounter extends HTMLElement {
  constructor() {
    super();
    this.count = 0;
  }
  
  connectedCallback() {
    this.innerHTML = \`
      <button>Clicked \${this.count} times</button>
    \`;
    
    this.querySelector('button').addEventListener('click', () => {
      this.count++;
      this.connectedCallback();  // Re-render
    });
  }
}
\`\`\`

## Best Practices

1. **Always call super()** in constructor
2. **Use Shadow DOM** for style encapsulation
3. **Observe attributes** for reactive updates
4. **Clean up** in disconnectedCallback
5. **Handle errors** gracefully
6. **Use semantic names** that describe purpose
7. **Document attributes** users can set

## Browser Support
Excellent support in all modern browsers.

## Your Task:
Create a custom element that displays a user profile card with attributes for name, title, and image.`,
    initialCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Custom Elements</title>
  </head>
  <body>
    <h1>Custom Elements Example</h1>
    
    <!-- Use your custom element here -->
    <user-profile name="Jane Doe" title="Developer"></user-profile>
    
    <script>
      // TODO: Define a class extending HTMLElement
      class UserProfile extends HTMLElement {
        constructor() {
          super();
          // TODO: Attach shadow DOM
        }
        
        // TODO: Implement connectedCallback
        
        // TODO: Render the profile card
      }
      
      // TODO: Register the custom element
      
    </script>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Elements - User Profile Cards</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        max-width: 900px;
        margin: 0 auto;
        padding: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        min-height: 100vh;
      }
      
      h1 {
        color: white;
        text-align: center;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      }
      
      .container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
      }
    </style>
  </head>
  <body>
    <h1>Custom Element - User Profile Cards</h1>
    
    <div class="container">
      <!-- Custom element instances with different attributes -->
      <user-profile 
        name="Sarah Johnson" 
        title="Senior Developer" 
        email="sarah@example.com"
        color="#3498db">
      </user-profile>
      
      <user-profile 
        name="Mike Chen" 
        title="UX Designer" 
        email="mike@example.com"
        color="#e74c3c">
      </user-profile>
      
      <user-profile 
        name="Emma Wilson" 
        title="Product Manager" 
        email="emma@example.com"
        color="#2ecc71">
      </user-profile>
    </div>
    
    <script>
      // Define custom element class
      class UserProfile extends HTMLElement {
        // Specify which attributes to observe
        static get observedAttributes() {
          return ['name', 'title', 'email', 'color'];
        }
        
        constructor() {
          super();
          // Attach shadow DOM for encapsulation
          this.attachShadow({ mode: 'open' });
        }
        
        // Called when element is added to DOM
        connectedCallback() {
          this.render();
        }
        
        // Called when observed attributes change
        attributeChangedCallback(name, oldValue, newValue) {
          if (oldValue !== newValue) {
            this.render();
          }
        }
        
        // Render method
        render() {
          const name = this.getAttribute('name') || 'Anonymous';
          const title = this.getAttribute('title') || 'No Title';
          const email = this.getAttribute('email') || 'no-email@example.com';
          const color = this.getAttribute('color') || '#6c757d';
          
          this.shadowRoot.innerHTML = \`
            <style>
              .profile-card {
                background: white;
                border-radius: 12px;
                padding: 30px;
                width: 250px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                text-align: center;
                transition: transform 0.3s ease;
              }
              
              .profile-card:hover {
                transform: translateY(-5px);
              }
              
              .avatar {
                width: 80px;
                height: 80px;
                border-radius: 50%;
                background: \${color};
                margin: 0 auto 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 36px;
                color: white;
                font-weight: bold;
              }
              
              .name {
                font-size: 24px;
                font-weight: bold;
                color: #333;
                margin: 10px 0;
              }
              
              .title {
                font-size: 16px;
                color: #666;
                margin: 5px 0;
              }
              
              .email {
                font-size: 14px;
                color: \${color};
                margin: 10px 0;
              }
              
              .button {
                background: \${color};
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 6px;
                cursor: pointer;
                margin-top: 15px;
                font-size: 14px;
              }
              
              .button:hover {
                opacity: 0.9;
              }
            </style>
            
            <div class="profile-card">
              <div class="avatar">\${name.charAt(0)}</div>
              <div class="name">\${name}</div>
              <div class="title">\${title}</div>
              <div class="email">\${email}</div>
              <button class="button">View Profile</button>
            </div>
          \`;
          
          // Add event listener to button
          const button = this.shadowRoot.querySelector('.button');
          button.addEventListener('click', () => {
            alert(\`Viewing profile for \${name}\`);
          });
        }
      }
      
      // Register the custom element
      customElements.define('user-profile', UserProfile);
      
      console.log('UserProfile custom element registered!');
    </script>
  </body>
</html>`,
    hints: [
      'Create a class extending HTMLElement',
      'Always call super() first in constructor',
      'Use attachShadow({ mode: "open" }) for shadow DOM',
      'Implement connectedCallback() to initialize when added to DOM',
      'Use getAttribute() to read attribute values',
      'Register with customElements.define(\'element-name\', Class)',
      'Custom element names must contain a hyphen',
      'observedAttributes() returns array of attributes to watch'
    ],
    testCases: [
      { name: 'Has custom element usage', test: (code: string) => /<user-profile/.test(code) || /<[a-z]+-[a-z]+/.test(code), errorMessage: 'Must use custom element (e.g., <user-profile>)' },
      { name: 'Has script tag', test: (code: string) => code.includes('<script>') && code.includes('</script>'), errorMessage: 'Must include JavaScript in <script> tag' },
      { name: 'Extends HTMLElement', test: (code: string) => code.includes('extends HTMLElement'), errorMessage: 'Custom element class must extend HTMLElement' },
      { name: 'Has constructor', test: (code: string) => code.includes('constructor()'), errorMessage: 'Class must have constructor method' },
      { name: 'Calls super', test: (code: string) => code.includes('super()'), errorMessage: 'Constructor must call super()' },
      { name: 'Uses attachShadow', test: (code: string) => code.includes('attachShadow'), errorMessage: 'Should use attachShadow() for shadow DOM' },
      { name: 'Registers element', test: (code: string) => code.includes('customElements.define'), errorMessage: 'Must register element with customElements.define()' },
      { name: 'Has connectedCallback', test: (code: string) => code.includes('connectedCallback'), errorMessage: 'Should implement connectedCallback() lifecycle method' }
    ]
  },
  {
    id: 'html-49',
    title: 'Shadow DOM - Encapsulated Components',
    description: 'Master Shadow DOM for true component encapsulation',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 40,
    content: `# Shadow DOM

## Introduction to Shadow DOM
Shadow DOM provides true encapsulation for web components. It creates a separate DOM tree that's isolated from the main document, preventing style and script conflicts.

## Why Shadow DOM?

### Problems Without Shadow DOM:
1. CSS from page affects your component
2. Your component's CSS affects the page
3. IDs can conflict
4. JavaScript can accidentally modify internals

### Shadow DOM Solves:
✅ **Style Encapsulation** - Styles don't leak in or out  
✅ **DOM Encapsulation** - Internal structure is hidden  
✅ **Composition** - Clear boundaries between components

## Creating Shadow DOM

### Basic Attachment
\`\`\`javascript
const element = document.querySelector('#my-element');
const shadowRoot = element.attachShadow({ mode: 'open' });
shadowRoot.innerHTML = '<p>Shadow content</p>';
\`\`\`

### With Custom Element
\`\`\`javascript
class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = \`
      <style>
        p { color: blue; }  /* Only affects this component */
      </style>
      <p>Hello from shadow DOM!</p>
    \`;
  }
}
\`\`\`

## Shadow DOM Modes

### Open Mode
\`\`\`javascript
const shadow = element.attachShadow({ mode: 'open' });
// Can access: element.shadowRoot
\`\`\`

### Closed Mode
\`\`\`javascript
const shadow = element.attachShadow({ mode: 'closed' });
// element.shadowRoot returns null
// Shadow root is only accessible via closure
\`\`\`

## Style Encapsulation

### Styles Inside Shadow DOM
\`\`\`javascript
shadowRoot.innerHTML = \`
  <style>
    /* These styles ONLY affect elements in this shadow DOM */
    p { color: red; }
    .button { background: blue; }
  </style>
  <p>Red text</p>
  <button class="button">Blue button</button>
\`;
\`\`\`

### :host Selector
Style the host element from inside:
\`\`\`css
:host {
  display: block;
  border: 1px solid black;
}

:host(.active) {
  border-color: red;
}

:host(:hover) {
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
}
\`\`\`

### :host-context()
Style based on ancestor:
\`\`\`css
:host-context(.dark-mode) {
  background: #333;
  color: white;
}
\`\`\`

### ::slotted()
Style slotted content:
\`\`\`css
::slotted(p) {
  color: blue;
}
\`\`\`

## Complete Example - Styled Button

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* Page styles - won't affect shadow DOM */
    button { color: green; }
  </style>
</head>
<body>
  <fancy-button>Click Me</fancy-button>
  <button>Regular Button</button>  <!-- Green from page CSS -->
  
  <script>
    class FancyButton extends HTMLElement {
      constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        
        shadow.innerHTML = \`
          <style>
            :host {
              display: inline-block;
            }
            
            button {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              border: none;
              padding: 12px 24px;
              border-radius: 6px;
              cursor: pointer;
              font-size: 16px;
              transition: transform 0.2s;
            }
            
            button:hover {
              transform: scale(1.05);
            }
            
            button:active {
              transform: scale(0.95);
            }
          </style>
          <button><slot></slot></button>
        \`;
      }
    }
    
    customElements.define('fancy-button', FancyButton);
  </script>
</body>
</html>
\`\`\`

## Accessing Shadow DOM

### From Outside (open mode)
\`\`\`javascript
const element = document.querySelector('my-element');
const shadow = element.shadowRoot;
const button = shadow.querySelector('button');
\`\`\`

### From Inside
\`\`\`javascript
class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = '<p>Content</p>';
    
    // Access elements
    const p = this.shadowRoot.querySelector('p');
  }
}
\`\`\`

## Slots and Shadow DOM

\`\`\`javascript
class MyCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    this.shadowRoot.innerHTML = \`
      <style>
        .card {
          border: 1px solid #ccc;
          padding: 20px;
        }
        ::slotted(h2) {
          color: blue;
        }
      </style>
      <div class="card">
        <slot name="header"></slot>
        <slot></slot>
      </div>
    \`;
  }
}
\`\`\`

## Events in Shadow DOM

### Event Retargeting
Events crossing shadow boundary appear to come from host:
\`\`\`javascript
shadowRoot.querySelector('button').addEventListener('click', (e) => {
  console.log(e.target);  // The button
});

document.addEventListener('click', (e) => {
  console.log(e.target);  // The custom element (host)
});
\`\`\`

### Composed Events
Some events cross shadow boundary:
- click, mousedown, mouseup
- keydown, keyup
- focus, blur

## Browser DevTools

Chrome/Edge DevTools:
- Enable "Show user agent shadow DOM"
- Inspect shadow roots in Elements panel

## Best Practices

1. **Use open mode** unless you have specific security needs
2. **Keep styles inside** - Don't use global styles
3. **Use slots** for content distribution
4. **Handle events** - Listen on host or shadow elements
5. **Test encapsulation** - Verify styles don't leak
6. **Document slots** - Tell users what content they can provide

## Shadow DOM vs iframe

**Shadow DOM**: ✓ Same document, ✓ Fast, ✓ Flexible  
**iframe**: Full isolation, ✗ Slow, ✗ Separate context

## Your Task:
Create a custom tooltip component using Shadow DOM with encapsulated styles and behavior.`,
    initialCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Shadow DOM</title>
    <style>
      /* Global styles - should NOT affect shadow DOM */
      span { color: red; font-size: 20px; }
    </style>
  </head>
  <body>
    <h1>Shadow DOM Example</h1>
    
    <!-- Use custom tooltip element -->
    <custom-tooltip text="This is a tooltip!">
      Hover over me
    </custom-tooltip>
    
    <p>Regular <span>span element</span> - affected by global styles</p>
    
    <script>
      class CustomTooltip extends HTMLElement {
        constructor() {
          super();
          // TODO: Attach shadow DOM
          
          // TODO: Add styles and content
          
        }
      }
      
      // TODO: Register custom element
      
    </script>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shadow DOM - Custom Tooltip</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        padding: 50px;
        line-height: 2;
      }
      
      /* Global styles - will NOT affect shadow DOM content */
      span {
        color: red;
        font-size: 24px;
        font-weight: bold;
      }
      
      .container {
        max-width: 800px;
        margin: 0 auto;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Shadow DOM - Encapsulated Tooltip Component</h1>
      
      <p>
        This is a paragraph with a 
        <custom-tooltip text="This is helpful information!">
          <span>custom tooltip</span>
        </custom-tooltip>
        that uses Shadow DOM for style encapsulation.
      </p>
      
      <p>
        Notice how the global <span>span styles</span> (red, 24px, bold) 
        don't affect the tooltip's internal span elements.
      </p>
      
      <p>
        Here's another 
        <custom-tooltip text="Shadow DOM prevents style conflicts!">
          <span>tooltip example</span>
        </custom-tooltip>
        to demonstrate.
      </p>
    </div>
    
    <script>
      class CustomTooltip extends HTMLElement {
        constructor() {
          super();
          
          // Attach shadow DOM (open mode)
          this.attachShadow({ mode: 'open' });
          
          // Get tooltip text from attribute
          const tooltipText = this.getAttribute('text') || 'Tooltip';
          
          // Set shadow DOM content with encapsulated styles
          this.shadowRoot.innerHTML = \`
            <style>
              /* These styles ONLY affect this shadow DOM */
              :host {
                position: relative;
                display: inline-block;
                cursor: help;
              }
              
              /* Style slotted content */
              ::slotted(*) {
                color: #3498db !important;
                text-decoration: underline;
                text-decoration-style: dotted;
              }
              
              .tooltip-box {
                position: absolute;
                bottom: 125%;
                left: 50%;
                transform: translateX(-50%);
                background-color: #333;
                color: white;
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 14px;
                white-space: nowrap;
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.3s, visibility 0.3s;
                z-index: 1000;
                box-shadow: 0 4px 6px rgba(0,0,0,0.3);
              }
              
              .tooltip-box::after {
                content: '';
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
                border: 6px solid transparent;
                border-top-color: #333;
              }
              
              :host(:hover) .tooltip-box {
                opacity: 1;
                visibility: visible;
              }
            </style>
            
            <!-- Slot for user content -->
            <slot></slot>
            
            <!-- Tooltip box (hidden by default) -->
            <span class="tooltip-box">\${tooltipText}</span>
          \`;
        }
      }
      
      // Register the custom element
      customElements.define('custom-tooltip', CustomTooltip);
      
      console.log('Custom tooltip with Shadow DOM registered!');
      console.log('Shadow DOM prevents global styles from affecting tooltip internals.');
    </script>
  </body>
</html>`,
    hints: [
      'Use attachShadow({ mode: "open" }) to create shadow DOM',
      'Styles inside shadow DOM only affect that shadow tree',
      'Use :host to style the host element from inside',
      'Use ::slotted() to style slotted content',
      'Global page styles won\'t affect shadow DOM content',
      'Access shadow root with this.shadowRoot',
      'Put styles in <style> tag inside shadow DOM innerHTML'
    ],
    testCases: [
      { name: 'Has custom element', test: (code: string) => /<custom-tooltip/.test(code) || /<[a-z]+-[a-z]+/.test(code), errorMessage: 'Must use custom element' },
      { name: 'Has script tag', test: (code: string) => code.includes('<script>') && code.includes('</script>'), errorMessage: 'Must include JavaScript' },
      { name: 'Uses attachShadow', test: (code: string) => code.includes('attachShadow'), errorMessage: 'Must use attachShadow() to create shadow DOM' },
      { name: 'Shadow DOM mode specified', test: (code: string) => code.includes('mode:') && (code.includes('\'open\'') || code.includes('"open"')), errorMessage: 'Must specify mode for attachShadow()' },
      { name: 'Accesses shadowRoot', test: (code: string) => code.includes('shadowRoot'), errorMessage: 'Must access this.shadowRoot' },
      { name: 'Has encapsulated styles', test: (code: string) => code.includes('<style>') && code.includes('shadowRoot.innerHTML'), errorMessage: 'Should include styles in shadow DOM' },
      { name: 'Extends HTMLElement', test: (code: string) => code.includes('extends HTMLElement'), errorMessage: 'Class must extend HTMLElement' },
      { name: 'Registers element', test: (code: string) => code.includes('customElements.define'), errorMessage: 'Must register element with customElements.define()' }
    ]
  },
  {
    id: 'html-50',
    title: 'HTML Best Practices & Modern Standards',
    description: 'Master HTML5 best practices for professional web development',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 45,
    content: `# HTML Best Practices & Modern Standards

## Introduction
This lesson covers essential best practices for writing clean, maintainable, accessible, and performant HTML code that follows modern web standards.

## 1. Document Structure

### Always Start with DOCTYPE
\`\`\`html
<!DOCTYPE html>  <!-- HTML5 doctype -->
\`\`\`

### Complete Head Section
\`\`\`html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Page description">
  <title>Page Title - Site Name</title>
  <link rel="icon" href="favicon.ico">
</head>
\`\`\`

## 2. Semantic HTML

### Use Semantic Elements
❌ **Avoid**:
\`\`\`html
<div class="header">
  <div class="nav">...</div>
</div>
<div class="main">...</div>
\`\`\`

✅ **Prefer**:
\`\`\`html
<header>
  <nav>...</nav>
</header>
<main>...</main>
\`\`\`

### Semantic Elements:
- \`<header>\`, \`<footer>\`, \`<nav>\`, \`<main>\`
- \`<article>\`, \`<section>\`, \`<aside>\`
- \`<figure>\`, \`<figcaption>\`
- \`<details>\`, \`<summary>\`

## 3. Accessibility (a11y)

### Always Include Alt Text
\`\`\`html
<img src="photo.jpg" alt="Woman coding at laptop">
<img src="decorative.jpg" alt="">  <!-- Empty for decorative -->
\`\`\`

### Form Labels
\`\`\`html
<label for="email">Email:</label>
<input type="email" id="email" name="email" required>
\`\`\`

### ARIA When Needed
\`\`\`html
<button aria-label="Close dialog">×</button>
<div role="alert" aria-live="polite">Success!</div>
\`\`\`

### Heading Hierarchy
\`\`\`html
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>
    <h3>Subsection</h3>
  <h2>Section</h2>
\`\`\`

## 4. Performance Best Practices

### Optimize Images
\`\`\`html
<!-- Use appropriate image formats -->
<picture>
  <source type="image/webp" srcset="image.webp">
  <img src="image.jpg" alt="Description" loading="lazy" width="800" height="600">
</picture>
\`\`\`

### Script Loading
\`\`\`html
<!-- Defer non-critical scripts -->
<script src="script.js" defer></script>

<!-- Async for independent scripts -->
<script src="analytics.js" async></script>
\`\`\`

### Preconnect to External Domains
\`\`\`html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://cdn.example.com">
\`\`\`

## 5. Code Organization

### Indent Properly
\`\`\`html
<div>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</div>
\`\`\`

### Use Comments Wisely
\`\`\`html
<!-- Header Section -->
<header>
  <!-- Navigation will be inserted here by JS -->
</header>
\`\`\`

### Lowercase Tags and Attributes
✅ \`<div class="container">\`  
❌ \`<DIV CLASS="container">\`

### Quote Attributes
✅ \`<img src="photo.jpg" alt="Photo">\`  
❌ \`<img src=photo.jpg alt=Photo>\`

## 6. Forms Best Practices

### Complete Form Example
\`\`\`html
<form action="/submit" method="POST" novalidate>
  <div>
    <label for="name">Full Name *</label>
    <input type="text" id="name" name="name" required 
           autocomplete="name" aria-required="true">
  </div>
  
  <div>
    <label for="email">Email *</label>
    <input type="email" id="email" name="email" required 
           autocomplete="email" placeholder="you@example.com">
  </div>
  
  <button type="submit">Submit</button>
</form>
\`\`\`

### Input Types
Use specific input types:
- \`type="email"\`, \`type="tel"\`, \`type="url"\`
- \`type="number"\`, \`type="date"\`, \`type="time"\`
- \`type="search"\`, \`type="color"\`

## 7. Security

### External Links
\`\`\`html
<a href="https://external.com" target="_blank" rel="noopener noreferrer">
  External Link
</a>
\`\`\`

### User-Generated Content
Always sanitize! Never trust user input.

## 8. SEO Best Practices

### Meta Tags
\`\`\`html
<meta name="description" content="Compelling 150-160 char description">
<meta name="keywords" content="html, best practices, web development">
<link rel="canonical" href="https://example.com/page">
\`\`\`

### Structured Data
\`\`\`html
<article itemscope itemtype="https://schema.org/Article">
  <h1 itemprop="headline">Article Title</h1>
  <meta itemprop="datePublished" content="2024-01-15">
</article>
\`\`\`

## 9. Mobile-First

### Viewport Meta Tag
\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

### Touch-Friendly
\`\`\`html
<!-- Large enough tap targets (min 44x44px) -->
<button style="min-width: 44px; min-height: 44px;">Tap Me</button>
\`\`\`

## 10. Validation

### Use Valid HTML
- Run through W3C Validator
- Fix errors and warnings
- Test in multiple browsers

### Common Mistakes to Avoid
❌ Unclosed tags  
❌ Nested block elements incorrectly  
❌ Missing required attributes  
❌ Invalid nesting (\`<p>\` inside \`<p>\`)

## 11. Modern HTML5 Features

### Use New Elements
\`\`\`html
<dialog id="myDialog">
  <form method="dialog">
    <button>Close</button>
  </form>
</dialog>

<details>
  <summary>Click to expand</summary>
  <p>Hidden content</p>
</details>
\`\`\`

## 12. Complete Example - Best Practices Page

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Learn HTML best practices for modern web development">
  <title>HTML Best Practices Guide | WebDev Learn</title>
  
  <link rel="icon" href="favicon.ico">
  <link rel="canonical" href="https://example.com/html-best-practices">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  
  <style>/* Critical CSS here */</style>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <a href="#main" class="skip-link">Skip to main content</a>
  
  <header>
    <nav aria-label="Primary navigation">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  </header>
  
  <main id="main">
    <article>
      <h1>HTML Best Practices</h1>
      
      <section>
        <h2>Introduction</h2>
        <p>Following best practices ensures your HTML is accessible, performant, and maintainable.</p>
      </section>
      
      <section>
        <h2>Key Points</h2>
        <ul>
          <li>Use semantic HTML</li>
          <li>Ensure accessibility</li>
          <li>Optimize performance</li>
        </ul>
      </section>
    </article>
  </main>
  
  <footer>
    <p>&copy; 2024 WebDev Learn. All rights reserved.</p>
  </footer>
  
  <script src="script.js" defer></script>
</body>
</html>
\`\`\`

## Your Task
Create a complete, production-ready HTML page that demonstrates ALL these best practices.`,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <!-- TODO: Add all essential meta tags -->
    <!-- TODO: Add proper title -->
    <!-- TODO: Add preconnect for performance -->
  </head>
  <body>
    <!-- TODO: Add skip link for accessibility -->
    
    <!-- TODO: Create semantic header with navigation -->
    
    <!-- TODO: Create main content area -->
    <div>
      <h1>Best Practices Example</h1>
      
      <!-- TODO: Add accessible form -->
      
      <!-- TODO: Add optimized images -->
      
    </div>
    
    <!-- TODO: Create semantic footer -->
    
    <!-- TODO: Add scripts with proper loading -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Character encoding -->
  <meta charset="UTF-8">
  
  <!-- Responsive viewport -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- SEO meta tags -->
  <meta name="description" content="Comprehensive example of HTML5 best practices including accessibility, performance, and semantic markup">
  <meta name="keywords" content="HTML5, best practices, accessibility, performance, semantic HTML">
  <meta name="author" content="WebDev Expert">
  
  <!-- Title (under 60 chars) -->
  <title>HTML Best Practices Demo | Professional Web Development</title>
  
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="apple-touch-icon" href="apple-touch-icon.png">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://example.com/best-practices">
  
  <!-- Performance optimization -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="dns-prefetch" href="https://cdn.example.com">
  
  <!-- Open Graph for social media -->
  <meta property="og:title" content="HTML Best Practices Demo">
  <meta property="og:description" content="Learn professional HTML5 development standards">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://example.com/best-practices">
  <meta property="og:image" content="https://example.com/og-image.jpg">
  
  <!-- CSS -->
  <style>
    /* Critical CSS */
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
    .skip-link { position: absolute; top: -40px; }
    .skip-link:focus { top: 0; }
  </style>
</head>
<body>
  <!-- Skip to main content link for accessibility -->
  <a href="#main-content" class="skip-link">Skip to main content</a>
  
  <!-- Semantic header -->
  <header role="banner">
    <h1>HTML Best Practices Demo</h1>
    
    <!-- Semantic navigation with ARIA -->
    <nav aria-label="Primary navigation">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#examples">Examples</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <!-- Main content area -->
  <main id="main-content" role="main">
    <!-- Article with proper heading hierarchy -->
    <article>
      <h2 id="about">About This Page</h2>
      <p>This page demonstrates modern HTML5 best practices including semantic markup, accessibility features, performance optimizations, and SEO.</p>
      
      <section id="examples">
        <h3>Examples of Best Practices</h3>
        
        <!-- Accessible image with proper alt text -->
        <figure>
          <picture>
            <source type="image/webp" srcset="example.webp">
            <img src="example.jpg" 
                 alt="Developer writing clean HTML code" 
                 loading="lazy" 
                 width="800" 
                 height="600">
          </picture>
          <figcaption>Clean, semantic HTML code example</figcaption>
        </figure>
        
        <!-- Accessible form with proper labels -->
        <form action="/submit" method="POST" id="contact">
          <fieldset>
            <legend>Contact Form</legend>
            
            <div>
              <label for="name">Full Name *</label>
              <input type="text" 
                     id="name" 
                     name="name" 
                     required 
                     autocomplete="name"
                     aria-required="true">
            </div>
            
            <div>
              <label for="email">Email Address *</label>
              <input type="email" 
                     id="email" 
                     name="email" 
                     required 
                     autocomplete="email"
                     placeholder="you@example.com">
            </div>
            
            <div>
              <label for="message">Message</label>
              <textarea id="message" 
                        name="message" 
                        rows="5" 
                        aria-describedby="message-hint"></textarea>
              <small id="message-hint">Please provide detailed information</small>
            </div>
            
            <button type="submit">Send Message</button>
          </fieldset>
        </form>
        
        <!-- Structured data with microdata -->
        <div itemscope itemtype="https://schema.org/Article">
          <h3 itemprop="headline">HTML5 Modern Standards</h3>
          <p>Published on <time itemprop="datePublished" datetime="2024-01-15">January 15, 2024</time></p>
          <p itemprop="description">Comprehensive guide to HTML5 best practices.</p>
        </div>
      </section>
    </article>
    
    <!-- Aside for supplementary content -->
    <aside aria-label="Related resources">
      <h3>Related Resources</h3>
      <ul>
        <li><a href="https://validator.w3.org/" target="_blank" rel="noopener noreferrer">W3C HTML Validator</a></li>
        <li><a href="https://webaim.org/" target="_blank" rel="noopener noreferrer">WebAIM Accessibility</a></li>
      </ul>
    </aside>
  </main>
  
  <!-- Semantic footer -->
  <footer role="contentinfo">
    <p>&copy; 2024 HTML Best Practices. All rights reserved.</p>
    <nav aria-label="Footer navigation">
      <a href="/privacy">Privacy Policy</a> | 
      <a href="/terms">Terms of Service</a>
    </nav>
  </footer>
  
  <!-- Scripts with defer for performance -->
  <script src="main.js" defer></script>
  <script src="analytics.js" async></script>
</body>
</html>`,
    hints: [
      'Start with <!DOCTYPE html> and lang attribute on <html>',
      'Include all essential meta tags: charset, viewport, description',
      'Use semantic elements: header, nav, main, article, section, footer',
      'Every form input needs a proper <label> with matching for/id',
      'Add alt text to all images, use loading="lazy" for performance',
      'Include skip link for keyboard navigation accessibility',
      'Use defer or async on script tags for better performance',
      'Add ARIA labels where needed (aria-label, role attributes)',
      'Use proper heading hierarchy (h1 > h2 > h3)',
      'Include rel="noopener noreferrer" on external links with target="_blank"'
    ],
    testCases: [
      { name: 'Has DOCTYPE', test: (code: string) => code.includes('<!DOCTYPE html>'), errorMessage: 'Must include <!DOCTYPE html>' },
      { name: 'Has lang attribute', test: (code: string) => /<html[^>]*lang=/.test(code), errorMessage: 'HTML tag must have lang attribute' },
      { name: 'Has charset meta', test: (code: string) => code.includes('charset="UTF-8"'), errorMessage: 'Must include charset UTF-8 meta tag' },
      { name: 'Has viewport meta', test: (code: string) => code.includes('name="viewport"'), errorMessage: 'Must include viewport meta tag' },
      { name: 'Has semantic header', test: (code: string) => code.includes('<header'), errorMessage: 'Must use semantic <header> element' },
      { name: 'Has semantic nav', test: (code: string) => code.includes('<nav'), errorMessage: 'Must use semantic <nav> element' },
      { name: 'Has semantic main', test: (code: string) => code.includes('<main'), errorMessage: 'Must use semantic <main> element' },
      { name: 'Has semantic footer', test: (code: string) => code.includes('<footer'), errorMessage: 'Must use semantic <footer> element' },
      { name: 'Has form with labels', test: (code: string) => code.includes('<form') && code.includes('<label') && code.includes('for='), errorMessage: 'Must have form with proper labels' },
      { name: 'Has image with alt', test: (code: string) => code.includes('<img') && code.includes('alt='), errorMessage: 'Images must have alt attributes' },
      { name: 'Has ARIA attributes', test: (code: string) => code.includes('aria-') || code.includes('role='), errorMessage: 'Should include ARIA attributes for accessibility' },
      { name: 'Substantial content', test: (code: string) => code.length > 1500, errorMessage: 'Page should demonstrate comprehensive best practices' }
    ]
  },
  {
    id: 'html-51',
    title: 'Fullstack Capstone - Portfolio Website',
    description: 'Build a complete professional portfolio website using semantic HTML5',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 120,
    isProject: true,
    content: `# Fullstack Capstone Project - Portfolio Website 🌐

## Project Overview
Create a complete, professional portfolio website showcasing all HTML skills!

## Requirements

### 1. Page Structure
- Proper DOCTYPE and HTML5 structure
- Semantic header with navigation
- Multiple content sections (About, Skills, Projects, Contact)
- Semantic footer with copyright

### 2. Navigation
- Nav menu with internal links (#about, #skills, etc.)
- Skip to content link for accessibility
- Proper heading hierarchy (h1 → h6)

### 3. Content Sections
- **About**: Bio with heading, paragraphs, profile image
- **Skills**: Unordered list of technical skills
- **Projects**: Cards with images, headings, descriptions, links
- **Contact**: Form with name, email, message fields

### 4. Multimedia
- At least 2 images with alt text
- Embedded video (iframe or video tag)
- Audio element (optional)

### 5. Accessibility
- Semantic HTML elements (header, nav, main, section, footer)
- ARIA labels where needed
- Proper form labels
- Alt text for all images

## Example Structure
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>John Doe - Web Developer</title>
</head>
<body>
  <header>
    <h1>John Doe</h1>
    <nav>Links...</nav>
  </header>
  <main>
    <section id="about">...</section>
    <section id="skills">...</section>
    <section id="projects">...</section>
    <section id="contact">...</section>
  </main>
  <footer>...</footer>
</body>
</html>
\`\`\`

## Testing Criteria
1. Valid HTML5 structure
2. Semantic elements used correctly
3. Navigation with working anchor links
4. Form with proper labels and inputs
5. Images with alt attributes
6. At least 4 major sections
7. Accessibility features included`,
    initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio - Your Name</title>
</head>
<body>
  <!-- TODO: Build your portfolio website -->
  
  <!-- Header with navigation -->
  <header>
    <h1>Your Name</h1>
    <nav>
      <!-- TODO: Add navigation links -->
    </nav>
  </header>
  
  <!-- Main content -->
  <main>
    <!-- About section -->
    <section id="about">
      <h2>About Me</h2>
      <!-- TODO: Add bio and image -->
    </section>
    
    <!-- Skills section -->
    <section id="skills">
      <h2>Skills</h2>
      <!-- TODO: Add skills list -->
    </section>
    
    <!-- Projects section -->
    <section id="projects">
      <h2>Projects</h2>
      <!-- TODO: Add project cards -->
    </section>
    
    <!-- Contact section -->
    <section id="contact">
      <h2>Contact</h2>
      <!-- TODO: Add contact form -->
    </section>
  </main>
  
  <!-- Footer -->
  <footer>
    <p>&copy; 2024 Your Name. All rights reserved.</p>
  </footer>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>John Doe - Web Developer Portfolio</title>
</head>
<body>
  <a href="#main" class="skip-link">Skip to main content</a>
  
  <header>
    <h1>John Doe</h1>
    <p>Full Stack Web Developer</p>
    <nav aria-label="Primary navigation">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <main id="main">
    <section id="about">
      <h2>About Me</h2>
      <img src="profile.jpg" alt="John Doe headshot photo">
      <p>I'm a passionate web developer with expertise in modern technologies.</p>
      <p>I love building accessible, user-friendly web applications.</p>
    </section>
    
    <section id="skills">
      <h2>My Skills</h2>
      <ul>
        <li>HTML5 & Semantic Web</li>
        <li>CSS3 & Responsive Design</li>
        <li>JavaScript & TypeScript</li>
        <li>React & Next.js</li>
        <li>Node.js & Express</li>
      </ul>
    </section>
    
    <section id="projects">
      <h2>Featured Projects</h2>
      
      <article class="project-card">
        <h3>E-commerce Platform</h3>
        <img src="project1.jpg" alt="Screenshot of e-commerce website">
        <p>Full-featured online store with cart and checkout.</p>
        <a href="https://example.com/project1" target="_blank">View Project</a>
      </article>
      
      <article class="project-card">
        <h3>Task Manager App</h3>
        <img src="project2.jpg" alt="Screenshot of task management application">
        <p>Productivity app with drag-and-drop functionality.</p>
        <a href="https://example.com/project2" target="_blank">View Project</a>
      </article>
      
      <article class="project-card">
        <h3>Weather Dashboard</h3>
        <img src="project3.jpg" alt="Screenshot of weather forecast dashboard">
        <p>Real-time weather data visualization.</p>
        <a href="https://example.com/project3" target="_blank">View Project</a>
      </article>
    </section>
    
    <section id="contact">
      <h2>Get In Touch</h2>
      <form action="/submit" method="POST">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required>
        </div>
        
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
        </div>
        
        <div>
          <label for="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        
        <button type="submit">Send Message</button>
      </form>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2024 John Doe. All rights reserved.</p>
    <nav aria-label="Social media links">
      <a href="https://github.com/johndoe" target="_blank">GitHub</a>
      <a href="https://linkedin.com/in/johndoe" target="_blank">LinkedIn</a>
      <a href="https://twitter.com/johndoe" target="_blank">Twitter</a>
    </nav>
  </footer>
</body>
</html>`,
    hints: [
      'Start with proper DOCTYPE html and lang attribute',
      'Use semantic elements: header, nav, main, section, article, footer',
      'Every form input needs a corresponding label with matching "for" attribute',
      'All images must have descriptive alt text for accessibility',
      'Create navigation with ul > li > a structure',
      'Use heading hierarchy: h1 for page title, h2 for sections, h3 for subsections',
      'Include aria-label on nav elements for screen readers',
      'Form should have name, email (type="email"), and textarea fields',
      'Remember to include meta viewport tag for mobile responsiveness'
    ],
    testCases: [
      { name: 'Valid HTML structure', test: (code: string, output: string) => code.includes('<!DOCTYPE html>') && code.includes('<html') && code.includes('</html>'), errorMessage: 'Must have valid HTML5 structure' },
      { name: 'Has semantic header', test: (code: string, output: string) => code.includes('<header>') && code.includes('</header>'), errorMessage: 'Must include semantic header element' },
      { name: 'Has navigation', test: (code: string, output: string) => code.includes('<nav') && code.includes('</nav>'), errorMessage: 'Must include nav element' },
      { name: 'Has main content area', test: (code: string, output: string) => code.includes('<main') && code.includes('</main>'), errorMessage: 'Must include main element for primary content' },
      { name: 'Has multiple sections', test: (code: string, output: string) => (code.match(/<section/g) || []).length >= 3, errorMessage: 'Must have at least 3 section elements' },
      { name: 'Includes images', test: (code: string, output: string) => code.includes('<img') && code.includes('alt='), errorMessage: 'Must include images with alt attributes' },
      { name: 'Has contact form', test: (code: string, output: string) => code.includes('<form') && code.includes('<input') && code.includes('type="email"'), errorMessage: 'Must include contact form with email input' },
      { name: 'Form has labels', test: (code: string, output: string) => code.includes('<label') && code.includes('for='), errorMessage: 'Form inputs must have associated labels' },
      { name: 'Has footer', test: (code: string, output: string) => code.includes('<footer>') && code.includes('</footer>'), errorMessage: 'Must include semantic footer element' },
      { name: 'Uses heading hierarchy', test: (code: string, output: string) => code.includes('<h1>') && code.includes('<h2>'), errorMessage: 'Must use proper heading hierarchy (h1, h2, etc.)' },
      { name: 'Substantial content', test: (code: string, output: string) => code.length > 1000, errorMessage: 'Portfolio must have substantial content (1000+ characters)' }
    ]  }
]
