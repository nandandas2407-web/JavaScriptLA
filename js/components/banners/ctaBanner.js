/**
 * CTA Banner - Call-to-action banners
 */
export function renderCTABanner({ title, description, primaryAction, secondaryAction, gradient }) {
  return `
    <div class="banner banner--cta" style="--cta-gradient: ${gradient || 'linear-gradient(135deg, var(--accent), var(--accent-hover))'}">
      <div class="banner__bg-pattern"></div>
      <div class="banner__glow"></div>
      <div class="banner__content banner__content--center">
        <h3 class="banner__title banner__title--lg">${title}</h3>
        <p class="banner__desc banner__desc--lg">${description}</p>
        <div class="banner__actions">
          ${primaryAction ? `
            <a href="${primaryAction.url}" class="btn btn--white btn--lg">
              ${primaryAction.text}
              <svg class="btn__icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          ` : ''}
          ${secondaryAction ? `
            <a href="${secondaryAction.url}" class="btn btn--ghost-white btn--lg">
              ${secondaryAction.text}
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  );
}

/**
 * Gradient CTA Banner - With animated gradient
 */
export function renderGradientCTABanner({ title, description, action }) {
  return `
    <div class="banner banner--cta-gradient">
      <div class="banner__animated-bg"></div>
      <div class="banner__content banner__content--center">
        <h3 class="banner__title banner__title--lg">${title}</h3>
        <p class="banner__desc banner__desc--lg">${description}</p>
        ${action ? `
          <a href="${action.url}" class="btn btn--white btn--lg">
            ${action.text}
            <svg class="btn__icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        ` : ''}
      </div>
    </div>
  `;
}

/**
 * Newsletter CTA Banner - Email signup
 */
export function renderNewsletterCTABanner({ title, description, placeholder, buttonText }) {
  return `
    <div class="banner banner--newsletter">
      <div class="banner__content banner__content--center">
        <div class="banner__icon-wrap">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" stroke-width="2"/>
            <path d="M4 10L16 18L28 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h3 class="banner__title">${title}</h3>
        <p class="banner__desc">${description}</p>
        <form class="banner__form" onsubmit="event.preventDefault()">
          <input type="email" class="banner__input" placeholder="${placeholder || 'Enter your email'}" />
          <button type="submit" class="btn btn--primary">${buttonText || 'Subscribe'}</button>
        </form>
        <p class="banner__disclaimer">No spam, unsubscribe at any time.</p>
      </div>
    </div>
  );
}

/**
 * Floating CTA Banner - Sticky bottom bar
 */
export function renderFloatingCTABanner({ title, description, action }) {
  return `
    <div class="banner banner--floating" data-floating="true">
      <div class="banner__content banner__content--row">
        <div class="banner__text">
          <h4 class="banner__title banner__title--sm">${title}</h4>
          <p class="banner__desc banner__desc--sm">${description}</p>
        </div>
        <div class="banner__actions">
          <a href="${action.url}" class="btn btn--primary btn--sm">
            ${action.text}
          </a>
          <button class="banner__close" onclick="this.closest('.banner').remove()" aria-label="Dismiss">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;
}