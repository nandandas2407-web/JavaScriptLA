// ============================================================
// LANDING PAGE COMPONENT
// ============================================================

import { store } from '../stores/store.js';
import { icon } from '../lib/icons.js';
import { worlds } from '../content/curriculum.js';
import { renderHeroBanner } from './banners/heroBanner.js';
import { renderStatsBanner, initStatCounters, renderAchievementBanner } from './banners/statsBanner.js';
import { renderTestimonialBanner, renderSocialProofBanner } from './banners/testimonialBanner.js';
import { renderCTABanner, renderGradientCTABanner } from './banners/ctaBanner.js';
import { renderQuoteBanner, renderCodeQuoteBanner } from './banners/quoteBanner.js';
import { renderFeatureBanner, renderFeatureGridBanner, renderCodeFeatureBanner } from './banners/featureBanner.js';
import { renderAnnouncementBanner, renderCompactAnnouncement } from './banners/announcementBanner.js';

export function renderLandingPage() {
  const main = document.getElementById('main');
  const header = document.getElementById('header');
  const app = document.getElementById('app');
  
  // Hide header and let main fill full viewport on landing page
  if (header) header.style.display = 'none';
  if (app) app.style.gridTemplateRows = '0fr 1fr';

  const hasStarted = (store.get('progress.completedLessons') || []).length > 0;

  main.innerHTML = `
    <div class="landing">
      <!-- Hero Banner -->
      ${renderHeroBanner()}

      <!-- Announcement Banner -->
      <section class="landing__section">
        <div class="landing__container">
          ${renderCompactAnnouncement({
            message: '🎉 New: ES2024 Module Now Available!',
            link: { text: 'Start Learning', url: '#/dashboard' }
          })}
        </div>
      </section>

      <!-- Features Grid Banner -->
      <section class="landing__section">
        <div class="landing__container">
          ${renderFeatureGridBanner({
            title: 'Everything You Need to Master JavaScript',
            subtitle: 'Built with care for complete beginners and advancing developers',
            features: [
              { icon: '📚', title: '27 Lessons', description: 'Progressive content from variables to Node.js. Each lesson breaks into small, digestible steps.' },
              { icon: '🧩', title: '50+ Puzzles', description: 'Predict output, fix bugs, fill blanks. Test your understanding with hands-on challenges.' },
              { icon: '🗺️', title: '9 Worlds', description: 'A visual learning path through JavaScript. Unlock new worlds as you complete lessons.' },
              { icon: '💻', title: 'Code Playground', description: 'Write and run JavaScript instantly. Experiment freely with a safe sandbox.' },
              { icon: '🏆', title: 'Achievements', description: 'Earn badges and track your progress. Stay motivated with milestones.' },
              { icon: '🎯', title: 'Real Projects', description: 'Build real-world applications. Apply what you learn in practical scenarios.' }
            ]
          })}
        </div>
      </section>

      <!-- Code Feature Banner -->
      <section class="landing__section landing__section--dark">
        <div class="landing__container">
          ${renderCodeFeatureBanner({
            title: 'Learn by Writing Real Code',
            description: 'Every lesson includes interactive code examples. Write, run, and understand JavaScript hands-on.',
            code: '// Variables and Data Types\nlet studentName = "Alex";\nconst lessonsCompleted = 12;\nconst isProMember = true;\n\n// Functions\nfunction calculateProgress(total, completed) {\n  return Math.round((completed / total) * 100);\n}\n\nconst progress = calculateProgress(27, lessonsCompleted);\nconsole.log(studentName + "\'s progress: " + progress + "%");\n// → Alex\'s progress: 44%',
            language: 'JavaScript'
          })}
        </div>
      </section>

      <!-- Stats Banner -->
      <section class="landing__section">
        <div class="landing__container">
          ${renderStatsBanner({
            stats: [
              { value: 100, suffix: '+', label: 'Sub-steps', description: 'Detailed learning units' },
              { value: 21, label: 'EJS Chapters', description: 'From Eloquent JavaScript' },
              { value: 9, label: 'Worlds', description: 'Progressive learning paths' },
              { value: 100, suffix: '%', label: 'Free', description: 'No hidden costs' }
            ],
            variant: 'accent'
          })}
        </div>
      </section>

      <!-- Learning Path Section -->
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

      <!-- Quote Banner -->
      <section class="landing__section">
        <div class="landing__container">
          ${renderQuoteBanner({
            quote: 'The best way to learn programming is by doing it. Not by reading about it, not by watching someone else do it, but by doing it yourself.',
            author: 'Marijn Haverbeke',
            source: 'Author of Eloquent JavaScript'
          })}
        </div>
      </section>

      <!-- Testimonials Section -->
      <section class="landing__section landing__section--dark">
        <div class="landing__container">
          <div class="landing__section-header">
            <h2 class="landing__section-title">What Our Learners Say</h2>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--space-6);">
            ${renderTestimonialBanner({
              quote: 'JS Explorer made JavaScript click for me. The visual learning path and hands-on puzzles made complex concepts feel simple.',
              author: 'Sarah Chen',
              role: 'Frontend Developer',
              avatar: { initial: 'S', gradient: 'linear-gradient(135deg, #5e6ad2, #7b87e0)' },
              rating: 5
            })}
            ${renderTestimonialBanner({
              quote: 'I tried many courses before, but this is the first one that stuck. The interactive approach is exactly what I needed.',
              author: 'Marcus Johnson',
              role: 'Career Switcher',
              avatar: { initial: 'M', gradient: 'linear-gradient(135deg, #2da44e, #56d364)' },
              rating: 5
            })}
            ${renderTestimonialBanner({
              quote: 'The code playground is brilliant. I can experiment freely without breaking anything. Highly recommend for beginners!',
              author: 'Priya Patel',
              role: 'Computer Science Student',
              avatar: { initial: 'P', gradient: 'linear-gradient(135deg, #d4a72c, #e3b341)' },
              rating: 5
            })}
          </div>
        </div>
      </section>

      <!-- Social Proof -->
      <section class="landing__section">
        <div class="landing__container">
          ${renderSocialProofBanner({
            trustText: 'Based on the book trusted by developers worldwide',
            logos: ['Eloquent JavaScript', 'MDN Web Docs', 'JavaScript.info', 'freeCodeCamp']
          })}
        </div>
      </section>

      <!-- Feature Highlight Banners -->
      <section class="landing__section landing__section--dark">
        <div class="landing__container">
          <div class="landing__section-header">
            <h2 class="landing__section-title">Why JS Explorer?</h2>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--space-6);">
            ${renderFeatureBanner({
              icon: '🎯',
              title: 'Progressive Learning',
              description: 'Start with basics and build up to advanced concepts. Each lesson builds on the previous one.',
              gradient: 'linear-gradient(135deg, var(--accent-subtle), transparent)'
            })}
            ${renderFeatureBanner({
              icon: '⚡',
              title: 'Instant Feedback',
              description: 'See results immediately. Run code, get feedback, and learn from your mistakes in real-time.',
              gradient: 'linear-gradient(135deg, var(--success-subtle), transparent)'
            })}
            ${renderFeatureBanner({
              icon: '🏆',
              title: 'Track Progress',
              description: 'Earn achievements, maintain streaks, and visualize your journey from beginner to expert.',
              gradient: 'linear-gradient(135deg, var(--warning-subtle), transparent)'
            })}
          </div>
        </div>
      </section>

      <!-- Code Quote Banner -->
      <section class="landing__section">
        <div class="landing__container">
          ${renderCodeQuoteBanner({
            quote: 'Programs must be written for people to read, and only incidentally for machines to execute.',
            author: 'Harold Abelson',
            language: 'wisdom.js'
          })}
        </div>
      </section>

      <!-- Final CTA Banner -->
      <section class="landing__section">
        <div class="landing__container">
          ${renderGradientCTABanner({
            title: 'Ready to Start Your JavaScript Journey?',
            description: 'No signup required. No ads. Just you and JavaScript.',
            action: { text: 'Get Started — It\'s Free', url: '#/dashboard' }
          })}
        </div>
      </section>

      <!-- Achievement Banner -->
      <section class="landing__section">
        <div class="landing__container">
          ${renderAchievementBanner({
            title: 'Your Journey Starts Here',
            description: 'Join thousands of learners who have mastered JavaScript through practice.',
            gradient: 'linear-gradient(135deg, var(--accent), var(--accent-hover))'
          })}
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

  // Initialize stat counters
  setTimeout(() => initStatCounters(), 100);
}

export default renderLandingPage;
