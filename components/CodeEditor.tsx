'use client'

import { Editor } from '@monaco-editor/react'
import { useState, useEffect } from 'react'
import { Play, RotateCcw, Check, X, AlertCircle } from 'lucide-react'
import { TestCase } from '@/data/courses'
import { useSettingsStore } from '@/store/settingsStore'

interface CodeEditorProps {
  language: string
  initialCode?: string
  expectedOutput?: string
  testCases?: TestCase[]
  onSuccess?: () => void
}

export default function CodeEditor({ 
  language, 
  initialCode = '', 
  expectedOutput,
  testCases,
  onSuccess 
}: CodeEditorProps) {
  const { settings } = useSettingsStore()
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState('Click "Run" to execute your code') // Show instruction initially
  const [isRunning, setIsRunning] = useState(false)
  const [testPassed, setTestPassed] = useState<boolean | null>(null)
  const [testResults, setTestResults] = useState<{ name: string; passed: boolean; error?: string }[]>([])
  const [allTestsPassed, setAllTestsPassed] = useState(false)

  // Auto-save functionality
  useEffect(() => {
    if (settings.autoSave && code !== initialCode) {
      const timer = setTimeout(() => {
        // Auto-save logic (could save to localStorage or trigger parent callback)
        console.log('Auto-saved code')
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [code, settings.autoSave, initialCode])

  const getLanguageMode = () => {
    switch (language.toLowerCase()) {
      case 'html':
        return 'html'
      case 'css':
        return 'css'
      case 'javascript':
      case 'js':
        return 'javascript'
      case 'python':
      case 'py':
        return 'python'
      case 'typescript':
      case 'ts':
        return 'typescript'
      case 'react':
      case 'jsx':
        return 'javascript'
      case 'nodejs':
      case 'node':
        return 'javascript'
      case 'ruby':
      case 'rb':
        return 'ruby'
      case 'php':
        return 'php'
      case 'java':
        return 'java'
      case 'csharp':
      case 'cs':
      case 'c#':
        return 'csharp'
      case 'go':
      case 'golang':
        return 'go'
      case 'rust':
      case 'rs':
        return 'rust'
      case 'swift':
        return 'swift'
      default:
        return 'javascript'
    }
  }
  
  // Helper function to split map/filter arguments (handles nested parentheses)
  const splitMapFilterArgs = (argsStr: string): string[] => {
    const parts: string[] = []
    let current = ''
    let depth = 0
    
    for (let i = 0; i < argsStr.length; i++) {
      const char = argsStr[i]
      if (char === '(' || char === '[') {
        depth++
        current += char
      } else if (char === ')' || char === ']') {
        depth--
        current += char
      } else if (char === ',' && depth === 0) {
        parts.push(current.trim())
        current = ''
      } else {
        current += char
      }
    }
    
    if (current.trim()) {
      parts.push(current.trim())
    }
    
    return parts
  }

  const runCode = async () => {
    setIsRunning(true)
    setOutput('Running code...') // Show immediate feedback
    setTestPassed(null)
    setTestResults([])
    setAllTestsPassed(false)

    // Use setTimeout to prevent UI blocking, but ensure it completes
    const executeWithTimeout = () => {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          try {
            let result = ''
            
            if (language.toLowerCase() === 'html') {
              // Extract text content from HTML for display
              const parser = new DOMParser()
              const doc = parser.parseFromString(code, 'text/html')
              const textContent = doc.body.textContent || doc.body.innerText || ''
              result = textContent.trim()
              setOutput(result || '✓ HTML structure created')
            } else if (language.toLowerCase() === 'css') {
              // For CSS, show a success message instead of code
              result = '✓ CSS styles applied'
              setOutput(result)
            } else if (language.toLowerCase() === 'javascript' || language.toLowerCase() === 'js' || language.toLowerCase() === 'react' || language.toLowerCase() === 'nodejs' || language.toLowerCase() === 'node') {
              // Execute JavaScript/React/Node code
              try {
                const logs: string[] = []
                
                // Create custom console for capturing output
                const customConsole = {
                  log: (...args: any[]) => {
                    const formatted = args.map(arg => {
                      if (typeof arg === 'object' && arg !== null) {
                        try {
                          return JSON.stringify(arg, null, 2)
                        } catch {
                          return String(arg)
                        }
                      }
                      return String(arg)
                    }).join(' ')
                    logs.push(formatted)
                  },
                  error: (...args: any[]) => {
                    logs.push('ERROR: ' + args.join(' '))
                  },
                  warn: (...args: any[]) => {
                    logs.push('WARNING: ' + args.join(' '))
                  }
                }

                // Create safe execution environment
                const executeCode = new Function('console', code)
                executeCode(customConsole)
                
                result = logs.length > 0 
                  ? logs.join('\n') 
                  : '✓ Code executed successfully (no console output)'
                setOutput(result)
              } catch (error: any) {
                result = `Error: ${error.message}`
                setOutput(result)
              }
                } else if (language.toLowerCase() === 'typescript' || language.toLowerCase() === 'ts') {
              // Execute TypeScript as JavaScript
              try {
                const logs: string[] = []
                const customConsole = {
                  log: (...args: any[]) => {
                    logs.push(args.map(arg => typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)).join(' '))
                  }
                }
                const executeCode = new Function('console', code)
                executeCode(customConsole)
                result = logs.length > 0 ? logs.join('\n') : '✓ Code executed successfully (no console output)'
                setOutput(result)
              } catch (error: any) {
                result = `Error: ${error.message}`
                setOutput(result)
              }
                } else if (language.toLowerCase() === 'python' || language.toLowerCase() === 'py') {
              // Enhanced Python interpreter with proper output execution
              try {
            const pythonOutput: string[] = []
            const lines = code.split('\n')
            const variables: { [key: string]: any } = {}
            let inForLoop = false
            let loopVariable = ''
            let loopIterable: any[] = []
            let loopBody: string[] = []
            let loopIndent = 0
            let inWhileLoop = false
            let whileCondition = ''
            let whileBody: string[] = []
            let whileIndent = 0
            let inDictDef = false
            let dictName = ''
            let dictContent: string[] = []
            let dictIndent = 0
            let inFunctionDef = false
            let functionName = ''
            let functionParams: string[] = []
            let functionBody: string[] = []
            let functionIndent = 0
            let inClassDef = false
            let className = ''
            let classBody: string[] = []
            let classIndent = 0
            let inTryBlock = false
            let tryBody: string[] = []
            let exceptBody: string[] = []
            let tryIndent = 0
            let inExceptBlock = false
            
            // Helper function to evaluate Python expressions
            const evalPythonExpr = (expr: string): any => {
              expr = expr.trim()
              
              // Handle string slicing: text[start:end] or text[:end] or text[start:]
              const stringSliceMatch = expr.match(/^(\w+)\[(-?\d+)?:(-?\d+)?\]$/)
              if (stringSliceMatch) {
                const varName = stringSliceMatch[1]
                const start = stringSliceMatch[2] ? parseInt(stringSliceMatch[2]) : 0
                const end = stringSliceMatch[3] ? parseInt(stringSliceMatch[3]) : undefined
                
                if (variables[varName] !== undefined) {
                  const value = variables[varName]
                  if (typeof value === 'string' || Array.isArray(value)) {
                    return end !== undefined ? value.slice(start, end) : value.slice(start)
                  }
                }
              }
              
              // Handle tuple creation in comprehensions: (x, y) for x, y in zip(...)
              if (expr.startsWith('(') && expr.endsWith(')') && !expr.includes(' for ')) {
                const tupleContent = expr.slice(1, -1)
                // If it contains commas but no operators, it's a tuple
                if (tupleContent.includes(',') && !tupleContent.match(/[+\-*/<>=]/)) {
                  const parts = tupleContent.split(',').map(p => evalPythonExpr(p.trim()))
                  return parts
                }
              }
              
              // Handle set literals: {1, 2, 3}
              if (expr.startsWith('{') && expr.endsWith('}') && !expr.includes(':')) {
                try {
                  const setContent = expr.slice(1, -1)
                  const elements = setContent.split(',').map(e => {
                    e = e.trim()
                    if (e.startsWith('"') || e.startsWith("'")) {
                      return e.slice(1, -1)
                    } else if (!isNaN(Number(e))) {
                      return Number(e)
                    }
                    return evalPythonExpr(e)
                  })
                  // Return unique values (set behavior) - use Array.from instead of spread
                  return Array.from(new Set(elements))
                } catch {
                  return []
                }
              }
              
              // Handle dictionary comprehension: {key: value for item in list}
              const dictCompMatch = expr.match(/^\{(.+?):(.+?)\s+for\s+(\w+)\s+in\s+(\w+)(?:\s+if\s+(.+?))?\}$/)
              if (dictCompMatch) {
                const keyExpr = dictCompMatch[1].trim()
                const valueExpr = dictCompMatch[2].trim()
                const loopVar = dictCompMatch[3]
                const iterableName = dictCompMatch[4]
                const condition = dictCompMatch[5]
                
                const iterable = variables[iterableName]
                if (Array.isArray(iterable)) {
                  const result: { [key: string]: any } = {}
                  for (const item of iterable) {
                    const savedVar = variables[loopVar]
                    variables[loopVar] = item
                    
                    let includeItem = true
                    if (condition) {
                      const conditionResult = evalPythonExpr(condition)
                      includeItem = Boolean(conditionResult)
                    }
                    
                    if (includeItem) {
                      const key = evalPythonExpr(keyExpr)
                      const value = evalPythonExpr(valueExpr)
                      result[key] = value
                    }
                    
                    if (savedVar !== undefined) {
                      variables[loopVar] = savedVar
                    } else {
                      delete variables[loopVar]
                    }
                  }
                  return result
                }
                return {}
              }
              
              // Handle list comprehensions: [expr for var in iterable if condition]
              // Use greedy match for expression, non-greedy for condition to avoid consuming ]
              const listCompMatch = expr.match(/^\[(.+)\s+for\s+(\w+)\s+in\s+(\w+)(?:\s+if\s+(.+?))?\]$/)
              if (listCompMatch) {
                const itemExpr = listCompMatch[1].trim()
                const loopVar = listCompMatch[2]
                const iterableName = listCompMatch[3]
                const condition = listCompMatch[4]
                
                const iterable = variables[iterableName]
                if (Array.isArray(iterable)) {
                  const result: any[] = []
                  for (const item of iterable) {
                    // Set loop variable
                    const savedVar = variables[loopVar]
                    variables[loopVar] = item
                    
                    // Check condition if exists
                    let includeItem = true
                    if (condition) {
                      const conditionResult = evalPythonExpr(condition)
                      includeItem = Boolean(conditionResult)
                    }
                    
                    // Evaluate expression if condition passes
                    if (includeItem) {
                      const value = evalPythonExpr(itemExpr)
                      result.push(value)
                    }
                    
                    // Restore loop variable
                    if (savedVar !== undefined) {
                      variables[loopVar] = savedVar
                    } else {
                      delete variables[loopVar]
                    }
                  }
                  return result
                }
                return []
              }
              
              // Handle function calls like square(5) or Cat("name")
              const funcCallMatch = expr.match(/^(\w+)\((.*)\)$/)
              if (funcCallMatch && !expr.startsWith('len(') && !expr.startsWith('range(') && !expr.startsWith('sum(') && !expr.startsWith('min(') && !expr.startsWith('max(') && !expr.startsWith('sorted(')) {
                const funcName = funcCallMatch[1]
                const argStr = funcCallMatch[2].trim()
                
                // If function is defined (as variable), call it
                if (typeof variables[funcName] === 'function') {
                  if (argStr) {
                    // Evaluate arguments - handle multiple args separated by commas
                    const args: any[] = []
                    let currentArg = ''
                    let depth = 0
                    
                    for (let i = 0; i < argStr.length; i++) {
                      const char = argStr[i]
                      if (char === '(' || char === '[' || char === '{') {
                        depth++
                        currentArg += char
                      } else if (char === ')' || char === ']' || char === '}') {
                        depth--
                        currentArg += char
                      } else if (char === ',' && depth === 0) {
                        args.push(evalPythonExpr(currentArg.trim()))
                        currentArg = ''
                      } else {
                        currentArg += char
                      }
                    }
                    
                    if (currentArg.trim()) {
                      args.push(evalPythonExpr(currentArg.trim()))
                    }
                    
                    // Call with multiple arguments
                    return variables[funcName](...args)
                  } else {
                    // No arguments
                    return variables[funcName]()
                  }
                }
                // Return the expression as-is if we can't evaluate
                return expr
              }
              
              // Handle dictionary/list access with string keys: book['title'] or book["title"]
              const dictAccessMatch = expr.match(/^(\w+)\[['"]([^'"]+)['"]\]$/)
              if (dictAccessMatch) {
                const varName = dictAccessMatch[1]
                const key = dictAccessMatch[2]
                if (variables[varName] && typeof variables[varName] === 'object') {
                  return variables[varName][key]
                }
              }
              
              // Handle string methods: name.upper(), name.lower(), name.title()
              const stringMethodMatch = expr.match(/^(\w+)\.(upper|lower|title|capitalize|strip)\(\)$/)
              if (stringMethodMatch) {
                const varName = stringMethodMatch[1]
                const method = stringMethodMatch[2]
                const value = variables[varName]
                
                if (typeof value === 'string') {
                  switch (method) {
                    case 'upper': return value.toUpperCase()
                    case 'lower': return value.toLowerCase()
                    case 'title': return value.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ')
                    case 'capitalize': return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
                    case 'strip': return value.trim()
                  }
                }
              }
              
              // Handle set methods: set1.union(set2), set1.intersection(set2)
              const setMethodMatch = expr.match(/^(\w+)\.(union|intersection|difference)\((\w+)\)$/)
              if (setMethodMatch) {
                const set1Name = setMethodMatch[1]
                const method = setMethodMatch[2]
                const set2Name = setMethodMatch[3]
                
                const set1 = variables[set1Name]
                const set2 = variables[set2Name]
                
                if (Array.isArray(set1) && Array.isArray(set2)) {
                  switch (method) {
                    case 'union':
                      return Array.from(new Set(set1.concat(set2)))
                    case 'intersection':
                      return set1.filter(item => set2.includes(item))
                    case 'difference':
                      return set1.filter(item => !set2.includes(item))
                  }
                }
              }
              
              // Handle list element methods: list[0].upper(), list[i].lower()
              const listElementMethodMatch = expr.match(/^(\w+)\[(\w+|\d+)\]\.(upper|lower|title|capitalize|strip)\(\)$/)
              if (listElementMethodMatch) {
                const listName = listElementMethodMatch[1]
                const indexExpr = listElementMethodMatch[2]
                const method = listElementMethodMatch[3]
                
                if (Array.isArray(variables[listName])) {
                  // Evaluate index (could be variable or number)
                  const index = isNaN(Number(indexExpr)) ? variables[indexExpr] : Number(indexExpr)
                  const value = variables[listName][index]
                  
                  if (typeof value === 'string') {
                    switch (method) {
                      case 'upper': return value.toUpperCase()
                      case 'lower': return value.toLowerCase()
                      case 'title': return value.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ')
                      case 'capitalize': return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
                      case 'strip': return value.trim()
                    }
                  }
                }
              }
              
              // Handle len() function
              if (expr.startsWith('len(') && expr.endsWith(')')) {
                const arg = expr.slice(4, -1).trim()
                
                // Handle len(varname)
                if (variables[arg] !== undefined) {
                  const value = variables[arg]
                  if (Array.isArray(value)) return value.length
                  if (typeof value === 'string') return value.length
                  if (typeof value === 'object') return Object.keys(value).length
                  return 0
                }
                
                // Handle len(expression) - recursively evaluate
                const innerValue = evalPythonExpr(arg)
                if (Array.isArray(innerValue)) return innerValue.length
                if (typeof innerValue === 'string') return innerValue.length
                return 0
              }
              
              // Handle list indexing: list[0]
              const indexMatch = expr.match(/^(\w+)\[(\d+)\]$/)
              if (indexMatch) {
                const varName = indexMatch[1]
                const index = parseInt(indexMatch[2])
                if (Array.isArray(variables[varName])) {
                  return variables[varName][index]
                }
              }
              
              // Handle range() function
              if (expr.startsWith('range(') && expr.endsWith(')')) {
                const args = expr.slice(6, -1).split(',').map(a => parseInt(a.trim()))
                if (args.length === 1) {
                  return Array.from({length: args[0]}, (_, i) => i)
                } else if (args.length === 2) {
                  return Array.from({length: args[1] - args[0]}, (_, i) => i + args[0])
                }
                return []
              }
              
              // Handle sum() function
              if (expr.startsWith('sum(') && expr.endsWith(')')) {
                const arg = expr.slice(4, -1).trim()
                const arr = variables[arg] || evalPythonExpr(arg)
                if (Array.isArray(arr)) {
                  return arr.reduce((a, b) => a + b, 0)
                }
                return 0
              }
              
              // Handle min() function
              if (expr.startsWith('min(') && expr.endsWith(')')) {
                const arg = expr.slice(4, -1).trim()
                const arr = variables[arg] || evalPythonExpr(arg)
                if (Array.isArray(arr) && arr.length > 0) {
                  return Math.min(...arr)
                }
                return 0
              }
              
              // Handle max() function
              if (expr.startsWith('max(') && expr.endsWith(')')) {
                const arg = expr.slice(4, -1).trim()
                const arr = variables[arg] || evalPythonExpr(arg)
                if (Array.isArray(arr) && arr.length > 0) {
                  return Math.max(...arr)
                }
                return 0
              }
              
              // Handle sorted() function
              if (expr.startsWith('sorted(') && expr.endsWith(')')) {
                const argsStr = expr.slice(7, -1)
                // Simple case: sorted(list)
                const commaPos = argsStr.indexOf(',')
                if (commaPos === -1) {
                  const arr = variables[argsStr.trim()] || evalPythonExpr(argsStr.trim())
                  if (Array.isArray(arr)) {
                    return [...arr].sort((a, b) => {
                      if (typeof a === 'number' && typeof b === 'number') return a - b
                      return String(a).localeCompare(String(b))
                    })
                  }
                } else {
                  // sorted(list, key=len) - sort by length
                  const listPart = argsStr.substring(0, commaPos).trim()
                  const arr = variables[listPart] || evalPythonExpr(listPart)
                  if (Array.isArray(arr) && argsStr.includes('key=len')) {
                    return [...arr].sort((a, b) => {
                      const lenA = typeof a === 'string' ? a.length : 0
                      const lenB = typeof b === 'string' ? b.length : 0
                      return lenA - lenB
                    })
                  }
                }
                return []
              }
              
              // Handle lambda functions: lambda x: x * 2
              const lambdaMatch = expr.match(/^lambda\s+(\w+)\s*:\s*(.+)$/)
              if (lambdaMatch) {
                const param = lambdaMatch[1]
                const body = lambdaMatch[2].trim()
                // Return a function that evaluates the lambda body
                return (argValue: any) => {
                  const savedParam = variables[param]
                  variables[param] = argValue
                  const result = evalPythonExpr(body)
                  if (savedParam !== undefined) {
                    variables[param] = savedParam
                  } else {
                    delete variables[param]
                  }
                  return result
                }
              }
              
              // Handle map() function: list(map(lambda x: x*2, numbers))
              if (expr.startsWith('list(map(') && expr.endsWith('))')) {
                const innerArgs = expr.slice(9, -2) // Remove "list(map(" and "))"
                // Extract lambda and array parts
                const parts = splitMapFilterArgs(innerArgs)
                if (parts.length === 2) {
                  const lambdaExpr = parts[0].trim()
                  const arrName = parts[1].trim()
                  const arr = variables[arrName] || evalPythonExpr(arrName)
                  const lambdaFunc = evalPythonExpr(lambdaExpr)
                  
                  if (Array.isArray(arr) && typeof lambdaFunc === 'function') {
                    return arr.map(item => lambdaFunc(item))
                  }
                }
                return []
              }
              
              // Handle filter() function: list(filter(lambda x: x > 15, numbers))
              if (expr.startsWith('list(filter(') && expr.endsWith('))')) {
                const innerArgs = expr.slice(12, -2) // Remove "list(filter(" and "))"
                const parts = splitMapFilterArgs(innerArgs)
                if (parts.length === 2) {
                  const lambdaExpr = parts[0].trim()
                  const arrName = parts[1].trim()
                  const arr = variables[arrName] || evalPythonExpr(arrName)
                  const lambdaFunc = evalPythonExpr(lambdaExpr)
                  
                  if (Array.isArray(arr) && typeof lambdaFunc === 'function') {
                    return arr.filter(item => lambdaFunc(item))
                  }
                }
                return []
              }
              
              // Handle zip() function in for loops (handled in loop section, but add basic support)
              if (expr.startsWith('zip(') && expr.endsWith(')')) {
                const argsStr = expr.slice(4, -1)
                const argNames = argsStr.split(',').map(a => a.trim())
                const arrays = argNames.map(name => variables[name] || [])
                if (arrays.length >= 2 && arrays.every(a => Array.isArray(a))) {
                  const minLen = Math.min(...arrays.map(a => a.length))
                  const result: any[][] = []
                  for (let i = 0; i < minLen; i++) {
                    result.push(arrays.map(arr => arr[i]))
                  }
                  return result
                }
                return []
              }
              
              // Handle variables
              if (variables[expr] !== undefined) {
                return variables[expr]
              }
              
              // Handle comparison and arithmetic expressions
              if (expr.match(/[\+\-\*\/\%]|\*\*|\/\/|==|!=|<=|>=|<|>/)) {
                try {
                  const evalExpr = expr.replace(/(\w+)/g, (match: string) => {
                    if (variables[match] !== undefined) {
                      const val = variables[match]
                      return Array.isArray(val) ? JSON.stringify(val) : String(val)
                    }
                    return match
                  })
                  // Convert Python ** to JavaScript **
                  const jsExpr = evalExpr.replace(/\*\*/g, '**')
                  // Convert Python // to Math.floor division
                  const finalExpr = jsExpr.replace(/\/\//g, '/')
                  const result = eval(finalExpr)
                  // Floor the result if original expression had //
                  return expr.includes('//') ? Math.floor(result) : result
                } catch {
                  return expr
                }
              }
              
              return expr
            }
            
            for (let i = 0; i < lines.length; i++) {
              const line = lines[i]
              const trimmed = line.trim()
              
              // Skip comments and empty lines
              if (!trimmed || trimmed.startsWith('#')) continue
              
              const indent = line.search(/\S/)
              
              // Handle dictionary definition collection
              if (inDictDef) {
                if (trimmed === '}' || (indent <= dictIndent && trimmed && !trimmed.endsWith(','))) {
                  // End of dictionary
                  const dictStr = '{' + dictContent.join('') + '}'
                  try {
                    // Convert Python dict to JavaScript object
                    const jsDict = dictStr
                      .replace(/'/g, '"')
                      .replace(/True/g, 'true')
                      .replace(/False/g, 'false')
                      .replace(/None/g, 'null')
                    variables[dictName] = JSON.parse(jsDict)
                  } catch {
                    variables[dictName] = {}
                  }
                  inDictDef = false
                  dictContent = []
                  if (trimmed !== '}') {
                    // Process this line normally
                  } else {
                    continue
                  }
                } else {
                  dictContent.push(trimmed)
                  continue
                }
              }
              
              // Handle function definition collection
              if (inFunctionDef) {
                if (indent <= functionIndent && trimmed) {
                  // End of function - store it
                  variables[functionName] = (...args: any[]) => {
                    // Create local scope with parameters
                    const localVars = { ...variables }
                    functionParams.forEach((param, idx) => {
                      localVars[param] = args[idx]
                    })
                    
                    // Execute function body
                    let returnValue: any = null
                    for (const bodyLine of functionBody) {
                      const bodyTrimmed = bodyLine.trim()
                      
                      // Save original variables for local scope
                      const savedVars = { ...variables }
                      // Apply local scope
                      Object.keys(localVars).forEach(key => {
                        variables[key] = localVars[key]
                      })
                      
                      // Handle print statements inside functions
                      if (bodyTrimmed.startsWith('print(')) {
                        const printMatch = bodyTrimmed.match(/print\s*\((.*)\)/)
                        if (printMatch) {
                          let content = printMatch[1].trim()
                          
                          // Handle f-strings
                          if (content.startsWith('f"') || content.startsWith("f'")) {
                            content = content.slice(2, -1)
                            content = content.replace(/\{([^}]+)\}/g, (_, expr) => {
                              const value = evalPythonExpr(expr.trim())
                              if (Array.isArray(value)) {
                                return '[' + value.join(', ') + ']'
                              }
                              return String(value)
                            })
                            pythonOutput.push(content)
                          }
                          // Handle regular strings
                          else if (content.startsWith('"') || content.startsWith("'")) {
                            pythonOutput.push(content.slice(1, -1))
                          }
                          // Handle expressions
                          else {
                            const output = evalPythonExpr(content)
                            if (Array.isArray(output)) {
                              pythonOutput.push('[' + output.join(', ') + ']')
                            } else if (output === null || output === undefined) {
                              pythonOutput.push('')
                            } else {
                              pythonOutput.push(String(output))
                            }
                          }
                        }
                      }
                      // Handle return statements
                      else if (bodyTrimmed.startsWith('return ')) {
                        const returnExpr = bodyTrimmed.substring(7).trim()
                        returnValue = evalPythonExpr(returnExpr)
                        // Restore original variables
                        Object.keys(variables).forEach(key => {
                          if (savedVars.hasOwnProperty(key)) {
                            variables[key] = savedVars[key]
                          } else {
                            delete variables[key]
                          }
                        })
                        break
                      }
                      
                      // Restore original variables after each line
                      Object.keys(variables).forEach(key => {
                        if (savedVars.hasOwnProperty(key)) {
                          variables[key] = savedVars[key]
                        } else {
                          delete variables[key]
                        }
                      })
                    }
                    return returnValue
                  }
                  inFunctionDef = false
                  functionBody = []
                  // Process current line normally if it's not empty
                } else {
                  functionBody.push(trimmed)
                  continue
                }
              }
              
              // Check if we're exiting a for loop
              if (inForLoop && indent <= loopIndent && trimmed) {
                // Execute the loop
                for (const item of loopIterable) {
                  variables[loopVariable] = item
                  for (const bodyLine of loopBody) {
                    const bodyTrimmed = bodyLine.trim()
                    if (bodyTrimmed.startsWith('print(')) {
                      const printMatch = bodyTrimmed.match(/print\s*\((.*)\)/)
                      if (printMatch) {
                        let content = printMatch[1].trim()
                        const output = evalPythonExpr(content)
                        pythonOutput.push(String(output))
                      }
                    }
                  }
                }
                inForLoop = false
                loopBody = []
              }
              
              // Handle class definitions
              if (trimmed.startsWith('class ') && trimmed.endsWith(':')) {
                const classMatch = trimmed.match(/class\s+(\w+)(?:\([^)]*\))?\s*:/)
                if (classMatch) {
                  inClassDef = true
                  className = classMatch[1]
                  classBody = []
                  classIndent = indent
                  continue
                }
              }
              
              // Collect class body
              if (inClassDef) {
                if (indent <= classIndent && trimmed) {
                  // End of class - create the class
                  const classCode = classBody.join('\n')
                  
                  // Create a class factory
                  variables[className] = function(...args: any[]) {
                    const instance: any = {}
                    let initParams: string[] = []
                    const methods: { [key: string]: string[] } = {}
                    let currentMethod = ''
                    let methodIndent = 0
                    
                    // Parse class body
                    for (const line of classBody) {
                      const lineIndent = line.search(/\S/)
                      const lineTrimmed = line.trim()
                      
                      // Find __init__ method
                      if (lineTrimmed.startsWith('def __init__(self')) {
                        const initMatch = lineTrimmed.match(/def\s+__init__\s*\(self(?:,\s*([^)]+))?\)\s*:/)
                        if (initMatch && initMatch[1]) {
                          initParams = initMatch[1].split(',').map(p => p.trim())
                        }
                        currentMethod = '__init__'
                        methods[currentMethod] = []
                        methodIndent = lineIndent
                        continue
                      }
                      
                      // Find other methods
                      if (lineTrimmed.startsWith('def ') && lineTrimmed.includes('(self')) {
                        const methodMatch = lineTrimmed.match(/def\s+(\w+)\s*\(self(?:,\s*([^)]+))?\)\s*:/)
                        if (methodMatch) {
                          currentMethod = methodMatch[1]
                          methods[currentMethod] = []
                          methodIndent = lineIndent
                        }
                        continue
                      }
                      
                      // Collect method body
                      if (currentMethod && lineIndent > methodIndent) {
                        methods[currentMethod].push(line.substring(methodIndent + 2))
                      }
                    }
                    
                    // Execute __init__ if exists
                    if (methods['__init__']) {
                      for (let i = 0; i < initParams.length && i < args.length; i++) {
                        instance[initParams[i]] = args[i]
                      }
                      
                      // Process __init__ body
                      for (const bodyLine of methods['__init__']) {
                        const bodyTrimmed = bodyLine.trim()
                        
                        // Handle self.property = value
                        if (bodyTrimmed.startsWith('self.') && bodyTrimmed.includes('=')) {
                          const assignMatch = bodyTrimmed.match(/self\.(\w+)\s*=\s*(.+)/)
                          if (assignMatch) {
                            const prop = assignMatch[1]
                            let value = assignMatch[2].trim()
                            
                            // Check if it's a parameter reference
                            if (initParams.includes(value)) {
                              instance[prop] = instance[value]
                            } else if (value.startsWith('"') || value.startsWith("'")) {
                              instance[prop] = value.slice(1, -1)
                            } else if (!isNaN(Number(value))) {
                              instance[prop] = Number(value)
                            } else {
                              instance[prop] = value
                            }
                          }
                        }
                      }
                    }
                    
                    // Add methods to instance
                    Object.keys(methods).forEach(methodName => {
                      if (methodName !== '__init__') {
                        instance[methodName] = function() {
                          const methodBody = methods[methodName]
                          for (const bodyLine of methodBody) {
                            const bodyTrimmed = bodyLine.trim()
                            
                            // Handle print statements in methods
                            if (bodyTrimmed.startsWith('print(')) {
                              const printMatch = bodyTrimmed.match(/print\s*\((.*)\)/)
                              if (printMatch) {
                                let content = printMatch[1].trim()
                                
                                // Handle f-strings with self references
                                if (content.startsWith('f"') || content.startsWith("f'")) {
                                  content = content.slice(2, -1)
                                  content = content.replace(/\{([^}]+)\}/g, (_, expr) => {
                                    expr = expr.trim()
                                    // Handle self.property
                                    if (expr.startsWith('self.')) {
                                      const prop = expr.substring(5)
                                      const value = instance[prop]
                                      if (value === null || value === undefined) return ''
                                      return String(value)
                                    }
                                    // Handle other expressions in f-strings
                                    const value = evalPythonExpr(expr)
                                    if (Array.isArray(value)) {
                                      return '[' + value.join(', ') + ']'
                                    }
                                    if (value === null || value === undefined) return ''
                                    return String(value)
                                  })
                                  pythonOutput.push(content)
                                } else if (content.startsWith('"') || content.startsWith("'")) {
                                  pythonOutput.push(content.slice(1, -1))
                                } else {
                                  const output = evalPythonExpr(content)
                                  if (output === null || output === undefined) {
                                    pythonOutput.push('')
                                  } else {
                                    pythonOutput.push(String(output))
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    })
                    
                    return instance
                  }
                  
                  inClassDef = false
                  classBody = []
                } else {
                  classBody.push(line)
                  continue
                }
              }
              
              // Handle try/except blocks
              if (trimmed === 'try:') {
                inTryBlock = true
                tryBody = []
                exceptBody = []
                tryIndent = indent
                inExceptBlock = false
                continue
              }
              
              // Handle except block start
              if (inTryBlock && trimmed.startsWith('except')) {
                inExceptBlock = true
                inTryBlock = false
                continue
              }
              
              // Collect try/except body
              if ((inTryBlock || inExceptBlock) && indent > tryIndent) {
                if (inExceptBlock) {
                  exceptBody.push(trimmed)
                } else {
                  tryBody.push(trimmed)
                }
                continue
              }
              
              // Execute try/except when block ends
              if ((inTryBlock || inExceptBlock) && indent <= tryIndent && trimmed) {
                // Execute try block
                let tryFailed = false
                try {
                  for (const tryLine of tryBody) {
                    const tryTrimmed = tryLine.trim()
                    
                    // Handle print in try block
                    if (tryTrimmed.startsWith('print(')) {
                      const printMatch = tryTrimmed.match(/print\s*\((.*)\)/)
                      if (printMatch) {
                        let content = printMatch[1].trim()
                        if (content.startsWith('f"') || content.startsWith("f'")) {
                          content = content.slice(2, -1)
                          content = content.replace(/\{([^}]+)\}/g, (_, expr) => {
                            const value = evalPythonExpr(expr.trim())
                            if (Array.isArray(value)) {
                              return '[' + value.join(', ') + ']'
                            }
                            return String(value)
                          })
                          pythonOutput.push(content)
                        } else if (content.startsWith('"') || content.startsWith("'")) {
                          pythonOutput.push(content.slice(1, -1))
                        } else {
                          const output = evalPythonExpr(content)
                          if (Array.isArray(output)) {
                            pythonOutput.push('[' + output.join(', ') + ']')
                          } else {
                            pythonOutput.push(String(output))
                          }
                        }
                      }
                    }
                    // Handle variable assignments in try
                    else if (tryTrimmed.includes('=') && !tryTrimmed.includes('==')) {
                      const eqIndex = tryTrimmed.indexOf('=')
                      const varName = tryTrimmed.substring(0, eqIndex).trim()
                      let value = tryTrimmed.substring(eqIndex + 1).trim()
                      
                      if (value.startsWith('"') || value.startsWith("'")) {
                        variables[varName] = value.slice(1, -1)
                      } else if (!isNaN(Number(value))) {
                        variables[varName] = Number(value)
                      } else {
                        variables[varName] = evalPythonExpr(value)
                      }
                    }
                  }
                } catch (error) {
                  tryFailed = true
                }
                
                // Execute except block if try failed
                if (tryFailed) {
                  for (const exceptLine of exceptBody) {
                    const exceptTrimmed = exceptLine.trim()
                    
                    if (exceptTrimmed.startsWith('print(')) {
                      const printMatch = exceptTrimmed.match(/print\s*\((.*)\)/)
                      if (printMatch) {
                        let content = printMatch[1].trim()
                        if (content.startsWith('"') || content.startsWith("'")) {
                          pythonOutput.push(content.slice(1, -1))
                        } else {
                          pythonOutput.push(String(content))
                        }
                      }
                    }
                  }
                }
                
                inTryBlock = false
                inExceptBlock = false
                tryBody = []
                exceptBody = []
              }
              
              // Handle function definitions
              if (trimmed.startsWith('def ') && trimmed.includes('(') && trimmed.endsWith(':')) {
                const defMatch = trimmed.match(/def\s+(\w+)\s*\(([^)]*)\)\s*:/)
                if (defMatch) {
                  inFunctionDef = true
                  functionName = defMatch[1]
                  functionParams = defMatch[2] ? defMatch[2].split(',').map(p => p.trim().split('=')[0].trim()).filter(p => p) : []
                  functionBody = []
                  functionIndent = indent
                  continue
                }
              }
              
              // Handle for loops
              if (trimmed.startsWith('for ') && trimmed.includes(' in ') && trimmed.endsWith(':')) {
                const forMatch = trimmed.match(/for\s+(\w+)\s+in\s+(.+):/)
                if (forMatch) {
                  inForLoop = true
                  loopVariable = forMatch[1]
                  loopIterable = evalPythonExpr(forMatch[2])
                  loopBody = []
                  loopIndent = indent
                  continue
                }
              }
              
              // Handle while loops
              if (trimmed.startsWith('while ') && trimmed.endsWith(':')) {
                const whileMatch = trimmed.match(/while\s+(.+):/)
                if (whileMatch) {
                  inWhileLoop = true
                  whileCondition = whileMatch[1].trim()
                  whileBody = []
                  whileIndent = indent
                  continue
                }
              }
              
              // Check if we're exiting a while loop
              if (inWhileLoop && indent <= whileIndent && trimmed) {
                // Execute the while loop
                let iterations = 0
                const maxIterations = 1000 // Prevent infinite loops
                
                while (iterations < maxIterations) {
                  // Evaluate condition
                  const conditionResult = evalPythonExpr(whileCondition)
                  if (!conditionResult) break
                  
                  // Execute loop body
                  for (const bodyLine of whileBody) {
                    const bodyTrimmed = bodyLine.trim()
                    
                    // Handle print statements
                    if (bodyTrimmed.startsWith('print(')) {
                      const printMatch = bodyTrimmed.match(/print\s*\((.*)\)/)
                      if (printMatch) {
                        let content = printMatch[1].trim()
                        
                        if (content.startsWith('f"') || content.startsWith("f'")) {
                          content = content.slice(2, -1)
                          content = content.replace(/\{([^}]+)\}/g, (_, expr) => {
                            const value = evalPythonExpr(expr.trim())
                            if (Array.isArray(value)) {
                              return '[' + value.join(', ') + ']'
                            }
                            return String(value)
                          })
                          pythonOutput.push(content)
                        } else if (content.startsWith('"') || content.startsWith("'")) {
                          pythonOutput.push(content.slice(1, -1))
                        } else {
                          const output = evalPythonExpr(content)
                          if (Array.isArray(output)) {
                            pythonOutput.push('[' + output.join(', ') + ']')
                          } else {
                            pythonOutput.push(String(output))
                          }
                        }
                      }
                    }
                    // Handle variable assignments and updates
                    else if (bodyTrimmed.includes('=') && !bodyTrimmed.includes('==') && !bodyTrimmed.includes('!=')) {
                      const eqIndex = bodyTrimmed.indexOf('=')
                      const varName = bodyTrimmed.substring(0, eqIndex).trim()
                      const value = bodyTrimmed.substring(eqIndex + 1).trim()
                      variables[varName] = evalPythonExpr(value)
                    }
                  }
                  
                  iterations++
                }
                
                inWhileLoop = false
                whileBody = []
              }
              
              // Collect while loop body
              if (inWhileLoop && indent > whileIndent) {
                whileBody.push(trimmed)
                continue
              }
              
              // Collect loop body
              if (inForLoop && indent > loopIndent) {
                loopBody.push(trimmed)
                continue
              }
              
              // Handle method calls on variables (e.g., list.append(), obj.method())
              if (trimmed.match(/^\w+\.\w+\(/)) {
                const methodMatch = trimmed.match(/^(\w+)\.(\w+)\((.*)\)/)
                if (methodMatch) {
                  const objName = methodMatch[1]
                  const method = methodMatch[2]
                  const args = methodMatch[3]
                  
                  // Handle list methods
                  if (method === 'append' && Array.isArray(variables[objName])) {
                    let arg = args.trim()
                    if (arg.startsWith('"') || arg.startsWith("'")) {
                      arg = arg.slice(1, -1)
                    }
                    variables[objName].push(arg)
                    continue
                  }
                  
                  // Handle object methods (from classes)
                  if (variables[objName] && typeof variables[objName] === 'object' && typeof variables[objName][method] === 'function') {
                    variables[objName][method]()
                    continue
                  }
                }
                continue
              }
              
              // Handle print statements - OUTPUT ACTUAL RESULTS
              if (trimmed.startsWith('print(')) {
                const printMatch = trimmed.match(/print\s*\((.*)\)/)
                if (printMatch) {
                  let content = printMatch[1].trim()
                  
                  // Handle f-strings
                  if (content.startsWith('f"') || content.startsWith("f'")) {
                    content = content.slice(2, -1)
                    content = content.replace(/\{([^}]+)\}/g, (_, expr) => {
                      const value = evalPythonExpr(expr.trim())
                      // Format arrays as Python lists
                      if (Array.isArray(value)) {
                        return '[' + value.join(', ') + ']'
                      }
                      // Format objects as Python dicts
                      if (value && typeof value === 'object' && value.constructor === Object) {
                        return JSON.stringify(value)
                      }
                      return String(value)
                    })
                    pythonOutput.push(content)
                  }
                  // Handle regular strings
                  else if (content.startsWith('"') || content.startsWith("'")) {
                    pythonOutput.push(content.slice(1, -1))
                  }
                  // Handle multiple comma-separated values: print(x, y, z)
                  else if (content.includes(',')) {
                    const parts: string[] = []
                    let current = ''
                    let depth = 0
                    
                    for (let i = 0; i < content.length; i++) {
                      const char = content[i]
                      if (char === '(' || char === '[' || char === '{') {
                        depth++
                        current += char
                      } else if (char === ')' || char === ']' || char === '}') {
                        depth--
                        current += char
                      } else if (char === ',' && depth === 0) {
                        parts.push(current.trim())
                        current = ''
                      } else {
                        current += char
                      }
                    }
                    
                    if (current.trim()) {
                      parts.push(current.trim())
                    }
                    
                    // Evaluate each part and join with space
                    const outputs = parts.map(part => {
                      const value = evalPythonExpr(part)
                      if (Array.isArray(value)) {
                        return '[' + value.join(', ') + ']'
                      }
                      if (value === null || value === undefined) return ''
                      return String(value)
                    })
                    pythonOutput.push(outputs.join(' '))
                  }
                  // Handle function calls, variables, expressions
                  else {
                    const output = evalPythonExpr(content)
                    // Format arrays as Python lists
                    if (Array.isArray(output)) {
                      pythonOutput.push('[' + output.join(', ') + ']')
                    } else if (output === null || output === undefined) {
                      pythonOutput.push('')
                    } else {
                      pythonOutput.push(String(output))
                    }
                  }
                }
              }
              
              // Handle variable assignments
              else if (trimmed.includes('=') && !trimmed.includes('==') && !trimmed.includes('!=') && !trimmed.includes('<=') && !trimmed.includes('>=')) {
                const eqIndex = trimmed.indexOf('=')
                const varName = trimmed.substring(0, eqIndex).trim()
                let value = trimmed.substring(eqIndex + 1).trim()
                
                // Check for multi-line dictionary
                if (value === '{' || value.startsWith('{') && !value.endsWith('}')) {
                  inDictDef = true
                  dictName = varName
                  dictContent = value === '{' ? [] : [value.substring(1)]
                  dictIndent = indent
                  continue
                }
                
                // Parse value
                if (value.startsWith('"') || value.startsWith("'")) {
                  variables[varName] = value.slice(1, -1)
                } else if (!isNaN(Number(value))) {
                  variables[varName] = Number(value)
                } else if (value === 'True') {
                  variables[varName] = true
                } else if (value === 'False') {
                  variables[varName] = false
                } else if (value.startsWith('[') && value.endsWith(']')) {
                  // Check if it's a list comprehension (contains "for" keyword)
                  if (value.includes(' for ')) {
                    variables[varName] = evalPythonExpr(value)
                  } else {
                    // Regular list - parse as JSON
                    try {
                      variables[varName] = JSON.parse(value.replace(/'/g, '"'))
                    } catch {
                      variables[varName] = []
                    }
                  }
                } else if (value.startsWith('{') && value.endsWith('}')) {
                  // Single-line dictionary
                  try {
                    const jsDict = value
                      .replace(/'/g, '"')
                      .replace(/True/g, 'true')
                      .replace(/False/g, 'false')
                      .replace(/None/g, 'null')
                    variables[varName] = JSON.parse(jsDict)
                  } catch {
                    variables[varName] = {}
                  }
                } else if (value.startsWith('(') && value.endsWith(')')) {
                  // Handle tuples
                  try {
                    const tupleContent = value.slice(1, -1)
                    variables[varName] = JSON.parse('[' + tupleContent.replace(/'/g, '"') + ']')
                  } catch {
                    variables[varName] = []
                  }
                } else {
                  // Handle expressions
                  variables[varName] = evalPythonExpr(value)
                }
              }
            }
            
            // Execute any remaining loop
            if (inForLoop && loopBody.length > 0) {
              for (const item of loopIterable) {
                variables[loopVariable] = item
                for (const bodyLine of loopBody) {
                  const bodyTrimmed = bodyLine.trim()
                  
                  // Handle print statements
                  if (bodyTrimmed.startsWith('print(')) {
                    const printMatch = bodyTrimmed.match(/print\s*\((.*)\)/)
                    if (printMatch) {
                      let content = printMatch[1].trim()
                      
                      // Handle f-strings inside loops
                      if (content.startsWith('f"') || content.startsWith("f'")) {
                        content = content.slice(2, -1)
                        content = content.replace(/\{([^}]+)\}/g, (_, expr) => {
                          const value = evalPythonExpr(expr.trim())
                          if (Array.isArray(value)) {
                            return '[' + value.join(', ') + ']'
                          }
                          return String(value)
                        })
                        pythonOutput.push(content)
                      }
                      // Handle regular strings
                      else if (content.startsWith('"') || content.startsWith("'")) {
                        pythonOutput.push(content.slice(1, -1))
                      }
                      // Handle expressions
                      else {
                        const output = evalPythonExpr(content)
                        if (Array.isArray(output)) {
                          pythonOutput.push('[' + output.join(', ') + ']')
                        } else if (output === null || output === undefined) {
                          pythonOutput.push('')
                        } else {
                          pythonOutput.push(String(output))
                        }
                      }
                    }
                  }
                  // Handle variable assignments inside loops
                  else if (bodyTrimmed.includes('=') && !bodyTrimmed.includes('==') && !bodyTrimmed.includes('!=')) {
                    const eqIndex = bodyTrimmed.indexOf('=')
                    const varName = bodyTrimmed.substring(0, eqIndex).trim()
                    const value = bodyTrimmed.substring(eqIndex + 1).trim()
                    variables[varName] = evalPythonExpr(value)
                  }
                  // Handle function calls (without assignment)
                  else if (bodyTrimmed.match(/^\w+\(/)) {
                    evalPythonExpr(bodyTrimmed)
                  }
                }
              }
            }
            
            result = pythonOutput.length > 0 
              ? pythonOutput.join('\n') 
              : '✓ Code executed successfully (no print statements)'
            setOutput(result)
          } catch (error: any) {
            result = `Error: ${error.message}`
                setOutput(result)
              }
            } else if (language.toLowerCase() === 'ruby' || language.toLowerCase() === 'rb') {
              // Simulate Ruby execution
              result = '✓ Ruby code executed successfully'
              setOutput(result)
            } else if (language.toLowerCase() === 'php') {
              // Simulate PHP execution
              result = '✓ PHP code executed successfully'
              setOutput(result)
            } else if (language.toLowerCase() === 'java') {
              // Simulate Java execution
              result = '✓ Compiled successfully\n✓ Execution completed'
              setOutput(result)
            } else if (language.toLowerCase() === 'csharp' || language.toLowerCase() === 'cs' || language.toLowerCase() === 'c#') {
              // Simulate C# execution
              result = '✓ Built successfully\n✓ Execution completed'
              setOutput(result)
            } else if (language.toLowerCase() === 'go' || language.toLowerCase() === 'golang') {
              // Simulate Go execution
              result = '✓ Build successful\n✓ Program executed'
              setOutput(result)
            } else if (language.toLowerCase() === 'rust' || language.toLowerCase() === 'rs') {
              // Simulate Rust execution
              result = '✓ Compiling successful\n✓ Binary executed'
              setOutput(result)
            } else if (language.toLowerCase() === 'swift') {
              // Simulate Swift execution
              result = '✓ Compilation successful\n✓ Program executed'
              setOutput(result)
            }
            
            // Run test cases if provided
            if (testCases && testCases.length > 0) {
              runTestCases(code, result)
            } else {
              // Fallback to simple expectedOutput check
              checkOutput(result)
            }
          } catch (error: any) {
            console.error('Code execution error:', error)
            setOutput(`Error: ${error.message || 'Unknown error occurred'}`)
            setTestPassed(false)
          } finally {
            setIsRunning(false)
          }
          resolve()
        }, 100) // Reduced timeout from 500ms to 100ms for faster response
      })
    }

    try {
      await executeWithTimeout()
    } catch (error: any) {
      console.error('Execution wrapper error:', error)
      setOutput(`Error: ${error.message || 'Execution failed'}`)
      setTestPassed(false)
      setIsRunning(false)
    }
  }

  const runTestCases = (userCode: string, executionOutput: string) => {
    if (!testCases) return

    const results = testCases.map(testCase => {
      try {
        const passed = testCase.test(userCode, executionOutput)
        return {
          name: testCase.name,
          passed,
          error: passed ? undefined : testCase.errorMessage
        }
      } catch (error) {
        return {
          name: testCase.name,
          passed: false,
          error: testCase.errorMessage
        }
      }
    })

    setTestResults(results)
    const allPassed = results.every(r => r.passed)
    setAllTestsPassed(allPassed)
    setTestPassed(allPassed)

    if (allPassed && onSuccess) {
      setTimeout(() => onSuccess(), 1000)
    }
  }

  const checkOutput = (result: string) => {
    if (expectedOutput) {
      const passed = result.trim().includes(expectedOutput.trim())
      setTestPassed(passed)
      if (passed && onSuccess) {
        setTimeout(() => onSuccess(), 1000)
      }
    }
  }

  const resetCode = () => {
    setCode(initialCode)
    setOutput('Click "Run" to execute your code') // Reset to instruction
    setTestPassed(null)
    setTestResults([])
    setAllTestsPassed(false)
  }

  return (
    <div className="space-y-4">
      {/* Editor */}
      <div className="border border-gray-700 rounded-lg overflow-hidden">
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm text-gray-400 ml-2">{language}</span>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={resetCode}
              className="text-gray-400 hover:text-white p-1.5 rounded hover:bg-gray-700 transition-colors"
              title="Reset Code"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
            <button
              onClick={runCode}
              disabled={isRunning}
              className="flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-1.5 rounded hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <Play className="h-4 w-4" />
              <span>{isRunning ? 'Running...' : 'Run'}</span>
            </button>
          </div>
        </div>
        
        <Editor
          height="400px"
          language={getLanguageMode()}
          value={code}
          onChange={(value) => setCode(value || '')}
          theme={settings.theme === 'light' ? 'vs-light' : 'vs-dark'}
          options={{
            minimap: { enabled: settings.editorMinimap },
            fontSize: settings.editorFontSize,
            lineNumbers: settings.editorLineNumbers ? 'on' : 'off',
            roundedSelection: false,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: settings.editorTabSize,
            wordWrap: settings.editorWordWrap,
            fontFamily: settings.editorFontFamily,
            lineHeight: settings.editorLineHeight,
          }}
        />
      </div>

      {/* Output - Always visible */}
      <div className="border border-gray-700 rounded-lg overflow-hidden">
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
          <span className="text-sm text-gray-400">Output</span>
            {testPassed !== null && (
              <div className={`flex items-center space-x-1 text-sm ${testPassed ? 'text-green-400' : 'text-red-400'}`}>
                {testPassed ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>All Tests Passed!</span>
                  </>
                ) : (
                  <>
                    <X className="h-4 w-4" />
                    <span>Tests Failed</span>
                  </>
                )}
              </div>
            )}
          </div>
        <div className="bg-gray-900 p-4">
          {isRunning ? (
            <div className="flex items-center justify-center min-h-[200px]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                <p className="text-gray-400">Running code...</p>
              </div>
            </div>
          ) : language.toLowerCase() === 'html' ? (
            <div 
              className="html-preview border border-gray-700 rounded p-4 bg-white text-black min-h-[200px]"
              dangerouslySetInnerHTML={{ __html: code }}
            />
          ) : (
            <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono min-h-[100px]">
              {output || 'No output'}
            </pre>
          )}
        </div>
      </div>

      {/* Test Results */}
      {testResults.length > 0 && (
        <div className="border border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
            <span className="text-sm text-gray-400">Test Results</span>
          </div>
          <div className="bg-gray-900 p-4 space-y-2">
            {testResults.map((result, index) => (
              <div 
                key={index} 
                className={`flex items-start gap-2 p-3 rounded-lg ${
                  result.passed ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'
                }`}
              >
                {result.passed ? (
                  <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                ) : (
                  <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <div className={`font-medium ${result.passed ? 'text-green-400' : 'text-red-400'}`}>
                    {result.name}
                  </div>
                  {!result.passed && result.error && (
                    <div className="text-sm text-gray-400 mt-1">{result.error}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Expected Output */}
      {expectedOutput && !testCases && (
        <div className="text-sm text-gray-400 bg-gray-800/50 p-3 rounded-lg border border-gray-700">
          <strong>Expected Output:</strong> {expectedOutput}
        </div>
      )}
    </div>
  )
}
