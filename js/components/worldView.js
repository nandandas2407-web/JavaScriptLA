// ============================================================
// WORLD VIEW COMPONENT
// ============================================================

import { getWorld, getWorldProgress, isWorldUnlocked } from '../content/curriculum.js';
import { store } from '../stores/store.js';
import { icon } from '../lib/icons.js';

export function renderWorldView(worldId) {
  const container = document.getElementById('main');
  const world = getWorld(worldId);
  const completedLessons = store.get('progress.completedLessons') || [];

  if (!world) {
    container.innerHTML = `<div class="container"><p>World not found.</p></div>`;
    return;
  }

  if (!isWorldUnlocked(worldId, completedLessons)) {
    container.innerHTML = `
      <div class="container" style="text-align: center; padding-top: var(--space-20);">
        <div style="margin-bottom: var(--space-4); opacity: 0.5;">
          ${icon('lock', 64)}
        </div>
        <h2 class="text-2xl font-bold mb-2">World Locked</h2>
        <p class="text-secondary mb-6">Complete the prerequisite worlds to unlock ${world.title}</p>
        <button class="btn btn--primary" onclick="window.location.hash='#/map'">
          ${icon('arrowLeft', 16)}
          Back to Map
        </button>
      </div>
    `;
    return;
  }

  const progress = getWorldProgress(worldId, completedLessons);

  container.innerHTML = `
    <div class="container">
      <div class="world-header animate-fade-in-up">
        <button class="btn btn--ghost btn--sm" id="back-to-map" style="margin-bottom: var(--space-4);">
          ${icon('arrowLeft', 16)}
          Back to Map
        </button>

        <div class="world-header__info" style="display: flex; align-items: center; gap: var(--space-6); margin-bottom: var(--space-8);">
          <div class="world-header__icon" style="width: 80px; height: 80px; border-radius: var(--radius-xl); background: ${world.color}15; border: 2px solid ${world.color}; display: flex; align-items: center; justify-content: center;">
            ${icon(world.icon, 40)}
          </div>
          <div>
            <h1 class="text-3xl font-bold tracking-tight">${world.title}</h1>
            <p class="text-lg text-secondary mt-1">${world.description}</p>
            <div class="flex items-center gap-4 mt-3">
              <div class="progress" style="max-width: 200px;">
                <div class="progress__bar" style="width: ${progress}%;"></div>
              </div>
              <span class="text-sm text-secondary">${progress}% Complete</span>
            </div>
          </div>
        </div>
      </div>

      <div class="lessons-grid stagger">
        ${world.lessons.map((lesson, i) => renderLessonCard(world, lesson, i, completedLessons)).join('')}
      </div>
    </div>
  `;

  container.querySelector('#back-to-map').addEventListener('click', () => {
    window.location.hash = '#/map';
  });

  container.querySelectorAll('.lesson-card').forEach(card => {
    card.addEventListener('click', () => {
      const lessonId = card.dataset.lessonId;
      const worldId = card.dataset.worldId;
      window.location.hash = `#/lesson/${worldId}/${lessonId}`;
    });
  });
}

function renderLessonCard(world, lesson, index, completedLessons) {
  const isCompleted = completedLessons.includes(lesson.id);
  const difficultyColors = {
    beginner: 'success',
    intermediate: 'warning',
    advanced: 'error',
  };

  return `
    <div class="lesson-card card card--interactive" data-lesson-id="${lesson.id}" data-world-id="${world.id}">
      <div class="card__header">
        <div class="flex items-center gap-3">
          <div class="lesson-number" style="width: 32px; height: 32px; border-radius: var(--radius-md); background: ${isCompleted ? world.color + '20' : 'var(--surface-2)'}; display: flex; align-items: center; justify-content: center; font-size: var(--text-sm); font-weight: 600; color: ${isCompleted ? world.color : 'var(--text-secondary)'};">
            ${isCompleted ? icon('check', 16) : index + 1}
          </div>
          <div>
            <h3 class="card__title">${lesson.title}</h3>
            <p class="card__description">${lesson.description}</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="badge badge--${difficultyColors[lesson.difficulty]}">${lesson.difficulty}</span>
        </div>
      </div>

      <div class="card__footer" style="display: flex; align-items: center; justify-content: space-between; margin-top: var(--space-4);">
        <div class="flex items-center gap-4 text-sm text-secondary">
          <span class="flex items-center gap-1">
            ${icon('clock', 14)}
            ${lesson.duration}
          </span>
          <span class="flex items-center gap-1">
            ${icon('zap', 14)}
            ${lesson.xp} XP
          </span>
        </div>
        <div class="flex items-center gap-1 text-sm" style="color: ${world.color};">
          ${isCompleted ? 'Review' : 'Start'}
          ${icon('arrowRight', 14)}
        </div>
      </div>

      <div class="lesson-concepts" style="display: flex; flex-wrap: wrap; gap: var(--space-1); margin-top: var(--space-3);">
        ${lesson.concepts.map(c => `<span class="badge">${c}</span>`).join('')}
      </div>
    </div>
  `;
}

export default renderWorldView;
