const fs = require('fs');
const path = require('path');

// HTML Lessons 8-10 - Tables, Forms, Buttons
const htmlLesson8 = `  {
    id: 'html-8',
    title: 'Tables - Rows and Columns',
    description: 'Create data tables with rows, columns, and headers',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: \`# Tables - Rows and Columns

## HTML Table Structure
Tables organize data in rows and columns using table, thead, tbody, tr, th, and td elements.

## Your Task:
Create a class schedule table with headers and data rows.\`,
    initialCode: \`<!DOCTYPE html>
<html>
  <head>
    <title>Class Schedule</title>
    <style>
      table { border-collapse: collapse; width: 100%; }
      th, td { border: 1px solid #ddd; padding: 12px; }
      th { background-color: #4CAF50; color: white; }
    </style>
  </head>
  <body>
    <h1>Weekly Schedule</h1>
    <!-- Create table with thead and tbody -->
  </body>
</html>\`,
    solution: \`<!DOCTYPE html>
<html>
  <head>
    <title>Class Schedule</title>
    <style>
      table { border-collapse: collapse; width: 100%; }
      th, td { border: 1px solid #ddd; padding: 12px; }
      th { background-color: #4CAF50; color: white; }
    </style>
  </head>
  <body>
    <h1>Weekly Schedule</h1>
    <table>
      <thead>
        <tr><th>Day</th><th>Time</th><th>Subject</th></tr>
      </thead>
      <tbody>
        <tr><td>Monday</td><td>9:00 AM</td><td>Math</td></tr>
        <tr><td>Tuesday</td><td>10:00 AM</td><td>Science</td></tr>
        <tr><td>Wednesday</td><td>11:00 AM</td><td>History</td></tr>
        <tr><td>Thursday</td><td>2:00 PM</td><td>English</td></tr>
        <tr><td>Friday</td><td>3:00 PM</td><td>Art</td></tr>
      </tbody>
    </table>
  </body>
</html>\`,
    hints: ['Use thead for headers', 'Use tbody for data', 'Each tr is a row', 'Use th in thead, td in tbody'],
    testCases: [
      { name: 'Has table', test: (code) => code.includes('<table'), errorMessage: 'Must include table element' },
      { name: 'Has thead', test: (code) => code.includes('<thead>'), errorMessage: 'Must include thead section' },
      { name: 'Has tbody', test: (code) => code.includes('<tbody>'), errorMessage: 'Must include tbody section' },
      { name: 'Has headers', test: (code) => (code.match(/<th>/g) || []).length >= 3, errorMessage: 'Must have at least 3 th headers' },
      { name: 'Has data rows', test: (code) => (code.match(/<tr>/g) || []).length >= 6, errorMessage: 'Must have 6+ rows' }
    ]
  },`;

const htmlLesson9 = `  {
    id: 'html-9',
    title: 'Forms - Input Elements',
    description: 'Create interactive forms to collect user information',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: \`# Forms - Input Elements

## HTML Forms
Forms collect user input using form, label, input, and textarea elements.

## Your Task:
Create a contact form with name, email, message, and submit button.\`,
    initialCode: \`<!DOCTYPE html>
<html>
  <head>
    <title>Contact Form</title>
    <style>
      form { max-width: 500px; margin: 20px; }
      label { display: block; margin-top: 10px; }
      input, textarea { width: 100%; padding: 8px; margin-top: 5px; }
    </style>
  </head>
  <body>
    <h1>Contact Us</h1>
    <!-- Create form with name, email, message, submit -->\n  </body>
</html>\`,
    solution: \`<!DOCTYPE html>
<html>
  <head>
    <title>Contact Form</title>
    <style>
      form { max-width: 500px; margin: 20px; }
      label { display: block; margin-top: 10px; }
      input, textarea { width: 100%; padding: 8px; margin-top: 5px; }
    </style>
  </head>
  <body>
    <h1>Contact Us</h1>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      
      <label for="message">Message:</label>
      <textarea id="message" name="message" rows="5" required></textarea>
      
      <input type="submit" value="Send">
    </form>
  </body>
</html>\`,
    hints: ['Wrap inputs in form tag', 'Use label with for attribute', 'Match label for to input id', 'Add required attribute'],
    testCases: [
      { name: 'Has form', test: (code) => code.includes('<form'), errorMessage: 'Must include form element' },
      { name: 'Has text input', test: (code) => code.includes('type="text"'), errorMessage: 'Must include text input' },
      { name: 'Has email input', test: (code) => code.includes('type="email"'), errorMessage: 'Must include email input' },
      { name: 'Has textarea', test: (code) => code.includes('<textarea'), errorMessage: 'Must include textarea' },
      { name: 'Has submit', test: (code) => code.includes('type="submit"'), errorMessage: 'Must include submit button' },
      { name: 'Has labels', test: (code) => (code.match(/<label/g) || []).length >= 3, errorMessage: 'Must include labels' }
    ]
  },`;

const htmlLesson10 = `  {
    id: 'html-10',
    title: 'Buttons and Input Types',
    description: 'Explore different button types and HTML5 input types',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: \`# Buttons and Input Types

## HTML5 Input Types
HTML5 provides many input types: email, date, number, time, color, range, etc.

## Your Task:
Create a registration form using various input types.\`,
    initialCode: \`<!DOCTYPE html>
<html>
  <head>
    <title>Registration</title>
    <style>
      form { max-width: 600px; margin: 20px; }
      label { display: block; margin-top: 10px; }
      input { width: 100%; padding: 8px; margin-top: 5px; }
    </style>
  </head>
  <body>
    <h1>Event Registration</h1>
    <!-- Add inputs: email, date, number, time, submit, reset -->\n  </body>
</html>\`,
    solution: \`<!DOCTYPE html>
<html>
  <head>
    <title>Registration</title>
    <style>
      form { max-width: 600px; margin: 20px; }
      label { display: block; margin-top: 10px; }
      input { width: 100%; padding: 8px; margin-top: 5px; }
      button { padding: 10px 20px; margin: 10px 5px 0 0; }
    </style>
  </head>
  <body>
    <h1>Event Registration</h1>
    <form>
      <label for="email">Email:</label>
      <input type="email" id="email" required>
      
      <label for="date">Birth Date:</label>
      <input type="date" id="date" required>
      
      <label for="tickets">Tickets:</label>
      <input type="number" id="tickets" min="1" max="10" value="1">
      
      <label for="time">Preferred Time:</label>
      <input type="time" id="time">
      
      <label for="color">T-Shirt Color:</label>
      <input type="color" id="color" value="#4CAF50">
      
      <button type="submit">Register</button>
      <button type="reset">Clear</button>
    </form>
  </body>
</html>\`,
    hints: ['Use type="email" for validation', 'Use type="date" for date picker', 'Use type="number" with min/max', 'Add submit and reset buttons'],
    testCases: [
      { name: 'Has email input', test: (code) => code.includes('type="email"'), errorMessage: 'Must include email input' },
      { name: 'Has date input', test: (code) => code.includes('type="date"'), errorMessage: 'Must include date input' },
      { name: 'Has number input', test: (code) => code.includes('type="number"'), errorMessage: 'Must include number input' },
      { name: 'Has time/color/range', test: (code) => code.includes('type="time"') || code.includes('type="color"') || code.includes('type="range"'), errorMessage: 'Include more HTML5 input types' },
      { name: 'Has buttons', test: (code) => code.includes('type="submit"') && (code.includes('type="reset"') || (code.match(/<button/g) || []).length >= 2), errorMessage: 'Include submit and reset buttons' }
    ]
  },`;

// Read and update HTML lessons file
const htmlLessonsPath = path.join(__dirname, '..', 'data', 'lessons', 'htmlLessons.ts');
let htmlContent = fs.readFileSync(htmlLessonsPath, 'utf8');

// Replace lessons 8-10
const lesson8Pattern = /{\s*id:\s*'html-8',[\s\S]*?hints:\s*\[[^\]]+\]\s*\},/;
const lesson9Pattern = /{\s*id:\s*'html-9',[\s\S]*?hints:\s*\[[^\]]+\]\s*\},/;
const lesson10Pattern = /{\s*id:\s*'html-10',[\s\S]*?hints:\s*\[[^\]]+\]\s*\},/;

if (lesson8Pattern.test(htmlContent)) {
  htmlContent = htmlContent.replace(lesson8Pattern, htmlLesson8);
  console.log('✓ Fixed HTML lesson 8');
}

if (lesson9Pattern.test(htmlContent)) {
  htmlContent = htmlContent.replace(lesson9Pattern, htmlLesson9);
  console.log('✓ Fixed HTML lesson 9');
}

if (lesson10Pattern.test(htmlContent)) {
  htmlContent = htmlContent.replace(lesson10Pattern, htmlLesson10);
  console.log('✓ Fixed HTML lesson 10');
}

fs.writeFileSync(htmlLessonsPath, htmlContent, 'utf8');
console.log('\n✅ HTML lessons 1-10 are now complete with proper content, examples, and test cases!');
console.log('\nNext: Run this script for CSS lessons next.');
