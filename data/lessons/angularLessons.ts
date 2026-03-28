import { Lesson } from '../courses'

export const angularLessons: Lesson[] = Array.from({ length: 50 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 17 ? 'Beginner' : i < 34 ? 'Intermediate' : 'Advanced'
  
  const topics = [
    'Components & Templates', 'Data Binding', 'Directives', 'Services & DI',
    'Routing', 'Forms', 'HTTP Client', 'RxJS Observables',
    'Pipes', 'Modules', 'Lifecycle Hooks', 'Dependency Injection',
    'Template Syntax', 'Structural Directives', 'Attribute Directives',
    'Services', 'Reactive Forms', 'Template-driven Forms',
    'HttpClient', 'Interceptors', 'Route Guards', 'Lazy Loading',
    'State Management', 'NgRx Store', 'Animations',
    'Testing', 'Unit Testing', 'E2E Testing',
    'Build & Deploy', 'Performance', 'Security',
    'Angular Material', 'Standalone Components', 'Signals',
    'Change Detection', 'View Encapsulation', 'Content Projection',
    'Dynamic Components', 'Custom Pipes', 'Custom Directives',
    'Angular CLI', 'Schematics', 'Libraries',
    'Server-Side Rendering', 'Universal', 'Progressive Web Apps',
    'Internationalization', 'Accessibility', 'Best Practices',
    'Angular Project', 'Real-world Application'
  ]
  
  const topic = topics[i]
  
  return {
    id: `angular-${i + 1}`,
    title: `Angular - ${topic}`,
    description: `Master ${topic} in Angular`,
    language: 'typescript' as const,
    difficulty,
    estimatedTime: 30 + (i % 20),
    content: `# ${topic}

## Overview
Learn about ${topic} in Angular framework.

## Key Concepts
- Understanding ${topic}
- Practical implementation
- Best practices
- Common patterns

## Example
\`\`\`typescript
// ${topic} example
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: '<h1>{{ title }}</h1>'
})
export class ExampleComponent {
  title = '${topic}';
}
\`\`\`

## Practice
Implement ${topic} in your Angular application.
`,
    initialCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: ''
})
export class ExampleComponent {
  // Your code here
}`,
    solution: `import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: '<div>{{ message }}</div>'
})
export class ExampleComponent {
  message = 'Hello Angular!';
}`,
    hints: [
      `Focus on ${topic}`,
      'Use Angular CLI for scaffolding',
      'Test your implementation',
      'Follow Angular style guide'
    ],
    testCases: [
      { 
        name: 'Code is not empty', 
        test: (code: string) => code.trim().length > 0, 
        errorMessage: 'Write some Angular code' 
      },
      { 
        name: 'Has Component decorator', 
        test: (code: string) => code.includes('@Component'), 
        errorMessage: 'Include @Component decorator' 
      }
    ]
  }
})
