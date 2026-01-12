// Course Final Projects - Full-Stack Capstone Projects for Each Course
import { Lesson } from './courses'

// Python Full-Stack Project
export const pythonFinalProject: Lesson = {
  id: 'python-final-project',
  title: 'Final Project: Full-Stack Task Management API',
  description: 'Build a complete REST API with authentication, database, and testing',
  language: 'python' as const,
  difficulty: 'Advanced',
  estimatedTime: 180,
  isProject: true,
  projectDescription: `Build a production-ready Task Management REST API with:
- User authentication (JWT)
- CRUD operations for tasks
- Database integration (SQLite/PostgreSQL)
- Input validation
- Error handling
- Unit tests`,
  content: `# Final Project: Task Management API

## Requirements
1. Create a Flask/Django REST API
2. Implement user registration and login
3. JWT token authentication
4. Task CRUD operations (Create, Read, Update, Delete)
5. Proper error handling
6. Input validation

## API Endpoints Required:
- POST /api/register - Register new user
- POST /api/login - Login and get JWT token
- GET /api/tasks - Get all tasks (authenticated)
- POST /api/tasks - Create new task (authenticated)
- PUT /api/tasks/<id> - Update task (authenticated)
- DELETE /api/tasks/<id> - Delete task (authenticated)

## Starter Code Structure
\`\`\`python
from flask import Flask, request, jsonify
import jwt
import datetime

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'

# Your implementation here
\`\`\``,
  initialCode: `from flask import Flask, request, jsonify
import jwt
import datetime
from functools import wraps

app = Flask(__name__)
app.config['SECRET_KEY'] = 'dev-secret-key-12345'

# In-memory storage (use database in production)
users = {}
tasks = {}
task_id_counter = 1

# Token required decorator
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'error': 'Token missing'}), 401
        try:
            token = token.replace('Bearer ', '')
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
            current_user = data['user_id']
        except:
            return jsonify({'error': 'Invalid token'}), 401
        return f(current_user, *args, **kwargs)
    return decorated

# Register endpoint
@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    # Implement user registration
    # Return success/error message
    pass

# Login endpoint  
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    # Implement login logic
    # Return JWT token
    pass

# Get all tasks (authenticated)
@app.route('/api/tasks', methods=['GET'])
@token_required
def get_tasks(current_user):
    # Return user's tasks
    pass

# Create task (authenticated)
@app.route('/api/tasks', methods=['POST'])
@token_required
def create_task(current_user):
    data = request.get_json()
    # Create new task
    pass

# Complete implementation required
if __name__ == '__main__':
    app.run(debug=True)
`,
  solution: `# Complete solution provided after submission`,
  hints: [
    'Use jwt.encode() to create tokens',
    'Hash passwords with werkzeug.security',
    'Validate all input data',
    'Return proper HTTP status codes',
    'Use try-except for error handling'
  ],
  testCases: [
    {
      name: 'Has Flask app',
      test: (code: string, output: string) => code.includes('Flask') && code.includes('app = Flask'),
      errorMessage: 'Must create a Flask application'
    },
    {
      name: 'Has register endpoint',
      test: (code: string, output: string) => code.includes('/api/register') && code.includes("methods=['POST']"),
      errorMessage: 'Must implement POST /api/register endpoint'
    },
    {
      name: 'Has login endpoint',
      test: (code: string, output: string) => code.includes('/api/login') && code.includes('jwt'),
      errorMessage: 'Must implement POST /api/login with JWT'
    },
    {
      name: 'Has authentication',
      test: (code: string, output: string) => code.includes('token_required') || code.includes('@token') || code.includes('jwt.decode'),
      errorMessage: 'Must implement token-based authentication'
    },
    {
      name: 'Has CRUD endpoints',
      test: (code: string, output: string) => {
        const hasGet = code.includes('/api/tasks') && code.includes("methods=['GET']")
        const hasPost = code.includes('/api/tasks') && code.includes("methods=['POST']")
        return hasGet && hasPost
      },
      errorMessage: 'Must implement GET and POST /api/tasks endpoints'
    },
    {
      name: 'Has error handling',
      test: (code: string, output: string) => code.includes('try') && code.includes('except') || code.includes('error'),
      errorMessage: 'Must implement proper error handling'
    },
    {
      name: 'Returns JSON responses',
      test: (code: string, output: string) => code.includes('jsonify'),
      errorMessage: 'Must return JSON responses using jsonify()'
    },
    {
      name: 'Validates input',
      test: (code: string, output: string) => code.includes('get_json') && (code.includes('if not') || code.includes('if ')),
      errorMessage: 'Must validate input data'
    }
  ]
}

// JavaScript Full-Stack Project  
export const javaScriptFinalProject: Lesson = {
  id: 'js-final-project',
  title: 'Final Project: Real-Time Chat Application',
  description: 'Build a real-time chat app with WebSockets, user authentication, and message persistence',
  language: 'javascript' as const,
  difficulty: 'Advanced',
  estimatedTime: 180,
  isProject: true,
  projectDescription: `Create a real-time chat application with:
- WebSocket connection
- Multiple chat rooms
- User authentication
- Message history
- Typing indicators
- Online user list`,
  content: `# Final Project: Real-Time Chat

## Requirements
Build a complete chat system with Node.js, Express, and Socket.IO

## Features:
1. User login/signup
2. Multiple chat rooms
3. Real-time messaging
4. Typing indicators
5. Online users list
6. Message timestamps`,
  initialCode: `const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const users = new Map();
const messages = [];

app.use(express.json());
app.use(express.static('public'));

// Socket.IO connection
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  
  // Handle user join
  socket.on('join', (username) => {
    // Implement join logic
  });
  
  // Handle new message
  socket.on('message', (data) => {
    // Implement message broadcast
  });
  
  // Handle typing indicator
  socket.on('typing', (data) => {
    // Implement typing notification
  });
  
  // Handle disconnect
  socket.on('disconnect', () => {
    // Implement disconnect logic
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
`,
  solution: `# Complete implementation required`,
  hints: [
    'Use socket.broadcast.emit() to send to others',
    'Store user data in Map or object',
    'Emit events for real-time updates',
    'Handle edge cases (disconnections, duplicate users)'
  ],
  testCases: [
    {
      name: 'Has Express server',
      test: (code: string, output: string) => code.includes('express') && code.includes('app = express'),
      errorMessage: 'Must create Express server'
    },
    {
      name: 'Has Socket.IO',
      test: (code: string, output: string) => code.includes('socket.io') || code.includes('socketIO'),
      errorMessage: 'Must use Socket.IO for real-time communication'
    },
    {
      name: 'Handles connections',
      test: (code: string, output: string) => code.includes("io.on('connection'") && code.includes('socket'),
      errorMessage: 'Must handle socket connections'
    },
    {
      name: 'Handles messages',
      test: (code: string, output: string) => code.includes("socket.on('message'") || code.includes("on('chat"),
      errorMessage: 'Must handle incoming messages'
    },
    {
      name: 'Broadcasts to users',
      test: (code: string, output: string) => code.includes('emit') || code.includes('broadcast'),
      errorMessage: 'Must broadcast messages to connected users'
    },
    {
      name: 'Handles disconnection',
      test: (code: string, output: string) => code.includes("on('disconnect'"),
      errorMessage: 'Must handle user disconnection'
    },
    {
      name: 'Stores user data',
      test: (code: string, output: string) => code.includes('users') && (code.includes('Map') || code.includes('{}') || code.includes('[]')),
      errorMessage: 'Must store connected users'
    }
  ]
}

// HTML/CSS Final Project
export const htmlCssFinalProject: Lesson = {
  id: 'html-final-project',
  title: 'Final Project: Responsive Portfolio Website',
  description: 'Create a professional portfolio with modern design, animations, and responsiveness',
  language: 'html' as const,
  difficulty: 'Advanced',
  estimatedTime: 120,
  isProject: true,
  content: `# Final Project: Portfolio Website

## Requirements:
1. Responsive navigation bar
2. Hero section with animation
3. Projects showcase grid
4. Skills section
5. Contact form
6. Footer with social links
7. Mobile-responsive (< 768px)
8. CSS animations/transitions`,
  initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    /* Add your CSS here */
    
  </style>
</head>
<body>
  <!-- Add your HTML here -->
  
</body>
</html>
`,
  solution: `<!-- Complete responsive portfolio -->`,
  testCases: [
    {
      name: 'Has proper HTML structure',
      test: (code: string, output: string) => code.includes('<!DOCTYPE html>') && code.includes('<html') && code.includes('<body>'),
      errorMessage: 'Must have proper HTML5 structure'
    },
    {
      name: 'Has navigation',
      test: (code: string, output: string) => code.includes('<nav') || code.includes('class="nav'),
      errorMessage: 'Must include a navigation section'
    },
    {
      name: 'Has hero section',
      test: (code: string, output: string) => code.includes('hero') || code.includes('<header'),
      errorMessage: 'Must include a hero/header section'
    },
    {
      name: 'Has CSS styling',
      test: (code: string, output: string) => code.includes('<style>') && code.includes('{') && code.split('{').length >= 5,
      errorMessage: 'Must include substantial CSS styling (at least 5 rules)'
    },
    {
      name: 'Has responsive design',
      test: (code: string, output: string) => code.includes('@media') || code.includes('max-width'),
      errorMessage: 'Must include responsive CSS with media queries'
    },
    {
      name: 'Has contact form',
      test: (code: string, output: string) => code.includes('<form') && code.includes('<input'),
      errorMessage: 'Must include a contact form'
    },
    {
      name: 'Has animations',
      test: (code: string, output: string) => code.includes('animation') || code.includes('transition') || code.includes('@keyframes'),
      errorMessage: 'Must include CSS animations or transitions'
    }
  ]
}

// Export all final projects
export const finalProjects = {
  python: pythonFinalProject,
  javascript: javaScriptFinalProject,
  html: htmlCssFinalProject
  // More projects will be added dynamically
}
