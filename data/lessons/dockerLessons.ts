import { Lesson } from '../courses'

const detailedDockerLessons: Lesson[] = [
  {
    id: 'docker-1',
    title: 'Introduction to Docker',
    description: 'Learn Docker basics and run your first container',
    language: 'bash' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Docker Introduction

Docker packages applications into containers - lightweight, portable units.

## Key Concepts
- **Image**: Blueprint for containers
- **Container**: Running instance of an image
- **Docker Hub**: Registry for images

## Your First Container

\`\`\`bash
docker run hello-world
\`\`\`

This downloads and runs the hello-world image.

## Your Task
Run an nginx web server container`,
    initialCode: `# Run nginx container on port 80`,
    solution: `docker run -p 80:80 nginx`,
    hints: ['Use docker run', '-p maps ports', 'nginx is the image name'],
    testCases: [
      { name: 'Has docker run', test: (code) => code.includes('docker run'), errorMessage: 'Use docker run' },
      { name: 'Uses nginx', test: (code) => code.includes('nginx'), errorMessage: 'Run nginx image' },
      { name: 'Maps port', test: (code) => code.includes('-p'), errorMessage: 'Use -p to map ports' }
    ]
  },
  {
    id: 'docker-2',
    title: 'Dockerfile Basics',
    description: 'Create your own Docker image',
    language: 'bash' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Dockerfile

Create custom images with Dockerfile.

## Example Dockerfile
\`\`\`dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
\`\`\`

## Instructions
- \`FROM\`: Base image
- \`WORKDIR\`: Working directory
- \`COPY\`: Copy files
- \`RUN\`: Execute commands
- \`CMD\`: Default command

## Your Task
Create a simple Python Dockerfile`,
    initialCode: `# Create Dockerfile for Python app`,
    solution: `FROM python:3.9\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install -r requirements.txt\nCOPY . .\nCMD ["python", "app.py"]`,
    hints: ['Start with FROM python', 'COPY then RUN pip install', 'CMD runs the app'],
    testCases: [
      { name: 'Has FROM', test: (code) => code.toUpperCase().includes('FROM'), errorMessage: 'Start with FROM' },
      { name: 'Has COPY', test: (code) => code.toUpperCase().includes('COPY'), errorMessage: 'Use COPY' },
      { name: 'Has CMD', test: (code) => code.toUpperCase().includes('CMD'), errorMessage: 'End with CMD' }
    ]
  },
  {
    id: 'docker-3',
    title: 'Docker Compose',
    description: 'Orchestrate multiple containers',
    language: 'bash' as const,
    difficulty: 'Intermediate',
    estimatedTime: 40,
    content: `# Docker Compose

Define multi-container apps in YAML.

## docker-compose.yml
\`\`\`yaml
version: '3'
services:
  web:
    image: nginx
    ports:
      - "80:80"
  db:
    image: postgres
    environment:
      POSTGRES_PASSWORD: secret
\`\`\`

## Commands
- \`docker-compose up\`: Start all services
- \`docker-compose down\`: Stop all

## Your Task
Create compose file with web and database`,
    initialCode: `# Write docker-compose up command`,
    solution: `docker-compose up -d`,
    hints: ['Use docker-compose up', '-d runs in background', 'Define services in YAML'],
    testCases: [
      { name: 'Has docker-compose', test: (code) => code.includes('docker-compose'), errorMessage: 'Use docker-compose' },
      { name: 'Has up command', test: (code) => code.includes('up'), errorMessage: 'Use up command' }
    ]
  }
];

for (let i = 4; i <= 50; i++) {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i <= 17 ? 'Beginner' : i <= 34 ? 'Intermediate' : 'Advanced';
  const topics = ['Volumes', 'Networks', 'Docker Hub', 'Multi-stage Builds', 'Health Checks', 'Logging', 'Security', 'Swarm', 'Kubernetes', 'Best Practices'];
  const topic = topics[(i - 4) % topics.length];
  
  detailedDockerLessons.push({
    id: `docker-${i}`,
    title: `${topic} in Docker`,
    description: `Learn ${topic} for containerization`,
    language: 'bash' as const,
    difficulty,
    estimatedTime: 30 + (i % 15),
    content: `# ${topic}\n\nMaster ${topic} in Docker.\n\n\`\`\`bash\ndocker run ...\n\`\`\``,
    initialCode: `# ${topic} commands`,
    solution: `docker ps`,
    hints: [`Learn ${topic}`, 'Practice commands', 'Read docs'],
    testCases: [
      { name: 'Not empty', test: (code) => code.trim().length > 5, errorMessage: 'Write commands' }
    ]
  });
}

export const dockerLessons = detailedDockerLessons
