/**
 * Announcement Banner - For new features, updates, and news
 */
export function renderAnnouncementBanner({ title, description, badge, link, icon }) {
  return `
    <div class="banner banner--announcement">
      <div class="banner__glow"></div>
      <div class="banner__content banner__content--row">
        ${icon ? `<div class="banner__icon">${icon}</div>` : ''}
        <div class="banner__text">
          ${badge ? `<span class="banner__badge banner__badge--accent">${badge}</span>` : ''}
          <h3 class="banner__title banner__title--sm">${title}</h3>
          <p class="banner__desc">${description}</p>
        </div>
        ${link ? `
          <a href="${link.url}" class="btn btn--primary btn--sm">
            ${link.text}
            <svg class="btn__icon" width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        ` : ''}
      </div>
    </div>
  `;
}

/**
 * Compact Announcement Banner - Single line with dismiss
 */
export function renderCompactAnnouncement({ message, link, onDismiss }) {
  return `
    <div class="banner banner--compact" data-dismissible="true">
      <div class="banner__content banner__content--row">
        <span class="banner__emoji">🚀</span>
        <span class="banner__message">${message}</span>
        ${link ? `<a href="${link.url}" class="banner__link">${link.text}</a>` : ''}
        <button class="banner__close" onclick="this.closest('.banner').remove()" aria-label="Dismiss">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  `;
}

/**
 * Update Banner - For version updates and changelogs
 */
export function renderUpdateBanner({ version, title, changes, date }) {
  return `
    <div class="banner banner--update">
      <div class="banner__header">
        <span class="banner__version">v${version}</span>
        <span class="banner__date">${date}</span>
      </div>
      <div class="banner__content">
        <h3 class="banner__title">${title}</h3>
        <ul class="banner__changes">
          ${changes.map(change => `
            <li class="banner__change">
              <span class="banner__change-icon ${change.type === 'added' ? 'banner__change-icon--added' : change.type === 'fixed' ? 'banner__change-icon--fixed' : 'banner__change-icon--improved'}">
                ${change.type === 'added' ? '+' : change.type === 'fixed' ? '!' : '~'}
              </span>
              ${change.text}
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `;
}