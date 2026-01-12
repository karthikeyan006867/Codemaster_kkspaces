const fs = require('fs');

// Generate 50 HTML lessons
const htmlLessons = [];

const htmlTopics = [
  { id: 1, title: 'HTML Basics - Your First Web Page', topic: 'HTML structure', difficulty: 'Beginner' },
  { id: 2, title: 'Headings and Paragraphs', topic: 'h1-h6, paragraphs', difficulty: 'Beginner' },
  { id: 3, title: 'Links and Navigation', topic: 'anchor tags, href', difficulty: 'Beginner' },
  { id: 4, title: 'Images and Media', topic: 'img, alt, src', difficulty: 'Beginner' },
  { id: 5, title: 'Lists - Ordered and Unordered', topic: 'ul, ol, li', difficulty: 'Beginner' },
  { id: 6, title: 'Text Formatting', topic: 'strong, em, mark', difficulty: 'Beginner' },
  { id: 7, title: 'Div and Span Containers', topic: 'div, span', difficulty: 'Beginner' },
  { id: 8, title: 'Tables - Rows and Columns', topic: 'table, tr, td', difficulty: 'Beginner' },
  { id: 9, title: 'Forms - Input Elements', topic: 'form, input', difficulty: 'Beginner' },
  { id: 10, title: 'Buttons and Input Types', topic: 'button, input types', difficulty: 'Beginner' },
  { id: 11, title: 'Semantic HTML - Header and Nav', topic: 'header, nav', difficulty: 'Beginner' },
  { id: 12, title: 'Semantic HTML - Main and Article', topic: 'main, article', difficulty: 'Beginner' },
  { id: 13, title: 'Semantic HTML - Footer and Aside', topic: 'footer, aside', difficulty: 'Beginner' },
  { id: 14, title: 'HTML5 Audio Element', topic: 'audio', difficulty: 'Beginner' },
  { id: 15, title: 'HTML5 Video Element', topic: 'video', difficulty: 'Beginner' },
  { id: 16, title: 'HTML5 Canvas Basics', topic: 'canvas', difficulty: 'Intermediate' },
  { id: 17, title: 'SVG Graphics', topic: 'SVG', difficulty: 'Intermediate' },
  { id: 18, title: 'Meta Tags and SEO', topic: 'meta', difficulty: 'Intermediate' },
  { id: 19, title: 'Responsive Images', topic: 'srcset', difficulty: 'Intermediate' },
  { id: 20, title: 'Figure and Figcaption', topic: 'figure', difficulty: 'Intermediate' },
  { id: 21, title: 'Details and Summary', topic: 'details', difficulty: 'Intermediate' },
  { id: 22, title: 'Progress and Meter', topic: 'progress', difficulty: 'Intermediate' },
  { id: 23, title: 'Time Element', topic: 'time', difficulty: 'Intermediate' },
  { id: 24, title: 'Mark and Highlight', topic: 'mark', difficulty: 'Intermediate' },
  { id: 25, title: 'Data Attributes', topic: 'data-*', difficulty: 'Intermediate' },
  { id: 26, title: 'Form Validation', topic: 'validation', difficulty: 'Intermediate' },
  { id: 27, title: 'Input Attributes', topic: 'attributes', difficulty: 'Intermediate' },
  { id: 28, title: 'Select and Dropdown', topic: 'select', difficulty: 'Intermediate' },
  { id: 29, title: 'Textarea Element', topic: 'textarea', difficulty: 'Intermediate' },
  { id: 30, title: 'Fieldset and Legend', topic: 'fieldset', difficulty: 'Intermediate' },
  { id: 31, title: 'IFrame Embedding', topic: 'iframe', difficulty: 'Intermediate' },
  { id: 32, title: 'Embed and Object', topic: 'embed', difficulty: 'Intermediate' },
  { id: 33, title: 'Accessibility - ARIA', topic: 'ARIA', difficulty: 'Intermediate' },
  { id: 34, title: 'Accessibility - Alt Text', topic: 'alt', difficulty: 'Intermediate' },
  { id: 35, title: 'Accessibility - Skip Links', topic: 'navigation', difficulty: 'Intermediate' },
  { id: 36, title: 'HTML Entities', topic: 'entities', difficulty: 'Intermediate' },
  { id: 37, title: 'Character Encoding', topic: 'UTF-8', difficulty: 'Intermediate' },
  { id: 38, title: 'Script Tags', topic: 'script', difficulty: 'Intermediate' },
  { id: 39, title: 'Link Relations', topic: 'rel', difficulty: 'Intermediate' },
  { id: 40, title: 'Base URL', topic: 'base', difficulty: 'Intermediate' },
  { id: 41, title: 'Template Element', topic: 'template', difficulty: 'Advanced' },
  { id: 42, title: 'Dialog Element', topic: 'dialog', difficulty: 'Advanced' },
  { id: 43, title: 'Web Storage', topic: 'localStorage', difficulty: 'Advanced' },
  { id: 44, title: 'Geolocation', topic: 'geolocation', difficulty: 'Advanced' },
  { id: 45, title: 'Drag and Drop', topic: 'draggable', difficulty: 'Advanced' },
  { id: 46, title: 'Web Workers', topic: 'workers', difficulty: 'Advanced' },
  { id: 47, title: 'Service Workers', topic: 'PWA', difficulty: 'Advanced' },
  { id: 48, title: 'Microdata', topic: 'schema', difficulty: 'Advanced' },
  { id: 49, title: 'Custom Elements', topic: 'web components', difficulty: 'Advanced' },
  { id: 50, title: 'Final Project - Complete Website', topic: 'full website', difficulty: 'Advanced' }
];

htmlTopics.forEach(lesson => {
  const isProject = lesson.id === 50;
  const time = isProject ? 120 : 25 + (lesson.id % 3) * 5;
  
  htmlLessons.push(`  {
    id: 'html-${lesson.id}',
    title: '${lesson.title}',
    description: 'Master ${lesson.topic} in HTML',
    language: 'html' as const,
    difficulty: '${lesson.difficulty}',
    estimatedTime: ${time},${isProject ? '\n    isProject: true,' : ''}
    content: \`# ${lesson.title}

Learn about ${lesson.topic} in HTML.

## Key Concepts:
- Understanding ${lesson.topic}
- Best practices
- Real-world examples

Practice implementing ${lesson.topic}!\`,
    initialCode: \`<!DOCTYPE html>
<html>
  <head>
    <title>${lesson.title}</title>
  </head>
  <body>
    <!-- Implement ${lesson.topic} here -->
  </body>
</html>\`,
    solution: \`<!DOCTYPE html>
<html>
  <head>
    <title>${lesson.title}</title>
  </head>
  <body>
    <h1>${lesson.title}</h1>
    <p>Implementation of ${lesson.topic}</p>
  </body>
</html>\`,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  }`);
});

const htmlContent = `import { Lesson } from '../courses'

export const htmlLessons: Lesson[] = [
${htmlLessons.join(',\n')}
]
`;

fs.writeFileSync('./data/lessons/htmlLessons.ts', htmlContent);

// Generate 50 CSS lessons
const cssLessons = [];

const cssTopics = [
  { id: 1, title: 'CSS Basics - Styling Your First Page', topic: 'CSS syntax', difficulty: 'Beginner' },
  { id: 2, title: 'Colors in CSS', topic: 'color values', difficulty: 'Beginner' },
  { id: 3, title: 'Text Styling', topic: 'font properties', difficulty: 'Beginner' },
  { id: 4, title: 'Box Model', topic: 'margin, padding', difficulty: 'Beginner' },
  { id: 5, title: 'Width and Height', topic: 'sizing', difficulty: 'Beginner' },
  { id: 6, title: 'Borders', topic: 'border styles', difficulty: 'Beginner' },
  { id: 7, title: 'Backgrounds', topic: 'background', difficulty: 'Beginner' },
  { id: 8, title: 'Classes and IDs', topic: 'selectors', difficulty: 'Beginner' },
  { id: 9, title: 'Combinators', topic: 'selectors', difficulty: 'Beginner' },
  { id: 10, title: 'Pseudo-classes', topic: 'hover, active', difficulty: 'Beginner' },
  { id: 11, title: 'Display Property', topic: 'display', difficulty: 'Beginner' },
  { id: 12, title: 'Position', topic: 'positioning', difficulty: 'Beginner' },
  { id: 13, title: 'Z-Index', topic: 'stacking', difficulty: 'Beginner' },
  { id: 14, title: 'Float and Clear', topic: 'layout', difficulty: 'Beginner' },
  { id: 15, title: 'Flexbox Basics', topic: 'flexbox', difficulty: 'Beginner' },
  { id: 16, title: 'Flexbox Direction', topic: 'flex-direction', difficulty: 'Intermediate' },
  { id: 17, title: 'Flexbox Alignment', topic: 'alignment', difficulty: 'Intermediate' },
  { id: 18, title: 'Grid Basics', topic: 'grid', difficulty: 'Intermediate' },
  { id: 19, title: 'Grid Template', topic: 'grid template', difficulty: 'Intermediate' },
  { id: 20, title: 'Grid Alignment', topic: 'grid alignment', difficulty: 'Intermediate' },
  { id: 21, title: 'Transitions', topic: 'transitions', difficulty: 'Intermediate' },
  { id: 22, title: '2D Transforms', topic: 'transform', difficulty: 'Intermediate' },
  { id: 23, title: '3D Transforms', topic: '3D transform', difficulty: 'Intermediate' },
  { id: 24, title: 'Animations', topic: 'animations', difficulty: 'Intermediate' },
  { id: 25, title: 'Shadows', topic: 'shadows', difficulty: 'Intermediate' },
  { id: 26, title: 'Gradients', topic: 'gradients', difficulty: 'Intermediate' },
  { id: 27, title: 'Border Radius', topic: 'rounded corners', difficulty: 'Intermediate' },
  { id: 28, title: 'Opacity', topic: 'transparency', difficulty: 'Intermediate' },
  { id: 29, title: 'Overflow', topic: 'overflow', difficulty: 'Intermediate' },
  { id: 30, title: 'Visibility', topic: 'visibility', difficulty: 'Intermediate' },
  { id: 31, title: 'Cursor Styles', topic: 'cursor', difficulty: 'Intermediate' },
  { id: 32, title: 'List Styling', topic: 'lists', difficulty: 'Intermediate' },
  { id: 33, title: 'Table Styling', topic: 'tables', difficulty: 'Intermediate' },
  { id: 34, title: 'Form Styling', topic: 'forms', difficulty: 'Intermediate' },
  { id: 35, title: 'Media Queries', topic: 'responsive', difficulty: 'Intermediate' },
  { id: 36, title: 'Mobile First', topic: 'mobile-first', difficulty: 'Intermediate' },
  { id: 37, title: 'Responsive Units', topic: 'units', difficulty: 'Intermediate' },
  { id: 38, title: 'CSS Variables', topic: 'variables', difficulty: 'Intermediate' },
  { id: 39, title: 'Calc Function', topic: 'calculations', difficulty: 'Intermediate' },
  { id: 40, title: 'Filter Effects', topic: 'filters', difficulty: 'Intermediate' },
  { id: 41, title: 'Blend Modes', topic: 'blending', difficulty: 'Advanced' },
  { id: 42, title: 'Clip Path', topic: 'clipping', difficulty: 'Advanced' },
  { id: 43, title: 'Object Fit', topic: 'image sizing', difficulty: 'Advanced' },
  { id: 44, title: 'Scroll Behavior', topic: 'scrolling', difficulty: 'Advanced' },
  { id: 45, title: 'Grid Advanced', topic: 'advanced grid', difficulty: 'Advanced' },
  { id: 46, title: 'Flexbox Advanced', topic: 'advanced flex', difficulty: 'Advanced' },
  { id: 47, title: 'CSS Architecture', topic: 'architecture', difficulty: 'Advanced' },
  { id: 48, title: 'Performance', topic: 'optimization', difficulty: 'Advanced' },
  { id: 49, title: 'Browser Compatibility', topic: 'compatibility', difficulty: 'Advanced' },
  { id: 50, title: 'Final Project - Styled Website', topic: 'complete project', difficulty: 'Advanced' }
];

cssTopics.forEach(lesson => {
  const isProject = lesson.id === 50;
  const time = isProject ? 120 : 25 + (lesson.id % 3) * 5;
  
  cssLessons.push(`  {
    id: 'css-${lesson.id}',
    title: '${lesson.title}',
    description: 'Master ${lesson.topic} in CSS',
    language: 'html' as const,
    difficulty: '${lesson.difficulty}',
    estimatedTime: ${time},${isProject ? '\n    isProject: true,' : ''}
    content: \`# ${lesson.title}

Learn about ${lesson.topic} in CSS.

## Key Concepts:
- Understanding ${lesson.topic}
- Best practices
- Real-world examples

Practice implementing ${lesson.topic}!\`,
    initialCode: \`<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for ${lesson.topic} */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>\`,
    solution: \`<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of ${lesson.topic} */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>\`,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  }`);
});

const cssContent = `import { Lesson } from '../courses'

export const cssLessons: Lesson[] = [
${cssLessons.join(',\n')}
]
`;

fs.writeFileSync('./data/lessons/cssLessons.ts', cssContent);

console.log('✅ HTML lessons expanded to 50');
console.log('✅ CSS lessons expanded to 50');
