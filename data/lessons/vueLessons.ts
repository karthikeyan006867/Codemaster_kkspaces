import { Lesson } from '../courses'

const detailedVueLessons: Lesson[] = [
  {
    id: 'vue-1',
    title: 'Introduction to Vue.js',
    description: 'Learn Vue basics and reactive data',
    language: 'javascript' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Welcome to Vue.js!

Vue is a progressive framework for building user interfaces.

## Your First Vue App

\`\`\`javascript
const app = Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
})
app.mount('#app')
\`\`\`

HTML:
\`\`\`html
<div id="app">
  {{ message }}
</div>
\`\`\`

## Your Task
Create a Vue app with a greeting message`,
    initialCode: `const app = Vue.createApp({
  data() {
    return {
      // Add your data here
    }
  }
})`,
    solution: `const app = Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
})`,
    hints: ['Use data() to return reactive data', '{{ }} for interpolation', 'Vue.createApp creates app'],
    testCases: [
      { name: 'Has createApp', test: (code) => code.includes('createApp'), errorMessage: 'Use Vue.createApp()' },
      { name: 'Has data function', test: (code) => code.includes('data()'), errorMessage: 'Define data() method' },
      { name: 'Returns object', test: (code) => code.includes('return'), errorMessage: 'Return data object' }
    ]
  },
  {
    id: 'vue-2',
    title: 'V-Model Two-Way Binding',
    description: 'Learn v-model for form inputs',
    language: 'javascript' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# V-Model

Two-way data binding for form inputs.

\`\`\`html
<input v-model="name" />
<p>Hello, {{ name }}</p>
\`\`\`

\`\`\`javascript
data() {
  return {
    name: ''
  }
}
\`\`\`

## Your Task
Create an input that binds to a variable called username`,
    initialCode: `data() {
  return {
    // Add username here
  }
}`,
    solution: `data() {
  return {
    username: ''
  }
}`,
    hints: ['v-model creates two-way binding', 'Data updates automatically', 'Works with input, textarea, select'],
    testCases: [
      { name: 'Has data', test: (code) => code.includes('return'), errorMessage: 'Return data' },
      { name: 'Has property', test: (code) => code.includes(':'), errorMessage: 'Define a property' }
    ]
  },
  {
    id: 'vue-3',
    title: 'Methods and Event Handling',
    description: 'Learn methods and @click directive',
    language: 'javascript' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Methods

Define functions in your component.

\`\`\`javascript
const app = Vue.createApp({
  data() {
    return { count: 0 }
  },
  methods: {
    increment() {
      this.count++
    }
  }
})
\`\`\`

\`\`\`html
<button @click="increment">Count: {{ count }}</button>
\`\`\`

## Your Task
Create a method that increments a counter`,
    initialCode: `data() {
  return { count: 0 }
},
methods: {
  // Add increment method
}`,
    solution: `data() {
  return { count: 0 }
},
methods: {
  increment() {
    this.count++
  }
}`,
    hints: ['Define methods in methods object', 'Use this to access data', '@click for click events'],
    testCases: [
      { name: 'Has methods', test: (code) => code.includes('methods'), errorMessage: 'Define methods' },
      { name: 'Has function', test: (code) => code.includes('()') && code.includes('{'), errorMessage: 'Create a method' }
    ]
  }
];

// Generate remaining lessons
for (let i = 4; i <= 50; i++) {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i <= 17 ? 'Beginner' : i <= 34 ? 'Intermediate' : 'Advanced';
  const topics = ['V-If/V-Show', 'V-For Lists', 'Computed Properties', 'Watchers', 'Components', 'Props', 'Emits', 'Slots', 'Composables', 'Pinia Store'];
  const topic = topics[(i - 4) % topics.length];
  
  detailedVueLessons.push({
    id: `vue-${i}`,
    title: `${topic} in Vue`,
    description: `Master ${topic} for building reactive UIs`,
    language: 'javascript' as const,
    difficulty,
    estimatedTime: 30 + (i % 15),
    content: `# ${topic}

Learn ${topic} - key Vue concept.

\`\`\`javascript
// ${topic} example
const app = Vue.createApp({
  data() {
    return {}
  }
})
\`\`\`

Practice ${topic} in your components.`,
    initialCode: `// ${topic} code\nconst app = Vue.createApp({\n  data() {\n    return {}\n  }\n})`,
    solution: `const app = Vue.createApp({
  data() {
    return {
      message: '${topic} completed!'
    }
  }
})`,
    hints: [`Focus on ${topic}`, 'Vue is reactive', 'Test in browser'],
    testCases: [
      { name: 'Has Vue code', test: (code) => code.includes('createApp') || code.includes('data'), errorMessage: 'Write Vue code' },
      { name: 'Not empty', test: (code) => code.trim().length > 20, errorMessage: 'Add more code' }
    ]
  });
}

export const vueLessons = detailedVueLessons
