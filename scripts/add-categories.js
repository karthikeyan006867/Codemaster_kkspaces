const fs = require('fs');
const path = require('path');

const coursesFilePath = path.join(__dirname, '..', 'data', 'courses.ts');
let content = fs.readFileSync(coursesFilePath, 'utf8');

// Define category mappings
const categoryMap = {
  // Frontend
  'html': 'Frontend',
  'css': 'Frontend',
  'javascript': 'Frontend',
  'typescript': 'Frontend',
  'react': 'Frontend',
  'vue': 'Frontend',
  'angular': 'Frontend',
  'tailwind': 'Frontend',
  
  // Backend
  'nodejs': 'Backend',
  'python': 'Backend',
  'ruby': 'Backend',
  'php': 'Backend',
  'java': 'Backend',
  'csharp': 'Backend',
  'go': 'Backend',
  'rust': 'Backend',
  'django': 'Backend',
  'flask': 'Backend',
  'express': 'Backend',
  
  // Mobile
  'swift': 'Mobile',
  'kotlin': 'Mobile',
  'dart': 'Mobile',
  'objectivec': 'Mobile',
  
  // Database
  'sql': 'Database',
  'mongodb': 'Database',
  'postgresql': 'Database',
  
  // DevOps
  'docker': 'DevOps',
  'kubernetes': 'DevOps',
  'bash': 'DevOps',
  'powershell': 'DevOps',
  'git': 'DevOps',
  'aws': 'DevOps',
  'terraform': 'DevOps',
  
  // Data Science
  'r': 'Data Science',
  'matlab': 'Data Science',
  'julia': 'Data Science',
  'ml': 'Data Science',
  'machine-learning': 'Data Science',
  
  // Systems
  'clojure': 'Systems',
  'erlang': 'Systems',
  'elixir': 'Systems',
  'haskell': 'Systems',
  'ocaml': 'Systems',
  'fsharp': 'Systems',
  'scala': 'Systems',
  'groovy': 'Systems',
  'lua': 'Systems',
  'perl': 'Systems',
  'crystal': 'Systems',
  
  // Full-Stack
  'nextjs': 'Full-Stack',
  'graphql': 'Full-Stack',
  'integration': 'Full-Stack',
  'cybersecurity': 'Full-Stack'
};

// Add category to each course
Object.keys(categoryMap).forEach(courseId => {
  const category = categoryMap[courseId];
  
  // Match the course definition and add category after difficulty
  const regex = new RegExp(`(id: '${courseId}',[\\s\\S]*?difficulty: '[^']+',)`, 'g');
  content = content.replace(regex, `$1\n    category: '${category}',`);
});

fs.writeFileSync(coursesFilePath, content);
console.log('✅ Categories added to all courses!');
