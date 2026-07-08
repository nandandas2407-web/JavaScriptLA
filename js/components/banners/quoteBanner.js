/**
 * Quote Banner - Motivational quotes and sayings
 */
export function renderQuoteBanner({ quote, author, source }) {
  return `
    <div class="banner banner--quote">
      <div class="banner__quote-mark">"</div>
      <div class="banner__content banner__content--center">
        <p class="banner__quote-text">${quote}</p>
        <div class="banner__quote-author">
          <span class="banner__dash">—</span>
          <span class="banner__author-name">${author}</span>
          ${source ? `<span class="banner__source">, ${source}</span>` : ''}
        </div>
      </div>
    </div>
  `;
}

/**
 * Rotating Quote Banner - Cycles through multiple quotes
 */
export function renderRotatingQuoteBanner({ quotes }) {
  return `
    <div class="banner banner--quote-rotating" data-quotes='${JSON.stringify(quotes)}'>
      <div class="banner__quote-mark">"</div>
      <div class="banner__content banner__content--center">
        <p class="banner__quote-text">${quotes[0].quote}</p>
        <div class="banner__quote-author">
          <span class="banner__dash">—</span>
          <span class="banner__author-name">${quotes[0].author}</span>
          ${quotes[0].source ? `<span class="banner__source">, ${quotes[0].source}</span>` : ''}
        </div>
      </div>
      <div class="banner__quote-nav">
        ${quotes.map((_, i) => `
          <button class="banner__quote-dot ${i === 0 ? 'banner__quote-dot--active' : ''}" data-index="${i}"></button>
        `).join('')}
      </div>
    </div>
  `;
}

/**
 * Code Quote Banner - Quote with code styling
 */
export function renderCodeQuoteBanner({ quote, author, language }) {
  return `
    <div class="banner banner--code-quote">
      <div class="banner__code-header">
        <span class="banner__code-dot"></span>
        <span class="banner__code-dot"></span>
        <span class="banner__code-dot"></span>
        <span class="banner__code-lang">${language || 'wisdom.js'}</span>
      </div>
      <div class="banner__content">
        <p class="banner__quote-text">
          <span class="banner__comment">// ${author}</span>
          <br>"${quote}"
        </p>
      </div>
    </div>
  `;
}

/**
 * Motivation Banner - Daily motivation with action
 */
export function renderMotivationBanner({ title, quote, author, action }) {
  return `
    <div class="banner banner--motivation">
      <div class="banner__bg-gradient"></div>
      <div class="banner__content banner__content--center">
        <span class="banner__label">${title || 'Daily Motivation'}</span>
        <p class="banner__quote-text">${quote}</p>
        <p class="banner__author">— ${author}</p>
        ${action ? `
          <a href="${action.url}" class="btn btn--primary btn--sm">
            ${action.text}
          </a>
        ` : ''}
      </div>
    </div>
  `;
}