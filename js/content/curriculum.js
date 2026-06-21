// ============================================================
// CURRICULUM - World & Lesson Data
// ============================================================

export const worlds = [
  {
    id: 'variables-valley',
    title: 'Variables Valley',
    description: 'Master the building blocks of JavaScript',
    icon: 'variables',
    order: 1,
    prerequisites: [],
    color: '#5e6ad2',
    position: { row: 0, col: 1 },
    lessons: [
      {
        id: 'declaring-variables',
        title: 'Declaring Variables',
        description: 'Learn to store data with let, const, and var',
        xp: 25,
        duration: '10 min',
        difficulty: 'beginner',
        concepts: ['let', 'const', 'var', 'declaration'],
      },
      {
        id: 'variable-types',
        title: 'Data Types',
        description: 'Explore numbers, strings, booleans, and more',
        xp: 25,
        duration: '12 min',
        difficulty: 'beginner',
        concepts: ['number', 'string', 'boolean', 'null', 'undefined'],
      },
      {
        id: 'naming-rules',
        title: 'Naming Rules',
        description: 'Master the art of naming variables',
        xp: 15,
        duration: '8 min',
        difficulty: 'beginner',
        concepts: ['naming', 'conventions', 'reserved-words'],
      },
    ],
  },
  {
    id: 'functions-forest',
    title: 'Functions Forest',
    description: 'Create reusable blocks of code',
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
        xp: 25,
        duration: '10 min',
        difficulty: 'beginner',
        concepts: ['function', 'declaration', 'call', 'return'],
      },
      {
        id: 'parameters-arguments',
        title: 'Parameters & Arguments',
        description: 'Pass data into your functions',
        xp: 25,
        duration: '10 min',
        difficulty: 'beginner',
        concepts: ['parameters', 'arguments', 'default'],
      },
      {
        id: 'arrow-functions',
        title: 'Arrow Functions',
        description: 'Write concise functions with modern syntax',
        xp: 30,
        duration: '12 min',
        difficulty: 'beginner',
        concepts: ['arrow', 'syntax', 'implicit-return'],
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
        id: 'creating-arrays',
        title: 'Creating Arrays',
        description: 'Build your first data collections',
        xp: 25,
        duration: '10 min',
        difficulty: 'beginner',
        concepts: ['array', 'literal', 'constructor', 'length'],
      },
      {
        id: 'array-methods',
        title: 'Array Methods',
        description: 'Transform and manipulate arrays',
        xp: 30,
        duration: '15 min',
        difficulty: 'beginner',
        concepts: ['push', 'pop', 'shift', 'unshift', 'splice'],
      },
      {
        id: 'iterating-arrays',
        title: 'Iterating Arrays',
        description: 'Loop through array elements',
        xp: 30,
        duration: '12 min',
        difficulty: 'beginner',
        concepts: ['forEach', 'for', 'while', 'map'],
      },
    ],
  },
  {
    id: 'object-city',
    title: 'Object City',
    description: 'Model real-world entities with objects',
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
        xp: 25,
        duration: '10 min',
        difficulty: 'beginner',
        concepts: ['object', 'property', 'key', 'value', 'dot-notation'],
      },
      {
        id: 'object-methods',
        title: 'Object Methods',
        description: 'Add behavior to your objects',
        xp: 30,
        duration: '12 min',
        difficulty: 'beginner',
        concepts: ['method', 'this', 'function-expression'],
      },
      {
        id: 'destructuring',
        title: 'Destructuring',
        description: 'Extract values with elegant syntax',
        xp: 35,
        duration: '15 min',
        difficulty: 'intermediate',
        concepts: ['destructuring', 'pattern', 'default-values'],
      },
    ],
  },
  {
    id: 'dom-kingdom',
    title: 'DOM Kingdom',
    description: 'Bring your web pages to life',
    icon: 'dom',
    order: 5,
    prerequisites: ['object-city'],
    color: '#5e6ad2',
    position: { row: 1, col: 2 },
    lessons: [
      {
        id: 'dom-intro',
        title: 'Introduction to DOM',
        description: 'Understand the Document Object Model',
        xp: 25,
        duration: '10 min',
        difficulty: 'beginner',
        concepts: ['DOM', 'document', 'element', 'node'],
      },
      {
        id: 'selecting-elements',
        title: 'Selecting Elements',
        description: 'Find elements in the DOM tree',
        xp: 25,
        duration: '10 min',
        difficulty: 'beginner',
        concepts: ['getElementById', 'querySelector', 'querySelectorAll'],
      },
      {
        id: 'manipulating-dom',
        title: 'Manipulating DOM',
        description: 'Change content, styles, and structure',
        xp: 30,
        duration: '15 min',
        difficulty: 'beginner',
        concepts: ['textContent', 'innerHTML', 'style', 'classList', 'append'],
      },
    ],
  },
  {
    id: 'event-laboratory',
    title: 'Event Loop Laboratory',
    description: 'Discover how JavaScript handles events',
    icon: 'eventLoop',
    order: 6,
    prerequisites: ['dom-kingdom'],
    color: '#d4a72c',
    position: { row: 2, col: 0 },
    lessons: [
      {
        id: 'event-basics',
        title: 'Event Basics',
        description: 'Respond to user interactions',
        xp: 25,
        duration: '10 min',
        difficulty: 'beginner',
        concepts: ['addEventListener', 'event', 'click', 'handler'],
      },
      {
        id: 'event-object',
        title: 'Event Object',
        description: 'Access event details and prevent defaults',
        xp: 30,
        duration: '12 min',
        difficulty: 'intermediate',
        concepts: ['event-object', 'preventDefault', 'stopPropagation'],
      },
      {
        id: 'event-delegation',
        title: 'Event Delegation',
        description: 'Handle events efficiently on dynamic lists',
        xp: 35,
        duration: '15 min',
        difficulty: 'intermediate',
        concepts: ['delegation', 'bubbling', 'target', 'closest'],
      },
    ],
  },
  {
    id: 'async-galaxy',
    title: 'Async Galaxy',
    description: 'Master asynchronous programming',
    icon: 'async',
    order: 7,
    prerequisites: ['functions-forest', 'event-laboratory'],
    color: '#5e6ad2',
    position: { row: 2, col: 1 },
    lessons: [
      {
        id: 'async-intro',
        title: 'Introduction to Async',
        description: 'Why asynchronous matters',
        xp: 25,
        duration: '10 min',
        difficulty: 'intermediate',
        concepts: ['async', 'await', 'callback', 'promise'],
      },
      {
        id: 'promises',
        title: 'Promises',
        description: 'Handle future values elegantly',
        xp: 35,
        duration: '15 min',
        difficulty: 'intermediate',
        concepts: ['Promise', 'then', 'catch', 'finally', 'resolve', 'reject'],
      },
      {
        id: 'async-await',
        title: 'Async/Await',
        description: 'Write clean asynchronous code',
        xp: 35,
        duration: '15 min',
        difficulty: 'intermediate',
        concepts: ['async', 'await', 'try-catch', 'sequential', 'parallel'],
      },
    ],
  },
  {
    id: 'node-factory',
    title: 'Node.js Factory',
    description: 'Build server-side applications',
    icon: 'node',
    order: 8,
    prerequisites: ['async-galaxy'],
    color: '#2da44e',
    position: { row: 2, col: 2 },
    lessons: [
      {
        id: 'node-intro',
        title: 'Introduction to Node.js',
        description: 'Run JavaScript outside the browser',
        xp: 30,
        duration: '12 min',
        difficulty: 'intermediate',
        concepts: ['node', 'npm', 'module', 'require', 'import'],
      },
      {
        id: 'file-system',
        title: 'File System',
        description: 'Read and write files with Node.js',
        xp: 35,
        duration: '15 min',
        difficulty: 'intermediate',
        concepts: ['fs', 'readFile', 'writeFile', 'path'],
      },
      {
        id: 'http-server',
        title: 'HTTP Server',
        description: 'Create your first web server',
        xp: 40,
        duration: '20 min',
        difficulty: 'intermediate',
        concepts: ['http', 'request', 'response', 'listen', 'route'],
      },
    ],
  },
  {
    id: 'algorithm-arena',
    title: 'Algorithm Arena',
    description: 'Sharpen your problem-solving skills',
    icon: 'algorithms',
    order: 9,
    prerequisites: ['array-ocean', 'object-city'],
    color: '#cf222e',
    position: { row: 3, col: 1 },
    lessons: [
      {
        id: 'sorting-basics',
        title: 'Sorting Basics',
        description: 'Implement common sorting algorithms',
        xp: 40,
        duration: '20 min',
        difficulty: 'advanced',
        concepts: ['sort', 'compare', 'bubble-sort', 'quick-sort'],
      },
      {
        id: 'search-algorithms',
        title: 'Search Algorithms',
        description: 'Find elements efficiently',
        xp: 40,
        duration: '20 min',
        difficulty: 'advanced',
        concepts: ['linear-search', 'binary-search', 'recursion'],
      },
      {
        id: 'dynamic-programming',
        title: 'Dynamic Programming',
        description: 'Solve complex problems step by step',
        xp: 50,
        duration: '25 min',
        difficulty: 'advanced',
        concepts: ['memoization', 'tabulation', 'optimization'],
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
