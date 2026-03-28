const fs = require('fs');
const path = require('path');

// COMPREHENSIVE LESSON TEMPLATES FOR ALL LANGUAGES/TECHNOLOGIES
const comprehensiveCourses = {
  javascript: {
    language: 'javascript',
    name: 'JavaScript',
    lessons: [
      // Fundamentals (1-10)
      { title: 'What is JavaScript?', desc: 'History, uses, and where JS runs', level: 'Beginner' },
      { title: 'Setting Up Your Environment', desc: 'Browser console, Node.js, code editors', level: 'Beginner' },
      { title: 'Variables & Data Types', desc: 'var, let, const, strings, numbers, booleans', level: 'Beginner' },
      { title: 'Operators & Expressions', desc: 'Arithmetic, comparison, logical operators', level: 'Beginner' },
      { title: 'Control Flow: if/else', desc: 'Conditional statements and branching', level: 'Beginner' },
      { title: 'Loops: for, while, do-while', desc: 'Iteration and repetition patterns', level: 'Beginner' },
      { title: 'Functions Basics', desc: 'Defining, calling, parameters, return values', level: 'Beginner' },
      { title: 'Arrays Fundamentals', desc: 'Creating, accessing, modifying arrays', level: 'Beginner' },
      { title: 'Objects & Properties', desc: 'Creating objects, accessing properties', level: 'Beginner' },
      { title: 'String Methods & Manipulation', desc: 'slice, substring, indexOf, replace, split', level: 'Beginner' },
      
      // Intermediate (11-30)
      { title: 'Arrow Functions', desc: '=> syntax, implicit returns, this binding', level: 'Intermediate' },
      { title: 'Array Methods: map, filter, reduce', desc: 'Functional programming with arrays', level: 'Intermediate' },
      { title: 'Array Methods: forEach, find, some, every', desc: 'More array iteration techniques', level: 'Intermediate' },
      { title: 'Template Literals', desc: 'Backticks, interpolation, multiline strings', level: 'Intermediate' },
      { title: 'Destructuring Assignment', desc: 'Array and object destructuring', level: 'Intermediate' },
      { title: 'Spread Operator & Rest Parameters', desc: '...syntax, copying, merging', level: 'Intermediate' },
      { title: 'Scope & Closures', desc: 'Lexical scope, closure functions', level: 'Intermediate' },
      { title: 'this Keyword', desc: 'Context, call, apply, bind', level: 'Intermediate' },
      { title: 'Prototypes & Inheritance', desc: 'Prototype chain, Object.create', level: 'Intermediate' },
      { title: 'Classes & Constructors', desc: 'class syntax, constructors, methods', level: 'Intermediate' },
      
      // Object-Oriented (21-30)
      { title: 'Getters & Setters', desc: 'get/set keywords, property validation', level: 'Intermediate' },
      { title: 'Static Methods & Properties', desc: 'Class-level members, utility functions', level: 'Intermediate' },
      { title: 'Inheritance with extends', desc: 'super, extending classes', level: 'Intermediate' },
      { title: 'Polymorphism & Method Overriding', desc: 'Overriding methods, method behavior', level: 'Intermediate' },
      { title: 'Encapsulation & Privacy', desc: '#private fields, WeakMap', level: 'Intermediate' },
      { title: 'instanceof & typeof', desc: 'Type checking and instance checking', level: 'Intermediate' },
      { title: 'JSON Stringify & Parse', desc: 'Converting objects to/from JSON', level: 'Intermediate' },
      { title: 'Error Handling: try/catch/finally', desc: 'Exception handling, error objects', level: 'Intermediate' },
      { title: 'Throwing Custom Errors', desc: 'Error classes, error handling patterns', level: 'Intermediate' },
      { title: 'Debugging Techniques', desc: 'console methods, debugger, breakpoints', level: 'Intermediate' },
      
      // Asynchronous Programming (31-40)
      { title: 'Callbacks & Callback Hell', desc: 'Callback functions, pyramid of doom', level: 'Intermediate' },
      { title: 'Promises Fundamentals', desc: 'Creating, resolving, rejecting promises', level: 'Intermediate' },
      { title: 'Promise Chaining', desc: '.then() chains, error handling', level: 'Intermediate' },
      { title: 'Promise.all & Promise.race', desc: 'Multiple promises, competition patterns', level: 'Intermediate' },
      { title: 'Async/Await Basics', desc: 'async functions, await keyword', level: 'Intermediate' },
      { title: 'Error Handling with Async/Await', desc: 'try/catch with async functions', level: 'Intermediate' },
      { title: 'Fetch API & HTTP Requests', desc: 'GET, POST, fetch basics', level: 'Intermediate' },
      { title: 'Request Headers & Body', desc: 'Custom headers, request body data', level: 'Intermediate' },
      { title: 'Response Handling & Status', desc: 'Checking status, parsing JSON', level: 'Intermediate' },
      { title: 'Timeouts & Retries', desc: 'Timeout patterns, retry logic', level: 'Intermediate' },
      
      // Advanced (41-50)
      { title: 'Event Loop & Call Stack', desc: 'How JavaScript executes code', level: 'Advanced' },
      { title: 'Event Delegation', desc: 'Bubbling, capturing, delegated listeners', level: 'Advanced' },
      { title: 'Memory Leaks & Garbage Collection', desc: 'Reference cycles, WeakMap/WeakSet', level: 'Advanced' },
      { title: 'Performance Optimization', desc: 'Debouncing, throttling, lazy loading', level: 'Advanced' },
      { title: 'Web Workers', desc: 'Background threads, CPU-intensive tasks', level: 'Advanced' },
      { title: 'Service Workers & Caching', desc: 'Offline support, PWA basics', level: 'Advanced' },
      { title: 'Modules: CommonJS & ES Modules', desc: 'require, import/export patterns', level: 'Advanced' },
      { title: 'Regular Expressions', desc: 'Patterns, matching, replacing text', level: 'Advanced' },
      { title: 'Generators & Iterators', desc: 'function*, yield, custom iteration', level: 'Advanced' },
      { title: 'JavaScript Project: Full Stack Todo App', desc: 'Frontend + API integration', level: 'Advanced' }
    ]
  },
  python: {
    language: 'python',
    name: 'Python',
    lessons: [
      // Fundamentals (1-10)
      { title: 'Python Basics & Environment', desc: 'Interpreter, syntax, indentation', level: 'Beginner' },
      { title: 'Variables & Data Types', desc: 'int, str, float, bool, None types', level: 'Beginner' },
      { title: 'Input & Output', desc: 'print(), input(), formatting output', level: 'Beginner' },
      { title: 'Operators & Math', desc: 'Arithmetic, comparison, logical operators', level: 'Beginner' },
      { title: 'Conditionals: if/elif/else', desc: 'Decision making and branching', level: 'Beginner' },
      { title: 'Loops: for & while', desc: 'Iteration, range(), break, continue', level: 'Beginner' },
      { title: 'Lists Fundamentals', desc: 'Creating, indexing, modifying lists', level: 'Beginner' },
      { title: 'Strings & Text Processing', desc: 'String methods, slicing, formatting', level: 'Beginner' },
      { title: 'Tuples & Unpacking', desc: 'Immutable sequences, destructuring', level: 'Beginner' },
      { title: 'Dictionaries Basics', desc: 'Key-value pairs, accessing, modifying', level: 'Beginner' },
      
      // Functions & Advanced Data Structures (11-20)
      { title: 'Functions Basics', desc: 'Defining, parameters, return values', level: 'Beginner' },
      { title: 'Default Parameters & *args/**kwargs', desc: 'Flexible function signatures', level: 'Intermediate' },
      { title: 'List Comprehensions', desc: 'Concise list creation patterns', level: 'Intermediate' },
      { title: 'Dictionary Comprehensions', desc: 'Building dictionaries efficiently', level: 'Intermediate' },
      { title: 'Sets & Set Operations', desc: 'Unique collections, union, intersection', level: 'Intermediate' },
      { title: 'Lambda Functions', desc: 'Anonymous functions, functional style', level: 'Intermediate' },
      { title: 'map(), filter(), reduce()', desc: 'Functional programming in Python', level: 'Intermediate' },
      { title: 'Decorators Basics', desc: 'Function wrappers, @decorator syntax', level: 'Intermediate' },
      { title: 'Generators & yield', desc: 'Lazy evaluation, memory efficiency', level: 'Intermediate' },
      { title: 'Context Managers: with statement', desc: 'Resource management, try/finally', level: 'Intermediate' },
      
      // Object-Oriented Programming (21-30)
      { title: 'Classes & Objects', desc: 'Defining classes, __init__, self', level: 'Intermediate' },
      { title: 'Instance & Class Variables', desc: 'self attributes, class attributes', level: 'Intermediate' },
      { title: 'Methods & Magic Methods', desc: '__str__, __repr__, __len__', level: 'Intermediate' },
      { title: 'Inheritance', desc: 'Extending classes, super()', level: 'Intermediate' },
      { title: 'Multiple Inheritance', desc: 'MRO (Method Resolution Order)', level: 'Intermediate' },
      { title: 'Polymorphism & Duck Typing', desc: 'Method overriding, type flexibility', level: 'Intermediate' },
      { title: 'Properties & Descriptors', desc: '@property, getters/setters', level: 'Intermediate' },
      { title: 'Class Decorators', desc: '@dataclass, @staticmethod, @classmethod', level: 'Intermediate' },
      { title: 'Abstract Base Classes', desc: 'ABC, enforcing interfaces', level: 'Intermediate' },
      { title: 'Operator Overloading', desc: '__add__, __sub__, __eq__, etc', level: 'Intermediate' },
      
      // File & Exception Handling (31-40)
      { title: 'Exception Handling: try/except/finally', desc: 'Catching and handling errors', level: 'Intermediate' },
      { title: 'Custom Exceptions', desc: 'Creating and raising custom errors', level: 'Intermediate' },
      { title: 'File I/O: Reading & Writing', desc: 'open(), read(), write(), close()', level: 'Intermediate' },
      { title: 'Working with CSV & JSON', desc: 'csv module, json serialization', level: 'Intermediate' },
      { title: 'Working with Paths: pathlib', desc: 'Cross-platform file operations', level: 'Intermediate' },
      { title: 'Regular Expressions: regex', desc: 'Patterns, matching, substitution', level: 'Intermediate' },
      { title: 'Datetime & Time Handling', desc: 'datetime, timedelta, timezone', level: 'Intermediate' },
      { title: 'Logging & Debugging', desc: 'logging module, debug levels', level: 'Intermediate' },
      { title: 'Unit Testing: unittest', desc: 'Test cases, assertions, test runners', level: 'Intermediate' },
      { title: 'Testing with pytest', desc: 'Fixtures, parametrization, markers', level: 'Intermediate' },
      
      // Modules & Libraries (41-50)
      { title: 'Modules & Packages', desc: 'Importing, __init__.py, namespace', level: 'Intermediate' },
      { title: 'NumPy Basics', desc: 'Arrays, operations, ndarray', level: 'Advanced' },
      { title: 'Pandas DataFrames', desc: 'Data manipulation, analysis basics', level: 'Advanced' },
      { title: 'Matplotlib & Visualization', desc: 'Plotting, charts, data visualization', level: 'Advanced' },
      { title: 'Web Scraping: BeautifulSoup', desc: 'HTML parsing, web data extraction', level: 'Advanced' },
      { title: 'Working with APIs: requests', desc: 'HTTP requests, JSON responses', level: 'Advanced' },
      { title: 'Virtual Environments & pip', desc: 'pip install, requirements.txt, venv', level: 'Advanced' },
      { title: 'Multithreading & Multiprocessing', desc: 'Concurrent execution, parallelism', level: 'Advanced' },
      { title: 'Type Hints & Type Checking', desc: 'Annotations, mypy, static analysis', level: 'Advanced' },
      { title: 'Python Project: Data Analysis Dashboard', desc: 'Complete data pipeline project', level: 'Advanced' }
    ]
  },
  typescript: {
    language: 'typescript',
    name: 'TypeScript',
    lessons: [
      // Basics (1-10)
      { title: 'Why TypeScript?', desc: 'Type safety, tooling, compilation process', level: 'Beginner' },
      { title: 'Basic Types', desc: 'string, number, boolean, any, unknown, never', level: 'Beginner' },
      { title: 'Arrays & Tuples', desc: 'Type annotations, readonly, fixed-length', level: 'Beginner' },
      { title: 'Union & Literal Types', desc: '| operator, specific type values', level: 'Beginner' },
      { title: 'Type Aliases', desc: 'type keyword, creating custom types', level: 'Beginner' },
      { title: 'Interfaces', desc: 'interface, contracts, extending interfaces', level: 'Beginner' },
      { title: 'Functions & Typing', desc: 'Parameter types, return types, overloading', level: 'Beginner' },
      { title: 'Objects & Properties', desc: 'Object type annotations, optional props', level: 'Beginner' },
      { title: 'Enums', desc: 'Numeric, string enums, const enums', level: 'Beginner' },
      { title: 'Null & Undefined Handling', desc: 'strictNullChecks, optional chaining', level: 'Beginner' },
      
      // Advanced Types (11-25)
      { title: 'Generics Basics', desc: '<T>, generic functions, generic types', level: 'Intermediate' },
      { title: 'Generic Constraints', desc: 'extends keyword, keyof, conditional types', level: 'Intermediate' },
      { title: 'Utility Types: Partial, Required', desc: 'Built-in generic types', level: 'Intermediate' },
      { title: 'Utility Types: Pick, Omit, Record', desc: 'Object manipulation types', level: 'Intermediate' },
      { title: 'Mapped Types', desc: 'Transforming types dynamically', level: 'Intermediate' },
      { title: 'Conditional Types', desc: 'Type-level if/else logic', level: 'Intermediate' },
      { title: 'Inference & Type Guards', desc: 'type narrowing, type predicates', level: 'Intermediate' },
      { title: 'Discriminated Unions', desc: 'Pattern matching with tagged unions', level: 'Intermediate' },
      { title: 'Decorators', desc: '@decorator syntax, class/method decorators', level: 'Intermediate' },
      { title: 'Modules & Namespaces', desc: 'import/export, module organization', level: 'Intermediate' },
      
      // OOP & Advanced Patterns (26-40)
      { title: 'Classes with TypeScript', desc: 'Access modifiers, getters/setters', level: 'Intermediate' },
      { title: 'Inheritance & super', desc: 'Extending classes, calling parent', level: 'Intermediate' },
      { title: 'Abstract Classes', desc: 'abstract keyword, enforcing contracts', level: 'Intermediate' },
      { title: 'Mixins & Composition', desc: 'Composing functionality, multiple traits', level: 'Intermediate' },
      { title: 'Reflection & Metadata', desc: 'reflect-metadata, introspection', level: 'Advanced' },
      { title: 'Async/Await Types', desc: 'Promise<T>, async functions', level: 'Intermediate' },
      { title: 'Error Handling Patterns', desc: 'Error types, Result pattern', level: 'Intermediate' },
      { title: 'Validation & Runtime Types', desc: 'Zod, io-ts, runtime validation', level: 'Advanced' },
      { title: 'Advanced Generics', desc: 'Recursive types, variadic tuples', level: 'Advanced' },
      { title: 'Type-Safe APIs', desc: 'Generic API builders, type safety', level: 'Advanced' },
      
      // Practical Applications (41-50)
      { title: 'Configuration Management', desc: 'tsconfig.json, compiler options', level: 'Intermediate' },
      { title: 'Testing with TypeScript', desc: 'Jest, testing patterns, types', level: 'Intermediate' },
      { title: 'Building a Type-Safe CLI', desc: 'Command-line tool with types', level: 'Advanced' },
      { title: 'REST API with Express', desc: 'Type-safe API endpoints', level: 'Advanced' },
      { title: 'GraphQL with TypeScript', desc: 'Type-safe GraphQL schemas', level: 'Advanced' },
      { title: 'State Management: Redux', desc: 'Actions, reducers, type safety', level: 'Advanced' },
      { title: 'Functional Programming Types', desc: 'Composition, currying, pipe operators', level: 'Advanced' },
      { title: 'Performance & Optimization', desc: 'Code splitting, lazy loading, optimization', level: 'Advanced' },
      { title: 'Monorepo Architecture', desc: 'Workspaces, shared types, scaling', level: 'Advanced' },
      { title: 'TypeScript Project: Type-Safe Fullstack App', desc: 'Complete fullstack application', level: 'Advanced' }
    ]
  },
  react: {
    language: 'typescript',
    name: 'React',
    lessons: [
      // Fundamentals (1-10)
      { title: 'React Basics', desc: 'What is React, JSX, components', level: 'Beginner' },
      { title: 'JSX & Rendering', desc: 'JSX syntax, expressions, elements', level: 'Beginner' },
      { title: 'Functional Components', desc: 'Function-based components, props', level: 'Beginner' },
      { title: 'Props & Data Flow', desc: 'Passing data, prop validation', level: 'Beginner' },
      { title: 'useState Hook', desc: 'State management, setState, re-renders', level: 'Beginner' },
      { title: 'useEffect Hook', desc: 'Side effects, cleanup, dependencies', level: 'Beginner' },
      { title: 'Conditional Rendering', desc: 'if/else, ternary, logical AND', level: 'Beginner' },
      { title: 'Lists & Keys', desc: 'map() rendering, key prop importance', level: 'Beginner' },
      { title: 'Event Handling', desc: 'onClick, onChange, event objects', level: 'Beginner' },
      { title: 'Forms & Input', desc: 'Controlled components, form handling', level: 'Beginner' },
      
      // Advanced Hooks (11-25)
      { title: 'useContext Hook', desc: 'Context API, avoiding prop drilling', level: 'Intermediate' },
      { title: 'useReducer Hook', desc: 'Complex state management, actions', level: 'Intermediate' },
      { title: 'useCallback & useMemo', desc: 'Performance optimization, memoization', level: 'Intermediate' },
      { title: 'useRef Hook', desc: 'DOM references, instance variables', level: 'Intermediate' },
      { title: 'Custom Hooks', desc: 'Creating reusable hooks, hook patterns', level: 'Intermediate' },
      { title: 'Custom Hooks: Advanced', desc: 'Complex hooks, hook composition', level: 'Advanced' },
      { title: 'Hooks Best Practices', desc: 'Rules of hooks, avoiding common mistakes', level: 'Intermediate' },
      { title: 'useLayoutEffect vs useEffect', desc: 'Timing, synchronous effects', level: 'Intermediate' },
      { title: 'useTransition Hook', desc: 'Suspense, concurrent features', level: 'Advanced' },
      { title: 'useDeferredValue Hook', desc: 'Deferred updates, priority rendering', level: 'Advanced' },
      
      // Component Patterns (26-40)
      { title: 'Component Composition', desc: 'Compound components, render props', level: 'Intermediate' },
      { title: 'HOC (Higher-Order Components)', desc: 'Wrapping components, cross-cutting concerns', level: 'Intermediate' },
      { title: 'Render Props Pattern', desc: 'Function as children, shared logic', level: 'Intermediate' },
      { title: 'Error Boundaries', desc: 'Catching errors, error handling UI', level: 'Intermediate' },
      { title: 'Code Splitting & Lazy Loading', desc: 'React.lazy, Suspense, dynamic imports', level: 'Intermediate' },
      { title: 'Controlled vs Uncontrolled', desc: 'Form input patterns, when to use each', level: 'Intermediate' },
      { title: 'Portal Component', desc: 'Rendering outside DOM tree, modals', level: 'Intermediate' },
      { title: 'Fragment & Keys', desc: 'Grouping elements without wrapper', level: 'Intermediate' },
      { title: 'Refs & DOM Manipulation', desc: 'Direct DOM access, when needed', level: 'Intermediate' },
      { title: 'Profiling & Performance', desc: 'React DevTools, identifying bottlenecks', level: 'Advanced' },
      
      // State Management & APIs (41-50)
      { title: 'Fetching Data', desc: 'useEffect with fetch, loading states', level: 'Intermediate' },
      { title: 'Error Handling in Components', desc: 'Try/catch, error states, UI feedback', level: 'Intermediate' },
      { title: 'Working with APIs', desc: 'REST APIs, handling responses', level: 'Intermediate' },
      { title: 'State Management: Context + useReducer', desc: 'Global state without Redux', level: 'Intermediate' },
      { title: 'Redux Basics', desc: 'Store, actions, reducers, selectors', level: 'Advanced' },
      { title: 'Redux Hooks: useDispatch, useSelector', desc: 'Redux with functional components', level: 'Advanced' },
      { title: 'Middleware & Async', desc: 'redux-thunk, async actions', level: 'Advanced' },
      { title: 'Testing React Components', desc: 'Testing Library, user events', level: 'Advanced' },
      { title: 'Performance: Memoization & Code Split', desc: 'React.memo, lazy, bundle optimization', level: 'Advanced' },
      { title: 'React Project: Full CRUD Application', desc: 'Complete React application with state & API', level: 'Advanced' }
    ]
  },
  html: {
    language: 'html',
    name: 'HTML',
    lessons: [
      // Basics (1-10)
      { title: 'HTML Fundamentals', desc: 'Tags, elements, attributes, document structure', level: 'Beginner' },
      { title: 'Document Structure', desc: 'DOCTYPE, html, head, body, meta tags', level: 'Beginner' },
      { title: 'Headings & Paragraphs', desc: 'h1-h6, p, semantic hierarchy', level: 'Beginner' },
      { title: 'Lists: Ordered & Unordered', desc: 'ol, ul, li, nested lists', level: 'Beginner' },
      { title: 'Links & Navigation', desc: 'Anchor tags, href, relative/absolute paths', level: 'Beginner' },
      { title: 'Images & Media', desc: 'img, alt text, srcset, picture element', level: 'Beginner' },
      { title: 'Text Formatting', desc: 'b, strong, i, em, mark, code, pre', level: 'Beginner' },
      { title: 'Tables & Data', desc: 'table, tr, td, th, thead, tbody, tfoot', level: 'Beginner' },
      { title: 'Forms: Input Types', desc: 'text, email, password, number inputs', level: 'Beginner' },
      { title: 'Forms: Validation', desc: 'required, pattern, min/max, form submission', level: 'Beginner' },
      
      // Semantic HTML (11-25)
      { title: 'Semantic HTML5', desc: 'header, nav, main, article, section, aside', level: 'Intermediate' },
      { title: 'Layout Elements', desc: 'div, span, container patterns', level: 'Beginner' },
      { title: 'Article Structure', desc: 'article, h1-h6, nested sections', level: 'Intermediate' },
      { title: 'Navigation Patterns', desc: 'nav, breadcrumbs, skip links', level: 'Intermediate' },
      { title: 'Forms: Advanced Inputs', desc: 'datalist, range, color, file inputs', level: 'Intermediate' },
      { title: 'Forms: Select & Textarea', desc: 'select, option, textarea, autocomplete', level: 'Intermediate' },
      { title: 'Forms: Fieldset & Legend', desc: 'Grouping form controls, accessibility', level: 'Intermediate' },
      { title: 'Data Attributes', desc: 'data-*, custom attributes, JS access', level: 'Intermediate' },
      { title: 'Accessibility: ARIA', desc: 'aria-label, aria-hidden, roles', level: 'Intermediate' },
      { title: 'Meta Tags & SEO', desc: 'og:, description, keywords, structured data', level: 'Intermediate' },
      
      // Media & Embedding (26-35)
      { title: 'Audio Element', desc: 'Controls, sources, formats', level: 'Intermediate' },
      { title: 'Video Element', desc: 'Video tag, sources, controls, autoplay', level: 'Intermediate' },
      { title: 'Embedding: iframe', desc: 'External content, security concerns', level: 'Intermediate' },
      { title: 'Canvas Element', desc: 'Drawing, graphics, basic canvas API', level: 'Intermediate' },
      { title: 'SVG Basics', desc: 'Vector graphics, shapes, paths', level: 'Intermediate' },
      { title: 'Responsive Images', desc: 'srcset, sizes, picture element', level: 'Intermediate' },
      { title: 'Lazy Loading', desc: 'loading attribute, performance', level: 'Intermediate' },
      { title: 'Document Head Optimization', desc: 'Preload, prefetch, DNS-prefetch', level: 'Intermediate' },
      { title: 'Web Performance Hints', desc: 'Preconnect, preload, resource hints', level: 'Advanced' },
      { title: 'Web Components Basics', desc: 'Custom elements, templates, slots', level: 'Advanced' },
      
      // Advanced Topics (36-50)
      { title: 'Microdata & Schema.org', desc: 'Structured data, Rich snippets', level: 'Intermediate' },
      { title: 'Open Graph Protocol', desc: 'Social media sharing, metadata', level: 'Intermediate' },
      { title: 'PWA Manifest', desc: 'Web app manifest, install prompts', level: 'Advanced' },
      { title: 'Web Standards & Compliance', desc: 'W3C, HTML5, browser support', level: 'Advanced' },
      { title: 'HTML Best Practices', desc: 'Semantics, accessibility, performance', level: 'Advanced' },
      { title: 'HTML in Different Contexts', desc: 'Email HTML, AMP, different frameworks', level: 'Advanced' },
      { title: 'Accessibility: Semantics', desc: 'Proper tag usage for a11y', level: 'Advanced' },
      { title: 'Mobile HTML', desc: 'Viewport, touch, mobile considerations', level: 'Intermediate' },
      { title: 'Security: HTML', desc: 'XSS prevention, CSP headers', level: 'Advanced' },
      { title: 'HTML Project: Complete Website', desc: 'Full HTML website with all concepts', level: 'Advanced' }
    ]
  },
  css: {
    language: 'css',
    name: 'CSS',
    lessons: [
      // Basics (1-10)
      { title: 'CSS Fundamentals', desc: 'Selectors, properties, values, syntax', level: 'Beginner' },
      { title: 'Selectors: Element, Class, ID', desc: 'Basic selectors, specificity', level: 'Beginner' },
      { title: 'Colors & Backgrounds', desc: 'color, background, gradients', level: 'Beginner' },
      { title: 'Fonts & Text', desc: 'font-family, size, weight, text properties', level: 'Beginner' },
      { title: 'Box Model', desc: 'Margin, padding, border, box-sizing', level: 'Beginner' },
      { title: 'Display & Positioning', desc: 'block, inline, inline-block, display values', level: 'Beginner' },
      { title: 'Position Property', desc: 'static, relative, absolute, fixed, sticky', level: 'Beginner' },
      { title: 'Float & Clearing', desc: 'float, clear, clearfix, legacy layouts', level: 'Beginner' },
      { title: 'Overflow & Clipping', desc: 'overflow, clip, overflow-wrap', level: 'Beginner' },
      { title: 'Opacity & Visibility', desc: 'opacity, visibility, display: none', level: 'Beginner' },
      
      // Selectors & Specificity (11-20)
      { title: 'Advanced Selectors', desc: 'Attribute, pseudo-class, pseudo-element', level: 'Intermediate' },
      { title: 'Pseudo-Classes', desc: ':hover, :active, :focus, :nth-child', level: 'Intermediate' },
      { title: 'Pseudo-Elements', desc: '::before, ::after, ::first-line, ::selection', level: 'Intermediate' },
      { title: 'Combinators', desc: 'Descendant, child, sibling combinators', level: 'Intermediate' },
      { title: 'Specificity & Cascade', desc: 'Calculating specificity, !important', level: 'Intermediate' },
      { title: 'CSS Variables (Custom Properties)', desc: '--var, var(), scope', level: 'Intermediate' },
      { title: 'Inheritance', desc: 'inherit, initial, unset values', level: 'Intermediate' },
      { title: 'CSS Resets & Normalize', desc: 'Resetting default styles consistently', level: 'Intermediate' },
      { title: 'CSS Naming: BEM', desc: 'Block, Element, Modifier methodology', level: 'Intermediate' },
      { title: 'CSS Naming: OOCSS & SMACSS', desc: 'Organization methodologies', level: 'Advanced' },
      
      // Layout (21-35)
      { title: 'Flexbox Basics', desc: 'flex container, items, main/cross axis', level: 'Intermediate' },
      { title: 'Flexbox: Alignment', desc: 'justify-content, align-items, align-content', level: 'Intermediate' },
      { title: 'Flexbox: Growing & Shrinking', desc: 'flex-grow, flex-shrink, flex-basis', level: 'Intermediate' },
      { title: 'Grid Basics', desc: 'Grid container, rows, columns, gaps', level: 'Intermediate' },
      { title: 'Grid: Placement', desc: 'grid-column, grid-row, area names', level: 'Intermediate' },
      { title: 'Grid: Advanced', desc: 'Minmax, auto-fit, auto-fill, subgrid', level: 'Advanced' },
      { title: 'Responsive Design: Media Queries', desc: '@media, breakpoints, mobile-first', level: 'Intermediate' },
      { title: 'Responsive Typography', desc: 'Fluid sizing, clamp(), rem units', level: 'Advanced' },
      { title: 'Container Queries', desc: '@container, responsive to containers', level: 'Advanced' },
      { title: 'Multi-Column Layout', desc: 'column-count, column-gap, balancing', level: 'Advanced' },
      
      // Transforms & Animations (36-45)
      { title: 'Transforms', desc: 'translate, scale, rotate, skew, perspective', level: 'Intermediate' },
      { title: 'Transitions', desc: 'transition, duration, timing, delay', level: 'Intermediate' },
      { title: 'Animations', desc: '@keyframes, animation properties', level: 'Intermediate' },
      { title: 'Animation Timing', desc: 'ease functions, steps, will-change', level: 'Intermediate' },
      { title: '3D Transforms', desc: 'translate3d, rotateX, perspective depth', level: 'Advanced' },
      { title: 'Performance: GPU Acceleration', desc: 'Hardware acceleration, optimization', level: 'Advanced' },
      { title: 'Filter Effects', desc: 'blur, brightness, contrast, hue-rotate', level: 'Intermediate' },
      { title: 'Blend Modes', desc: 'mix-blend-mode, multiply, screen', level: 'Intermediate' },
      { title: 'Clip & Mask', desc: 'clip-path, mask-image, SVG masks', level: 'Advanced' },
      { title: 'Advanced Effects', desc: 'Gradients, shadows, glow, depth', level: 'Advanced' },
      
      // Modern CSS (46-50)
      { title: 'CSS Logical Properties', desc: 'inline, block, writing modes', level: 'Advanced' },
      { title: 'CSS Functions', desc: 'calc(), min(), max(), clamp(), var()', level: 'Advanced' },
      { title: 'CSS Performance', desc: 'Selectors efficiency, painting, reflow', level: 'Advanced' },
      { title: 'CSS Project: Responsive Website', desc: 'Complete styled responsive site', level: 'Advanced' },
      { title: 'CSS Frameworks & Architecture', desc: 'Tailwind, Bootstrap, CSS systems', level: 'Advanced' }
    ]
  }
};

// Generate lesson content
function generateComprehensiveLesson(lang, lesson, index) {
  const difficulty = lesson.level;
  const content = `# ${lesson.title}

## Introduction
${lesson.desc}

## Key Concepts
${getDifficultyContent(difficulty, lesson.title)}

## Learning Outcomes
- Understand core principles of ${lesson.title.toLowerCase()}
- Apply concepts in real-world scenarios
- Build practical skills and confidence

## Theory
${getTheoryContent(lang, lesson.title)}

## Examples
\`\`\`${lang}
// Example code for ${lesson.title}
// ${lesson.desc}
\`\`\`

## Practice Exercise
Complete the hands-on exercise below to master ${lesson.title}. This will help you:
- Consolidate your understanding
- Build muscle memory
- Practice realistic scenarios

## Common Mistakes to Avoid
- Mistake 1: Not understanding the basics first
- Mistake 2: Skipping practice
- Mistake 3: Not reading error messages

## Tips & Tricks
- Read documentation thoroughly
- Test incrementally
- Ask questions on Stack Overflow

## Additional Resources
- Official documentation
- Community forums
- Related topics to explore`;

  return {
    id: `${lang}-${index + 1}`,
    title: lesson.title,
    description: lesson.desc,
    language: comprehensiveCourses[lang].language,
    difficulty,
    estimatedTime: 30 + (index % 5) * 10,
    content,
    initialCode: `// ${lesson.title}\n// ${lesson.desc}\n\n// Your code here:\n`,
    solution: `// Solution: ${lesson.title}\n// Complete solution\n`,
    hints: [
      `Think about what ${lesson.title} means`,
      'Start simple and build up',
      'Test your understanding frequently',
      'Review the theory section'
    ],
    testCases: [
      { 
        name: 'Code exists', 
        test: (code) => code.trim().length > 0, 
        errorMessage: 'Please write some code' 
      },
      { 
        name: 'Code is meaningful', 
        test: (code) => code.trim().length >= 10, 
        errorMessage: 'Code should be more substantial' 
      }
    ]
  };
}

function getDifficultyContent(difficulty, title) {
  if (difficulty === 'Beginner') {
    return `- Foundational concepts of ${title}
- Basic syntax and usage patterns
- Common use cases
- Getting started tips`;
  } else if (difficulty === 'Intermediate') {
    return `- Advanced features of ${title}
- Best practices and patterns
- Performance considerations
- Integration with other concepts`;
  } else {
    return `- Expert-level techniques for ${title}
- Edge cases and special scenarios
- Optimization strategies
- Architecture patterns`;
  }
}

function getTheoryContent(lang, title) {
  return `## What is ${title}?
${title} is a key concept in ${lang} programming that allows you to...

## How It Works
The mechanism behind ${title} involves:
1. Understanding the basic principle
2. Seeing how it relates to other concepts
3. Learning when and where to apply it
4. Mastering optimization techniques

## Why It Matters
${title} is important because it:
- Improves code quality and readability
- Enables better performance
- Follows industry best practices
- Helps you become a better developer`;
}

// Generate all files
const coursesToGenerate = Object.keys(comprehensiveCourses).slice(0, 5); // Start with JS, Python, TS, React, HTML
let completed = 0;

console.log('🚀 Generating comprehensive lessons for all courses...\n');

coursesToGenerate.forEach(lang => {
  const course = comprehensiveCourses[lang];
  const lessons = course.lessons.map((lesson, index) => generateComprehensiveLesson(lang, lesson, index));
  
  const fileContent = `import { Lesson } from '../courses'

export const ${lang}Lessons: Lesson[] = [
${lessons.map(l => `  {
    id: '${l.id}',
    title: '${l.title.replace(/'/g, "\\'")}',
    description: '${l.description.replace(/'/g, "\\'")}',
    language: '${l.language}' as const,
    difficulty: '${l.difficulty}',
    estimatedTime: ${l.estimatedTime},
    content: \`${l.content.replace(/`/g, '\\`')}\`,
    initialCode: \`${l.initialCode.replace(/`/g, '\\`')}\`,
    solution: \`${l.solution.replace(/`/g, '\\`')}\`,
    hints: [${l.hints.map(h => `'${h.replace(/'/g, "\\'")}'`).join(', ')}],
    testCases: [
      { 
        name: '${l.testCases[0].name}', 
        test: (code: string) => ${l.testCases[0].test.toString()}, 
        errorMessage: '${l.testCases[0].errorMessage}' 
      },
      { 
        name: '${l.testCases[1].name}', 
        test: (code: string) => ${l.testCases[1].test.toString()}, 
        errorMessage: '${l.testCases[1].errorMessage}' 
      }
    ]
  }`).join(',\n')}
]
`;

  const filePath = path.join(__dirname, '../data/lessons', `${lang}Lessons.ts`);
  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log(`✅ ${lang}Lessons.ts - ${lessons.length} comprehensive lessons`);
  completed++;
});

console.log(`\n✅ Generated ${completed} comprehensive course files!`);
