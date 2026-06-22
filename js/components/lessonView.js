// ============================================================
// LESSON VIEW COMPONENT — Step-based navigation
// ============================================================

import { getLesson, getWorld, worlds } from '../content/curriculum.js';
import { getPuzzlesForLesson, validateAnswer } from '../content/puzzles.js';
import { checkAchievements } from '../content/achievements.js';
import { store } from '../stores/store.js';
import { icon } from '../lib/icons.js';

let currentStepIndex = 0;
let currentPuzzleIndex = 0;
let lessonPuzzles = [];
let lessonSteps = [];
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
  lessonSteps = lesson.steps || [];
  currentStepIndex = 0;
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
            ${lessonSteps.length > 0 ? `<span class="flex items-center gap-1">${icon('layers', 14)} ${lessonSteps.length} steps</span>` : ''}
          </div>
        </div>
      </div>

      ${lessonSteps.length > 0 ? `
        <!-- Step Progress Bar -->
        <div class="step-progress" style="margin-bottom: var(--space-6);">
          <div class="step-progress__bar" style="display: flex; gap: var(--space-2); align-items: center;">
            ${lessonSteps.map((step, i) => `
              <div class="step-dot ${i === 0 ? 'step-dot--active' : ''}" data-step="${i}"
                   style="width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
                          font-size: var(--text-xs); font-weight: 600; cursor: pointer; transition: all 0.2s;
                          ${i === 0
                            ? 'background: var(--accent); color: white;'
                            : 'background: var(--surface-2); color: var(--text-secondary); border: 1px solid var(--border-default);'}">
                ${i + 1}
              </div>
              ${i < lessonSteps.length - 1 ? '<div style="flex: 1; height: 2px; background: var(--border-default);"></div>' : ''}
            `).join('')}
          </div>
          <div class="step-progress__label" style="margin-top: var(--space-2); font-size: var(--text-sm); color: var(--text-secondary);">
            Step <span id="current-step-num">1</span> of ${lessonSteps.length}: <span id="current-step-title">${lessonSteps[0].title}</span>
          </div>
        </div>

        <!-- Step Content -->
        <div id="step-content" class="lesson-content animate-fade-in">
          ${renderStepContent(lessonSteps[0])}
        </div>

        <!-- Step Navigation -->
        <div class="step-nav" style="margin-top: var(--space-6); display: flex; justify-content: space-between; align-items: center;">
          <button class="btn btn--secondary" id="prev-step" style="visibility: hidden;">
            ${icon('arrowLeft', 16)}
            Previous
          </button>
          <button class="btn btn--primary" id="next-step">
            Next Step
            ${icon('arrowRight', 16)}
          </button>
        </div>
      ` : `
        <!-- Fallback: no steps, show puzzles directly -->
        <div class="lesson-content">
          ${lessonPuzzles.length > 0 ? `
            <div class="puzzles-section">
              <h2 class="text-xl font-bold mb-4">Practice Puzzles</h2>
              <div id="puzzle-container">
                ${renderPuzzle(lessonPuzzles[0], 0)}
              </div>
            </div>
          ` : `
            <p class="text-secondary">Content for this lesson is coming soon.</p>
          `}
        </div>
      `}

      <!-- Lesson Complete Button -->
      <div class="lesson-footer" style="margin-top: var(--space-8); display: flex; justify-content: space-between; display: none;" id="lesson-footer">
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
  `;

  // Event listeners
  setupEventListeners(worldId, lessonId, lesson);
}

function renderStepContent(step) {
  if (!step || !step.content) return '';

  let html = `
    <div class="step-header" style="margin-bottom: var(--space-5);">
      <div class="flex items-center gap-2 mb-2">
        <span class="badge badge--accent">${getDifficultyLabel(step.difficulty)}</span>
      </div>
      <h2 class="text-2xl font-bold">${step.title}</h2>
    </div>
  `;

  for (const block of step.content) {
    if (block.type === 'text') {
      html += `<p class="text-secondary mb-4" style="line-height: 1.75; font-size: var(--text-base);">${block.body}</p>`;
    } else if (block.type === 'code') {
      html += `
        <div class="card mb-4" style="margin-bottom: var(--space-5);">
          ${block.title ? `<h3 class="font-semibold mb-2" style="color: var(--accent-text); font-size: var(--text-sm);">${block.title}</h3>` : ''}
          <pre><code>${escapeHtml(block.body)}</code></pre>
        </div>
      `;
    }
  }

  return html;
}

function getDifficultyLabel(difficulty) {
  const labels = {
    'beginner': 'Beginner',
    'intermediate': 'Intermediate',
    'advanced': 'Advanced'
  };
  return labels[difficulty] || difficulty;
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
          <div class="flex gap-2 flex-wrap">
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

function setupEventListeners(worldId, lessonId, lesson) {
  const container = document.getElementById('main');

  // Back button
  container.querySelector('#back-to-world')?.addEventListener('click', () => {
    window.location.hash = `#/world/${worldId}`;
  });

  // Step navigation
  if (lessonSteps.length > 0) {
    const prevBtn = container.querySelector('#prev-step');
    const nextBtn = container.querySelector('#next-step');

    nextBtn?.addEventListener('click', () => {
      if (currentStepIndex < lessonSteps.length - 1) {
        currentStepIndex++;
        updateStepDisplay(container, lesson);
      } else {
        // All steps complete — show puzzles
        showPuzzles(container, lesson);
      }
    });

    prevBtn?.addEventListener('click', () => {
      if (currentStepIndex > 0) {
        currentStepIndex--;
        updateStepDisplay(container, lesson);
      }
    });

    // Clickable step dots
    container.querySelectorAll('.step-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        const stepIdx = parseInt(dot.dataset.step);
        if (stepIdx >= 0 && stepIdx < lessonSteps.length) {
          currentStepIndex = stepIdx;
          updateStepDisplay(container, lesson);
        }
      });
    });
  }

  // Complete lesson button
  container.querySelector('#complete-lesson')?.addEventListener('click', () => {
    completeLesson(worldId, lessonId, lesson.xp);
  });

  // Next lesson button
  container.querySelector('#next-lesson')?.addEventListener('click', () => {
    const next = getNextLesson(worldId, lessonId);
    if (next) {
      window.location.hash = `#/lesson/${next.worldId}/${next.lesson.id}`;
    } else {
      window.location.hash = '#/map';
    }
  });
}

function updateStepDisplay(container, lesson) {
  const step = lessonSteps[currentStepIndex];
  if (!step) return;

  // Update content
  const contentEl = container.querySelector('#step-content');
  if (contentEl) {
    contentEl.innerHTML = renderStepContent(step);
    contentEl.classList.remove('animate-fade-in');
    void contentEl.offsetWidth; // trigger reflow
    contentEl.classList.add('animate-fade-in');
  }

  // Update progress dots
  container.querySelectorAll('.step-dot').forEach((dot, i) => {
    if (i === currentStepIndex) {
      dot.style.background = 'var(--accent)';
      dot.style.color = 'white';
      dot.style.borderColor = 'var(--accent)';
      dot.classList.add('step-dot--active');
    } else if (i < currentStepIndex) {
      dot.style.background = 'var(--success)';
      dot.style.color = 'white';
      dot.style.borderColor = 'var(--success)';
      dot.classList.remove('step-dot--active');
    } else {
      dot.style.background = 'var(--surface-2)';
      dot.style.color = 'var(--text-secondary)';
      dot.style.borderColor = 'var(--border-default)';
      dot.classList.remove('step-dot--active');
    }
  });

  // Update step label
  const stepNum = container.querySelector('#current-step-num');
  const stepTitle = container.querySelector('#current-step-title');
  if (stepNum) stepNum.textContent = currentStepIndex + 1;
  if (stepTitle) stepTitle.textContent = step.title;

  // Update prev/next buttons
  const prevBtn = container.querySelector('#prev-step');
  const nextBtn = container.querySelector('#next-step');
  if (prevBtn) prevBtn.style.visibility = currentStepIndex === 0 ? 'hidden' : 'visible';
  if (nextBtn) {
    if (currentStepIndex === lessonSteps.length - 1) {
      nextBtn.innerHTML = `Start Puzzles ${icon('puzzle', 16)}`;
    } else {
      nextBtn.innerHTML = `Next Step ${icon('arrowRight', 16)}`;
    }
  }
}

function showPuzzles(container, lesson) {
  // Hide step navigation
  const stepProgress = container.querySelector('.step-progress');
  const stepContent = container.querySelector('#step-content');
  const stepNav = container.querySelector('.step-nav');
  const lessonFooter = container.querySelector('#lesson-footer');

  if (stepProgress) stepProgress.style.display = 'none';
  if (stepContent) stepContent.style.display = 'none';
  if (stepNav) stepNav.style.display = 'none';

  // Show puzzles
  const mainContainer = container.querySelector('.lesson-content') || container;

  if (lessonPuzzles.length > 0) {
    const puzzleSection = document.createElement('div');
    puzzleSection.id = 'puzzles-section';
    puzzleSection.innerHTML = `
      <h2 class="text-xl font-bold mb-4">Practice Puzzles</h2>
      <p class="text-secondary mb-4">Test your knowledge with these exercises!</p>
      <div id="puzzle-container">
        ${renderPuzzle(lessonPuzzles[0], 0)}
      </div>
    `;
    mainContainer.appendChild(puzzleSection);
    setupPuzzleListeners(lessonPuzzles[0], 0);
  } else {
    // No puzzles — just show complete button
    if (lessonFooter) lessonFooter.style.display = 'flex';
  }

  // Show lesson footer
  if (lessonFooter) lessonFooter.style.display = 'flex';
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
        const selected = container.querySelector('.puzzle-option.is-active');
        answer = selected ? selected.dataset.value : '';
      } else {
        answer = container.querySelector('#puzzle-answer')?.value || '';
      }

      const correct = validateAnswer(puzzle, answer);

      if (correct) {
        feedbackEl.innerHTML = `<span class="badge badge--success">${icon('check', 12)} Correct!</span>`;
        explanationEl.style.display = 'block';
        store.completePuzzle(puzzle.id, puzzle.xp);

        // Move to next puzzle or show lesson complete
        setTimeout(() => {
          currentPuzzleIndex++;
          if (currentPuzzleIndex < lessonPuzzles.length) {
            container.innerHTML = renderPuzzle(lessonPuzzles[currentPuzzleIndex], currentPuzzleIndex);
            setupPuzzleListeners(lessonPuzzles[currentPuzzleIndex], currentPuzzleIndex);
          } else {
            // All puzzles complete
            container.innerHTML = `
              <div class="card animate-fade-in" style="text-align: center; padding: var(--space-8);">
                <div style="font-size: 48px; margin-bottom: var(--space-4);">🎉</div>
                <h3 class="text-xl font-bold mb-2">All Puzzles Complete!</h3>
                <p class="text-secondary mb-4">Great work! You\'ve mastered this lesson.</p>
                <button class="btn btn--primary" id="complete-lesson">
                  ${icon('check', 16)} Mark Lesson as Complete
                </button>
              </div>
            `;
            document.getElementById('complete-lesson')?.addEventListener('click', () => {
              const mainContainer = document.getElementById('main');
              const worldId = mainContainer.querySelector('#back-to-world')?.getAttribute('href')?.split('/').pop();
              // Trigger completion via the footer button
              document.getElementById('complete-lesson')?.click();
            });
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

  const nextBtn = document.getElementById('next-lesson');
  const completeBtn = document.getElementById('complete-lesson');
  const footer = document.getElementById('lesson-footer');

  if (footer) footer.style.display = 'flex';

  if (nextBtn) {
    nextBtn.style.display = 'inline-flex';
  }

  if (completeBtn) {
    completeBtn.disabled = true;
    completeBtn.innerHTML = `${icon('check', 16)} Completed!`;
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

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

export default renderLessonView;
