// ============================================================
// LESSON VIEW COMPONENT
// ============================================================

import { getLesson, getWorld, worlds } from '../content/curriculum.js';
import { getPuzzlesForLesson, validateAnswer } from '../content/puzzles.js';
import { checkAchievements } from '../content/achievements.js';
import { store } from '../stores/store.js';
import { icon } from '../lib/icons.js';

let currentPuzzleIndex = 0;
let lessonPuzzles = [];
let lessonCompleted = false;

export function renderLessonView(worldId, lessonId) {
  const container = document.getElementById('main');
  const world = getWorld(worldId);
  const lesson = getLesson(worldId, lessonId);

  if (!world || !lesson) {
    container.innerHTML = `<div class="container"><p>Lesson not found.</p></div>`;
    return;
  }

  lessonPuzzles = getPuzzlesForLesson(lessonId);
  currentPuzzleIndex = 0;
  lessonCompleted = false;

  const completedLessons = store.get('progress.completedLessons') || [];
  const isCompleted = completedLessons.includes(lessonId);

  container.innerHTML = `
    <div class="container">
      <div class="lesson-header animate-fade-in-up">
        <button class="btn btn--ghost btn--sm" id="back-to-world" style="margin-bottom: var(--space-4);">
          ${icon('arrowLeft', 16)}
          Back to ${world.title}
        </button>

        <div class="lesson-header__info" style="margin-bottom: var(--space-6);">
          <div class="flex items-center gap-3 mb-2">
            <span class="badge badge--accent">${world.title}</span>
            <span class="badge">${lesson.difficulty}</span>
            ${isCompleted ? '<span class="badge badge--success">' + icon('check', 12) + ' Completed</span>' : ''}
          </div>
          <h1 class="text-3xl font-bold tracking-tight">${lesson.title}</h1>
          <p class="text-lg text-secondary mt-2">${lesson.description}</p>
          <div class="flex items-center gap-4 mt-3 text-sm text-secondary">
            <span class="flex items-center gap-1">${icon('clock', 14)} ${lesson.duration}</span>
            <span class="flex items-center gap-1">${icon('zap', 14)} ${lesson.xp} XP</span>
          </div>
        </div>
      </div>

      <div class="lesson-content">
        ${renderLessonContent(lesson)}

        ${lessonPuzzles.length > 0 ? `
          <div class="puzzles-section" style="margin-top: var(--space-8);">
            <h2 class="text-xl font-bold mb-4">Practice Puzzles</h2>
            <div id="puzzle-container">
              ${renderPuzzle(lessonPuzzles[0], 0)}
            </div>
          </div>
        ` : ''}

        <div class="lesson-footer" style="margin-top: var(--space-8); display: flex; justify-content: space-between;">
          <button class="btn btn--secondary" id="complete-lesson">
            ${icon('check', 16)}
            Mark as Complete
          </button>
          <button class="btn btn--primary" id="next-lesson" style="display: none;">
            Next Lesson
            ${icon('arrowRight', 16)}
          </button>
        </div>
      </div>
    </div>
  `;

  // Event listeners
  container.querySelector('#back-to-world').addEventListener('click', () => {
    window.location.hash = `/world/${worldId}`;
  });

  container.querySelector('#complete-lesson').addEventListener('click', () => {
    completeLesson(worldId, lessonId, lesson.xp);
  });

  const nextBtn = container.querySelector('#next-lesson');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const next = getNextLesson(worldId, lessonId);
      if (next) {
        window.location.hash = `/lesson/${next.worldId}/${next.lesson.id}`;
      } else {
        window.location.hash = '/map';
      }
    });
  }

  // Setup puzzle listeners
  if (lessonPuzzles.length > 0) {
    setupPuzzleListeners(lessonPuzzles[0], 0);
  }

  // Setup interactive demos
  setupLessonDemos(lesson);
}

function renderLessonContent(lesson) {
  // Lesson content based on concepts
  const contentMap = {
    'declaring-variables': `
      <div class="lesson-section">
        <h2 class="text-xl font-bold mb-4">What are Variables?</h2>
        <p class="text-secondary mb-4">Variables are containers that store data values. Think of them as labeled boxes where you can put things.</p>

        <div class="concept-demo card" style="margin: var(--space-6) 0;">
          <h3 class="font-semibold mb-3">Interactive Demo</h3>
          <div class="demo-area" style="display: flex; gap: var(--space-6); align-items: center;">
            <div class="variable-box" style="padding: var(--space-4); background: var(--surface-2); border-radius: var(--radius-lg); border: 2px solid var(--accent); min-width: 150px; text-align: center;">
              <div class="text-xs text-tertiary mb-1">let age =</div>
              <div class="text-2xl font-bold" id="demo-value">25</div>
            </div>
            <div>
              <p class="text-sm text-secondary mb-2">Try changing the value:</p>
              <input type="range" id="demo-slider" min="1" max="100" value="25" class="input" style="width: 200px;">
            </div>
          </div>
        </div>

        <h2 class="text-xl font-bold mb-4">Three Ways to Declare Variables</h2>

        <div class="grid gap-4" style="grid-template-columns: repeat(3, 1fr);">
          <div class="card">
            <h3 class="font-semibold text-accent mb-2">let</h3>
            <pre style="font-size: var(--text-sm);"><code>let score = 100;
score = 200; // OK</code></pre>
            <p class="text-xs text-secondary mt-2">Can be reassigned. Block-scoped.</p>
          </div>

          <div class="card">
            <h3 class="font-semibold text-success mb-2">const</h3>
            <pre style="font-size: var(--text-sm);"><code>const pi = 3.14;
pi = 3; // Error!</code></pre>
            <p class="text-xs text-secondary mt-2">Cannot be reassigned. Block-scoped.</p>
          </div>

          <div class="card">
            <h3 class="font-semibold text-warning mb-2">var</h3>
            <pre style="font-size: var(--text-sm);"><code>var name = "Old";
var name = "New"; // OK</code></pre>
            <p class="text-xs text-secondary mt-2">Function-scoped. Avoid in modern code.</p>
          </div>
        </div>
      </div>
    `,

    'function-basics': `
      <div class="lesson-section">
        <h2 class="text-xl font-bold mb-4">What are Functions?</h2>
        <p class="text-secondary mb-4">Functions are reusable blocks of code that perform a specific task. Think of them as machines: you put something in, and they give you something out.</p>

        <div class="concept-demo card" style="margin: var(--space-6) 0;">
          <h3 class="font-semibold mb-3">Interactive Demo</h3>
          <div class="demo-area" style="display: flex; gap: var(--space-6); align-items: center; flex-wrap: wrap;">
            <div style="flex: 1; min-width: 200px;">
              <label class="text-sm text-secondary">Input A:</label>
              <input type="number" id="func-a" value="3" class="input" style="width: 100%; margin-top: var(--space-1);">
            </div>
            <div style="flex: 1; min-width: 200px;">
              <label class="text-sm text-secondary">Input B:</label>
              <input type="number" id="func-b" value="4" class="input" style="width: 100%; margin-top: var(--space-1);">
            </div>
            <div style="text-align: center; padding: var(--space-4); background: var(--surface-2); border-radius: var(--radius-lg); min-width: 100px;">
              <div class="text-xs text-tertiary mb-1">Result</div>
              <div class="text-2xl font-bold" id="func-result">7</div>
            </div>
          </div>
        </div>

        <h2 class="text-xl font-bold mb-4">Function Syntax</h2>

        <div class="card mb-4">
          <h3 class="font-semibold mb-2">Function Declaration</h3>
          <pre><code>function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // "Hello, Alice!"</code></pre>
        </div>

        <div class="card">
          <h3 class="font-semibold mb-2">Arrow Function</h3>
          <pre><code>const add = (a, b) => a + b;

console.log(add(3, 4)); // 7</code></pre>
        </div>
      </div>
    `,

    'creating-arrays': `
      <div class="lesson-section">
        <h2 class="text-xl font-bold mb-4">What are Arrays?</h2>
        <p class="text-secondary mb-4">Arrays are ordered collections of values. Each value has an index (position), starting from 0.</p>

        <div class="concept-demo card" style="margin: var(--space-6) 0;">
          <h3 class="font-semibold mb-3">Interactive Demo</h3>
          <div class="demo-area">
            <div id="array-demo" style="display: flex; gap: var(--space-2); margin-bottom: var(--space-4);">
              <div class="array-item" style="padding: var(--space-3); background: var(--surface-2); border-radius: var(--radius-md); text-align: center; min-width: 60px;">
                <div class="text-xs text-tertiary">[0]</div>
                <div class="font-mono">"red"</div>
              </div>
              <div class="array-item" style="padding: var(--space-3); background: var(--surface-2); border-radius: var(--radius-md); text-align: center; min-width: 60px;">
                <div class="text-xs text-tertiary">[1]</div>
                <div class="font-mono">"green"</div>
              </div>
              <div class="array-item" style="padding: var(--space-3); background: var(--surface-2); border-radius: var(--radius-md); text-align: center; min-width: 60px;">
                <div class="text-xs text-tertiary">[2]</div>
                <div class="font-mono">"blue"</div>
              </div>
            </div>
            <button class="btn btn--secondary btn--sm" id="add-item">
              ${icon('plus', 14)} Add Item
            </button>
          </div>
        </div>

        <h2 class="text-xl font-bold mb-4">Common Array Methods</h2>

        <div class="grid gap-4" style="grid-template-columns: repeat(2, 1fr);">
          <div class="card">
            <h3 class="font-semibold mb-2">push() & pop()</h3>
            <pre style="font-size: var(--text-sm);"><code>const arr = [1, 2, 3];
arr.push(4);    // [1,2,3,4]
arr.pop();      // [1,2,3]</code></pre>
          </div>
          <div class="card">
            <h3 class="font-semibold mb-2">shift() & unshift()</h3>
            <pre style="font-size: var(--text-sm);"><code>const arr = [1, 2, 3];
arr.unshift(0); // [0,1,2,3]
arr.shift();    // [1,2,3]</code></pre>
          </div>
        </div>
      </div>
    `,
  };

  return contentMap[lesson.id] || `
    <div class="lesson-section">
      <p class="text-secondary">Interactive content for this lesson is coming soon. Try the puzzles below!</p>
    </div>
  `;
}

function renderPuzzle(puzzle, index) {
  if (!puzzle) return '';

  const total = lessonPuzzles.length;

  return `
    <div class="puzzle-card card animate-fade-in" data-puzzle-index="${index}">
      <div class="card__header">
        <div class="flex items-center gap-3">
          <span class="badge badge--accent">${index + 1} / ${total}</span>
          <h3 class="card__title">${puzzle.title}</h3>
        </div>
        <span class="badge">${puzzle.xp} XP</span>
      </div>

      <div class="puzzle-code" style="margin: var(--space-4) 0;">
        <pre><code>${escapeHtml(puzzle.code)}</code></pre>
      </div>

      <div class="puzzle-input" style="margin: var(--space-4) 0;">
        ${puzzle.type === 'predict-output' ? `
          <label class="text-sm text-secondary mb-2 block">What will this code output?</label>
          <input type="text" class="input" id="puzzle-answer" placeholder="Enter your answer..." autocomplete="off">
        ` : ''}

        ${puzzle.type === 'fill-blank' ? `
          <label class="text-sm text-secondary mb-2 block">Fill in the blank:</label>
          <div class="flex gap-2">
            ${puzzle.blanks.map(b => `
              <button class="btn btn--secondary puzzle-option" data-value="${b}">${b}</button>
            `).join('')}
          </div>
        ` : ''}

        ${puzzle.type === 'fix-bug' ? `
          <label class="text-sm text-secondary mb-2 block">Fix the bug on line ${puzzle.bugLine}:</label>
          <input type="text" class="input" id="puzzle-answer" placeholder="Enter the fixed code..." autocomplete="off">
        ` : ''}
      </div>

      <div class="puzzle-actions" style="display: flex; gap: var(--space-3); align-items: center;">
        <button class="btn btn--primary" id="submit-answer">
          Submit Answer
        </button>
        <button class="btn btn--ghost btn--sm" id="show-hint">
          ${icon('info', 14)} Hint
        </button>
        <span id="puzzle-feedback" style="margin-left: auto;"></span>
      </div>

      <div class="puzzle-hint" id="puzzle-hint" style="display: none; margin-top: var(--space-4); padding: var(--space-3); background: var(--info-subtle); border-radius: var(--radius-md); color: var(--info);">
        ${puzzle.hints[0]}
      </div>

      <div class="puzzle-explanation" id="puzzle-explanation" style="display: none; margin-top: var(--space-4); padding: var(--space-3); background: var(--success-subtle); border-radius: var(--radius-md);">
        <p class="text-sm">${puzzle.explanation}</p>
      </div>
    </div>
  `;
}

function setupPuzzleListeners(puzzle, index) {
  const container = document.getElementById('puzzle-container');
  if (!container) return;

  const submitBtn = container.querySelector('#submit-answer');
  const hintBtn = container.querySelector('#show-hint');
  const hintEl = container.querySelector('#puzzle-hint');
  const explanationEl = container.querySelector('#puzzle-explanation');
  const feedbackEl = container.querySelector('#puzzle-feedback');

  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      let answer;
      if (puzzle.type === 'fill-blank') {
        const selected = container.querySelector('.puzzle-option.is-selected');
        answer = selected ? selected.dataset.value : '';
      } else {
        answer = container.querySelector('#puzzle-answer')?.value || '';
      }

      const correct = validateAnswer(puzzle, answer);

      if (correct) {
        feedbackEl.innerHTML = `<span class="badge badge--success">${icon('check', 12)} Correct!</span>`;
        explanationEl.style.display = 'block';
        store.completePuzzle(puzzle.id, puzzle.xp);

        // Move to next puzzle after delay
        setTimeout(() => {
          currentPuzzleIndex++;
          if (currentPuzzleIndex < lessonPuzzles.length) {
            container.innerHTML = renderPuzzle(lessonPuzzles[currentPuzzleIndex], currentPuzzleIndex);
            setupPuzzleListeners(lessonPuzzles[currentPuzzleIndex], currentPuzzleIndex);
          }
        }, 1500);
      } else {
        feedbackEl.innerHTML = `<span class="badge badge--error">${icon('x', 12)} Try again</span>`;
        container.style.animation = 'shake 0.5s';
        setTimeout(() => container.style.animation = '', 500);
      }
    });
  }

  if (hintBtn) {
    hintBtn.addEventListener('click', () => {
      hintEl.style.display = hintEl.style.display === 'none' ? 'block' : 'none';
    });
  }

  // Fill blank options
  container.querySelectorAll('.puzzle-option').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.puzzle-option').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
  });
}

function completeLesson(worldId, lessonId, xp) {
  store.completeLesson(lessonId, worldId, xp);
  lessonCompleted = true;

  const feedbackEl = document.getElementById('puzzle-feedback');
  const nextBtn = document.getElementById('next-lesson');
  const completeBtn = document.getElementById('complete-lesson');

  if (feedbackEl) {
    feedbackEl.innerHTML = `<span class="badge badge--success">${icon('check', 12)} Lesson Complete! +${xp} XP</span>`;
  }

  if (nextBtn) {
    nextBtn.style.display = 'inline-flex';
  }

  if (completeBtn) {
    completeBtn.disabled = true;
    completeBtn.classList.add('btn--ghost');
  }

  // Check for new achievements
  const newAchievements = checkAchievements(store.state);
  newAchievements.forEach(a => {
    store.unlockAchievement(a.id);
  });
}

function getNextLesson(currentWorldId, currentLessonId) {
  const worldIndex = worlds.findIndex(w => w.id === currentWorldId);
  if (worldIndex === -1) return null;

  const world = worlds[worldIndex];
  const lessonIndex = world.lessons.findIndex(l => l.id === currentLessonId);

  if (lessonIndex < world.lessons.length - 1) {
    return { worldId: world.id, lesson: world.lessons[lessonIndex + 1] };
  }

  return null;
}

function setupLessonDemos(lesson) {
  // Variables demo
  if (lesson.id === 'declaring-variables') {
    const slider = document.getElementById('demo-slider');
    const valueDisplay = document.getElementById('demo-value');
    if (slider && valueDisplay) {
      slider.addEventListener('input', (e) => {
        valueDisplay.textContent = e.target.value;
      });
    }
  }

  // Functions demo
  if (lesson.id === 'function-basics') {
    const inputA = document.getElementById('func-a');
    const inputB = document.getElementById('func-b');
    const result = document.getElementById('func-result');

    function updateResult() {
      const a = parseFloat(inputA?.value) || 0;
      const b = parseFloat(inputB?.value) || 0;
      if (result) result.textContent = a + b;
    }

    if (inputA) inputA.addEventListener('input', updateResult);
    if (inputB) inputB.addEventListener('input', updateResult);
  }

  // Arrays demo
  if (lesson.id === 'creating-arrays') {
    const addBtn = document.getElementById('add-item');
    const arrayDemo = document.getElementById('array-demo');
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
    let itemCount = 3;

    if (addBtn && arrayDemo) {
      addBtn.addEventListener('click', () => {
        const color = colors[itemCount % colors.length];
        const item = document.createElement('div');
        item.className = 'array-item';
        item.style.cssText = 'padding: var(--space-3); background: var(--surface-2); border-radius: var(--radius-md); text-align: center; min-width: 60px; animation: fade-in-up 0.3s ease-out;';
        item.innerHTML = `<div class="text-xs text-tertiary">[${itemCount}]</div><div class="font-mono">"${color}"</div>`;
        arrayDemo.appendChild(item);
        itemCount++;
      });
    }
  }
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

export default renderLessonView;
