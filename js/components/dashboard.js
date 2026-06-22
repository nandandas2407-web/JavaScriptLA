// ============================================================
// DASHBOARD COMPONENT
// ============================================================

import { store } from '../stores/store.js';
import { worlds, getWorldProgress, isWorldUnlocked, getLesson } from '../content/curriculum.js';
import { achievements } from '../content/achievements.js';
import { icon } from '../lib/icons.js';

export function renderDashboard() {
  const container = document.getElementById('main');
  const state = store.state;
  const completedLessons = state.progress.completedLessons || [];
  const completedPuzzles = state.progress.completedPuzzles || [];
  const earnedAchievements = state.achievements || [];

  const totalLessons = worlds.reduce((sum, w) => sum + w.lessons.length, 0);
  const totalPuzzles = 12;
  const overallProgress = Math.round((completedLessons.length / totalLessons) * 100);

  const nextLesson = findNextLesson(completedLessons);

  container.innerHTML = `
    <div class="dashboard">
      <div class="dashboard__greeting animate-fade-in-up">
        <div class="dashboard__welcome">
          <h1 class="text-3xl font-bold tracking-tight">Welcome back, ${state.profile.name}</h1>
          <p class="text-lg text-secondary mt-1">${getGreetingMessage()} Ready to continue your journey?</p>
        </div>
        <div class="dashboard__streak-badge">
          ${icon('flame', 20)}
          <span class="font-semibold">${state.profile.streak} Day Streak</span>
        </div>
      </div>

      <div class="dashboard__stats stagger">
        <div class="stat-card card">
          <div class="stat-card__icon" style="background: var(--accent-subtle); color: var(--accent);">
            ${icon('zap', 24)}
          </div>
          <div class="stat-card__info">
            <span class="stat-card__value">${state.profile.xp}</span>
            <span class="stat-card__label">Total XP</span>
          </div>
        </div>

        <div class="stat-card card">
          <div class="stat-card__icon" style="background: var(--success-subtle); color: var(--success);">
            ${icon('star', 24)}
          </div>
          <div class="stat-card__info">
            <span class="stat-card__value">Level ${state.profile.level}</span>
            <span class="stat-card__label">${state.profile.rank}</span>
          </div>
        </div>

        <div class="stat-card card">
          <div class="stat-card__icon" style="background: var(--warning-subtle); color: var(--warning);">
            ${icon('book', 24)}
          </div>
          <div class="stat-card__info">
            <span class="stat-card__value">${completedLessons.length} / ${totalLessons}</span>
            <span class="stat-card__label">Lessons Done</span>
          </div>
        </div>

        <div class="stat-card card">
          <div class="stat-card__icon" style="background: var(--error-subtle); color: var(--error);">
            ${icon('puzzle', 24)}
          </div>
          <div class="stat-card__info">
            <span class="stat-card__value">${completedPuzzles.length}</span>
            <span class="stat-card__label">Puzzles Solved</span>
          </div>
        </div>
      </div>

      ${nextLesson ? `
        <div class="dashboard__continue card card--interactive animate-fade-in-up" id="continue-learning">
          <div class="dashboard__continue-content">
            <div class="dashboard__continue-icon" style="background: ${nextLesson.world.color}15; color: ${nextLesson.world.color};">
              ${icon(nextLesson.world.icon, 32)}
            </div>
            <div class="dashboard__continue-info">
              <span class="text-xs text-tertiary font-medium">CONTINUE LEARNING</span>
              <h3 class="text-lg font-semibold mt-1">${nextLesson.lesson.title}</h3>
              <p class="text-sm text-secondary">${nextLesson.world.title} - ${nextLesson.lesson.description}</p>
            </div>
          </div>
          <button class="btn btn--primary">
            ${icon('play', 16)}
            Resume
          </button>
        </div>
      ` : ''}

      <div class="dashboard__grid">
        <div class="dashboard__worlds">
          <div class="section-header">
            <h2 class="text-lg font-semibold">Your Worlds</h2>
            <a href="#/map" class="btn btn--ghost btn--sm">View Map ${icon('arrowRight', 14)}</a>
          </div>
          <div class="worlds-list stagger">
            ${worlds.map(world => renderWorldProgressItem(world, completedLessons)).join('')}
          </div>
        </div>

        <div class="dashboard__sidebar-right">
          <div class="dashboard__skill-tree">
            <div class="section-header">
              <h2 class="text-lg font-semibold">Skill Progress</h2>
            </div>
            ${renderSkillProgress(completedLessons)}
          </div>

          <div class="dashboard__achievements">
            <div class="section-header">
              <h2 class="text-lg font-semibold">Recent Achievements</h2>
            </div>
            ${renderRecentAchievements(earnedAchievements)}
          </div>

          <div class="dashboard__quick-actions">
            <div class="section-header">
              <h2 class="text-lg font-semibold">Quick Actions</h2>
            </div>
            <div class="quick-actions-grid">
              <a href="#/map" class="quick-action card card--interactive">
                <div class="quick-action__icon">${icon('map', 24)}</div>
                <span class="quick-action__label">World Map</span>
              </a>
              <a href="#/playground" class="quick-action card card--interactive">
                <div class="quick-action__icon">${icon('code', 24)}</div>
                <span class="quick-action__label">Playground</span>
              </a>
              <button class="quick-action card card--interactive" id="daily-challenge">
                <div class="quick-action__icon">${icon('target', 24)}</div>
                <span class="quick-action__label">Daily Challenge</span>
              </button>
              <button class="quick-action card card--interactive" id="review-puzzles">
                <div class="quick-action__icon">${icon('puzzle', 24)}</div>
                <span class="quick-action__label">Review Puzzles</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="dashboard__progress-overview">
        <div class="section-header">
          <h2 class="text-lg font-semibold">Overall Progress</h2>
          <span class="text-sm text-secondary">${overallProgress}% Complete</span>
        </div>
        <div class="progress progress--lg">
          <div class="progress__bar" style="width: ${overallProgress}%;"></div>
        </div>
        <div class="progress-milestones">
          ${renderProgressMilestones(overallProgress)}
        </div>
      </div>
    </div>
  `;

  setupDashboardListeners();
}

function renderWorldProgressItem(world, completedLessons) {
  const progress = getWorldProgress(world.id, completedLessons);
  const unlocked = isWorldUnlocked(world.id, completedLessons);
  const isCompleted = progress === 100;

  return `
    <a href="${unlocked ? `#/world/${world.id}` : '#'}" class="world-progress-item card card--interactive ${!unlocked ? 'is-locked' : ''}" style="opacity: ${unlocked ? 1 : 0.5};">
      <div class="world-progress-item__icon" style="background: ${world.color}15; color: ${world.color};">
        ${icon(unlocked ? world.icon : 'lock', 24)}
      </div>
      <div class="world-progress-item__info">
        <h4 class="font-medium">${world.title}</h4>
        <p class="text-xs text-secondary">${world.lessons.length} lessons</p>
      </div>
      <div class="world-progress-item__progress">
        <div class="progress" style="width: 80px;">
          <div class="progress__bar" style="width: ${progress}%; background: ${world.color};"></div>
        </div>
        <span class="text-xs font-medium" style="color: ${isCompleted ? 'var(--success)' : 'var(--text-secondary)'};">${progress}%</span>
      </div>
    </a>
  `;
}

function renderSkillProgress(completedLessons) {
  const skills = [
    { name: 'Variables', icon: 'variables', lessons: ['declaring-variables', 'variable-types', 'naming-rules'] },
    { name: 'Functions', icon: 'functions', lessons: ['function-basics', 'parameters-arguments', 'arrow-functions'] },
    { name: 'Arrays', icon: 'arrays', lessons: ['creating-arrays', 'array-methods', 'iterating-arrays'] },
    { name: 'Objects', icon: 'objects', lessons: ['object-basics', 'object-methods', 'destructuring'] },
    { name: 'DOM', icon: 'dom', lessons: ['dom-intro', 'selecting-elements', 'manipulating-dom'] },
  ];

  return `
    <div class="skill-progress-list">
      ${skills.map(skill => {
        const completed = skill.lessons.filter(l => completedLessons.includes(l)).length;
        const total = skill.lessons.length;
        const progress = Math.round((completed / total) * 100);
        const isMastered = progress === 100;

        return `
          <div class="skill-progress-item">
            <div class="skill-progress-item__header">
              <div class="skill-progress-item__icon ${isMastered ? 'is-mastered' : ''}">
                ${icon(skill.icon, 16)}
              </div>
              <span class="text-sm font-medium">${skill.name}</span>
              <span class="text-xs text-tertiary" style="margin-left: auto;">${completed}/${total}</span>
            </div>
            <div class="progress" style="height: 4px;">
              <div class="progress__bar" style="width: ${progress}%;"></div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderRecentAchievements(earnedAchievements) {
  const recent = earnedAchievements.slice(-4).reverse();

  if (recent.length === 0) {
    return `
      <div class="empty-state" style="text-align: center; padding: var(--space-6);">
        <div style="opacity: 0.3; margin-bottom: var(--space-3);">${icon('award', 40)}</div>
        <p class="text-sm text-secondary">Complete lessons to earn achievements</p>
      </div>
    `;
  }

  return `
    <div class="achievements-grid">
      ${recent.map(id => {
        const achievement = achievements.find(a => a.id === id);
        if (!achievement) return '';
        return `
          <div class="achievement-mini badge badge--${achievement.tier}" title="${achievement.title}">
            ${icon(achievement.icon, 16)}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderProgressMilestones(progress) {
  const milestones = [0, 25, 50, 75, 100];

  return milestones.map(milestone => `
    <div class="milestone ${progress >= milestone ? 'is-reached' : ''}">
      <div class="milestone__dot"></div>
      <span class="milestone__label">${milestone}%</span>
    </div>
  `).join('');
}

function findNextLesson(completedLessons) {
  for (const world of worlds) {
    for (const lesson of world.lessons) {
      if (!completedLessons.includes(lesson.id)) {
        return { world, lesson };
      }
    }
  }
  return null;
}

function getGreetingMessage() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning!';
  if (hour < 18) return 'Good afternoon!';
  return 'Good evening!';
}

function setupDashboardListeners() {
  const continueBtn = document.getElementById('continue-learning');
  if (continueBtn) {
    continueBtn.addEventListener('click', () => {
      const next = findNextLesson(store.get('progress.completedLessons') || []);
      if (next) {
        window.location.hash = `#/lesson/${next.world.id}/${next.lesson.id}`;
      }
    });
  }

  const dailyChallenge = document.getElementById('daily-challenge');
  if (dailyChallenge) {
    dailyChallenge.addEventListener('click', () => {
      const completed = store.get('progress.completedLessons') || [];
      if (completed.length > 0) {
        const randomWorld = worlds[Math.floor(Math.random() * worlds.length)];
        const randomLesson = randomWorld.lessons[Math.floor(Math.random() * randomWorld.lessons.length)];
        window.location.hash = `#/lesson/${randomWorld.id}/${randomLesson.id}`;
      } else {
        window.location.hash = '#/world/variables-valley';
      }
    });
  }

  const reviewPuzzles = document.getElementById('review-puzzles');
  if (reviewPuzzles) {
    reviewPuzzles.addEventListener('click', () => {
      window.location.hash = '#/playground';
    });
  }
}

export default renderDashboard;
