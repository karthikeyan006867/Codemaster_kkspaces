import { Lesson } from '../courses'

export const cssLessons: Lesson[] = [
  {
    id: 'css-1',
    title: 'CSS Basics - Styling Your First Page',
    description: 'Master CSS syntax, selectors, and fundamental styling concepts',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# CSS Basics - Styling Your First Page

CSS (Cascading Style Sheets) is the language used to style and layout web pages. It works by selecting HTML elements and applying visual properties to them. Understanding CSS syntax is fundamental to creating beautiful, modern websites.

## CSS Syntax Structure

A CSS rule consists of a **selector** and a **declaration block**:

\`\`\`css
selector {
  property: value;
}
\`\`\`

The selector targets HTML elements, while the declaration block contains one or more property-value pairs that define how those elements should look.

## Common Selectors

- **Element selector**: \`p { }\` - targets all \`<p>\` elements
- **Class selector**: \`.intro { }\` - targets elements with \`class="intro"\`
- **ID selector**: \`#header { }\` - targets element with \`id="header"\`

## Example

\`\`\`css
h1 {
  color: blue;
  font-size: 32px;
}

.highlight {
  background-color: yellow;
}
\`\`\`

This CSS makes all \`<h1>\` elements blue with 32px font size, and elements with the \`highlight\` class get a yellow background.

## Your Task

Create CSS rules to style the heading and paragraph:
- Make the \`<h1>\` element blue with a 32px font size
- Give the \`<p>\` element with class \`intro\` a gray color and 18px font size`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Write your CSS rules here */
    /* Style the h1 element */
    
    /* Style the paragraph with class 'intro' */
    
  </style>
</head>
<body>
  <h1>Welcome to CSS</h1>
  <p class="intro">This is your first styled paragraph!</p>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      color: blue;
      font-size: 32px;
    }
    
    .intro {
      color: gray;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <h1>Welcome to CSS</h1>
  <p class="intro">This is your first styled paragraph!</p>
</body>
</html>`,
    hints: [
      'Use the element name directly as a selector for h1',
      'Class selectors start with a dot (.)',
      'The color property accepts color names like "blue" or "gray"',
      'Font size uses units like px (pixels)',
      'Remember to end each property declaration with a semicolon',
      'You can have multiple properties in one rule block',
      'CSS is case-sensitive for property names but not for values'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /h1\s*{[^}]*color:\s*blue/i.test(code), errorMessage: 'h1 should have color: blue' },
      { name: 'CSS test', test: (code) => /h1\s*{[^}]*font-size:\s*32px/i.test(code), errorMessage: 'h1 should have font-size: 32px' },
      { name: 'CSS test', test: (code) => /\.intro\s*{[^}]*color:\s*gray/i.test(code), errorMessage: '.intro should have color: gray' },
      { name: 'CSS test', test: (code) => /\.intro\s*{[^}]*font-size:\s*18px/i.test(code), errorMessage: '.intro should have font-size: 18px' },
      { name: 'CSS test', test: (code) => code.includes('h1') && code.includes('{') && code.includes('}'), errorMessage: 'CSS should have proper syntax with braces' }
    ]
  },
  {
    id: 'css-2',
    title: 'Colors in CSS',
    description: 'Master different color formats: hex, RGB, HSL, and color keywords',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Colors in CSS

Colors are fundamental to web design, and CSS offers multiple ways to define them. Understanding different color formats gives you flexibility and precision in your designs.

## Color Formats

### 1. Color Keywords
CSS has 140+ named colors like \`red\`, \`blue\`, \`coral\`, \`tomato\`.

\`\`\`css
h1 { color: crimson; }
\`\`\`

### 2. Hexadecimal (Hex)
Hex colors use # followed by 6 digits (RRGGBB). Each pair represents red, green, and blue values from 00 to FF.

\`\`\`css
p { color: #FF5733; } /* Orange-red */
\`\`\`

### 3. RGB
RGB uses decimal values from 0-255 for red, green, and blue.

\`\`\`css
div { background-color: rgb(255, 87, 51); }
\`\`\`

### 4. RGBA (RGB with Alpha)
Adds transparency with alpha value from 0 (transparent) to 1 (opaque).

\`\`\`css
span { background-color: rgba(255, 87, 51, 0.5); } /* 50% transparent */
\`\`\`

### 5. HSL (Hue, Saturation, Lightness)
- Hue: 0-360 (color wheel degrees)
- Saturation: 0-100% (color intensity)
- Lightness: 0-100% (brightness)

\`\`\`css
button { background-color: hsl(9, 100%, 60%); }
\`\`\`

## Your Task

Style the different elements using various color formats:
- Header: Use hex color #2C3E50
- First box: Use RGB rgb(52, 152, 219) for background
- Second box: Use HSL hsl(48, 100%, 50%) for background
- Text in second box: Use RGBA rgba(0, 0, 0, 0.7) for semi-transparent text`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Style the header with hex color */
    .header {
      
    }
    
    /* Style first box with RGB */
    .box-rgb {
      padding: 20px;
      
    }
    
    /* Style second box with HSL */
    .box-hsl {
      padding: 20px;
      
    }
    
    /* Style text with RGBA */
    .text-rgba {
      
    }
  </style>
</head>
<body>
  <h1 class="header">Exploring CSS Colors</h1>
  <div class="box-rgb">RGB Color Box</div>
  <div class="box-hsl">
    <span class="text-rgba">HSL box with semi-transparent text</span>
  </div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .header {
      color: #2C3E50;
    }
    
    .box-rgb {
      padding: 20px;
      background-color: rgb(52, 152, 219);
    }
    
    .box-hsl {
      padding: 20px;
      background-color: hsl(48, 100%, 50%);
    }
    
    .text-rgba {
      color: rgba(0, 0, 0, 0.7);
    }
  </style>
</head>
<body>
  <h1 class="header">Exploring CSS Colors</h1>
  <div class="box-rgb">RGB Color Box</div>
  <div class="box-hsl">
    <span class="text-rgba">HSL box with semi-transparent text</span>
  </div>
</body>
</html>`,
    hints: [
      'Hex colors start with # followed by 6 characters (0-9, A-F)',
      'RGB format: rgb(red, green, blue) with values 0-255',
      'HSL format: hsl(hue, saturation%, lightness%)',
      'RGBA adds a fourth parameter for transparency (0 to 1)',
      'Use background-color for element backgrounds',
      'Use color for text color',
      'All color formats can be used interchangeably'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /#2C3E50/i.test(code), errorMessage: 'Should use hex color #2C3E50' },
      { name: 'CSS test', test: (code) => /rgb\(\s*52\s*,\s*152\s*,\s*219\s*\)/i.test(code), errorMessage: 'Should use RGB color rgb(52, 152, 219)' },
      { name: 'CSS test', test: (code) => /hsl\(\s*48\s*,\s*100%\s*,\s*50%\s*\)/i.test(code), errorMessage: 'Should use HSL color hsl(48, 100%, 50%)' },
      { name: 'CSS test', test: (code) => /rgba\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0\.7\s*\)/i.test(code), errorMessage: 'Should use RGBA color rgba(0, 0, 0, 0.7)' },
      { name: 'CSS test', test: (code) => code.includes('background-color'), errorMessage: 'Should use background-color property' }
    ]
  },
  {
    id: 'css-3',
    title: 'Text Styling',
    description: 'Master font properties: family, size, weight, style, and text decorations',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Text Styling

Typography is crucial for readability and visual hierarchy in web design. CSS provides numerous properties to control how text appears on your pages.

## Essential Font Properties

### font-family
Specifies the typeface. Always provide fallback fonts:

\`\`\`css
p {
  font-family: 'Arial', 'Helvetica', sans-serif;
}
\`\`\`

### font-size
Controls text size using units like px, em, rem, or %:

\`\`\`css
h1 { font-size: 36px; }
p { font-size: 16px; }
\`\`\`

### font-weight
Controls text boldness (100-900, or keywords like normal/bold):

\`\`\`css
strong { font-weight: bold; } /* or 700 */
\`\`\`

### font-style
Makes text italic or oblique:

\`\`\`css
em { font-style: italic; }
\`\`\`

### text-align
Aligns text horizontally:

\`\`\`css
.center { text-align: center; }
\`\`\`

### text-decoration
Adds lines to text:

\`\`\`css
a { text-decoration: underline; }
.strike { text-decoration: line-through; }
\`\`\`

### text-transform
Changes text capitalization:

\`\`\`css
.uppercase { text-transform: uppercase; }
\`\`\`

## Your Task

Style the text elements with these properties:
- Title: Arial font, 36px size, bold weight
- Subtitle: 20px size, italic style, centered
- Body text: 16px size, normal weight
- Highlighted text: underline decoration, uppercase transform`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Style the title */
    .title {
      
    }
    
    /* Style the subtitle */
    .subtitle {
      
    }
    
    /* Style body text */
    .body-text {
      
    }
    
    /* Style highlighted text */
    .highlight {
      
    }
  </style>
</head>
<body>
  <h1 class="title">Typography Matters</h1>
  <h2 class="subtitle">Master the art of text styling</h2>
  <p class="body-text">This is regular body text that should be easy to read.</p>
  <p class="body-text">This word is <span class="highlight">important</span>!</p>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .title {
      font-family: Arial, sans-serif;
      font-size: 36px;
      font-weight: bold;
    }
    
    .subtitle {
      font-size: 20px;
      font-style: italic;
      text-align: center;
    }
    
    .body-text {
      font-size: 16px;
      font-weight: normal;
    }
    
    .highlight {
      text-decoration: underline;
      text-transform: uppercase;
    }
  </style>
</head>
<body>
  <h1 class="title">Typography Matters</h1>
  <h2 class="subtitle">Master the art of text styling</h2>
  <p class="body-text">This is regular body text that should be easy to read.</p>
  <p class="body-text">This word is <span class="highlight">important</span>!</p>
</body>
</html>`,
    hints: [
      'font-family can include multiple fonts separated by commas as fallbacks',
      'font-weight: bold is the same as font-weight: 700',
      'font-style: italic makes text slanted',
      'text-align: center centers text horizontally',
      'text-decoration: underline adds a line under text',
      'text-transform: uppercase converts all text to capital letters',
      'Always specify font-size in pixels (px) for precise control'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.title\s*{[^}]*font-family:\s*Arial/i.test(code), errorMessage: '.title should have font-family: Arial' },
      { name: 'CSS test', test: (code) => /\.title\s*{[^}]*font-size:\s*36px/i.test(code), errorMessage: '.title should have font-size: 36px' },
      { name: 'CSS test', test: (code) => /\.title\s*{[^}]*font-weight:\s*bold/i.test(code), errorMessage: '.title should have font-weight: bold' },
      { name: 'CSS test', test: (code) => /\.subtitle\s*{[^}]*font-style:\s*italic/i.test(code), errorMessage: '.subtitle should have font-style: italic' },
      { name: 'CSS test', test: (code) => /\.subtitle\s*{[^}]*text-align:\s*center/i.test(code), errorMessage: '.subtitle should have text-align: center' },
      { name: 'CSS test', test: (code) => /\.highlight\s*{[^}]*text-decoration:\s*underline/i.test(code), errorMessage: '.highlight should have text-decoration: underline' },
      { name: 'CSS test', test: (code) => /\.highlight\s*{[^}]*text-transform:\s*uppercase/i.test(code), errorMessage: '.highlight should have text-transform: uppercase' }
    ]
  },
  {
    id: 'css-4',
    title: 'Backgrounds in CSS',
    description: 'Master background images, colors, gradients, and background properties',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# Backgrounds in CSS

Backgrounds add visual depth and interest to web pages. CSS provides powerful properties to control background colors, images, gradients, positioning, and more.

## Background Properties

### background-color
Sets a solid color background:

\`\`\`css
div {
  background-color: #3498db;
}
\`\`\`

### background-image
Adds an image as background:

\`\`\`css
.hero {
  background-image: url('banner.jpg');
}
\`\`\`

### background-size
Controls how the background image is sized:
- \`cover\`: scales image to cover entire element
- \`contain\`: scales image to fit inside element

\`\`\`css
.banner {
  background-size: cover;
}
\`\`\`

### background-repeat
Controls image repetition:

\`\`\`css
.pattern {
  background-repeat: no-repeat;
}
\`\`\`

### Linear Gradients
Create smooth color transitions:

\`\`\`css
.gradient {
  background: linear-gradient(to right, #ff6b6b, #4ecdc4);
}
\`\`\`

## Your Task

Create styled backgrounds:
- Card: Background color #f0f0f0
- Header: Linear gradient from #667eea to #764ba2
- Content: background-repeat no-repeat and background-position center`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .card {
      width: 300px;
      /* Add background color */
    }
    
    .card-header {
      padding: 20px;
      color: white;
      /* Add gradient background */
    }
    
    .card-content {
      padding: 20px;
      /* Add background properties */
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="card-header"><h2>Card</h2></div>
    <div class="card-content"><p>Content here</p></div>
  </div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .card {
      width: 300px;
      background-color: #f0f0f0;
    }
    
    .card-header {
      padding: 20px;
      color: white;
      background: linear-gradient(to right, #667eea, #764ba2);
    }
    
    .card-content {
      padding: 20px;
      background-repeat: no-repeat;
      background-position: center;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="card-header"><h2>Card</h2></div>
    <div class="card-content"><p>Content here</p></div>
  </div>
</body>
</html>`,
    hints: [
      'background-color sets a solid color',
      'linear-gradient creates smooth color transitions',
      'Gradient syntax: linear-gradient(direction, color1, color2)',
      'background-repeat: no-repeat prevents image tiling',
      'background-position: center centers the background',
      'Shorthand background can set multiple properties',
      'Direction can be "to right", "to bottom", etc.'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.card\s*{[^}]*background-color:\s*#f0f0f0/i.test(code), errorMessage: '.card should have background-color: #f0f0f0' },
      { name: 'CSS test', test: (code) => /\.card-header\s*{[^}]*background.*linear-gradient/i.test(code), errorMessage: '.card-header should have linear-gradient' },
      { name: 'CSS test', test: (code) => /#667eea/i.test(code) && /#764ba2/i.test(code), errorMessage: 'Gradient should use #667eea and #764ba2' },
      { name: 'CSS test', test: (code) => /background-repeat:\s*no-repeat/i.test(code), errorMessage: 'Should use background-repeat: no-repeat' },
      { name: 'CSS test', test: (code) => /background-position:\s*center/i.test(code), errorMessage: 'Should use background-position: center' }
    ]
  },
  {
    id: 'css-5',
    title: 'The CSS Box Model',
    description: 'Master margin, border, padding, and content - the foundation of CSS layout',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# The CSS Box Model

Every HTML element is a box with four parts: content, padding, border, and margin. Understanding the box model is essential for controlling spacing and layout.

## The Four Parts

From outside to inside:
1. **Margin** - Space outside the border (transparent)
2. **Border** - Line around padding and content
3. **Padding** - Space between border and content
4. **Content** - The actual content (text, images)

\`\`\`css
div {
  margin: 20px;           /* Outside spacing */
  border: 2px solid black; /* Border line */
  padding: 15px;          /* Inside spacing */
  width: 200px;           /* Content width */
}
\`\`\`

## Shorthand Syntax

\`\`\`css
.box {
  margin: 10px 20px;  /* top/bottom left/right */
  padding: 10px 20px 15px 20px;  /* top right bottom left (clockwise) */
}
\`\`\`

## Box Sizing

\`\`\`css
.box {
  box-sizing: border-box;  /* width includes padding and border */
}
\`\`\`

## Your Task

Create a box with proper spacing:
- Width: 250px, Height: 150px
- Padding: 20px all sides
- Border: 3px solid #3498db
- Margin: 30px all sides
- Background: #ecf0f1
- box-sizing: border-box`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      /* Add dimensions */
      
      /* Add spacing */
      
      /* Add border */
      
      /* Add background and box-sizing */
      
    }
  </style>
</head>
<body>
  <div class="box">Box Model Demo</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 250px;
      height: 150px;
      padding: 20px;
      border: 3px solid #3498db;
      margin: 30px;
      background-color: #ecf0f1;
      box-sizing: border-box;
    }
  </style>
</head>
<body>
  <div class="box">Box Model Demo</div>
</body>
</html>`,
    hints: [
      'Width and height set content dimensions',
      'Padding creates space inside between content and border',
      'Border syntax: width style color',
      'Margin creates space outside the element',
      'box-sizing: border-box makes width include padding and border',
      'Shorthand margin: 30px sets all sides',
      'Border style can be solid, dashed, dotted'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /width:\s*250px/i.test(code), errorMessage: 'Should have width: 250px' },
      { name: 'CSS test', test: (code) => /height:\s*150px/i.test(code), errorMessage: 'Should have height: 150px' },
      { name: 'CSS test', test: (code) => /padding:\s*20px/i.test(code), errorMessage: 'Should have padding: 20px' },
      { name: 'CSS test', test: (code) => /border:\s*3px\s+solid\s+#3498db/i.test(code), errorMessage: 'Should have border: 3px solid #3498db' },
      { name: 'CSS test', test: (code) => /margin:\s*30px/i.test(code), errorMessage: 'Should have margin: 30px' },
      { name: 'CSS test', test: (code) => /box-sizing:\s*border-box/i.test(code), errorMessage: 'Should have box-sizing: border-box' }
    ]
  },
  {
    id: 'css-6',
    title: 'Display and Visibility',
    description: 'Master display property values: block, inline, inline-block, none, and visibility',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Display and Visibility

The \`display\` property controls how elements are laid out on the page. Understanding display is crucial for creating complex layouts.

## Display Values

### block
Elements take full width available and start on a new line:

\`\`\`css
div { display: block; } /* default for div */
\`\`\`

### inline
Elements only take as much width as needed and don't start on new line:

\`\`\`css
span { display: inline; } /* default for span */
\`\`\`

### inline-block
Combines both: flows inline but respects width/height:

\`\`\`css
.button { display: inline-block; }
\`\`\`

### none
Removes element from document flow (not visible and takes no space):

\`\`\`css
.hidden { display: none; }
\`\`\`

### flex
Creates a flex container for flexible layouts:

\`\`\`css
.container { display: flex; }
\`\`\`

## Visibility

Unlike \`display: none\`, \`visibility: hidden\` hides element but preserves its space:

\`\`\`css
.invisible { visibility: hidden; }
\`\`\`

## Your Task

Apply different display values:
- .block-element: display block
- .inline-element: display inline  
- .inline-block-element: display inline-block with 100px width
- .hidden-element: display none
- .invisible-element: visibility hidden`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    div { background: lightblue; padding: 10px; margin: 5px; }
    
    .block-element {
      /* Make this block */
    }
    
    .inline-element {
      /* Make this inline */
    }
    
    .inline-block-element {
      /* Make this inline-block with 100px width */
    }
    
    .hidden-element {
      /* Hide this with display none */
    }
    
    .invisible-element {
      /* Hide this with visibility */
    }
  </style>
</head>
<body>
  <div class="block-element">Block</div>
  <div class="inline-element">Inline</div>
  <div class="inline-block-element">Inline-Block</div>
  <div class="hidden-element">Hidden</div>
  <div class="invisible-element">Invisible</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div { background: lightblue; padding: 10px; margin: 5px; }
    
    .block-element {
      display: block;
    }
    
    .inline-element {
      display: inline;
    }
    
    .inline-block-element {
      display: inline-block;
      width: 100px;
    }
    
    .hidden-element {
      display: none;
    }
    
    .invisible-element {
      visibility: hidden;
    }
  </style>
</head>
<body>
  <div class="block-element">Block</div>
  <div class="inline-element">Inline</div>
  <div class="inline-block-element">Inline-Block</div>
  <div class="hidden-element">Hidden</div>
  <div class="invisible-element">Invisible</div>
</body>
</html>`,
    hints: [
      'display: block makes elements take full width',
      'display: inline makes elements flow with text',
      'display: inline-block combines benefits of both',
      'display: none removes element completely',
      'visibility: hidden hides but preserves space',
      'Block elements start on a new line',
      'Inline-block respects width and height'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.block-element\s*{[^}]*display:\s*block/i.test(code), errorMessage: '.block-element should have display: block' },
      { name: 'CSS test', test: (code) => /\.inline-element\s*{[^}]*display:\s*inline/i.test(code), errorMessage: '.inline-element should have display: inline' },
      { name: 'CSS test', test: (code) => /\.inline-block-element\s*{[^}]*display:\s*inline-block/i.test(code), errorMessage: '.inline-block-element should have display: inline-block' },
      { name: 'CSS test', test: (code) => /\.hidden-element\s*{[^}]*display:\s*none/i.test(code), errorMessage: '.hidden-element should have display: none' },
      { name: 'CSS test', test: (code) => /\.invisible-element\s*{[^}]*visibility:\s*hidden/i.test(code), errorMessage: '.invisible-element should have visibility: hidden' }
    ]
  },
  {
    id: 'css-7',
    title: 'CSS Positioning',
    description: 'Master static, relative, absolute, fixed, and sticky positioning',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# CSS Positioning

Positioning controls where elements appear on the page. CSS offers five positioning modes, each with unique behavior.

## Position Values

### static (default)
Normal document flow, ignores top/right/bottom/left:

\`\`\`css
div { position: static; }
\`\`\`

### relative
Positioned relative to its normal position:

\`\`\`css
.box {
  position: relative;
  top: 20px;  /* moves down 20px */
  left: 30px; /* moves right 30px */
}
\`\`\`

### absolute
Removed from flow, positioned relative to nearest positioned ancestor:

\`\`\`css
.popup {
  position: absolute;
  top: 0;
  right: 0;
}
\`\`\`

### fixed
Fixed relative to viewport, stays in place when scrolling:

\`\`\`css
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
}
\`\`\`

### sticky
Switches between relative and fixed based on scroll:

\`\`\`css
.header {
  position: sticky;
  top: 0;
}
\`\`\`

## Your Task

Create positioned elements:
- .container: position relative (to contain absolute children)
- .box-relative: position relative, top 10px, left 10px
- .box-absolute: position absolute, top 0, right 0
- .box-fixed: position fixed, bottom 20px, right 20px`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      width: 300px;
      height: 200px;
      background: lightgray;
      /* Make this position relative */
    }
    
    .box-relative {
      background: lightblue;
      padding: 10px;
      /* Position relative with offset */
    }
    
    .box-absolute {
      background: lightcoral;
      padding: 10px;
      /* Position absolute at top-right */
    }
    
    .box-fixed {
      background: lightgreen;
      padding: 10px;
      /* Position fixed at bottom-right */
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box-relative">Relative</div>
    <div class="box-absolute">Absolute</div>
  </div>
  <div class="box-fixed">Fixed</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      width: 300px;
      height: 200px;
      background: lightgray;
      position: relative;
    }
    
    .box-relative {
      background: lightblue;
      padding: 10px;
      position: relative;
      top: 10px;
      left: 10px;
    }
    
    .box-absolute {
      background: lightcoral;
      padding: 10px;
      position: absolute;
      top: 0;
      right: 0;
    }
    
    .box-fixed {
      background: lightgreen;
      padding: 10px;
      position: fixed;
      bottom: 20px;
      right: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box-relative">Relative</div>
    <div class="box-absolute">Absolute</div>
  </div>
  <div class="box-fixed">Fixed</div>
</body>
</html>`,
    hints: [
      'position: relative keeps element in flow but allows offset',
      'position: absolute removes element from flow',
      'Absolute elements position relative to nearest positioned ancestor',
      'position: fixed stays in same place when scrolling',
      'Use top, right, bottom, left for positioning offsets',
      'Parent needs position: relative for absolute child positioning',
      'Fixed elements are positioned relative to viewport'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.container\s*{[^}]*position:\s*relative/i.test(code), errorMessage: '.container should have position: relative' },
      { name: 'CSS test', test: (code) => /\.box-relative\s*{[^}]*position:\s*relative/i.test(code), errorMessage: '.box-relative should have position: relative' },
      { name: 'CSS test', test: (code) => /\.box-relative\s*{[^}]*top:\s*10px/i.test(code), errorMessage: '.box-relative should have top: 10px' },
      { name: 'CSS test', test: (code) => /\.box-absolute\s*{[^}]*position:\s*absolute/i.test(code), errorMessage: '.box-absolute should have position: absolute' },
      { name: 'CSS test', test: (code) => /\.box-fixed\s*{[^}]*position:\s*fixed/i.test(code), errorMessage: '.box-fixed should have position: fixed' },
      { name: 'CSS test', test: (code) => /\.box-fixed\s*{[^}]*bottom:\s*20px/i.test(code), errorMessage: '.box-fixed should have bottom: 20px' }
    ]
  },
  {
    id: 'css-8',
    title: 'Flexbox Basics',
    description: 'Master CSS Flexbox fundamentals: flex containers and flex items',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# Flexbox Basics

Flexbox is a powerful layout system for creating flexible, responsive designs. It makes aligning and distributing space among items easy.

## Creating a Flex Container

\`\`\`css
.container {
  display: flex; /* Creates flex container */
}
\`\`\`

## Main Flex Properties

### flex-direction
Controls the main axis direction:

\`\`\`css
.container {
  flex-direction: row;     /* horizontal (default) */
  flex-direction: column;  /* vertical */
}
\`\`\`

### justify-content
Aligns items along main axis:

\`\`\`css
.container {
  justify-content: flex-start;   /* start (default) */
  justify-content: center;       /* center */
  justify-content: space-between; /* space between items */
}
\`\`\`

### align-items
Aligns items along cross axis:

\`\`\`css
.container {
  align-items: stretch;  /* stretch to fill (default) */
  align-items: center;   /* center vertically */
}
\`\`\`

### gap
Adds space between flex items:

\`\`\`css
.container {
  gap: 20px;
}
\`\`\`

## Your Task

Create a flex container:
- Display: flex
- flex-direction: row
- justify-content: space-between
- align-items: center
- gap: 15px
- padding: 20px`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .flex-container {
      background: #f0f0f0;
      /* Add flex properties */
      
    }
    
    .flex-item {
      background: #3498db;
      color: white;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="flex-container">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
    <div class="flex-item">Item 3</div>
  </div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .flex-container {
      background: #f0f0f0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
      padding: 20px;
    }
    
    .flex-item {
      background: #3498db;
      color: white;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="flex-container">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
    <div class="flex-item">Item 3</div>
  </div>
</body>
</html>`,
    hints: [
      'Start with display: flex to create flex container',
      'flex-direction: row makes items horizontal',
      'justify-content: space-between spreads items apart',
      'align-items: center centers items vertically',
      'gap adds space between items without margin',
      'Flexbox works on direct children of flex container',
      'Main axis is horizontal with flex-direction: row'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.flex-container\s*{[^}]*display:\s*flex/i.test(code), errorMessage: '.flex-container should have display: flex' },
      { name: 'CSS test', test: (code) => /\.flex-container\s*{[^}]*flex-direction:\s*row/i.test(code), errorMessage: '.flex-container should have flex-direction: row' },
      { name: 'CSS test', test: (code) => /\.flex-container\s*{[^}]*justify-content:\s*space-between/i.test(code), errorMessage: '.flex-container should have justify-content: space-between' },
      { name: 'CSS test', test: (code) => /\.flex-container\s*{[^}]*align-items:\s*center/i.test(code), errorMessage: '.flex-container should have align-items: center' },
      { name: 'CSS test', test: (code) => /\.flex-container\s*{[^}]*gap:\s*15px/i.test(code), errorMessage: '.flex-container should have gap: 15px' },
      { name: 'CSS test', test: (code) => /\.flex-container\s*{[^}]*padding:\s*20px/i.test(code), errorMessage: '.flex-container should have padding: 20px' }
    ]
  },
  {
    id: 'css-9',
    title: 'Flexbox Advanced',
    description: 'Master flex-wrap, flex-grow, flex-shrink, and individual item alignment',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Flexbox Advanced

Advanced flexbox properties give you fine-grained control over layout behavior and individual item sizing.

## Container Properties

### flex-wrap
Controls whether items wrap to new lines:

\`\`\`css
.container {
  flex-wrap: wrap;       /* items wrap to new line */
  flex-wrap: nowrap;     /* items stay on one line (default) */
}
\`\`\`

### align-content
Aligns rows when items wrap:

\`\`\`css
.container {
  flex-wrap: wrap;
  align-content: space-between;
}
\`\`\`

## Item Properties

### flex-grow
Controls how much item grows to fill space:

\`\`\`css
.item { flex-grow: 1; } /* grows to fill available space */
\`\`\`

### flex-shrink
Controls how much item shrinks when space is limited:

\`\`\`css
.item { flex-shrink: 0; } /* won't shrink */
\`\`\`

### flex-basis
Sets initial size before growing/shrinking:

\`\`\`css
.item { flex-basis: 200px; }
\`\`\`

### Shorthand

\`\`\`css
.item { flex: 1 1 200px; } /* grow shrink basis */
\`\`\`

### align-self
Overrides align-items for individual item:

\`\`\`css
.item { align-self: flex-end; }
\`\`\`

## Your Task

Create advanced flex layout:
- Container: flex, wrap, space-between, center
- .item-1: flex-grow 2
- .item-2: flex-grow 1
- .item-3: align-self flex-end`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      background: #f0f0f0;
      height: 300px;
      /* Add flex properties with wrap */
      
    }
    
    .item {
      background: #3498db;
      color: white;
      padding: 20px;
      min-width: 100px;
    }
    
    .item-1 {
      /* flex-grow: 2 */
    }
    
    .item-2 {
      /* flex-grow: 1 */
    }
    
    .item-3 {
      /* align-self: flex-end */
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item item-1">Grows 2x</div>
    <div class="item item-2">Grows 1x</div>
    <div class="item item-3">Aligned End</div>
  </div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      background: #f0f0f0;
      height: 300px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
    
    .item {
      background: #3498db;
      color: white;
      padding: 20px;
      min-width: 100px;
    }
    
    .item-1 {
      flex-grow: 2;
    }
    
    .item-2 {
      flex-grow: 1;
    }
    
    .item-3 {
      align-self: flex-end;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item item-1">Grows 2x</div>
    <div class="item item-2">Grows 1x</div>
    <div class="item item-3">Aligned End</div>
  </div>
</body>
</html>`,
    hints: [
      'flex-wrap: wrap allows items to wrap to new lines',
      'flex-grow determines how much space item takes up',
      'Higher flex-grow value means more space taken',
      'align-self overrides container align-items for one item',
      'flex-end aligns to bottom in row direction',
      'flex-grow only affects extra space distribution',
      'Use flex shorthand: flex: grow shrink basis'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.container\s*{[^}]*display:\s*flex/i.test(code), errorMessage: '.container should have display: flex' },
      { name: 'CSS test', test: (code) => /\.container\s*{[^}]*flex-wrap:\s*wrap/i.test(code), errorMessage: '.container should have flex-wrap: wrap' },
      { name: 'CSS test', test: (code) => /\.item-1\s*{[^}]*flex-grow:\s*2/i.test(code), errorMessage: '.item-1 should have flex-grow: 2' },
      { name: 'CSS test', test: (code) => /\.item-2\s*{[^}]*flex-grow:\s*1/i.test(code), errorMessage: '.item-2 should have flex-grow: 1' },
      { name: 'CSS test', test: (code) => /\.item-3\s*{[^}]*align-self:\s*flex-end/i.test(code), errorMessage: '.item-3 should have align-self: flex-end' }
    ]
  },
  {
    id: 'css-10',
    title: 'CSS Grid Basics',
    description: 'Master CSS Grid fundamentals: grid containers, rows, columns, and gaps',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# CSS Grid Basics

CSS Grid is a powerful two-dimensional layout system. Unlike Flexbox (one-dimensional), Grid lets you control both rows and columns simultaneously.

## Creating a Grid Container

\`\`\`css
.container {
  display: grid;
}
\`\`\`

## Defining Columns and Rows

### grid-template-columns
Defines column tracks:

\`\`\`css
.container {
  grid-template-columns: 200px 200px 200px; /* 3 columns */
  grid-template-columns: 1fr 1fr 1fr;       /* 3 equal columns */
  grid-template-columns: repeat(3, 1fr);    /* shorthand */
}
\`\`\`

### grid-template-rows
Defines row tracks:

\`\`\`css
.container {
  grid-template-rows: 100px 200px;
}
\`\`\`

## Gaps

Add space between grid items:

\`\`\`css
.container {
  gap: 20px;              /* row and column gap */
  row-gap: 20px;         /* just row gap */
  column-gap: 30px;      /* just column gap */
}
\`\`\`

## fr Unit

The \`fr\` (fraction) unit represents a fraction of available space:

\`\`\`css
.container {
  grid-template-columns: 2fr 1fr; /* first column twice as wide */
}
\`\`\`

## Your Task

Create a grid layout:
- display: grid
- grid-template-columns: repeat(3, 1fr) /* 3 equal columns */
- grid-template-rows: 100px 200px
- gap: 15px
- padding: 20px`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .grid-container {
      background: #f0f0f0;
      /* Add grid properties */
      
    }
    
    .grid-item {
      background: #3498db;
      color: white;
      padding: 20px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
  </div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .grid-container {
      background: #f0f0f0;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 100px 200px;
      gap: 15px;
      padding: 20px;
    }
    
    .grid-item {
      background: #3498db;
      color: white;
      padding: 20px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
  </div>
</body>
</html>`,
    hints: [
      'Start with display: grid to create grid container',
      'grid-template-columns defines column widths',
      'repeat(3, 1fr) creates 3 equal columns',
      '1fr means one fraction of available space',
      'grid-template-rows defines row heights',
      'gap adds space between all grid items',
      'Grid items auto-place into cells by default'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.grid-container\s*{[^}]*display:\s*grid/i.test(code), errorMessage: '.grid-container should have display: grid' },
      { name: 'CSS test', test: (code) => /\.grid-container\s*{[^}]*grid-template-columns:\s*repeat\(\s*3\s*,\s*1fr\s*\)/i.test(code), errorMessage: '.grid-container should have grid-template-columns: repeat(3, 1fr)' },
      { name: 'CSS test', test: (code) => /\.grid-container\s*{[^}]*grid-template-rows:\s*100px\s+200px/i.test(code), errorMessage: '.grid-container should have grid-template-rows: 100px 200px' },
      { name: 'CSS test', test: (code) => /\.grid-container\s*{[^}]*gap:\s*15px/i.test(code), errorMessage: '.grid-container should have gap: 15px' },
      { name: 'CSS test', test: (code) => /\.grid-container\s*{[^}]*padding:\s*20px/i.test(code), errorMessage: '.grid-container should have padding: 20px' }
    ]
  },
  {
    id: 'css-11',
    title: 'CSS Grid Advanced',
    description: 'Master grid areas, grid-column, grid-row, and advanced grid placement',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# CSS Grid Advanced

Advanced Grid features give you precise control over item placement and create complex layouts with named grid areas.

## Grid Line Placement

### grid-column and grid-row
Position items using grid lines:

\`\`\`css
.item {
  grid-column: 1 / 3;  /* span from line 1 to 3 */
  grid-row: 1 / 2;      /* span row 1 to 2 */
}
\`\`\`

### Span Keyword

\`\`\`css
.item {
  grid-column: span 2;  /* span across 2 columns */
  grid-row: span 3;     /* span across 3 rows */
}
\`\`\`

## Grid Template Areas

Name grid areas for semantic layouts:

\`\`\`css
.container {
  display: grid;
  grid-template-areas:
    'header header header'
    'sidebar main main'
    'footer footer footer';
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
\`\`\`

## Auto-fit and Auto-fill

Responsive columns:

\`\`\`css
.container {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
\`\`\`

## Your Task

Create an advanced grid layout:
- Container: 3 columns (1fr each), 3 rows (100px, 200px, 100px)
- .header: grid-column span 3 (all columns)
- .sidebar: grid-row span 2 (rows 2-3)
- .main: grid-column 2 / 4, grid-row 2
- gap: 15px`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      display: grid;
      /* Add grid template */
      
    }
    
    .header {
      background: #3498db;
      padding: 20px;
      /* Span all 3 columns */
    }
    
    .sidebar {
      background: #2ecc71;
      padding: 20px;
      /* Span rows 2-3 */
    }
    
    .main {
      background: #e74c3c;
      padding: 20px;
      /* Position at columns 2-4, row 2 */
    }
    
    .footer {
      background: #f39c12;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">Header</div>
    <div class="sidebar">Sidebar</div>
    <div class="main">Main</div>
    <div class="footer">Footer</div>
  </div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 100px 200px 100px;
      gap: 15px;
    }
    
    .header {
      background: #3498db;
      padding: 20px;
      grid-column: span 3;
    }
    
    .sidebar {
      background: #2ecc71;
      padding: 20px;
      grid-row: span 2;
    }
    
    .main {
      background: #e74c3c;
      padding: 20px;
      grid-column: 2 / 4;
      grid-row: 2;
    }
    
    .footer {
      background: #f39c12;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">Header</div>
    <div class="sidebar">Sidebar</div>
    <div class="main">Main</div>
    <div class="footer">Footer</div>
  </div>
</body>
</html>`,
    hints: [
      'grid-column: span 3 makes item span 3 columns',
      'grid-row: span 2 makes item span 2 rows',
      'grid-column: 2 / 4 spans from line 2 to line 4',
      'Grid lines start at 1, not 0',
      'Use gap to add spacing between grid items',
      '1fr 1fr 1fr creates 3 equal columns',
      'Grid items auto-place if not explicitly positioned'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.container\s*{[^}]*grid-template-columns:\s*1fr\s+1fr\s+1fr/i.test(code), errorMessage: '.container should have grid-template-columns: 1fr 1fr 1fr' },
      { name: 'CSS test', test: (code) => /\.container\s*{[^}]*grid-template-rows:\s*100px\s+200px\s+100px/i.test(code), errorMessage: '.container should have grid-template-rows: 100px 200px 100px' },
      { name: 'CSS test', test: (code) => /\.header\s*{[^}]*grid-column:\s*span\s+3/i.test(code), errorMessage: '.header should have grid-column: span 3' },
      { name: 'CSS test', test: (code) => /\.sidebar\s*{[^}]*grid-row:\s*span\s+2/i.test(code), errorMessage: '.sidebar should have grid-row: span 2' },
      { name: 'CSS test', test: (code) => /\.main\s*{[^}]*grid-column:\s*2\s*\/\s*4/i.test(code), errorMessage: '.main should have grid-column: 2 / 4' }
    ]
  },
  {
    id: 'css-12',
    title: 'Responsive Design - Media Queries',
    description: 'Master media queries for responsive layouts across devices',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 25,
    content: `# Responsive Design - Media Queries

Media queries allow your designs to adapt to different screen sizes and devices. They're essential for creating responsive websites.

## Media Query Syntax

\`\`\`css
@media (max-width: 768px) {
  /* Styles for screens 768px and smaller */
  .container {
    width: 100%;
  }
}
\`\`\`

## Common Breakpoints

\`\`\`css
/* Mobile: up to 600px */
@media (max-width: 600px) {
  body { font-size: 14px; }
}

/* Tablet: 601px to 900px */
@media (min-width: 601px) and (max-width: 900px) {
  body { font-size: 16px; }
}

/* Desktop: 901px and up */
@media (min-width: 901px) {
  body { font-size: 18px; }
}
\`\`\`

## Media Features

- **max-width**: Maximum screen width
- **min-width**: Minimum screen width
- **orientation**: portrait or landscape
- **max-height**: Maximum screen height

\`\`\`css
@media (orientation: landscape) {
  .sidebar { display: block; }
}
\`\`\`

## Mobile-First Approach

Start with mobile styles, add complexity for larger screens:

\`\`\`css
.container { width: 100%; } /* Mobile default */

@media (min-width: 768px) {
  .container { width: 750px; } /* Tablet */
}
\`\`\`

## Your Task

Create responsive styles:
- Default: .container width 100%, font-size 14px
- Medium screens (min 768px): width 750px, font-size 16px
- Large screens (min 1024px): width 960px, font-size 18px`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      background: #3498db;
      color: white;
      padding: 20px;
      /* Add default mobile styles */
      
    }
    
    /* Add media query for tablets (min-width: 768px) */
    
    
    /* Add media query for desktops (min-width: 1024px) */
    
  </style>
</head>
<body>
  <div class="container">
    <h1>Responsive Design</h1>
    <p>Resize your browser to see changes!</p>
  </div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      background: #3498db;
      color: white;
      padding: 20px;
      width: 100%;
      font-size: 14px;
    }
    
    @media (min-width: 768px) {
      .container {
        width: 750px;
        font-size: 16px;
      }
    }
    
    @media (min-width: 1024px) {
      .container {
        width: 960px;
        font-size: 18px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Responsive Design</h1>
    <p>Resize your browser to see changes!</p>
  </div>
</body>
</html>`,
    hints: [
      'Media queries start with @media',
      'min-width means "at least this wide"',
      'max-width means "at most this wide"',
      'Mobile-first: start with small screen styles',
      'Use min-width for progressively larger screens',
      'Common breakpoints: 768px (tablet), 1024px (desktop)',
      'Media queries cascade like normal CSS'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.container\s*{[^}]*width:\s*100%/i.test(code), errorMessage: '.container should have width: 100% as default' },
      { name: 'CSS test', test: (code) => /\.container\s*{[^}]*font-size:\s*14px/i.test(code), errorMessage: '.container should have font-size: 14px as default' },
      { name: 'CSS test', test: (code) => /@media\s*\([^)]*min-width:\s*768px/i.test(code), errorMessage: 'Should have media query for min-width: 768px' },
      { name: 'CSS test', test: (code) => /@media\s*\([^)]*min-width:\s*1024px/i.test(code), errorMessage: 'Should have media query for min-width: 1024px' },
      { name: 'CSS test', test: (code) => /width:\s*750px/i.test(code), errorMessage: 'Should set width: 750px in tablet media query' },
      { name: 'CSS test', test: (code) => /width:\s*960px/i.test(code), errorMessage: 'Should set width: 960px in desktop media query' }
    ]
  },
  {
    id: 'css-13',
    title: 'CSS Variables (Custom Properties)',
    description: 'Master CSS custom properties for reusable, maintainable styles',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 30,
    content: `# CSS Variables (Custom Properties)

CSS Variables (Custom Properties) let you store values for reuse throughout your stylesheets. They make your code more maintainable and enable dynamic theming.

## Declaring Variables

Define variables using \`--\` prefix, typically in \`:root\`:

\`\`\`css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --spacing: 20px;
  --font-size: 16px;
}
\`\`\`

## Using Variables

Access variables with \`var()\` function:

\`\`\`css
.button {
  background-color: var(--primary-color);
  padding: var(--spacing);
  font-size: var(--font-size);
}
\`\`\`

## Fallback Values

Provide fallback if variable isn't defined:

\`\`\`css
.element {
  color: var(--text-color, black); /* fallback to black */
}
\`\`\`

## Scoped Variables

Variables can be scoped to specific elements:

\`\`\`css
.dark-theme {
  --bg-color: #333;
  --text-color: white;
}

.light-theme {
  --bg-color: white;
  --text-color: #333;
}
\`\`\`

## Your Task

Create a theme using CSS variables:
- Define in :root: --primary-color #3498db, --text-color #333, --spacing 20px
- .header: background var(--primary-color), padding var(--spacing)
- .content: color var(--text-color), padding var(--spacing)`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    :root {
      /* Define CSS variables */
      
    }
    
    .header {
      color: white;
      /* Use variables for background and padding */
      
    }
    
    .content {
      /* Use variables for color and padding */
      
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>CSS Variables Demo</h1>
  </div>
  <div class="content">
    <p>This design uses CSS custom properties!</p>
  </div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    :root {
      --primary-color: #3498db;
      --text-color: #333;
      --spacing: 20px;
    }
    
    .header {
      color: white;
      background-color: var(--primary-color);
      padding: var(--spacing);
    }
    
    .content {
      color: var(--text-color);
      padding: var(--spacing);
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>CSS Variables Demo</h1>
  </div>
  <div class="content">
    <p>This design uses CSS custom properties!</p>
  </div>
</body>
</html>`,
    hints: [
      'CSS variables start with two dashes: --variable-name',
      'Define variables in :root for global scope',
      'Use var(--variable-name) to access the value',
      'Variables are case-sensitive',
      'You can provide fallbacks: var(--color, blue)',
      ':root represents the document root element',
      'Variables can hold colors, sizes, or any CSS value'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /:root\s*{[^}]*--primary-color:\s*#3498db/i.test(code), errorMessage: ':root should define --primary-color: #3498db' },
      { name: 'CSS test', test: (code) => /:root\s*{[^}]*--text-color:\s*#333/i.test(code), errorMessage: ':root should define --text-color: #333' },
      { name: 'CSS test', test: (code) => /:root\s*{[^}]*--spacing:\s*20px/i.test(code), errorMessage: ':root should define --spacing: 20px' },
      { name: 'CSS test', test: (code) => /\.header\s*{[^}]*var\(--primary-color\)/i.test(code), errorMessage: '.header should use var(--primary-color)' },
      { name: 'CSS test', test: (code) => /\.header\s*{[^}]*var\(--spacing\)/i.test(code), errorMessage: '.header should use var(--spacing)' },
      { name: 'CSS test', test: (code) => /\.content\s*{[^}]*var\(--text-color\)/i.test(code), errorMessage: '.content should use var(--text-color)' }
    ]
  },
  {
    id: 'css-14',
    title: 'CSS Transitions',
    description: 'Master smooth transitions between CSS property values',
    language: 'html' as const,
    difficulty: 'Beginner',
    estimatedTime: 35,
    content: `# CSS Transitions

Transitions create smooth animations when CSS properties change. They're perfect for hover effects and simple animations.

## Transition Properties

### transition-duration
How long the transition takes:

\`\`\`css
.box { transition-duration: 0.3s; }
\`\`\`

### Shorthand

\`\`\`css
.box {
  transition: all 0.3s ease;
}
\`\`\`

## Your Task

Create hover transitions:
- .box: transition all 0.3s ease
- On hover: background #e74c3c, transform scale(1.1)`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 200px;
      height: 200px;
      background-color: #3498db;
      /* Add transition */
    }
    
    .box:hover {
      /* Add hover effects */
    }
  </style>
</head>
<body>
  <div class="box">Hover me!</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 200px;
      height: 200px;
      background-color: #3498db;
      transition: all 0.3s ease;
    }
    
    .box:hover {
      background-color: #e74c3c;
      transform: scale(1.1);
    }
  </style>
</head>
<body>
  <div class="box">Hover me!</div>
</body>
</html>`,
    hints: [
      'transition: all animates all properties',
      'Duration in seconds (s) or milliseconds (ms)',
      'ease creates smooth animation',
      ':hover triggers on mouse over',
      'transform: scale(1.1) makes 10% larger',
      'Transition goes on element, not :hover',
      'Shorthand: property duration timing-function'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.box\s*{[^}]*transition:\s*all\s+0\.3s\s+ease/i.test(code), errorMessage: '.box should have transition: all 0.3s ease' },
      { name: 'CSS test', test: (code) => /\.box:hover\s*{[^}]*background-color:\s*#e74c3c/i.test(code), errorMessage: '.box:hover should have background-color: #e74c3c' },
      { name: 'CSS test', test: (code) => /\.box:hover\s*{[^}]*transform:\s*scale\(1\.1\)/i.test(code), errorMessage: '.box:hover should have transform: scale(1.1)' }
    ]
  },
  {
    id: 'css-15',
    title: 'Animations and Keyframes',
    description: 'Create complex animations using CSS keyframes',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Animations and Keyframes

CSS animations bring your designs to life with sophisticated motion effects. Unlike transitions, animations use keyframes to define multiple states and create complex, repeating effects without JavaScript.

## Creating Keyframe Animations

### @keyframes Rule

Define animation states at different points:

\`\`\`css
@keyframes slideIn {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
\`\`\`

### Percentage-Based Keyframes

For more control, use percentages:

\`\`\`css
@keyframes bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-30px); }
  100% { transform: translateY(0); }
}
\`\`\`

## Animation Properties

### animation-name and animation-duration

\`\`\`css
.box {
  animation-name: bounce;
  animation-duration: 2s;
}
\`\`\`

### animation-iteration-count

Control repetitions:

\`\`\`css
.box {
  animation-iteration-count: infinite; /* or a number like 3 */
}
\`\`\`

### animation-timing-function

\`\`\`css
.box {
  animation-timing-function: ease-in-out;
}
\`\`\`

### Shorthand Syntax

\`\`\`css
.box {
  animation: bounce 2s ease-in-out infinite;
}
\`\`\`

## Your Task

Create a pulsing animation:
- Define @keyframes pulse that scales from 1 to 1.1 and back
- Apply animation to .pulse-box
- Duration: 1.5s, iteration: infinite, timing: ease-in-out`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Define the pulse keyframes */
    @keyframes pulse {
      /* Add keyframe states */
    }
    
    .pulse-box {
      width: 150px;
      height: 150px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 10px;
      /* Apply the animation */
    }
  </style>
</head>
<body>
  <div class="pulse-box"></div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
    
    .pulse-box {
      width: 150px;
      height: 150px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 10px;
      animation: pulse 1.5s ease-in-out infinite;
    }
  </style>
</head>
<body>
  <div class="pulse-box"></div>
</body>
</html>`,
    hints: [
      '@keyframes defines the animation states',
      'Use percentages (0%, 50%, 100%) to define intermediate states',
      'animation-name connects element to keyframes',
      'animation-duration sets how long one cycle takes',
      'infinite makes the animation loop forever',
      'transform: scale(1.1) makes element 10% larger',
      'Shorthand: animation: name duration timing iteration'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /@keyframes\s+pulse/.test(code), errorMessage: 'Should define @keyframes pulse' },
      { name: 'CSS test', test: (code) => /@keyframes\s+pulse[^}]*transform:\s*scale\(1\.1\)/.test(code), errorMessage: 'Keyframes should use transform: scale(1.1)' },
      { name: 'CSS test', test: (code) => /\.pulse-box\s*{[^}]*animation[^}]*pulse/.test(code), errorMessage: '.pulse-box should use pulse animation' },
      { name: 'CSS test', test: (code) => /animation[^;]*1\.5s/.test(code), errorMessage: 'Animation should have 1.5s duration' },
      { name: 'CSS test', test: (code) => /animation[^;]*infinite/.test(code), errorMessage: 'Animation should be infinite' }
    ]
  },
  {
    id: 'css-16',
    title: 'Transforms',
    description: 'Master 2D and 3D transformations in CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Transforms

CSS transforms manipulate elements in 2D and 3D space without affecting document flow. They're perfect for creating interactive effects, animations, and dynamic layouts.

## 2D Transform Functions

### translate()

Move elements horizontally and vertically:

\`\`\`css
.box {
  transform: translate(50px, 100px); /* x, y */
  transform: translateX(50px);       /* horizontal only */
  transform: translateY(100px);      /* vertical only */
}
\`\`\`

### rotate()

Rotate elements around their center:

\`\`\`css
.box {
  transform: rotate(45deg);  /* clockwise */
  transform: rotate(-45deg); /* counter-clockwise */
}
\`\`\`

### scale()

Resize elements:

\`\`\`css
.box {
  transform: scale(1.5);      /* 150% size */
  transform: scale(0.5);      /* 50% size */
  transform: scale(2, 1.5);   /* x, y separately */
}
\`\`\`

### skew()

Slant elements:

\`\`\`css
.box {
  transform: skew(10deg, 5deg); /* x-axis, y-axis */
}
\`\`\`

## Combining Transforms

Chain multiple transforms:

\`\`\`css
.card:hover {
  transform: scale(1.1) rotate(5deg) translateY(-10px);
}
\`\`\`

## transform-origin

Change the pivot point:

\`\`\`css
.box {
  transform-origin: top left;
  transform: rotate(45deg);
}
\`\`\`

## Your Task

Create transform effects on hover:
- .card: transition all 0.3s ease
- On hover: scale(1.05), rotate(2deg), translateY(-5px)`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .card {
      width: 200px;
      height: 250px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 10px;
      padding: 20px;
      color: white;
      /* Add transition */
    }
    
    .card:hover {
      /* Add transform effects */
    }
  </style>
</head>
<body>
  <div class="card">
    <h3>Hover Me!</h3>
    <p>Watch the transform magic</p>
  </div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .card {
      width: 200px;
      height: 250px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 10px;
      padding: 20px;
      color: white;
      transition: all 0.3s ease;
    }
    
    .card:hover {
      transform: scale(1.05) rotate(2deg) translateY(-5px);
    }
  </style>
</head>
<body>
  <div class="card">
    <h3>Hover Me!</h3>
    <p>Watch the transform magic</p>
  </div>
</body>
</html>`,
    hints: [
      'transform property accepts multiple functions separated by spaces',
      'scale(1.05) enlarges element by 5%',
      'rotate(2deg) tilts element slightly',
      'translateY(-5px) moves element up 5 pixels',
      'transition: all makes transform changes smooth',
      'Order matters: scale before rotate can give different results',
      'Transforms don\'t affect other elements\' positions'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.card\s*{[^}]*transition/.test(code), errorMessage: '.card should have transition property' },
      { name: 'CSS test', test: (code) => /\.card:hover\s*{[^}]*transform/.test(code), errorMessage: '.card:hover should have transform' },
      { name: 'CSS test', test: (code) => /transform[^;]*scale\(1\.05\)/.test(code), errorMessage: 'Transform should include scale(1.05)' },
      { name: 'CSS test', test: (code) => /transform[^;]*rotate\(2deg\)/.test(code), errorMessage: 'Transform should include rotate(2deg)' },
      { name: 'CSS test', test: (code) => /transform[^;]*translateY\(-5px\)/.test(code), errorMessage: 'Transform should include translateY(-5px)' }
    ]
  },
  {
    id: 'css-17',
    title: 'Pseudo-classes',
    description: 'Master interactive states with pseudo-class selectors',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Pseudo-classes

Pseudo-classes select elements based on their state or position, enabling dynamic styling without JavaScript. They're essential for creating interactive and responsive designs.

## Common Pseudo-classes

### Interactive States

\`\`\`css
a:hover { color: blue; }      /* Mouse over */
a:active { color: red; }      /* Being clicked */
a:visited { color: purple; }  /* Already visited */
a:focus { outline: 2px solid blue; } /* Keyboard focus */
\`\`\`

### Form States

\`\`\`css
input:focus { border-color: blue; }
input:disabled { opacity: 0.5; }
input:checked { background: green; }
input:valid { border-color: green; }
input:invalid { border-color: red; }
\`\`\`

### Structural Pseudo-classes

\`\`\`css
li:first-child { font-weight: bold; }
li:last-child { margin-bottom: 0; }
li:nth-child(odd) { background: #f0f0f0; }
li:nth-child(2n) { background: white; } /* even items */
\`\`\`

### :not() Pseudo-class

Exclude specific elements:

\`\`\`css
p:not(.special) { color: gray; }
\`\`\`

## Your Task

Style a navigation menu with pseudo-classes:
- a links: color #333, no underline, transition 0.3s
- a:hover: color #3498db
- a:active: color #2980b9
- li:first-child a: font-weight bold`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    nav ul {
      list-style: none;
      display: flex;
      gap: 20px;
    }
    
    nav a {
      /* Style links */
    }
    
    nav a:hover {
      /* Hover state */
    }
    
    nav a:active {
      /* Active state */
    }
    
    nav li:first-child a {
      /* First item styling */
    }
  </style>
</head>
<body>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    nav ul {
      list-style: none;
      display: flex;
      gap: 20px;
    }
    
    nav a {
      color: #333;
      text-decoration: none;
      transition: all 0.3s;
    }
    
    nav a:hover {
      color: #3498db;
    }
    
    nav a:active {
      color: #2980b9;
    }
    
    nav li:first-child a {
      font-weight: bold;
    }
  </style>
</head>
<body>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</body>
</html>`,
    hints: [
      ':hover applies when mouse is over element',
      ':active applies during click',
      ':first-child selects first element in parent',
      'Pseudo-classes use single colon (:)',
      'text-decoration: none removes underlines',
      'Combine selectors: li:first-child a',
      'Order matters: :link, :visited, :hover, :active (LVHA)'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /nav\s+a\s*{[^}]*color:\s*#333/.test(code), errorMessage: 'nav a should have color: #333' },
      { name: 'CSS test', test: (code) => /nav\s+a\s*{[^}]*text-decoration:\s*none/.test(code), errorMessage: 'nav a should have text-decoration: none' },
      { name: 'CSS test', test: (code) => /nav\s+a:hover\s*{[^}]*color:\s*#3498db/.test(code), errorMessage: 'nav a:hover should have color: #3498db' },
      { name: 'CSS test', test: (code) => /nav\s+a:active\s*{[^}]*color:\s*#2980b9/.test(code), errorMessage: 'nav a:active should have color: #2980b9' },
      { name: 'CSS test', test: (code) => /nav\s+li:first-child\s+a\s*{[^}]*font-weight:\s*bold/.test(code), errorMessage: 'nav li:first-child a should have font-weight: bold' }
    ]
  },
  {
    id: 'css-18',
    title: 'Pseudo-elements',
    description: 'Create virtual elements with ::before and ::after',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Pseudo-elements

Pseudo-elements create virtual elements that don't exist in the HTML, allowing you to add decorative content and complex effects purely with CSS. They're powerful tools for modern web design.

## ::before and ::after

Insert content before or after an element:

\`\`\`css
.quote::before {
  content: '"';
  font-size: 2em;
  color: #3498db;
}

.quote::after {
  content: '"';
  font-size: 2em;
  color: #3498db;
}
\`\`\`

## ::first-letter and ::first-line

Style the first letter or line:

\`\`\`css
p::first-letter {
  font-size: 3em;
  float: left;
  line-height: 1;
}

p::first-line {
  font-weight: bold;
  color: #333;
}
\`\`\`

## content Property

The content property is required for ::before and ::after:

\`\`\`css
.label::before {
  content: '★ ';
}

.link::after {
  content: ' →';
}

.empty::before {
  content: ''; /* Empty content for shapes */
  display: block;
  width: 50px;
  height: 50px;
  background: red;
}
\`\`\`

## Practical Uses

### Decorative Elements

\`\`\`css
.button::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  background: blue;
}
\`\`\`

## Your Task

Create a styled quote with pseudo-elements:
- .quote::before: content '"', color #3498db, font-size 2em
- .quote::after: content '"', color #3498db, font-size 2em
- .quote: padding-left 30px, font-style italic`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .quote {
      /* Add quote styling */
    }
    
    .quote::before {
      /* Add opening quote */
    }
    
    .quote::after {
      /* Add closing quote */
    }
  </style>
</head>
<body>
  <p class="quote">This is an inspiring quote about web development and the power of CSS.</p>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .quote {
      padding-left: 30px;
      font-style: italic;
    }
    
    .quote::before {
      content: '"';
      color: #3498db;
      font-size: 2em;
    }
    
    .quote::after {
      content: '"';
      color: #3498db;
      font-size: 2em;
    }
  </style>
</head>
<body>
  <p class="quote">This is an inspiring quote about web development and the power of CSS.</p>
</body>
</html>`,
    hints: [
      'Pseudo-elements use double colon (::)',
      'content property is required for ::before and ::after',
      '::before inserts content at the beginning',
      '::after inserts content at the end',
      'Pseudo-elements are inline by default',
      'Use quotes around text content: content: "text"',
      'Empty content: content: "" creates styled shapes'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.quote::before/.test(code), errorMessage: 'Should define .quote::before' },
      { name: 'CSS test', test: (code) => /\.quote::after/.test(code), errorMessage: 'Should define .quote::after' },
      { name: 'CSS test', test: (code) => /\.quote::before\s*{[^}]*content:\s*['"]/.test(code), errorMessage: '.quote::before should have content property' },
      { name: 'CSS test', test: (code) => /\.quote::before\s*{[^}]*color:\s*#3498db/.test(code), errorMessage: '.quote::before should have color: #3498db' },
      { name: 'CSS test', test: (code) => /\.quote\s*{[^}]*font-style:\s*italic/.test(code), errorMessage: '.quote should have font-style: italic' }
    ]
  },
  {
    id: 'css-19',
    title: 'Advanced Selectors',
    description: 'Master complex CSS selectors for precise element targeting',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Advanced Selectors

Advanced CSS selectors provide surgical precision in targeting elements, reducing the need for extra classes and creating cleaner, more maintainable code.

## Attribute Selectors

### Exact Match

\`\`\`css
input[type="text"] { border: 1px solid blue; }
a[href="#home"] { color: red; }
\`\`\`

### Contains

\`\`\`css
a[href*="example"] { }  /* Contains "example" */
a[href^="https"] { }    /* Starts with */
a[href$=".pdf"] { }     /* Ends with */
\`\`\`

## Combinators

### Descendant (space)

All descendants:

\`\`\`css
div p { color: blue; } /* All p inside div */
\`\`\`

### Child (>)

Direct children only:

\`\`\`css
div > p { color: blue; } /* Direct p children */
\`\`\`

### Adjacent Sibling (+)

Immediately following sibling:

\`\`\`css
h2 + p { font-weight: bold; } /* p right after h2 */
\`\`\`

### General Sibling (~)

All following siblings:

\`\`\`css
h2 ~ p { color: gray; } /* All p after h2 */
\`\`\`

## Advanced nth Selectors

\`\`\`css
li:nth-child(3) { }       /* 3rd child */
li:nth-child(2n) { }      /* Even children */
li:nth-child(2n+1) { }    /* Odd children */
li:nth-child(3n) { }      /* Every 3rd */
li:nth-last-child(2) { }  /* 2nd from end */
\`\`\`

## Your Task

Style elements with advanced selectors:
- input[type="text"]: border 2px solid #3498db, padding 10px
- ul > li: background #f0f0f0, margin-bottom 5px
- h2 + p: font-weight bold, color #2c3e50
- li:nth-child(odd): background #e0e0e0`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Style text inputs */
    input[type="text"] {
      
    }
    
    /* Direct li children of ul */
    ul > li {
      
    }
    
    /* Paragraph immediately after h2 */
    h2 + p {
      
    }
    
    /* Odd list items */
    li:nth-child(odd) {
      
    }
  </style>
</head>
<body>
  <h2>Section Title</h2>
  <p>First paragraph after heading</p>
  <p>Second paragraph</p>
  
  <input type="text" placeholder="Name">
  <input type="email" placeholder="Email">
  
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
  </ul>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    input[type="text"] {
      border: 2px solid #3498db;
      padding: 10px;
    }
    
    ul > li {
      background: #f0f0f0;
      margin-bottom: 5px;
    }
    
    h2 + p {
      font-weight: bold;
      color: #2c3e50;
    }
    
    li:nth-child(odd) {
      background: #e0e0e0;
    }
  </style>
</head>
<body>
  <h2>Section Title</h2>
  <p>First paragraph after heading</p>
  <p>Second paragraph</p>
  
  <input type="text" placeholder="Name">
  <input type="email" placeholder="Email">
  
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
  </ul>
</body>
</html>`,
    hints: [
      'Attribute selectors use square brackets: [attribute]',
      'type="text" targets specific input types',
      '> selects only direct children, not all descendants',
      '+ selects the immediately adjacent sibling',
      'nth-child(odd) targets 1st, 3rd, 5th... elements',
      'Attribute selectors are case-sensitive',
      'Combine multiple selectors for specificity'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /input\[type=["']text["']\]\s*{[^}]*border/.test(code), errorMessage: 'input[type="text"] should have border' },
      { name: 'CSS test', test: (code) => /input\[type=["']text["']\]\s*{[^}]*padding:\s*10px/.test(code), errorMessage: 'input[type="text"] should have padding: 10px' },
      { name: 'CSS test', test: (code) => /ul\s*>\s*li\s*{[^}]*background/.test(code), errorMessage: 'ul > li should have background' },
      { name: 'CSS test', test: (code) => /h2\s*\+\s*p\s*{[^}]*font-weight:\s*bold/.test(code), errorMessage: 'h2 + p should have font-weight: bold' },
      { name: 'CSS test', test: (code) => /li:nth-child\(odd\)\s*{[^}]*background/.test(code), errorMessage: 'li:nth-child(odd) should have background' }
    ]
  },
  {
    id: 'css-20',
    title: 'Typography',
    description: 'Master font styling, spacing, and text properties',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Typography

Typography is the art of arranging text for readability and visual appeal. CSS offers powerful tools for controlling every aspect of text presentation.

## Font Properties

### font-family

Define font stacks with fallbacks:

\`\`\`css
body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
}
\`\`\`

### font-size

Control text size:

\`\`\`css
h1 { font-size: 2.5rem; }
p { font-size: 16px; }
\`\`\`

### font-weight

\`\`\`css
.bold { font-weight: 700; }
.normal { font-weight: 400; }
\`\`\`

## Text Properties

### line-height

Control spacing between lines:

\`\`\`css
p {
  line-height: 1.6; /* 1.6x font size */
}
\`\`\`

### letter-spacing and word-spacing

\`\`\`css
h1 { letter-spacing: 2px; }
p { word-spacing: 4px; }
\`\`\`

### text-align

\`\`\`css
.center { text-align: center; }
.justify { text-align: justify; }
\`\`\`

### text-transform

\`\`\`css
.uppercase { text-transform: uppercase; }
.capitalize { text-transform: capitalize; }
\`\`\`

## Advanced Typography

### text-shadow

\`\`\`css
h1 { text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
\`\`\`

### text-decoration

\`\`\`css
a { text-decoration: none; }
.underline { text-decoration: underline wavy blue; }
\`\`\`

## Your Task

Create a styled article:
- h1: font-size 2.5rem, letter-spacing 1px, text-align center
- p: font-size 1.1rem, line-height 1.7, color #333
- .lead: font-size 1.3rem, font-weight 300`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      /* Style heading */
    }
    
    p {
      /* Style paragraphs */
    }
    
    .lead {
      /* Style lead paragraph */
    }
  </style>
</head>
<body>
  <article>
    <h1>The Art of Typography</h1>
    <p class="lead">Typography is more than just choosing fonts - it's about creating readable, beautiful text.</p>
    <p>Good typography enhances user experience and guides readers through content naturally.</p>
  </article>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      font-size: 2.5rem;
      letter-spacing: 1px;
      text-align: center;
    }
    
    p {
      font-size: 1.1rem;
      line-height: 1.7;
      color: #333;
    }
    
    .lead {
      font-size: 1.3rem;
      font-weight: 300;
    }
  </style>
</head>
<body>
  <article>
    <h1>The Art of Typography</h1>
    <p class="lead">Typography is more than just choosing fonts - it's about creating readable, beautiful text.</p>
    <p>Good typography enhances user experience and guides readers through content naturally.</p>
  </article>
</body>
</html>`,
    hints: [
      'rem units scale with root font size',
      'line-height: 1.7 means 170% of font size',
      'letter-spacing adds space between characters',
      'font-weight: 300 is light, 400 normal, 700 bold',
      'text-align: center centers text horizontally',
      'Optimal line-height for body text: 1.5-1.8',
      'Use unitless line-height for better scaling'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /h1\s*{[^}]*font-size:\s*2\.5rem/.test(code), errorMessage: 'h1 should have font-size: 2.5rem' },
      { name: 'CSS test', test: (code) => /h1\s*{[^}]*letter-spacing:\s*1px/.test(code), errorMessage: 'h1 should have letter-spacing: 1px' },
      { name: 'CSS test', test: (code) => /h1\s*{[^}]*text-align:\s*center/.test(code), errorMessage: 'h1 should have text-align: center' },
      { name: 'CSS test', test: (code) => /p\s*{[^}]*line-height:\s*1\.7/.test(code), errorMessage: 'p should have line-height: 1.7' },
      { name: 'CSS test', test: (code) => /\.lead\s*{[^}]*font-weight:\s*300/.test(code), errorMessage: '.lead should have font-weight: 300' }
    ]
  },
  {
    id: 'css-21',
    title: 'Shadows',
    description: 'Master box-shadow and text-shadow for depth and dimension',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Shadows

Shadows add depth, elevation, and visual hierarchy to your designs. CSS provides two shadow properties: box-shadow for elements and text-shadow for text.

## box-shadow

### Basic Syntax

\`\`\`css
box-shadow: offset-x offset-y blur-radius spread-radius color;
\`\`\`

### Examples

\`\`\`css
.card {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.elevated {
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.inset-shadow {
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
}
\`\`\`

### Multiple Shadows

Stack shadows with commas:

\`\`\`css
.card {
  box-shadow: 
    0 2px 4px rgba(0,0,0,0.1),
    0 4px 8px rgba(0,0,0,0.05);
}
\`\`\`

## text-shadow

### Syntax

\`\`\`css
text-shadow: offset-x offset-y blur-radius color;
\`\`\`

### Examples

\`\`\`css
h1 {
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.glow {
  text-shadow: 0 0 10px #fff, 0 0 20px #fff;
}
\`\`\`

## Material Design Elevations

\`\`\`css
.elevation-1 { box-shadow: 0 1px 3px rgba(0,0,0,0.12); }
.elevation-2 { box-shadow: 0 3px 6px rgba(0,0,0,0.16); }
.elevation-3 { box-shadow: 0 10px 20px rgba(0,0,0,0.19); }
\`\`\`

## Your Task

Create cards with shadow effects:
- .card: box-shadow 0 4px 6px rgba(0,0,0,0.1)
- .card:hover: box-shadow 0 10px 15px rgba(0,0,0,0.2)
- h2: text-shadow 2px 2px 4px rgba(0,0,0,0.3)
- transition: all 0.3s ease`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .card {
      width: 300px;
      padding: 20px;
      background: white;
      border-radius: 8px;
      /* Add box-shadow */
      /* Add transition */
    }
    
    .card:hover {
      /* Add hover shadow */
    }
    
    .card h2 {
      /* Add text-shadow */
    }
  </style>
</head>
<body>
  <div class="card">
    <h2>Card Title</h2>
    <p>Hover to see the shadow effect change.</p>
  </div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .card {
      width: 300px;
      padding: 20px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
    }
    
    .card:hover {
      box-shadow: 0 10px 15px rgba(0,0,0,0.2);
    }
    
    .card h2 {
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
  </style>
</head>
<body>
  <div class="card">
    <h2>Card Title</h2>
    <p>Hover to see the shadow effect change.</p>
  </div>
</body>
</html>`,
    hints: [
      'box-shadow syntax: x y blur spread color',
      'Positive x moves shadow right, positive y moves down',
      'rgba(0,0,0,0.1) creates semi-transparent black',
      'Larger blur radius creates softer shadows',
      'text-shadow doesn\'t have spread parameter',
      'transition makes shadow changes smooth',
      'Multiple shadows stack from first to last'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.card\s*{[^}]*box-shadow:\s*0\s+4px\s+6px/.test(code), errorMessage: '.card should have box-shadow: 0 4px 6px' },
      { name: 'CSS test', test: (code) => /\.card\s*{[^}]*transition/.test(code), errorMessage: '.card should have transition' },
      { name: 'CSS test', test: (code) => /\.card:hover\s*{[^}]*box-shadow:\s*0\s+10px\s+15px/.test(code), errorMessage: '.card:hover should have box-shadow: 0 10px 15px' },
      { name: 'CSS test', test: (code) => /\.card\s+h2\s*{[^}]*text-shadow:\s*2px\s+2px\s+4px/.test(code), errorMessage: '.card h2 should have text-shadow: 2px 2px 4px' },
      { name: 'CSS test', test: (code) => /rgba\(0,\s*0,\s*0/.test(code), errorMessage: 'Should use rgba for shadow colors' }
    ]
  },
  {
    id: 'css-22',
    title: 'Borders',
    description: 'Master border styles, radius, and advanced border effects',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Borders

Borders define element boundaries and add visual structure. CSS provides powerful border properties for creating everything from simple outlines to complex decorative effects.

## Basic Border Properties

### border Shorthand

\`\`\`css
.box {
  border: 2px solid #3498db;
}
\`\`\`

### Individual Sides

\`\`\`css
.box {
  border-top: 3px solid red;
  border-right: 1px dashed blue;
  border-bottom: 2px dotted green;
  border-left: 4px double orange;
}
\`\`\`

## Border Styles

\`\`\`css
border-style: solid;   /* Standard line */
border-style: dashed;  /* Dashed line */
border-style: dotted;  /* Dotted line */
border-style: double;  /* Two parallel lines */
border-style: groove;  /* 3D grooved */
border-style: ridge;   /* 3D ridged */
border-style: inset;   /* 3D inset */
border-style: outset;  /* 3D outset */
\`\`\`

## border-radius

Create rounded corners:

\`\`\`css
.rounded { border-radius: 8px; }
.circle { border-radius: 50%; }
.pill { border-radius: 25px; }

/* Individual corners */
.custom {
  border-radius: 10px 20px 30px 40px; /* TL TR BR BL */
}
\`\`\`

## Border Images

\`\`\`css
.fancy {
  border: 10px solid;
  border-image: linear-gradient(45deg, red, blue) 1;
}
\`\`\`

## Outline

Like borders but don't affect layout:

\`\`\`css
.focused {
  outline: 2px solid blue;
  outline-offset: 2px;
}
\`\`\`

## Your Task

Create bordered elements:
- .box-1: border 3px solid #3498db, border-radius 10px, padding 20px
- .box-2: border-top 4px solid #e74c3c, border-bottom 4px solid #e74c3c
- .circle: width 100px, height 100px, border 3px solid #2ecc71, border-radius 50%`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .box-1 {
      /* Add border and radius */
    }
    
    .box-2 {
      padding: 20px;
      /* Add top and bottom borders */
    }
    
    .circle {
      /* Create circle with border */
    }
  </style>
</head>
<body>
  <div class="box-1">Rounded Box</div>
  <div class="box-2">Top and Bottom Borders</div>
  <div class="circle"></div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .box-1 {
      border: 3px solid #3498db;
      border-radius: 10px;
      padding: 20px;
    }
    
    .box-2 {
      padding: 20px;
      border-top: 4px solid #e74c3c;
      border-bottom: 4px solid #e74c3c;
    }
    
    .circle {
      width: 100px;
      height: 100px;
      border: 3px solid #2ecc71;
      border-radius: 50%;
    }
  </style>
</head>
<body>
  <div class="box-1">Rounded Box</div>
  <div class="box-2">Top and Bottom Borders</div>
  <div class="circle"></div>
</body>
</html>`,
    hints: [
      'border shorthand: width style color',
      'border-radius: 50% creates perfect circle',
      'Individual sides: border-top, border-right, etc.',
      'border-radius requires equal width/height for circles',
      'Borders add to element dimensions unless box-sizing: border-box',
      'Outline doesn\'t take up space',
      'Multiple values for border-radius: top-left, top-right, bottom-right, bottom-left'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.box-1\s*{[^}]*border:\s*3px\s+solid\s+#3498db/.test(code), errorMessage: '.box-1 should have border: 3px solid #3498db' },
      { name: 'CSS test', test: (code) => /\.box-1\s*{[^}]*border-radius:\s*10px/.test(code), errorMessage: '.box-1 should have border-radius: 10px' },
      { name: 'CSS test', test: (code) => /\.box-2\s*{[^}]*border-top:\s*4px\s+solid\s+#e74c3c/.test(code), errorMessage: '.box-2 should have border-top: 4px solid #e74c3c' },
      { name: 'CSS test', test: (code) => /\.box-2\s*{[^}]*border-bottom:\s*4px\s+solid\s+#e74c3c/.test(code), errorMessage: '.box-2 should have border-bottom: 4px solid #e74c3c' },
      { name: 'CSS test', test: (code) => /\.circle\s*{[^}]*border-radius:\s*50%/.test(code), errorMessage: '.circle should have border-radius: 50%' }
    ]
  },
  {
    id: 'css-23',
    title: 'Gradients',
    description: 'Create beautiful color transitions with linear and radial gradients',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Gradients

Gradients create smooth transitions between colors, adding depth and visual interest to designs without images. CSS supports linear, radial, and conic gradients.

## Linear Gradients

### Basic Syntax

\`\`\`css
.box {
  background: linear-gradient(direction, color1, color2);
}
\`\`\`

### Examples

\`\`\`css
/* Top to bottom (default) */
.grad-1 { background: linear-gradient(#667eea, #764ba2); }

/* Left to right */
.grad-2 { background: linear-gradient(to right, red, blue); }

/* Diagonal */
.grad-3 { background: linear-gradient(45deg, yellow, green); }

/* Multiple colors */
.grad-4 { background: linear-gradient(red, yellow, green, blue); }
\`\`\`

### Color Stops

Control where colors transition:

\`\`\`css
.gradient {
  background: linear-gradient(
    to right,
    red 0%,
    yellow 50%,
    green 100%
  );
}
\`\`\`

## Radial Gradients

Radiate from a center point:

\`\`\`css
.radial {
  background: radial-gradient(circle, #667eea, #764ba2);
}

.ellipse {
  background: radial-gradient(ellipse at top left, red, blue);
}
\`\`\`

## Repeating Gradients

\`\`\`css
.stripes {
  background: repeating-linear-gradient(
    45deg,
    #667eea,
    #667eea 10px,
    #764ba2 10px,
    #764ba2 20px
  );
}
\`\`\`

## Your Task

Create gradient backgrounds:
- .gradient-1: linear-gradient to right, #667eea to #764ba2
- .gradient-2: linear-gradient 135deg, #f093fb 0%, #f5576c 100%
- .gradient-3: radial-gradient circle, #4facfe, #00f2fe`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 300px;
      height: 200px;
      margin: 20px;
      border-radius: 10px;
    }
    
    .gradient-1 {
      /* Linear gradient left to right */
    }
    
    .gradient-2 {
      /* Diagonal gradient */
    }
    
    .gradient-3 {
      /* Radial gradient */
    }
  </style>
</head>
<body>
  <div class="box gradient-1"></div>
  <div class="box gradient-2"></div>
  <div class="box gradient-3"></div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 300px;
      height: 200px;
      margin: 20px;
      border-radius: 10px;
    }
    
    .gradient-1 {
      background: linear-gradient(to right, #667eea, #764ba2);
    }
    
    .gradient-2 {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    }
    
    .gradient-3 {
      background: radial-gradient(circle, #4facfe, #00f2fe);
    }
  </style>
</head>
<body>
  <div class="box gradient-1"></div>
  <div class="box gradient-2"></div>
  <div class="box gradient-3"></div>
</body>
</html>`,
    hints: [
      'linear-gradient syntax: direction, color1, color2, ...',
      'Direction: to right, to bottom, 45deg, 135deg',
      'radial-gradient: shape, color1, color2',
      'Color stops: color percentage (e.g., #fff 50%)',
      'Gradients are backgrounds, not colors',
      'Multiple gradients: separate with commas',
      'Default direction is top to bottom (180deg)'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.gradient-1\s*{[^}]*background:\s*linear-gradient\(to right,\s*#667eea,\s*#764ba2/.test(code), errorMessage: '.gradient-1 should have linear-gradient(to right, #667eea, #764ba2)' },
      { name: 'CSS test', test: (code) => /\.gradient-2\s*{[^}]*background:\s*linear-gradient\(135deg/.test(code), errorMessage: '.gradient-2 should have linear-gradient(135deg' },
      { name: 'CSS test', test: (code) => /#f093fb/.test(code) && /#f5576c/.test(code), errorMessage: '.gradient-2 should use #f093fb and #f5576c' },
      { name: 'CSS test', test: (code) => /\.gradient-3\s*{[^}]*background:\s*radial-gradient\(circle/.test(code), errorMessage: '.gradient-3 should have radial-gradient(circle' },
      { name: 'CSS test', test: (code) => /#4facfe/.test(code) && /#00f2fe/.test(code), errorMessage: '.gradient-3 should use #4facfe and #00f2fe' }
    ]
  },
  {
    id: 'css-24',
    title: 'Filters',
    description: 'Apply visual effects with CSS filter functions',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Filters

CSS filters apply graphical effects like blur, brightness, and saturation to elements. They're powerful tools for image manipulation and creating visual effects without image editing software.

## Common Filter Functions

### blur()

Apply Gaussian blur:

\`\`\`css
.blurred { filter: blur(5px); }
\`\`\`

### brightness()

Adjust brightness (100% = original):

\`\`\`css
.bright { filter: brightness(150%); }
.dark { filter: brightness(50%); }
\`\`\`

### contrast()

Adjust contrast:

\`\`\`css
.high-contrast { filter: contrast(200%); }
\`\`\`

### grayscale()

Convert to grayscale:

\`\`\`css
.gray { filter: grayscale(100%); }
.partial-gray { filter: grayscale(50%); }
\`\`\`

### saturate()

Adjust color saturation:

\`\`\`css
.vibrant { filter: saturate(200%); }
.desaturate { filter: saturate(50%); }
\`\`\`

### hue-rotate()

Rotate colors:

\`\`\`css
.shifted { filter: hue-rotate(90deg); }
\`\`\`

### drop-shadow()

Add shadow (works on transparent PNGs):

\`\`\`css
.shadow { filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.5)); }
\`\`\`

## Combining Filters

Chain multiple filters:

\`\`\`css
.combo {
  filter: brightness(110%) contrast(120%) saturate(130%);
}
\`\`\`

## Hover Effects

\`\`\`css
img {
  filter: grayscale(100%);
  transition: filter 0.3s;
}

img:hover {
  filter: grayscale(0%);
}
\`\`\`

## Your Task

Create filter effects:
- .image-1: filter blur(3px)
- .image-2: filter grayscale(100%) contrast(120%)
- .image-3: filter brightness(120%) saturate(150%)
- img:hover: filter none, transition 0.3s`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    img {
      width: 300px;
      margin: 10px;
      transition: filter 0.3s;
    }
    
    .image-1 {
      /* Add blur filter */
    }
    
    .image-2 {
      /* Add grayscale and contrast */
    }
    
    .image-3 {
      /* Add brightness and saturate */
    }
    
    img:hover {
      /* Remove filters on hover */
    }
  </style>
</head>
<body>
  <img class="image-1" src="https://via.placeholder.com/300" alt="Blurred">
  <img class="image-2" src="https://via.placeholder.com/300" alt="Grayscale">
  <img class="image-3" src="https://via.placeholder.com/300" alt="Enhanced">
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    img {
      width: 300px;
      margin: 10px;
      transition: filter 0.3s;
    }
    
    .image-1 {
      filter: blur(3px);
    }
    
    .image-2 {
      filter: grayscale(100%) contrast(120%);
    }
    
    .image-3 {
      filter: brightness(120%) saturate(150%);
    }
    
    img:hover {
      filter: none;
    }
  </style>
</head>
<body>
  <img class="image-1" src="https://via.placeholder.com/300" alt="Blurred">
  <img class="image-2" src="https://via.placeholder.com/300" alt="Grayscale">
  <img class="image-3" src="https://via.placeholder.com/300" alt="Enhanced">
</body>
</html>`,
    hints: [
      'Filter functions are separated by spaces',
      'blur() takes pixel values',
      'brightness(), contrast(), saturate() use percentages',
      '100% is the original value',
      'grayscale(100%) = full grayscale, 0% = no grayscale',
      'filter: none removes all filters',
      'Combine with transition for smooth effects'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.image-1\s*{[^}]*filter:\s*blur\(3px\)/.test(code), errorMessage: '.image-1 should have filter: blur(3px)' },
      { name: 'CSS test', test: (code) => /\.image-2\s*{[^}]*filter:[^}]*grayscale\(100%\)/.test(code), errorMessage: '.image-2 should have grayscale(100%)' },
      { name: 'CSS test', test: (code) => /\.image-2\s*{[^}]*filter:[^}]*contrast\(120%\)/.test(code), errorMessage: '.image-2 should have contrast(120%)' },
      { name: 'CSS test', test: (code) => /\.image-3\s*{[^}]*filter:[^}]*brightness\(120%\)/.test(code), errorMessage: '.image-3 should have brightness(120%)' },
      { name: 'CSS test', test: (code) => /img:hover\s*{[^}]*filter:\s*none/.test(code), errorMessage: 'img:hover should have filter: none' }
    ]
  },
  {
    id: 'css-25',
    title: 'Blend modes',
    description: 'Master mix-blend-mode and background-blend-mode for creative effects',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Blend modes

Blend modes control how elements blend with their backgrounds and other elements, creating sophisticated visual effects similar to those in image editing software.

## mix-blend-mode

Blend an element with its background:

\`\`\`css
.overlay {
  mix-blend-mode: multiply;
}
\`\`\`

## Common Blend Modes

### multiply
Darkens by multiplying colors:

\`\`\`css
.dark-blend { mix-blend-mode: multiply; }
\`\`\`

### screen
Lightens by inverting and multiplying:

\`\`\`css
.light-blend { mix-blend-mode: screen; }
\`\`\`

### overlay
Combines multiply and screen:

\`\`\`css
.overlay { mix-blend-mode: overlay; }
\`\`\`

### color-dodge
Brightens base color:

\`\`\`css
.bright { mix-blend-mode: color-dodge; }
\`\`\`

### difference
Subtracts colors:

\`\`\`css
.diff { mix-blend-mode: difference; }
\`\`\`

## background-blend-mode

Blend multiple background layers:

\`\`\`css
.hero {
  background: 
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url('image.jpg');
  background-blend-mode: overlay;
}
\`\`\`

## Practical Examples

### Text Effects

\`\`\`css
h1 {
  background: url('texture.jpg');
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  mix-blend-mode: multiply;
}
\`\`\`

### Image Overlays

\`\`\`css
.image-overlay::after {
  content: '';
  background: #ff0000;
  mix-blend-mode: multiply;
}
\`\`\`

## Your Task

Create blend mode effects:
- .blend-1: mix-blend-mode multiply, background #ff6b6b
- .blend-2: mix-blend-mode screen, background #4ecdc4
- .blend-3: mix-blend-mode overlay, background linear-gradient(#667eea, #764ba2)`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      background: linear-gradient(135deg, #667eea, #764ba2);
      padding: 40px;
    }
    
    .box {
      width: 200px;
      height: 200px;
      margin: 20px;
      display: inline-block;
      padding: 20px;
      color: white;
    }
    
    .blend-1 {
      /* Add multiply blend mode */
    }
    
    .blend-2 {
      /* Add screen blend mode */
    }
    
    .blend-3 {
      /* Add overlay blend mode */
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box blend-1">Multiply</div>
    <div class="box blend-2">Screen</div>
    <div class="box blend-3">Overlay</div>
  </div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      background: linear-gradient(135deg, #667eea, #764ba2);
      padding: 40px;
    }
    
    .box {
      width: 200px;
      height: 200px;
      margin: 20px;
      display: inline-block;
      padding: 20px;
      color: white;
    }
    
    .blend-1 {
      mix-blend-mode: multiply;
      background: #ff6b6b;
    }
    
    .blend-2 {
      mix-blend-mode: screen;
      background: #4ecdc4;
    }
    
    .blend-3 {
      mix-blend-mode: overlay;
      background: linear-gradient(#667eea, #764ba2);
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box blend-1">Multiply</div>
    <div class="box blend-2">Screen</div>
    <div class="box blend-3">Overlay</div>
  </div>
</body>
</html>`,
    hints: [
      'mix-blend-mode blends element with background',
      'background-blend-mode blends multiple backgrounds',
      'multiply darkens, screen lightens',
      'overlay combines multiply and screen',
      'Element must have background to see blend effect',
      'Works with images, gradients, and colors',
      'Similar to Photoshop blend modes'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.blend-1\s*{[^}]*mix-blend-mode:\s*multiply/.test(code), errorMessage: '.blend-1 should have mix-blend-mode: multiply' },
      { name: 'CSS test', test: (code) => /\.blend-1\s*{[^}]*background:\s*#ff6b6b/.test(code), errorMessage: '.blend-1 should have background: #ff6b6b' },
      { name: 'CSS test', test: (code) => /\.blend-2\s*{[^}]*mix-blend-mode:\s*screen/.test(code), errorMessage: '.blend-2 should have mix-blend-mode: screen' },
      { name: 'CSS test', test: (code) => /\.blend-2\s*{[^}]*background:\s*#4ecdc4/.test(code), errorMessage: '.blend-2 should have background: #4ecdc4' },
      { name: 'CSS test', test: (code) => /\.blend-3\s*{[^}]*mix-blend-mode:\s*overlay/.test(code), errorMessage: '.blend-3 should have mix-blend-mode: overlay' }
    ]
  },
  {
    id: 'css-26',
    title: 'Z-index',
    description: 'Master stacking order and z-index for layered layouts',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Z-index

The z-index property controls the stacking order of positioned elements, determining which elements appear in front of or behind others. Understanding z-index is crucial for creating overlays, modals, and complex layered designs.

## How z-index Works

z-index only works on positioned elements (position: relative, absolute, fixed, or sticky):

\`\`\`css
.element {
  position: relative;
  z-index: 10;
}
\`\`\`

## Stacking Context

### Basic Stacking

Higher z-index = closer to viewer:

\`\`\`css
.layer-1 { z-index: 1; }  /* Behind */
.layer-2 { z-index: 2; }  /* Middle */
.layer-3 { z-index: 3; }  /* Front */
\`\`\`

### Negative Values

\`\`\`css
.behind { z-index: -1; }  /* Behind parent */
\`\`\`

## Common Use Cases

### Modal Overlays

\`\`\`css
.modal-backdrop {
  position: fixed;
  z-index: 1000;
  background: rgba(0,0,0,0.5);
}

.modal {
  position: fixed;
  z-index: 1001;
}
\`\`\`

### Dropdown Menus

\`\`\`css
.dropdown {
  position: absolute;
  z-index: 100;
}
\`\`\`

### Sticky Headers

\`\`\`css
.header {
  position: sticky;
  top: 0;
  z-index: 50;
}
\`\`\`

## Stacking Context Rules

1. Parent creates stacking context
2. Children compete within parent's context
3. Can't break out of parent context

\`\`\`css
.parent {
  position: relative;
  z-index: 1;
}

.child {
  position: relative;
  z-index: 9999; /* Still behind .parent's sibling with z-index: 2 */
}
\`\`\`

## Your Task

Create layered elements:
- .box-1: position relative, z-index 1, background #3498db
- .box-2: position relative, z-index 3, background #e74c3c (overlaps box-1)
- .box-3: position relative, z-index 2, background #2ecc71
- All boxes: absolute positioning to overlap`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      position: relative;
      height: 300px;
    }
    
    .box {
      width: 150px;
      height: 150px;
      position: absolute;
      padding: 20px;
      color: white;
    }
    
    .box-1 {
      top: 50px;
      left: 50px;
      /* Add z-index and background */
    }
    
    .box-2 {
      top: 100px;
      left: 100px;
      /* Add z-index and background */
    }
    
    .box-3 {
      top: 75px;
      left: 150px;
      /* Add z-index and background */
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box box-1">Z: 1</div>
    <div class="box box-2">Z: 3</div>
    <div class="box box-3">Z: 2</div>
  </div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      position: relative;
      height: 300px;
    }
    
    .box {
      width: 150px;
      height: 150px;
      position: absolute;
      padding: 20px;
      color: white;
    }
    
    .box-1 {
      top: 50px;
      left: 50px;
      z-index: 1;
      background: #3498db;
    }
    
    .box-2 {
      top: 100px;
      left: 100px;
      z-index: 3;
      background: #e74c3c;
    }
    
    .box-3 {
      top: 75px;
      left: 150px;
      z-index: 2;
      background: #2ecc71;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box box-1">Z: 1</div>
    <div class="box box-2">Z: 3</div>
    <div class="box box-3">Z: 2</div>
  </div>
</body>
</html>`,
    hints: [
      'z-index only works on positioned elements',
      'Higher values appear in front',
      'Default z-index is auto (0)',
      'Negative values go behind parent',
      'position: absolute removes from document flow',
      'Siblings with same z-index: later in HTML = on top',
      'Common z-index scale: 0, 10, 100, 1000'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.box-1\s*{[^}]*z-index:\s*1/.test(code), errorMessage: '.box-1 should have z-index: 1' },
      { name: 'CSS test', test: (code) => /\.box-1\s*{[^}]*background:\s*#3498db/.test(code), errorMessage: '.box-1 should have background: #3498db' },
      { name: 'CSS test', test: (code) => /\.box-2\s*{[^}]*z-index:\s*3/.test(code), errorMessage: '.box-2 should have z-index: 3' },
      { name: 'CSS test', test: (code) => /\.box-2\s*{[^}]*background:\s*#e74c3c/.test(code), errorMessage: '.box-2 should have background: #e74c3c' },
      { name: 'CSS test', test: (code) => /\.box-3\s*{[^}]*z-index:\s*2/.test(code), errorMessage: '.box-3 should have z-index: 2' }
    ]
  },
  {
    id: 'css-27',
    title: 'Overflow',
    description: 'Master overflow property for handling content that exceeds container size',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Overflow

The overflow property controls what happens when content exceeds its container's boundaries. It's essential for creating scrollable areas, preventing layout breaks, and managing content display.

## Overflow Values

### visible (default)

Content overflows the container:

\`\`\`css
.box {
  overflow: visible; /* Content not clipped */
}
\`\`\`

### hidden

Clip overflowing content:

\`\`\`css
.box {
  overflow: hidden; /* Content clipped, no scrollbar */
}
\`\`\`

### scroll

Always show scrollbars:

\`\`\`css
.box {
  overflow: scroll; /* Scrollbars always visible */
}
\`\`\`

### auto

Scrollbars only when needed:

\`\`\`css
.box {
  overflow: auto; /* Scrollbars when content overflows */
}
\`\`\`

## Individual Axes

### overflow-x and overflow-y

\`\`\`css
.horizontal-scroll {
  overflow-x: auto;
  overflow-y: hidden;
}
\`\`\`

## Text Overflow

Handle overflowing text:

\`\`\`css
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* Shows ... */
}
\`\`\`

## Scrollable Containers

\`\`\`css
.chat-messages {
  height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
}
\`\`\`

## overflow: clip

New value (no scrolling mechanism):

\`\`\`css
.clipped {
  overflow: clip;
}
\`\`\`

## Your Task

Create overflow scenarios:
- .box-1: overflow auto, height 150px, width 200px
- .box-2: overflow hidden, height 100px
- .box-3: white-space nowrap, overflow hidden, text-overflow ellipsis, width 150px`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      border: 2px solid #3498db;
      padding: 15px;
      margin: 20px;
    }
    
    .box-1 {
      /* Add overflow auto with dimensions */
    }
    
    .box-2 {
      /* Add overflow hidden */
    }
    
    .box-3 {
      /* Add text truncation */
    }
  </style>
</head>
<body>
  <div class="box box-1">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
  </div>
  
  <div class="box box-2">
    <p>This content will be clipped if it exceeds the height of 100px. You won't see scrollbars.</p>
  </div>
  
  <div class="box box-3">
    This is a very long text that should be truncated with ellipsis when it exceeds the width.
  </div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      border: 2px solid #3498db;
      padding: 15px;
      margin: 20px;
    }
    
    .box-1 {
      overflow: auto;
      height: 150px;
      width: 200px;
    }
    
    .box-2 {
      overflow: hidden;
      height: 100px;
    }
    
    .box-3 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 150px;
    }
  </style>
</head>
<body>
  <div class="box box-1">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
  </div>
  
  <div class="box box-2">
    <p>This content will be clipped if it exceeds the height of 100px. You won't see scrollbars.</p>
  </div>
  
  <div class="box box-3">
    This is a very long text that should be truncated with ellipsis when it exceeds the width.
  </div>
</body>
</html>`,
    hints: [
      'overflow: auto shows scrollbars only when needed',
      'overflow: hidden clips content without scrollbars',
      'text-overflow: ellipsis requires overflow: hidden',
      'white-space: nowrap prevents text wrapping',
      'overflow-x and overflow-y control individual axes',
      'Container needs fixed dimensions for overflow to work',
      'overflow: scroll always shows scrollbars'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.box-1\s*{[^}]*overflow:\s*auto/.test(code), errorMessage: '.box-1 should have overflow: auto' },
      { name: 'CSS test', test: (code) => /\.box-1\s*{[^}]*height:\s*150px/.test(code), errorMessage: '.box-1 should have height: 150px' },
      { name: 'CSS test', test: (code) => /\.box-2\s*{[^}]*overflow:\s*hidden/.test(code), errorMessage: '.box-2 should have overflow: hidden' },
      { name: 'CSS test', test: (code) => /\.box-3\s*{[^}]*text-overflow:\s*ellipsis/.test(code), errorMessage: '.box-3 should have text-overflow: ellipsis' },
      { name: 'CSS test', test: (code) => /\.box-3\s*{[^}]*white-space:\s*nowrap/.test(code), errorMessage: '.box-3 should have white-space: nowrap' }
    ]
  },
  {
    id: 'css-28',
    title: 'Object-fit',
    description: 'Master object-fit for controlling image and video sizing',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Object-fit

The object-fit property controls how images and videos are sized within their containers, similar to background-size for background images. It's essential for responsive image handling.

## object-fit Values

### fill (default)

Stretches to fill container (may distort):

\`\`\`css
img {
  object-fit: fill;
}
\`\`\`

### contain

Scales to fit inside container (maintains aspect ratio):

\`\`\`css
img {
  object-fit: contain;
}
\`\`\`

### cover

Scales to fill container (maintains aspect ratio, may crop):

\`\`\`css
img {
  width: 300px;
  height: 300px;
  object-fit: cover;
}
\`\`\`

### none

Keeps original size (may overflow or be too small):

\`\`\`css
img {
  object-fit: none;
}
\`\`\`

### scale-down

Uses none or contain, whichever is smaller:

\`\`\`css
img {
  object-fit: scale-down;
}
\`\`\`

## object-position

Controls alignment within container:

\`\`\`css
img {
  object-fit: cover;
  object-position: center top; /* Align to top center */
}

/* Percentage values */
img {
  object-position: 75% 50%;
}
\`\`\`

## Common Use Cases

### Profile Pictures

\`\`\`css
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
\`\`\`

### Card Images

\`\`\`css
.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
\`\`\`

### Video Players

\`\`\`css
video {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
\`\`\`

## Your Task

Style images with object-fit:
- .img-cover: width 200px, height 200px, object-fit cover
- .img-contain: width 200px, height 200px, object-fit contain
- .img-fill: width 200px, height 200px, object-fit fill
- All: border-radius 10px, object-position center`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    img {
      margin: 10px;
      border: 2px solid #3498db;
    }
    
    .img-cover {
      /* Add cover object-fit */
    }
    
    .img-contain {
      /* Add contain object-fit */
    }
    
    .img-fill {
      /* Add fill object-fit */
    }
  </style>
</head>
<body>
  <img class="img-cover" src="https://via.placeholder.com/400x300" alt="Cover">
  <img class="img-contain" src="https://via.placeholder.com/400x300" alt="Contain">
  <img class="img-fill" src="https://via.placeholder.com/400x300" alt="Fill">
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    img {
      margin: 10px;
      border: 2px solid #3498db;
    }
    
    .img-cover {
      width: 200px;
      height: 200px;
      object-fit: cover;
      border-radius: 10px;
      object-position: center;
    }
    
    .img-contain {
      width: 200px;
      height: 200px;
      object-fit: contain;
      border-radius: 10px;
      object-position: center;
    }
    
    .img-fill {
      width: 200px;
      height: 200px;
      object-fit: fill;
      border-radius: 10px;
      object-position: center;
    }
  </style>
</head>
<body>
  <img class="img-cover" src="https://via.placeholder.com/400x300" alt="Cover">
  <img class="img-contain" src="https://via.placeholder.com/400x300" alt="Contain">
  <img class="img-fill" src="https://via.placeholder.com/400x300" alt="Fill">
</body>
</html>`,
    hints: [
      'object-fit only works on replaced elements (img, video)',
      'cover fills container, may crop image',
      'contain fits entire image, may leave empty space',
      'Container needs defined dimensions',
      'object-position: center centers the image',
      'Use cover for thumbnails and avatars',
      'Maintains aspect ratio except with fill'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.img-cover\s*{[^}]*object-fit:\s*cover/.test(code), errorMessage: '.img-cover should have object-fit: cover' },
      { name: 'CSS test', test: (code) => /\.img-cover\s*{[^}]*width:\s*200px/.test(code), errorMessage: '.img-cover should have width: 200px' },
      { name: 'CSS test', test: (code) => /\.img-contain\s*{[^}]*object-fit:\s*contain/.test(code), errorMessage: '.img-contain should have object-fit: contain' },
      { name: 'CSS test', test: (code) => /\.img-fill\s*{[^}]*object-fit:\s*fill/.test(code), errorMessage: '.img-fill should have object-fit: fill' },
      { name: 'CSS test', test: (code) => /object-position:\s*center/.test(code), errorMessage: 'Should have object-position: center' }
    ]
  },
  {
    id: 'css-29',
    title: 'Cursor',
    description: 'Master cursor property for custom pointer interactions',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Cursor

The cursor property changes the mouse pointer appearance when hovering over elements. It provides visual feedback and enhances user experience by indicating interactive elements and states.

## Common Cursor Values

### pointer

Hand cursor for links and clickable elements:

\`\`\`css
button {
  cursor: pointer;
}
\`\`\`

### default

Standard arrow cursor:

\`\`\`css
.element {
  cursor: default;
}
\`\`\`

### text

I-beam for text selection:

\`\`\`css
input[type="text"] {
  cursor: text;
}
\`\`\`

### move

Four-directional arrow for draggable items:

\`\`\`css
.draggable {
  cursor: move;
}
\`\`\`

### not-allowed

Prohibited action:

\`\`\`css
.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
\`\`\`

### wait and progress

\`\`\`css
.loading {
  cursor: wait;
}

.processing {
  cursor: progress;
}
\`\`\`

## Resize Cursors

\`\`\`css
.resize-h { cursor: ew-resize; }  /* Horizontal */
.resize-v { cursor: ns-resize; }  /* Vertical */
.resize-ne { cursor: ne-resize; } /* Diagonal */
.resize-nw { cursor: nw-resize; }
\`\`\`

## Help and Context

\`\`\`css
.help {
  cursor: help; /* Question mark */
}

.zoom-in { cursor: zoom-in; }
.zoom-out { cursor: zoom-out; }
\`\`\`

## Custom Cursors

Use custom images:

\`\`\`css
.custom {
  cursor: url('cursor.png'), pointer;
}
\`\`\`

## none

Hide cursor:

\`\`\`css
.no-cursor {
  cursor: none;
}
\`\`\`

## Your Task

Apply cursor styles:
- .btn: cursor pointer
- .disabled: cursor not-allowed, opacity 0.6
- .draggable: cursor move
- .help-icon: cursor help
- .resize: cursor ew-resize`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      padding: 20px;
      margin: 10px;
      background: #ecf0f1;
      border-radius: 5px;
      display: inline-block;
    }
    
    .btn {
      background: #3498db;
      color: white;
      /* Add pointer cursor */
    }
    
    .disabled {
      background: #95a5a6;
      color: white;
      /* Add not-allowed cursor and opacity */
    }
    
    .draggable {
      background: #2ecc71;
      /* Add move cursor */
    }
    
    .help-icon {
      background: #f39c12;
      /* Add help cursor */
    }
    
    .resize {
      background: #e74c3c;
      /* Add resize cursor */
    }
  </style>
</head>
<body>
  <div class="btn">Click Me</div>
  <div class="disabled">Disabled</div>
  <div class="draggable">Drag Me</div>
  <div class="help-icon">?</div>
  <div class="resize">Resize</div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      padding: 20px;
      margin: 10px;
      background: #ecf0f1;
      border-radius: 5px;
      display: inline-block;
    }
    
    .btn {
      background: #3498db;
      color: white;
      cursor: pointer;
    }
    
    .disabled {
      background: #95a5a6;
      color: white;
      cursor: not-allowed;
      opacity: 0.6;
    }
    
    .draggable {
      background: #2ecc71;
      cursor: move;
    }
    
    .help-icon {
      background: #f39c12;
      cursor: help;
    }
    
    .resize {
      background: #e74c3c;
      cursor: ew-resize;
    }
  </style>
</head>
<body>
  <div class="btn">Click Me</div>
  <div class="disabled">Disabled</div>
  <div class="draggable">Drag Me</div>
  <div class="help-icon">?</div>
  <div class="resize">Resize</div>
</body>
</html>`,
    hints: [
      'cursor: pointer indicates clickable elements',
      'not-allowed shows prohibition symbol',
      'move shows four-directional arrows',
      'help shows question mark cursor',
      'ew-resize shows horizontal resize arrows',
      'Always provide cursor feedback for interactive elements',
      'Custom cursors need fallback: url(), pointer'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.btn\s*{[^}]*cursor:\s*pointer/.test(code), errorMessage: '.btn should have cursor: pointer' },
      { name: 'CSS test', test: (code) => /\.disabled\s*{[^}]*cursor:\s*not-allowed/.test(code), errorMessage: '.disabled should have cursor: not-allowed' },
      { name: 'CSS test', test: (code) => /\.disabled\s*{[^}]*opacity:\s*0\.6/.test(code), errorMessage: '.disabled should have opacity: 0.6' },
      { name: 'CSS test', test: (code) => /\.draggable\s*{[^}]*cursor:\s*move/.test(code), errorMessage: '.draggable should have cursor: move' },
      { name: 'CSS test', test: (code) => /\.help-icon\s*{[^}]*cursor:\s*help/.test(code), errorMessage: '.help-icon should have cursor: help' },
      { name: 'CSS test', test: (code) => /\.resize\s*{[^}]*cursor:\s*ew-resize/.test(code), errorMessage: '.resize should have cursor: ew-resize' }
    ]
  },
  {
    id: 'css-30',
    title: 'Lists',
    description: 'Master list styling with list-style properties',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Lists

CSS list properties control the appearance of ordered and unordered lists. From bullet styles to custom markers, these properties help create well-formatted, visually appealing lists.

## list-style-type

### Unordered Lists

\`\`\`css
ul {
  list-style-type: disc;     /* Filled circle (default) */
  list-style-type: circle;   /* Empty circle */
  list-style-type: square;   /* Filled square */
  list-style-type: none;     /* No marker */
}
\`\`\`

### Ordered Lists

\`\`\`css
ol {
  list-style-type: decimal;        /* 1, 2, 3 (default) */
  list-style-type: upper-alpha;    /* A, B, C */
  list-style-type: lower-alpha;    /* a, b, c */
  list-style-type: upper-roman;    /* I, II, III */
  list-style-type: lower-roman;    /* i, ii, iii */
}
\`\`\`

## list-style-position

Control marker position:

\`\`\`css
ul {
  list-style-position: outside; /* Default, marker outside */
  list-style-position: inside;  /* Marker inside text flow */
}
\`\`\`

## list-style-image

Custom image markers:

\`\`\`css
ul {
  list-style-image: url('checkmark.png');
}
\`\`\`

## Shorthand

\`\`\`css
ul {
  list-style: square inside;
}
\`\`\`

## Custom Styled Lists

### Remove Default Styling

\`\`\`css
ul {
  list-style: none;
  padding-left: 0;
}
\`\`\`

### Custom Markers with ::before

\`\`\`css
li::before {
  content: '✓ ';
  color: green;
}
\`\`\`

## Your Task

Style different list types:
- ul.disc: list-style-type disc, padding-left 20px
- ul.none: list-style none, padding-left 0
- ol.alpha: list-style-type upper-alpha, color #3498db
- ol.roman: list-style-type lower-roman`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    ul.disc {
      /* Disc bullets */
    }
    
    ul.none {
      /* No bullets */
    }
    
    ol.alpha {
      /* Alphabetical */
    }
    
    ol.roman {
      /* Roman numerals */
    }
  </style>
</head>
<body>
  <ul class="disc">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  
  <ul class="none">
    <li>No bullet 1</li>
    <li>No bullet 2</li>
  </ul>
  
  <ol class="alpha">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ol>
  
  <ol class="roman">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ol>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    ul.disc {
      list-style-type: disc;
      padding-left: 20px;
    }
    
    ul.none {
      list-style: none;
      padding-left: 0;
    }
    
    ol.alpha {
      list-style-type: upper-alpha;
      color: #3498db;
    }
    
    ol.roman {
      list-style-type: lower-roman;
    }
  </style>
</head>
<body>
  <ul class="disc">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  
  <ul class="none">
    <li>No bullet 1</li>
    <li>No bullet 2</li>
  </ul>
  
  <ol class="alpha">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
  </ol>
  
  <ol class="roman">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ol>
</body>
</html>`,
    hints: [
      'list-style-type controls bullet/number appearance',
      'list-style: none removes markers',
      'upper-alpha creates A, B, C...',
      'lower-roman creates i, ii, iii...',
      'Remove padding-left when using none',
      'Shorthand: list-style combines type, position, image',
      'Use ::before for fully custom markers'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /ul\.disc\s*{[^}]*list-style-type:\s*disc/.test(code), errorMessage: 'ul.disc should have list-style-type: disc' },
      { name: 'CSS test', test: (code) => /ul\.disc\s*{[^}]*padding-left:\s*20px/.test(code), errorMessage: 'ul.disc should have padding-left: 20px' },
      { name: 'CSS test', test: (code) => /ul\.none\s*{[^}]*list-style:\s*none/.test(code), errorMessage: 'ul.none should have list-style: none' },
      { name: 'CSS test', test: (code) => /ol\.alpha\s*{[^}]*list-style-type:\s*upper-alpha/.test(code), errorMessage: 'ol.alpha should have list-style-type: upper-alpha' },
      { name: 'CSS test', test: (code) => /ol\.roman\s*{[^}]*list-style-type:\s*lower-roman/.test(code), errorMessage: 'ol.roman should have list-style-type: lower-roman' }
    ]
  },
  {
    id: 'css-31',
    title: 'Tables',
    description: 'Master table styling for data presentation',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Tables

CSS table properties transform basic HTML tables into professional, readable data displays. From borders to striping, proper table styling enhances data comprehension.

## border-collapse

Control border rendering:

\`\`\`css
table {
  border-collapse: collapse;  /* Single borders */
  border-collapse: separate;  /* Separate borders (default) */
}
\`\`\`

## Styling Table Elements

### Basic Table Styling

\`\`\`css
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #3498db;
  color: white;
}
\`\`\`

### Striped Rows

\`\`\`css
tr:nth-child(even) {
  background-color: #f2f2f2;
}
\`\`\`

### Hover Effects

\`\`\`css
tr:hover {
  background-color: #ddd;
}
\`\`\`

## Your Task

Style a data table:
- table: width 100%, border-collapse collapse
- th: background #3498db, color white, padding 15px
- td: padding 12px, border-bottom 1px solid #ddd
- tr:nth-child(even): background #f9f9f9
- tr:hover: background #e8f4f8`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    table {
      /* Add table styling */
    }
    
    th {
      /* Add header styling */
    }
    
    td {
      /* Add cell styling */
    }
    
    tr:nth-child(even) {
      /* Add striping */
    }
    
    tr:hover {
      /* Add hover effect */
    }
  </style>
</head>
<body>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>Developer</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td>Designer</td>
      </tr>
      <tr>
        <td>Bob Johnson</td>
        <td>bob@example.com</td>
        <td>Manager</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    table {
      width: 100%;
      border-collapse: collapse;
    }
    
    th {
      background: #3498db;
      color: white;
      padding: 15px;
    }
    
    td {
      padding: 12px;
      border-bottom: 1px solid #ddd;
    }
    
    tr:nth-child(even) {
      background: #f9f9f9;
    }
    
    tr:hover {
      background: #e8f4f8;
    }
  </style>
</head>
<body>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>Developer</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td>Designer</td>
      </tr>
      <tr>
        <td>Bob Johnson</td>
        <td>bob@example.com</td>
        <td>Manager</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`,
    hints: [
      'border-collapse: collapse removes spacing between cells',
      'th styles table headers, td styles data cells',
      'nth-child(even) targets every other row',
      'tr:hover provides interactive feedback',
      'padding creates space inside cells',
      'border-bottom on td creates horizontal lines',
      'width: 100% makes table full width'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /table\s*{[^}]*border-collapse:\s*collapse/.test(code), errorMessage: 'table should have border-collapse: collapse' },
      { name: 'CSS test', test: (code) => /th\s*{[^}]*background:\s*#3498db/.test(code), errorMessage: 'th should have background: #3498db' },
      { name: 'CSS test', test: (code) => /th\s*{[^}]*color:\s*white/.test(code), errorMessage: 'th should have color: white' },
      { name: 'CSS test', test: (code) => /td\s*{[^}]*padding:\s*12px/.test(code), errorMessage: 'td should have padding: 12px' },
      { name: 'CSS test', test: (code) => /tr:nth-child\(even\)\s*{[^}]*background/.test(code), errorMessage: 'tr:nth-child(even) should have background' },
      { name: 'CSS test', test: (code) => /tr:hover\s*{[^}]*background/.test(code), errorMessage: 'tr:hover should have background' }
    ]
  },
  {
    id: 'css-32',
    title: 'Forms Styling',
    description: 'Master professional form styling with modern CSS techniques',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Forms Styling

Forms are essential user interface elements. Professional form styling enhances usability, accessibility, and user experience. Learn to create beautiful, functional forms with CSS.

## Form Input Styling

Basic input styling:

\`\`\`css
input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
\`\`\`

## Label Styling

Professional label design:

\`\`\`css
label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}
\`\`\`

## Input States

### Focus State

\`\`\`css
input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
\`\`\`

### Error State

\`\`\`css
input.error {
  border-color: #ef4444;
}

input.error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}
\`\`\`

### Success State

\`\`\`css
input.success {
  border-color: #10b981;
}
\`\`\`

## Textarea Styling

\`\`\`css
textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
}
\`\`\`

## Select Dropdown

\`\`\`css
select {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  background: white;
  cursor: pointer;
}
\`\`\`

## Checkbox and Radio

\`\`\`css
input[type="checkbox"],
input[type="radio"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
\`\`\`

## Submit Button

\`\`\`css
button[type="submit"] {
  background: #3b82f6;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

button[type="submit"]:hover {
  background: #2563eb;
}
\`\`\`

## Your Task

Create a professional contact form:
- Style text inputs with padding 12px 16px, border 2px solid #e0e0e0, border-radius 8px
- Add focus state: border-color #3b82f6, box-shadow 0 0 0 3px rgba(59, 130, 246, 0.1)
- Style labels with font-weight 600, margin-bottom 8px
- Style submit button with background #3b82f6, color white, padding 12px 24px
- Add hover effect to button: background #2563eb`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .form-group {
      margin-bottom: 20px;
    }
    
    /* TODO: Style labels */
    label {
      
    }
    
    /* TODO: Style text inputs */
    input[type="text"],
    input[type="email"],
    textarea {
      
    }
    
    /* TODO: Add focus state */
    input:focus,
    textarea:focus {
      
    }
    
    /* TODO: Style submit button */
    button[type="submit"] {
      
    }
    
    /* TODO: Add button hover */
    button[type="submit"]:hover {
      
    }
  </style>
</head>
<body>
  <form>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required>
    </div>
    
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>
    </div>
    
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" required></textarea>
    </div>
    
    <button type="submit">Send Message</button>
  </form>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .form-group {
      margin-bottom: 20px;
    }
    
    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 600;
      color: #374151;
      font-size: 14px;
    }
    
    input[type="text"],
    input[type="email"],
    textarea {
      width: 100%;
      padding: 12px 16px;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      font-size: 16px;
      transition: border-color 0.3s, box-shadow 0.3s;
    }
    
    textarea {
      resize: vertical;
      min-height: 120px;
      font-family: inherit;
    }
    
    input:focus,
    textarea:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    
    button[type="submit"] {
      background: #3b82f6;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s;
    }
    
    button[type="submit"]:hover {
      background: #2563eb;
    }
  </style>
</head>
<body>
  <form>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required>
    </div>
    
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>
    </div>
    
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" required></textarea>
    </div>
    
    <button type="submit">Send Message</button>
  </form>
</body>
</html>`,
    hints: [
      'Use padding: 12px 16px for comfortable input spacing',
      'border-radius: 8px creates modern rounded corners',
      'Focus states need outline: none to remove default browser outline',
      'box-shadow with rgba creates soft glow effect',
      'Transition properties for smooth state changes',
      'width: 100% makes inputs fill their container',
      'font-family: inherit maintains consistent typography'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /input.*{[^}]*padding:\s*12px\s+16px/i.test(code), errorMessage: 'Input should have padding: 12px 16px' },
      { name: 'CSS test', test: (code) => /input.*{[^}]*border:\s*2px\s+solid\s+#e0e0e0/i.test(code), errorMessage: 'Input should have border: 2px solid #e0e0e0' },
      { name: 'CSS test', test: (code) => /input.*{[^}]*border-radius:\s*8px/i.test(code), errorMessage: 'Input should have border-radius: 8px' },
      { name: 'CSS test', test: (code) => /input:focus.*{[^}]*border-color:\s*#3b82f6/i.test(code), errorMessage: 'Input focus should have border-color: #3b82f6' },
      { name: 'CSS test', test: (code) => /input:focus.*{[^}]*box-shadow/i.test(code), errorMessage: 'Input focus should have box-shadow' },
      { name: 'CSS test', test: (code) => /label\s*{[^}]*font-weight:\s*600/i.test(code), errorMessage: 'Label should have font-weight: 600' },
      { name: 'CSS test', test: (code) => /button.*{[^}]*background:\s*#3b82f6/i.test(code), errorMessage: 'Button should have background: #3b82f6' },
      { name: 'CSS test', test: (code) => /button.*{[^}]*color:\s*white/i.test(code), errorMessage: 'Button should have color: white' },
      { name: 'CSS test', test: (code) => /button:hover.*{[^}]*background:\s*#2563eb/i.test(code), errorMessage: 'Button hover should have background: #2563eb' }
    ]
  },
  {
    id: 'css-33',
    title: 'Buttons Styling',
    description: 'Create professional button designs with variants and states',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Buttons Styling

Buttons are critical interactive elements in web design. Professional button styling requires attention to states, variants, and accessibility. Master creating beautiful, functional buttons.

## Base Button Styles

Foundation for all buttons:

\`\`\`css
.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  text-decoration: none;
}
\`\`\`

## Button Variants

### Primary Button

\`\`\`css
.btn-primary {
  background: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}
\`\`\`

### Secondary Button

\`\`\`css
.btn-secondary {
  background: #6b7280;
  color: white;
}

.btn-secondary:hover {
  background: #4b5563;
}
\`\`\`

### Danger Button

\`\`\`css
.btn-danger {
  background: #ef4444;
  color: white;
}

.btn-danger:hover {
  background: #dc2626;
}
\`\`\`

### Success Button

\`\`\`css
.btn-success {
  background: #10b981;
  color: white;
}

.btn-success:hover {
  background: #059669;
}
\`\`\`

## Outline Buttons

\`\`\`css
.btn-outline {
  background: transparent;
  border: 2px solid #3b82f6;
  color: #3b82f6;
}

.btn-outline:hover {
  background: #3b82f6;
  color: white;
}
\`\`\`

## Button Sizes

### Small

\`\`\`css
.btn-sm {
  padding: 8px 16px;
  font-size: 14px;
}
\`\`\`

### Large

\`\`\`css
.btn-lg {
  padding: 16px 32px;
  font-size: 18px;
}
\`\`\`

## Button States

### Disabled

\`\`\`css
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}
\`\`\`

### Active/Pressed

\`\`\`css
.btn:active {
  transform: translateY(0);
  box-shadow: none;
}
\`\`\`

### Focus

\`\`\`css
.btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}
\`\`\`

## Icon Buttons

\`\`\`css
.btn-icon {
  padding: 12px;
  border-radius: 50%;
  width: 48px;
  height: 48px;
}
\`\`\`

## Your Task

Create button variants:
- Base .btn: padding 12px 24px, border-radius 8px, font-weight 600
- .btn-primary: background #3b82f6, color white
- .btn-secondary: background #6b7280, color white
- .btn-danger: background #ef4444, color white
- Add hover effects: transform translateY(-2px), box-shadow
- Add transitions for smooth effects`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* TODO: Base button styles */
    .btn {
      
    }
    
    /* TODO: Primary button */
    .btn-primary {
      
    }
    
    .btn-primary:hover {
      
    }
    
    /* TODO: Secondary button */
    .btn-secondary {
      
    }
    
    .btn-secondary:hover {
      
    }
    
    /* TODO: Danger button */
    .btn-danger {
      
    }
    
    .btn-danger:hover {
      
    }
  </style>
</head>
<body>
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
  <button class="btn btn-danger">Danger</button>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .btn {
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-block;
    }
    
    .btn-primary {
      background: #3b82f6;
      color: white;
    }
    
    .btn-primary:hover {
      background: #2563eb;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    }
    
    .btn-secondary {
      background: #6b7280;
      color: white;
    }
    
    .btn-secondary:hover {
      background: #4b5563;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(107, 114, 128, 0.3);
    }
    
    .btn-danger {
      background: #ef4444;
      color: white;
    }
    
    .btn-danger:hover {
      background: #dc2626;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
    }
  </style>
</head>
<body>
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
  <button class="btn btn-danger">Danger</button>
</body>
</html>`,
    hints: [
      'Base styles apply to all buttons using .btn class',
      'Variant classes (.btn-primary, etc.) add specific colors',
      'transition: all 0.3s ease makes hover effects smooth',
      'transform: translateY(-2px) creates lift effect',
      'box-shadow with rgba adds depth on hover',
      'cursor: pointer shows button is clickable',
      'font-weight: 600 makes text stand out'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.btn\s*{[^}]*padding:\s*12px\s+24px/i.test(code), errorMessage: '.btn should have padding: 12px 24px' },
      { name: 'CSS test', test: (code) => /\.btn\s*{[^}]*border-radius:\s*8px/i.test(code), errorMessage: '.btn should have border-radius: 8px' },
      { name: 'CSS test', test: (code) => /\.btn\s*{[^}]*font-weight:\s*600/i.test(code), errorMessage: '.btn should have font-weight: 600' },
      { name: 'CSS test', test: (code) => /\.btn-primary\s*{[^}]*background:\s*#3b82f6/i.test(code), errorMessage: '.btn-primary should have background: #3b82f6' },
      { name: 'CSS test', test: (code) => /\.btn-primary\s*{[^}]*color:\s*white/i.test(code), errorMessage: '.btn-primary should have color: white' },
      { name: 'CSS test', test: (code) => /\.btn-secondary\s*{[^}]*background:\s*#6b7280/i.test(code), errorMessage: '.btn-secondary should have background: #6b7280' },
      { name: 'CSS test', test: (code) => /\.btn-danger\s*{[^}]*background:\s*#ef4444/i.test(code), errorMessage: '.btn-danger should have background: #ef4444' },
      { name: 'CSS test', test: (code) => /\.btn.*:hover.*{[^}]*transform:\s*translateY\(-2px\)/i.test(code), errorMessage: 'Button hover should have transform: translateY(-2px)' },
      { name: 'CSS test', test: (code) => /\.btn.*:hover.*{[^}]*box-shadow/i.test(code), errorMessage: 'Button hover should have box-shadow' }
    ]
  },
  {
    id: 'css-34',
    title: 'Cards',
    description: 'Master card components for modern UI designs',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Cards

Cards are versatile UI components used to group related information. They're fundamental to modern web design, appearing in dashboards, product listings, blog posts, and more.

## Basic Card Structure

\`\`\`css
.card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}
\`\`\`

## Card with Image

\`\`\`css
.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
  margin: -24px -24px 16px -24px;
}
\`\`\`

## Card Header

\`\`\`css
.card-header {
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e5e7eb;
}

.card-header h3 {
  margin: 0;
  font-size: 20px;
  color: #1f2937;
}
\`\`\`

## Card Body

\`\`\`css
.card-body {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 16px;
}
\`\`\`

## Card Footer

\`\`\`css
.card-footer {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

## Hover Effects

\`\`\`css
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}
\`\`\`

## Card Variants

### Elevated Card

\`\`\`css
.card-elevated {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}
\`\`\`

### Outlined Card

\`\`\`css
.card-outlined {
  border: 2px solid #e5e7eb;
  box-shadow: none;
}
\`\`\`

### Colored Card

\`\`\`css
.card-primary {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
}
\`\`\`

## Card Grid Layout

\`\`\`css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}
\`\`\`

## Your Task

Create a professional product card:
- .card: background white, border-radius 12px, padding 24px
- box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)
- .card-header h3: font-size 20px, color #1f2937
- .card-body: color #6b7280, line-height 1.6
- .card:hover: transform translateY(-8px), enhanced box-shadow`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* TODO: Base card styles */
    .card {
      
    }
    
    /* TODO: Card header */
    .card-header {
      
    }
    
    .card-header h3 {
      
    }
    
    /* TODO: Card body */
    .card-body {
      
    }
    
    /* TODO: Card footer */
    .card-footer {
      
    }
    
    /* TODO: Hover effect */
    .card:hover {
      
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="card-header">
      <h3>Product Name</h3>
    </div>
    <div class="card-body">
      <p>High-quality product with amazing features and benefits for your needs.</p>
    </div>
    <div class="card-footer">
      <span class="price">$99.99</span>
      <button>Add to Cart</button>
    </div>
  </div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .card {
      background: white;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      max-width: 400px;
    }
    
    .card-header {
      margin-bottom: 16px;
      padding-bottom: 16px;
      border-bottom: 1px solid #e5e7eb;
    }
    
    .card-header h3 {
      margin: 0;
      font-size: 20px;
      color: #1f2937;
    }
    
    .card-body {
      color: #6b7280;
      line-height: 1.6;
      margin-bottom: 16px;
    }
    
    .card-body p {
      margin: 0;
    }
    
    .card-footer {
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid #e5e7eb;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .price {
      font-size: 24px;
      font-weight: 700;
      color: #3b82f6;
    }
    
    button {
      background: #3b82f6;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
    }
    
    .card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="card-header">
      <h3>Product Name</h3>
    </div>
    <div class="card-body">
      <p>High-quality product with amazing features and benefits for your needs.</p>
    </div>
    <div class="card-footer">
      <span class="price">$99.99</span>
      <button>Add to Cart</button>
    </div>
  </div>
</body>
</html>`,
    hints: [
      'border-radius: 12px creates modern rounded corners',
      'box-shadow creates depth and elevation',
      'transition: all 0.3s ease smooths hover effects',
      'Use border-top/bottom for section dividers',
      'Flexbox in footer for space-between layout',
      'transform: translateY(-8px) lifts card on hover',
      'Increase box-shadow on hover for emphasis'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.card\s*{[^}]*background:\s*white/i.test(code), errorMessage: '.card should have background: white' },
      { name: 'CSS test', test: (code) => /\.card\s*{[^}]*border-radius:\s*12px/i.test(code), errorMessage: '.card should have border-radius: 12px' },
      { name: 'CSS test', test: (code) => /\.card\s*{[^}]*padding:\s*24px/i.test(code), errorMessage: '.card should have padding: 24px' },
      { name: 'CSS test', test: (code) => /\.card\s*{[^}]*box-shadow/i.test(code), errorMessage: '.card should have box-shadow' },
      { name: 'CSS test', test: (code) => /\.card-header.*h3\s*{[^}]*font-size:\s*20px/i.test(code), errorMessage: '.card-header h3 should have font-size: 20px' },
      { name: 'CSS test', test: (code) => /\.card-header.*h3\s*{[^}]*color:\s*#1f2937/i.test(code), errorMessage: '.card-header h3 should have color: #1f2937' },
      { name: 'CSS test', test: (code) => /\.card-body\s*{[^}]*color:\s*#6b7280/i.test(code), errorMessage: '.card-body should have color: #6b7280' },
      { name: 'CSS test', test: (code) => /\.card-body\s*{[^}]*line-height:\s*1\.6/i.test(code), errorMessage: '.card-body should have line-height: 1.6' },
      { name: 'CSS test', test: (code) => /\.card:hover\s*{[^}]*transform:\s*translateY\(-8px\)/i.test(code), errorMessage: '.card:hover should have transform: translateY(-8px)' }
    ]
  },
  {
    id: 'css-35',
    title: 'Navigation',
    description: 'Build professional navigation menus with CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Navigation

Navigation is the cornerstone of website usability. Professional navigation design requires clean styling, clear hierarchy, and responsive behavior. Master creating intuitive navigation systems.

## Horizontal Navigation

Basic horizontal nav:

\`\`\`css
nav {
  background: #1f2937;
  padding: 1rem 2rem;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

nav a:hover {
  color: #3b82f6;
}
\`\`\`

## Active State

\`\`\`css
nav a.active {
  color: #3b82f6;
  border-bottom: 2px solid #3b82f6;
  padding-bottom: 4px;
}
\`\`\`

## Navigation with Logo

\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1f2937;
  padding: 1rem 2rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}
\`\`\`

## Dropdown Menu

\`\`\`css
.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  min-width: 200px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s;
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
\`\`\`

## Mobile Menu

\`\`\`css
.hamburger {
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: white;
  transition: all 0.3s;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }
  
  nav ul {
    display: none;
    flex-direction: column;
  }
  
  nav ul.active {
    display: flex;
  }
}
\`\`\`

## Sticky Navigation

\`\`\`css
nav {
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
\`\`\`

## Vertical Sidebar Navigation

\`\`\`css
.sidebar-nav {
  width: 250px;
  background: #1f2937;
  height: 100vh;
  padding: 2rem 1rem;
}

.sidebar-nav ul {
  list-style: none;
  padding: 0;
}

.sidebar-nav li {
  margin-bottom: 1rem;
}

.sidebar-nav a {
  display: block;
  padding: 0.75rem 1rem;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.3s;
}

.sidebar-nav a:hover {
  background: #374151;
}
\`\`\`

## Your Task

Create a professional navbar:
- nav: background #1f2937, padding 1rem 2rem
- Use flexbox for layout: display flex, justify-content space-between
- nav ul: display flex, gap 2rem, list-style none
- nav a: color white, text-decoration none, transition color 0.3s
- nav a:hover: color #3b82f6
- .active: color #3b82f6, border-bottom 2px solid #3b82f6`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    /* TODO: Navigation bar */
    nav {
      
    }
    
    /* TODO: Flex container for logo and menu */
    .navbar {
      
    }
    
    /* TODO: Logo styles */
    .logo {
      
    }
    
    /* TODO: Menu list */
    nav ul {
      
    }
    
    /* TODO: Menu links */
    nav a {
      
    }
    
    /* TODO: Hover state */
    nav a:hover {
      
    }
    
    /* TODO: Active state */
    nav a.active {
      
    }
  </style>
</head>
<body>
  <nav>
    <div class="navbar">
      <div class="logo">MyBrand</div>
      <ul>
        <li><a href="#" class="active">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </nav>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    nav {
      background: #1f2937;
      padding: 1rem 2rem;
    }
    
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      color: white;
    }
    
    nav ul {
      list-style: none;
      display: flex;
      gap: 2rem;
      margin: 0;
      padding: 0;
    }
    
    nav a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s;
      padding-bottom: 4px;
    }
    
    nav a:hover {
      color: #3b82f6;
    }
    
    nav a.active {
      color: #3b82f6;
      border-bottom: 2px solid #3b82f6;
    }
  </style>
</head>
<body>
  <nav>
    <div class="navbar">
      <div class="logo">MyBrand</div>
      <ul>
        <li><a href="#" class="active">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </nav>
</body>
</html>`,
    hints: [
      'Flexbox creates horizontal layout: display: flex',
      'justify-content: space-between separates logo and menu',
      'gap: 2rem spaces menu items evenly',
      'list-style: none removes bullet points',
      'transition: color 0.3s smooths color changes',
      'border-bottom creates underline for active link',
      'align-items: center vertically centers items'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /nav\s*{[^}]*background:\s*#1f2937/i.test(code), errorMessage: 'nav should have background: #1f2937' },
      { name: 'CSS test', test: (code) => /nav\s*{[^}]*padding:\s*1rem\s+2rem/i.test(code), errorMessage: 'nav should have padding: 1rem 2rem' },
      { name: 'CSS test', test: (code) => /\.navbar\s*{[^}]*display:\s*flex/i.test(code), errorMessage: '.navbar should have display: flex' },
      { name: 'CSS test', test: (code) => /\.navbar\s*{[^}]*justify-content:\s*space-between/i.test(code), errorMessage: '.navbar should have justify-content: space-between' },
      { name: 'CSS test', test: (code) => /nav\s+ul\s*{[^}]*display:\s*flex/i.test(code), errorMessage: 'nav ul should have display: flex' },
      { name: 'CSS test', test: (code) => /nav\s+ul\s*{[^}]*gap:\s*2rem/i.test(code), errorMessage: 'nav ul should have gap: 2rem' },
      { name: 'CSS test', test: (code) => /nav\s+ul\s*{[^}]*list-style:\s*none/i.test(code), errorMessage: 'nav ul should have list-style: none' },
      { name: 'CSS test', test: (code) => /nav\s+a\s*{[^}]*color:\s*white/i.test(code), errorMessage: 'nav a should have color: white' },
      { name: 'CSS test', test: (code) => /nav\s+a:hover\s*{[^}]*color:\s*#3b82f6/i.test(code), errorMessage: 'nav a:hover should have color: #3b82f6' },
      { name: 'CSS test', test: (code) => /nav\s+a\.active\s*{[^}]*border-bottom.*#3b82f6/i.test(code), errorMessage: 'nav a.active should have border-bottom with #3b82f6' }
    ]
  },
  {
    id: 'css-36',
    title: 'Breadcrumbs',
    description: 'Create navigation breadcrumbs for better user orientation',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Breadcrumbs

Breadcrumbs are navigation aids that show users their current location in a website's hierarchy. They improve usability and help users navigate back to parent pages.

## Basic Breadcrumb Structure

\`\`\`css
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: #f3f4f6;
  border-radius: 8px;
}

.breadcrumbs a {
  color: #3b82f6;
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumbs a:hover {
  color: #2563eb;
  text-decoration: underline;
}
\`\`\`

## Breadcrumb Separator

Using CSS for separators:

\`\`\`css
.breadcrumbs li:not(:last-child)::after {
  content: '/';
  margin: 0 0.5rem;
  color: #6b7280;
}
\`\`\`

Alternative separators:

\`\`\`css
/* Arrow separator */
.breadcrumbs li:not(:last-child)::after {
  content: '→';
}

/* Chevron separator */
.breadcrumbs li:not(:last-child)::after {
  content: '›';
}
\`\`\`

## Current Page Style

\`\`\`css
.breadcrumbs .current {
  color: #1f2937;
  font-weight: 600;
  pointer-events: none;
}
\`\`\`

## Icon Breadcrumbs

\`\`\`css
.breadcrumbs li:first-child::before {
  content: '🏠';
  margin-right: 0.5rem;
}
\`\`\`

## Responsive Breadcrumbs

Collapse on mobile:

\`\`\`css
@media (max-width: 640px) {
  .breadcrumbs li:not(:last-child):not(:first-child) {
    display: none;
  }
  
  .breadcrumbs li:nth-last-child(2)::after {
    content: '...';
  }
}
\`\`\`

## Advanced Styling

### Pill Style

\`\`\`css
.breadcrumbs-pill a {
  padding: 0.5rem 1rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
\`\`\`

### With Background

\`\`\`css
.breadcrumbs-bg li {
  background: #e5e7eb;
  padding: 0.5rem 1rem;
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%, 10px 50%);
}
\`\`\`

## Accessibility

Semantic markup:

\`\`\`html
<nav aria-label="Breadcrumb">
  <ol class="breadcrumbs">
    <li><a href="/">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li class="current">Current Page</li>
  </ol>
</nav>
\`\`\`

## Your Task

Create breadcrumb navigation:
- .breadcrumbs: display flex, gap 0.5rem, padding 1rem
- .breadcrumbs a: color #3b82f6, text-decoration none
- Use ::after pseudo-element for separators: content '/', color #6b7280
- .current: color #1f2937, font-weight 600
- Add hover effect: text-decoration underline`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* TODO: Breadcrumb container */
    .breadcrumbs {
      
    }
    
    .breadcrumbs ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    /* TODO: Breadcrumb links */
    .breadcrumbs a {
      
    }
    
    /* TODO: Hover state */
    .breadcrumbs a:hover {
      
    }
    
    /* TODO: Separator */
    .breadcrumbs li:not(:last-child)::after {
      
    }
    
    /* TODO: Current page */
    .breadcrumbs .current {
      
    }
  </style>
</head>
<body>
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Electronics</a></li>
      <li class="current">Laptop</li>
    </ul>
  </nav>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .breadcrumbs {
      padding: 1rem;
      background: #f3f4f6;
      border-radius: 8px;
    }
    
    .breadcrumbs ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .breadcrumbs a {
      color: #3b82f6;
      text-decoration: none;
      transition: color 0.3s;
    }
    
    .breadcrumbs a:hover {
      color: #2563eb;
      text-decoration: underline;
    }
    
    .breadcrumbs li:not(:last-child)::after {
      content: '/';
      margin: 0 0.5rem;
      color: #6b7280;
    }
    
    .breadcrumbs .current {
      color: #1f2937;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Electronics</a></li>
      <li class="current">Laptop</li>
    </ul>
  </nav>
</body>
</html>`,
    hints: [
      'Flexbox creates horizontal layout for breadcrumbs',
      '::after pseudo-element adds separators automatically',
      ':not(:last-child) excludes separator after last item',
      'content property inserts text like "/" or "›"',
      'pointer-events: none prevents clicking current page',
      'aria-label improves accessibility for screen readers',
      'Use gap for spacing between breadcrumb items'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.breadcrumbs.*{[^}]*padding:\s*1rem/i.test(code), errorMessage: '.breadcrumbs should have padding: 1rem' },
      { name: 'CSS test', test: (code) => /\.breadcrumbs.*{[^}]*(display:\s*flex|gap:\s*0\.5rem)/i.test(code), errorMessage: '.breadcrumbs should use flexbox or have gap' },
      { name: 'CSS test', test: (code) => /\.breadcrumbs\s+a\s*{[^}]*color:\s*#3b82f6/i.test(code), errorMessage: '.breadcrumbs a should have color: #3b82f6' },
      { name: 'CSS test', test: (code) => /\.breadcrumbs\s+a\s*{[^}]*text-decoration:\s*none/i.test(code), errorMessage: '.breadcrumbs a should have text-decoration: none' },
      { name: 'CSS test', test: (code) => /\.breadcrumbs.*::after\s*{[^}]*content/i.test(code), errorMessage: 'Should use ::after for separator with content' },
      { name: 'CSS test', test: (code) => /\.breadcrumbs.*::after\s*{[^}]*color:\s*#6b7280/i.test(code), errorMessage: 'Separator should have color: #6b7280' },
      { name: 'CSS test', test: (code) => /\.current\s*{[^}]*color:\s*#1f2937/i.test(code), errorMessage: '.current should have color: #1f2937' },
      { name: 'CSS test', test: (code) => /\.current\s*{[^}]*font-weight:\s*600/i.test(code), errorMessage: '.current should have font-weight: 600' },
      { name: 'CSS test', test: (code) => /\.breadcrumbs\s+a:hover\s*{[^}]*text-decoration:\s*underline/i.test(code), errorMessage: '.breadcrumbs a:hover should have text-decoration: underline' }
    ]
  },
  {
    id: 'css-37',
    title: 'Badges',
    description: 'Create notification badges and status indicators',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Badges

Badges are small status indicators used to highlight important information, counts, or states. They're common in notifications, tags, and labels throughout modern web interfaces.

## Basic Badge

\`\`\`css
.badge {
  display: inline-block;
  padding: 0.25rem 0.6rem;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1;
  color: white;
  background: #6b7280;
  border-radius: 0.375rem;
  text-align: center;
}
\`\`\`

## Badge Variants

### Primary Badge

\`\`\`css
.badge-primary {
  background: #3b82f6;
}
\`\`\`

### Success Badge

\`\`\`css
.badge-success {
  background: #10b981;
}
\`\`\`

### Warning Badge

\`\`\`css
.badge-warning {
  background: #f59e0b;
  color: #1f2937;
}
\`\`\`

### Danger Badge

\`\`\`css
.badge-danger {
  background: #ef4444;
}
\`\`\`

## Pill Badges

\`\`\`css
.badge-pill {
  border-radius: 10rem;
  padding: 0.25rem 0.8rem;
}
\`\`\`

## Notification Badge

Positioned badge for notifications:

\`\`\`css
.badge-notification {
  position: absolute;
  top: -8px;
  right: -8px;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  border-radius: 10px;
  background: #ef4444;
  color: white;
  font-size: 11px;
  line-height: 20px;
  font-weight: 700;
}
\`\`\`

## Outlined Badge

\`\`\`css
.badge-outlined {
  background: transparent;
  border: 2px solid #3b82f6;
  color: #3b82f6;
}
\`\`\`

## Badge with Icon

\`\`\`css
.badge-icon {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}
\`\`\`

## Dot Badge

Minimal status indicator:

\`\`\`css
.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  display: inline-block;
}
\`\`\`

## Badge Sizes

### Small

\`\`\`css
.badge-sm {
  font-size: 0.625rem;
  padding: 0.125rem 0.4rem;
}
\`\`\`

### Large

\`\`\`css
.badge-lg {
  font-size: 0.875rem;
  padding: 0.375rem 0.75rem;
}
\`\`\`

## Your Task

Create badge components:
- .badge: padding 0.25rem 0.6rem, font-size 0.75rem, font-weight 600
- border-radius 0.375rem, color white
- .badge-primary: background #3b82f6
- .badge-success: background #10b981
- .badge-danger: background #ef4444
- .badge-pill: border-radius 10rem`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* TODO: Base badge styles */
    .badge {
      
    }
    
    /* TODO: Primary badge */
    .badge-primary {
      
    }
    
    /* TODO: Success badge */
    .badge-success {
      
    }
    
    /* TODO: Danger badge */
    .badge-danger {
      
    }
    
    /* TODO: Pill badge */
    .badge-pill {
      
    }
  </style>
</head>
<body>
  <span class="badge badge-primary">Primary</span>
  <span class="badge badge-success">Success</span>
  <span class="badge badge-danger">Danger</span>
  <span class="badge badge-primary badge-pill">99+</span>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .badge {
      display: inline-block;
      padding: 0.25rem 0.6rem;
      font-size: 0.75rem;
      font-weight: 600;
      line-height: 1;
      color: white;
      border-radius: 0.375rem;
      text-align: center;
    }
    
    .badge-primary {
      background: #3b82f6;
    }
    
    .badge-success {
      background: #10b981;
    }
    
    .badge-danger {
      background: #ef4444;
    }
    
    .badge-pill {
      border-radius: 10rem;
      padding: 0.25rem 0.8rem;
    }
  </style>
</head>
<body>
  <span class="badge badge-primary">Primary</span>
  <span class="badge badge-success">Success</span>
  <span class="badge badge-danger">Danger</span>
  <span class="badge badge-primary badge-pill">99+</span>
</body>
</html>`,
    hints: [
      'display: inline-block allows padding on inline elements',
      'Small font-size (0.75rem) keeps badges compact',
      'font-weight: 600 makes text stand out',
      'line-height: 1 prevents extra vertical space',
      'border-radius: 10rem creates perfect pill shape',
      'Use rem units for scalable sizing',
      'Variant classes override background color'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.badge\s*{[^}]*padding:\s*0\.25rem\s+0\.6rem/i.test(code), errorMessage: '.badge should have padding: 0.25rem 0.6rem' },
      { name: 'CSS test', test: (code) => /\.badge\s*{[^}]*font-size:\s*0\.75rem/i.test(code), errorMessage: '.badge should have font-size: 0.75rem' },
      { name: 'CSS test', test: (code) => /\.badge\s*{[^}]*font-weight:\s*600/i.test(code), errorMessage: '.badge should have font-weight: 600' },
      { name: 'CSS test', test: (code) => /\.badge\s*{[^}]*color:\s*white/i.test(code), errorMessage: '.badge should have color: white' },
      { name: 'CSS test', test: (code) => /\.badge\s*{[^}]*border-radius:\s*0\.375rem/i.test(code), errorMessage: '.badge should have border-radius: 0.375rem' },
      { name: 'CSS test', test: (code) => /\.badge-primary\s*{[^}]*background:\s*#3b82f6/i.test(code), errorMessage: '.badge-primary should have background: #3b82f6' },
      { name: 'CSS test', test: (code) => /\.badge-success\s*{[^}]*background:\s*#10b981/i.test(code), errorMessage: '.badge-success should have background: #10b981' },
      { name: 'CSS test', test: (code) => /\.badge-danger\s*{[^}]*background:\s*#ef4444/i.test(code), errorMessage: '.badge-danger should have background: #ef4444' },
      { name: 'CSS test', test: (code) => /\.badge-pill\s*{[^}]*border-radius:\s*10rem/i.test(code), errorMessage: '.badge-pill should have border-radius: 10rem' }
    ]
  },
  {
    id: 'css-38',
    title: 'Tooltips',
    description: 'Create informative tooltips with pure CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 35,
    content: `# Tooltips

Tooltips provide contextual information when users hover over elements. They're essential for improving UX by offering helpful hints without cluttering the interface.

## Basic Tooltip

Using data attributes and pseudo-elements:

\`\`\`css
.tooltip {
  position: relative;
  display: inline-block;
  cursor: help;
}

.tooltip::before {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 0.75rem;
  background: #1f2937;
  color: white;
  font-size: 0.875rem;
  border-radius: 0.375rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
}

.tooltip:hover::before {
  opacity: 1;
}
\`\`\`

## Tooltip Arrow

\`\`\`css
.tooltip::after {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: #1f2937;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip:hover::after {
  opacity: 1;
}
\`\`\`

## Tooltip Positions

### Top Tooltip (Default)

\`\`\`css
.tooltip-top::before {
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
}
\`\`\`

### Bottom Tooltip

\`\`\`css
.tooltip-bottom::before {
  top: 125%;
  bottom: auto;
}

.tooltip-bottom::after {
  bottom: auto;
  top: 100%;
  border-top-color: transparent;
  border-bottom-color: #1f2937;
}
\`\`\`

### Left Tooltip

\`\`\`css
.tooltip-left::before {
  right: 125%;
  left: auto;
  top: 50%;
  bottom: auto;
  transform: translateY(-50%);
}
\`\`\`

### Right Tooltip

\`\`\`css
.tooltip-right::before {
  left: 125%;
  right: auto;
  top: 50%;
  bottom: auto;
  transform: translateY(-50%);
}
\`\`\`

## Tooltip with Animation

\`\`\`css
.tooltip::before {
  opacity: 0;
  transform: translateX(-50%) translateY(10px);
  transition: all 0.3s ease;
}

.tooltip:hover::before {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
\`\`\`

## Colored Tooltips

\`\`\`css
.tooltip-primary::before {
  background: #3b82f6;
}

.tooltip-success::before {
  background: #10b981;
}

.tooltip-danger::before {
  background: #ef4444;
}
\`\`\`

## Your Task

Create a tooltip system:
- .tooltip: position relative, cursor help
- .tooltip::before: content attr(data-tooltip)
- Position: bottom 125%, left 50%, transform translateX(-50%)
- Style: background #1f2937, color white, padding 0.5rem 0.75rem
- border-radius 0.375rem, opacity 0
- .tooltip:hover::before: opacity 1
- Add arrow with ::after pseudo-element`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* TODO: Tooltip container */
    .tooltip {
      
    }
    
    /* TODO: Tooltip text */
    .tooltip::before {
      
    }
    
    /* TODO: Show on hover */
    .tooltip:hover::before {
      
    }
    
    /* TODO: Tooltip arrow */
    .tooltip::after {
      
    }
    
    /* TODO: Show arrow on hover */
    .tooltip:hover::after {
      
    }
  </style>
</head>
<body>
  <p>Hover over the 
    <span class="tooltip" data-tooltip="This is helpful information!">tooltip</span>
    to see more details.
  </p>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .tooltip {
      position: relative;
      display: inline-block;
      cursor: help;
      border-bottom: 1px dashed #6b7280;
    }
    
    .tooltip::before {
      content: attr(data-tooltip);
      position: absolute;
      bottom: 125%;
      left: 50%;
      transform: translateX(-50%);
      padding: 0.5rem 0.75rem;
      background: #1f2937;
      color: white;
      font-size: 0.875rem;
      border-radius: 0.375rem;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s;
      z-index: 1000;
    }
    
    .tooltip:hover::before {
      opacity: 1;
    }
    
    .tooltip::after {
      content: '';
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      border: 6px solid transparent;
      border-top-color: #1f2937;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s;
    }
    
    .tooltip:hover::after {
      opacity: 1;
    }
  </style>
</head>
<body>
  <p>Hover over the 
    <span class="tooltip" data-tooltip="This is helpful information!">tooltip</span>
    to see more details.
  </p>
</body>
</html>`,
    hints: [
      'attr(data-tooltip) pulls content from HTML data attribute',
      'position: relative on container, absolute on tooltip',
      'transform: translateX(-50%) centers tooltip horizontally',
      'white-space: nowrap prevents text wrapping',
      'pointer-events: none prevents tooltip from interfering with hover',
      '::after creates triangle arrow using borders',
      'opacity transition creates smooth fade effect'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.tooltip\s*{[^}]*position:\s*relative/i.test(code), errorMessage: '.tooltip should have position: relative' },
      { name: 'CSS test', test: (code) => /\.tooltip\s*{[^}]*cursor:\s*help/i.test(code), errorMessage: '.tooltip should have cursor: help' },
      { name: 'CSS test', test: (code) => /\.tooltip::before\s*{[^}]*content:\s*attr\(data-tooltip\)/i.test(code), errorMessage: '.tooltip::before should use content: attr(data-tooltip)' },
      { name: 'CSS test', test: (code) => /\.tooltip::before\s*{[^}]*position:\s*absolute/i.test(code), errorMessage: '.tooltip::before should have position: absolute' },
      { name: 'CSS test', test: (code) => /\.tooltip::before\s*{[^}]*background:\s*#1f2937/i.test(code), errorMessage: '.tooltip::before should have background: #1f2937' },
      { name: 'CSS test', test: (code) => /\.tooltip::before\s*{[^}]*color:\s*white/i.test(code), errorMessage: '.tooltip::before should have color: white' },
      { name: 'CSS test', test: (code) => /\.tooltip::before\s*{[^}]*opacity:\s*0/i.test(code), errorMessage: '.tooltip::before should start with opacity: 0' },
      { name: 'CSS test', test: (code) => /\.tooltip:hover::before\s*{[^}]*opacity:\s*1/i.test(code), errorMessage: '.tooltip:hover::before should have opacity: 1' },
      { name: 'CSS test', test: (code) => /\.tooltip::after\s*{[^}]*content/i.test(code), errorMessage: '.tooltip::after should have content for arrow' }
    ]
  },
  {
    id: 'css-39',
    title: 'Modals',
    description: 'Build modal dialogs with pure CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 25,
    content: `# Modals

Modals are dialog boxes that overlay the main content, focusing user attention on specific tasks or information. Master creating accessible, professional modals with CSS.

## Modal Structure

\`\`\`css
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  align-items: center;
  justify-content: center;
}

.modal.active {
  display: flex;
}
\`\`\`

## Modal Content

\`\`\`css
.modal-content {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
  animation: modalFadeIn 0.3s ease;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
\`\`\`

## Modal Header

\`\`\`css
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.5rem;
  color: #1f2937;
}
\`\`\`

## Close Button

\`\`\`css
.modal-close {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6b7280;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: all 0.3s;
}

.modal-close:hover {
  background: #f3f4f6;
  color: #1f2937;
}
\`\`\`

## Modal Body

\`\`\`css
.modal-body {
  margin-bottom: 1.5rem;
  color: #6b7280;
  line-height: 1.6;
}
\`\`\`

## Modal Footer

\`\`\`css
.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}
\`\`\`

## Your Task

Create a modal dialog:
- .modal: position fixed, width 100%, height 100%
- background rgba(0, 0, 0, 0.5), z-index 1000
- display flex, align-items center, justify-content center
- .modal-content: background white, border-radius 12px, padding 2rem
- max-width 500px, box-shadow for depth
- Add animation for smooth appearance`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* TODO: Modal overlay */
    .modal {
      
    }
    
    .modal.active {
      display: flex;
    }
    
    /* TODO: Modal content box */
    .modal-content {
      
    }
    
    /* TODO: Modal header */
    .modal-header {
      
    }
    
    /* TODO: Close button */
    .modal-close {
      
    }
    
    .modal-close:hover {
      
    }
    
    /* TODO: Modal footer */
    .modal-footer {
      
    }
  </style>
</head>
<body>
  <button onclick="document.querySelector('.modal').classList.add('active')">Open Modal</button>
  
  <div class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h2>Modal Title</h2>
        <button class="modal-close" onclick="document.querySelector('.modal').classList.remove('active')">×</button>
      </div>
      <div class="modal-body">
        <p>This is the modal content. You can put any content here.</p>
      </div>
      <div class="modal-footer">
        <button onclick="document.querySelector('.modal').classList.remove('active')">Close</button>
      </div>
    </div>
  </div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1000;
      align-items: center;
      justify-content: center;
    }
    
    .modal.active {
      display: flex;
    }
    
    .modal-content {
      background: white;
      border-radius: 12px;
      padding: 2rem;
      max-width: 500px;
      width: 90%;
      box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
    }
    
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #e5e7eb;
    }
    
    .modal-header h2 {
      margin: 0;
      font-size: 1.5rem;
      color: #1f2937;
    }
    
    .modal-close {
      background: transparent;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #6b7280;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      transition: all 0.3s;
    }
    
    .modal-close:hover {
      background: #f3f4f6;
      color: #1f2937;
    }
    
    .modal-body {
      margin-bottom: 1.5rem;
      color: #6b7280;
      line-height: 1.6;
    }
    
    .modal-footer {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      padding-top: 1rem;
      border-top: 1px solid #e5e7eb;
    }
    
    button {
      padding: 0.5rem 1rem;
      background: #3b82f6;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <button onclick="document.querySelector('.modal').classList.add('active')">Open Modal</button>
  
  <div class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h2>Modal Title</h2>
        <button class="modal-close" onclick="document.querySelector('.modal').classList.remove('active')">×</button>
      </div>
      <div class="modal-body">
        <p>This is the modal content. You can put any content here.</p>
      </div>
      <div class="modal-footer">
        <button onclick="document.querySelector('.modal').classList.remove('active')">Close</button>
      </div>
    </div>
  </div>
</body>
</html>`,
    hints: [
      'position: fixed removes modal from document flow',
      'rgba(0, 0, 0, 0.5) creates semi-transparent backdrop',
      'z-index: 1000 ensures modal appears above other content',
      'Flexbox centers modal: align-items and justify-content center',
      'max-width prevents modal from being too wide',
      'box-shadow creates depth and elevation',
      'display: none hides modal by default'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.modal\s*{[^}]*position:\s*fixed/i.test(code), errorMessage: '.modal should have position: fixed' },
      { name: 'CSS test', test: (code) => /\.modal\s*{[^}]*width:\s*100%/i.test(code), errorMessage: '.modal should have width: 100%' },
      { name: 'CSS test', test: (code) => /\.modal\s*{[^}]*height:\s*100%/i.test(code), errorMessage: '.modal should have height: 100%' },
      { name: 'CSS test', test: (code) => /\.modal\s*{[^}]*background.*rgba/i.test(code), errorMessage: '.modal should have rgba background' },
      { name: 'CSS test', test: (code) => /\.modal\s*{[^}]*z-index:\s*1000/i.test(code), errorMessage: '.modal should have z-index: 1000' },
      { name: 'CSS test', test: (code) => /\.modal-content\s*{[^}]*background:\s*white/i.test(code), errorMessage: '.modal-content should have background: white' },
      { name: 'CSS test', test: (code) => /\.modal-content\s*{[^}]*border-radius:\s*12px/i.test(code), errorMessage: '.modal-content should have border-radius: 12px' },
      { name: 'CSS test', test: (code) => /\.modal-content\s*{[^}]*padding:\s*2rem/i.test(code), errorMessage: '.modal-content should have padding: 2rem' },
      { name: 'CSS test', test: (code) => /\.modal-content\s*{[^}]*max-width:\s*500px/i.test(code), errorMessage: '.modal-content should have max-width: 500px' }
    ]
  },
  {
    id: 'css-40',
    title: 'Accordions',
    description: 'Create expandable accordion components with CSS',
    language: 'html' as const,
    difficulty: 'Intermediate',
    estimatedTime: 30,
    content: `# Accordions

Accordions are collapsible content panels that save space and organize information. Learn to create smooth, accessible accordions using CSS and checkbox hacks.

## Accordion Structure

Using checkbox for pure CSS accordion:

\`\`\`css
.accordion {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
}

.accordion-item {
  border-bottom: 1px solid #e5e7eb;
}

.accordion-item:last-child {
  border-bottom: none;
}
\`\`\`

## Accordion Header

\`\`\`css
.accordion-header {
  background: #f9fafb;
  padding: 1rem 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: #1f2937;
  transition: background 0.3s;
}

.accordion-header:hover {
  background: #f3f4f6;
}
\`\`\`

## Accordion Icon

\`\`\`css
.accordion-icon {
  transition: transform 0.3s;
}

input:checked + .accordion-header .accordion-icon {
  transform: rotate(180deg);
}
\`\`\`

## Accordion Content

\`\`\`css
.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

input:checked ~ .accordion-content {
  max-height: 500px;
}

.accordion-body {
  padding: 1rem 1.5rem;
  color: #6b7280;
  line-height: 1.6;
}
\`\`\`

## Hide Checkbox

\`\`\`css
.accordion input[type="checkbox"] {
  display: none;
}
\`\`\`

## Active State

\`\`\`css
input:checked + .accordion-header {
  background: #eff6ff;
  color: #3b82f6;
}
\`\`\`

## Smooth Animation

\`\`\`css
.accordion-content {
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
\`\`\`

## Your Task

Create an accordion component:
- .accordion: border 1px solid #e5e7eb, border-radius 8px
- .accordion-header: background #f9fafb, padding 1rem 1.5rem
- Use flexbox: justify-content space-between
- .accordion-content: max-height 0, overflow hidden
- input:checked ~ .accordion-content: max-height 500px
- Add transition for smooth expansion`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* TODO: Accordion container */
    .accordion {
      
    }
    
    /* TODO: Hide checkbox */
    .accordion input[type="checkbox"] {
      
    }
    
    /* TODO: Accordion header */
    .accordion-header {
      
    }
    
    .accordion-header:hover {
      
    }
    
    /* TODO: Accordion content (hidden) */
    .accordion-content {
      
    }
    
    /* TODO: Show content when checked */
    input:checked ~ .accordion-content {
      
    }
    
    /* TODO: Rotate icon when checked */
    input:checked + .accordion-header .accordion-icon {
      
    }
  </style>
</head>
<body>
  <div class="accordion">
    <div class="accordion-item">
      <input type="checkbox" id="item1">
      <label for="item1" class="accordion-header">
        <span>Section 1</span>
        <span class="accordion-icon">▼</span>
      </label>
      <div class="accordion-content">
        <div class="accordion-body">
          <p>Content for section 1 goes here.</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .accordion {
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      overflow: hidden;
      max-width: 600px;
    }
    
    .accordion input[type="checkbox"] {
      display: none;
    }
    
    .accordion-item {
      border-bottom: 1px solid #e5e7eb;
    }
    
    .accordion-item:last-child {
      border-bottom: none;
    }
    
    .accordion-header {
      background: #f9fafb;
      padding: 1rem 1.5rem;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 600;
      color: #1f2937;
      transition: background 0.3s;
    }
    
    .accordion-header:hover {
      background: #f3f4f6;
    }
    
    .accordion-icon {
      transition: transform 0.3s;
      font-size: 0.875rem;
    }
    
    .accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }
    
    .accordion-body {
      padding: 1rem 1.5rem;
      color: #6b7280;
      line-height: 1.6;
    }
    
    input:checked ~ .accordion-content {
      max-height: 500px;
    }
    
    input:checked + .accordion-header {
      background: #eff6ff;
      color: #3b82f6;
    }
    
    input:checked + .accordion-header .accordion-icon {
      transform: rotate(180deg);
    }
  </style>
</head>
<body>
  <div class="accordion">
    <div class="accordion-item">
      <input type="checkbox" id="item1">
      <label for="item1" class="accordion-header">
        <span>Section 1</span>
        <span class="accordion-icon">▼</span>
      </label>
      <div class="accordion-content">
        <div class="accordion-body">
          <p>Content for section 1 goes here.</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
    hints: [
      'Checkbox hack: use :checked to control visibility',
      'max-height: 0 hides content, increase to show',
      'overflow: hidden prevents content overflow',
      '~ combinator selects sibling element',
      '+ combinator selects next sibling',
      'transform: rotate(180deg) flips icon',
      'transition on max-height creates smooth animation'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.accordion\s*{[^}]*border.*#e5e7eb/i.test(code), errorMessage: '.accordion should have border' },
      { name: 'CSS test', test: (code) => /\.accordion\s*{[^}]*border-radius:\s*8px/i.test(code), errorMessage: '.accordion should have border-radius: 8px' },
      { name: 'CSS test', test: (code) => /input\[type="checkbox"\]\s*{[^}]*display:\s*none/i.test(code), errorMessage: 'Checkbox should be hidden' },
      { name: 'CSS test', test: (code) => /\.accordion-header\s*{[^}]*background:\s*#f9fafb/i.test(code), errorMessage: '.accordion-header should have background: #f9fafb' },
      { name: 'CSS test', test: (code) => /\.accordion-header\s*{[^}]*padding:\s*1rem\s+1\.5rem/i.test(code), errorMessage: '.accordion-header should have padding: 1rem 1.5rem' },
      { name: 'CSS test', test: (code) => /\.accordion-header\s*{[^}]*display:\s*flex/i.test(code), errorMessage: '.accordion-header should use flexbox' },
      { name: 'CSS test', test: (code) => /\.accordion-content\s*{[^}]*max-height:\s*0/i.test(code), errorMessage: '.accordion-content should start with max-height: 0' },
      { name: 'CSS test', test: (code) => /input:checked.*\.accordion-content\s*{[^}]*max-height:\s*500px/i.test(code), errorMessage: 'Checked state should set max-height: 500px' },
      { name: 'CSS test', test: (code) => /input:checked.*\.accordion-icon\s*{[^}]*transform:\s*rotate\(180deg\)/i.test(code), errorMessage: 'Icon should rotate when checked' }
    ]
  },
  {
    id: 'css-41',
    title: 'Tabs',
    description: 'Build tabbed interfaces with CSS radio buttons',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 35,
    content: `# Tabs

Tabs organize content into separate views, allowing users to switch between different sections without leaving the page. Learn to create professional tab interfaces using CSS.

## Tab Structure

Using radio buttons for pure CSS tabs:

\`\`\`css
.tabs {
  width: 100%;
  max-width: 800px;
}

.tabs input[type="radio"] {
  display: none;
}
\`\`\`

## Tab Navigation

\`\`\`css
.tab-nav {
  display: flex;
  border-bottom: 2px solid #e5e7eb;
  gap: 0.5rem;
}

.tab-label {
  padding: 1rem 1.5rem;
  cursor: pointer;
  color: #6b7280;
  font-weight: 600;
  transition: all 0.3s;
  border-bottom: 3px solid transparent;
  position: relative;
  bottom: -2px;
}

.tab-label:hover {
  color: #3b82f6;
  background: #f9fafb;
}
\`\`\`

## Active Tab

\`\`\`css
input:checked + .tab-label {
  color: #3b82f6;
  border-bottom-color: #3b82f6;
}
\`\`\`

## Tab Content

\`\`\`css
.tab-content {
  display: none;
  padding: 2rem;
  animation: fadeIn 0.3s;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

#tab1:checked ~ .tab-panels #panel1,
#tab2:checked ~ .tab-panels #panel2,
#tab3:checked ~ .tab-panels #panel3 {
  display: block;
}
\`\`\`

## Tab Panel Styling

\`\`\`css
.tab-panels {
  background: white;
  border: 1px solid #e5e7eb;
  border-top: none;
  border-radius: 0 0 8px 8px;
}
\`\`\`

## Vertical Tabs

\`\`\`css
.tabs-vertical {
  display: flex;
}

.tabs-vertical .tab-nav {
  flex-direction: column;
  border-right: 2px solid #e5e7eb;
  border-bottom: none;
}

.tabs-vertical .tab-label {
  border-right: 3px solid transparent;
  border-bottom: none;
}
\`\`\`

## Your Task

Create a tabbed interface:
- Hide radio inputs: display none
- .tab-nav: display flex, border-bottom 2px solid #e5e7eb
- .tab-label: padding 1rem 1.5rem, cursor pointer
- input:checked + .tab-label: color #3b82f6, border-bottom 3px solid #3b82f6
- .tab-content: display none
- Show active tab content using :checked selector`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* TODO: Hide radio inputs */
    .tabs input[type="radio"] {
      
    }
    
    /* TODO: Tab navigation */
    .tab-nav {
      
    }
    
    /* TODO: Tab labels */
    .tab-label {
      
    }
    
    .tab-label:hover {
      
    }
    
    /* TODO: Active tab */
    input:checked + .tab-label {
      
    }
    
    /* TODO: Tab content (hidden) */
    .tab-content {
      
    }
    
    /* TODO: Show active content */
    #tab1:checked ~ .tab-panels #panel1 {
      
    }
    
    #tab2:checked ~ .tab-panels #panel2 {
      
    }
  </style>
</head>
<body>
  <div class="tabs">
    <div class="tab-nav">
      <input type="radio" name="tabs" id="tab1" checked>
      <label for="tab1" class="tab-label">Tab 1</label>
      
      <input type="radio" name="tabs" id="tab2">
      <label for="tab2" class="tab-label">Tab 2</label>
    </div>
    
    <div class="tab-panels">
      <div id="panel1" class="tab-content">Content 1</div>
      <div id="panel2" class="tab-content">Content 2</div>
    </div>
  </div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .tabs {
      max-width: 800px;
    }
    
    .tabs input[type="radio"] {
      display: none;
    }
    
    .tab-nav {
      display: flex;
      border-bottom: 2px solid #e5e7eb;
      gap: 0.5rem;
    }
    
    .tab-label {
      padding: 1rem 1.5rem;
      cursor: pointer;
      color: #6b7280;
      font-weight: 600;
      transition: all 0.3s;
      border-bottom: 3px solid transparent;
      position: relative;
      bottom: -2px;
    }
    
    .tab-label:hover {
      color: #3b82f6;
      background: #f9fafb;
    }
    
    input:checked + .tab-label {
      color: #3b82f6;
      border-bottom-color: #3b82f6;
    }
    
    .tab-panels {
      background: white;
      border: 1px solid #e5e7eb;
      border-top: none;
      border-radius: 0 0 8px 8px;
    }
    
    .tab-content {
      display: none;
      padding: 2rem;
    }
    
    #tab1:checked ~ .tab-panels #panel1 {
      display: block;
    }
    
    #tab2:checked ~ .tab-panels #panel2 {
      display: block;
    }
  </style>
</head>
<body>
  <div class="tabs">
    <div class="tab-nav">
      <input type="radio" name="tabs" id="tab1" checked>
      <label for="tab1" class="tab-label">Tab 1</label>
      
      <input type="radio" name="tabs" id="tab2">
      <label for="tab2" class="tab-label">Tab 2</label>
    </div>
    
    <div class="tab-panels">
      <div id="panel1" class="tab-content">Content for Tab 1</div>
      <div id="panel2" class="tab-content">Content for Tab 2</div>
    </div>
  </div>
</body>
</html>`,
    hints: [
      'Radio buttons ensure only one tab is active at a time',
      'Label elements trigger radio when clicked',
      ':checked pseudo-class detects active tab',
      '~ combinator selects all siblings',
      'position: relative with negative bottom aligns border',
      'display: none hides inactive content',
      'Use same name attribute to group radio buttons'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /input\[type="radio"\]\s*{[^}]*display:\s*none/i.test(code), errorMessage: 'Radio inputs should be hidden' },
      { name: 'CSS test', test: (code) => /\.tab-nav\s*{[^}]*display:\s*flex/i.test(code), errorMessage: '.tab-nav should use flexbox' },
      { name: 'CSS test', test: (code) => /\.tab-nav\s*{[^}]*border-bottom.*#e5e7eb/i.test(code), errorMessage: '.tab-nav should have border-bottom' },
      { name: 'CSS test', test: (code) => /\.tab-label\s*{[^}]*padding:\s*1rem\s+1\.5rem/i.test(code), errorMessage: '.tab-label should have padding: 1rem 1.5rem' },
      { name: 'CSS test', test: (code) => /\.tab-label\s*{[^}]*cursor:\s*pointer/i.test(code), errorMessage: '.tab-label should have cursor: pointer' },
      { name: 'CSS test', test: (code) => /input:checked.*\.tab-label\s*{[^}]*color:\s*#3b82f6/i.test(code), errorMessage: 'Active tab should have color: #3b82f6' },
      { name: 'CSS test', test: (code) => /input:checked.*\.tab-label\s*{[^}]*border-bottom.*#3b82f6/i.test(code), errorMessage: 'Active tab should have border-bottom' },
      { name: 'CSS test', test: (code) => /\.tab-content\s*{[^}]*display:\s*none/i.test(code), errorMessage: '.tab-content should start hidden' },
      { name: 'CSS test', test: (code) => /#tab1:checked.*#panel1.*{[^}]*display:\s*block/i.test(code), errorMessage: 'Should show panel1 when tab1 is checked' }
    ]
  },
  {
    id: 'css-42',
    title: 'Progress Bars',
    description: 'Create animated progress indicators',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 25,
    content: `# Progress Bars

Progress bars visualize completion status, loading states, and quantitative data. Learn to create beautiful, animated progress indicators with CSS.

## Basic Progress Bar

\`\`\`css
.progress-container {
  width: 100%;
  height: 20px;
  background: #e5e7eb;
  border-radius: 10px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: #3b82f6;
  transition: width 0.5s ease;
}
\`\`\`

## Progress with Label

\`\`\`css
.progress-wrapper {
  position: relative;
}

.progress-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
}
\`\`\`

## Striped Progress

\`\`\`css
.progress-striped {
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 20px 20px;
}
\`\`\`

## Animated Stripes

\`\`\`css
.progress-animated {
  animation: progress-stripes 1s linear infinite;
}

@keyframes progress-stripes {
  from { background-position: 0 0; }
  to { background-position: 20px 0; }
}
\`\`\`

## Gradient Progress

\`\`\`css
.progress-gradient {
  background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
}
\`\`\`

## Circular Progress

\`\`\`css
.progress-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: conic-gradient(
    #3b82f6 0% 75%,
    #e5e7eb 75% 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
}

.progress-circle-inner {
  width: 90px;
  height: 90px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
\`\`\`

## Progress Colors

\`\`\`css
.progress-success { background: #10b981; }
.progress-warning { background: #f59e0b; }
.progress-danger { background: #ef4444; }
\`\`\`

## Your Task

Create progress bars:
- .progress-container: width 100%, height 20px
- background #e5e7eb, border-radius 10px, overflow hidden
- .progress-bar: height 100%, background #3b82f6
- transition width 0.5s ease
- Create striped variant with linear-gradient
- Add animation for moving stripes`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* TODO: Progress container */
    .progress-container {
      
    }
    
    /* TODO: Progress bar */
    .progress-bar {
      
    }
    
    /* TODO: Striped progress */
    .progress-striped {
      
    }
    
    /* TODO: Animated stripes */
    .progress-animated {
      
    }
    
    @keyframes progress-stripes {
      
    }
  </style>
</head>
<body>
  <div class="progress-container">
    <div class="progress-bar" style="width: 75%"></div>
  </div>
  
  <br>
  
  <div class="progress-container">
    <div class="progress-bar progress-striped progress-animated" style="width: 60%"></div>
  </div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .progress-container {
      width: 100%;
      height: 20px;
      background: #e5e7eb;
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 1rem;
    }
    
    .progress-bar {
      height: 100%;
      background: #3b82f6;
      transition: width 0.5s ease;
    }
    
    .progress-striped {
      background-image: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.15) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0.15) 75%,
        transparent 75%,
        transparent
      );
      background-size: 20px 20px;
    }
    
    .progress-animated {
      animation: progress-stripes 1s linear infinite;
    }
    
    @keyframes progress-stripes {
      from { background-position: 0 0; }
      to { background-position: 20px 0; }
    }
  </style>
</head>
<body>
  <div class="progress-container">
    <div class="progress-bar" style="width: 75%"></div>
  </div>
  
  <br>
  
  <div class="progress-container">
    <div class="progress-bar progress-striped progress-animated" style="width: 60%"></div>
  </div>
</body>
</html>`,
    hints: [
      'overflow: hidden clips progress bar to container shape',
      'transition on width creates smooth progress animation',
      'linear-gradient at 45deg creates diagonal stripes',
      'background-size controls stripe width',
      'Animating background-position moves stripes',
      'Use inline width style to set progress percentage',
      'border-radius on container creates rounded ends'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.progress-container\s*{[^}]*width:\s*100%/i.test(code), errorMessage: '.progress-container should have width: 100%' },
      { name: 'CSS test', test: (code) => /\.progress-container\s*{[^}]*height:\s*20px/i.test(code), errorMessage: '.progress-container should have height: 20px' },
      { name: 'CSS test', test: (code) => /\.progress-container\s*{[^}]*background:\s*#e5e7eb/i.test(code), errorMessage: '.progress-container should have background: #e5e7eb' },
      { name: 'CSS test', test: (code) => /\.progress-container\s*{[^}]*border-radius:\s*10px/i.test(code), errorMessage: '.progress-container should have border-radius: 10px' },
      { name: 'CSS test', test: (code) => /\.progress-container\s*{[^}]*overflow:\s*hidden/i.test(code), errorMessage: '.progress-container should have overflow: hidden' },
      { name: 'CSS test', test: (code) => /\.progress-bar\s*{[^}]*height:\s*100%/i.test(code), errorMessage: '.progress-bar should have height: 100%' },
      { name: 'CSS test', test: (code) => /\.progress-bar\s*{[^}]*background:\s*#3b82f6/i.test(code), errorMessage: '.progress-bar should have background: #3b82f6' },
      { name: 'CSS test', test: (code) => /\.progress-striped\s*{[^}]*background-image:\s*linear-gradient/i.test(code), errorMessage: '.progress-striped should use linear-gradient' },
      { name: 'CSS test', test: (code) => /@keyframes\s+progress-stripes/i.test(code), errorMessage: 'Should define progress-stripes animation' }
    ]
  },
  {
    id: 'css-43',
    title: 'Loaders',
    description: 'Create animated loading spinners and indicators',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Loaders

Loading indicators improve user experience by providing visual feedback during asynchronous operations. Master creating smooth, professional loading animations with pure CSS.

## Spinner Loader

\`\`\`css
.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #e5e7eb;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
\`\`\`

## Dots Loader

\`\`\`css
.dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 12px;
  height: 12px;
  background: #3b82f6;
  border-radius: 50%;
  animation: bounce 1.4s infinite ease-in-out;
}

.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes bounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}
\`\`\`

## Pulse Loader

\`\`\`css
.pulse {
  width: 50px;
  height: 50px;
  background: #3b82f6;
  border-radius: 50%;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(0.8);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
}
\`\`\`

## Bar Loader

\`\`\`css
.bars {
  display: flex;
  gap: 4px;
  height: 40px;
  align-items: flex-end;
}

.bar {
  width: 6px;
  background: #3b82f6;
  animation: grow 1s ease-in-out infinite;
}

.bar:nth-child(2) { animation-delay: 0.1s; }
.bar:nth-child(3) { animation-delay: 0.2s; }
.bar:nth-child(4) { animation-delay: 0.3s; }

@keyframes grow {
  0%, 100% { height: 20%; }
  50% { height: 100%; }
}
\`\`\`

## Skeleton Loader

\`\`\`css
.skeleton {
  background: linear-gradient(
    90deg,
    #e5e7eb 25%,
    #f3f4f6 50%,
    #e5e7eb 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  to { background-position: -200% 0; }
}
\`\`\`

## Ring Loader

\`\`\`css
.ring {
  width: 50px;
  height: 50px;
  border: 4px solid transparent;
  border-top-color: #3b82f6;
  border-right-color: #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
\`\`\`

## Your Task

Create loading animations:
- .spinner: width 50px, height 50px, border 4px solid #e5e7eb
- border-top-color #3b82f6, border-radius 50%
- animation spin 1s linear infinite
- @keyframes spin: transform rotate(360deg)
- Create dots loader with staggered animation delays
- Use animation-delay for sequence effect`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* TODO: Spinner loader */
    .spinner {
      
    }
    
    @keyframes spin {
      
    }
    
    /* TODO: Dots loader */
    .dots {
      
    }
    
    .dot {
      
    }
    
    .dot:nth-child(2) { animation-delay: 0.2s; }
    .dot:nth-child(3) { animation-delay: 0.4s; }
    
    @keyframes bounce {
      
    }
  </style>
</head>
<body>
  <div class="spinner"></div>
  
  <br><br>
  
  <div class="dots">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .spinner {
      width: 50px;
      height: 50px;
      border: 4px solid #e5e7eb;
      border-top-color: #3b82f6;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    
    .dots {
      display: flex;
      gap: 8px;
    }
    
    .dot {
      width: 12px;
      height: 12px;
      background: #3b82f6;
      border-radius: 50%;
      animation: bounce 1.4s infinite ease-in-out;
    }
    
    .dot:nth-child(2) { animation-delay: 0.2s; }
    .dot:nth-child(3) { animation-delay: 0.4s; }
    
    @keyframes bounce {
      0%, 80%, 100% { transform: scale(0); }
      40% { transform: scale(1); }
    }
  </style>
</head>
<body>
  <div class="spinner"></div>
  
  <br><br>
  
  <div class="dots">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</body>
</html>`,
    hints: [
      'border-top-color creates partial circle for spinner',
      'animation: infinite makes it loop continuously',
      'linear timing function creates smooth rotation',
      ':nth-child targets specific elements',
      'animation-delay staggers the animation',
      'transform: scale creates grow/shrink effect',
      'border-radius: 50% creates perfect circles'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.spinner\s*{[^}]*width:\s*50px/i.test(code), errorMessage: '.spinner should have width: 50px' },
      { name: 'CSS test', test: (code) => /\.spinner\s*{[^}]*height:\s*50px/i.test(code), errorMessage: '.spinner should have height: 50px' },
      { name: 'CSS test', test: (code) => /\.spinner\s*{[^}]*border.*4px.*solid/i.test(code), errorMessage: '.spinner should have 4px solid border' },
      { name: 'CSS test', test: (code) => /\.spinner\s*{[^}]*border-top-color:\s*#3b82f6/i.test(code), errorMessage: '.spinner should have border-top-color: #3b82f6' },
      { name: 'CSS test', test: (code) => /\.spinner\s*{[^}]*border-radius:\s*50%/i.test(code), errorMessage: '.spinner should have border-radius: 50%' },
      { name: 'CSS test', test: (code) => /\.spinner\s*{[^}]*animation.*spin.*infinite/i.test(code), errorMessage: '.spinner should have infinite spin animation' },
      { name: 'CSS test', test: (code) => /@keyframes\s+spin/.test(code) && /transform:\s*rotate\(360deg\)/.test(code), errorMessage: 'spin animation should rotate 360deg' },
      { name: 'CSS test', test: (code) => /\.dot\s*{[^}]*animation.*bounce/i.test(code), errorMessage: '.dot should have bounce animation' },
      { name: 'CSS test', test: (code) => /@keyframes\s+bounce/i.test(code), errorMessage: 'Should define bounce animation' }
    ]
  },
  {
    id: 'css-44',
    title: 'Grid Layouts',
    description: 'Master advanced CSS Grid techniques for complex layouts',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 35,
    content: `# Grid Layouts

CSS Grid is the most powerful layout system. Master Grid to build complex, responsive designs with precise control over rows and columns.

## Basic Grid

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
\`\`\`

## Grid Item Spanning

\`\`\`css
.item-span {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
\`\`\`

## Auto-Fit Responsive

\`\`\`css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
\`\`\`

## Your Task

Create a grid layout:
- .grid: display grid, grid-template-columns repeat(3, 1fr), gap 1.5rem
- .featured: grid-column 1 / 3 (spans 2 columns)
- Create responsive grid with media query for mobile`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* TODO: Grid container */
    .grid {
      
    }
    
    .grid-item {
      background: #e5e7eb;
      padding: 2rem;
      border-radius: 8px;
    }
    
    /* TODO: Featured item */
    .featured {
      
    }
  </style>
</head>
<body>
  <div class="grid">
    <div class="grid-item featured">Featured</div>
    <div class="grid-item">Item 2</div>
    <div class="grid-item">Item 3</div>
  </div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      padding: 2rem;
    }
    
    .grid-item {
      background: #e5e7eb;
      padding: 2rem;
      border-radius: 8px;
      min-height: 150px;
    }
    
    .featured {
      grid-column: 1 / 3;
      background: #3b82f6;
      color: white;
    }
  </style>
</head>
<body>
  <div class="grid">
    <div class="grid-item featured">Featured</div>
    <div class="grid-item">Item 2</div>
    <div class="grid-item">Item 3</div>
  </div>
</body>
</html>`,
    hints: [
      'repeat(3, 1fr) creates 3 equal columns',
      'grid-column: 1 / 3 spans 2 columns',
      'gap creates spacing between grid items',
      '1fr is flexible unit sharing space'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.grid\s*{[^}]*display:\s*grid/i.test(code), errorMessage: '.grid should have display: grid' },
      { name: 'CSS test', test: (code) => /\.grid\s*{[^}]*grid-template-columns:\s*repeat\(3,\s*1fr\)/i.test(code), errorMessage: '.grid should have grid-template-columns: repeat(3, 1fr)' },
      { name: 'CSS test', test: (code) => /\.grid\s*{[^}]*gap:\s*1\.5rem/i.test(code), errorMessage: '.grid should have gap: 1.5rem' },
      { name: 'CSS test', test: (code) => /\.featured\s*{[^}]*grid-column:\s*1\s*\/\s*3/i.test(code), errorMessage: '.featured should span 2 columns' }
    ]
  },
  {
    id: 'css-45',
    title: 'Flexbox Layouts',
    description: 'Master advanced Flexbox techniques for responsive layouts',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 25,
    content: `# Flexbox Layouts

Flexbox excels at one-dimensional layouts, providing powerful alignment and distribution capabilities. Master Flexbox for flexible, responsive designs.

## Flex Container

\`\`\`css
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
\`\`\`

## Flex Direction

\`\`\`css
.flex-column {
  flex-direction: column;
}

.flex-row-reverse {
  flex-direction: row-reverse;
}
\`\`\`

## Flex Wrapping

\`\`\`css
.flex-wrap {
  flex-wrap: wrap;
}
\`\`\`

## Flex Items

\`\`\`css
.flex-grow { flex: 1; }
.flex-shrink { flex-shrink: 0; }
.flex-basis { flex-basis: 200px; }
\`\`\`

## Your Task

Create flexbox layouts:
- .flex: display flex, justify-content space-between
- align-items center, gap 1rem
- .flex-item: flex 1 for equal distribution
- Create responsive flex with wrap`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* TODO: Flex container */
    .flex {
      
    }
    
    /* TODO: Flex items */
    .flex-item {
      background: #e5e7eb;
      padding: 2rem;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <div class="flex">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
    <div class="flex-item">Item 3</div>
  </div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      padding: 2rem;
    }
    
    .flex-item {
      flex: 1;
      background: #e5e7eb;
      padding: 2rem;
      border-radius: 8px;
      min-height: 100px;
    }
  </style>
</head>
<body>
  <div class="flex">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
    <div class="flex-item">Item 3</div>
  </div>
</body>
</html>`,
    hints: [
      'display: flex creates flex container',
      'justify-content: space-between distributes items',
      'align-items: center aligns vertically',
      'flex: 1 makes items grow equally',
      'gap creates spacing between items'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.flex\s*{[^}]*display:\s*flex/i.test(code), errorMessage: '.flex should have display: flex' },
      { name: 'CSS test', test: (code) => /\.flex\s*{[^}]*justify-content:\s*space-between/i.test(code), errorMessage: '.flex should have justify-content: space-between' },
      { name: 'CSS test', test: (code) => /\.flex\s*{[^}]*align-items:\s*center/i.test(code), errorMessage: '.flex should have align-items: center' },
      { name: 'CSS test', test: (code) => /\.flex\s*{[^}]*gap:\s*1rem/i.test(code), errorMessage: '.flex should have gap: 1rem' },
      { name: 'CSS test', test: (code) => /\.flex-item\s*{[^}]*flex:\s*1/i.test(code), errorMessage: '.flex-item should have flex: 1' }
    ]
  },
  {
    id: 'css-46',
    title: 'Multi-column',
    description: 'Create magazine-style multi-column layouts',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 30,
    content: `# Multi-column

CSS multi-column layout creates newspaper/magazine-style columns for text content, automatically flowing content across columns.

## Basic Multi-column

\`\`\`css
.multi-column {
  column-count: 3;
  column-gap: 2rem;
  column-rule: 1px solid #e5e7eb;
}
\`\`\`

## Column Width

\`\`\`css
.column-width {
  column-width: 250px;
}
\`\`\`

## Your Task

Create multi-column layout:
- .multi-column: column-count 3, column-gap 2rem
- column-rule 1px solid #e5e7eb`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* TODO: Multi-column layout */
    .multi-column {
      
    }
  </style>
</head>
<body>
  <div class="multi-column">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .multi-column {
      column-count: 3;
      column-gap: 2rem;
      column-rule: 1px solid #e5e7eb;
    }
  </style>
</head>
<body>
  <div class="multi-column">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
</body>
</html>`,
    hints: [
      'column-count sets number of columns',
      'column-gap creates spacing',
      'column-rule adds separator lines'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.multi-column\s*{[^}]*column-count:\s*3/i.test(code), errorMessage: '.multi-column should have column-count: 3' },
      { name: 'CSS test', test: (code) => /\.multi-column\s*{[^}]*column-gap:\s*2rem/i.test(code), errorMessage: '.multi-column should have column-gap: 2rem' },
      { name: 'CSS test', test: (code) => /\.multi-column\s*{[^}]*column-rule.*#e5e7eb/i.test(code), errorMessage: '.multi-column should have column-rule' }
    ]
  },
  {
    id: 'css-47',
    title: 'Shapes',
    description: 'Create geometric shapes with CSS',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 35,
    content: `# Shapes

CSS can create various geometric shapes without images using borders, clip-path, and creative styling techniques.

## Circle

\`\`\`css
.circle {
  width: 100px;
  height: 100px;
  background: #3b82f6;
  border-radius: 50%;
}
\`\`\`

## Triangle

\`\`\`css
.triangle {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid #3b82f6;
}
\`\`\`

## Your Task

Create CSS shapes:
- .circle: border-radius 50%
- .triangle: use border technique
- .square: width height equal`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* TODO: Circle */
    .circle {
      
    }
    
    /* TODO: Triangle */
    .triangle {
      
    }
  </style>
</head>
<body>
  <div class="circle"></div>
  <div class="triangle"></div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .circle {
      width: 100px;
      height: 100px;
      background: #3b82f6;
      border-radius: 50%;
      margin: 2rem;
    }
    
    .triangle {
      width: 0;
      height: 0;
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      border-bottom: 100px solid #3b82f6;
      margin: 2rem;
    }
  </style>
</head>
<body>
  <div class="circle"></div>
  <div class="triangle"></div>
</body>
</html>`,
    hints: [
      'border-radius: 50% makes perfect circle',
      'Triangle uses transparent borders',
      'Width and height both 0 for triangle'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /\.circle\s*{[^}]*border-radius:\s*50%/i.test(code), errorMessage: '.circle should have border-radius: 50%' },
      { name: 'CSS test', test: (code) => /\.triangle\s*{[^}]*border.*transparent/i.test(code), errorMessage: '.triangle should use transparent borders' }
    ]
  },
  {
    id: 'css-48',
    title: 'Counters',
    description: 'Use CSS counters for automatic numbering',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 25,
    content: `# Counters

CSS counters automatically number elements, useful for ordered lists, sections, and chapters.

## Basic Counter

\`\`\`css
body {
  counter-reset: section;
}

h2::before {
  counter-increment: section;
  content: "Section " counter(section) ": ";
}
\`\`\`

## Your Task

Create CSS counters:
- Reset counter: counter-reset section
- Increment: counter-increment section
- Display: content counter(section)`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* TODO: Reset counter */
    body {
      
    }
    
    /* TODO: Use counter */
    h2::before {
      
    }
  </style>
</head>
<body>
  <h2>Introduction</h2>
  <h2>Main Content</h2>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      counter-reset: section;
    }
    
    h2::before {
      counter-increment: section;
      content: "Section " counter(section) ": ";
      color: #3b82f6;
      font-weight: 700;
      margin-right: 0.5rem;
    }
  </style>
</head>
<body>
  <h2>Introduction</h2>
  <h2>Main Content</h2>
</body>
</html>`,
    hints: [
      'counter-reset initializes counter',
      'counter-increment adds 1',
      'content displays counter value'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /counter-reset:\s*section/i.test(code), errorMessage: 'Should have counter-reset: section' },
      { name: 'CSS test', test: (code) => /counter-increment:\s*section/i.test(code), errorMessage: 'Should have counter-increment: section' },
      { name: 'CSS test', test: (code) => /content.*counter\(section\)/i.test(code), errorMessage: 'Should use counter(section) in content' }
    ]
  },
  {
    id: 'css-49',
    title: 'CSS Best Practices and Optimization',
    description: 'Master CSS best practices, performance optimization, and maintainability',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 35,
    content: `# CSS Best Practices and Optimization

## Introduction
Writing maintainable, performant CSS is crucial for large-scale applications. This lesson covers best practices that professional developers follow.

## Naming Conventions

### BEM (Block Element Modifier)
\`\`\`css
/* Block */
.card {}

/* Element */
.card__title {}
.card__description {}

/* Modifier */
.card--featured {}
.card--large {}
\`\`\`

## Performance Optimization

### 1. Minimize Reflows and Repaints
\`\`\`css
/* BAD - Causes multiple reflows */
.element {
  width: 100px;
  padding: 10px;
  border: 1px solid #000;
}

/* GOOD - Group related properties */
.element {
  /* Positioning */
  position: relative;
  top: 0;
  left: 0;
  
  /* Box Model */
  width: 100px;
  padding: 10px;
  border: 1px solid #000;
  
  /* Visual */
  background: #fff;
  color: #333;
}
\`\`\`

### 2. Use Efficient Selectors
\`\`\`css
/* AVOID - Slow universal selector */
* { margin: 0; }

/* PREFER - Specific selectors */
body, h1, h2, p { margin: 0; }

/* AVOID - Deep nesting */
.nav ul li a span {}

/* PREFER - Flat structure */
.nav-link-text {}
\`\`\`

## Code Organization

### 1. Use CSS Variables for Theming
\`\`\`css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --spacing-unit: 8px;
}

.button {
  background: var(--primary-color);
  padding: calc(var(--spacing-unit) * 2);
}
\`\`\`

### 2. Mobile-First Approach
\`\`\`css
/* Base (mobile) */
.container { width: 100%; }

/* Tablet */
@media (min-width: 768px) {
  .container { width: 750px; }
}

/* Desktop */
@media (min-width: 1200px) {
  .container { width: 1170px; }
}
\`\`\`

## Accessibility Best Practices
- Sufficient color contrast (WCAG AA: 4.5:1 ratio)
- Focus states for interactive elements
- Avoid relying solely on color
- Use rem/em for scalable text

## Your Task
Create a professional card component following best practices:
- Use BEM naming convention
- Include CSS variables for colors
- Implement hover/focus states
- Add media queries for responsiveness
- Group properties logically`,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    :root {
      /* Add CSS variables */
    }
    
    /* Create a card component using BEM */
    
  </style>
</head>
<body>
  <div class="card">
    <h2 class="card__title">Card Title</h2>
    <p class="card__description">Card description text goes here.</p>
    <button class="card__button">Learn More</button>
  </div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    :root {
      --primary-color: #3498db;
      --secondary-color: #2ecc71;
      --text-color: #333;
      --border-radius: 8px;
      --spacing: 16px;
      --shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    /* Card Block */
    .card {
      /* Positioning */
      position: relative;
      
      /* Box Model */
      max-width: 400px;
      margin: var(--spacing);
      padding: var(--spacing);
      border: 1px solid #eee;
      border-radius: var(--border-radius);
      
      /* Visual */
      background: white;
      box-shadow: var(--shadow);
      
      /* Misc */
      transition: transform 0.3s, box-shadow 0.3s;
    }
    
    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    
    /* Card Elements */
    .card__title {
      margin: 0 0 var(--spacing) 0;
      color: var(--text-color);
      font-size: 1.5rem;
    }
    
    .card__description {
      margin: 0 0 var(--spacing) 0;
      color: #666;
      line-height: 1.6;
    }
    
    .card__button {
      /* Box Model */
      padding: 12px 24px;
      border: none;
      border-radius: calc(var(--border-radius) / 2);
      
      /* Visual */
      background: var(--primary-color);
      color: white;
      
      /* Text */
      font-size: 1rem;
      font-weight: 600;
      
      /* Misc */
      cursor: pointer;
      transition: background 0.3s;
    }
    
    .card__button:hover {
      background: #2980b9;
    }
    
    .card__button:focus {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }
    
    /* Modifiers */
    .card--featured {
      border-color: var(--primary-color);
      border-width: 2px;
    }
    
    /* Responsive */
    @media (min-width: 768px) {
      .card {
        max-width: 500px;
      }
    }
  </style>
</head>
<body>
  <div class="card card--featured">
    <h2 class="card__title">Professional Card Component</h2>
    <p class="card__description">This card follows CSS best practices including BEM naming, CSS variables, proper grouping, and accessibility.</p>
    <button class="card__button">Learn More</button>
  </div>
</body>
</html>`,
    hints: [
      'Use :root to define CSS variables for reusable values',
      'Follow BEM naming: block__element--modifier',
      'Group CSS properties logically: positioning, box model, visual, text, misc',
      'Add transition effects for smooth interactions',
      'Include :focus states for accessibility',
      'Use calc() for dynamic spacing calculations',
      'Implement mobile-first media queries'
    ],
    testCases: [
      { name: 'CSS test', test: (code) => /--[\w-]+:/.test(code), errorMessage: 'Must use CSS variables (--variable-name)' },
      { name: 'CSS test', test: (code) => /\.card__[\w-]+/.test(code), errorMessage: 'Must use BEM naming for card elements (card__element)' },
      { name: 'CSS test', test: (code) => /:hover/.test(code), errorMessage: 'Must include hover states' },
      { name: 'CSS test', test: (code) => /:focus/.test(code), errorMessage: 'Must include focus states for accessibility' },
      { name: 'CSS test', test: (code) => /@media/.test(code), errorMessage: 'Must include media queries for responsiveness' },
      { name: 'CSS test', test: (code) => /transition:/.test(code), errorMessage: 'Must use transitions for smooth effects' }
    ]
  },
  {
    id: 'css-50',
    title: 'Fullstack Capstone - Responsive Dashboard',
    description: 'Build a fully responsive admin dashboard with modern CSS',
    language: 'html' as const,
    difficulty: 'Advanced',
    estimatedTime: 120,
    isProject: true,
    content: `# Fullstack Capstone Project - Responsive Dashboard 🎨

## Project Overview
Create a professional, fully responsive admin dashboard using advanced CSS!

## Requirements

### 1. Layout
- CSS Grid for main layout (sidebar + content area)
- Flexbox for component layouts
- Responsive breakpoints (mobile, tablet, desktop)
- Mobile-first design approach

### 2. Components
- **Header**: Logo, navigation, user profile
- **Sidebar**: Menu with icons and labels
- **Cards**: Stats cards with hover effects
- **Tables**: Styled data table with alternating rows
- **Forms**: Styled inputs with validation states
- **Buttons**: Primary, secondary, danger variants

### 3. Advanced CSS
- CSS Variables for theming
- Animations and transitions
- Box shadows and gradients
- Custom scrollbar styling
- Transform effects on hover

### 4. Responsiveness
- Mobile menu (hamburger)
- Collapsible sidebar
- Responsive grid (1 col → 2 col → 3 col)
- Touch-friendly buttons (min 44px)

### 5. Accessibility
- Focus states
- Sufficient color contrast
- Visible focus indicators
- Semantic selectors

## Testing Criteria
1. CSS Grid and Flexbox used
2. CSS Variables defined
3. Responsive design (min 2 breakpoints)
4. Smooth transitions
5. Hover effects
6. Card components
7. Sidebar navigation
8. Professional color scheme`,
    initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Dashboard</title>
  <style>
    /* TODO: CSS Variables for theming */
    :root {
      --primary: #3b82f6;
      --secondary: #10b981;
      --danger: #ef4444;
      --bg: #f3f4f6;
      --card: #ffffff;
      --text: #1f2937;
    }
    
    /* TODO: Reset and base styles */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    /* TODO: Grid layout for dashboard */
    
    /* TODO: Sidebar styles */
    
    /* TODO: Header styles */
    
    /* TODO: Card components */
    
    /* TODO: Responsive design */
    
  </style>
</head>
<body>
  <!-- TODO: Build dashboard structure -->
  <div class="dashboard">
    <aside class="sidebar">
      <!-- Sidebar menu -->
    </aside>
    
    <main class="main-content">
      <header class="header">
        <!-- Header -->
      </header>
      
      <div class="content">
        <!-- Stats cards -->
        <!-- Charts/tables -->
      </div>
    </main>
  </div>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Dashboard</title>
  <style>
    :root {
      --primary: #3b82f6;
      --secondary: #10b981;
      --danger: #ef4444;
      --warning: #f59e0b;
      --bg: #f3f4f6;
      --card: #ffffff;
      --text: #1f2937;
      --text-light: #6b7280;
      --border: #e5e7eb;
      --shadow: 0 1px 3px rgba(0,0,0,0.1);
      --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: var(--bg);
      color: var(--text);
    }
    
    .dashboard {
      display: grid;
      grid-template-columns: 250px 1fr;
      min-height: 100vh;
    }
    
    .sidebar {
      background: var(--card);
      border-right: 1px solid var(--border);
      padding: 1.5rem;
      box-shadow: var(--shadow);
    }
    
    .sidebar h2 {
      color: var(--primary);
      margin-bottom: 2rem;
      font-size: 1.5rem;
    }
    
    .sidebar nav ul {
      list-style: none;
    }
    
    .sidebar nav a {
      display: block;
      padding: 0.75rem 1rem;
      color: var(--text);
      text-decoration: none;
      border-radius: 0.5rem;
      transition: all 0.3s;
      margin-bottom: 0.5rem;
    }
    
    .sidebar nav a:hover {
      background: var(--primary);
      color: white;
      transform: translateX(5px);
    }
    
    .main-content {
      display: flex;
      flex-direction: column;
    }
    
    .header {
      background: var(--card);
      padding: 1.5rem;
      border-bottom: 1px solid var(--border);
      box-shadow: var(--shadow);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .header h1 {
      font-size: 1.5rem;
    }
    
    .user-info {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    .avatar {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
    }
    
    .content {
      padding: 2rem;
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    
    .stat-card {
      background: var(--card);
      padding: 1.5rem;
      border-radius: 0.75rem;
      box-shadow: var(--shadow);
      transition: all 0.3s;
    }
    
    .stat-card:hover {
      box-shadow: var(--shadow-lg);
      transform: translateY(-5px);
    }
    
    .stat-card h3 {
      color: var(--text-light);
      font-size: 0.875rem;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }
    
    .stat-card .value {
      font-size: 2rem;
      font-weight: bold;
      color: var(--text);
    }
    
    .stat-card .change {
      font-size: 0.875rem;
      margin-top: 0.5rem;
    }
    
    .stat-card.positive .change {
      color: var(--secondary);
    }
    
    .stat-card.negative .change {
      color: var(--danger);
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .dashboard {
        grid-template-columns: 1fr;
      }
      
      .sidebar {
        position: fixed;
        transform: translateX(-100%);
        transition: transform 0.3s;
        z-index: 1000;
      }
      
      .sidebar.open {
        transform: translateX(0);
      }
      
      .stats-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="dashboard">
    <aside class="sidebar">
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#analytics">Analytics</a></li>
          <li><a href="#users">Users</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </nav>
    </aside>
    
    <main class="main-content">
      <header class="header">
        <h1>Analytics Overview</h1>
        <div class="user-info">
          <span>Admin User</span>
          <div class="avatar">AU</div>
        </div>
      </header>
      
      <div class="content">
        <div class="stats-grid">
          <div class="stat-card positive">
            <h3>Total Users</h3>
            <div class="value">12,543</div>
            <div class="change">↑ 12% from last month</div>
          </div>
          
          <div class="stat-card positive">
            <h3>Revenue</h3>
            <div class="value">$45,231</div>
            <div class="change">↑ 8% from last month</div>
          </div>
          
          <div class="stat-card negative">
            <h3>Active Sessions</h3>
            <div class="value">2,341</div>
            <div class="change">↓ 3% from last month</div>
          </div>
          
          <div class="stat-card positive">
            <h3>Conversion Rate</h3>
            <div class="value">3.24%</div>
            <div class="change">↑ 1.2% from last month</div>
          </div>
        </div>
      </div>
    </main>
  </div>
</body>
</html>`,
    hints: [
      'Use CSS Grid for dashboard layout: grid-template-columns: 250px 1fr',
      'Define CSS variables in :root for consistent theming',
      'Use Flexbox inside Grid for component layouts',
      'Add transitions to make hover effects smooth',
      'Use transform: translateY(-5px) for card hover lift effect',
      'Media query @media (max-width: 768px) for mobile responsiveness',
      'Box-shadow creates depth: 0 1px 3px rgba(0,0,0,0.1)',
      'Use grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) for responsive cards',
      'Add :hover pseudo-class for interactive elements'
    ],
    testCases: [
      { name: 'Uses CSS Grid', test: (code: string, output: string) => code.includes('display: grid') || code.includes('display:grid'), errorMessage: 'Must use CSS Grid for layout' },
      { name: 'Uses Flexbox', test: (code: string, output: string) => code.includes('display: flex') || code.includes('display:flex'), errorMessage: 'Must use Flexbox for components' },
      { name: 'Has CSS Variables', test: (code: string, output: string) => code.includes(':root') && code.includes('--'), errorMessage: 'Must define CSS variables in :root' },
      { name: 'Has media queries', test: (code: string, output: string) => code.includes('@media'), errorMessage: 'Must include responsive media queries' },
      { name: 'Uses transitions', test: (code: string, output: string) => code.includes('transition'), errorMessage: 'Must use transitions for smooth effects' },
      { name: 'Has hover effects', test: (code: string, output: string) => code.includes(':hover'), errorMessage: 'Must include hover states' },
      { name: 'Has sidebar', test: (code: string, output: string) => code.includes('sidebar') || code.includes('aside'), errorMessage: 'Must have sidebar navigation' },
      { name: 'Has cards', test: (code: string, output: string) => code.includes('card'), errorMessage: 'Must include card components' },
      { name: 'Uses box-shadow', test: (code: string, output: string) => code.includes('box-shadow'), errorMessage: 'Must use box-shadow for depth' },
      { name: 'Has transform effects', test: (code: string, output: string) => code.includes('transform'), errorMessage: 'Must use transform for animations' },
      { name: 'Substantial CSS', test: (code: string, output: string) => (code.match(/[^{}]+\{[^}]+\}/g) || []).length >= 15, errorMessage: 'Must have at least 15 CSS rule sets' }
    ]  }
]
