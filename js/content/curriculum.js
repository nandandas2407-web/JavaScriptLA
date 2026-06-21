// ============================================================
// CURRICULUM - World & Lesson Data
// Based on Eloquent JavaScript (4th Edition) by Marijn Haverbeke
// Each lesson has progressive sub-steps from beginner → advanced
// ============================================================

export const worlds = [
  // ================================================================
  // WORLD 1: VARIABLES VALLEY
  // ================================================================
  {
    id: 'variables-valley',
    title: 'Variables Valley',
    description: 'Master the building blocks of JavaScript — values, types, and variables',
    icon: 'variables',
    order: 1,
    prerequisites: [],
    color: '#5e6ad2',
    position: { row: 0, col: 1 },
    lessons: [
      {
        id: 'values-types',
        title: 'Values, Types & Operators',
        description: 'Understand the fundamental values JavaScript works with',
        xp: 40,
        duration: '25 min',
        difficulty: 'beginner',
        concepts: ['values', 'types', 'operators', 'numbers', 'strings', 'booleans'],
        steps: [
          {
            id: 'vt-intro',
            title: 'What is a Value?',
            difficulty: 'beginner',
            content: [
              { type: 'text', body: 'JavaScript programs work with values. A value is a piece of data — like a number, a word, or true/false. Every value has a type that tells JavaScript how to work with it.' },
              { type: 'text', body: 'Think of values as ingredients in a recipe. Just like cooking needs flour, sugar, and eggs, programs need numbers, text, and true/false values to work.' },
              { type: 'code', title: 'Examples of Values', body: '42          // a number\n"hello"     // a string (text)\ntrue        // a boolean (yes/no)\nnull        // intentional absence of value\nundefined   // no value assigned yet' },
              { type: 'text', body: 'There are 6 basic types in JavaScript: number, string, boolean, null, undefined, and object. Everything else is built on top of these.' },
            ]
          },
          {
            id: 'vt-numbers',
            title: 'Numbers — Working with Math',
            difficulty: 'beginner',
            content: [
              { type: 'text', body: 'Numbers represent numeric values. Unlike many languages, JavaScript does NOT have separate integer and float types — all numbers are floating-point.' },
              { type: 'code', title: 'Basic Arithmetic', body: 'console.log(100 + 4 * 11);    // → 144\nconsole.log((100 + 4) * 11);   // → 1144\nconsole.log(100 - 10);          // → 90\nconsole.log(20 / 4);            // → 5\nconsole.log(17 % 3);            // → 2  (remainder)\nconsole.log(2 ** 3);            // → 8  (power)' },
              { type: 'text', body: 'The operators: + (add), - (subtract), * (multiply), / (divide), % (remainder), ** (power). Order of operations follows math rules — multiplication before addition.' },
              { type: 'code', title: 'Special Number Values', body: 'console.log(Infinity);    // → Infinity\nconsole.log(-Infinity);   // → -Infinity\nconsole.log(NaN);         // → NaN\nconsole.log(typeof 4.5);  // → "number"\nconsole.log(typeof NaN);  // → "number" (yes, really!)' },
              { type: 'text', body: 'Infinity represents infinity. NaN means "Not a Number" — it\'s the result of impossible math like "hello" * 2. Weirdly, typeof NaN returns "number" — this is a JavaScript quirk.' },
            ]
          },
          {
            id: 'vt-strings',
            title: 'Strings — Working with Text',
            difficulty: 'beginner',
            content: [
              { type: 'text', body: 'Strings represent text. You write them with quotes — single or double, both work the same way.' },
              { type: 'code', title: 'Creating Strings', body: '"hello"     // double quotes\n\'hello\'     // single quotes\n`hello`     // template literals (backticks)\n\n// All three create the same string' },
              { type: 'code', title: 'Combining Strings', body: 'console.log("one" + " two");   // → "one two"\nconsole.log("Off" + "ence");   // → "Offence"\n\nlet name = "Alice";\nconsole.log("Hello, " + name + "!");  // → "Hello, Alice!"' },
              { type: 'text', body: 'The + operator joins (concatenates) strings together. Template literals with backticks let you embed variables directly:' },
              { type: 'code', title: 'Template Literals', body: 'let name = "Alice";\nlet age = 25;\n\nconsole.log(`Hello, ${name}!`);           // → "Hello, Alice!"\nconsole.log(`${name} is ${age} years old`); // → "Alice is 25 years old"' },
              { type: 'code', title: 'String Properties', body: 'console.log("hello".length);   // → 5\nconsole.log("hello".toUpperCase()); // → "HELLO"\nconsole.log("HELLO".toLowerCase()); // → "hello"' },
              { type: 'text', body: 'Strings have properties (like length) and methods (like toUpperCase). Methods are functions attached to values — you call them with a dot.' },
            ]
          },
          {
            id: 'vt-booleans',
            title: 'Booleans — True or False',
            difficulty: 'beginner',
            content: [
              { type: 'text', body: 'Booleans are simple: true or false. They\'re the result of comparisons and decisions.' },
              { type: 'code', title: 'Comparisons', body: 'console.log(3 > 2);           // → true\nconsole.log(3 < 2);           // → false\nconsole.log("A" < "B");       // → true (alphabetical)\nconsole.log(10 == 10);        // → true\nconsole.log(10 === 10);       // → true (use this!)\nconsole.log(10 === "10");     // → false (different types)' },
              { type: 'text', body: 'Always use === (strict equality) instead of == (loose equality). === checks both value AND type. == does weird type conversions.' },
              { type: 'code', title: 'Logical Operators', body: 'console.log(true && false);   // → false (AND)\nconsole.log(true || false);   // → true  (OR)\nconsole.log(!true);           // → false (NOT)\n\n// && needs BOTH to be true\n// || needs ONE to be true\n// ! flips the value' },
              { type: 'text', body: 'These are the building blocks of decision-making in programs. && (and), || (or), and ! (not) combine conditions.' },
            ]
          },
          {
            id: 'vt-coercion',
            title: 'Type Coercion — JavaScript\'s Gotcha',
            difficulty: 'intermediate',
            content: [
              { type: 'text', body: 'JavaScript automatically converts between types. This is called type coercion. It\'s useful sometimes but confusing other times.' },
              { type: 'code', title: 'Surprising Conversions', body: 'console.log("6" - 1);      // → 5   (string → number)\nconsole.log("6" + 1);      // → "61" (number → string!)\nconsole.log("six" * 2);    // → NaN  (can\'t convert)\n\n// + with strings concatenates\n// - * / always convert to numbers' },
              { type: 'text', body: 'The + operator is overloaded: with numbers it adds, with strings it concatenates. This is the #1 source of bugs for beginners.' },
              { type: 'code', title: 'Falsy and Truthy Values', body: '// These are "falsy" (act like false):\nconsole.log(Boolean(0));         // → false\nconsole.log(Boolean(""));        // → false\nconsole.log(Boolean(null));      // → false\nconsole.log(Boolean(undefined)); // → false\nconsole.log(Boolean(NaN));       // → false\n\n// Everything else is "truthy" (acts like true):\nconsole.log(Boolean(1));         // → true\nconsole.log(Boolean("hello"));   // → true\nconsole.log(Boolean([]));        // → true\nconsole.log(Boolean({}));        // → true' },
              { type: 'text', body: 'Only 6 values are falsy: 0, "", null, undefined, NaN, and false itself. Everything else is truthy — even empty arrays [] and objects {}!' },
            ]
          },
        ]
      },
      {
        id: 'program-structure',
        title: 'Program Structure',
        description: 'Write statements, control flow, and basic programs',
        xp: 45,
        duration: '30 min',
        difficulty: 'beginner',
        concepts: ['let', 'const', 'if', 'else', 'while', 'for', 'blocks', 'scope'],
        steps: [
          {
            id: 'ps-intro',
            title: 'What is a Program?',
            difficulty: 'beginner',
            content: [
              { type: 'text', body: 'A program is a sequence of instructions that JavaScript follows step by step. Each instruction is called a statement. Statements end with semicolons (which are optional but recommended).' },
              { type: 'code', title: 'Your First Statements', body: '// This is a comment — JavaScript ignores it\nlet name = "Alice";           // declaration statement\nconsole.log("Hello " + name); // expression statement\nif (name === "Alice") {       // control flow statement\n  console.log("Welcome!");\n}' },
              { type: 'text', body: 'Statements are like sentences in English. They tell JavaScript what to do. Some statements declare variables, some call functions, and some make decisions.' },
            ]
          },
          {
            id: 'ps-let-const',
            title: 'Variables with let and const',
            difficulty: 'beginner',
            content: [
              { type: 'text', body: 'Variables are named containers for values. Use let for values that change, and const for values that stay the same.' },
              { type: 'code', title: 'let — Variable (can change)', body: 'let score = 0;\nconsole.log(score);   // → 0\n\nscore = 10;\nconsole.log(score);   // → 10\n\nscore = score + 5;\nconsole.log(score);   // → 15' },
              { type: 'code', title: 'const — Constant (cannot change)', body: 'const pi = 3.14159;\nconsole.log(pi);      // → 3.14159\n\n// pi = 3;  // ERROR! Assignment to constant variable' },
              { type: 'text', body: 'Rule of thumb: use const by default. Only use let when you know the value needs to change. Never use var in modern code.' },
              { type: 'code', title: 'Why const First?', body: 'const API_URL = "https://api.example.com";\nlet counter = 0;\n\n// API_URL should never change — use const\n// counter increments — use let\n\n// Both are block-scoped (only exist inside { })\nif (true) {\n  let x = 10;\n  const y = 20;\n  console.log(x, y);  // → 10 20\n}\n// console.log(x); // ERROR — x doesn\'t exist here' },
            ]
          },
          {
            id: 'ps-if-else',
            title: 'Decisions with if/else',
            difficulty: 'beginner',
            content: [
              { type: 'text', body: 'Programs need to make decisions. The if statement runs different code based on conditions.' },
              { type: 'code', title: 'Basic if', body: 'let temperature = 30;\n\nif (temperature > 25) {\n  console.log("It\'s hot outside!");\n}' },
              { type: 'code', title: 'if/else — Two Paths', body: 'let age = 16;\n\nif (age >= 18) {\n  console.log("You can vote!");\n} else {\n  console.log("Too young to vote");\n}' },
              { type: 'code', title: 'Multiple Conditions', body: 'let score = 85;\n\nif (score >= 90) {\n  console.log("Grade: A");\n} else if (score >= 80) {\n  console.log("Grade: B");\n} else if (score >= 70) {\n  console.log("Grade: C");\n} else {\n  console.log("Grade: F");\n}\n// → Grade: B' },
              { type: 'text', body: 'JavaScript checks conditions top to bottom. When it finds a true condition, it runs that block and skips the rest. The else at the end catches everything that didn\'t match.' },
            ]
          },
          {
            id: 'ps-while',
            title: 'Loops with while',
            difficulty: 'beginner',
            content: [
              { type: 'text', body: 'Loops repeat code. The while loop keeps running as long as its condition is true.' },
              { type: 'code', title: 'While Loop', body: 'let count = 0;\n\nwhile (count < 5) {\n  console.log(count);\n  count += 1;  // Same as count = count + 1\n}\n// → 0, 1, 2, 3, 4' },
              { type: 'code', title: 'Avoid Infinite Loops!', body: '// DANGER — this never stops:\n// while (true) {\n//   console.log("forever!");\n// }\n\n// Always make sure the condition eventually becomes false\nlet n = 0;\nwhile (n < 3) {\n  console.log(n);\n  n++;  // Increment so we eventually stop\n}' },
              { type: 'text', body: 'A while loop has two parts: a condition and a body. The body runs, then the condition is checked again. If true, the body runs again. This repeats until the condition is false.' },
            ]
          },
          {
            id: 'ps-for',
            title: 'Loops with for',
            difficulty: 'beginner',
            content: [
              { type: 'text', body: 'The for loop is a compact way to repeat something a specific number of times. It combines initialization, condition, and update in one line.' },
              { type: 'code', title: 'For Loop Anatomy', body: 'for (let i = 0; i < 5; i++) {\n  console.log(i);\n}\n// → 0, 1, 2, 3, 4\n\n// Three parts:\n// 1. let i = 0     → start at 0\n// 2. i < 5         → stop when i reaches 5\n// 3. i++           → add 1 each time' },
              { type: 'code', title: 'Counting by 2s', body: 'for (let i = 0; i <= 10; i += 2) {\n  console.log(i);\n}\n// → 0, 2, 4, 6, 8, 10' },
              { type: 'code', title: 'Counting Backwards', body: 'for (let i = 5; i >= 1; i--) {\n  console.log(i);\n}\n// → 5, 4, 3, 2, 1\nconsole.log("Liftoff!");' },
            ]
          },
          {
            id: 'ps-break-continue',
            title: 'Breaking and Continuing',
            difficulty: 'intermediate',
            content: [
              { type: 'text', body: 'Sometimes you need to exit a loop early or skip an iteration. break and continue let you control loop flow.' },
              { type: 'code', title: 'break — Exit the Loop', body: 'for (let i = 0; i < 100; i++) {\n  if (i === 5) {\n    break;  // Stop the loop entirely\n  }\n  console.log(i);\n}\n// → 0, 1, 2, 3, 4' },
              { type: 'code', title: 'continue — Skip This Iteration', body: 'for (let i = 0; i < 10; i++) {\n  if (i % 2 === 0) {\n    continue;  // Skip even numbers\n  }\n  console.log(i);\n}\n// → 1, 3, 5, 7, 9' },
              { type: 'text', body: 'break immediately exits the loop. continue jumps to the next iteration. Both only affect the innermost loop they\'re in.' },
            ]
          },
          {
            id: 'ps-scope',
            title: 'Variable Scope',
            difficulty: 'intermediate',
            content: [
              { type: 'text', body: 'Scope determines where a variable can be accessed. let and const are block-scoped — they only exist inside the nearest { } braces.' },
              { type: 'code', title: 'Block Scope', body: 'let x = "outside";\n\nif (true) {\n  let y = "inside";\n  console.log(x);  // → "outside" (outer scope)\n  console.log(y);  // → "inside" (inner scope)\n}\n\nconsole.log(x);  // → "outside"\n// console.log(y); // ERROR — y doesn\'t exist here' },
              { type: 'code', title: 'Nested Scope', body: 'function outer() {\n  let a = 1;\n  \n  function middle() {\n    let b = 2;\n    \n    function inner() {\n      let c = 3;\n      console.log(a, b, c); // → 1 2 3\n    }\n    inner();\n  }\n  middle();\n}' },
              { type: 'text', body: 'Inner scopes can access outer scopes, but outer scopes cannot access inner scopes. This is called lexical scope — a function inherits the scope where it was written.' },
            ]
          },
        ]
      },
      {
        id: 'naming-conventions',
        title: 'Naming & Conventions',
        description: 'Master the art of naming variables and writing clean code',
        xp: 25,
        duration: '12 min',
        difficulty: 'beginner',
        concepts: ['naming', 'camelCase', 'reserved-words', 'conventions'],
        steps: [
          {
            id: 'nc-rules',
            title: 'Variable Naming Rules',
            difficulty: 'beginner',
            content: [
              { type: 'text', body: 'Variable names have strict rules. Breaking them causes errors.' },
              { type: 'code', title: 'Valid and Invalid Names', body: '// VALID names:\nlet myVariable = 1;\nlet _private = 2;\nlet $element = 3;\nlet camelCase2 = 4;\nlet firstName = 5;\n\n// INVALID names (syntax errors):\n// let 2start = 5;    // Can\'t start with a number\n// let my-var = 6;    // No hyphens\n// let my var = 7;    // No spaces' },
              { type: 'text', body: 'Names can contain letters, digits, underscores (_), and dollar signs ($). They must start with a letter, underscore, or dollar sign.' },
            ]
          },
          {
            id: 'nc-reserved',
            title: 'Reserved Words',
            difficulty: 'beginner',
            content: [
              { type: 'text', body: 'Some words are reserved by JavaScript and cannot be used as variable names.' },
              { type: 'code', title: 'Cannot Use These as Variable Names', body: '// Keywords (used by JavaScript):\n// let, const, var, function, return\n// if, else, for, while, break, continue\n// class, new, this, typeof, instanceof\n// true, false, null, undefined\n// import, export, default, from\n\n// Plus future reserved words:\n// await, enum, implements, interface\n// package, private, protected, public, static' },
              { type: 'text', body: 'When in doubt, try it in the browser console. If you get a SyntaxError, the word is probably reserved.' },
            ]
          },
          {
            id: 'nc-conventions',
            title: 'Naming Conventions (Best Practices)',
            difficulty: 'beginner',
            content: [
              { type: 'text', body: 'Beyond the rules, there are conventions — agreed-upon styles that make code easier to read.' },
              { type: 'code', title: 'camelCase for Variables and Functions', body: 'let userAge = 25;         // camelCase\nlet firstName = "Alice";  // camelCase\n\nfunction calculateTotal() { }  // camelCase\nfunction getUserById() { }      // camelCase' },
              { type: 'code', title: 'Descriptive Names', body: '// BAD — vague names:\nlet x = 25;\nlet d = new Date();\nlet fn = function() { };\n\n// GOOD — descriptive names:\nlet userAge = 25;\nlet currentDate = new Date();\nlet handle_click = function() { };\n\n// BEST — even more descriptive:\nlet currentUserAge = 25;\nlet orderCreationDate = new Date();' },
              { type: 'code', title: 'Boolean Names Start with is/has/can', body: 'let isActive = true;\nlet hasPermission = false;\nlet canEdit = true;\nlet shouldRefresh = false;' },
              { type: 'code', title: 'Constants are UPPER_CASE', body: 'const MAX_RETRIES = 3;\nconst API_URL = "https://api.example.com";\nconst GRAVITY = 9.81;' },
              { type: 'text', body: 'Good naming is the cheapest way to improve code readability. A variable called users is much better than a variable called arr. Spend time choosing clear names — your future self will thank you.' },
            ]
          },
        ]
      },
    ],
  },

  // ================================================================
  // WORLD 2: FUNCTIONS FOREST
  // ================================================================
  {
    id: 'functions-forest',
    title: 'Functions Forest',
    description: 'Create reusable blocks of code — the building blocks of programs',
    icon: 'functions',
    order: 2,
    prerequisites: ['variables-valley'],
    color: '#2da44e',
    position: { row: 0, col: 2 },
    lessons: [
      {
        id: 'function-basics',
        title: 'Function Basics',
        description: 'Define and call your first functions',
        xp: 45,
        duration: '30 min',
        difficulty: 'beginner',
        concepts: ['function', 'declaration', 'call', 'return', 'parameters', 'arguments'],
        steps: [
          {
            id: 'fb-intro',
            title: 'What is a Function?',
            difficulty: 'beginner',
            content: [
              { type: 'text', body: 'A function is a reusable block of code that performs a specific task. Think of it as a machine: you put something in, it does work, and gives something back.' },
              { type: 'code', title: 'Your First Function', body: 'function greet() {\n  console.log("Hello!");\n}\n\ngreet();  // → Hello!\ngreet();  // Hello! (can call it again!)' },
              { type: 'text', body: 'Functions let you write code once and use it many times. Without functions, you\'d have to copy-paste the same code everywhere.' },
            ]
          },
          {
            id: 'fb-parameters',
            title: 'Parameters — Giving Input',
            difficulty: 'beginner',
            content: [
              { type: 'text', body: 'Parameters let functions accept input values. They act as placeholder variables that get filled in when you call the function.' },
              { type: 'code', title: 'Parameters vs Arguments', body: '// Parameters: the names in the definition\nfunction greet(name) {\n  console.log("Hello, " + name + "!");\n}\n\n// Arguments: the values you pass when calling\ngreet("Alice");  // → Hello, Alice!\ngreet("Bob");    // → Hello, Bob!' },
              { type: 'code', title: 'Multiple Parameters', body: 'function add(a, b) {\n  return a + b;\n}\n\nconsole.log(add(3, 4));   // → 7\nconsole.log(add(10, 20)); // → 30' },
            ]
          },
          {
            id: 'fb-return',
            title: 'Return Values — Getting Output',
            difficulty: 'beginner',
            content: [
              { type: 'text', body: 'The return statement sends a value back from the function. Without return, functions return undefined.' },
              { type: 'code', title: 'Using Return', body: 'function square(x) {\n  return x * x;\n}\n\nlet result = square(5);\nconsole.log(result);  // → 25\n\n// You can use the return value anywhere:\nconsole.log(square(3) + square(4));  // → 25' },
              { type: 'code', title: 'No Return = undefined', body: 'function sayHi(name) {\n  console.log("Hi, " + name);\n}\n\nlet result = sayHi("Alice");\nconsole.log(result);  // → undefined\n\n// sayHi prints something but returns nothing' },
              { type: 'text', body: 'Code after return never runs. return immediately exits the function.' },
            ]
          },
          {
            id: 'fb-expressions',
            title: 'Function Expressions',
            difficulty: 'intermediate',
            content: [
              { type: 'text', body: 'Besides function declarations, you can create functions using expressions — assigning a function to a variable.' },
              { type: 'code', title: 'Declaration vs Expression', body: '// Function declaration\nfunction add(a, b) {\n  return a + b;\n}\n\n// Function expression\nconst subtract = function(a, b) {\n  return a - b;\n};\n\nconsole.log(add(5, 3));      // → 8\nconsole.log(subtract(5, 3)); // → 2' },
              { type: 'text', body: 'Function declarations are hoisted (available before they appear in code). Function expressions are not. In modern code, prefer declarations for named functions.' },
            ]
          },
        ]
      },
      {
        id: 'arrow-functions',
        title: 'Arrow Functions',
        description: 'Write concise functions with modern syntax',
        xp: 40,
        duration: '20 min',
        difficulty: 'intermediate',
        concepts: ['arrow', '=>', 'implicit-return', 'concise-body'],
        steps: [
          {
            id: 'af-intro',
            title: 'Arrow Function Syntax',
            difficulty: 'intermediate',
            content: [
              { type: 'text', body: 'Arrow functions provide a shorter way to write functions. They\'re especially useful for callbacks and short functions.' },
              { type: 'code', title: 'From Traditional to Arrow', body: '// Traditional\nfunction double(x) {\n  return x * 2;\n}\n\n// Arrow function\nconst doubleArrow = (x) => {\n  return x * 2;\n};\n\n// Concise body (implicit return)\nconst doubleShort = x => x * 2;\n\n// All three produce the same result' },
              { type: 'text', body: 'Rules: single parameter needs no parentheses, single expression needs no braces or return keyword. Multiple parameters or multiple statements need parentheses and braces.' },
            ]
          },
          {
            id: 'af-patterns',
            title: 'Common Arrow Patterns',
            difficulty: 'intermediate',
            content: [
              { type: 'code', title: 'Arrow Functions in Practice', body: '// No parameters\nconst getTimestamp = () => Date.now();\n\n// Multiple parameters (need parentheses)\nconst multiply = (a, b) => a * b;\n\n// Multi-line body (need braces + return)\nconst classify = (age) => {\n  if (age < 18) return "minor";\n  if (age < 65) return "adult";\n  return "senior";\n};' },
              { type: 'code', title: 'Arrow Functions with Arrays', body: 'const numbers = [1, 2, 3, 4, 5];\n\n// Map\nconst doubled = numbers.map(n => n * 2);\n// → [2, 4, 6, 8, 10]\n\n// Filter\nconst evens = numbers.filter(n => n % 2 === 0);\n// → [2, 4]\n\n// Find\nconst big = numbers.find(n => n > 3);\n// → 4' },
            ]
          },
          {
            id: 'af-when',
            title: 'When to Use (and When NOT to Use)',
            difficulty: 'intermediate',
            content: [
              { type: 'text', body: 'Arrow functions are great for callbacks but NOT for everything. They don\'t have their own this binding.' },
              { type: 'code', title: 'Use Arrows for Callbacks', body: 'const items = [\n  { name: "apple", price: 1.50 },\n  { name: "banana", price: 0.75 },\n  { name: "cherry", price: 3.00 }\n];\n\nconst cheap = items.filter(i => i.price < 2);\nconst names = cheap.map(i => i.name);\n// → ["apple", "banana"]' },
              { type: 'code', title: 'DON\'T Use for Object Methods', body: 'const person = {\n  name: "Alice",\n  // BAD: arrow function\n  greetWrong: () => {\n    console.log("Hello, " + this.name);\n    // this.name is undefined!\n  },\n  // GOOD: regular method\n  greetRight() {\n    console.log("Hello, " + this.name);\n  }\n};' },
              { type: 'text', body: 'Rule: use arrow functions for callbacks and short utility functions. Use regular functions for object methods, constructors, and anything that needs this.' },
            ]
          },
        ]
      },
      {
        id: 'higher-order-functions',
        title: 'Higher-Order Functions',
        description: 'Functions that create or modify other functions',
        xp: 50,
        duration: '25 min',
        difficulty: 'intermediate',
        concepts: ['higher-order', 'callback', 'map', 'filter', 'reduce', 'forEach'],
        steps: [
          {
            id: 'hof-intro',
            title: 'What are Higher-Order Functions?',
            difficulty: 'intermediate',
            content: [
              { type: 'text', body: 'Higher-order functions either take functions as arguments or return functions. They let you abstract over actions, not just values.' },
              { type: 'code', title: 'Functions as Values', body: '// Functions are values — you can store them\nconst greet = function(name) {\n  return "Hello, " + name;\n};\n\nconst sayBye = greet;  // Copy the function\nconsole.log(sayBye("Alice"));  // → "Hello, Alice"' },
              { type: 'text', body: 'Since functions are values, you can pass them to other functions. That\'s what higher-order functions do.' },
            ]
          },
          {
            id: 'hof-map',
            title: 'map — Transform Every Element',
            difficulty: 'intermediate',
            content: [
              { type: 'text', body: 'map creates a new array by applying a function to each element of an existing array.' },
              { type: 'code', title: 'map in Action', body: 'const numbers = [1, 2, 3, 4, 5];\n\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled);\n// → [2, 4, 6, 8, 10]\n\n// Original array is unchanged\nconsole.log(numbers);\n// → [1, 2, 3, 4, 5]' },
              { type: 'code', title: 'Practical Example', body: 'const users = [\n  { name: "Alice", age: 25 },\n  { name: "Bob", age: 30 },\n  { name: "Carol", age: 35 }\n];\n\nconst names = users.map(u => u.name);\nconsole.log(names);\n// → ["Alice", "Bob", "Carol"]' },
            ]
          },
          {
            id: 'hof-filter',
            title: 'filter — Select Elements',
            difficulty: 'intermediate',
            content: [
              { type: 'text', body: 'filter creates a new array with only the elements that pass a test (return true from the callback).' },
              { type: 'code', title: 'filter in Action', body: 'const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\nconst evens = numbers.filter(n => n % 2 === 0);\nconsole.log(evens);\n// → [2, 4, 6, 8, 10]\n\nconst odd = numbers.filter(n => n % 2 !== 0);\nconsole.log(odd);\n// → [1, 3, 5, 7, 9]' },
              { type: 'code', title: 'Chaining map and filter', body: 'const people = [\n  { name: "Alice", age: 25 },\n  { name: "Bob", age: 17 },\n  { name: "Carol", age: 30 },\n  { name: "Dave", age: 15 }\n];\n\nconst adultNames = people\n  .filter(p => p.age >= 18)\n  .map(p => p.name);\nconsole.log(adultNames);\n// → ["Alice", "Carol"]' },
            ]
          },
          {
            id: 'hof-reduce',
            title: 'reduce — Accumulate Values',
            difficulty: 'advanced',
            content: [
              { type: 'text', body: 'reduce combines all array elements into a single value. It\'s the most versatile higher-order function.' },
              { type: 'code', title: 'Basic reduce', body: 'const numbers = [10, 20, 30, 40];\n\nconst sum = numbers.reduce((accumulator, current) => {\n  return accumulator + current;\n}, 0);  // 0 is the starting value\n\nconsole.log(sum);  // → 100' },
              { type: 'text', body: 'reduce takes two arguments: a callback and an initial value. The callback receives the accumulator (running total) and the current element. Each iteration, the callback returns the new accumulator value.' },
              { type: 'code', title: 'Practical Examples', body: '// Find the longest word\nconst words = ["apple", "banana", "cherry"];\nconst longest = words.reduce((longest, word) => \n  word.length > longest.length ? word : longest, ""\n);\nconsole.log(longest);  // → "cherry"\n\n// Count occurrences\nconst letters = ["a", "b", "a", "c", "a", "b"];\nconst counts = letters.reduce((acc, letter) => {\n  acc[letter] = (acc[letter] || 0) + 1;\n  return acc;\n}, {});\nconsole.log(counts);  // → { a: 3, b: 2, c: 1 }' },
            ]
          },
        ]
      },
    ],
  },

  // ================================================================
  // WORLD 3: ARRAY OCEAN
  // ================================================================
  {
    id: 'array-ocean',
    title: 'Array Ocean',
    description: 'Work with ordered collections of data',
    icon: 'arrays',
    order: 3,
    prerequisites: ['variables-valley'],
    color: '#d4a72c',
    position: { row: 1, col: 0 },
    lessons: [
      {
        id: 'arrays-basics',
        title: 'Arrays & Data Structures',
        description: 'Create, access, and modify arrays',
        xp: 45,
        duration: '25 min',
        difficulty: 'beginner',
        concepts: ['array', 'literal', 'index', 'length', 'push', 'pop', 'splice'],
        steps: [
          {
            id: 'ab-intro',
            title: 'What is an Array?',
            difficulty: 'beginner',
            content: [
              { type: 'text', body: 'An array is an ordered list of values. Each value has a position (index) starting from 0. Arrays can hold any type of value — numbers, strings, objects, even other arrays.' },
              { type: 'code', title: 'Creating Arrays', body: 'const fruits = ["apple", "banana", "cherry"];\nconsole.log(fruits[0]);   // → "apple"\nconsole.log(fruits[2]);   // → "cherry"\nconsole.log(fruits.length); // → 3' },
              { type: 'text', body: 'Arrays are zero-indexed: the first element is at index 0, the second at index 1, and so on. The length property tells you how many elements are in the array.' },
            ]
          },
          {
            id: 'ab-modify',
            title: 'Modifying Arrays',
            difficulty: 'beginner',
            content: [
              { type: 'code', title: 'Adding and Removing', body: 'let colors = ["red", "green"];\n\n// End operations\ncolors.push("blue");    // Add to end\nconsole.log(colors);    // → ["red", "green", "blue"]\n\ncolors.pop();           // Remove from end\nconsole.log(colors);    // → ["red", "green"]\n\n// Start operations\ncolors.unshift("yellow"); // Add to start\nconsole.log(colors);      // → ["yellow", "red", "green"]\n\ncolors.shift();          // Remove from start\nconsole.log(colors);      // → ["red", "green"]' },
              { type: 'text', body: 'push/pop work on the end. unshift/shift work on the start. These modify the original array.' },
            ]
          },
          {
            id: 'ab-spread',
            title: 'Spread Operator — Immutable Arrays',
            difficulty: 'intermediate',
            content: [
              { type: 'text', body: 'The spread operator (...) lets you create new arrays without modifying the original. This is the modern, safer approach.' },
              { type: 'code', title: 'Spread for Arrays', body: 'const original = [1, 2, 3];\nconst clone = [...original];\nconsole.log(clone);  // → [1, 2, 3]\n\n// Merge arrays\nconst front = [1, 2];\nconst back = [3, 4];\nconst merged = [...front, ...back];\nconsole.log(merged); // → [1, 2, 3, 4]\n\n// Add to array immutably\nconst items = ["a", "b"];\nconst moreItems = [...items, "c"];\nconsole.log(moreItems); // → ["a", "b", "c"]' },
            ]
          },
        ]
      },
      {
        id: 'iteration-patterns',
        title: 'Iteration Patterns',
        description: 'Loop through arrays with style using modern patterns',
        xp: 40,
        duration: '20 min',
        difficulty: 'intermediate',
        concepts: ['for...of', 'entries', 'keys', 'values', 'unpacking'],
        steps: [
          {
            id: 'ip-forof',
            title: 'for...of — The Modern Loop',
            difficulty: 'beginner',
            content: [
              { type: 'text', body: 'for...of is the simplest way to iterate over arrays. It gives you each element directly.' },
              { type: 'code', title: 'Basic for...of', body: 'const colors = ["red", "green", "blue"];\n\nfor (const color of colors) {\n  console.log(color);\n}\n// → red\n// → green\n// → blue' },
              { type: 'code', title: 'With Index', body: 'const colors = ["red", "green", "blue"];\n\nfor (const [index, color] of colors.entries()) {\n  console.log(`${index}: ${color}`);\n}\n// → 0: red\n// → 1: green\n// → 2: blue' },
            ]
          },
          {
            id: 'ip-destructuring',
            title: 'Destructuring in Loops',
            difficulty: 'intermediate',
            content: [
              { type: 'code', title: 'Destructure Objects in for...of', body: 'const users = [\n  { name: "Alice", age: 25 },\n  { name: "Bob", age: 30 },\n  { name: "Carol", age: 35 }\n];\n\nfor (const { name, age } of users) {\n  console.log(`${name} is ${age}`);\n}\n// → Alice is 25\n// → Bob is 30\n// → Carol is 35' },
              { type: 'code', title: 'Object Iteration', body: 'const person = {\n  name: "Alice",\n  age: 30,\n  city: "NYC"\n};\n\nfor (const [key, value] of Object.entries(person)) {\n  console.log(`${key}: ${value}`);\n}\n// → name: Alice\n// → age: 30\n// → city: NYC' },
            ]
          },
        ]
      },
    ],
  },

  // ================================================================
  // WORLD 4: OBJECT CITY
  // ================================================================
  {
    id: 'object-city',
    title: 'Object City',
    description: 'Model real-world entities with objects and classes',
    icon: 'objects',
    order: 4,
    prerequisites: ['array-ocean'],
    color: '#cf222e',
    position: { row: 1, col: 1 },
    lessons: [
      {
        id: 'object-basics',
        title: 'Object Basics',
        description: 'Create and access object properties',
        xp: 45,
        duration: '25 min',
        difficulty: 'beginner',
        concepts: ['object', 'property', 'key', 'value', 'dot-notation', 'bracket-notation', 'this'],
        steps: [
          {
            id: 'ob-intro',
            title: 'What is an Object?',
            difficulty: 'beginner',
            content: [
              { type: 'text', body: 'Objects are collections of key-value pairs. While arrays store data in order, objects store data with named properties. Objects represent things — a person, a car, a document.' },
              { type: 'code', title: 'Creating Objects', body: 'const dog = {\n  name: "Rex",\n  breed: "Labrador",\n  age: 5,\n  bark() {\n    console.log("Woof!");\n  }\n};\n\nconsole.log(dog.name);  // → "Rex"\ndog.bark();             // → Woof!' },
            ]
          },
          {
            id: 'ob-access',
            title: 'Accessing Properties',
            difficulty: 'beginner',
            content: [
              { type: 'code', title: 'Dot vs Bracket Notation', body: 'const user = { name: "Alice", age: 30 };\n\n// Dot notation (preferred)\nconsole.log(user.name);  // → "Alice"\n\n// Bracket notation (required for variables)\nconsole.log(user["age"]); // → 30\n\nconst field = "name";\nconsole.log(user[field]); // → "Alice"\n// console.log(user.field); // → undefined!' },
              { type: 'text', body: 'Use dot notation when you know the property name. Use bracket notation when the name is in a variable or has special characters.' },
            ]
          },
          {
            id: 'ob-this',
            title: 'The this Keyword',
            difficulty: 'intermediate',
            content: [
              { type: 'text', body: 'this refers to the object the method was called on. It lets methods access other properties of the same object.' },
              { type: 'code', title: 'Using this', body: 'const counter = {\n  count: 0,\n  increment() {\n    this.count++;\n  },\n  getCount() {\n    return this.count;\n  }\n};\n\ncounter.increment();\ncounter.increment();\nconsole.log(counter.getCount()); // → 2' },
              { type: 'text', body: 'Arrow functions do NOT have their own this — they inherit from the surrounding scope. That\'s why you should not use them as object methods.' },
            ]
          },
        ]
      },
      {
        id: 'prototypes-classes',
        title: 'Prototypes & Classes',
        description: 'Understand object-oriented patterns in JavaScript',
        xp: 50,
        duration: '30 min',
        difficulty: 'intermediate',
        concepts: ['prototype', 'class', 'constructor', 'extends', 'super', 'inheritance'],
        steps: [
          {
            id: 'pc-intro',
            title: 'Classes — Creating Blueprints',
            difficulty: 'intermediate',
            content: [
              { type: 'text', body: 'Classes are blueprints for creating objects. They define what properties and methods objects of that type should have. Think of a class as a cookie cutter — the class defines the shape, and each new object is a cookie.' },
              { type: 'code', title: 'Basic Class', body: 'class Rectangle {\n  constructor(width, height) {\n    this.width = width;\n    this.height = height;\n  }\n\n  get area() {\n    return this.width * this.height;\n  }\n\n  toString() {\n    return `Rectangle(${this.width}x${this.height})`;\n  }\n}\n\nconst rect = new Rectangle(5, 10);\nconsole.log(rect.area);      // → 50\nconsole.log(rect.toString()); // → Rectangle(5x10)' },
            ]
          },
          {
            id: 'pc-inheritance',
            title: 'Inheritance — Extending Classes',
            difficulty: 'intermediate',
            content: [
              { type: 'text', body: 'Classes can extend other classes. The child class inherits all properties and methods from the parent, and can add its own or override existing ones.' },
              { type: 'code', title: 'extends and super', body: 'class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    console.log(`${this.name} makes a sound`);\n  }\n}\n\nclass Dog extends Animal {\n  constructor(name, breed) {\n    super(name);  // Call parent constructor\n    this.breed = breed;\n  }\n  speak() {  // Override parent method\n    console.log(`${this.name} barks!`);\n  }\n}\n\nconst rex = new Dog("Rex", "Labrador");\nrex.speak();  // → Rex barks!' },
            ]
          },
        ]
      },
      {
        id: 'destructuring-spread',
        title: 'Destructuring & Spread',
        description: 'Extract values with elegant syntax',
        xp: 45,
        duration: '20 min',
        difficulty: 'intermediate',
        concepts: ['destructuring', 'pattern', 'default-values', 'nested', 'spread', 'rest'],
        steps: [
          {
            id: 'ds-object',
            title: 'Object Destructuring',
            difficulty: 'intermediate',
            content: [
              { type: 'code', title: 'Basic Destructuring', body: 'const user = { name: "Alice", age: 30, city: "NYC" };\n\nconst { name, age } = user;\nconsole.log(name, age); // → Alice 30' },
              { type: 'code', title: 'Rename and Default Values', body: 'const { name: userName, role = "user" } = user;\nconsole.log(userName); // → Alice\nconsole.log(role);     // → user (default)' },
              { type: 'code', title: 'Nested Destructuring', body: 'const data = {\n  user: { name: "Alice" },\n  settings: { theme: "dark" }\n};\n\nconst { user: { name }, settings: { theme } } = data;\nconsole.log(name, theme); // → Alice dark' },
            ]
          },
          {
            id: 'ds-spread',
            title: 'Spread and Rest',
            difficulty: 'intermediate',
            content: [
              { type: 'code', title: 'Spread — Expand', body: '// Arrays\nconst a = [1, 2];\nconst b = [...a, 3, 4];  // → [1, 2, 3, 4]\n\n// Objects\nconst defaults = { theme: "dark", lang: "en" };\nconst settings = { ...defaults, lang: "fr" };\n// → { theme: "dark", lang: "fr" }' },
              { type: 'code', title: 'Rest — Collect', body: '// In function parameters\nfunction sum(...numbers) {\n  return numbers.reduce((a, b) => a + b, 0);\n}\nconsole.log(sum(1, 2, 3, 4)); // → 10\n\n// In destructuring\nconst [first, ...rest] = [10, 20, 30, 40];\nconsole.log(first); // → 10\nconsole.log(rest);  // → [20, 30, 40]' },
            ]
          },
        ]
      },
    ],
  },

  // ================================================================
  // WORLD 5: DOM KINGDOM
  // ================================================================
  {
    id: 'dom-kingdom',
    title: 'DOM Kingdom',
    description: 'Bring your web pages to life with the Document Object Model',
    icon: 'dom',
    order: 5,
    prerequisites: ['object-city'],
    color: '#5e6ad2',
    position: { row: 1, col: 2 },
    lessons: [
      {
        id: 'dom-intro',
        title: 'The Document Object Model',
        description: 'Understand how browsers represent web pages',
        xp: 40,
        duration: '20 min',
        difficulty: 'beginner',
        concepts: ['DOM', 'document', 'element', 'node', 'tree', 'window'],
        steps: [
          {
            id: 'di-what',
            title: 'What is the DOM?',
            difficulty: 'beginner',
            content: [
              { type: 'text', body: 'The DOM (Document Object Model) is the browser\'s representation of an HTML page as a tree of objects. JavaScript uses the DOM to find, create, modify, and delete HTML elements.' },
              { type: 'code', title: 'The DOM Tree', body: '// HTML becomes a tree of nodes:\n// document\n//   └── html\n//       ├── head\n//       │   └── title\n//       │       └── "My Page"\n//       └── body\n//           ├── h1\n//           │   └── "Hello"\n//           └── p\n//               └── "World"' },
              { type: 'text', body: 'Every HTML tag becomes an Element node. Text becomes a Text node. The document is the root. JavaScript can traverse and modify this tree to change what\'s displayed.' },
            ]
          },
          {
            id: 'di-access',
            title: 'Accessing the DOM',
            difficulty: 'beginner',
            content: [
              { type: 'code', title: 'Window and Document', body: '// The global object\nconsole.log(window);\n\n// The document represents the page\nconsole.log(document);\nconsole.log(document.body.tagName);  // → "BODY"' },
            ]
          },
        ]
      },
      {
        id: 'selecting-elements',
        title: 'Selecting Elements',
        description: 'Find elements in the DOM tree',
        xp: 40,
        duration: '20 min',
        difficulty: 'beginner',
        concepts: ['getElementById', 'querySelector', 'querySelectorAll', 'traversal'],
        steps: [
          {
            id: 'se-query',
            title: 'Finding Elements',
            difficulty: 'beginner',
            content: [
              { type: 'code', title: 'Selection Methods', body: '// By ID — fastest\nconst header = document.getElementById("header");\n\n// By CSS selector — first match\nconst first = document.querySelector("p.card");\n\n// By CSS selector — all matches\nconst all = document.querySelectorAll(".item");\nconsole.log(all.length);  // → number of matches' },
            ]
          },
          {
            id: 'se-traverse',
            title: 'Traversing the DOM',
            difficulty: 'intermediate',
            content: [
              { type: 'code', title: 'Navigation Properties', body: 'const list = document.querySelector("ul");\n\nconsole.log(list.parentElement);      // Parent\nconsole.log(list.children);            // Children\nconsole.log(list.firstElementChild);   // First child\nconsole.log(list.lastElementChild);    // Last child\n\nconst first = list.querySelector("li");\nconsole.log(first.nextElementSibling); // Next sibling' },
            ]
          },
        ]
      },
      {
        id: 'manipulating-dom',
        title: 'Manipulating the DOM',
        description: 'Create, modify, and remove elements',
        xp: 45,
        duration: '25 min',
        difficulty: 'beginner',
        concepts: ['createElement', 'appendChild', 'removeChild', 'textContent', 'innerHTML', 'style', 'classList'],
        steps: [
          {
            id: 'md-create',
            title: 'Creating Elements',
            difficulty: 'beginner',
            content: [
              { type: 'code', title: 'Create and Add', body: 'const card = document.createElement("div");\ncard.className = "card";\ncard.textContent = "Hello!";\ndocument.body.appendChild(card);' },
            ]
          },
          {
            id: 'md-modify',
            title: 'Modifying Elements',
            difficulty: 'beginner',
            content: [
              { type: 'code', title: 'Text, Attributes, Styles', body: 'const el = document.querySelector(".title");\n\n// Text\nelement.textContent = "New Title";\nelement.innerHTML = "<em>Styled</em> Title";\n\n// CSS classes (preferred)\nelement.classList.add("active");\nelement.classList.remove("hidden");\nelement.classList.toggle("selected");\n\n// Direct styles (avoid when possible)\nelement.style.color = "blue";' },
            ]
          },
          {
            id: 'md-remove',
            title: 'Removing Elements',
            difficulty: 'beginner',
            content: [
              { type: 'code', title: 'Delete Elements', body: 'const item = document.querySelector(".card");\n\n// Modern way\nitem.remove();\n\n// Clone an element\nconst clone = item.cloneNode(true);\ndocument.body.appendChild(clone);' },
            ]
          },
        ]
      },
    ],
  },

  // ================================================================
  // WORLD 6: EVENT LOOP LABORATORY
  // ================================================================
  {
    id: 'event-laboratory',
    title: 'Event Loop Laboratory',
    description: 'Discover how JavaScript handles events and user interactions',
    icon: 'eventLoop',
    order: 6,
    prerequisites: ['dom-kingdom'],
    color: '#d4a72c',
    position: { row: 2, col: 0 },
    lessons: [
      {
        id: 'event-basics',
        title: 'Event Handling',
        description: 'Respond to user interactions with event listeners',
        xp: 40,
        duration: '20 min',
        difficulty: 'beginner',
        concepts: ['addEventListener', 'removeEventListener', 'event', 'click', 'handler'],
        steps: [
          {
            id: 'eb-intro',
            title: 'What are Events?',
            difficulty: 'beginner',
            content: [
              { type: 'text', body: 'Events are notifications that something happened — a click, a key press, a mouse move. You respond to events by registering handler functions.' },
              { type: 'code', title: 'Adding Event Listeners', body: 'const button = document.querySelector("button");\n\nbutton.addEventListener("click", () => {\n  console.log("Button clicked!");\n});' },
            ]
          },
          {
            id: 'eb-types',
            title: 'Common Event Types',
            difficulty: 'beginner',
            content: [
              { type: 'code', title: 'Mouse and Keyboard', body: '// Mouse\nbutton.addEventListener("click", () => {});\nbutton.addEventListener("mouseenter", () => {});\nbutton.addEventListener("mouseleave", () => {});\n\n// Keyboard\ndocument.addEventListener("keydown", (e) => {\n  console.log("Key:", e.key);\n});\n\n// Input\nconst input = document.querySelector("input");\ninput.addEventListener("input", (e) => {\n  console.log("Value:", e.target.value);\n});' },
            ]
          },
        ]
      },
      {
        id: 'event-object',
        title: 'The Event Object',
        description: 'Access event details and control behavior',
        xp: 45,
        duration: '20 min',
        difficulty: 'intermediate',
        concepts: ['event-object', 'preventDefault', 'stopPropagation', 'target'],
        steps: [
          {
            id: 'eo-object',
            title: 'Event Object Properties',
            difficulty: "intermediate",
            content: [
              { type: 'code', title: 'Reading Event Data', body: 'button.addEventListener("click", (event) => {\n  console.log("Type:", event.type);\n  console.log("Target:", event.target);\n  console.log("Position:", event.clientX, event.clientY);\n  console.log("Shift:", event.shiftKey);\n});' },
            ]
          },
          {
            id: 'eo-control',
            title: 'Controlling Events',
            difficulty: "intermediate",
            content: [
              { type: 'code', title: 'preventDefault and stopPropagation', body: '// Prevent default behavior\nconst form = document.querySelector("form");\nform.addEventListener("submit", (e) => {\n  e.preventDefault();  // Don\'t reload the page\n  // Handle form with JavaScript instead\n});\n\n// Stop event from bubbling to parent\ndocument.querySelector("div").addEventListener("click", () => {\n  console.log("Div clicked");\n});\ndocument.querySelector("button").addEventListener("click", (e) => {\n  e.stopPropagation();\n  console.log("Button clicked — event stops here");\n});' },
            ]
          },
        ]
      },
      {
        id: 'event-delegation',
        title: 'Event Delegation',
        description: 'Handle events efficiently on dynamic content',
        xp: 50,
        duration: '25 min',
        difficulty: 'intermediate',
        concepts: ['delegation', 'bubbling', 'closest', 'matches'],
        steps: [
          {
            id: 'ed-bubbling',
            title: 'Event Bubbling',
            difficulty: 'intermediate',
            content: [
              { type: 'text', body: 'Events bubble up through the DOM tree. When you click a child element, the event fires on the child, then the parent, then the grandparent, and so on.' },
              { type: 'code', title: 'Bubbling in Action', body: '// <div id="gp">\n//   <div id="parent">\n//     <button id="child">Click</button>\n//   </div>\n// </div>\n\ndocument.querySelector("#gp").addEventListener("click", \n  () => console.log("Grandparent")\n);\ndocument.querySelector("#parent").addEventListener("click", \n  () => console.log("Parent")\n);\ndocument.querySelector("#child").addEventListener("click", \n  () => console.log("Child")\n);\n\n// Clicking child logs:\n// → Child\n// → Parent\n// → Grandparent' },
            ]
          },
          {
            id: 'ed-pattern',
            title: 'The Delegation Pattern',
            difficulty: 'intermediate',
            content: [
              { type: 'text', body: 'Instead of adding a listener to every item, add ONE listener to the parent. Use e.target to figure out what was clicked.' },
              { type: 'code', title: 'Single Listener for All Items', body: 'const list = document.querySelector("#list");\n\nlist.addEventListener("click", (e) => {\n  const item = e.target.closest(".item");\n  if (item) {\n    console.log("Clicked:", item.textContent);\n  }\n});\n\n// Works for dynamically added items too!\nconst newItem = document.createElement("li");\nnewItem.className = "item";\nnewItem.textContent = "New";\nlist.appendChild(newItem);\n// Clicking it triggers the same handler' },
            ]
          },
        ]
      },
    ],
  },

  // ================================================================
  // WORLD 7: ASYNC GALAXY
  // ================================================================
  {
    id: 'async-galaxy',
    title: 'Async Galaxy',
    description: 'Master asynchronous programming with promises and async/await',
    icon: 'async',
    order: 7,
    prerequisites: ['functions-forest', 'event-laboratory'],
    color: '#5e6ad2',
    position: { row: 2, col: 1 },
    lessons: [
      {
        id: 'callbacks-promises',
        title: 'Callbacks & Promises',
        description: 'Handle asynchronous operations elegantly',
        xp: 50,
        duration: '25 min',
        difficulty: 'intermediate',
        concepts: ['callback', 'Promise', 'then', 'catch', 'finally', 'resolve', 'reject'],
        steps: [
          {
            id: 'cp-callbacks',
            title: 'What are Callbacks?',
            difficulty: 'intermediate',
            content: [
              { type: 'text', body: 'A callback is a function passed as an argument to another function, to be called later. Callbacks are how JavaScript handles asynchronous operations.' },
              { type: 'code', title: 'Basic Callback', body: 'function fetchData(url, callback) {\n  // Simulating async operation\n  setTimeout(() => {\n    const data = { id: 1, name: "Alice" };\n    callback(null, data);\n  }, 1000);\n}\n\nfetchData("/api/user", (error, data) => {\n  if (error) {\n    console.error("Failed:", error);\n    return;\n  }\n  console.log("Got data:", data);\n});' },
            ]
          },
          {
            id: 'cp-promises',
            title: 'Promise Basics',
            difficulty: 'intermediate',
            content: [
              { type: 'text', body: 'A Promise represents a future value. It can be pending, fulfilled, or rejected. Promises chain together for clean async code.' },
              { type: 'code', title: 'Creating and Using Promises', body: 'function fetchUser(id) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (id > 0) {\n        resolve({ id, name: "Alice" });\n      } else {\n        reject(new Error("Invalid ID"));\n      }\n    }, 1000);\n  });\n}\n\nfetchUser(1)\n  .then(user => console.log("User:", user))\n  .catch(error => console.error("Error:", error))\n  .finally(() => console.log("Done!"));' },
            ]
          },
        ]
      },
      {
        id: 'async-await',
        title: 'Async/Await',
        description: 'Write clean, readable asynchronous code',
        xp: 55,
        duration: '25 min',
        difficulty: 'intermediate',
        concepts: ['async', 'await', 'try', 'catch', 'sequential', 'parallel'],
        steps: [
          {
            id: 'aa-basics',
            title: 'Async/Await Syntax',
            difficulty: 'intermediate',
            content: [
              { type: 'text', body: 'async/await makes asynchronous code look synchronous. An async function always returns a Promise. await pauses until a Promise settles.' },
              { type: 'code', title: 'Basic Usage', body: 'async function getUser() {\n  const response = await fetch("/api/user");\n  const user = await response.json();\n  return user;\n}\n\n// With error handling\nasync function getUserSafe() {\n  try {\n    const response = await fetch("/api/user");\n    if (!response.ok) {\n      throw new Error(`HTTP ${response.status}`);\n    }\n    return await response.json();\n  } catch (error) {\n    console.error("Failed:", error);\n    return null;\n  }\n}' },
            ]
          },
          {
            id: 'aa-parallel',
            title: 'Sequential vs Parallel',
            difficulty: 'advanced',
            content: [
              { type: 'code', title: 'Run Tasks in Parallel', body: '// SEQUENTIAL — slow (3 seconds total)\nasync function sequential() {\n  const user = await fetchUser();     // 1 sec\n  const posts = await fetchPosts();   // 1 sec\n  const comments = await fetchComments(); // 1 sec\n}\n\n// PARALLEL — fast (1 second total)\nasync function parallel() {\n  const [user, posts, comments] = await Promise.all([\n    fetchUser(),\n    fetchPosts(),\n    fetchComments()\n  ]);\n  return { user, posts, comments };\n}' },
            ]
          },
        ]
      },
      {
        id: 'fetch-api',
        title: 'The Fetch API',
        description: 'Make HTTP requests from the browser',
        xp: 55,
        duration: '25 min',
        difficulty: 'intermediate',
        concepts: ['fetch', 'GET', 'POST', 'headers', 'JSON', 'Response'],
        steps: [
          {
            id: 'fa-get',
            title: 'GET Requests',
            difficulty: 'intermediate',
            content: [
              { type: 'code', title: 'Fetching Data', body: 'const response = await fetch("https://api.example.com/users");\n\nif (!response.ok) {\n  throw new Error(`HTTP error! status: ${response.status}`);\n}\n\nconst users = await response.json();\nconsole.log(users);' },
            ]
          },
          {
            id: 'fa-post',
            title: 'POST Requests',
            difficulty: 'intermediate',
            content: [
              { type: 'code', title: 'Sending Data', body: 'const response = await fetch("https://api.example.com/users", {\n  method: "POST",\n  headers: {\n    "Content-Type": "application/json"\n  },\n  body: JSON.stringify({\n    name: "Alice",\n    email: "alice@example.com"\n  })\n});\n\nconst newUser = await response.json();' },
            ]
          },
        ]
      },
    ],
  },

  // ================================================================
  // WORLD 8: CANVAS & GAMES
  // ================================================================
  {
    id: 'canvas-and-games',
    title: 'Canvas & Games',
    description: 'Build interactive graphics and games with Canvas and DOM',
    icon: 'canvas',
    order: 8,
    prerequisites: ['dom-kingdom', 'event-laboratory'],
    color: '#cf222e',
    position: { row: 2, col: 2 },
    lessons: [
      {
        id: 'canvas-basics',
        title: 'Drawing on Canvas',
        description: 'Create graphics with the HTML5 Canvas API',
        xp: 50,
        duration: '25 min',
        difficulty: 'intermediate',
        concepts: ['canvas', 'getContext', 'fillRect', 'arc', 'beginPath', 'drawImage'],
        steps: [
          {
            id: 'cb-setup',
            title: 'Setting Up Canvas',
            difficulty: 'intermediate',
            content: [
              { type: 'code', title: 'Basic Canvas', body: '// HTML: <canvas width="400" height="300"></canvas>\nconst canvas = document.querySelector("canvas");\nconst cx = canvas.getContext("2d");\n\n// Fill background\ncx.fillStyle = "rgb(52, 166, 251)";\ncx.fillRect(0, 0, canvas.width, canvas.height);\n\n// Draw a circle\ncx.beginPath();\ncx.arc(200, 150, 50, 0, Math.PI * 2);\ncx.fillStyle = "red";\ncx.fill();\n\n// Draw text\ncx.font = "28px Georgia";\ncx.fillStyle = "white";\ncx.fillText("Hello Canvas!", 100, 280);' },
            ]
          },
          {
            id: 'cb-paths',
            title: 'Drawing Paths',
            difficulty: 'intermediate',
            content: [
              { type: 'code', title: 'Lines and Shapes', body: '// Triangle\ncx.beginPath();\ncx.moveTo(100, 50);\ncx.lineTo(50, 150);\ncx.lineTo(150, 150);\ncx.closePath();\ncx.fillStyle = "green";\ncx.fill();\n\n// Curve\ncx.beginPath();\ncx.moveTo(10, 90);\ncx.quadraticCurveTo(60, 10, 90, 90);\ncx.stroke();' },
            ]
          },
          {
            id: 'cb-animation',
            title: 'Animation Loop',
            difficulty: 'advanced',
            content: [
              { type: 'code', title: 'requestAnimationFrame', body: 'let angle = 0;\n\nfunction animate() {\n  cx.clearRect(0, 0, canvas.width, canvas.height);\n  \n  cx.save();\n  cx.translate(200, 150);\n  cx.rotate(angle);\n  cx.fillStyle = "blue";\n  cx.fillRect(-20, -20, 40, 40);\n  cx.restore();\n  \n  angle += 0.02;\n  requestAnimationFrame(animate);\n}\n\nanimate();' },
            ]
          },
        ]
      },
      {
        id: 'pixel-editor',
        title: 'Pixel Art Editor',
        description: 'Build a drawing application with Canvas',
        xp: 60,
        duration: '30 min',
        difficulty: 'advanced',
        concepts: ['immutable-state', 'component', 'tool', 'undo', 'flood-fill'],
        steps: [
          {
            id: 'pe-state',
            title: 'Immutable State Management',
            difficulty: 'advanced',
            content: [
              { type: 'text', body: 'The pixel editor uses immutable data — instead of modifying pictures, it creates new ones. This makes undo history trivial.' },
              { type: 'code', title: 'Picture Class', body: 'class Picture {\n  constructor(width, height, pixels) {\n    this.width = width;\n    this.height = height;\n    this.pixels = pixels;\n  }\n\n  static empty(width, height, color) {\n    const pixels = new Array(width * height).fill(color);\n    return new Picture(width, height, pixels);\n  }\n\n  pixel(x, y) {\n    return this.pixels[x + y * this.width];\n  }\n\n  draw(pixels) {\n    const copy = this.pixels.slice();\n    for (const {x, y, color} of pixels) {\n      copy[x + y * this.width] = color;\n    }\n    return new Picture(this.width, this.height, copy);\n  }\n}' },
            ]
          },
          {
            id: 'pe-tools',
            title: 'Drawing Tools',
            difficulty: 'advanced',
            content: [
              { type: 'code', title: 'Draw and Fill', body: '// Draw tool — paint single pixels\nfunction draw(pos, state, dispatch) {\n  function drawPixel({x, y}) {\n    dispatch({\n      picture: state.picture.draw([\n        {x, y, color: state.color}\n      ])\n    });\n  }\n  drawPixel(pos);\n  return drawPixel; // Return move handler\n}\n\n// Fill tool — flood fill connected pixels\nfunction fill({x, y}, state, dispatch) {\n  const targetColor = state.picture.pixel(x, y);\n  const drawn = [{x, y, color: state.color}];\n  const visited = new Set();\n  for (let i = 0; i < drawn.length; i++) {\n    for (const {dx, dy} of [{dx:-1,dy:0},{dx:1,dy:0},\n                            {dx:0,dy:-1},{dx:0,dy:1}]) {\n      const nx = drawn[i].x + dx, ny = drawn[i].y + dy;\n      if (nx >= 0 && nx < state.picture.width &&\n          ny >= 0 && ny < state.picture.height &&\n          !visited.has(nx + "," + ny) &&\n          state.picture.pixel(nx, ny) === targetColor) {\n        drawn.push({x: nx, y: ny, color: state.color});\n        visited.add(nx + "," + ny);\n      }\n    }\n  }\n  dispatch({picture: state.picture.draw(drawn)});\n}' },
            ]
          },
        ]
      },
    ],
  },

  // ================================================================
  // WORLD 9: NODE.JS FACTORY
  // ================================================================
  {
    id: 'node-factory',
    title: 'Node.js Factory',
    description: 'Build server-side applications with Node.js',
    icon: 'node',
    order: 9,
    prerequisites: ['async-galaxy'],
    color: '#2da44e',
    position: { row: 3, col: 1 },
    lessons: [
      {
        id: 'node-intro',
        title: 'Introduction to Node.js',
        description: 'Run JavaScript outside the browser',
        xp: 45,
        duration: '20 min',
        difficulty: 'intermediate',
        concepts: ['node', 'npm', 'module', 'import', 'export', 'package.json'],
        steps: [
          {
            id: 'ni-what',
            title: 'What is Node.js?',
            difficulty: 'intermediate',
            content: [
              { type: 'text', body: 'Node.js is a JavaScript runtime that runs JavaScript outside the browser. It uses Chrome\'s V8 engine and provides APIs for files, networking, and more.' },
              { type: 'code', title: 'Running JavaScript', body: '// hello.js\nconsole.log("Hello from Node!");\n\n// Run from terminal:\n// $ node hello.js\n// Hello from Node!' },
            ]
          },
          {
            id: 'ni-modules',
            title: 'ES Modules in Node',
            difficulty: 'intermediate',
            content: [
              { type: 'code', title: 'import and export', body: '// reverse.mjs\nexport function reverse(string) {\n  return Array.from(string).reverse().join("");\n}\n\n// main.mjs\nimport {reverse} from "./reverse.mjs";\nconsole.log(reverse("JavaScript")); // → tpircSavaJ' },
            ]
          },
          {
            id: 'ni-npm',
            title: 'NPM — Package Manager',
            difficulty: 'intermediate',
            content: [
              { type: 'code', title: 'Using Packages', body: '// Install a package\n// $ npm install express\n\n// package.json\n{\n  "name": "my-app",\n  "version": "1.0.0",\n  "dependencies": {\n    "express": "^4.18.0"\n  }\n}\n\n// Use it\nimport express from "express";\nconst app = express();' },
            ]
          },
        ]
      },
      {
        id: 'file-system',
        title: 'File System Operations',
        description: 'Read and write files with Node.js',
        xp: 50,
        duration: '20 min',
        difficulty: 'intermediate',
        concepts: ['fs', 'readFile', 'writeFile', 'readdir', 'path'],
        steps: [
          {
            id: 'fs-read',
            title: 'Reading and Writing Files',
            difficulty: 'intermediate',
            content: [
              { type: 'code', title: 'Basic File Operations', body: 'import {readFile, writeFile, readdir} from "node:fs/promises";\n\n// Read a file\nconst text = await readFile("file.txt", "utf8");\n\n// Write a file\nawait writeFile("output.txt", "Hello, world!");\n\n// List directory\nconst files = await readdir(".");\nconsole.log(files);' },
            ]
          },
          {
            id: 'fs-streams',
            title: 'Working with Streams',
            difficulty: 'advanced',
            content: [
              { type: 'code', title: 'Stream Large Files', body: 'import {createReadStream, createWriteStream} from "node:fs";\nimport {pipeline} from "node:stream/promises";\n\nconst readStream = createReadStream("large-file.txt");\nconst writeStream = createWriteStream("copy.txt");\n\nawait pipeline(readStream, writeStream);\nconsole.log("File copied!");' },
            ]
          },
        ]
      },
      {
        id: 'http-server',
        title: 'HTTP Servers',
        description: 'Create web servers with Node.js',
        xp: 60,
        duration: '30 min',
        difficulty: 'advanced',
        concepts: ['http', 'createServer', 'request', 'response', 'route', 'static'],
        steps: [
          {
            id: 'hs-basic',
            title: 'Basic HTTP Server',
            difficulty: 'intermediate',
            content: [
              { type: 'code', title: 'Your First Server', body: 'import {createServer} from "node:http";\n\nconst server = createServer((request, response) => {\n  response.writeHead(200, {"Content-Type": "text/html"});\n  response.write(`<h1>Hello!</h1>\n    <p>You asked for ${request.url}</p>`);\n  response.end();\n});\n\nserver.listen(8000);\nconsole.log("Listening on port 8000");' },
            ]
          },
          {
            id: 'hs-routing',
            title: 'Routing and Methods',
            difficulty: 'advanced',
            content: [
              { type: 'code', title: 'Handle Different Routes', body: 'const methods = Object.create(null);\n\nmethods.GET = async (request) => {\n  const url = new URL(request.url, "http://d");\n  if (url.pathname === "/") {\n    return { body: "<h1>Home</h1>", type: "text/html" };\n  }\n  if (url.pathname === "/api/users") {\n    const users = await getUsersFromDB();\n    return { body: JSON.stringify(users), type: "application/json" };\n  }\n  return { status: 404, body: "Not found" };\n};\n\nmethods.POST = async (request) => {\n  const body = await readBody(request);\n  const data = JSON.parse(body);\n  await saveToDatabase(data);\n  return { status: 201, body: "Created" };\n};' },
            ]
          },
          {
            id: 'hs-static',
            title: 'Static File Server',
            difficulty: 'advanced',
            content: [
              { type: 'code', title: 'Serve Files', body: 'import {readFile, stat} from "node:fs/promises";\nimport {join, extname} from "node:path";\n\nconst MIME = {\n  ".html": "text/html",\n  ".js": "application/javascript",\n  ".css": "text/css",\n  ".json": "application/json"\n};\n\nasync function serveStatic(request, response) {\n  const url = new URL(request.url, "http://d");\n  const filePath = join("./public", url.pathname);\n  try {\n    const info = await stat(filePath);\n    const content = await readFile(filePath);\n    const ext = extname(filePath);\n    response.writeHead(200, {\n      "Content-Type": MIME[ext] || "text/plain"\n    });\n    response.end(content);\n  } catch {\n    response.writeHead(404);\n    response.end("Not found");\n  }\n}\n\ncreateServer(serveStatic).listen(8000);' },
            ]
          },
        ]
      },
    ],
  },
];

// ============================================================
// HELPER FUNCTIONS
// ============================================================

export function getWorld(worldId) {
  return worlds.find(w => w.id === worldId);
}

export function getLesson(worldId, lessonId) {
  const world = getWorld(worldId);
  return world?.lessons.find(l => l.id === lessonId);
}

export function getStep(worldId, lessonId, stepId) {
  const lesson = getLesson(worldId, lessonId);
  return lesson?.steps.find(s => s.id === stepId);
}

export function getWorldProgress(worldId, completedLessons) {
  const world = getWorld(worldId);
  if (!world) return 0;
  const completed = world.lessons.filter(l => completedLessons.includes(l.id)).length;
  return Math.round((completed / world.lessons.length) * 100);
}

export function getNextLesson(currentWorldId, currentLessonId, completedLessons) {
  const worldIndex = worlds.findIndex(w => w.id === currentWorldId);
  if (worldIndex === -1) return null;

  const world = worlds[worldIndex];
  const lessonIndex = world.lessons.findIndex(l => l.id === currentLessonId);

  if (lessonIndex < world.lessons.length - 1) {
    return { worldId: world.id, lesson: world.lessons[lessonIndex + 1] };
  }

  if (worldIndex < worlds.length - 1) {
    const nextWorld = worlds[worldIndex + 1];
    if (nextWorld.prerequisites.every(p => completedLessons.includes(p))) {
      return { worldId: nextWorld.id, lesson: nextWorld.lessons[0] };
    }
  }

  return null;
}

export function isWorldUnlocked(worldId, completedLessons) {
  const world = getWorld(worldId);
  if (!world) return false;
  if (world.prerequisites.length === 0) return true;
  return world.prerequisites.every(p => {
    const prereqWorld = getWorld(p);
    return prereqWorld?.lessons.every(l => completedLessons.includes(l.id));
  });
}
