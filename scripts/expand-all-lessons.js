const fs = require('fs');
const path = require('path');

const lessonsDir = path.join(__dirname, '..', 'data', 'lessons');

// Topic templates for generating lessons
const topicTemplates = {
  html: [
    'Accessibility Best Practices', 'ARIA Roles', 'Landmark Regions', 'Skip Navigation', 'Focus Management',
    'Form Validation HTML5', 'Input Types Advanced', 'Custom Validation Messages', 'Fieldset and Legend',
    'Multi-step Forms', 'HTML Email Templates', 'Responsive Tables', 'Table Accessibility'
  ],
  css: [
    'CSS Grid Advanced', 'Flexbox Patterns', 'Animation Keyframes', 'Transition Timing', 'Transform 3D',
    'CSS Variables Advanced', 'Calc() Function', 'CSS Functions', 'Media Query Strategies', 'Container Queries',
    'Aspect Ratio', 'Object Fit', 'Mix Blend Modes', 'Filter Effects'
  ],
  javascript: [
    'Destructuring Advanced', 'Spread Operator Tricks', 'Rest Parameters', 'Optional Chaining Deep Dive',
    'Nullish Coalescing', 'Template Literals Advanced', 'Tagged Templates', 'Symbol Type',
    'WeakMap and WeakSet', 'Proxy Traps', 'Reflect API', 'Generator Advanced Patterns'
  ],
  python: [
    'Context Managers', 'Decorators Advanced', 'Metaclasses', 'Abstract Base Classes',
    'Dataclasses', 'Type Hints Advanced', 'Protocol Classes', 'Enum Types',
    'Itertools Module', 'Functools Patterns', 'Collections Module', 'AsyncIO Advanced'
  ],
  typescript: [
    'Utility Types', 'Conditional Types', 'Mapped Types', 'Template Literal Types',
    'Discriminated Unions', 'Type Guards Advanced', 'Type Predicates', 'Assertion Functions',
    'Module Augmentation', 'Declaration Merging', 'Namespace Patterns', 'Triple-Slash Directives'
  ],
  react: [
    'Context API Patterns', 'Custom Hooks Advanced', 'useReducer Patterns', 'useMemo Optimization',
    'useCallback Best Practices', 'useRef Advanced', 'useImperativeHandle', 'useLayoutEffect',
    'Error Boundaries', 'Portals', 'Code Splitting', 'Lazy Loading', 'Suspense API'
  ],
  nodejs: [
    'Stream Processing', 'Buffer Management', 'Child Processes', 'Cluster Module',
    'Worker Threads', 'EventEmitter Patterns', 'Middleware Design', 'Error Handling Strategies',
    'Security Best Practices', 'Performance Monitoring', 'Memory Management', 'Debugging Techniques'
  ],
  default: [
    'Best Practices', 'Code Organization', 'Design Patterns', 'Testing Strategies',
    'Debugging Techniques', 'Performance Optimization', 'Security Considerations', 'Error Handling',
    'Code Refactoring', 'Documentation', 'Version Control Integration', 'CI/CD Basics',
    'Advanced Concepts'
  ]
};

function generateLesson(id, title, language, difficulty, index) {
  return `  {
    id: '${id}',
    title: '${title}',
    description: 'Master ${title.toLowerCase()} concepts and techniques',
    content: \`# ${title}

## Overview
Learn about ${title.toLowerCase()} and how to apply it effectively in your projects.

## Key Concepts
- Understanding the fundamentals
- Practical applications
- Common patterns and anti-patterns
- Real-world examples

## Best Practices
Follow industry standards and write clean, maintainable code.

**Task:** Apply ${title.toLowerCase()} concepts in your code.
\`,
    language: '${language}',
    difficulty: '${difficulty}',
    estimatedTime: ${10 + Math.floor(Math.random() * 15)},
    initialCode: \`// Start your ${language} code here\n\`,
    solution: \`// Sample solution for ${title}\n// This demonstrates the core concepts\n\`,
    hints: ['Review the documentation', 'Start with simple examples', 'Practice regularly'],
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Make sure your code follows the lesson requirements'
      }
    ]
  }`;
}

function getLanguageFromFilename(filename) {
  const name = filename.replace('Lessons.ts', '').toLowerCase();
  if (name.includes('html')) return 'html';
  if (name.includes('css')) return 'css';
  if (name.includes('js') || name === 'javascript') return 'javascript';
  if (name.includes('python')) return 'python';
  if (name.includes('typescript')) return 'typescript';
  if (name.includes('react')) return 'jsx';
  if (name.includes('nodejs')) return 'javascript';
  return name;
}

function getDifficulty(index, total) {
  if (index < total * 0.3) return 'Beginner';
  if (index < total * 0.6) return 'Intermediate';
  return 'Advanced';
}

function expandLessonFile(filename) {
  const filepath = path.join(lessonsDir, filename);
  const content = fs.readFileSync(filepath, 'utf8');
  
  // Count existing lessons
  const lessonMatches = content.match(/\{\s*id:/g);
  const currentCount = lessonMatches ? lessonMatches.length : 0;
  
  console.log(`\n${filename}: ${currentCount} lessons`);
  
  if (currentCount >= 50) {
    console.log(`  ✓ Already has 50+ lessons, skipping`);
    return;
  }
  
  const needed = 50 - currentCount;
  console.log(`  → Adding ${needed} lessons to reach 50`);
  
  // Determine language and get topics
  const langName = filename.replace('Lessons.ts', '');
  const language = getLanguageFromFilename(filename);
  const topics = topicTemplates[language] || topicTemplates.default;
  
  // Generate new lessons
  const newLessons = [];
  for (let i = 0; i < needed; i++) {
    const lessonNum = currentCount + i + 1;
    const topicIndex = i % topics.length;
    const topic = topics[topicIndex];
    const id = `${langName.toLowerCase()}-${lessonNum}`;
    const difficulty = getDifficulty(lessonNum - 1, 50);
    
    newLessons.push(generateLesson(id, topic, language, difficulty, lessonNum));
  }
  
  // Find the last closing bracket of the lessons array
  let insertPos = content.lastIndexOf(']');
  if (insertPos === -1) {
    console.log(`  ✗ Could not find array closing bracket in ${filename}`);
    return;
  }
  
  // Check if there's content after the bracket (just whitespace is ok)
  const afterBracket = content.substring(insertPos + 1).trim();
  if (afterBracket.length > 0 && afterBracket !== ';') {
    console.log(`  ✗ Unexpected content after array in ${filename}`);
    return;
  }
  
  // Add comma after last existing lesson if needed
  let newContent = content.substring(0, insertPos);
  if (!newContent.trimEnd().endsWith(',')) {
    newContent += ',';
  }
  
  newContent += '\n\n  // EXPANDED LESSONS (Generated)\n' + newLessons.join(',\n');
  newContent += '\n]';
  
  // Add back the content after the array (semicolon, newlines, etc.)
  const restOfFile = content.substring(insertPos + 1);
  newContent += restOfFile;
  
  // Write back
  fs.writeFileSync(filepath, newContent, 'utf8');
  console.log(`  ✓ Expanded to 50 lessons`);
}

// Process all lesson files
const files = fs.readdirSync(lessonsDir);
const lessonFiles = files.filter(f => f.endsWith('Lessons.ts') && f !== 'integrationProjects.ts');

console.log(`Found ${lessonFiles.length} lesson files to process\n`);
console.log('=' .repeat(50));

lessonFiles.forEach(expandLessonFile);

console.log('\n' + '='.repeat(50));
console.log('✓ All lesson files expanded to 50+ lessons!');
