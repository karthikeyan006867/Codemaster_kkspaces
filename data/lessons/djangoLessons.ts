import { Lesson } from '../courses'

const detailedDjangoLessons: Lesson[] = [
  {
    id: 'django-1',
    title: 'Django Introduction',
    description: 'Learn Django basics and create your first project',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Django Web Framework

Django is a high-level Python web framework.

## Create Project
\`\`\`bash
django-admin startproject mysite
cd mysite
python manage.py runserver
\`\`\`

## Django MVT
- **Model**: Database layer
- **View**: Business logic
- **Template**: Presentation

## Your Task
Create a simple view that returns "Hello Django!"`,
    initialCode: `# views.py
from django.http import HttpResponse

def hello(request):
    # Return Hello Django`,
    solution: `from django.http import HttpResponse

def hello(request):
    return HttpResponse("Hello Django!")`,
    hints: ['Import HttpResponse', 'Return HttpResponse with text', 'Views take request parameter'],
    testCases: [
      { name: 'Has HttpResponse', test: (code) => code.includes('HttpResponse'), errorMessage: 'Import HttpResponse' },
      { name: 'Returns response', test: (code) => code.includes('return'), errorMessage: 'Return HttpResponse' },
      { name: 'Has function', test: (code) => code.includes('def'), errorMessage: 'Define a function' }
    ]
  },
  {
    id: 'django-2',
    title: 'Models and ORM',
    description: 'Create database models with Django ORM',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 40,
    content: `# Django Models

Define database structure with Python classes.

## Model Example
\`\`\`python
from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
\`\`\`

## Field Types
- CharField: Short text
- TextField: Long text
- IntegerField: Numbers
- DateTimeField: Dates

## Your Task
Create a User model with name and email`,
    initialCode: `# models.py
from django.db import models

class User(models.Model):
    # Add fields`,
    solution: `from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()`,
    hints: ['Use CharField for name', 'Use EmailField for email', 'Inherit from models.Model'],
    testCases: [
      { name: 'Has Model', test: (code) => code.includes('models.Model'), errorMessage: 'Inherit from models.Model' },
      { name: 'Has fields', test: (code) => code.includes('models.'), errorMessage: 'Add model fields' },
      { name: 'Defines class', test: (code) => code.includes('class'), errorMessage: 'Define a model class' }
    ]
  },
  {
    id: 'django-3',
    title: 'URL Routing',
    description: 'Map URLs to views',
    language: 'python' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# URL Configuration

Map URLs to view functions.

## urls.py
\`\`\`python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
]
\`\`\`

## URL Patterns
- First arg: URL string
- Second arg: View function
- name: URL name for templates

## Your Task
Create URL pattern for /products/ route`,
    initialCode: `# urls.py
from django.urls import path
from . import views

urlpatterns = [
    # Add products route
]`,
    solution: `from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.products, name='products'),
]`,
    hints: ['Use path() function', 'First arg is URL string', 'Second arg is view'],
    testCases: [
      { name: 'Uses path', test: (code) => code.includes('path('), errorMessage: 'Use path() function' },
      { name: 'Has urlpatterns', test: (code) => code.includes('urlpatterns'), errorMessage: 'Define urlpatterns list' },
      { name: 'Routes URL', test: (code) => code.includes('products'), errorMessage: 'Add products route' }
    ]
  }
];

for (let i = 4; i <= 50; i++) {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i <= 17 ? 'Beginner' : i <= 34 ? 'Intermediate' : 'Advanced';
  const topics = ['Templates', 'Forms', 'Admin', 'Authentication', 'Middleware', 'Static Files', 'REST API', 'Testing', 'Deployment', 'Security'];
  const topic = topics[(i - 4) % topics.length];
  
  detailedDjangoLessons.push({
    id: `django-${i}`,
    title: `${topic} in Django`,
    description: `Learn ${topic} for web development`,
    language: 'python' as const,
    difficulty,
    estimatedTime: 35 + (i % 15),
    content: `# ${topic}\n\nMaster ${topic} in Django.\n\n\`\`\`python\nfrom django.http import HttpResponse\n\`\`\``,
    initialCode: `# ${topic} code\nfrom django.http import HttpResponse`,
    solution: `from django.http import HttpResponse
def view(request):
    return HttpResponse("${topic}")`,
    hints: [`Learn ${topic}`, 'Django is batteries-included', 'Read Django docs'],
    testCases: [
      { name: 'Not empty', test: (code) => code.trim().length > 10, errorMessage: 'Write Django code' }
    ]
  });
}

export const djangoLessons = detailedDjangoLessons
