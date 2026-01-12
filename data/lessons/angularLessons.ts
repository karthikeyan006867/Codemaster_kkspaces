import { Lesson } from '../courses'

const detailedAngularLessons: Lesson[] = [
  {
    id: 'angular-1',
    title: 'Angular Introduction',
    description: 'Learn Angular basics and create your first component',
    language: 'typescript' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Angular Framework

Angular is a TypeScript-based web application framework.

## Component Example
\`\`\`typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: \`<h1>{{ title }}</h1>\`
})
export class HelloComponent {
  title = 'Hello Angular!';
}
\`\`\`

## Key Concepts
- **Component**: Building block
- **Template**: HTML view
- **Decorator**: @Component metadata

## Your Task
Create a component that displays a message`,
    initialCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: \`\`
})
export class GreetingComponent {
  // Add property
}`,
    solution: `import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: \`<h1>{{ message }}</h1>\`
})
export class GreetingComponent {
  message = 'Welcome to Angular';
}`,
    hints: ['Use @Component decorator', 'Add template with {{ }}', 'Define class property'],
    testCases: [
      { name: 'Has @Component', test: (code) => code.includes('@Component'), errorMessage: 'Use @Component decorator' },
      { name: 'Has template', test: (code) => code.includes('template'), errorMessage: 'Add template' },
      { name: 'Exports class', test: (code) => code.includes('export class'), errorMessage: 'Export component class' }
    ]
  },
  {
    id: 'angular-2',
    title: 'Data Binding',
    description: 'Learn interpolation and property binding',
    language: 'typescript' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Data Binding

Connect component data to templates.

## Interpolation
\`\`\`typescript
template: \`<p>{{ name }}</p>\`
\`\`\`

## Property Binding
\`\`\`typescript
template: \`<img [src]="imageUrl">\`
\`\`\`

## Event Binding
\`\`\`typescript
template: \`<button (click)="onClick()">Click</button>\`
\`\`\`

## Your Task
Create a button with click handler`,
    initialCode: `@Component({
  template: \`<button>Count: {{ count }}</button>\`
})
export class CounterComponent {
  count = 0;
  // Add click method
}`,
    solution: `@Component({
  template: \`<button (click)="increment()">Count: {{ count }}</button>\`
})
export class CounterComponent {
  count = 0;
  increment() {
    this.count++;
  }
}`,
    hints: ['Use (click) for events', 'Define method in class', 'Use this to access properties'],
    testCases: [
      { name: 'Has method', test: (code) => code.includes('()') && code.includes('{'), errorMessage: 'Define a method' },
      { name: 'Has event', test: (code) => code.includes('(click)') || code.includes('increment'), errorMessage: 'Add click handler' },
      { name: 'Updates count', test: (code) => code.includes('count'), errorMessage: 'Work with count' }
    ]
  },
  {
    id: 'angular-3',
    title: 'Services and Dependency Injection',
    description: 'Create and inject services',
    language: 'typescript' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# Services

Share data and logic across components.

## Service Example
\`\`\`typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData() {
    return ['Item 1', 'Item 2'];
  }
}
\`\`\`

## Inject Service
\`\`\`typescript
constructor(private dataService: DataService) {}
\`\`\`

## Your Task
Create a simple service`,
    initialCode: `import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Add method
}`,
    solution: `import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers() {
    return ['Alice', 'Bob'];
  }
}`,
    hints: ['Use @Injectable decorator', 'providedIn: root for singleton', 'Add methods to class'],
    testCases: [
      { name: 'Has @Injectable', test: (code) => code.includes('@Injectable'), errorMessage: 'Use @Injectable' },
      { name: 'Has method', test: (code) => code.includes('()'), errorMessage: 'Add a method' },
      { name: 'Exports service', test: (code) => code.includes('export class'), errorMessage: 'Export service class' }
    ]
  }
];

for (let i = 4; i <= 50; i++) {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i <= 17 ? 'Beginner' : i <= 34 ? 'Intermediate' : 'Advanced';
  const topics = ['Directives', 'Pipes', 'Routing', 'Forms', 'HTTP Client', 'RxJS', 'Modules', 'Guards', 'Interceptors', 'Testing'];
  const topic = topics[(i - 4) % topics.length];
  
  detailedAngularLessons.push({
    id: `angular-${i}`,
    title: `${topic} in Angular`,
    description: `Learn ${topic} for Angular development`,
    language: 'typescript' as const,
    difficulty,
    estimatedTime: 35 + (i % 15),
    content: `# ${topic}\n\nMaster ${topic} in Angular.\n\n\`\`\`typescript\nimport { Component } from '@angular/core';\n\`\`\``,
    initialCode: `// ${topic} code\nimport { Component } from '@angular/core';`,
    solution: `import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: '${topic}'
})
export class AppComponent {}`,
    hints: [`Learn ${topic}`, 'Angular is powerful', 'Use TypeScript'],
    testCases: [
      { name: 'Not empty', test: (code) => code.trim().length > 10, errorMessage: 'Write Angular code' }
    ]
  });
}

export const angularLessons = detailedAngularLessons
