// ============================================================
// PUZZLES - Exercise Definitions
// ============================================================

export const puzzleTypes = {
  predictOutput: {
    id: 'predict-output',
    title: 'Predict the Output',
    description: 'What will this code print?',
    icon: 'eye',
  },
  fixBug: {
    id: 'fix-bug',
    title: 'Fix the Bug',
    description: 'Find and fix the error in this code',
    icon: 'bug',
  },
  fillBlank: {
    id: 'fill-blank',
    title: 'Fill the Blank',
    description: 'Complete the missing code',
    icon: 'code',
  },
};

export const puzzles = {
  'declaring-variables': [
    {
      id: 'p-var-1',
      type: 'predict-output',
      title: 'Variable Declaration',
      code: `let age = 25;\nconsole.log(age);`,
      expected: ['25'],
      explanation: 'The variable "age" stores the value 25, so console.log prints 25.',
      xp: 10,
      hints: ['What value is assigned to "age"?'],
    },
    {
      id: 'p-var-2',
      type: 'predict-output',
      title: 'Const Reassignment',
      code: `const pi = 3.14;\npi = 3;\nconsole.log(pi);`,
      expected: ['Error', 'TypeError', 'error'],
      explanation: 'Cannot reassign a variable declared with "const". This throws a TypeError.',
      xp: 15,
      hints: ['Think about what "const" means'],
    },
    {
      id: 'p-var-3',
      type: 'fix-bug',
      title: 'Fix the Declaration',
      code: `var message = "Hello";\nvar message = "World";\nconsole.log(message);`,
      bugLine: 2,
      solution: 'let message = "World";',
      acceptableSolutions: [
        'let message = "World";',
        'const message = "World";',
      ],
      explanation: '"var" allows redeclaration, but using "let" or "const" is better practice. The real issue is redeclaring with var, which is allowed but confusing.',
      xp: 15,
      hints: ['Consider using a different keyword for the second declaration'],
    },
    {
      id: 'p-var-4',
      type: 'fill-blank',
      title: 'Declare a Variable',
      code: `___ score = 100;\nconsole.log(score);`,
      blanks: ['let', 'const', 'var'],
      correct: 'let',
      explanation: '"let" declares a variable that can be reassigned. "const" also works if you don\'t plan to reassign.',
      xp: 10,
      hints: ['Which keyword declares a block-scoped variable?'],
    },
  ],

  'function-basics': [
    {
      id: 'p-func-1',
      type: 'predict-output',
      title: 'Function Return',
      code: `function add(a, b) {\n  return a + b;\n}\nconsole.log(add(3, 4));`,
      expected: ['7'],
      explanation: 'The function adds 3 + 4 and returns 7.',
      xp: 10,
      hints: ['What does the return statement compute?'],
    },
    {
      id: 'p-func-2',
      type: 'predict-output',
      title: 'No Return Value',
      code: `function greet(name) {\n  console.log("Hello, " + name);\n}\nconst result = greet("Alice");\nconsole.log(result);`,
      expected: ['Hello, Alice', 'undefined'],
      explanation: 'The function prints "Hello, Alice" but returns undefined (no return statement).',
      xp: 15,
      hints: ['What happens when a function has no return statement?'],
    },
    {
      id: 'p-func-3',
      type: 'fix-bug',
      title: 'Fix the Function',
      code: `function multiply(a, b)\n  return a * b;\n}\nconsole.log(multiply(5, 3));`,
      bugLine: 1,
      solution: 'function multiply(a, b) {',
      acceptableSolutions: [
        'function multiply(a, b) {',
        'function multiply(a, b) {',
      ],
      explanation: 'The opening curly brace "{" is missing after the function parameters.',
      xp: 15,
      hints: ['Check the syntax around the function declaration'],
    },
  ],

  'creating-arrays': [
    {
      id: 'p-arr-1',
      type: 'predict-output',
      title: 'Array Access',
      code: `const colors = ["red", "green", "blue"];\nconsole.log(colors[1]);`,
      expected: ['green'],
      explanation: 'Array indices start at 0, so colors[1] is the second element "green".',
      xp: 10,
      hints: ['Remember: arrays are zero-indexed'],
    },
    {
      id: 'p-arr-2',
      type: 'predict-output',
      title: 'Array Length',
      code: `const nums = [10, 20, 30, 40];\nconsole.log(nums.length);`,
      expected: ['4'],
      explanation: 'The array has 4 elements, so length is 4.',
      xp: 10,
      hints: ['How many elements are in the array?'],
    },
    {
      id: 'p-arr-3',
      type: 'fix-bug',
      title: 'Fix the Push',
      code: `const items = ["a", "b"];\nitems.push["c"];\nconsole.log(items);`,
      bugLine: 2,
      solution: 'items.push("c");',
      acceptableSolutions: [
        'items.push("c");',
        'items.push(\'c\');',
      ],
      explanation: 'push is a method, not a property. Use parentheses () not brackets [].',
      xp: 15,
      hints: ['How do you call a method in JavaScript?'],
    },
  ],

  'object-basics': [
    {
      id: 'p-obj-1',
      type: 'predict-output',
      title: 'Object Property',
      code: `const person = {\n  name: "Sam",\n  age: 30\n};\nconsole.log(person.name);`,
      expected: ['Sam'],
      explanation: 'Dot notation accesses the "name" property of the person object.',
      xp: 10,
      hints: ['What does dot notation do?'],
    },
    {
      id: 'p-obj-2',
      type: 'predict-output',
      title: 'Bracket Notation',
      code: `const scores = { math: 95, science: 88 };\nconst subject = "math";\nconsole.log(scores[subject]);`,
      expected: ['95'],
      explanation: 'Bracket notation allows accessing properties using a variable.',
      xp: 15,
      hints: ['What value does "subject" hold?'],
    },
  ],

  'dom-intro': [
    {
      id: 'p-dom-1',
      type: 'predict-output',
      title: 'DOM Selection',
      code: `// Assuming HTML: <div id="box">Hello</div>\nconst el = document.getElementById("box");\nconsole.log(el.textContent);`,
      expected: ['Hello'],
      explanation: 'getElementById finds the element and textContent returns its text.',
      xp: 10,
      hints: ['What does textContent return?'],
    },
  ],

  'event-basics': [
    {
      id: 'p-evt-1',
      type: 'fill-blank',
      title: 'Event Listener',
      code: `button.addEventListener("___", function() {\n  console.log("Clicked!");\n});`,
      blanks: ['click', 'hover', 'press'],
      correct: 'click',
      explanation: '"click" is the most common event type for button interactions.',
      xp: 10,
      hints: ['What event fires when a user clicks a button?'],
    },
  ],
};

export function getPuzzlesForLesson(lessonId) {
  return puzzles[lessonId] || [];
}

export function validateAnswer(puzzle, userAnswer) {
  if (puzzle.type === 'predict-output') {
    const normalized = userAnswer.trim().toLowerCase();
    return puzzle.expected.some(e => normalized.includes(e.toLowerCase()));
  }

  if (puzzle.type === 'fix-bug') {
    const normalized = userAnswer.trim().toLowerCase();
    return puzzle.acceptableSolutions.some(s => normalized.includes(s.toLowerCase()));
  }

  if (puzzle.type === 'fill-blank') {
    return userAnswer.trim().toLowerCase() === puzzle.correct.toLowerCase();
  }

  return false;
}
