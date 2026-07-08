/**
 * Testimonial Banner - User quotes and testimonials
 */
export function renderTestimonialBanner({ quote, author, role, avatar, rating }) {
  return `
    <div class="banner banner--testimonial">
      <div class="banner__quote-icon">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M10 8H6C4.89543 8 4 8.89543 4 10V14C4 15.1046 4.89543 16 6 16H8C8 20.4183 11.5817 24 16 24V20C13.7909 20 12 18.2091 12 16V12C12 9.79086 13.7909 8 16 8H10Z" fill="currentColor"/>
          <path d="M26 8H22C20.8954 8 20 8.89543 20 10V14C20 15.1046 20.8954 16 22 16H24C24 20.4183 27.5817 24 32 24V20C29.7909 20 28 18.2091 28 16V12C28 9.79086 29.7909 8 32 8H26Z" fill="currentColor"/>
        </svg>
      </div>
      <div class="banner__content">
        <p class="banner__quote">"${quote}"</p>
        <div class="banner__author">
          <div class="banner__avatar" style="background: ${avatar?.gradient || 'var(--accent)'}">
            ${avatar?.initial || author.charAt(0)}
          </div>
          <div class="banner__author-info">
            <div class="banner__author-name">${author}</div>
            <div class="banner__author-role">${role}</div>
          </div>
          ${rating ? `
            <div class="banner__rating">
              ${renderStars(rating)}
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  );
}

function renderStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `
      <svg class="banner__star ${i <= rating ? 'banner__star--filled' : ''}" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1L10 6L15 7L11.5 10.5L12.5 15.5L8 13L3.5 15.5L4.5 10.5L1 7L6 6L8 1Z" fill="currentColor"/>
      </svg>
    `;
  }
  return html;
}

/**
 * Testimonial Carousel Banner - Multiple testimonials
 */
export function renderTestimonialCarouselBanner({ testimonials }) {
  return `
    <div class="banner banner--testimonial-carousel" data-carousel="true">
      <div class="banner__header">
        <h3 class="banner__title">What Our Learners Say</h3>
        <div class="banner__carousel-nav">
          <button class="banner__carousel-btn banner__carousel-btn--prev" aria-label="Previous">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button class="banner__carousel-btn banner__carousel-btn--next" aria-label="Next">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="banner__carousel-track">
        ${testimonials.map(t => `
          <div class="banner__carousel-slide">
            ${renderTestimonialBanner(t)}
          </div>
        `).join('')}
      </div>
      <div class="banner__carousel-dots">
        ${testimonials.map((_, i) => `
          <button class="banner__carousel-dot ${i === 0 ? 'banner__carousel-dot--active' : ''}" data-index="${i}"></button>
        `).join('')}
      </div>
    </div>
  `;
}

/**
 * Social Proof Banner - Logos and trust indicators
 */
export function renderSocialProofBanner({ logos, trustText }) {
  return `
    <div class="banner banner--social-proof">
      <div class="banner__content banner__content--center">
        <p class="banner__trust-text">${trustText || 'Trusted by developers at'}</p>
        <div class="banner__logos">
          ${logos.map(logo => `
            <div class="banner__logo">${logo}</div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}