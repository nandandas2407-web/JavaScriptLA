// ============================================================
// LANDING PAGE COMPONENT
// ============================================================

import { store } from '../stores/store.js';
import { icon } from '../lib/icons.js';
import { worlds } from '../content/curriculum.js';

export function renderLandingPage() {
  const main = document.getElementById('main');
  const header = document.getElementById('header');
  
  // Hide header on landing page
  if (header) header.style.display = 'none';

  const hasStarted = (store.get('progress.completedLessons') || []).length > 0;

  main.innerHTML = `
    <div class="landing">
      <!-- Hero Section -->
      <section class="landing__hero">
        <div class="landing__hero-bg">
          <div class="landing__grid-lines"></div>
          <div class="landing__glow landing__glow--1"></div>
          <div class="landing__glow landing__glow--2"></div>
        </div>

        <div class="landing__hero-content">
          <div class="landing__badge animate-fade-in-up">
            <span class="badge badge--accent" style="padding: 6px 14px; font-size: var(--text-sm);">
              ${icon('zap', 14)}
              Free & Open Source
            </span>
          </div>

          <h1 class="landing__title animate-fade-in-up" style="animation-delay: 0.1s;">
            Learn<br>
            <span class="landing__title-highlight">JavaScript</span><br>
            by Doing
          </h1>

          <p class="landing__subtitle animate-fade-in-up" style="animation-delay: 0.2s;">
            Interactive lessons, real code challenges, and a visual learning path.
            Master JavaScript from zero to advanced — right in your browser.
          </p>

          <div class="landing__cta animate-fade-in-up" style="animation-delay: 0.3s;">
            <a href="#/dashboard" class="btn btn--primary btn--lg" id="landing-start">
              ${icon('play', 18)}
              ${hasStarted ? 'Continue Learning' : 'Start Learning'}
            </a>
            <a href="#/playground" class="btn btn--secondary btn--lg">
              ${icon('code', 18)}
              Try Playground
            </a>
          </div>

          <div class="landing__hero-code animate-fade-in-up" style="animation-delay: 0.4s;">
            <div class="landing__code-window">
              <div class="landing__code-header">
                <span class="landing__code-dot" style="background: #ff5f57;"></span>
                <span class="landing__code-dot" style="background: #febc2e;"></span>
                <span class="landing__code-dot" style="background: #28c840;"></span>
                <span class="landing__code-title">lesson.js</span>
              </div>
              <pre class="landing__code-body"><code><span class="code-keyword">function</span> <span class="code-function">greet</span>(<span class="code-param">name</span>) {
  <span class="code-keyword">return</span> <span class="code-string">\`Hello, \${name}!\`</span>;
}

<span class="code-keyword">const</span> message = <span class="code-function">greet</span>(<span class="code-string">"World"</span>);
console.<span class="code-function">log</span>(message);
<span class="code-comment">// → Hello, World!</span></code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="landing__section">
        <div class="landing__container">
          <div class="landing__section-header">
            <h2 class="landing__section-title">Everything you need to master JavaScript</h2>
            <p class="landing__section-subtitle">Built with care for complete beginners and advancing developers</p>
          </div>

          <div class="landing__features">
            <div class="landing__feature card">
              <div class="landing__feature-icon" style="background: var(--accent-subtle); color: var(--accent-text);">
                ${icon('book', 24)}
              </div>
              <h3 class="landing__feature-title">27 Lessons</h3>
              <p class="landing__feature-desc">
                Progressive content from variables to Node.js.
                Each lesson breaks into small, digestible steps.
              </p>
            </div>

            <div class="landing__feature card">
              <div class="landing__feature-icon" style="background: var(--success-subtle); color: var(--success);">
                ${icon('puzzle', 24)}
              </div>
              <h3 class="landing__feature-title">50+ Puzzles</h3>
              <p class="landing__feature-desc">
                Predict output, fix bugs, fill blanks.
                Test your understanding with hands-on challenges.
              </p>
            </div>

            <div class="landing__feature card">
              <div class="landing__feature-icon" style="background: var(--warning-subtle); color: var(--warning);">
                ${icon('map', 24)}
              </div>
              <h3 class="landing__feature-title">9 Worlds</h3>
              <p class="landing__feature-desc">
                A visual learning path through JavaScript.
                Unlock new worlds as you complete lessons.
              </p>
            </div>

            <div class="landing__feature card">
              <div class="landing__feature-icon" style="background: var(--error-subtle); color: var(--error);">
                ${icon('terminal', 24)}
              </div>
              <h3 class="landing__feature-title">Code Playground</h3>
              <p class="landing__feature-desc">
                Write and run JavaScript instantly.
                Experiment freely with a safe sandbox.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Learning Path Preview -->
      <section class="landing__section landing__section--dark">
        <div class="landing__container">
          <div class="landing__section-header">
            <h2 class="landing__section-title">Your Learning Journey</h2>
            <p class="landing__section-subtitle">9 worlds, each building on the last</p>
          </div>

          <div class="landing__worlds">
            ${worlds.slice(0, 6).map((world, i) => `
              <div class="landing__world-item" style="animation-delay: ${i * 0.05}s;">
                <div class="landing__world-num" style="background: ${world.color};">${i + 1}</div>
                <div class="landing__world-info">
                  <h4 class="landing__world-name">${world.title}</h4>
                  <p class="landing__world-desc">${world.description}</p>
                </div>
                ${i < 5 ? '<div class="landing__world-connector"></div>' : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="landing__section">
        <div class="landing__container">
          <div class="landing__stats">
            <div class="landing__stat">
              <div class="landing__stat-value">100+</div>
              <div class="landing__stat-label">Sub-steps</div>
            </div>
            <div class="landing__stat">
              <div class="landing__stat-value">21</div>
              <div class="landing__stat-label">EJS Chapters</div>
            </div>
            <div class="landing__stat">
              <div class="landing__stat-value">9</div>
              <div class="landing__stat-label">Worlds</div>
            </div>
            <div class="landing__stat">
              <div class="landing__stat-value">100%</div>
              <div class="landing__stat-label">Free</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Final CTA -->
      <section class="landing__section landing__cta-section">
        <div class="landing__container" style="text-align: center;">
          <h2 class="landing__section-title">Ready to start your JavaScript journey?</h2>
          <p class="landing__section-subtitle" style="margin-bottom: var(--space-8);">
            No signup required. No ads. Just you and JavaScript.
          </p>
          <a href="#/dashboard" class="btn btn--primary btn--lg">
            ${icon('play', 18)}
            ${hasStarted ? 'Continue Learning' : 'Get Started — It\'s Free'}
          </a>
        </div>
      </section>

      <!-- Footer -->
      <footer class="landing__footer">
        <div class="landing__container">
          <div class="landing__footer-content">
            <div class="landing__footer-brand">
              ${icon('logo', 20)}
              <span>JS Explorer</span>
            </div>
            <p class="landing__footer-text">
              Based on <a href="https://eloquentjavascript.net" target="_blank" rel="noopener">Eloquent JavaScript</a> by Marijn Haverbeke.
              Built with vanilla JavaScript. No frameworks.
            </p>
            <div class="landing__footer-links">
              <a href="https://github.com/nandandas2407-web/JavaScriptLA" target="_blank" rel="noopener" class="btn btn--ghost btn--sm">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `;

  // Show header when navigating away
  window.addEventListener('hashchange', () => {
    if (header) header.style.display = '';
  }, { once: true });
}

export default renderLandingPage;
