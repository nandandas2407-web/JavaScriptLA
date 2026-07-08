/**
 * Feature Banner - Highlights a specific feature or capability
 */
export function renderFeatureBanner({ icon, title, description, visual, gradient }) {
  return `
    <div class="banner banner--feature" style="--banner-gradient: ${gradient || 'linear-gradient(135deg, var(--accent-subtle), transparent)'}">
      <div class="banner__bg-pattern"></div>
      <div class="banner__content banner__content--split">
        <div class="banner__text">
          <div class="banner__icon-wrap">
            ${icon}
          </div>
          <h3 class="banner__title">${title}</h3>
          <p class="banner__desc">${description}</p>
        </div>
        ${visual ? `<div class="banner__visual">${visual}</div>` : ''}
      </div>
    </div>
  `;
}

/**
 * Interactive Feature Banner - With hover effects
 */
export function renderInteractiveFeatureBanner({ icon, title, description, link, gradient }) {
  return `
    <a href="${link?.url || '#'}" class="banner banner--feature-interactive" style="--banner-gradient: ${gradient || 'linear-gradient(135deg, var(--accent-subtle), transparent)'}">
      <div class="banner__shine"></div>
      <div class="banner__content">
        <div class="banner__icon-wrap">
          ${icon}
        </div>
        <h3 class="banner__title">${title}</h3>
        <p class="banner__desc">${description}</p>
        ${link ? `
          <span class="banner__cta">
            ${link.text}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        ` : ''}
      </div>
    </a>
  `;
}

/**
 * Feature Grid Banner - Multiple features in a grid
 */
export function renderFeatureGridBanner({ title, subtitle, features }) {
  return `
    <div class="banner banner--feature-grid">
      <div class="banner__header">
        <h3 class="banner__title">${title}</h3>
        ${subtitle ? `<p class="banner__subtitle">${subtitle}</p>` : ''}
      </div>
      <div class="banner__grid">
        ${features.map(feature => `
          <div class="banner__feature">
            <div class="banner__feature-icon">${feature.icon}</div>
            <h4 class="banner__feature-title">${feature.title}</h4>
            <p class="banner__feature-desc">${feature.description}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/**
 * Code Feature Banner - Shows code example
 */
export function renderCodeFeatureBanner({ title, description, code, language }) {
  return `
    <div class="banner banner--code-feature">
      <div class="banner__content banner__content--split">
        <div class="banner__text">
          <h3 class="banner__title">${title}</h3>
          <p class="banner__desc">${description}</p>
        </div>
        <div class="banner__code-block">
          <div class="banner__code-header">
            <span class="banner__code-dot"></span>
            <span class="banner__code-dot"></span>
            <span class="banner__code-dot"></span>
            <span class="banner__code-lang">${language || 'JavaScript'}</span>
          </div>
          <pre class="banner__code"><code>${escapeHtml(code)}</code></pre>
        </div>
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}