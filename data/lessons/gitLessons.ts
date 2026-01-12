import { Lesson } from '../courses'

const detailedGitLessons: Lesson[] = [
  {
    id: 'git-1',
    title: 'Git Introduction',
    description: 'Learn Git basics and initialize a repository',
    language: 'bash' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Git Version Control

Git tracks changes in your code over time.

## Key Commands
\`\`\`bash
git init          # Initialize repo
git status        # Check status
git add file.txt  # Stage file
git commit -m "message"  # Commit changes
\`\`\`

## Workflow
1. Make changes
2. Stage with \`git add\`
3. Commit with \`git commit\`

## Your Task
Initialize a new Git repository`,
    initialCode: `# Initialize Git repo`,
    solution: `git init`,
    hints: ['Use git init', 'Creates .git folder', 'Run in project root'],
    testCases: [
      { name: 'Has git', test: (code) => code.includes('git'), errorMessage: 'Use git command' },
      { name: 'Initializes', test: (code) => code.includes('init'), errorMessage: 'Use init command' }
    ]
  },
  {
    id: 'git-2',
    title: 'Branching',
    description: 'Create and switch between branches',
    language: 'bash' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Git Branches

Branches let you work on features independently.

## Commands
\`\`\`bash
git branch feature     # Create branch
git checkout feature   # Switch to branch
git checkout -b feature  # Create and switch
git branch -d feature  # Delete branch
\`\`\`

## Your Task
Create and switch to a new branch called "develop"`,
    initialCode: `# Create and switch to develop branch`,
    solution: `git checkout -b develop`,
    hints: ['Use git checkout -b', 'Creates and switches', 'Branch name is develop'],
    testCases: [
      { name: 'Creates branch', test: (code) => code.includes('checkout') || code.includes('branch'), errorMessage: 'Create branch' },
      { name: 'Names branch', test: (code) => code.includes('develop'), errorMessage: 'Name it develop' }
    ]
  },
  {
    id: 'git-3',
    title: 'Merging',
    description: 'Combine branches together',
    language: 'bash' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Merging Branches

Combine changes from different branches.

## Commands
\`\`\`bash
git checkout main
git merge feature  # Merges feature into main
\`\`\`

## Merge Conflicts
When same lines are changed, Git creates conflict markers:
\`\`\`
<<<<<<< HEAD
Your changes
=======
Their changes
>>>>>>> feature
\`\`\`

## Your Task
Merge a feature branch into main`,
    initialCode: `# Switch to main and merge feature`,
    solution: `git checkout main\ngit merge feature`,
    hints: ['Switch to target branch first', 'Then git merge source', 'Resolve conflicts if any'],
    testCases: [
      { name: 'Has merge', test: (code) => code.includes('merge'), errorMessage: 'Use merge command' },
      { name: 'Switches branch', test: (code) => code.includes('checkout') || code.includes('switch'), errorMessage: 'Switch to main first' }
    ]
  }
];

for (let i = 4; i <= 50; i++) {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i <= 17 ? 'Beginner' : i <= 34 ? 'Intermediate' : 'Advanced';
  const topics = ['Remote Repos', 'Push/Pull', 'Rebase', 'Stash', 'Tags', 'Reset', 'Revert', 'Cherry-pick', 'Hooks', 'Workflows'];
  const topic = topics[(i - 4) % topics.length];
  
  detailedGitLessons.push({
    id: `git-${i}`,
    title: `${topic} in Git`,
    description: `Learn ${topic} for version control`,
    language: 'bash' as const,
    difficulty,
    estimatedTime: 25 + (i % 10),
    content: `# ${topic}\n\nMaster ${topic} in Git.\n\n\`\`\`bash\ngit ...\n\`\`\``,
    initialCode: `# ${topic} commands`,
    solution: `git status`,
    hints: [`Learn ${topic}`, 'Practice often', 'Git is powerful'],
    testCases: [
      { name: 'Not empty', test: (code) => code.trim().length > 3, errorMessage: 'Write git commands' }
    ]
  });
}

export const gitLessons = detailedGitLessons
