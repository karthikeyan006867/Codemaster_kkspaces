// Learning Paths - Structured career-oriented learning journeys
// Guides students through recommended courses and projects for specific career goals

export interface LearningPath {
  id: string
  title: string
  description: string
  icon: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  estimatedDuration: string // e.g., "3 months", "6 months"
  salaryRange: string // Average salary range
  demandLevel: 'High' | 'Very High' | 'Growing'
  prerequisites: string[]
  learningObjectives: string[]
  careerOutcomes: string[]
  courses: PathCourse[]
  projects: PathProject[]
  certifications: string[]
  nextSteps: string[]
}

export interface PathCourse {
  courseId: string
  courseName: string
  lessonsCount: number
  isRequired: boolean
  order: number
  estimatedTime: string
}

export interface PathProject {
  id: string
  title: string
  description: string
  skills: string[]
  difficulty: string
  estimatedTime: string
}

export const learningPaths: LearningPath[] = [
  // PATH 1: Full Stack Web Developer
  {
    id: 'path-fullstack-web',
    title: 'Full Stack Web Developer',
    description: 'Become a complete web developer capable of building modern, scalable web applications from front-end to back-end with database integration.',
    icon: '🌐',
    difficulty: 'Beginner',
    estimatedDuration: '6-9 months',
    salaryRange: '$70,000 - $120,000',
    demandLevel: 'Very High',
    prerequisites: [
      'Basic computer literacy',
      'Text editor familiarity',
      'Problem-solving mindset',
      'Willingness to learn continuously'
    ],
    learningObjectives: [
      'Master HTML, CSS, and JavaScript fundamentals',
      'Build responsive, accessible user interfaces',
      'Create RESTful APIs with Node.js/Express',
      'Design and manage databases (SQL and NoSQL)',
      'Implement authentication and authorization',
      'Deploy applications to cloud platforms',
      'Use Git for version control',
      'Write clean, maintainable code',
      'Debug and optimize applications',
      'Collaborate in agile development teams'
    ],
    careerOutcomes: [
      'Full Stack Web Developer',
      'Front-End Developer',
      'Back-End Developer',
      'JavaScript Developer',
      'Software Engineer',
      'Web Application Developer'
    ],
    courses: [
      {
        courseId: 'html',
        courseName: 'HTML Fundamentals',
        lessonsCount: 40,
        isRequired: true,
        order: 1,
        estimatedTime: '2-3 weeks'
      },
      {
        courseId: 'css',
        courseName: 'CSS Styling & Layout',
        lessonsCount: 40,
        isRequired: true,
        order: 2,
        estimatedTime: '3-4 weeks'
      },
      {
        courseId: 'javascript',
        courseName: 'JavaScript Programming',
        lessonsCount: 51,
        isRequired: true,
        order: 3,
        estimatedTime: '6-8 weeks'
      },
      {
        courseId: 'typescript',
        courseName: 'TypeScript',
        lessonsCount: 40,
        isRequired: false,
        order: 4,
        estimatedTime: '2-3 weeks'
      },
      {
        courseId: 'react',
        courseName: 'React Framework',
        lessonsCount: 40,
        isRequired: true,
        order: 5,
        estimatedTime: '4-6 weeks'
      },
      {
        courseId: 'nodejs',
        courseName: 'Node.js Backend',
        lessonsCount: 40,
        isRequired: true,
        order: 6,
        estimatedTime: '4-5 weeks'
      },
      {
        courseId: 'mongodb',
        courseName: 'MongoDB Database',
        lessonsCount: 40,
        isRequired: true,
        order: 7,
        estimatedTime: '2-3 weeks'
      },
      {
        courseId: 'git',
        courseName: 'Git Version Control',
        lessonsCount: 40,
        isRequired: true,
        order: 8,
        estimatedTime: '1-2 weeks'
      },
      {
        courseId: 'nextjs',
        courseName: 'Next.js Full Stack',
        lessonsCount: 40,
        isRequired: false,
        order: 9,
        estimatedTime: '3-4 weeks'
      }
    ],
    projects: [
      {
        id: 'project-todo',
        title: 'Todo List Application',
        description: 'Build a full-featured todo list with React frontend and Node.js backend. Includes user authentication, CRUD operations, and real-time updates.',
        skills: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
        difficulty: 'Beginner',
        estimatedTime: '1 week'
      },
      {
        id: 'project-blog',
        title: 'Blog Platform',
        description: 'Create a blogging platform with rich text editor, comments, categories, and user profiles. Implement JWT authentication and image uploads.',
        skills: ['React', 'Node.js', 'MongoDB', 'JWT', 'File Upload'],
        difficulty: 'Intermediate',
        estimatedTime: '2-3 weeks'
      },
      {
        id: 'project-ecommerce',
        title: 'E-Commerce Store',
        description: 'Build a complete online store with product catalog, shopping cart, checkout, payment integration (Stripe), and admin dashboard.',
        skills: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe API', 'Redux'],
        difficulty: 'Advanced',
        estimatedTime: '4-6 weeks'
      },
      {
        id: 'project-social',
        title: 'Social Media Dashboard',
        description: 'Develop a social media analytics dashboard with real-time data visualization, user authentication, and API integrations.',
        skills: ['React', 'Node.js', 'WebSockets', 'Chart.js', 'PostgreSQL'],
        difficulty: 'Advanced',
        estimatedTime: '3-4 weeks'
      }
    ],
    certifications: [
      'FreeCodeCamp Responsive Web Design',
      'FreeCodeCamp JavaScript Algorithms and Data Structures',
      'Meta Front-End Developer Professional Certificate',
      'AWS Certified Cloud Practitioner (optional)',
      'MongoDB Developer Certification (optional)'
    ],
    nextSteps: [
      'Specialize in a framework (React, Vue, Angular)',
      'Learn cloud platforms (AWS, Azure, Google Cloud)',
      'Explore DevOps and CI/CD pipelines',
      'Study system design and architecture',
      'Contribute to open-source projects',
      'Build a portfolio website',
      'Practice coding interviews',
      'Join developer communities'
    ]
  },

  // PATH 2: Mobile App Developer
  {
    id: 'path-mobile-dev',
    title: 'Mobile App Developer',
    description: 'Master mobile development for iOS and Android platforms using modern frameworks. Build cross-platform apps or specialize in native development.',
    icon: '📱',
    difficulty: 'Intermediate',
    estimatedDuration: '5-8 months',
    salaryRange: '$75,000 - $130,000',
    demandLevel: 'Very High',
    prerequisites: [
      'Basic programming knowledge (any language)',
      'Understanding of OOP concepts',
      'Familiarity with APIs and JSON',
      'Basic UI/UX design principles'
    ],
    learningObjectives: [
      'Master mobile UI development',
      'Understand mobile app architecture (MVVM, MVI)',
      'Work with device features (camera, GPS, sensors)',
      'Implement local storage and databases',
      'Integrate RESTful APIs',
      'Handle push notifications',
      'Optimize app performance',
      'Publish apps to App Store and Play Store',
      'Implement responsive design for various screen sizes',
      'Write testable, maintainable mobile code'
    ],
    careerOutcomes: [
      'iOS Developer',
      'Android Developer',
      'React Native Developer',
      'Flutter Developer',
      'Mobile Software Engineer',
      'Cross-Platform Developer'
    ],
    courses: [
      {
        courseId: 'javascript',
        courseName: 'JavaScript Fundamentals',
        lessonsCount: 51,
        isRequired: true,
        order: 1,
        estimatedTime: '4-6 weeks'
      },
      {
        courseId: 'typescript',
        courseName: 'TypeScript',
        lessonsCount: 40,
        isRequired: true,
        order: 2,
        estimatedTime: '2-3 weeks'
      },
      {
        courseId: 'react',
        courseName: 'React Framework',
        lessonsCount: 40,
        isRequired: true,
        order: 3,
        estimatedTime: '4-5 weeks'
      },
      {
        courseId: 'dart',
        courseName: 'Dart Language (for Flutter)',
        lessonsCount: 40,
        isRequired: false,
        order: 4,
        estimatedTime: '3-4 weeks'
      },
      {
        courseId: 'swift',
        courseName: 'Swift (for iOS)',
        lessonsCount: 40,
        isRequired: false,
        order: 5,
        estimatedTime: '5-6 weeks'
      },
      {
        courseId: 'kotlin',
        courseName: 'Kotlin (for Android)',
        lessonsCount: 40,
        isRequired: false,
        order: 6,
        estimatedTime: '4-5 weeks'
      }
    ],
    projects: [
      {
        id: 'project-weather',
        title: 'Weather Application',
        description: 'Build a weather app with location services, API integration, and beautiful UI. Include hourly and weekly forecasts.',
        skills: ['React Native', 'API Integration', 'Geolocation', 'Async Storage'],
        difficulty: 'Beginner',
        estimatedTime: '1-2 weeks'
      },
      {
        id: 'project-fitness',
        title: 'Fitness Tracker',
        description: 'Create a fitness tracking app with workout logging, progress charts, and nutrition tracking. Use device sensors for step counting.',
        skills: ['Flutter/React Native', 'Charts', 'Sensors', 'SQLite'],
        difficulty: 'Intermediate',
        estimatedTime: '3-4 weeks'
      },
      {
        id: 'project-chat',
        title: 'Real-Time Chat App',
        description: 'Develop a messaging app with real-time communication, image sharing, push notifications, and user presence indicators.',
        skills: ['Firebase', 'WebSockets', 'Push Notifications', 'Image Upload'],
        difficulty: 'Advanced',
        estimatedTime: '4-5 weeks'
      }
    ],
    certifications: [
      'Meta React Native Specialization',
      'Google Associate Android Developer',
      'Apple Certified iOS Developer',
      'Flutter Development Bootcamp'
    ],
    nextSteps: [
      'Learn app monetization strategies',
      'Study mobile security best practices',
      'Explore AR/VR development',
      'Master app store optimization (ASO)',
      'Learn mobile performance profiling',
      'Build portfolio apps',
      'Contribute to mobile open-source',
      'Stay updated with platform changes'
    ]
  },

  // PATH 3: Data Scientist
  {
    id: 'path-data-science',
    title: 'Data Scientist',
    description: 'Learn data analysis, machine learning, and statistical modeling to extract insights from data and build predictive models.',
    icon: '📊',
    difficulty: 'Advanced',
    estimatedDuration: '8-12 months',
    salaryRange: '$90,000 - $150,000',
    demandLevel: 'Very High',
    prerequisites: [
      'Strong mathematical foundation (statistics, linear algebra)',
      'Programming experience (preferably Python)',
      'Understanding of algorithms and data structures',
      'Curiosity about data and problem-solving'
    ],
    learningObjectives: [
      'Master Python for data analysis',
      'Understand statistics and probability',
      'Perform exploratory data analysis (EDA)',
      'Build machine learning models',
      'Work with neural networks and deep learning',
      'Create data visualizations',
      'Clean and preprocess data',
      'Deploy ML models to production',
      'Communicate insights effectively',
      'Work with big data tools'
    ],
    careerOutcomes: [
      'Data Scientist',
      'Machine Learning Engineer',
      'Data Analyst',
      'Research Scientist',
      'AI Engineer',
      'Business Intelligence Analyst'
    ],
    courses: [
      {
        courseId: 'python',
        courseName: 'Python Programming',
        lessonsCount: 51,
        isRequired: true,
        order: 1,
        estimatedTime: '6-8 weeks'
      },
      {
        courseId: 'ml',
        courseName: 'Machine Learning',
        lessonsCount: 40,
        isRequired: true,
        order: 2,
        estimatedTime: '8-10 weeks'
      },
      {
        courseId: 'sql',
        courseName: 'SQL & Databases',
        lessonsCount: 40,
        isRequired: true,
        order: 3,
        estimatedTime: '3-4 weeks'
      }
    ],
    projects: [
      {
        id: 'project-housing',
        title: 'House Price Prediction',
        description: 'Build a regression model to predict house prices based on features like location, size, and amenities. Use pandas, scikit-learn, and matplotlib.',
        skills: ['Python', 'Pandas', 'Scikit-learn', 'Regression', 'EDA'],
        difficulty: 'Beginner',
        estimatedTime: '2 weeks'
      },
      {
        id: 'project-sentiment',
        title: 'Sentiment Analysis',
        description: 'Create an NLP model to analyze sentiment in customer reviews. Use text preprocessing, feature extraction, and classification algorithms.',
        skills: ['NLP', 'Text Processing', 'Classification', 'NLTK'],
        difficulty: 'Intermediate',
        estimatedTime: '3 weeks'
      },
      {
        id: 'project-recommendation',
        title: 'Recommendation System',
        description: 'Build a collaborative filtering recommendation engine for movies or products. Implement matrix factorization and deep learning approaches.',
        skills: ['Collaborative Filtering', 'Matrix Factorization', 'Neural Networks'],
        difficulty: 'Advanced',
        estimatedTime: '4-5 weeks'
      }
    ],
    certifications: [
      'IBM Data Science Professional Certificate',
      'Google Data Analytics Professional Certificate',
      'Deep Learning Specialization (Coursera)',
      'TensorFlow Developer Certificate',
      'AWS Certified Machine Learning'
    ],
    nextSteps: [
      'Specialize in deep learning or NLP',
      'Learn MLOps and model deployment',
      'Study big data tools (Spark, Hadoop)',
      'Contribute to Kaggle competitions',
      'Publish research papers',
      'Build a data science blog',
      'Network in data science communities',
      'Stay current with research papers'
    ]
  },

  // PATH 4: DevOps Engineer
  {
    id: 'path-devops',
    title: 'DevOps Engineer',
    description: 'Learn to automate deployment, manage infrastructure as code, and implement CI/CD pipelines for efficient software delivery.',
    icon: '⚙️',
    difficulty: 'Advanced',
    estimatedDuration: '6-10 months',
    salaryRange: '$95,000 - $160,000',
    demandLevel: 'Very High',
    prerequisites: [
      'Linux/Unix command line proficiency',
      'Understanding of networking and servers',
      'Programming experience (Python, Bash, or Go)',
      'Basic cloud platform knowledge'
    ],
    learningObjectives: [
      'Master containerization with Docker',
      'Orchestrate containers with Kubernetes',
      'Implement CI/CD pipelines',
      'Manage infrastructure as code (Terraform)',
      'Monitor and log applications',
      'Automate deployment processes',
      'Ensure system security and compliance',
      'Optimize cloud costs',
      'Handle incident response',
      'Collaborate across development and operations'
    ],
    careerOutcomes: [
      'DevOps Engineer',
      'Site Reliability Engineer (SRE)',
      'Cloud Engineer',
      'Infrastructure Engineer',
      'Platform Engineer',
      'Automation Engineer'
    ],
    courses: [
      {
        courseId: 'bash',
        courseName: 'Bash Scripting',
        lessonsCount: 40,
        isRequired: true,
        order: 1,
        estimatedTime: '2-3 weeks'
      },
      {
        courseId: 'python',
        courseName: 'Python Automation',
        lessonsCount: 51,
        isRequired: true,
        order: 2,
        estimatedTime: '4-6 weeks'
      },
      {
        courseId: 'docker',
        courseName: 'Docker Containerization',
        lessonsCount: 40,
        isRequired: true,
        order: 3,
        estimatedTime: '3-4 weeks'
      },
      {
        courseId: 'kubernetes',
        courseName: 'Kubernetes Orchestration',
        lessonsCount: 40,
        isRequired: true,
        order: 4,
        estimatedTime: '5-6 weeks'
      },
      {
        courseId: 'aws',
        courseName: 'AWS Cloud Services',
        lessonsCount: 40,
        isRequired: true,
        order: 5,
        estimatedTime: '6-8 weeks'
      },
      {
        courseId: 'git',
        courseName: 'Git & CI/CD',
        lessonsCount: 40,
        isRequired: true,
        order: 6,
        estimatedTime: '2-3 weeks'
      }
    ],
    projects: [
      {
        id: 'project-cicd',
        title: 'CI/CD Pipeline',
        description: 'Build a complete CI/CD pipeline using Jenkins/GitHub Actions, Docker, and Kubernetes. Include automated testing and deployment.',
        skills: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'Testing'],
        difficulty: 'Intermediate',
        estimatedTime: '3-4 weeks'
      },
      {
        id: 'project-infrastructure',
        title: 'Infrastructure as Code',
        description: 'Create a full infrastructure setup using Terraform. Deploy multi-tier web application with load balancers, databases, and monitoring.',
        skills: ['Terraform', 'AWS/Azure', 'Networking', 'Security Groups'],
        difficulty: 'Advanced',
        estimatedTime: '4-5 weeks'
      },
      {
        id: 'project-monitoring',
        title: 'Monitoring & Alerting System',
        description: 'Implement comprehensive monitoring using Prometheus and Grafana. Set up alerts, dashboards, and log aggregation with ELK stack.',
        skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Alerts'],
        difficulty: 'Advanced',
        estimatedTime: '3-4 weeks'
      }
    ],
    certifications: [
      'AWS Certified Solutions Architect',
      'Kubernetes Administrator (CKA)',
      'Docker Certified Associate',
      'HashiCorp Terraform Associate',
      'Google Cloud Professional DevOps Engineer'
    ],
    nextSteps: [
      'Learn chaos engineering',
      'Master service mesh (Istio, Linkerd)',
      'Study GitOps practices',
      'Explore multi-cloud strategies',
      'Obtain security certifications',
      'Contribute to DevOps tools',
      'Write about DevOps practices',
      'Mentor junior engineers'
    ]
  }
]

export default learningPaths
