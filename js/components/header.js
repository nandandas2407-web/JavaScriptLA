// ============================================================
// HEADER COMPONENT
// ============================================================

import { store } from '../stores/store.js';
import { icon } from '../lib/icons.js';

export function renderHeader() {
  const header = document.getElementById('header');
  const state = store.state;
  const currentHash = window.location.hash || '#/';

  const isActive = (route) => {
    if (route === '#/' && (currentHash === '#/' || currentHash === '')) return 'is-active';
    if (route !== '#/' && currentHash.startsWith(route)) return 'is-active';
    return '';
  };

  header.innerHTML = `
    <div class="header__left">
      <a href="#/" class="header__logo">
        ${icon('logo', 24)}
        <span>JS Explorer</span>
      </a>
      <nav class="header__nav">
        <a href="#/" class="btn btn--ghost btn--sm nav-btn ${isActive('#/')}">
          ${icon('home', 16)}
          <span>Dashboard</span>
        </a>
        <a href="#/map" class="btn btn--ghost btn--sm nav-btn ${isActive('#/map')}">
          ${icon('map', 16)}
          <span>World Map</span>
        </a>
        <a href="#/playground" class="btn btn--ghost btn--sm nav-btn ${isActive('#/playground')}">
          ${icon('code', 16)}
          <span>Playground</span>
        </a>
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
