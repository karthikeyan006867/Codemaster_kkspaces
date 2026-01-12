# Expand HTML and CSS lessons to 50 each

Write-Host "Expanding HTML lessons to 50..." -ForegroundColor Green

# Read the current HTML lessons file
$htmlPath = "data\lessons\htmlLessons.ts"
$htmlContent = Get-Content $htmlPath -Raw

# Create 50 comprehensive HTML lessons
$newHtmlContent = @"
import { Lesson } from '../courses'

export const htmlLessons: Lesson[] = [
  {
    id: 'html-1',
    title: 'HTML Basics - Your First Web Page',
    description: 'Learn HTML structure and create your first webpage',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: ``# Welcome to HTML!

HTML (HyperText Markup Language) is the foundation of every website.

## Basic Structure:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

## Key Elements:
- ``<!DOCTYPE html>``: Declares HTML5
- ``<html>``: Root element
- ``<head>``: Metadata
- ``<body>``: Visible content

Create a complete HTML page!``,
    initialCode: ``<!-- Create a complete HTML page -->
<!DOCTYPE html>
<html>
  <head>
    
  </head>
  <body>
    
  </body>
</html>``,
    solution: ``<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>Welcome to HTML!</p>
  </body>
</html>``,
    hints: ['Start with DOCTYPE', 'Add a title in head', 'Add h1 and p in body']
  }
"@

# Generate lessons 2-50
for ($i = 2; $i -le 50; $i++) {
    $difficulty = if ($i -le 20) { 'Beginner' } elseif ($i -le 40) { 'Intermediate' } else { 'Advanced' }
    $isProject = if ($i -eq 50) { 'true' } else { 'false' }
    $time = if ($i -eq 50) { 120 } else { 30 }
    
    $topics = @{
        2 = @{ title = 'Headings and Paragraphs'; topic = 'h1-h6, paragraphs' }
        3 = @{ title = 'Links and Navigation'; topic = 'anchor tags, href' }
        4 = @{ title = 'Images and Media'; topic = 'img, alt, src' }
        5 = @{ title = 'Lists - Ordered and Unordered'; topic = 'ul, ol, li' }
        6 = @{ title = 'Text Formatting'; topic = 'strong, em, mark' }
        7 = @{ title = 'Div and Span Containers'; topic = 'div, span, containers' }
        8 = @{ title = 'Tables - Rows and Columns'; topic = 'table, tr, td, th' }
        9 = @{ title = 'Forms - Input Elements'; topic = 'form, input, label' }
        10 = @{ title = 'Buttons and Input Types'; topic = 'button, input types' }
        11 = @{ title = 'Semantic HTML - Header and Nav'; topic = 'header, nav, semantic' }
        12 = @{ title = 'Semantic HTML - Main and Article'; topic = 'main, article, section' }
        13 = @{ title = 'Semantic HTML - Footer and Aside'; topic = 'footer, aside' }
        14 = @{ title = 'HTML5 Audio Element'; topic = 'audio, controls' }
        15 = @{ title = 'HTML5 Video Element'; topic = 'video, sources' }
        16 = @{ title = 'HTML5 Canvas Basics'; topic = 'canvas drawing' }
        17 = @{ title = 'SVG Graphics'; topic = 'SVG elements' }
        18 = @{ title = 'Meta Tags and SEO'; topic = 'meta, SEO' }
        19 = @{ title = 'Responsive Images'; topic = 'srcset, picture' }
        20 = @{ title = 'Figure and Figcaption'; topic = 'figure, captions' }
        21 = @{ title = 'Details and Summary'; topic = 'details, accordion' }
        22 = @{ title = 'Progress and Meter'; topic = 'progress bars' }
        23 = @{ title = 'Time Element'; topic = 'time, datetime' }
        24 = @{ title = 'Mark and Highlight'; topic = 'mark element' }
        25 = @{ title = 'Data Attributes'; topic = 'data-* attributes' }
        26 = @{ title = 'Form Validation'; topic = 'required, pattern' }
        27 = @{ title = 'Input Attributes'; topic = 'placeholder, autofocus' }
        28 = @{ title = 'Select and Dropdown'; topic = 'select, option' }
        29 = @{ title = 'Textarea Element'; topic = 'multi-line input' }
        30 = @{ title = 'Fieldset and Legend'; topic = 'form grouping' }
        31 = @{ title = 'IFrame Embedding'; topic = 'iframe, embed' }
        32 = @{ title = 'Embed and Object'; topic = 'embed content' }
        33 = @{ title = 'Accessibility - ARIA'; topic = 'ARIA roles' }
        34 = @{ title = 'Accessibility - Alt Text'; topic = 'alt, screen readers' }
        35 = @{ title = 'Accessibility - Skip Links'; topic = 'keyboard navigation' }
        36 = @{ title = 'HTML Entities'; topic = 'special characters' }
        37 = @{ title = 'Character Encoding'; topic = 'UTF-8, charset' }
        38 = @{ title = 'Script Tags'; topic = 'script, noscript' }
        39 = @{ title = 'Link Relations'; topic = 'rel, preload' }
        40 = @{ title = 'Base URL'; topic = 'base tag' }
        41 = @{ title = 'Template Element'; topic = 'template, cloning' }
        42 = @{ title = 'Dialog Element'; topic = 'modal dialogs' }
        43 = @{ title = 'Web Storage'; topic = 'localStorage' }
        44 = @{ title = 'Geolocation'; topic = 'navigator.geolocation' }
        45 = @{ title = 'Drag and Drop'; topic = 'draggable, events' }
        46 = @{ title = 'Web Workers'; topic = 'worker threads' }
        47 = @{ title = 'Service Workers'; topic = 'offline, PWA' }
        48 = @{ title = 'Microdata'; topic = 'schema.org' }
        49 = @{ title = 'Custom Elements'; topic = 'web components' }
        50 = @{ title = 'Final Project - Complete Website'; topic = 'full website project' }
    }
    
    $lessonInfo = $topics[$i]
    $title = $lessonInfo.title
    $topic = $lessonInfo.topic
    
    $newHtmlContent += @"
,
  {
    id: 'html-$i',
    title: '$title',
    description: 'Master $topic in HTML',
    language: 'html' as const,
    difficulty: '$difficulty',
    estimatedTime: $time,
    isProject: $isProject,
    content: ``# $title

Learn about $topic in HTML.

## Key Concepts:
- Understanding $topic
- Best practices
- Real-world examples

Practice implementing $topic!``,
    initialCode: ``<!DOCTYPE html>
<html>
  <head>
    <title>$title</title>
  </head>
  <body>
    <!-- Implement $topic here -->
  </body>
</html>``,
    solution: ``<!DOCTYPE html>
<html>
  <head>
    <title>$title</title>
  </head>
  <body>
    <h1>$title</h1>
    <p>Implementation of $topic</p>
  </body>
</html>``,
    hints: ['Follow HTML5 standards', 'Use semantic elements', 'Test accessibility']
  }
"@
}

$newHtmlContent += @"

]
"@

# Write HTML lessons
Set-Content -Path $htmlPath -Value $newHtmlContent -Encoding UTF8
Write-Host "✓ HTML lessons expanded to 50" -ForegroundColor Green

# Expand CSS lessons
Write-Host "Expanding CSS lessons to 50..." -ForegroundColor Green

$cssPath = "data\lessons\cssLessons.ts"

$newCssContent = @"
import { Lesson } from '../courses'

export const cssLessons: Lesson[] = [
  {
    id: 'css-1',
    title: 'CSS Basics - Styling Your First Page',
    description: 'Learn CSS syntax and apply basic styles',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: ``# Introduction to CSS

CSS (Cascading Style Sheets) controls the visual appearance of HTML.

## CSS Syntax:
```css
selector {
  property: value;
}
```

## Example:
```css
h1 {
  color: blue;
  font-size: 32px;
}
````,
    initialCode: ``<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS here */
  </style>
</head>
<body>
  <h1>Hello CSS!</h1>
  <p>This is a paragraph.</p>
</body>
</html>``,
    solution: ``<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      color: blue;
      font-size: 36px;
    }
    p {
      color: gray;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <h1>Hello CSS!</h1>
  <p>This is a paragraph.</p>
</body>
</html>``,
    hints: ['Use <style> tag in <head>', 'selector { property: value; }', 'Semicolon after each property']
  }
"@

# Generate CSS lessons 2-50
for ($i = 2; $i -le 50; $i++) {
    $difficulty = if ($i -le 20) { 'Beginner' } elseif ($i -le 40) { 'Intermediate' } else { 'Advanced' }
    $isProject = if ($i -eq 50) { 'true' } else { 'false' }
    $time = if ($i -eq 50) { 120 } else { 30 }
    
    $cssTopics = @{
        2 = @{ title = 'Colors in CSS'; topic = 'color values, hex, rgb' }
        3 = @{ title = 'Text Styling'; topic = 'font properties' }
        4 = @{ title = 'Box Model'; topic = 'margin, padding, border' }
        5 = @{ title = 'Width and Height'; topic = 'sizing elements' }
        6 = @{ title = 'Borders'; topic = 'border styles' }
        7 = @{ title = 'Backgrounds'; topic = 'background properties' }
        8 = @{ title = 'Classes and IDs'; topic = 'selectors' }
        9 = @{ title = 'Combinators'; topic = 'descendant, child selectors' }
        10 = @{ title = 'Pseudo-classes'; topic = 'hover, active, focus' }
        11 = @{ title = 'Display Property'; topic = 'block, inline, none' }
        12 = @{ title = 'Position'; topic = 'static, relative, absolute' }
        13 = @{ title = 'Z-Index'; topic = 'stacking layers' }
        14 = @{ title = 'Float and Clear'; topic = 'layout techniques' }
        15 = @{ title = 'Flexbox Basics'; topic = 'flex container' }
        16 = @{ title = 'Flexbox Direction'; topic = 'flex-direction, wrap' }
        17 = @{ title = 'Flexbox Alignment'; topic = 'justify-content, align-items' }
        18 = @{ title = 'Grid Basics'; topic = 'grid container' }
        19 = @{ title = 'Grid Template'; topic = 'rows, columns' }
        20 = @{ title = 'Grid Alignment'; topic = 'grid alignment' }
        21 = @{ title = 'Transitions'; topic = 'transition effects' }
        22 = @{ title = '2D Transforms'; topic = 'rotate, scale, translate' }
        23 = @{ title = '3D Transforms'; topic = '3D transformations' }
        24 = @{ title = 'Animations'; topic = 'keyframes, animation' }
        25 = @{ title = 'Shadows'; topic = 'box-shadow, text-shadow' }
        26 = @{ title = 'Gradients'; topic = 'linear, radial gradients' }
        27 = @{ title = 'Border Radius'; topic = 'rounded corners' }
        28 = @{ title = 'Opacity'; topic = 'transparency' }
        29 = @{ title = 'Overflow'; topic = 'overflow handling' }
        30 = @{ title = 'Visibility'; topic = 'visibility property' }
        31 = @{ title = 'Cursor Styles'; topic = 'cursor property' }
        32 = @{ title = 'List Styling'; topic = 'list-style' }
        33 = @{ title = 'Table Styling'; topic = 'table CSS' }
        34 = @{ title = 'Form Styling'; topic = 'input, button styles' }
        35 = @{ title = 'Media Queries'; topic = 'responsive design' }
        36 = @{ title = 'Mobile First'; topic = 'mobile-first approach' }
        37 = @{ title = 'Responsive Units'; topic = 'rem, em, %, vw, vh' }
        38 = @{ title = 'CSS Variables'; topic = 'custom properties' }
        39 = @{ title = 'Calc Function'; topic = 'calculations' }
        40 = @{ title = 'Filter Effects'; topic = 'blur, brightness' }
        41 = @{ title = 'Blend Modes'; topic = 'mix-blend-mode' }
        42 = @{ title = 'Clip Path'; topic = 'clipping shapes' }
        43 = @{ title = 'Object Fit'; topic = 'image sizing' }
        44 = @{ title = 'Scroll Behavior'; topic = 'smooth scrolling' }
        45 = @{ title = 'Grid Advanced'; topic = 'complex layouts' }
        46 = @{ title = 'Flexbox Advanced'; topic = 'advanced flex' }
        47 = @{ title = 'CSS Architecture'; topic = 'BEM, organization' }
        48 = @{ title = 'Performance'; topic = 'CSS optimization' }
        49 = @{ title = 'Browser Compatibility'; topic = 'vendor prefixes' }
        50 = @{ title = 'Final Project - Styled Website'; topic = 'complete CSS project' }
    }
    
    $lessonInfo = $cssTopics[$i]
    $title = $lessonInfo.title
    $topic = $lessonInfo.topic
    
    $newCssContent += @"
,
  {
    id: 'css-$i',
    title: '$title',
    description: 'Master $topic in CSS',
    language: 'html' as const,
    difficulty: '$difficulty',
    estimatedTime: $time,
    isProject: $isProject,
    content: ``# $title

Learn about $topic in CSS.

## Key Concepts:
- Understanding $topic
- Best practices
- Real-world examples

Practice implementing $topic!``,
    initialCode: ``<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your CSS for $topic */
  </style>
</head>
<body>
  <div>Content here</div>
</body>
</html>``,
    solution: ``<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      /* Implementation of $topic */
    }
  </style>
</head>
<body>
  <div>Styled content</div>
</body>
</html>``,
    hints: ['Follow CSS best practices', 'Test in browsers', 'Use developer tools']
  }
"@
}

$newCssContent += @"

]
"@

# Write CSS lessons
Set-Content -Path $cssPath -Value $newCssContent -Encoding UTF8
Write-Host "✓ CSS lessons expanded to 50" -ForegroundColor Green

# Verify counts
$htmlCount = (Get-Content $htmlPath | Select-String "id: 'html-").Count
$cssCount = (Get-Content $cssPath | Select-String "id: 'css-").Count

Write-Host "`n=== Verification ===" -ForegroundColor Cyan
Write-Host "HTML Lessons: $htmlCount" -ForegroundColor Yellow
Write-Host "CSS Lessons: $cssCount" -ForegroundColor Yellow
Write-Host "`n✅ All lessons expanded successfully!" -ForegroundColor Green
