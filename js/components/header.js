// ============================================================
// HEADER COMPONENT
// ============================================================

import { store } from '../stores/store.js';
import { icon } from '../lib/icons.js';

export function renderHeader() {
  const header = document.getElementById('header');
  const state = store.state;

  header.innerHTML = `
    <div class="header__left">
      <a href="#/" class="header__logo">
        ${icon('logo', 24)}
        <span>JS Explorer</span>
      </a>
      <nav class="header__nav">
        <button class="btn btn--ghost btn--sm nav-btn" data-route="map">
          ${icon('map', 16)}
          <span>Map</span>
        </button>
        <button class="btn btn--ghost btn--sm nav-btn" data-route="playground">
          ${icon('code', 16)}
          <span>Playground</span>
        </button>
      </nav>
    </div>
    <div class="header__right">
      <div class="header__xp">
        <span class="badge badge--accent">
          ${icon('zap', 14)}
          <span class="xp-value">${state.profile.xp} XP</span>
        </span>
      </div>
      <div class="header__level">
        <span class="badge">
          ${icon('star', 14)}
          <span>Lv ${state.profile.level}</span>
        </span>
      </div>
      <button class="btn btn--ghost btn--icon btn--sm" id="theme-toggle" aria-label="Toggle theme">
        ${state.settings.theme === 'dark' ? icon('sun', 18) : icon('moon', 18)}
      </button>
      <button class="btn btn--ghost btn--icon btn--sm" id="profile-toggle" aria-label="Profile">
        <div class="avatar avatar--sm">${state.profile.name.charAt(0)}</div>
      </button>
    </div>
  `;

  // Event listeners
  header.querySelector('#theme-toggle').addEventListener('click', toggleTheme);
  header.querySelector('#profile-toggle').addEventListener('click', toggleSidebar);

  header.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const route = btn.dataset.route;
      window.location.hash = `/${route}`;
    });
  });
}

function toggleTheme() {
  const current = store.get('settings.theme');
  const next = current === 'dark' ? 'light' : 'dark';
  store.set('settings.theme', next);
  document.documentElement.setAttribute('data-theme', next);
  renderHeader();
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('is-open');
}

export default renderHeader;
