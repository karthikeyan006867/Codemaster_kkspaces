import { htmlLessons } from './lessons/htmlLessons'
import { cssLessons } from './lessons/cssLessons'
import { jsLessons } from './lessons/jsLessons'
import { pythonLessons } from './lessons/pythonLessons'
import { typescriptLessons } from './lessons/typescriptLessons'
import { reactLessons } from './lessons/reactLessons'
import { nodejsLessons } from './lessons/nodejsLessons'
import { rubyLessons } from './lessons/rubyLessons'
import { phpLessons } from './lessons/phpLessons'
import { javaLessons } from './lessons/javaLessons'
import { csharpLessons } from './lessons/csharpLessons'
import { goLessons } from './lessons/goLessons'
import { rustLessons } from './lessons/rustLessons'
import { swiftLessons } from './lessons/swiftLessons'
import { integrationProjects } from './lessons/integrationProjects'
import { kotlinLessons } from './lessons/kotlinLessons'
import { scalaLessons } from './lessons/scalaLessons'
import { dartLessons } from './lessons/dartLessons'
import { rLessons } from './lessons/rLessons'
import { sqlLessons } from './lessons/sqlLessons'
import { bashLessons } from './lessons/bashLessons'
import { elixirLessons } from './lessons/elixirLessons'
import { haskellLessons } from './lessons/haskellLessons'
import { luaLessons } from './lessons/luaLessons'
import { perlLessons } from './lessons/perlLessons'
import { juliaLessons } from './lessons/juliaLessons'
import { powershellLessons } from './lessons/powershellLessons'
import { groovyLessons } from './lessons/groovyLessons'
import { clojureLessons } from './lessons/clojureLessons'
import { erlangLessons } from './lessons/erlangLessons'
import { fsharpLessons } from './lessons/fsharpLessons'
import { ocamlLessons } from './lessons/ocamlLessons'
import { matlabLessons } from './lessons/matlabLessons'
import { objectivecLessons } from './lessons/objectivecLessons'
import { crystalLessons } from './lessons/crystalLessons'
import { vueLessons } from './lessons/vueLessons'
import { angularLessons } from './lessons/angularLessons'
import { djangoLessons } from './lessons/djangoLessons'
import { flaskLessons } from './lessons/flaskLessons'
import { mongodbLessons } from './lessons/mongodbLessons'
import { postgresqlLessons } from './lessons/postgresqlLessons'
import { dockerLessons } from './lessons/dockerLessons'
import { kubernetesLessons } from './lessons/kubernetesLessons'
import { gitLessons } from './lessons/gitLessons'
import { graphqlLessons } from './lessons/graphqlLessons'
import { nextjsLessons } from './lessons/nextjsLessons'
import { tailwindLessons } from './lessons/tailwindLessons'
import { awsLessons } from './lessons/awsLessons'
import { mlLessons } from './lessons/mlLessons'
import { cybersecurityLessons } from './lessons/cybersecurityLessons'

export interface TestCase {
  name: string
  test: (code: string, output: string) => boolean
  errorMessage: string
}

export interface Lesson {
  id: string
  title: string
  description: string
  content: string
  language: 'html' | 'css' | 'javascript' | 'python' | 'typescript' | 'react' | 'nodejs' | 'ruby' | 'php' | 'java' | 'csharp' | 'go' | 'rust' | 'swift' | 'kotlin' | 'scala' | 'dart' | 'r' | 'sql' | 'bash' | 'elixir' | 'haskell' | 'lua' | 'perl' | 'julia' | 'powershell' | 'groovy' | 'clojure' | 'erlang' | 'fsharp' | 'ocaml' | 'matlab' | 'objectivec' | 'crystal'
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  estimatedTime: number // in minutes
  initialCode?: string
  solution?: string
  expectedOutput?: string
  hints?: string[]
  isProject?: boolean
  projectDescription?: string
  testCases?: TestCase[] // Automated test cases
}

export interface Course {
  id: string
  title: string
  description: string
  icon: string
  color: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  category: 'Frontend' | 'Backend' | 'Database' | 'Mobile' | 'DevOps' | 'Data Science' | 'Systems' | 'Full-Stack'
  duration: string
  lessons: Lesson[]
}

const GENERIC_HINTS = new Set([
  'Review the documentation',
  'Practice regularly',
  'Test your code',
  'Study the documentation'
])

const PLACEHOLDER_CODE_REGEX = /write\s+your\s+.+?code\s+here|todo|your\s+code\s+here/i

function getBaselineTestCases(language: Lesson['language'], lessonTitle: string): TestCase[] {
  return [
    {
      name: 'Solution is substantial',
      test: (code: string) => {
        const trimmed = code.trim()
        return trimmed.length >= 40 && !PLACEHOLDER_CODE_REGEX.test(trimmed)
      },
      errorMessage: `Add a real solution for ${lessonTitle}, not placeholder text.`
    },
    {
      name: 'Uses language syntax',
      test: (code: string) => {
        const normalized = code.toLowerCase()
        if (language === 'html') return /<\w+/.test(code)
        if (language === 'css') return /\{|\}|:/.test(code)
        if (language === 'sql') return /select|insert|update|delete|create|alter/.test(normalized)
        if (language === 'bash' || language === 'powershell') return /\$|echo|if|for|while/.test(normalized)
        return /function|const|let|class|def|import|return|if|for|while|=>/.test(normalized)
      },
      errorMessage: `Use actual ${language} syntax constructs in your solution.`
    },
    {
      name: 'Multi-line implementation',
      test: (code: string) => code.split('\n').filter(line => line.trim().length > 0).length >= 3,
      errorMessage: 'Write at least 3 non-empty lines to demonstrate the concept thoroughly.'
    }
  ]
}

function hasWeakTests(testCases?: TestCase[]): boolean {
  if (!testCases || testCases.length === 0) return true

  const names = testCases.map(t => t.name.toLowerCase())
  const hasTrivialNames = names.some(n => n.includes('not empty') || n.includes('has content') || n.includes('looks valid'))
  return hasTrivialNames
}

function improveHints(hints: string[] | undefined, title: string): string[] {
  const baseHints = (hints || []).filter(h => !GENERIC_HINTS.has(h))
  if (baseHints.length >= 2) return baseHints

  return [
    `Break ${title} into small steps and implement one requirement at a time.`,
    'Run your code after each change to verify behavior before moving forward.',
    'Refactor variable names and structure so another learner can read your solution quickly.'
  ]
}

function enhanceLessons(lessons: Lesson[]): Lesson[] {
  return lessons.map(lesson => {
    const baseline = getBaselineTestCases(lesson.language, lesson.title)
    const testCases = hasWeakTests(lesson.testCases)
      ? baseline
      : [...baseline, ...(lesson.testCases || []).filter(t => !baseline.some(b => b.name === t.name))]

    return {
      ...lesson,
      hints: improveHints(lesson.hints, lesson.title),
      testCases
    }
  })
}

const baseCourses: Course[] = [
  {
    id: 'html',
    title: 'HTML Fundamentals',
    description: 'Learn the building blocks of the web - from basics to semantic HTML and accessibility',
    icon: '📝',
    color: 'from-orange-500 to-red-500',
    difficulty: 'Beginner',
    category: 'Frontend',
    duration: '4 weeks',
    lessons: htmlLessons
  },
  {
    id: 'css',
    title: 'CSS Styling',
    description: 'Master styling from basics to Flexbox, responsive design, and modern CSS techniques',
    icon: '🎨',
    color: 'from-blue-500 to-cyan-500',
    difficulty: 'Beginner',
    category: 'Frontend',
    duration: '5 weeks',
    lessons: cssLessons
  },
  {
    id: 'javascript',
    title: 'JavaScript Programming',
    description: 'Learn JavaScript from fundamentals to DOM manipulation, events, and interactive web apps',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-500',
    difficulty: 'Beginner',
    category: 'Frontend',
    duration: '8 weeks',
    lessons: jsLessons
  },
  {
    id: 'python',
    title: 'Python Programming',
    description: 'Master Python from basics to OOP and prepare for backend development',
    icon: '🐍',
    color: 'from-green-500 to-teal-500',
    difficulty: 'Beginner',
    category: 'Backend',
    duration: '10 weeks',
    lessons: pythonLessons
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    description: 'Learn TypeScript - JavaScript with types for safer, more scalable code',
    icon: '📘',
    color: 'from-blue-600 to-indigo-600',
    difficulty: 'Intermediate',
    category: 'Frontend',
    duration: '6 weeks',
    lessons: typescriptLessons
  },
  {
    id: 'react',
    title: 'React Framework',
    description: 'Build modern UIs with React - components, hooks, state management, and routing',
    icon: '⚛️',
    color: 'from-cyan-500 to-blue-500',
    difficulty: 'Intermediate',
    category: 'Frontend',
    duration: '8 weeks',
    lessons: reactLessons
  },
  {
    id: 'nodejs',
    title: 'Node.js Backend',
    description: 'Create powerful backends with Node.js - APIs, databases, authentication, and deployment',
    icon: '🟢',
    color: 'from-green-600 to-emerald-600',
    difficulty: 'Intermediate',
    category: 'Backend',
    duration: '10 weeks',
    lessons: nodejsLessons
  },
  {
    id: 'ruby',
    title: 'Ruby Programming',
    description: 'Master Ruby and Rails - elegant syntax, MVC architecture, and rapid development',
    icon: '💎',
    color: 'from-red-600 to-pink-600',
    difficulty: 'Intermediate',
    category: 'Backend',
    duration: '8 weeks',
    lessons: rubyLessons
  },
  {
    id: 'php',
    title: 'PHP Web Development',
    description: 'Build dynamic websites with PHP - from basics to Laravel framework and APIs',
    icon: '🐘',
    color: 'from-indigo-600 to-purple-600',
    difficulty: 'Intermediate',
    category: 'Backend',
    duration: '8 weeks',
    lessons: phpLessons
  },
  {
    id: 'java',
    title: 'Java Programming',
    description: 'Enterprise development with Java - OOP, collections, Spring Boot, and microservices',
    icon: '☕',
    color: 'from-orange-600 to-red-700',
    difficulty: 'Intermediate',
    category: 'Backend',
    duration: '12 weeks',
    lessons: javaLessons
  },
  {
    id: 'csharp',
    title: 'C# & .NET',
    description: 'Microsoft stack mastery - C#, .NET Core, ASP.NET, Entity Framework, and Azure',
    icon: '🎯',
    color: 'from-purple-600 to-violet-600',
    difficulty: 'Intermediate',
    category: 'Backend',
    duration: '12 weeks',
    lessons: csharpLessons
  },
  {
    id: 'go',
    title: 'Go (Golang)',
    description: 'Modern systems programming - concurrency, microservices, and cloud-native apps',
    icon: '🐹',
    color: 'from-sky-500 to-blue-600',
    difficulty: 'Advanced',
    category: 'Backend',
    duration: '10 weeks',
    lessons: goLessons
  },
  {
    id: 'rust',
    title: 'Rust Programming',
    description: 'Systems programming with memory safety - ownership, concurrency, and performance',
    icon: '🦀',
    color: 'from-amber-600 to-orange-700',
    difficulty: 'Advanced',
    category: 'Backend',
    duration: '14 weeks',
    lessons: rustLessons
  },
  {
    id: 'swift',
    title: 'Swift & iOS',
    description: 'Apple ecosystem development - Swift, SwiftUI, UIKit, and iOS app publishing',
    icon: '🍎',
    color: 'from-orange-500 to-red-600',
    difficulty: 'Advanced',
    category: 'Mobile',
    duration: '12 weeks',
    lessons: swiftLessons
  },
  {
    id: 'integration',
    title: 'Integration Projects',
    description: 'Build real-world projects connecting HTML, CSS, JavaScript, and Python together',
    icon: '🚀',
    color: 'from-purple-500 to-pink-500',
    difficulty: 'Intermediate',
    category: 'Full-Stack',
    duration: '6 weeks',
    lessons: integrationProjects
  },
  {
    id: 'kotlin',
    title: 'Kotlin Programming',
    description: 'Modern JVM language - Android development, null safety, and coroutines',
    icon: '🎨',
    color: 'from-purple-500 to-pink-600',
    difficulty: 'Intermediate',
    category: 'Mobile',
    duration: '8 weeks',
    lessons: kotlinLessons
  },
  {
    id: 'scala',
    title: 'Scala Programming',
    description: 'Functional and object-oriented programming on the JVM',
    icon: '🔴',
    color: 'from-red-600 to-orange-600',
    difficulty: 'Advanced',
    category: 'Systems',
    duration: '10 weeks',
    lessons: scalaLessons
  },
  {
    id: 'dart',
    title: 'Dart & Flutter',
    description: 'Build beautiful cross-platform apps with Dart and Flutter framework',
    icon: '🎯',
    color: 'from-blue-500 to-cyan-500',
    difficulty: 'Intermediate',
    category: 'Mobile',
    duration: '9 weeks',
    lessons: dartLessons
  },
  {
    id: 'r',
    title: 'R Programming',
    description: 'Statistical computing and data visualization - from basics to advanced analytics',
    icon: '📊',
    color: 'from-blue-700 to-indigo-600',
    difficulty: 'Intermediate',
    category: 'Data Science',
    duration: '8 weeks',
    lessons: rLessons
  },
  {
    id: 'sql',
    title: 'SQL & Databases',
    description: 'Master database management - queries, joins, optimization, and database design',
    icon: '🗄️',
    color: 'from-gray-600 to-slate-700',
    difficulty: 'Beginner',
    category: 'Database',
    duration: '6 weeks',
    lessons: sqlLessons
  },
  {
    id: 'bash',
    title: 'Bash Scripting',
    description: 'Linux/Unix shell scripting - automation, system administration, and DevOps',
    icon: '💻',
    color: 'from-green-700 to-emerald-800',
    difficulty: 'Intermediate',
    category: 'DevOps',
    duration: '5 weeks',
    lessons: bashLessons
  },
  {
    id: 'elixir',
    title: 'Elixir Programming',
    description: 'Functional programming for scalable applications - Phoenix framework and OTP',
    icon: '💧',
    color: 'from-purple-600 to-violet-700',
    difficulty: 'Advanced',
    category: 'Systems',
    duration: '10 weeks',
    lessons: elixirLessons
  },
  {
    id: 'haskell',
    title: 'Haskell Programming',
    description: 'Pure functional programming - type systems, monads, and lazy evaluation',
    icon: '🔷',
    color: 'from-purple-700 to-pink-700',
    difficulty: 'Advanced',
    category: 'Systems',
    duration: '12 weeks',
    lessons: haskellLessons
  },
  {
    id: 'lua',
    title: 'Lua Programming',
    description: 'Lightweight scripting - game development, embedded systems, and scripting',
    icon: '🌙',
    color: 'from-blue-600 to-indigo-700',
    difficulty: 'Beginner',
    category: 'Systems',
    duration: '4 weeks',
    lessons: luaLessons
  },
  {
    id: 'perl',
    title: 'Perl Programming',
    description: 'Text processing and system administration - regex, CGI, and automation',
    icon: '🐪',
    color: 'from-blue-800 to-purple-800',
    difficulty: 'Intermediate',
    category: 'Systems',
    duration: '6 weeks',
    lessons: perlLessons
  },
  {
    id: 'julia',
    title: 'Julia Programming',
    description: 'High-performance scientific computing - numerical analysis and data science',
    icon: '🔬',
    color: 'from-purple-600 to-red-600',
    difficulty: 'Intermediate',
    category: 'Data Science',
    duration: '8 weeks',
    lessons: juliaLessons
  },
  {
    id: 'powershell',
    title: 'PowerShell Scripting',
    description: 'Windows automation and administration - cmdlets, pipelines, and remote management',
    icon: '⚡',
    color: 'from-blue-700 to-cyan-700',
    difficulty: 'Intermediate',
    category: 'DevOps',
    duration: '6 weeks',
    lessons: powershellLessons
  },
  {
    id: 'groovy',
    title: 'Groovy Programming',
    description: 'Dynamic JVM language - Gradle, testing, and enterprise automation',
    icon: '🎸',
    color: 'from-teal-600 to-green-700',
    difficulty: 'Intermediate',
    category: 'Systems',
    duration: '6 weeks',
    lessons: groovyLessons
  },
  {
    id: 'clojure',
    title: 'Clojure Programming',
    description: 'Modern Lisp for the JVM - functional programming and concurrent systems',
    icon: '⚙️',
    color: 'from-green-600 to-blue-700',
    difficulty: 'Advanced',
    category: 'Systems',
    duration: '10 weeks',
    lessons: clojureLessons
  },
  {
    id: 'erlang',
    title: 'Erlang Programming',
    description: 'Concurrent and distributed systems - fault tolerance and telecommunications',
    icon: '📡',
    color: 'from-red-700 to-pink-700',
    difficulty: 'Advanced',
    category: 'Systems',
    duration: '12 weeks',
    lessons: erlangLessons
  },
  {
    id: 'fsharp',
    title: 'F# Programming',
    description: 'Functional-first .NET language - type providers and data science',
    icon: '🔷',
    color: 'from-blue-600 to-purple-700',
    difficulty: 'Intermediate',
    category: 'Systems',
    duration: '8 weeks',
    lessons: fsharpLessons
  },
  {
    id: 'ocaml',
    title: 'OCaml Programming',
    description: 'Industrial-strength functional programming - type inference and modules',
    icon: '🐫',
    color: 'from-orange-600 to-red-700',
    difficulty: 'Advanced',
    category: 'Systems',
    duration: '10 weeks',
    lessons: ocamlLessons
  },
  {
    id: 'matlab',
    title: 'MATLAB Programming',
    description: 'Numerical computing and engineering - matrix operations and visualization',
    icon: '📐',
    color: 'from-orange-500 to-yellow-600',
    difficulty: 'Intermediate',
    category: 'Data Science',
    duration: '8 weeks',
    lessons: matlabLessons
  },
  {
    id: 'objectivec',
    title: 'Objective-C',
    description: 'Apple platform development - macOS and iOS legacy applications',
    icon: '🍏',
    color: 'from-gray-600 to-blue-700',
    difficulty: 'Intermediate',
    category: 'Mobile',
    duration: '8 weeks',
    lessons: objectivecLessons
  },
  {
    id: 'crystal',
    title: 'Crystal Programming',
    description: 'Fast as C, slick as Ruby - type-safe compiled language with Ruby syntax',
    icon: '💎',
    color: 'from-cyan-500 to-blue-600',
    difficulty: 'Intermediate',
    category: 'Systems',
    duration: '7 weeks',
    lessons: crystalLessons
  },
  {
    id: 'vue',
    title: 'Vue.js Framework',
    description: 'Progressive JavaScript framework - components, Vuex, Vue Router, and Composition API',
    icon: '🟢',
    color: 'from-green-500 to-teal-500',
    difficulty: 'Intermediate',
    category: 'Frontend',
    duration: '7 weeks',
    lessons: vueLessons
  },
  {
    id: 'angular',
    title: 'Angular Framework',
    description: 'Enterprise web applications - TypeScript, RxJS, dependency injection, and testing',
    icon: '🅰️',
    color: 'from-red-600 to-pink-600',
    difficulty: 'Advanced',
    category: 'Frontend',
    duration: '10 weeks',
    lessons: angularLessons
  },
  {
    id: 'django',
    title: 'Django Framework',
    description: 'Python web framework - MVT architecture, ORM, authentication, and REST APIs',
    icon: '🎸',
    color: 'from-green-700 to-emerald-700',
    difficulty: 'Intermediate',
    category: 'Backend',
    duration: '9 weeks',
    lessons: djangoLessons
  },
  {
    id: 'flask',
    title: 'Flask Microframework',
    description: 'Lightweight Python web framework - RESTful APIs, extensions, and deployment',
    icon: '🧪',
    color: 'from-gray-600 to-slate-600',
    difficulty: 'Intermediate',
    category: 'Backend',
    duration: '6 weeks',
    lessons: flaskLessons
  },
  {
    id: 'mongodb',
    title: 'MongoDB Database',
    description: 'NoSQL database - document model, aggregation, indexing, and scalability',
    icon: '🍃',
    color: 'from-green-600 to-lime-600',
    difficulty: 'Intermediate',
    category: 'Database',
    duration: '6 weeks',
    lessons: mongodbLessons
  },
  {
    id: 'postgresql',
    title: 'PostgreSQL Advanced',
    description: 'Enterprise database - JSONB, full-text search, window functions, and performance',
    icon: '🐘',
    color: 'from-blue-700 to-indigo-700',
    difficulty: 'Advanced',
    category: 'Database',
    duration: '8 weeks',
    lessons: postgresqlLessons
  },
  {
    id: 'docker',
    title: 'Docker & Containers',
    description: 'Containerization - images, volumes, networks, Docker Compose, and orchestration',
    icon: '🐳',
    color: 'from-blue-500 to-cyan-600',
    difficulty: 'Intermediate',
    category: 'DevOps',
    duration: '6 weeks',
    lessons: dockerLessons
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes Orchestration',
    description: 'Container orchestration - pods, services, deployments, scaling, and monitoring',
    icon: '☸️',
    color: 'from-blue-600 to-purple-600',
    difficulty: 'Advanced',
    category: 'DevOps',
    duration: '10 weeks',
    lessons: kubernetesLessons
  },
  {
    id: 'git',
    title: 'Git & Version Control',
    description: 'Source control mastery - branching, merging, rebasing, workflows, and collaboration',
    icon: '📦',
    color: 'from-orange-600 to-red-600',
    difficulty: 'Beginner',
    category: 'DevOps',
    duration: '4 weeks',
    lessons: gitLessons
  },
  {
    id: 'graphql',
    title: 'GraphQL APIs',
    description: 'Modern API development - schemas, resolvers, mutations, subscriptions, and Apollo',
    icon: '🔷',
    color: 'from-pink-600 to-purple-600',
    difficulty: 'Intermediate',
    category: 'Full-Stack',
    duration: '6 weeks',
    lessons: graphqlLessons
  },
  {
    id: 'nextjs',
    title: 'Next.js Framework',
    description: 'React meta-framework - SSR, SSG, API routes, middleware, and full-stack apps',
    icon: '▲',
    color: 'from-gray-800 to-black',
    difficulty: 'Advanced',
    category: 'Full-Stack',
    duration: '8 weeks',
    lessons: nextjsLessons
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS',
    description: 'Utility-first CSS - responsive design, custom themes, plugins, and optimization',
    icon: '🎨',
    color: 'from-cyan-500 to-blue-500',
    difficulty: 'Beginner',
    category: 'Frontend',
    duration: '3 weeks',
    lessons: tailwindLessons
  },
  {
    id: 'aws',
    title: 'Amazon Web Services',
    description: 'Cloud computing - EC2, S3, Lambda, RDS, API Gateway, and serverless architecture',
    icon: '☁️',
    color: 'from-orange-500 to-yellow-500',
    difficulty: 'Advanced',
    category: 'DevOps',
    duration: '12 weeks',
    lessons: awsLessons
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    description: 'AI fundamentals - supervised learning, neural networks, TensorFlow, and deployment',
    icon: '🤖',
    color: 'from-purple-600 to-pink-600',
    difficulty: 'Advanced',
    category: 'Data Science',
    duration: '14 weeks',
    lessons: mlLessons
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Basics',
    description: 'Security fundamentals - encryption, authentication, OWASP, penetration testing',
    icon: '🔒',
    color: 'from-red-700 to-orange-700',
    difficulty: 'Intermediate',
    category: 'Full-Stack',
    duration: '8 weeks',
    lessons: cybersecurityLessons
  }
]

export const courses: Course[] = baseCourses.map((course): Course => ({
  ...course,
  lessons: enhanceLessons(course.lessons)
}))
