// ============================================================
// SIDEBAR COMPONENT
// ============================================================

import { store } from '../stores/store.js';
import { icon } from '../lib/icons.js';
import { achievements } from '../content/achievements.js';

export function renderSidebar() {
  const sidebar = document.getElementById('sidebar');
  const state = store.state;

  const earnedAchievements = achievements.filter(a =>
    state.achievements.includes(a.id)
  );

  const recentAchievements = earnedAchievements.slice(-5).reverse();

  sidebar.innerHTML = `
    <div class="sidebar__header">
      <h3 class="text-md font-semibold">Profile</h3>
      <button class="btn btn--ghost btn--icon btn--sm" id="close-sidebar">
        ${icon('x', 18)}
      </button>
    </div>

    <div class="sidebar__content">
      <div class="profile-card" style="text-align: center; margin-bottom: var(--space-6);">
        <div class="avatar avatar--lg" style="margin: 0 auto var(--space-3);">
          ${state.profile.name.charAt(0)}
        </div>
        <h4 class="font-semibold text-lg">${state.profile.name}</h4>
        <p class="text-sm text-secondary">${state.profile.rank}</p>
      </div>

      <div class="divider"></div>

      <div class="stats-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-4); margin: var(--space-4) 0;">
        <div class="stat">
          <span class="stat__label">Level</span>
          <span class="stat__value">${state.profile.level}</span>
        </div>
        <div class="stat">
          <span class="stat__label">XP</span>
          <span class="stat__value">${state.profile.xp}</span>
        </div>
        <div class="stat">
          <span class="stat__label">Streak</span>
          <span class="stat__value">${state.profile.streak} days</span>
        </div>
        <div class="stat">
          <span class="stat__label">Completed</span>
          <span class="stat__value">${state.progress.completedLessons.length}</span>
        </div>
      </div>

      <div class="divider"></div>

      <div class="skill-tree" style="margin: var(--space-4) 0;">
        <h4 class="text-sm font-semibold text-secondary" style="margin-bottom: var(--space-3);">SKILL TREE</h4>
        ${renderSkillTree()}
      </div>

      <div class="divider"></div>

      <div class="achievements-list" style="margin: var(--space-4) 0;">
        <h4 class="text-sm font-semibold text-secondary" style="margin-bottom: var(--space-3);">RECENT ACHIEVEMENTS</h4>
        ${recentAchievements.length > 0 ? recentAchievements.map(a => `
          <div class="achievement-item" style="display: flex; align-items: center; gap: var(--space-3); padding: var(--space-2) 0;">
            <div class="badge badge--${a.tier}" style="width: 28px; height: 28px; border-radius: var(--radius-md);">
              ${icon(a.icon, 16)}
            </div>
            <div>
              <div class="text-sm font-medium">${a.title}</div>
              <div class="text-xs text-tertiary">${a.description}</div>
            </div>
          </div>
        `).join('') : `
          <p class="text-xs text-tertiary">No achievements yet. Start learning!</p>
        `}
      </div>

      <div class="divider"></div>

      <div class="sidebar-actions" style="margin-top: var(--space-4);">
        <button class="btn btn--secondary btn--sm" style="width: 100%;" id="reset-progress">
          ${icon('refreshCw', 14)}
          Reset Progress
        </button>
      </div>
    </div>
  `;

  sidebar.querySelector('#close-sidebar').addEventListener('click', () => {
    sidebar.classList.remove('is-open');
  });

  sidebar.querySelector('#reset-progress').addEventListener('click', () => {
    if (confirm('Reset all progress? This cannot be undone.')) {
      store.reset();
      window.location.reload();
    }
  });
}

function renderSkillTree() {
  const completedLessons = store.get('progress.completedLessons') || [];
  const ranks = [
    { name: 'Novice', min: 0, color: 'var(--text-tertiary)' },
    { name: 'Explorer', min: 3, color: 'var(--accent)' },
    { name: 'Crafter', min: 6, color: 'var(--success)' },
    { name: 'Navigator', min: 9, color: 'var(--warning)' },
    { name: 'Architect', min: 12, color: 'var(--error)' },
  ];

  return ranks.map((rank, i) => {
    const completed = completedLessons.length >= rank.min;
    const isCurrent = completed && (i === ranks.length - 1 || completedLessons.length < ranks[i + 1].min);

    return `
      <div class="skill-node" style="display: flex; align-items: center; gap: var(--space-2); padding: var(--space-1) 0; opacity: ${completed ? 1 : 0.4};">
        <div style="width: 8px; height: 8px; border-radius: var(--radius-pill); background: ${completed ? rank.color : 'var(--surface-3)'};"></div>
        <span class="text-xs ${isCurrent ? 'font-semibold' : ''}" style="color: ${completed ? 'var(--text-primary)' : 'var(--text-tertiary)'};">
          ${rank.name}
        </span>
        ${isCurrent ? '<span class="badge badge--accent" style="margin-left: auto;">Current</span>' : ''}
      </div>
    `;
  }).join('');
}

export default renderSidebar;
