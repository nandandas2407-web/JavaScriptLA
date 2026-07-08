/**
 * Stats Banner - Animated counter statistics
 */
export function renderStatsBanner({ stats, variant }) {
  return `
    <div class="banner banner--stats ${variant ? `banner--stats-${variant}` : ''}">
      <div class="banner__content">
        <div class="banner__stats-grid">
          ${stats.map(stat => `
            <div class="banner__stat">
              <div class="banner__stat-value" data-count="${stat.value}" data-suffix="${stat.suffix || ''}">
                ${stat.prefix || ''}0${stat.suffix || ''}
              </div>
              <div class="banner__stat-label">${stat.label}</div>
              ${stat.description ? `<div class="banner__stat-desc">${stat.description}</div>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

/**
 * Animated Counter - Animates numbers on scroll into view
 */
export function initStatCounters() {
  const counters = document.querySelectorAll('[data-count]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        const duration = 2000;
        const start = performance.now();
        
        function animate(currentTime) {
          const elapsed = currentTime - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(eased * target);
          
          el.textContent = prefix + current.toLocaleString() + suffix;
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        }
        
        requestAnimationFrame(animate);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => observer.observe(counter));
}

/**
 * Progress Stats Banner - Shows progress/achievement stats
 */
export function renderProgressStatsBanner({ completed, inProgress, total, streak }) {
  const completedPercent = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  return `
    <div class="banner banner--progress-stats">
      <div class="banner__content">
        <div class="banner__progress-header">
          <h3 class="banner__title">Your Progress</h3>
          <div class="banner__streak">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L10 6L15 7L11.5 10.5L12.5 15.5L8 13L3.5 15.5L4.5 10.5L1 7L6 6L8 1Z" fill="currentColor"/>
            </svg>
            ${streak} day streak
          </div>
        </div>
        <div class="banner__progress-bar">
          <div class="banner__progress-fill" style="width: ${completedPercent}%"></div>
        </div>
        <div class="banner__progress-stats">
          <div class="banner__progress-stat">
            <span class="banner__progress-dot banner__progress-dot--completed"></span>
            ${completed} Completed
          </div>
          <div class="banner__progress-stat">
            <span class="banner__progress-dot banner__progress-dot--in-progress"></span>
            ${inProgress} In Progress
          </div>
          <div class="banner__progress-stat">
            <span class="banner__progress-dot banner__progress-dot--remaining"></span>
            ${total - completed - inProgress} Remaining
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Achievement Banner - Celebrates a milestone
 */
export function renderAchievementBanner({ title, description, icon, gradient }) {
  return `
    <div class="banner banner--achievement" style="--achievement-gradient: ${gradient || 'linear-gradient(135deg, #d4a72c, #e3b341)'}">
      <div class="banner__glow"></div>
      <div class="banner__content banner__content--center">
        <div class="banner__achievement-icon">
          ${icon || `
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M24 4L29 16L42 18L32 28L35 41L24 35L13 41L16 28L6 18L19 16L24 4Z" fill="currentColor"/>
            </svg>
          `}
        </div>
        <h3 class="banner__title">${title}</h3>
        <p class="banner__desc">${description}</p>
      </div>
    </div>
  `;
}