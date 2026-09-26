import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { content } from '../../data/content';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero">
      <div class="ornament ornament-top" aria-hidden="true">
        <svg viewBox="0 0 200 40" preserveAspectRatio="xMidYMid meet">
          <path d="M0 20 Q50 2 100 20 T200 20" fill="none" stroke="currentColor" stroke-width="1"/>
          <circle cx="100" cy="20" r="4" fill="currentColor"/>
        </svg>
      </div>

      <p class="eyebrow">{{ lang.text(content.eyebrow) }}</p>

      <p class="invite-line">{{ lang.text(content.heroInvite) }}</p>

      <h1 class="names">
        <span class="name">{{ lang.text(content.brideName) }}</span>
        <span class="amp" aria-hidden="true">&</span>
        <span class="name">{{ lang.text(content.groomName) }}</span>
      </h1>

      <div class="divider"></div>

      <p class="date">{{ lang.text(content.dateLabel) }}</p>
      <p class="muhurtam">{{ lang.text(content.muhurtamLabel) }}</p>

      <button class="scroll-cta" (click)="scrollToNext()" data-cursor-hover>
        <span>{{ lang.isTamil() ? 'மேலும் அறிய' : 'Discover more' }}</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 5l6 6 6-6" stroke="currentColor" stroke-width="1.4"/></svg>
      </button>

      <div class="ornament ornament-bottom" aria-hidden="true">
        <svg viewBox="0 0 200 40" preserveAspectRatio="xMidYMid meet">
          <path d="M0 20 Q50 38 100 20 T200 20" fill="none" stroke="currentColor" stroke-width="1"/>
          <circle cx="100" cy="20" r="4" fill="currentColor"/>
        </svg>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100svh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: var(--space-4) var(--space-3);
      background:
        radial-gradient(ellipse at 50% 0%, rgba(201,161,90,0.16), transparent 60%),
        linear-gradient(180deg, var(--sandal-light) 0%, var(--cream) 55%, var(--cream) 100%);
      color: var(--maroon-deep);
    }
    .ornament { width: 140px; color: var(--gold); opacity: 0.8; }
    .ornament-top { margin-bottom: var(--space-3); }
    .ornament-bottom { margin-top: var(--space-4); }

    .eyebrow { margin-bottom: var(--space-2); }

    .invite-line {
      max-width: 480px;
      font-size: 1.1rem;
      color: var(--ink-soft);
      margin-bottom: var(--space-3);
    }
    html[lang='ta'] .invite-line { font-size: 1.05rem; max-width: 520px; }

    .names {
      font-family: var(--font-display-en);
      font-size: clamp(2.6rem, 9vw, 5rem);
      display: flex;
      align-items: center;
      gap: 0.5em;
      flex-wrap: wrap;
      justify-content: center;
      color: var(--maroon-deep);
      line-height: 1.05;
    }
    html[lang='ta'] .names {
      font-family: var(--font-ta);
      font-weight: 800;
      font-size: clamp(2.2rem, 8vw, 4.2rem);
    }
    .amp {
      font-family: var(--font-body-en);
      font-style: italic;
      font-size: 0.55em;
      color: var(--gold);
    }

    .date {
      font-size: 1.3rem;
      letter-spacing: 0.03em;
      color: var(--maroon);
      margin-top: var(--space-1);
    }
    .muhurtam {
      font-size: 1rem;
      color: var(--ink-soft);
      margin-top: 0.35rem;
    }

    .scroll-cta {
      margin-top: var(--space-4);
      background: none;
      border: 1px solid var(--gold);
      color: var(--maroon-deep);
      padding: 0.6rem 1.3rem;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.95rem;
      letter-spacing: 0.02em;
      transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;
    }
    .scroll-cta:hover {
      background: var(--maroon-deep);
      color: var(--sandal-light);
      transform: translateY(2px);
    }
    .scroll-cta svg { animation: bob 1.8s ease-in-out infinite; }
    @keyframes bob {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(3px); }
    }
  `],
})
export class HeroComponent {
  lang = inject(LanguageService);
  content = content;

  scrollToNext(): void {
    document.getElementById('couple')?.scrollIntoView({ behavior: 'smooth' });
  }
}
