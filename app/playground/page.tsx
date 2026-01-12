'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import CodeEditor from '@/components/CodeEditor'
import { Code2, Play } from 'lucide-react'

const initialCodes: { [key: string]: string } = {
  html: `<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>Welcome to my playground!</p>
</body>
</html>`,
  css: `/* Your CSS styles */
body {
  font-family: Arial, sans-serif;
  margin: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

h1 {
  color: white;
  text-align: center;
}`,
  javascript: `// JavaScript
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));
console.log("Welcome to the Playground!");`,
  typescript: `// TypeScript
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));
console.log("Welcome to the Playground!");`,
  python: `# Python
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
print("Welcome to the Playground!")`,
  java: `// Java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("Welcome to Java Playground!");
    }
}`,
  csharp: `// C#
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
        Console.WriteLine("Welcome to C# Playground!");
    }
}`,
  go: `// Go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
    fmt.Println("Welcome to Go Playground!")
}`,
  rust: `// Rust
fn main() {
    println!("Hello, World!");
    println!("Welcome to Rust Playground!");
}`,
  ruby: `# Ruby
def greet(name)
  "Hello, #{name}!"
end

puts greet("World")
puts "Welcome to Ruby Playground!"`,
  php: `<?php
// PHP
function greet($name) {
    return "Hello, " . $name . "!";
}

echo greet("World") . "\\n";
echo "Welcome to PHP Playground!";
?>`,
  swift: `// Swift
func greet(name: String) -> String {
    return "Hello, \\(name)!"
}

print(greet(name: "World"))
print("Welcome to Swift Playground!")`,
  kotlin: `// Kotlin
fun greet(name: String): String {
    return "Hello, $name!"
}

fun main() {
    println(greet("World"))
    println("Welcome to Kotlin Playground!")
}`,
  scala: `// Scala
object Main extends App {
  def greet(name: String): String = {
    s"Hello, $name!"
  }
  
  println(greet("World"))
  println("Welcome to Scala Playground!")
}`,
  dart: `// Dart
void main() {
  String greet(String name) {
    return 'Hello, $name!';
  }
  
  print(greet('World'));
  print('Welcome to Dart Playground!');
}`,
  r: `# R
greet <- function(name) {
  paste("Hello,", name, "!")
}

print(greet("World"))
print("Welcome to R Playground!")`,
  sql: `-- SQL
SELECT 'Hello, World!' AS greeting;
SELECT 'Welcome to SQL Playground!' AS message;`,
  bash: `#!/bin/bash
# Bash
greet() {
    echo "Hello, $1!"
}

greet "World"
echo "Welcome to Bash Playground!"`,
  elixir: `# Elixir
defmodule Greeting do
  def greet(name) do
    "Hello, #{name}!"
  end
end

IO.puts Greeting.greet("World")
IO.puts "Welcome to Elixir Playground!"`,
  haskell: `-- Haskell
greet :: String -> String
greet name = "Hello, " ++ name ++ "!"

main :: IO ()
main = do
  putStrLn (greet "World")
  putStrLn "Welcome to Haskell Playground!"`,
  lua: `-- Lua
function greet(name)
    return "Hello, " .. name .. "!"
end

print(greet("World"))
print("Welcome to Lua Playground!")`,
  perl: `# Perl
sub greet {
    my $name = shift;
    return "Hello, $name!";
}

print greet("World") . "\\n";
print "Welcome to Perl Playground!\\n";`,
  julia: `# Julia
function greet(name)
    return "Hello, $name!"
end

println(greet("World"))
println("Welcome to Julia Playground!")`,
  powershell: `# PowerShell
function Greet {
    param($name)
    "Hello, $name!"
}

Write-Host (Greet "World")
Write-Host "Welcome to PowerShell Playground!"`,
  groovy: `// Groovy
def greet(name) {
    "Hello, $name!"
}

println greet("World")
println "Welcome to Groovy Playground!"`,
  clojure: `; Clojure
(defn greet [name]
  (str "Hello, " name "!"))

(println (greet "World"))
(println "Welcome to Clojure Playground!")`,
  erlang: `% Erlang
-module(greeting).
-export([greet/1]).

greet(Name) ->
    io:format("Hello, ~s!~n", [Name]),
    io:format("Welcome to Erlang Playground!~n").`,
  fsharp: `// F#
let greet name =
    sprintf "Hello, %s!" name

printfn "%s" (greet "World")
printfn "Welcome to F# Playground!"`,
  ocaml: `(* OCaml *)
let greet name =
  Printf.sprintf "Hello, %s!" name

let () =
  print_endline (greet "World");
  print_endline "Welcome to OCaml Playground!"`,
  matlab: `% MATLAB
function result = greet(name)
    result = ['Hello, ' name '!'];
end

disp(greet('World'))
disp('Welcome to MATLAB Playground!')`,
  objectivec: `// Objective-C
#import <Foundation/Foundation.h>

int main() {
    NSLog(@"Hello, World!");
    NSLog(@"Welcome to Objective-C Playground!");
    return 0;
}`,
  crystal: `# Crystal
def greet(name : String) : String
  "Hello, #{name}!"
end

puts greet("World")
puts "Welcome to Crystal Playground!"`
}

export default function PlaygroundPage() {
  const [language, setLanguage] = useState('javascript')

  const languages = [
    { id: 'html', name: 'HTML', icon: '🌐' },
    { id: 'css', name: 'CSS', icon: '🎨' },
    { id: 'javascript', name: 'JavaScript', icon: '🟨' },
    { id: 'typescript', name: 'TypeScript', icon: '🔷' },
    { id: 'python', name: 'Python', icon: '🐍' },
    { id: 'java', name: 'Java', icon: '☕' },
    { id: 'csharp', name: 'C#', icon: '💜' },
    { id: 'go', name: 'Go', icon: '🔵' },
    { id: 'rust', name: 'Rust', icon: '🦀' },
    { id: 'ruby', name: 'Ruby', icon: '💎' },
    { id: 'php', name: 'PHP', icon: '🐘' },
    { id: 'swift', name: 'Swift', icon: '🍎' },
    { id: 'kotlin', name: 'Kotlin', icon: '🟣' },
    { id: 'scala', name: 'Scala', icon: '🔴' },
    { id: 'dart', name: 'Dart', icon: '🎯' },
    { id: 'r', name: 'R', icon: '📊' },
    { id: 'sql', name: 'SQL', icon: '🗄️' },
    { id: 'bash', name: 'Bash', icon: '💻' },
    { id: 'elixir', name: 'Elixir', icon: '💧' },
    { id: 'haskell', name: 'Haskell', icon: '🎓' },
    { id: 'lua', name: 'Lua', icon: '🌙' },
    { id: 'perl', name: 'Perl', icon: '🐪' },
    { id: 'julia', name: 'Julia', icon: '🔬' },
    { id: 'powershell', name: 'PowerShell', icon: '⚡' },
    { id: 'groovy', name: 'Groovy', icon: '🎵' },
    { id: 'clojure', name: 'Clojure', icon: '☘️' },
    { id: 'erlang', name: 'Erlang', icon: '📡' },
    { id: 'fsharp', name: 'F#', icon: '🔷' },
    { id: 'ocaml', name: 'OCaml', icon: '🐫' },
    { id: 'matlab', name: 'MATLAB', icon: '📈' },
    { id: 'objectivec', name: 'Objective-C', icon: '🍏' },
    { id: 'crystal', name: 'Crystal', icon: '💎' },
  ]

  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang)
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Sidebar />
      
      <main className="ml-0 md:ml-64 pt-16 pb-20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
              <Code2 className="h-8 w-8 text-primary-400" />
              <span className="text-gradient">Code Playground</span>
            </h1>
            <p className="text-gray-400">
              Experiment with code in multiple languages
            </p>
          </div>

          {/* Language Selector */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => handleLanguageChange(lang.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    language === lang.id
                      ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <span className="mr-1.5">{lang.icon}</span>
                  {lang.name}
                </button>
              ))}
            </div>
          </div>

          {/* Code Editor */}
          <div className="card-gradient border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Play className="h-5 w-5 text-primary-400" />
                Editor
              </h2>
            </div>
            
            <CodeEditor
              language={language}
              initialCode={initialCodes[language]}
            />
          </div>

          {/* Quick Tips */}
          <div className="mt-6 card-gradient border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-bold mb-3">💡 Quick Tips</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-primary-400 mt-1">•</span>
                <span>Click &quot;Run Code&quot; to see your output</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400 mt-1">•</span>
                <span>Use console.log() in JavaScript/TypeScript or print() in Python to display output</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400 mt-1">•</span>
                <span>Switch between languages using the buttons above</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-400 mt-1">•</span>
                <span>Your code resets when you change languages</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
