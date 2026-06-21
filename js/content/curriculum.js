// ============================================================
// CURRICULUM - World & Lesson Data
// Based on Eloquent JavaScript (4th Edition) by Marijn Haverbeke
// ============================================================

export const worlds = [
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
        xp: 30,
        duration: '15 min',
        difficulty: 'beginner',
        concepts: ['values', 'types', 'operators', 'numbers', 'strings', 'booleans'],
        content: [
          {
            type: 'text',
            body: 'JavaScript programs manipulate values. These values are each of a certain type. Types include numbers, strings, booleans, objects, and functions. Every value has its own behavior — you can treat 117 as a number and add it to something, or treat "hello" as a string and make words from it. But a string is not a number, and trying to treat it as one won\'t work.'
          },
          {
            type: 'text',
            body: 'JavaScript uses six basic types: number, string, boolean, null, undefined, and object. Everything else is built on these foundations. Numbers in JavaScript are always floating point — there are no integers in the language, which simplifies some things but can cause surprising results.'
          },
          {
            type: 'code',
            title: 'Arithmetic with Numbers',
            body: 'console.log(100 + 4 * 11);\n// → 144\n\nconsole.log((100 + 4) * 11);\n// → 1144\n\nconsole.log(9.99);\n// → 9.99\n\nconsole.log(Infinity);\n// → Infinity\n\nconsole.log(NaN);\n// → NaN\n\nconsole.log(typeof 4.5);\n// → number\nconsole.log(typeof "carrot");\n// → string'
          },
          {
            type: 'text',
            body: 'Arithmetic operators: +, -, *, /, % (remainder), ** (power). The % operator gives the remainder of a division. The ** operator raises a number to a power. Infinity and -Infinity represent the infinite and negative infinite values. NaN represents an impossible or undefined result.'
          },
          {
            type: 'code',
            title: 'String Operations',
            body: '"a"\n// → a\n\n"one" + " two"\n// → one two\n\n"Off" + "ence" + "e"\n// → Offence\n\ntypeof "carrot"\n// → string\n\n"hello".length\n// → 5'
          },
          {
            type: 'text',
            body: 'Strings are written with either double or single quotes. The + operator concatenates (joins) strings. Strings have a length property. Special characters can be escaped with a backslash: \\n (newline), \\\\ (backslash), \\" (double quote).'
          },
          {
            type: 'code',
            title: 'Boolean Logic',
            body: 'console.log(3 > 2);\n// → true\n\nconsole.log("A" < "B");\n// → true\n\nconsole.log("Italy".length > 20);\n// → false\n\nconsole.log(undefined != null);\n// → false\n\nconsole.log(typeof true);\n// → boolean'
          },
          {
            type: 'text',
            body: 'Comparisons return boolean values (true or false). Strings are compared alphabetically. null and undefined are considered equal to themselves. The typeof operator returns a string indicating the type of the operand.'
          },
          {
            type: 'code',
            title: 'Type Coercion Gotchas',
            body: 'console.log("6" - 1);\n// → 5\n\nconsole.log("6" + 1);\n// → 61\n\nconsole.log("six" * 2);\n// → NaN\n\nconsole.log(0 || "default");\n// → default\n\nconsole.log("" || "fallback");\n// → fallback'
          },
          {
            type: 'text',
            body: 'JavaScript is loosely typed — it performs automatic type conversions (coercion). Subtracting a number from a string works because the string is converted to a number. But adding a number to a string converts the number to a string instead. This inconsistency is a common source of bugs. The || operator returns the first truthy value it finds.'
          }
        ]
      },
      {
        id: 'program-structure',
        title: 'Program Structure',
        description: 'Write statements, control flow, and basic programs',
        xp: 35,
        duration: '18 min',
        difficulty: 'beginner',
        concepts: ['let', 'const', 'if', 'else', 'while', 'for', 'do', 'blocks'],
        content: [
          {
            type: 'text',
            body: 'A program is built out of statements. A statement can be a binding declaration, a function call, or a control structure. JavaScript programs are sequences of statements separated by semicolons. Each statement starts with a keyword and ends with a semicolon (which can be omitted in some cases but is recommended).'
          },
          {
            type: 'code',
            title: 'Variable Declarations',
            body: 'let caught = 5 * 5;\nconsole.log(caught);\n// → 25\n\nconst pi = 3.14159;\n// pi = 2; // Error: Assignment to constant\n\nlet name = "Jojo";\nconsole.log(name);\n// → Jojo'
          },
          {
            type: 'text',
            body: 'let creates a variable that can be reassigned. const creates a variable that cannot be reassigned (but its contents may still change if it holds an object or array). var is the old way to declare variables — avoid it because it has confusing scoping rules. Always declare variables before using them.'
          },
          {
            type: 'code',
            title: 'Control Flow — if/else',
            body: 'let theNumber = Number(prompt("Pick a number"));\nif (!Number.isNaN(theNumber)) {\n  console.log("Your number is the square root of " +\n              (theNumber * theNumber));\n} else {\n  console.log("Hey. Why didn\'t you give me a number?");\n}'
          },
          {
            type: 'text',
            body: 'The if statement executes a block of code based on a condition. The condition can be any expression that evaluates to true or false. else provides an alternative block. You can chain else if for multiple conditions. The Number() function converts values to numbers, returning NaN for non-numeric strings.'
          },
          {
            type: 'code',
            title: 'Loops — while and for',
            body: '// While loop\nlet result = 1;\nlet counter = 0;\nwhile (counter < 10) {\n  result *= 2;\n  counter += 1;\n}\nconsole.log(result);\n// → 1024\n\n// For loop\nfor (let i = 0; i < 10; i++) {\n  console.log(i);\n}\n\n// do...while loop\nlet input;\ndo {\n  input = prompt("Password!");\n} while (input !== "sesame");'
          },
          {
            type: 'text',
            body: 'A while loop repeatedly executes its body as long as the condition is true. A for loop is a compact way to do a loop with a counter. for (initialization; condition; update) { body } — the initialization runs once, then the condition is checked before each iteration, and the update runs after each body execution. do...while ensures the body runs at least once.'
          },
          {
            type: 'code',
            title: 'Breaking Out of a Loop',
            body: 'for (let n = 0; ; n++) {\n  let current = Math.floor(Math.random() * 100);\n  if (current === 7) {\n    console.log("Found it: " + n);\n    break;\n  }\n}'
          },
          {
            type: 'text',
            body: 'The break statement immediately exits the current loop. Be careful with infinite loops — a for loop without a condition runs forever. The continue statement skips the rest of the current iteration and jumps to the next one. Both break and continue can only be used inside a loop body.'
          },
          {
            type: 'code',
            title: 'Blocks and Scope',
            body: 'let x = 10;\nif (true) {\n  let y = 20;\n  var z = 30;\n  console.log(x + y + z);\n  // → 60\n}\nconsole.log(z);\n// → 30\n// console.log(y);\n// → ReferenceError: y is not defined'
          },
          {
            type: 'text',
            body: 'A block is a group of statements enclosed in curly braces { }. let and const are block-scoped — they only exist within the block where they are declared. var is function-scoped, meaning it ignores block boundaries. This is why let and const are preferred over var.'
          }
        ]
      },
      {
        id: 'naming-conventions',
        title: 'Naming & Conventions',
        description: 'Master the art of naming variables and writing clean code',
        xp: 20,
        duration: '10 min',
        difficulty: 'beginner',
        concepts: ['naming', 'camelCase', 'reserved-words', 'conventions'],
        content: [
          {
            type: 'text',
            body: 'Good variable names are essential for readable code. In JavaScript, names (identifiers) can contain letters, digits, underscores, and dollar signs. They must start with a letter, underscore, or dollar sign — not a digit. Names are case-sensitive: myVar and myvar are different variables.'
          },
          {
            type: 'code',
            title: 'Variable Naming Rules',
            body: '// Valid names\nlet myVariable = 1;\nlet _private = 2;\nlet $element = 3;\nlet camelCase2 = 4;\n\n// Invalid names\n// let 2start = 5;     // Error\n// let my-var = 6;     // Error (minus sign)\n// let my var = 7;     // Error (space)\n// let class = 8;      // Error (reserved word)'
          },
          {
            type: 'text',
            body: 'Reserved words (keywords) cannot be used as variable names. These include: let, const, var, function, return, if, else, for, while, break, continue, class, new, this, true, false, null, undefined, typeof, and many more. Use camelCase for multi-word variable names: firstName, totalScore, isActive.'
          },
          {
            type: 'code',
            title: 'Naming Conventions',
            body: '// Use descriptive names\nlet age = 25;            // OK but vague\nlet userAge = 25;        // Better\nlet currentUserAge = 25; // Best\n\n// Functions describe actions\nfunction calculateTotal() { }\nfunction getUserById() { }\n\n// Booleans start with is/has/can\nlet isActive = true;\nlet hasPermission = false;\nlet canEdit = true;\n\n// Constants are UPPER_CASE\nconst MAX_RETRIES = 3;\nconst API_URL = "https://api.example.com";'
          },
          {
            type: 'text',
            body: 'Choose names that describe what the value represents, not how it\'s stored. A variable holding a list of users should be called users, not usersArray. Avoid abbreviations: use count instead of cnt, message instead of msg. For functions, use verb phrases: calculateTotal(), getUserById(). For booleans, prefix with is, has, or can.'
          }
        ]
      },
    ],
  },
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
        xp: 30,
        duration: '15 min',
        difficulty: 'beginner',
        concepts: ['function', 'declaration', 'call', 'return', 'parameters', 'arguments'],
        content: [
          {
            type: 'text',
            body: 'Functions are the fundamental building blocks of programs. A function is a piece of program wrapped in a value. Using such a value, you can run the program multiple times, with different inputs. A function can be called by writing the function name followed by arguments in parentheses.'
          },
          {
            type: 'code',
            title: 'Defining a Function',
            body: 'function square(x) {\n  return x * x;\n}\n\nconsole.log(square(5));\n// → 25\nconsole.log(square(10));\n// → 100'
          },
          {
            type: 'text',
            body: 'A function declaration starts with the keyword function, followed by the name, parameters in parentheses, and the body in curly braces. Parameters are local bindings that exist only inside the function. When the function is called, its parameters are filled with the actual argument values.'
          },
          {
            type: 'code',
            title: 'Return Values',
            body: 'function greet(name) {\n  return "Hello, " + name + "!";\n}\n\nlet message = greet("Alice");\nconsole.log(message);\n// → Hello, Alice!\n\n// Functions without return statements return undefined\nfunction logMessage(msg) {\n  console.log(msg);\n}\nlet result = logMessage("hi");\nconsole.log(result);\n// → undefined'
          },
          {
            type: 'text',
            body: 'The return statement determines the value the function produces. Without a return statement, a function returns undefined. A function can only return one value. To return multiple values, return an object or array. The return keyword also immediately exits the function — code after return never runs.'
          },
          {
            type: 'code',
            title: 'Function Expressions',
            body: '// Function declaration\nfunction add(a, b) {\n  return a + b;\n}\n\n// Function expression\nconst subtract = function(a, b) {\n  return a - b;\n};\n\nconsole.log(add(5, 3));     // → 8\nconsole.log(subtract(5, 3)); // → 2'
          },
          {
            type: 'text',
            body: 'Functions can also be created using function expressions — assigning a function to a variable. The main difference: function declarations are hoisted (available before they appear in the code), while function expressions are not. In modern code, function declarations are preferred for named functions.'
          },
          {
            type: 'code',
            title: 'Scope',
            body: 'let x = "outside";\n\nfunction outer() {\n  let x = "inside";\n  function inner() {\n    console.log(x);\n  }\n  inner();\n}\n\nouter(); // → inside\nconsole.log(x); // → outside'
          },
          {
            type: 'text',
            body: 'Each function creates its own scope. Variables declared inside a function are local to that function and cannot be accessed from outside. Functions can access variables from their enclosing scope (outer scopes), creating a scope chain. This is called lexical scope — a function inherits the scope where it was defined, not where it is called.'
          }
        ]
      },
      {
        id: 'arrow-functions',
        title: 'Arrow Functions',
        description: 'Write concise functions with modern syntax',
        xp: 30,
        duration: '12 min',
        difficulty: 'beginner',
        concepts: ['arrow', '=>', 'implicit-return', 'concise-body'],
        content: [
          {
            type: 'text',
            body: 'Arrow functions provide a shorter syntax for writing function expressions. They were introduced in ES6 (2015) and have become the preferred way to write small functions. Arrow functions also differ from regular functions in how they handle the this keyword.'
          },
          {
            type: 'code',
            title: 'Arrow Function Syntax',
            body: '// Traditional function expression\nconst square = function(x) {\n  return x * x;\n};\n\n// Arrow function — concise\nconst squareArrow = (x) => {\n  return x * x;\n};\n\n// Arrow function — implicit return (single expression)\nconst squareShort = x => x * x;\n\n// Multiple parameters need parentheses\nconst add = (a, b) => a + b;\n\n// No parameters need empty parentheses\nconst getNumber = () => 42;\n\nconsole.log(squareShort(5)); // → 25\nconsole.log(add(3, 4));      // → 7\nconsole.log(getNumber());    // → 42'
          },
          {
            type: 'text',
            body: 'If the function body is a single expression, you can omit the curly braces and the return keyword — the expression is automatically returned. Single parameters don\'t need parentheses. Multiple parameters or no parameters do need parentheses. Arrow functions are ideal for callbacks and short utility functions.'
          },
          {
            type: 'code',
            title: 'Arrow Functions with Arrays',
            body: 'const numbers = [1, 2, 3, 4, 5];\n\n// Map with arrow function\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled);\n// → [2, 4, 6, 8, 10]\n\n// Filter with arrow function\nconst evens = numbers.filter(n => n % 2 === 0);\nconsole.log(evens);\n// → [2, 4]\n\n// Find with arrow function\nconst found = numbers.find(n => n > 3);\nconsole.log(found);\n// → 4\n\n// Sort with arrow function\nconst words = ["cherry", "apple", "banana"];\nwords.sort((a, b) => a.localeCompare(b));\nconsole.log(words);\n// → ["apple", "banana", "cherry"]'
          },
          {
            type: 'text',
            body: 'Arrow functions shine when used as callbacks for array methods like map, filter, find, and sort. They keep the code concise and readable. For multi-line arrow functions, use curly braces and explicit return statements. Arrow functions are not suited for object methods, constructors, or any code that needs its own this binding.'
          }
        ]
      },
      {
        id: 'higher-order-functions',
        title: 'Higher-Order Functions',
        description: 'Functions that create or modify other functions',
        xp: 40,
        duration: '20 min',
        difficulty: 'intermediate',
        concepts: ['higher-order', 'callback', 'map', 'filter', 'reduce', 'forEach'],
        content: [
          {
            type: 'text',
            body: 'Higher-order functions either take functions as arguments or return functions. They allow you to abstract over actions, not just values. Instead of writing different loops for every data-processing task, you can use higher-order functions to create processing pipelines.'
          },
          {
            type: 'code',
            title: 'forEach — Iterating Over Arrays',
            body: 'const todos = [\n  { text: "Buy milk", done: true },\n  { text: "Clean house", done: false },\n  { text: "Write code", done: true }\n];\n\ntodos.forEach(todo => {\n  const status = todo.done ? "✓" : "○";\n  console.log(`${status} ${todo.text}`);\n});\n// → ✓ Buy milk\n// → ○ Clean house\n// → ✓ Write code'
          },
          {
            type: 'text',
            body: 'forEach calls the provided function once for each array element. Unlike map, it does not produce a new array — it is used for side effects (like printing). The callback receives three arguments: the element, its index, and the original array.'
          },
          {
            type: 'code',
            title: 'map — Transforming Arrays',
            body: 'const temperatures = [20, 25, 30, 35, 40];\n\nconst fahrenheit = temperatures.map(t => (t * 9/5) + 32);\nconsole.log(fahrenheit);\n// → [68, 77, 86, 95, 104]\n\nconst descriptions = temperatures.map(t => {\n  if (t < 10) return "cold";\n  if (t < 25) return "mild";\n  return "hot";\n});\nconsole.log(descriptions);\n// → ["mild", "mild", "hot", "hot", "hot"]'
          },
          {
            type: 'text',
            body: 'map creates a new array by applying a function to each element. The new array has the same length as the original. Each element is transformed by the callback function, and the result is placed at the corresponding position in the new array. This is the most commonly used higher-order function.'
          },
          {
            type: 'code',
            title: 'filter — Selecting Elements',
            body: 'const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\nconst evens = numbers.filter(n => n % 2 === 0);\nconsole.log(evens);\n// → [2, 4, 6, 8, 10]\n\nconst users = [\n  { name: "Alice", age: 25 },\n  { name: "Bob", age: 17 },\n  { name: "Carol", age: 30 }\n];\n\nconst adults = users.filter(user => user.age >= 18);\nconsole.log(adults.map(u => u.name));\n// → ["Alice", "Carol"]'
          },
          {
            type: 'text',
            body: 'filter creates a new array containing only elements for which the callback returns true. The callback is a predicate — a function that returns a boolean. Use filter when you need a subset of an array based on a condition. The original array is never modified.'
          },
          {
            type: 'code',
            title: 'reduce — Accumulating Values',
            body: 'const scores = [85, 92, 78, 95, 88];\n\n// Sum of all scores\nconst total = scores.reduce((sum, score) => sum + score, 0);\nconsole.log(total);\n// → 438\n\n// Average score\nconst average = total / scores.length;\nconsole.log(average);\n// → 87.6\n\n// Find the maximum\nconst max = scores.reduce((best, score) => \n  score > best ? score : best, scores[0]);\nconsole.log(max);\n// → 95\n\n// Group by category\nconst items = [\n  { type: "fruit", name: "apple" },\n  { type: "veggie", name: "carrot" },\n  { type: "fruit", name: "banana" }\n];\n\nconst grouped = items.reduce((acc, item) => {\n  if (!acc[item.type]) acc[item.type] = [];\n  acc[item.type].push(item.name);\n  return acc;\n}, {});\nconsole.log(grouped);\n// → { fruit: ["apple", "banana"], veggie: ["carrot"] }'
          },
          {
            type: 'text',
            body: 'reduce is the most versatile higher-order function. It combines all elements of an array into a single value. The callback takes an accumulator (running total) and the current element. The second argument to reduce is the initial value of the accumulator. reduce can be used to implement map, filter, and many other operations.'
          },
          {
            type: 'code',
            title: 'Composing Operations',
            body: 'const pets = [\n  { name: "Rex", type: "dog", age: 5 },\n  { name: "Whiskers", type: "cat", age: 3 },\n  { name: "Buddy", type: "dog", age: 8 },\n  { name: "Luna", type: "cat", age: 1 }\n];\n\n// Chain: filter → map → reduce\nconst seniorDogTotalAge = pets\n  .filter(p => p.type === "dog" && p.age >= 5)\n  .map(p => p.age)\n  .reduce((sum, age) => sum + age, 0);\n\nconsole.log(seniorDogTotalAge);\n// → 13'
          },
          {
            type: 'text',
            body: 'The real power of higher-order functions comes from chaining them together. You can build expressive data-processing pipelines by combining filter, map, and reduce. Each step produces a result that feeds into the next. This functional style is more readable and less error-prone than nested loops.'
          }
        ]
      },
    ],
  },
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
        xp: 30,
        duration: '15 min',
        difficulty: 'beginner',
        concepts: ['array', 'literal', 'index', 'length', 'push', 'pop', 'splice'],
        content: [
          {
            type: 'text',
            body: 'An array is an ordered list of values. Arrays can hold values of any type — numbers, strings, objects, even other arrays. Each element has an index starting from 0. Arrays are one of the most commonly used data structures in JavaScript.'
          },
          {
            type: 'code',
            title: 'Creating and Accessing Arrays',
            body: 'let fruits = ["apple", "banana", "cherry"];\nconsole.log(fruits[0]);\n// → apple\nconsole.log(fruits[2]);\n// → cherry\nconsole.log(fruits.length);\n// → 3\n\n// Mixed types\nlet mixed = [1, "hello", true, null, { x: 1 }];\n\n// Multi-dimensional\nlet matrix = [\n  [1, 2, 3],\n  [4, 5, 6],\n  [7, 8, 9]\n];\nconsole.log(matrix[1][2]);\n// → 6'
          },
          {
            type: 'text',
            body: 'Arrays are created with square brackets [ ]. Access elements with bracket notation and a zero-based index. The length property tells you how many elements are in the array. Arrays can contain any combination of types. Nested arrays create matrices and other multi-dimensional structures.'
          },
          {
            type: 'code',
            title: 'Modifying Arrays',
            body: 'let colors = ["red", "green"];\n\n// Add to end\ncolors.push("blue");\n// → ["red", "green", "blue"]\n\n// Remove from end\ncolors.pop();\n// → ["red", "green"]\n\n// Add to beginning\ncolors.unshift("yellow");\n// → ["yellow", "red", "green"]\n\n// Remove from beginning\ncolors.shift();\n// → ["red", "green"]\n\n// Insert at index 1, remove 0 elements\ncolors.splice(1, 0, "orange");\n// → ["red", "orange", "green"]\n\n// Replace 1 element at index 1\ncolors.splice(1, 1, "purple");\n// → ["red", "purple", "green"]'
          },
          {
            type: 'text',
            body: 'push/pop add/remove from the end. unshift/shift add/remove from the beginning. splice can add, remove, or replace elements at any position. All these methods modify the original array (mutate it). For non-mutating alternatives, use the spread operator: let newArray = [...oldArray, "new"];'
          }
        ]
      },
      {
        id: 'spread-rest',
        title: 'Spread & Rest',
        description: 'Use the powerful ... operator for arrays and functions',
        xp: 35,
        duration: '15 min',
        difficulty: 'intermediate',
        concepts: ['spread', 'rest', '...', 'destructuring', 'clone', 'merge'],
        content: [
          {
            type: 'text',
            body: 'The spread operator (...) expands an iterable (like an array) into individual elements. The rest parameter collects multiple elements into an array. Despite using the same syntax, they do opposite things — spread expands, rest collects.'
          },
          {
            type: 'code',
            title: 'Spread Operator',
            body: '// Clone an array\nconst original = [1, 2, 3];\nconst clone = [...original];\nconsole.log(clone);\n// → [1, 2, 3]\n\n// Merge arrays\nconst front = [1, 2];\nconst back = [3, 4];\nconst merged = [...front, ...back];\nconsole.log(merged);\n// → [1, 2, 3, 4]\n\n// Add to array immutably\nconst items = ["a", "b"];\nconst moreItems = [...items, "c", "d"];\nconsole.log(moreItems);\n// → ["a", "b", "c", "d"]'
          },
          {
            type: 'code',
            title: 'Spread with Objects',
            body: 'const user = { name: "Alice", age: 25 };\nconst updated = { ...user, age: 26, city: "NYC" };\nconsole.log(updated);\n// → { name: "Alice", age: 26, city: "NYC" }\n\nconst defaults = { theme: "dark", lang: "en" };\nconst settings = { ...defaults, lang: "fr" };\nconsole.log(settings);\n// → { theme: "dark", lang: "fr" }'
          },
          {
            type: 'code',
            title: 'Rest Parameters',
            body: '// Collect remaining arguments\nfunction sum(...numbers) {\n  return numbers.reduce((total, n) => total + n, 0);\n}\nconsole.log(sum(1, 2, 3, 4));\n// → 10\n\n// First + rest\nfunction headTail([first, ...rest]) {\n  console.log("First:", first);\n  console.log("Rest:", rest);\n}\nheadTail([1, 2, 3, 4]);\n// → First: 1\n// → Rest: [2, 3, 4]'
          },
          {
            type: 'text',
            body: 'Rest parameters (...args) allow a function to accept any number of arguments as an array. This replaces the old arguments object. Combined with destructuring, rest makes it easy to separate the first few elements from the rest. Always use spread for immutable updates — never mutate arrays directly.'
          }
        ]
      },
      {
        id: 'iteration-patterns',
        title: 'Iteration Patterns',
        description: 'Loop through arrays with style using modern patterns',
        xp: 35,
        duration: '15 min',
        difficulty: 'beginner',
        concepts: ['for...of', 'for...in', 'entries', 'keys', 'values', 'unpacking'],
        content: [
          {
            type: 'text',
            body: 'JavaScript offers many ways to iterate over arrays and objects. The modern for...of loop is the simplest way to iterate over iterable objects. For objects, use Object.keys(), Object.values(), or Object.entries() to get arrays you can iterate over.'
          },
          {
            type: 'code',
            title: 'for...of Loop',
            body: 'const colors = ["red", "green", "blue"];\n\nfor (const color of colors) {\n  console.log(color);\n}\n// → red\n// → green\n// → blue\n\n// With index\nfor (const [index, color] of colors.entries()) {\n  console.log(`${index}: ${color}`);\n}\n// → 0: red\n// → 1: green\n// → 2: blue'
          },
          {
            type: 'code',
            title: 'Object Iteration',
            body: 'const person = {\n  name: "Alice",\n  age: 30,\n  city: "NYC"\n};\n\n// Keys\nfor (const key of Object.keys(person)) {\n  console.log(key);\n}\n// → name, age, city\n\n// Values\nfor (const value of Object.values(person)) {\n  console.log(value);\n}\n// → Alice, 30, NYC\n\n// Key-value pairs\nfor (const [key, value] of Object.entries(person)) {\n  console.log(`${key}: ${value}`);\n}\n// → name: Alice\n// → age: 30\n// → city: NYC'
          },
          {
            type: 'code',
            title: 'Destructuring in Loops',
            body: 'const users = [\n  { name: "Alice", age: 25 },\n  { name: "Bob", age: 30 },\n  { name: "Carol", age: 35 }\n];\n\n// Destructure directly in for...of\nfor (const { name, age } of users) {\n  console.log(`${name} is ${age}`);\n}\n// → Alice is 25\n// → Bob is 30\n// → Carol is 35\n\n// Unpacking arrays\nconst [first, , third] = [10, 20, 30];\nconsole.log(first, third);\n// → 10 30'
          },
          {
            type: 'text',
            body: 'for...of is preferred over for...in for arrays (for...in iterates over property keys, which is usually wrong for arrays). Destructuring makes it easy to extract values from arrays and objects directly in variable declarations, function parameters, and loop variables. Use _ as a placeholder for skipped values: [first, _, third] = [1, 2, 3].'
          }
        ]
      },
    ],
  },
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
        xp: 30,
        duration: '15 min',
        difficulty: 'beginner',
        concepts: ['object', 'property', 'key', 'value', 'dot-notation', 'bracket-notation', 'computed-properties'],
        content: [
          {
            type: 'text',
            body: 'Objects are collections of key-value pairs. Unlike arrays (ordered lists), objects store data as properties where each key is a string. Objects represent things — a person, a car, a document. They are the most important data structure in JavaScript.'
          },
          {
            type: 'code',
            title: 'Creating Objects',
            body: '// Object literal\nconst dog = {\n  name: "Rex",\n  breed: "Labrador",\n  age: 5,\n  bark() {\n    console.log("Woof!");\n  }\n};\n\nconsole.log(dog.name);\n// → Rex\ndog.bark();\n// → Woof!\n\n// Adding properties\ndog.color = "golden";\ndog["weight"] = 30;\n\n// Deleting properties\ndelete dog.weight;'
          },
          {
            type: 'text',
            body: 'Objects are created with curly braces { }. Properties are key-value pairs separated by commas. Keys can be strings or symbols. Methods are functions stored as properties. Use dot notation (obj.key) for known property names and bracket notation (obj["key"]) for dynamic keys.'
          },
          {
            type: 'code',
            title: 'Computed Property Names',
            body: 'const field = "email";\nconst user = {\n  name: "Alice",\n  [field]: "alice@example.com",\n  [`get${field.charAt(0).toUpperCase() + field.slice(1)}()`]() {\n    return this[field];\n  }\n};\n\nconsole.log(user.email);\n// → alice@example.com\nconsole.log(user.getEmail());\n// → alice@example.com'
          },
          {
            type: 'text',
            body: 'Computed property names [expression] let you use expressions as property keys. This is powerful for building dynamic objects. Template literals inside computed names create method names dynamically. Property shorthand: when a variable name matches the key, write { name } instead of { name: name }.'
          },
          {
            type: 'code',
            title: 'The this Keyword',
            body: 'const counter = {\n  count: 0,\n  increment() {\n    this.count++;\n  },\n  getCount() {\n    return this.count;\n  }\n};\n\ncounter.increment();\ncounter.increment();\nconsole.log(counter.getCount());\n// → 2'
          },
          {
            type: 'text',
            body: 'this refers to the object the method was called on. Inside a method, this lets you access other properties of the same object. Arrow functions do NOT have their own this — they inherit it from the surrounding scope. This is why arrow functions should not be used as object methods.'
          }
        ]
      },
      {
        id: 'prototypes-classes',
        title: 'Prototypes & Classes',
        description: 'Understand object-oriented patterns in JavaScript',
        xp: 40,
        duration: '20 min',
        difficulty: 'intermediate',
        concepts: ['prototype', 'class', 'constructor', 'extends', 'super', 'inheritance'],
        content: [
          {
            type: 'text',
            body: 'JavaScript uses prototypal inheritance — objects can inherit properties from other objects. Every object has a hidden [[Prototype]] link to another object. When a property is not found on an object, JavaScript looks up the prototype chain. Classes in modern JavaScript are syntactic sugar over this prototype system.'
          },
          {
            type: 'code',
            title: 'Prototypal Inheritance',
            body: 'const animal = {\n  eat() {\n    console.log(`${this.name} is eating`);\n  },\n  sleep() {\n    console.log(`${this.name} is sleeping`);\n  }\n};\n\nconst dog = Object.create(animal);\ndog.name = "Rex";\ndog.bark = function() {\n  console.log("Woof!");\n};\n\ndog.eat();  // → Rex is eating\ndog.bark(); // → Woof!'
          },
          {
            type: 'code',
            title: 'ES6 Classes',
            body: 'class Rectangle {\n  constructor(width, height) {\n    this.width = width;\n    this.height = height;\n  }\n\n  get area() {\n    return this.width * this.height;\n  }\n\n  toString() {\n    return `Rectangle(${this.width}x${this.height})`;\n  }\n}\n\nconst rect = new Rectangle(5, 10);\nconsole.log(rect.area);\n// → 50\nconsole.log(rect.toString());\n// → Rectangle(5x10)'
          },
          {
            type: 'code',
            title: 'Inheritance with extends',
            body: 'class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    console.log(`${this.name} makes a sound`);\n  }\n}\n\nclass Dog extends Animal {\n  constructor(name, breed) {\n    super(name);\n    this.breed = breed;\n  }\n  speak() {\n    console.log(`${this.name} barks!`);\n  }\n}\n\nclass Cat extends Animal {\n  speak() {\n    console.log(`${this.name} purrs!`);\n  }\n}\n\nconst rex = new Dog("Rex", "Labrador");\nconst kitty = new Cat("Whiskers");\nrex.speak();  // → Rex barks!\nkitty.speak(); // → Whiskers purrs!'
          },
          {
            type: 'text',
            body: 'The constructor method runs when you use new to create an instance. super() calls the parent class constructor — always call it before using this in a subclass constructor. extends sets up the prototype chain. Methods defined in a subclass override (override) parent methods. This is polymorphism — different classes can respond differently to the same method call.'
          }
        ]
      },
      {
        id: 'destructuring-spread',
        title: 'Destructuring & Spread',
        description: 'Extract values with elegant syntax',
        xp: 35,
        duration: '15 min',
        difficulty: 'intermediate',
        concepts: ['destructuring', 'pattern', 'default-values', 'nested', 'spread', 'rest'],
        content: [
          {
            type: 'text',
            body: 'Destructuring lets you unpack values from arrays and properties from objects into distinct variables. It\'s a concise way to extract data without writing verbose property access code. Combined with default values and nested patterns, it\'s one of JavaScript\'s most elegant features.'
          },
          {
            type: 'code',
            title: 'Object Destructuring',
            body: 'const user = {\n  name: "Alice",\n  age: 30,\n  address: {\n    city: "NYC",\n    zip: "10001"\n  }\n};\n\n// Basic destructuring\nconst { name, age } = user;\nconsole.log(name, age);\n// → Alice 30\n\n// Rename variables\nconst { name: userName, age: userAge } = user;\nconsole.log(userName);\n// → Alice\n\n// Default values\nconst { name, role = "user" } = user;\nconsole.log(role);\n// → user\n\n// Nested destructuring\nconst { address: { city, zip } } = user;\nconsole.log(city, zip);\n// → NYC 10001'
          },
          {
            type: 'code',
            title: 'Array Destructuring',
            body: 'const rgb = [255, 128, 0];\n\nconst [red, green, blue] = rgb;\nconsole.log(red, green, blue);\n// → 255 128 0\n\n// Skip elements\nconst [first, , third] = rgb;\nconsole.log(first, third);\n// → 255 0\n\n// Rest element\nconst [head, ...tail] = rgb;\nconsole.log(head, tail);\n// → 255 [128, 0]\n\n// Swap variables\nlet a = 1, b = 2;\n[a, b] = [b, a];\nconsole.log(a, b);\n// → 2 1'
          },
          {
            type: 'code',
            title: 'Destructuring in Functions',
            body: 'function createUser({ name, age, role = "user" }) {\n  return { name, age, role, createdAt: new Date() };\n}\n\nconst alice = createUser({ name: "Alice", age: 30 });\nconsole.log(alice);\n// → { name: "Alice", age: 30, role: "user", ... }\n\nfunction processItems([first, second, ...rest]) {\n  console.log("First:", first);\n  console.log("Second:", second);\n  console.log("Rest:", rest);\n}\n\nprocessItems([10, 20, 30, 40, 50]);\n// → First: 10\n// → Second: 20\n// → Rest: [30, 40, 50]'
          },
          {
            type: 'text',
            body: 'Destructuring is especially useful for: extracting properties from API responses, providing default values for function parameters, swapping variables, and working with nested data structures. You can destructure in for...of loops, function parameters, and variable declarations. The spread operator complements destructuring by collecting remaining elements.'
          }
        ]
      },
    ],
  },
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
        xp: 30,
        duration: '15 min',
        difficulty: 'beginner',
        concepts: ['DOM', 'document', 'element', 'node', 'tree', 'window'],
        content: [
          {
            type: 'text',
            body: 'The Document Object Model (DOM) is the browser\'s representation of an HTML document as a tree of objects. When a browser loads an HTML file, it builds a data structure that JavaScript can interact with. Every HTML tag becomes a DOM node, and these nodes form a tree structure matching the document\'s nesting.'
          },
          {
            type: 'code',
            title: 'The Window and Document',
            body: '// The global object in the browser\nconsole.log(window);\n// → Window { ... }\n\n// The document represents the page\nconsole.log(document);\n// → #document\n\n// document.body gives the <body> element\nconsole.log(document.body.tagName);\n// → BODY\n\n// document.head gives the <head> element\nconsole.log(document.head);\n// → <head>...</head>'
          },
          {
            type: 'text',
            body: 'The window object is the global object in browser JavaScript. It represents the browser window and contains everything — the document, navigation, timers, and more. The document property is your main entry point to the DOM. It represents the HTML document and provides methods to find and manipulate elements.'
          },
          {
            type: 'code',
            title: 'Nodes and Elements',
            body: '// Every HTML tag is an Element node\nconst div = document.createElement("div");\nconsole.log(div.nodeType); // → 1 (ELEMENT_NODE)\n\n// Text inside tags are Text nodes\nconst text = document.createTextNode("hello");\nconsole.log(text.nodeType); // → 3 (TEXT_NODE)\n\n// The document itself is a Document node\nconsole.log(document.nodeType); // → 9\n\n// Node tree example:\n// document\n//   └── html\n//       ├── head\n//       │   └── title\n//       │       └── "My Page"\n//       └── body\n//           ├── h1\n//           │   └── "Hello"\n//           └── p\n//               └── "World"'
          },
          {
            type: 'text',
            body: 'The DOM is a tree of Node objects. Each node has a nodeType: ELEMENT_NODE (1), TEXT_NODE (3), or DOCUMENT_NODE (9). Elements can contain child elements and text nodes. This tree structure mirrors the nesting of HTML tags. JavaScript can traverse and modify this tree to change what\'s displayed on the page.'
          }
        ]
      },
      {
        id: 'selecting-elements',
        title: 'Selecting Elements',
        description: 'Find elements in the DOM tree',
        xp: 30,
        duration: '12 min',
        difficulty: 'beginner',
        concepts: ['getElementById', 'querySelector', 'querySelectorAll', 'getElementsByClassName', 'getElementsByTagName'],
        content: [
          {
            type: 'text',
            body: 'To work with DOM elements, you first need to find them. JavaScript provides several methods to select elements by ID, class, tag name, or CSS selector. querySelector and querySelectorAll are the most versatile — they use the same CSS selector syntax you use in stylesheets.'
          },
          {
            type: 'code',
            title: 'Finding Elements',
            body: '// By ID — fastest, returns single element\nconst header = document.getElementById("header");\n\n// By CSS selector — returns first match\nconst firstParagraph = document.querySelector("p");\nconst specific = document.querySelector(".card .title");\nconst byId = document.querySelector("#main");\n\n// By CSS selector — returns all matches (NodeList)\nconst allParagraphs = document.querySelectorAll("p");\nconst allCards = document.querySelectorAll(".card");\nconsole.log(allCards.length); // → number of .card elements\n\n// By class name (returns live HTMLCollection)\nconst items = document.getElementsByClassName("item");\n\n// By tag name (returns live HTMLCollection)\nconst divs = document.getElementsByTagName("div");'
          },
          {
            type: 'text',
            body: 'getElementById is the fastest method but requires an ID attribute. querySelector is the most flexible — it accepts any CSS selector and returns the first match. querySelectorAll returns all matches as a NodeList (which you can iterate with for...of or convert to an array with Array.from()). getElementsByClassName and getElementsByTagName return live collections that update automatically when the DOM changes.'
          },
          {
            type: 'code',
            title: 'Traversing the DOM',
            body: 'const list = document.querySelector("ul");\n\n// Parent\nconsole.log(list.parentElement);\n// → the element containing the <ul>\n\n// Children\nconsole.log(list.children);\n// → HTMLCollection of <li> elements\nconsole.log(list.firstElementChild);\n// → first <li>\nconsole.log(list.lastElementChild);\n// → last <li>\n\n// Siblings\nconst firstLi = list.querySelector("li");\nconsole.log(firstLi.nextElementSibling);\n// → second <li>\nconsole.log(firstLi.previousElementSibling);\n// → null (it\'s the first)'
          },
          {
            type: 'text',
            body: 'DOM traversal properties let you navigate the tree: parentElement, children, firstElementChild, lastElementChild, nextElementSibling, previousElementSibling. These create a connected graph you can walk to reach any element. For complex selections, querySelector with CSS selectors is usually more practical than traversal.'
          }
        ]
      },
      {
        id: 'manipulating-dom',
        title: 'Manipulating the DOM',
        description: 'Create, modify, and remove elements',
        xp: 35,
        duration: '18 min',
        difficulty: 'beginner',
        concepts: ['createElement', 'appendChild', 'removeChild', 'textContent', 'innerHTML', 'style', 'classList', 'setAttribute'],
        content: [
          {
            type: 'text',
            body: 'JavaScript can create new elements, modify existing ones, and remove elements from the DOM. Every change you make to the DOM is immediately reflected on the page. This is how dynamic web applications work — JavaScript builds and updates the user interface.'
          },
          {
            type: 'code',
            title: 'Creating and Adding Elements',
            body: '// Create a new element\nconst card = document.createElement("div");\ncard.className = "card";\ncard.textContent = "Hello!";\n\n// Add to the page\ndocument.body.appendChild(card);\n\n// Create with innerHTML (less safe)\nconst list = document.querySelector("#list");\nlist.innerHTML += `\n  <li class="item">\n    <span>New Item</span>\n    <button>Delete</button>\n  </li>\n`;\n\n// Safer: build elements programmatically\nconst li = document.createElement("li");\nli.className = "item";\nconst span = document.createElement("span");\nspan.textContent = "Programmatic Item";\nli.appendChild(span);\nlist.appendChild(li);'
          },
          {
            type: 'code',
            title: 'Modifying Elements',
            body: 'const element = document.querySelector(".title");\n\n// Text content\nelement.textContent = "New Title";\nelement.innerHTML = "<em>Styled</em> Title";\n\n// Attributes\nelement.setAttribute("id", "main-title");\nelement.getAttribute("class");\nelement.removeAttribute("disabled");\n\n// CSS styles\nelement.style.color = "blue";\nelement.style.fontSize = "24px";\nelement.style.backgroundColor = "#f0f0f0";\n\n// CSS classes (preferred over style)\nelement.classList.add("active");\nelement.classList.remove("hidden");\nelement.classList.toggle("selected");\nelement.classList.contains("active"); // → true'
          },
          {
            type: 'text',
            body: 'textContent sets text (safe, no HTML parsing). innerHTML sets HTML (dangerous with user input — XSS risk). Use textContent for plain text, createElement for structured content. classList is the modern way to manage CSS classes. Avoid setting individual style properties — use CSS classes instead for better separation of concerns.'
          },
          {
            type: 'code',
            title: 'Removing and Replacing Elements',
            body: 'const parent = document.querySelector("#list");\nconst child = parent.querySelector("li");\n\n// Remove a child\nparent.removeChild(child);\n\n// Modern way (child removes itself)\nchild.remove();\n\n// Replace a child\nconst newChild = document.createElement("li");\nnewChild.textContent = "Replacement";\nparent.replaceChild(newChild, parent.firstChild);\n\n// Clone an element\nconst original = document.querySelector(".card");\nconst clone = original.cloneNode(true);\ndocument.body.appendChild(clone);'
          },
          {
            type: 'text',
            body: 'remove() is the simplest way to delete an element — call it on the element you want to remove. cloneNode(true) creates a deep copy including all children. This is useful for creating repeated UI elements. When building dynamic interfaces, always minimize DOM manipulation — batch changes or use DocumentFragment for multiple insertions.'
          }
        ]
      },
    ],
  },
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
        xp: 30,
        duration: '15 min',
        difficulty: 'beginner',
        concepts: ['addEventListener', 'removeEventListener', 'event', 'click', 'handler', 'mousedown', 'keydown'],
        content: [
          {
            type: 'text',
            body: 'Events are notifications that something happened in the browser — a user clicked a button, pressed a key, or moved the mouse. You respond to events by registering event handlers — functions that run when specific events occur. addEventListener is the standard way to register handlers.'
          },
          {
            type: 'code',
            title: 'Registering Event Handlers',
            body: 'const button = document.querySelector("button");\n\n// addEventListener (preferred)\nbutton.addEventListener("click", () => {\n  console.log("Button clicked!");\n});\n\n// Named function (can be removed later)\nfunction handleClick() {\n  console.log("Clicked!");\n}\nbutton.addEventListener("click", handleClick);\nbutton.removeEventListener("click", handleClick);\n\n// DON\'T do this (overwrites previous handlers)\nbutton.onclick = () => console.log("click");'
          },
          {
            type: 'text',
            body: 'addEventListener takes two arguments: the event type (a string) and the handler function. You can register multiple handlers for the same event. removeEventListener removes a specific handler — you must pass the same function reference. onclick properties can only hold one handler and are overwritten.'
          },
          {
            type: 'code',
            title: 'Common Event Types',
            body: '// Mouse events\nbutton.addEventListener("mousedown", (e) => {\n  console.log("Mouse down at", e.clientX, e.clientY);\n});\nbutton.addEventListener("mouseup", () => {\n  console.log("Mouse up");\n});\nbutton.addEventListener("mouseenter", () => {\n  console.log("Mouse entered");\n});\nbutton.addEventListener("mouseleave", () => {\n  console.log("Mouse left");\n});\n\n// Keyboard events\ndocument.addEventListener("keydown", (e) => {\n  console.log("Key pressed:", e.key);\n});\ndocument.addEventListener("keyup", (e) => {\n  console.log("Key released:", e.key);\n});\n\n// Input events\nconst input = document.querySelector("input");\ninput.addEventListener("input", (e) => {\n  console.log("Current value:", e.target.value);\n});\n\n// Form events\nconst form = document.querySelector("form");\nform.addEventListener("submit", (e) => {\n  e.preventDefault();\n  console.log("Form submitted!");\n});'
          },
          {
            type: 'text',
            body: 'Common events: click (mouse click), mousedown/mouseup (button press/release), mouseenter/mouseleave (cursor enters/leaves element), keydown/keyup (key press/release), input (text field value changes), submit (form submitted), change (form field value changes), load (resource loaded), scroll (page scrolled), resize (window resized).'
          }
        ]
      },
      {
        id: 'event-object',
        title: 'The Event Object',
        description: 'Access event details and control behavior',
        xp: 35,
        duration: '15 min',
        difficulty: 'intermediate',
        concepts: ['event-object', 'preventDefault', 'stopPropagation', 'target', 'currentTarget', 'event-phase'],
        content: [
          {
            type: 'text',
            body: 'When an event fires, the browser creates an Event object and passes it to your handler. This object contains information about the event — what happened, where it happened, and which element triggered it. You can also use methods on the event object to control the event\'s behavior.'
          },
          {
            type: 'code',
            title: 'Event Object Properties',
            body: 'document.querySelector("button").addEventListener("click", (event) => {\n  // Event type\n  console.log("Event type:", event.type);\n  // → click\n\n  // Target element (what was clicked)\n  console.log("Target:", event.target);\n  // → <button>...</button>\n\n  // Current target (element handler is on)\n  console.log("Current target:", event.currentTarget);\n  // → <button>...</button>\n\n  // Mouse position\n  console.log("Client coords:", event.clientX, event.clientY);\n  console.log("Page coords:", event.pageX, event.pageY);\n\n  // Modifier keys\n  console.log("Shift:", event.shiftKey);\n  console.log("Ctrl:", event.ctrlKey);\n  console.log("Alt:", event.altKey);\n});'
          },
          {
            type: 'code',
            title: 'Controlling Event Behavior',
            body: '// Prevent default browser behavior\nconst link = document.querySelector("a");\nlink.addEventListener("click", (e) => {\n  e.preventDefault(); // Don\'t navigate\n  console.log("Link clicked but no navigation");\n});\n\n// Prevent event from bubbling up\ndocument.querySelector("div").addEventListener("click", () => {\n  console.log("Div clicked");\n});\ndocument.querySelector("button").addEventListener("click", (e) => {\n  e.stopPropagation();\n  console.log("Button clicked, event stops here");\n});\n\n// For form submission\nform.addEventListener("submit", (e) => {\n  e.preventDefault();\n  // Handle form data with JavaScript instead\n  const data = new FormData(form);\n  console.log(Object.fromEntries(data));\n});'
          },
          {
            type: 'text',
            body: 'preventDefault() stops the browser\'s default behavior (like following a link or submitting a form). stopPropagation() prevents the event from bubbling up to parent elements. target is the element that originally triggered the event, while currentTarget is the element the handler is attached to. These are crucial for event delegation.'
          }
        ]
      },
      {
        id: 'event-delegation',
        title: 'Event Delegation',
        description: 'Handle events efficiently on dynamic content',
        xp: 40,
        duration: '18 min',
        difficulty: 'intermediate',
        concepts: ['delegation', 'bubbling', 'capture', 'target', 'closest', 'matches'],
        content: [
          {
            type: 'text',
            body: 'Event delegation is a pattern where you attach a single event listener to a parent element instead of individual listeners to each child. Events bubble up through the DOM tree — when a child element fires an event, it propagates up through its ancestors. By listening on a parent, you can handle events for all its children.'
          },
          {
            type: 'code',
            title: 'Event Bubbling',
            body: '// Events bubble up from child to parent\nconst grandparent = document.querySelector("#gp");\nconst parent = document.querySelector("#parent");\nconst child = document.querySelector("#child");\n\ngrandparent.addEventListener("click", () => {\n  console.log("Grandparent clicked");\n});\nparent.addEventListener("click", () => {\n  console.log("Parent clicked");\n});\nchild.addEventListener("click", () => {\n  console.log("Child clicked");\n});\n\n// Clicking the child logs:\n// → Child clicked\n// → Parent clicked\n// → Grandparent clicked'
          },
          {
            type: 'code',
            title: 'Delegation Pattern',
            body: '// BAD: Add listener to each item\nconst items = document.querySelectorAll(".item");\nitems.forEach(item => {\n  item.addEventListener("click", handleClick);\n});\n\n// GOOD: Single listener on parent\nconst list = document.querySelector("#list");\nlist.addEventListener("click", (e) => {\n  // e.target is what was actually clicked\n  const item = e.target.closest(".item");\n  if (item) {\n    handleClick(item);\n  }\n});\n\n// Works for dynamically added items too!\nconst newItem = document.createElement("li");\nnewItem.className = "item";\nnewItem.textContent = "New";\nlist.appendChild(newItem);\n// The delegation handler automatically handles clicks on newItem!'
          },
          {
            type: 'code',
            title: 'Using closest() and matches()',
            body: '// matches() checks if an element matches a selector\nconst button = document.querySelector("button");\nconsole.log(button.matches("button")); // → true\nconsole.log(button.matches(".btn"));    // → false\n\n// closest() finds the nearest ancestor matching a selector\n// (including the element itself)\nconst nested = document.querySelector(".card .btn");\nconst card = nested.closest(".card");\nconsole.log(card); // → the .card element\n\n// Practical example: click handler for a list\nlist.addEventListener("click", (e) => {\n  const deleteBtn = e.target.closest(".delete-btn");\n  if (deleteBtn) {\n    const item = deleteBtn.closest(".item");\n    item.remove();\n  }\n});'
          },
          {
            type: 'text',
            body: 'Event delegation is essential for performance and for handling dynamically added elements. Instead of N listeners on N elements, you have 1 listener on 1 parent. Use e.target.closest() to find the relevant ancestor. closest() traverses up from the target element, checking each ancestor. This pattern is used extensively in modern web applications and is how jQuery\'s .on() method works under the hood.'
          }
        ]
      },
    ],
  },
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
        xp: 35,
        duration: '18 min',
        difficulty: 'intermediate',
        concepts: ['callback', 'Promise', 'then', 'catch', 'finally', 'resolve', 'reject', 'all', 'race'],
        content: [
          {
            type: 'text',
            body: 'JavaScript is single-threaded — it can only do one thing at a time. Asynchronous operations (like network requests, file reading, or timers) don\'t block the program. Instead, you provide a callback that runs when the operation completes. Promises provide a cleaner way to handle async results.'
          },
          {
            type: 'code',
            title: 'Callbacks',
            body: '// Callback style\nfunction fetchData(url, callback) {\n  // Simulating async operation\n  setTimeout(() => {\n    const data = { id: 1, name: "Alice" };\n    callback(null, data);\n  }, 1000);\n}\n\nfetchData("/api/user", (error, data) => {\n  if (error) {\n    console.error("Failed:", error);\n    return;\n  }\n  console.log("Got data:", data);\n});'
          },
          {
            type: 'text',
            body: 'Callbacks are functions passed as arguments to other functions, to be called later. The error-first callback convention: first argument is error (null if success), second is the result. Problems with callbacks: callback hell (deeply nested callbacks), hard to compose, error handling is verbose.'
          },
          {
            type: 'code',
            title: 'Promises',
            body: '// Creating a Promise\nfunction fetchUser(id) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (id > 0) {\n        resolve({ id, name: "Alice" });\n      } else {\n        reject(new Error("Invalid ID"));\n      }\n    }, 1000);\n  });\n}\n\n// Using a Promise\nfetchUser(1)\n  .then(user => {\n    console.log("User:", user);\n    return fetchUser(2);\n  })\n  .then(user2 => {\n    console.log("User 2:", user2);\n  })\n  .catch(error => {\n    console.error("Error:", error.message);\n  })\n  .finally(() => {\n    console.log("Done!");\n  });'
          },
          {
            type: 'text',
            body: 'A Promise represents a future value. It can be in three states: pending (initial), fulfilled (resolved), or rejected. then() handles success, catch() handles errors, finally() runs regardless. Promises chain — each then() returns a new promise, enabling clean sequential async code.'
          },
          {
            type: 'code',
            title: 'Promise Combinators',
            body: '// Promise.all — all must succeed\nconst results = await Promise.all([\n  fetch("/api/users"),\n  fetch("/api/posts"),\n  fetch("/api/comments")\n]);\n\n// Promise.allSettled — wait for all, regardless of success\nconst outcomes = await Promise.allSettled([\n  fetch("/api/fast"),\n  fetch("/api/slow"),\n  fetch("/api/fail")\n]);\noutcomes.forEach(result => {\n  if (result.status === "fulfilled") {\n    console.log("Success:", result.value);\n  } else {\n    console.log("Failed:", result.reason);\n  }\n});\n\n// Promise.race — first to settle (win or lose)\nconst fastest = await Promise.race([\n  fetch("/api/server1"),\n  fetch("/api/server2")\n]);'
          },
          {
            type: 'text',
            body: 'Promise.all() resolves when ALL promises resolve; if any rejects, the whole thing rejects. Promise.allSettled() waits for all promises to settle, giving you individual results. Promise.race() resolves/rejects with the first promise to settle. These combinators are essential for parallel operations and timeout patterns.'
          }
        ]
      },
      {
        id: 'async-await',
        title: 'Async/Await',
        description: 'Write clean, readable asynchronous code',
        xp: 40,
        duration: '18 min',
        difficulty: 'intermediate',
        concepts: ['async', 'await', 'try', 'catch', 'sequential', 'parallel', 'error-handling'],
        content: [
          {
            type: 'text',
            body: 'async/await is syntactic sugar over Promises that makes asynchronous code look and feel like synchronous code. An async function always returns a Promise. The await keyword pauses execution until a Promise settles, then returns its result. This eliminates .then() chains and makes error handling familiar with try/catch.'
          },
          {
            type: 'code',
            title: 'Async/Await Basics',
            body: '// Async function\nasync function getUser() {\n  const response = await fetch("/api/user");\n  const user = await response.json();\n  return user;\n}\n\n// Using the async function\ngetUser().then(user => console.log(user));\n\n// With try/catch\nasync function getUserSafe() {\n  try {\n    const response = await fetch("/api/user");\n    if (!response.ok) {\n      throw new Error(`HTTP ${response.status}`);\n    }\n    const user = await response.json();\n    return user;\n  } catch (error) {\n    console.error("Failed to fetch user:", error);\n    return null;\n  }\n}'
          },
          {
            type: 'code',
            title: 'Sequential vs Parallel',
            body: '// SEQUENTIAL — slow (each waits for the previous)\nasync function sequential() {\n  const user = await fetchUser();     // 1 second\n  const posts = await fetchPosts();   // 1 second\n  const comments = await fetchComments(); // 1 second\n  return { user, posts, comments };\n  // Total: ~3 seconds\n}\n\n// PARALLEL — fast (all run simultaneously)\nasync function parallel() {\n  const [user, posts, comments] = await Promise.all([\n    fetchUser(),\n    fetchPosts(),\n    fetchComments()\n  ]);\n  return { user, posts, comments };\n  // Total: ~1 second\n}\n\n// Parallel when you don\'t need results immediately\nasync function fireAndForget() {\n  // Start both — don\'t wait\n  const userPromise = fetchUser();\n  const postsPromise = fetchPosts();\n\n  // Now wait for both\n  const user = await userPromise;\n  const posts = await postsPromise;\n  return { user, posts };'
          },
          {
            type: 'text',
            body: 'Use sequential awaits when each operation depends on the previous result. Use Promise.all() when operations are independent — this runs them in parallel and is much faster. A common pattern is to start promises without await, then await them later. This ensures operations begin simultaneously.'
          },
          {
            type: 'code',
            title: 'Practical Async Patterns',
            body: '// Retry with exponential backoff\nasync function fetchWithRetry(url, maxRetries = 3) {\n  for (let attempt = 1; attempt <= maxRetries; attempt++) {\n    try {\n      const response = await fetch(url);\n      if (!response.ok) throw new Error(`HTTP ${response.status}`);\n      return await response.json();\n    } catch (error) {\n      if (attempt === maxRetries) throw error;\n      const delay = Math.pow(2, attempt) * 1000;\n      console.log(`Attempt ${attempt} failed, retrying in ${delay}ms...`);\n      await new Promise(r => setTimeout(r, delay));\n    }\n  }\n}\n\n// Timeout pattern\nasync function fetchWithTimeout(url, ms = 5000) {\n  const controller = new AbortController();\n  const timeout = setTimeout(() => controller.abort(), ms);\n  try {\n    const response = await fetch(url, { signal: controller.signal });\n    return await response.json();\n  } finally {\n    clearTimeout(timeout);\n  }\n}'
          },
          {
            type: 'text',
            body: 'Common patterns: retry (try multiple times before failing), timeout (abort if too slow), parallel data fetching (Promise.all), sequential dependencies (await each result before the next). AbortController can cancel fetch requests. Always handle errors — unhandled promise rejections can crash Node.js applications.'
          }
        ]
      },
      {
        id: 'fetch-api',
        title: 'The Fetch API',
        description: 'Make HTTP requests from the browser',
        xp: 40,
        duration: '18 min',
        difficulty: 'intermediate',
        concepts: ['fetch', 'GET', 'POST', 'headers', 'JSON', 'Response', 'Request'],
        content: [
          {
            type: 'text',
            body: 'The fetch() function is the modern way to make HTTP requests from the browser. It returns a Promise that resolves to a Response object. fetch is built into modern browsers and Node.js 18+. It replaces the older XMLHttpRequest API with a cleaner, Promise-based interface.'
          },
          {
            type: 'code',
            title: 'Basic GET Request',
            body: '// Simple GET request\nconst response = await fetch("https://api.example.com/users");\n\n// Check if the request was successful\nif (!response.ok) {\n  throw new Error(`HTTP error! status: ${response.status}`);\n}\n\n// Parse the response as JSON\nconst users = await response.json();\nconsole.log(users);\n\n// Other response methods:\nconst text = await response.text();\nconst blob = await response.blob();\nconst formData = await response.formData();'
          },
          {
            type: 'code',
            title: 'POST Request with JSON',
            body: 'const response = await fetch("https://api.example.com/users", {\n  method: "POST",\n  headers: {\n    "Content-Type": "application/json"\n  },\n  body: JSON.stringify({\n    name: "Alice",\n    email: "alice@example.com"\n  })\n});\n\nconst newUser = await response.json();\nconsole.log("Created:", newUser);'
          },
          {
            type: 'code',
            title: 'Request Options',
            body: 'const response = await fetch("/api/data", {\n  method: "POST",\n  headers: {\n    "Content-Type": "application/json",\n    "Authorization": "Bearer token123"\n  },\n  body: JSON.stringify({ query: "search term" }),\n  credentials: "include",  // Send cookies\n  mode: "cors",           // Cross-origin mode\n  cache: "no-cache"       // Don\'t use cache\n});\n\n// Response properties\nconsole.log(response.status);    // 200, 404, 500, etc.\nconsole.log(response.ok);        // true if status 200-299\nconsole.log(response.statusText);\nconsole.log(response.headers.get("Content-Type"));'
          },
          {
            type: 'text',
            body: 'fetch() options: method (GET, POST, PUT, DELETE), headers (request headers object), body (data to send — must be a string for JSON), credentials (include cookies), mode (cors, no-cors, same-origin). The Response object has: status, ok, headers, and methods like json(), text(), blob(). Always check response.ok before processing the body.'
          }
        ]
      },
    ],
  },
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
        xp: 35,
        duration: '18 min',
        difficulty: 'intermediate',
        concepts: ['canvas', 'getContext', 'fillRect', 'strokeRect', 'arc', 'beginPath', 'drawImage', 'transform'],
        content: [
          {
            type: 'text',
            body: 'The <canvas> element provides a drawing surface for programmatic graphics. You get a drawing context with getContext("2d") and use its methods to draw shapes, text, and images. Unlike SVG, canvas draws pixels — once drawn, shapes are rasterized and can\'t be individually manipulated.'
          },
          {
            type: 'code',
            title: 'Setting Up Canvas',
            body: '// HTML: <canvas width="400" height="300"></canvas>\nconst canvas = document.querySelector("canvas");\nconst cx = canvas.getContext("2d");\n\n// Fill a rectangle\ncx.fillStyle = "rgb(52, 166, 251)";\ncx.fillRect(0, 0, canvas.width, canvas.height);\n\n// Stroke a rectangle\ncx.strokeStyle = "blue";\ncx.lineWidth = 3;\ncx.strokeRect(10, 10, 100, 50);\n\n// Fill a circle\ncx.beginPath();\ncx.arc(200, 150, 50, 0, Math.PI * 2);\ncx.fillStyle = "red";\ncx.fill();\n\n// Draw text\ncx.font = "28px Georgia";\ncx.fillStyle = "white";\ncx.fillText("Hello Canvas!", 100, 280);'
          },
          {
            type: 'text',
            body: 'Canvas coordinates start at (0,0) in the top-left corner. The x-axis goes right, y-axis goes down. fillRect fills a rectangle, strokeRect draws its outline. The arc() method draws circles: arc(cx, cy, radius, startAngle, endAngle). Angles are in radians — 0 is 3 o\'clock, Math.PI/2 is 6 o\'clock.'
          },
          {
            type: 'code',
            title: 'Drawing Paths',
            body: '// Draw a triangle\ncx.beginPath();\ncx.moveTo(100, 50);   // Start point\ncx.lineTo(50, 150);   // Line to\ncx.lineTo(150, 150);  // Line to\ncx.closePath();       // Back to start\ncx.fillStyle = "green";\ncx.fill();\n\n// Draw a curve\ncx.beginPath();\ncx.moveTo(10, 90);\ncx.quadraticCurveTo(60, 10, 90, 90);\ncx.stroke();\n\n// Bezier curve\ncx.beginPath();\ncx.moveTo(10, 90);\ncx.bezierCurveTo(10, 10, 90, 10, 50, 90);\ncx.stroke();'
          },
          {
            type: 'text',
            body: 'Paths are sequences of lines and curves. beginPath() starts a new path. moveTo() moves without drawing. lineTo() draws a straight line. closePath() connects back to the start. quadraticCurveTo() and bezierCurveTo() draw smooth curves using control points. Always call beginPath() before drawing a new shape to avoid connecting to the previous path.'
          },
          {
            type: 'code',
            title: 'Transformations and Animation',
            body: '// Save/restore state\ncx.save();              // Push current state\ncx.translate(200, 150); // Move origin\ncx.rotate(0.5);        // Rotate (radians)\ncx.scale(1.5, 1.5);    // Scale\ncx.fillRect(-20, -20, 40, 40);\ncx.restore();           // Pop state\n\n// Animation loop\nlet angle = 0;\nfunction animate() {\n  cx.clearRect(0, 0, canvas.width, canvas.height);\n  cx.save();\n  cx.translate(200, 150);\n  cx.rotate(angle);\n  cx.fillStyle = "blue";\n  cx.fillRect(-20, -20, 40, 40);\n  cx.restore();\n  angle += 0.02;\n  requestAnimationFrame(animate);\n}\nanimate();'
          },
          {
            type: 'text',
            body: 'Transformations modify the coordinate system: translate() moves the origin, rotate() rotates around the origin, scale() stretches. save() and restore() let you temporarily change transformations without affecting future drawing. The animation loop uses requestAnimationFrame() for smooth 60fps animation. clearRect() erases before redrawing each frame.'
          }
        ]
      },
      {
        id: 'dom-game',
        title: 'Building a Platform Game',
        description: 'Create a playable game using DOM manipulation',
        xp: 45,
        duration: '25 min',
        difficulty: 'advanced',
        concepts: ['game-loop', 'collision', 'gravity', 'keyboard', 'animation', 'requestAnimationFrame', 'delta-time'],
        content: [
          {
            type: 'text',
            body: 'This lesson walks through building a platform game using DOM elements. The game uses a grid-based level design, keyboard input for movement, physics for gravity and jumping, and collision detection. Each frame, the game updates positions, checks collisions, and redraws the screen.'
          },
          {
            type: 'code',
            title: 'Game Architecture',
            body: '// Level is a grid of characters\nconst levelPlan = `\n......................\n..#................#..\n..#..............=.#..\n..#.........o.o....#..\n..#.@......#####...#..\n..#####............#..\n......#++++++++++++#..\n......##############..\n......................`;\n\n// Characters: . = empty, # = wall, + = lava\n// @ = player, o = coin, = = moving lava\n\nconst levelChars = {\n  ".": "empty",\n  "#": "wall",\n  "+": "lava",\n  "@": Player,\n  "o": Coin,\n  "=": Lava,\n  "|": Lava,\n  "v": Lava\n};'
          },
          {
            type: 'code',
            title: 'Game Loop with Delta Time',
            body: 'let lastTime = null;\n\nfunction frame(time) {\n  if (lastTime !== null) {\n    // Delta time in seconds, capped at 100ms\n    const dt = Math.min(time - lastTime, 100) / 1000;\n    update(dt);\n    draw();\n  }\n  lastTime = time;\n  requestAnimationFrame(frame);\n}\n\nrequestAnimationFrame(frame);\n\n// Physics constants\nconst gravity = 30;\nconst jumpSpeed = 17;\nconst playerXSpeed = 7;\n\n// Player update\nfunction updatePlayer(dt, keys) {\n  // Horizontal movement\n  let xSpeed = 0;\n  if (keys.ArrowLeft) xSpeed -= playerXSpeed;\n  if (keys.ArrowRight) xSpeed += playerXSpeed;\n\n  // Apply gravity\n  player.speed.y += dt * gravity;\n\n  // Check collisions and move\n  let newX = player.pos.x + xSpeed * dt;\n  if (!level.touches(newX, player.pos.y, "wall")) {\n    player.pos.x = newX;\n  }\n\n  let newY = player.pos.y + player.speed.y * dt;\n  if (!level.touches(player.pos.x, newY, "wall")) {\n    player.pos.y = newY;\n  } else if (keys.ArrowUp && player.speed.y > 0) {\n    player.speed.y = -jumpSpeed; // Jump!\n  } else {\n    player.speed.y = 0; // Hit ground\n  }\n}'
          },
          {
            type: 'text',
            body: 'The game loop uses requestAnimationFrame for smooth animation. Delta time (dt) ensures consistent speed regardless of frame rate — multiply all movements by dt. Gravity increases vertical speed each frame. Collision detection checks if the new position would overlap a wall. Jumping sets vertical speed to a negative value (upward).'
          },
          {
            type: 'code',
            title: 'Keyboard Input Tracking',
            body: 'function trackKeys(keys) {\n  const down = Object.create(null);\n  function track(event) {\n    if (keys.includes(event.key)) {\n      down[event.key] = event.type === "keydown";\n      event.preventDefault();\n    }\n  }\n  window.addEventListener("keydown", track);\n  window.addEventListener("keyup", track);\n  return down;\n}\n\nconst arrowKeys = trackKeys(\n  ["ArrowLeft", "ArrowRight", "ArrowUp"]\n);\n\n// Usage in game loop\nfunction update(dt) {\n  updatePlayer(dt, arrowKeys);\n  updateActors(dt);\n  checkCollisions();\n}'
          },
          {
            type: 'text',
            body: 'trackKeys creates an object that tracks which keys are currently pressed. The same handler is registered for both keydown and keyup events. When a key is pressed, its value becomes true; when released, false. This gives smooth, continuous movement while keys are held. preventDefault() stops arrow keys from scrolling the page.'
          }
        ]
      },
      {
        id: 'pixel-editor',
        title: 'Pixel Art Editor',
        description: 'Build a drawing application with Canvas',
        xp: 45,
        duration: '25 min',
        difficulty: 'advanced',
        concepts: ['immutable-state', 'component', 'tool', 'undo', 'save', 'load', 'drag', 'flood-fill'],
        content: [
          {
            type: 'text',
            body: 'This project builds a pixel art editor — a drawing application where you paint pixel by pixel on a zoomed-in canvas grid. The app demonstrates component-based architecture, immutable state management, and event-driven UI. Each tool (draw, fill, rectangle, pick) responds to pointer events.'
          },
          {
            type: 'code',
            title: 'Immutable Picture Class',
            body: 'class Picture {\n  constructor(width, height, pixels) {\n    this.width = width;\n    this.height = height;\n    this.pixels = pixels;\n  }\n\n  static empty(width, height, color) {\n    const pixels = new Array(width * height).fill(color);\n    return new Picture(width, height, pixels);\n  }\n\n  pixel(x, y) {\n    return this.pixels[x + y * this.width];\n  }\n\n  draw(pixels) {\n    const copy = this.pixels.slice();\n    for (const {x, y, color} of pixels) {\n      copy[x + y * this.width] = color;\n    }\n    return new Picture(this.width, this.height, copy);\n  }\n}'
          },
          {
            type: 'text',
            body: 'The Picture class is immutable — draw() creates a new Picture instead of modifying the existing one. This makes undo history trivial: store previous Pictures in an array. slice() copies the pixels array cheaply. The draw() method takes an array of pixel changes and returns a new Picture with those pixels updated.'
          },
          {
            type: 'code',
            title: 'Drawing Tools',
            body: '// Draw tool — paint single pixels\nfunction draw(pos, state, dispatch) {\n  function drawPixel({x, y}) {\n    const drawn = {x, y, color: state.color};\n    dispatch({picture: state.picture.draw([drawn])});\n  }\n  drawPixel(pos);\n  return drawPixel; // Return move handler\n}\n\n// Fill tool — flood fill connected pixels\nfunction fill({x, y}, state, dispatch) {\n  const targetColor = state.picture.pixel(x, y);\n  const drawn = [{x, y, color: state.color}];\n  const visited = new Set();\n  for (let done = 0; done < drawn.length; done++) {\n    for (const {dx, dy} of [{dx:-1,dy:0},{dx:1,dy:0},\n                            {dx:0,dy:-1},{dx:0,dy:1}]) {\n      const nx = drawn[done].x + dx;\n      const ny = drawn[done].y + dy;\n      if (nx >= 0 && nx < state.picture.width &&\n          ny >= 0 && ny < state.picture.height &&\n          !visited.has(nx + "," + ny) &&\n          state.picture.pixel(nx, ny) === targetColor) {\n        drawn.push({x: nx, y: ny, color: state.color});\n        visited.add(nx + "," + ny);\n      }\n    }\n  }\n  dispatch({picture: state.picture.draw(drawn)});\n}'
          },
          {
            type: 'text',
            body: 'Tools are functions that receive a position, state, and dispatch function. They can return a move handler for drag operations. The flood fill algorithm uses a work list (the drawn array) to explore connected pixels of the same color — similar to breadth-first search. Each tool dispatches an action that creates a new picture state.'
          }
        ]
      },
    ],
  },
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
        xp: 30,
        duration: '15 min',
        difficulty: 'intermediate',
        concepts: ['node', 'npm', 'module', 'import', 'export', 'CommonJS', 'ESM', 'package.json'],
        content: [
          {
            type: 'text',
            body: 'Node.js is a JavaScript runtime that lets you run JavaScript outside the browser. It uses the V8 engine from Chrome and provides APIs for file system access, networking, and more. Node is designed for building servers, command-line tools, and any program that needs to do I/O.'
          },
          {
            type: 'code',
            title: 'Running JavaScript with Node',
            body: '// hello.js\nlet message = "Hello world";\nconsole.log(message);\n\n// Run from terminal:\n// $ node hello.js\n// Hello world\n\n// Interactive mode:\n// $ node\n// > 1 + 1\n// 2\n// > [-1, -2, -3].map(Math.abs)\n// [1, 2, 3]\n// > process.exit(0)\n\n// Command line arguments\n// node script.js one --and two\nconsole.log(process.argv);\n// → ["node", "script.js", "one", "--and", "two"]'
          },
          {
            type: 'text',
            body: 'The node command runs JavaScript files. Without arguments, it starts a REPL (Read-Eval-Print Loop) for interactive JavaScript. process.argv contains command line arguments — the actual arguments start at index 2. process.exit() ends the program. All standard JavaScript globals (Array, Math, JSON) are available.'
          },
          {
            type: 'code',
            title: 'Modules — import and export',
            body: '// reverse.mjs (ES module)\nexport function reverse(string) {\n  return Array.from(string).reverse().join("");\n}\n\n// main.mjs\nimport {reverse} from "./reverse.mjs";\n\nlet argument = process.argv[2];\nconsole.log(reverse(argument));\n\n// Run:\n// $ node main.mjs JavaScript\n// → tpircSavaJ'
          },
          {
            type: 'text',
            body: 'Node supports two module systems: ES modules (import/export, files ending in .mjs or "type": "module" in package.json) and CommonJS (require/module.exports, .js files by default). ES modules are the modern standard — prefer them. import/export make dependencies explicit and enable tree-shaking.'
          },
          {
            type: 'code',
            title: 'NPM — Package Manager',
            body: '// Initialize a new project\n// $ npm init\n\n// Install a package\n// $ npm install express\n\n// package.json\n{\n  "name": "my-app",\n  "version": "1.0.0",\n  "dependencies": {\n    "express": "^4.18.0"\n  }\n}\n\n// Semantic versioning:\n// ^4.18.0 means >=4.18.0 and <5.0.0\n// ~4.18.0 means >=4.18.0 and <4.19.0\n\n// Use the installed package\nimport express from "express";\nconst app = express();'
          },
          {
            type: 'text',
            body: 'NPM (Node Package Manager) manages project dependencies. npm init creates package.json. npm install adds packages to node_modules/ and records them in package.json. Semantic versioning (semver) uses three numbers: major.minor.patch. The ^ prefix allows compatible updates. Always commit package.json to version control.'
          }
        ]
      },
      {
        id: 'file-system',
        title: 'File System Operations',
        description: 'Read and write files with Node.js',
        xp: 35,
        duration: '15 min',
        difficulty: 'intermediate',
        concepts: ['fs', 'readFile', 'writeFile', 'readdir', 'stat', 'path', 'stream', 'pipe'],
        content: [
          {
            type: 'text',
            body: 'Node\'s node:fs module provides functions for working with files and directories. It offers both callback-based and promise-based APIs. Use the promise-based API (node:fs/promises) with async/await for cleaner code. The node:path module handles file paths across operating systems.'
          },
          {
            type: 'code',
            title: 'Reading and Writing Files',
            body: 'import {readFile, writeFile, readdir, stat} from "node:fs/promises";\nimport {join} from "node:path";\n\n// Read a file\nconst text = await readFile("file.txt", "utf8");\nconsole.log(text);\n\n// Write a file\nawait writeFile("output.txt", "Hello, world!");\nconsole.log("File written.");\n\n// List directory contents\nconst files = await readdir(".");\nconsole.log(files);\n\n// Get file info\nconst info = await stat("file.txt");\nconsole.log("Size:", info.size);\nconsole.log("Is directory?", info.isDirectory());'
          },
          {
            type: 'code',
            title: 'Working with Paths',
            body: 'import {resolve, join, basename, dirname, extname} from "node:path";\n\n// Resolve relative paths\nconst fullPath = resolve("src", "index.js");\nconsole.log(fullPath);\n// → /absolute/path/to/src/index.js\n\n// Join path segments\nconst filePath = join("/home", "user", "docs", "file.txt");\nconsole.log(filePath);\n// → /home/user/docs/file.txt\n\n// Extract parts\nconsole.log(basename(filePath)); // → file.txt\nconsole.log(dirname(filePath));  // → /home/user/docs\nconsole.log(extname(filePath));  // → .txt'
          },
          {
            type: 'code',
            title: 'Streaming Large Files',
            body: 'import {createReadStream, createWriteStream} from "node:fs";\nimport {pipeline} from "node:stream/promises";\n\n// Stream a large file (memory efficient)\nconst readStream = createReadStream("large-file.txt");\nconst writeStream = createWriteStream("copy.txt");\n\nawait pipeline(readStream, writeStream);\nconsole.log("File copied!");\n\n// Process file line by line\nimport {createInterface} from "node:readline";\n\nconst rl = createInterface({\n  input: createReadStream("data.csv")\n});\n\nfor await (const line of rl) {\n  const [name, age] = line.split(",");\n  console.log(`${name} is ${age} years old`);\n}'
          },
          {
            type: 'text',
            body: 'For small files, readFile/writeFile are fine. For large files, use streams to avoid loading everything into memory. createReadStream creates a readable stream; createWriteStream creates a writable stream. pipeline() connects streams safely with proper error handling. readline processes files line by line.'
          }
        ]
      },
      {
        id: 'http-server',
        title: 'HTTP Servers',
        description: 'Create web servers with Node.js',
        xp: 45,
        duration: '25 min',
        difficulty: 'advanced',
        concepts: ['http', 'createServer', 'request', 'response', 'route', 'static', 'middleware', 'CORS'],
        content: [
          {
            type: 'text',
            body: 'Node\'s node:http module provides everything needed to build HTTP servers. A server listens for incoming requests and sends responses. You can build anything from simple static file servers to complex APIs. The request object contains all info about what the client wants, and the response object is used to send data back.'
          },
          {
            type: 'code',
            title: 'Basic HTTP Server',
            body: 'import {createServer} from "node:http";\n\nconst server = createServer((request, response) => {\n  console.log(`${request.method} ${request.url}`);\n\n  response.writeHead(200, {\n    "Content-Type": "text/html"\n  });\n  response.write(`\n    <h1>Hello!</h1>\n    <p>You asked for ${request.url}</p>\n  `);\n  response.end();\n});\n\nserver.listen(8000);\nconsole.log("Listening on port 8000");'
          },
          {
            type: 'code',
            title: 'Routing and Methods',
            body: 'const methods = Object.create(null);\n\nmethods.GET = async (request) => {\n  const url = new URL(request.url, "http://d");\n  if (url.pathname === "/") {\n    return {\n      body: "<h1>Home Page</h1>",\n      type: "text/html"\n    };\n  }\n  if (url.pathname === "/api/users") {\n    const users = await getUsersFromDB();\n    return {\n      body: JSON.stringify(users),\n      type: "application/json"\n    };\n  }\n  return { status: 404, body: "Not found" };\n};\n\nmethods.POST = async (request) => {\n  const body = await readBody(request);\n  const data = JSON.parse(body);\n  await saveToDatabase(data);\n  return { status: 201, body: "Created" };\n};\n\nasync function readBody(request) {\n  const chunks = [];\n  for await (const chunk of request) {\n    chunks.push(chunk);\n  }\n  return Buffer.concat(chunks).toString();\n}'
          },
          {
            type: 'code',
            title: 'Static File Server',
            body: 'import {createServer} from "node:http";\nimport {readFile, stat} from "node:fs/promises";\nimport {join, extname} from "node:path";\n\nconst MIME_TYPES = {\n  ".html": "text/html",\n  ".js": "application/javascript",\n  ".css": "text/css",\n  ".json": "application/json",\n  ".png": "image/png",\n  ".jpg": "image/jpeg"\n};\n\nasync function serveStatic(request, response) {\n  const url = new URL(request.url, "http://d");\n  const filePath = join("./public", url.pathname);\n\n  try {\n    const info = await stat(filePath);\n    if (info.isDirectory()) {\n      return serveStatic({url: url.pathname + "/index.html"}, response);\n    }\n    const content = await readFile(filePath);\n    const ext = extname(filePath);\n    response.writeHead(200, {\n      "Content-Type": MIME_TYPES[ext] || "text/plain"\n    });\n    response.end(content);\n  } catch {\n    response.writeHead(404);\n    response.end("Not found");\n  }\n}\n\ncreateServer(serveStatic).listen(8000);'
          },
          {
            type: 'text',
            body: 'Key concepts: request.method (GET, POST, PUT, DELETE), request.url (the requested path), request.headers (request headers), response.writeHead() (set status and headers), response.write() (send body data), response.end() (finish response). For production, use frameworks like Express.js which provide routing, middleware, and error handling out of the box.'
          }
        ]
      },
    ],
  },
];

export function getWorld(worldId) {
  return worlds.find(w => w.id === worldId);
}

export function getLesson(worldId, lessonId) {
  const world = getWorld(worldId);
  return world?.lessons.find(l => l.id === lessonId);
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
