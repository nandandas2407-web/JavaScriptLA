// ============================================================
// APP - Main Application Entry
// ============================================================

import { store } from './stores/store.js';
import { renderHeader } from './components/header.js';
import { renderDashboard } from './components/dashboard.js';
import { renderWorldMap } from './components/worldMap.js';
import { renderWorldView } from './components/worldView.js';
import { renderLessonView } from './components/lessonView.js';
import { renderSidebar } from './components/sidebar.js';
import { renderLandingPage } from './components/landingPage.js';

class App {
  constructor() {
    this.init();
  }

  init() {
    // Apply saved theme
    const theme = store.get('settings.theme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);

    // Set up routing
    window.addEventListener('hashchange', () => this.route());

    // Initial route
    this.route();
  }

  route() {
    const hash = window.location.hash || '#/';
    const main = document.getElementById('main');
    const header = document.getElementById('header');

    // Close sidebar on navigation
    document.getElementById('sidebar')?.classList.remove('is-open');

    // Parse route
    if (hash === '#/' || hash === '#') {
      this.renderLanding();
    } else if (hash === '#/dashboard') {
      this.renderDashboard();
    } else if (hash === '#/map') {
      this.renderMap();
    } else if (hash.startsWith('#/world/')) {
      const worldId = hash.split('#/world/')[1];
      this.renderWorld(worldId);
    } else if (hash.startsWith('#/lesson/')) {
      const parts = hash.split('#/lesson/')[1].split('/');
      const worldId = parts[0];
      const lessonId = parts[1];
      this.renderLesson(worldId, lessonId);
    } else if (hash === '#/playground') {
      this.renderPlayground();
    } else if (hash === '#/profile') {
      this.renderProfile();
    } else {
      this.renderLanding();
    }

    // Scroll to top
    main.scrollTop = 0;
  }

  renderLanding() {
    const header = document.getElementById('header');
    header.style.display = 'none';
    renderLandingPage();
  }

  renderDashboard() {
    const header = document.getElementById('header');
    const app = document.getElementById('app');
    header.style.display = '';
    app.style.gridTemplateRows = '';
    renderHeader();
    renderDashboard();
  }

  renderMap() {
    const header = document.getElementById('header');
    const app = document.getElementById('app');
    header.style.display = '';
    app.style.gridTemplateRows = '';
    renderHeader();
    renderWorldMap();
  }

  renderWorld(worldId) {
    const header = document.getElementById('header');
    const app = document.getElementById('app');
    header.style.display = '';
    app.style.gridTemplateRows = '';
    renderHeader();
    renderWorldView(worldId);
  }

  renderLesson(worldId, lessonId) {
    const header = document.getElementById('header');
    const app = document.getElementById('app');
    header.style.display = '';
    app.style.gridTemplateRows = '';
    renderHeader();
    renderLessonView(worldId, lessonId);
  }

  renderPlayground() {
    const header = document.getElementById('header');
    const app = document.getElementById('app');
    header.style.display = '';
    app.style.gridTemplateRows = '';
    renderHeader();
    const main = document.getElementById('main');
    main.innerHTML = `
      <div class="container">
        <h1 class="text-3xl font-bold mb-6">Code Playground</h1>
        <p class="text-secondary mb-6">Practice JavaScript in a safe environment. Type code and click Run to see the output.</p>

        <div class="card" style="margin-bottom: var(--space-4);">
          <div class="playground-editor" style="min-height: 300px;">
            <textarea id="playground-code" class="input" style="width: 100%; min-height: 280px; font-family: var(--font-mono); font-size: var(--text-md); padding: var(--space-4); resize: vertical;" placeholder="// Write your JavaScript code here...">// Welcome to the Playground!

function greet(name) {
  return "Hello, " + name + "!";
}

const message = greet("World");
console.log(message);

// Try modifying this code!</textarea>
          </div>
          <div style="display: flex; gap: var(--space-3); margin-top: var(--space-4);">
            <button class="btn btn--primary" id="run-code">
              Run Code
            </button>
            <button class="btn btn--secondary" id="clear-code">
              Clear
            </button>
          </div>
        </div>

        <div class="card">
          <h3 class="font-semibold mb-3">Output</h3>
          <pre id="playground-output" style="min-height: 100px; background: var(--surface-0);"><code>// Output will appear here...</code></pre>
        </div>
      </div>
    `;

    document.getElementById('run-code').addEventListener('click', () => this.runPlaygroundCode());
    document.getElementById('clear-code').addEventListener('click', () => {
      document.getElementById('playground-code').value = '';
      document.getElementById('playground-output').innerHTML = '<code>// Output will appear here...</code>';
    });
  }

  runPlaygroundCode() {
    const code = document.getElementById('playground-code').value;
    const output = document.getElementById('playground-output');
    const logs = [];

    const fakeConsole = {
      log: (...args) => logs.push(args.map(a => this.stringify(a)).join(' ')),
      error: (...args) => logs.push('Error: ' + args.map(a => this.stringify(a)).join(' ')),
      warn: (...args) => logs.push('Warning: ' + args.map(a => this.stringify(a)).join(' ')),
    };

    try {
      const fn = new Function('console', code);
      fn(fakeConsole);
      output.innerHTML = logs.length > 0
        ? logs.map(l => `<div style="color: var(--text-primary);">${this.escapeHtml(l)}</div>`).join('')
        : '<code style="color: var(--text-tertiary);">// No output</code>';
    } catch (e) {
      output.innerHTML = `<div style="color: var(--error);">${this.escapeHtml(e.message)}</div>`;
    }
  }

  stringify(val) {
    if (val === undefined) return 'undefined';
    if (val === null) return 'null';
    if (typeof val === 'object') return JSON.stringify(val);
    return String(val);
  }

  escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  renderProfile() {
    const header = document.getElementById('header');
    const app = document.getElementById('app');
    header.style.display = '';
    app.style.gridTemplateRows = '';
    renderHeader();
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.add('is-open');
    renderSidebar();
  }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  new App();
});
