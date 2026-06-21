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
  if (!lesson.content || lesson.content.length === 0) {
    return `
      <div class="lesson-section">
        <p class="text-secondary">Interactive content for this lesson is coming soon. Try the puzzles below!</p>
      </div>
    `;
  }

  let html = '<div class="lesson-section">';

  for (const block of lesson.content) {
    if (block.type === 'text') {
      html += `<p class="text-secondary mb-4" style="line-height: 1.7;">${block.body}</p>`;
    } else if (block.type === 'code') {
      html += `
        <div class="card mb-4" style="margin-bottom: var(--space-5);">
          ${block.title ? `<h3 class="font-semibold mb-2">${block.title}</h3>` : ''}
          <pre><code>${escapeHtml(block.body)}</code></pre>
        </div>
      `;
    }
  }

  html += '</div>';
  return html;
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
