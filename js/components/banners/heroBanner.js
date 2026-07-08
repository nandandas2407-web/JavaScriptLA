/**
 * Hero Banner - Animated gradient background with floating code elements
 */
export function renderHeroBanner() {
  return `
    <div class="banner banner--hero">
      <div class="banner__bg">
        <div class="banner__gradient"></div>
        <div class="banner__particles">
          ${generateParticles(20)}
        </div>
        <div class="banner__code-float">
          ${generateFloatingCode()}
        </div>
      </div>
      <div class="banner__content">
        <div class="banner__badge">
          <span class="banner__badge-dot"></span>
          New: ES2024 Module Now Available
        </div>
        <h1 class="banner__title">
          Master <span class="banner__highlight">JavaScript</span>
          <br>Through Practice
        </h1>
        <p class="banner__subtitle">
          Interactive lessons, real-world projects, and a supportive community.
          <br>Start your journey from zero to hero.
        </p>
        <div class="banner__actions">
          <a href="#/dashboard" class="btn btn--primary btn--lg">
            Start Learning
            <svg class="btn__icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a href="#/map" class="btn btn--ghost btn--lg">
            Explore Curriculum
          </a>
        </div>
        <div class="banner__proof">
          <div class="banner__avatars">
            <div class="banner__avatar" style="background: linear-gradient(135deg, #5e6ad2, #7b87e0)">N</div>
            <div class="banner__avatar" style="background: linear-gradient(135deg, #2da44e, #56d364)">A</div>
            <div class="banner__avatar" style="background: linear-gradient(135deg, #d4a72c, #e3b341)">R</div>
            <div class="banner__avatar" style="background: linear-gradient(135deg, #cf222e, #f85149)">K</div>
          </div>
          <span class="banner__proof-text">Join 2,500+ learners already enrolled</span>
        </div>
      </div>
    </div>
  `;
}

function generateParticles(count) {
  let html = '';
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 4 + 2;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * 10 + 10;
    html += `<div class="banner__particle" style="
      width: ${size}px;
      height: ${size}px;
      left: ${x}%;
      top: ${y}%;
      animation-delay: ${delay}s;
      animation-duration: ${duration}s;
    "></div>`;
  }
  return html;
}

function generateFloatingCode() {
  const snippets = [
    'const x = 42;',
    'async/await',
    '=> {}',
    'import { }',
    'Promise',
    'forEach()',
    'map()',
    'class Foo {}',
    'export default',
    'try/catch'
  ];
  let html = '';
  snippets.forEach((snippet, i) => {
    const x = Math.random() * 80 + 10;
    const y = Math.random() * 80 + 10;
    const delay = Math.random() * 8;
    const duration = Math.random() * 15 + 15;
    html += `<div class="banner__code-snippet" style="
      left: ${x}%;
      top: ${y}%;
      animation-delay: ${delay}s;
      animation-duration: ${duration}s;
    ">${snippet}</div>`;
  });
  return html;
}