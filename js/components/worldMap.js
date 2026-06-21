// ============================================================
// WORLD MAP COMPONENT
// ============================================================

import { worlds, getWorldProgress, isWorldUnlocked } from '../content/curriculum.js';
import { store } from '../stores/store.js';
import { icon } from '../lib/icons.js';

export function renderWorldMap() {
  const container = document.getElementById('world-map');
  const completedLessons = store.get('progress.completedLessons') || [];

  container.innerHTML = `
    <div class="map-bg">
      <div class="map-bg__layer map-bg__stars"></div>
      <div class="map-bg__layer map-bg__grid"></div>
    </div>

    <div class="map-canvas">
      <div class="map-title animate-fade-in-up">
        <h1 class="map-title__heading">JavaScript Universe</h1>
        <p class="map-title__subheading">Explore, learn, and master JavaScript through interactive worlds</p>
      </div>

      <div class="worlds-container stagger">
        ${worlds.map(world => renderWorldNode(world, completedLessons)).join('')}
      </div>
    </div>

    <div class="map-legend animate-fade-in">
      <div class="map-legend__item">
        <div class="map-legend__dot map-legend__dot--current"></div>
        <span>Current</span>
      </div>
      <div class="map-legend__item">
        <div class="map-legend__dot map-legend__dot--completed"></div>
        <span>Completed</span>
      </div>
      <div class="map-legend__item">
        <div class="map-legend__dot map-legend__dot--locked"></div>
        <span>Locked</span>
      </div>
    </div>

    <div class="map-stats animate-fade-in">
      <div class="map-stat">
        ${icon('zap', 16)}
        <span class="map-stat__value">${store.get('profile.xp') || 0} XP</span>
      </div>
      <div class="map-stat">
        ${icon('target', 16)}
        <span class="map-stat__value">${completedLessons.length} / ${worlds.reduce((sum, w) => sum + w.lessons.length, 0)}</span>
      </div>
    </div>
  `;

  // Click handlers
  container.querySelectorAll('.world-node').forEach(node => {
    node.addEventListener('click', () => {
      const worldId = node.dataset.worldId;
      if (!node.classList.contains('is-locked')) {
        window.location.hash = `/world/${worldId}`;
      }
    });
  });
}

function renderWorldNode(world, completedLessons) {
  const unlocked = isWorldUnlocked(world.id, completedLessons);
  const progress = getWorldProgress(world.id, completedLessons);
  const isCompleted = progress === 100;
  const currentWorld = store.get('progress.currentWorld');
  const isCurrent = world.id === currentWorld;

  const circumference = 2 * Math.PI * 56;
  const dashoffset = circumference - (progress / 100) * circumference;

  return `
    <div class="world-node ${!unlocked ? 'is-locked' : ''}" data-world-id="${world.id}">
      <div class="world-node__icon" style="border-color: ${isCompleted ? world.color : ''}; background: ${isCompleted ? world.color + '15' : ''};">
        ${isCurrent && !isCompleted ? `
          <div class="world-node__current">
            ${icon('compass', 12)}
          </div>
        ` : ''}

        <div class="world-node__progress">
          <svg class="world-node__progress-ring" viewBox="0 0 120 120">
            <circle class="ring-bg" cx="60" cy="60" r="56" />
            <circle class="ring-fill" cx="60" cy="60" r="56"
              stroke-dasharray="${circumference}"
              stroke-dashoffset="${dashoffset}"
            />
          </svg>
        </div>

        ${icon(world.icon, 48)}
      </div>

      <h3 class="world-node__label">${world.title}</h3>
      <p class="world-node__description">${world.description}</p>

      ${progress > 0 && progress < 100 ? `
        <div class="world-node__badge">
          <span class="badge badge--accent">${progress}%</span>
        </div>
      ` : ''}

      ${isCompleted ? `
        <div class="world-node__badge">
          <span class="badge badge--success">${icon('check', 12)} Mastered</span>
        </div>
      ` : ''}

      ${!unlocked ? `
        <div class="world-node__badge">
          <span class="badge">${icon('lock', 12)} Locked</span>
        </div>
      ` : ''}
    </div>
  `;
}

export default renderWorldMap;
