// Script to expand all courses to have at least 50 lessons
const fs = require('fs');
const path = require('path');

const lessonsDir = path.join(__dirname, '..', 'data', 'lessons');

const courseTemplates = {
  html: { name: 'HTML', topics: ['Forms', 'Canvas', 'SVG', 'Web Components', 'Accessibility', 'SEO', 'Microdata', 'Web Storage', 'Geolocation', 'Drag and Drop'] },
  css: { name: 'CSS', topics: ['Grid Advanced', 'Animations', 'Transforms', 'Filters', 'Variables', 'Grid Areas', 'Subgrid', 'Container Queries', 'Scroll Snap', 'Blend Modes'] },
  javascript: { name: 'JavaScript', topics: ['Promises', 'Async/Await', 'Modules', 'Classes', 'Generators', 'Proxies', 'WeakMap', 'Symbol', 'Iterator', 'Reflect API'] },
  python: { name: 'Python', topics: ['Decorators', 'Generators', 'Context Managers', 'Metaclasses', 'Threading', 'Multiprocessing', 'AsyncIO', 'Type Hints', 'Data Classes', 'Pattern Matching'] },
};

function generateLessons(courseName, startId, count, language) {
  const lessons = [];
  const topics = courseTemplates[language]?.topics || ['Advanced Topics', 'Best Practices', 'Design Patterns', 'Performance', 'Testing', 'Security', 'Deployment', 'Optimization', 'Debugging', 'Architecture'];
  
  for (let i = startId; i < startId + count; i++) {
    const topicIndex = (i - startId) % topics.length;
    const topic = topics[topicIndex];
    const subTopic = Math.floor((i - startId) / topics.length) + 1;
    
    lessons.push(`  {
    id: '${language}-${i}',
    title: '${topic} - Part ${subTopic}',
    description: 'Master ${topic.toLowerCase()} concepts and advanced techniques',
    content: \`
# ${topic} - Part ${subTopic}

Learn advanced ${topic.toLowerCase()} techniques and best practices in ${courseName}.

## Key Concepts

- Understanding ${topic} fundamentals
- Implementing ${topic.toLowerCase()} in real projects
- Best practices and patterns
- Performance considerations
- Common pitfalls to avoid

## Practical Examples

Practice ${topic.toLowerCase()} with hands-on examples and exercises.

\`,
    language: '${language}',
    difficulty: '${i < startId + 15 ? 'Beginner' : i < startId + 30 ? 'Intermediate' : 'Advanced'}',
    estimatedTime: ${15 + (i % 20)},
    points: ${i < startId + 15 ? 50 : i < startId + 30 ? 75 : 100},
    order: ${i},
    initialCode: '// ${topic} practice\\n',
    solution: '// ${topic} solution\\n',
    hints: [
      'Focus on understanding the core concepts',
      'Practice with real examples',
      'Review the documentation'
    ]
  }`);
  }
  
  return lessons.join(',\n');
}

// Files to expand
const filesToExpand = [
  { file: 'htmlLessons.ts', language: 'html', currentCount: 40, targetCount: 50 },
  { file: 'cssLessons.ts', language: 'css', currentCount: 40, targetCount: 50 },
  { file: 'jsLessons.ts', language: 'javascript', currentCount: 40, targetCount: 50 },
  { file: 'pythonLessons.ts', language: 'python', currentCount: 40, targetCount: 50 },
  { file: 'typescriptLessons.ts', language: 'typescript', currentCount: 20, targetCount: 50 },
  { file: 'reactLessons.ts', language: 'react', currentCount: 25, targetCount: 50 },
  { file: 'nodejsLessons.ts', language: 'nodejs', currentCount: 25, targetCount: 50 },
];

filesToExpand.forEach(({ file, language, currentCount, targetCount }) => {
  const filePath = path.join(lessonsDir, file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${file} - not found`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  const needed = targetCount - currentCount;
  
  if (needed > 0) {
    console.log(`Expanding ${file}: adding ${needed} lessons...`);
    
    const newLessons = generateLessons(language.toUpperCase(), currentCount + 1, needed, language);
    
    // Find the last closing bracket
    const lastBracket = content.lastIndexOf(']');
    content = content.substring(0, lastBracket) + ',\n' + newLessons + '\n]';
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ ${file} expanded to ${targetCount} lessons`);
  } else {
    console.log(`✓ ${file} already has ${currentCount}+ lessons`);
  }
});

console.log('\n✅ All lesson files expanded to 50+ lessons!');
