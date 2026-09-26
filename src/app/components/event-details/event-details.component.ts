import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { content } from '../../data/content';

@Component({
  selector: 'app-event-details',
  standalone: true,
  template: `
    <section class="section details">
      <p class="eyebrow center">{{ lang.text(content.scheduleTitle) }}</p>
      <h2 class="section-title">{{ lang.text(content.scheduleEvent) }}</h2>
      <div class="divider"></div>

      <div class="timeline">
        <div class="date-block">
          <span class="day">14</span>
          <span class="month">{{ lang.isTamil() ? 'டிசம்பர்' : 'DEC' }}</span>
          <span class="year">2026</span>
        </div>
        <div class="info">
          <p class="time">{{ lang.text(content.muhurtamLabel) }}</p>
          <p class="weekday">{{ lang.isTamil() ? 'திங்கட்கிழமை' : 'Monday' }}</p>
        </div>
      </div>

      <div class="venue-card">
        <p class="eyebrow center">{{ lang.text(content.venueTitle) }}</p>
        <h3 class="venue-name">{{ lang.text(content.venueName) }}</h3>
        <p class="venue-address">{{ lang.text(content.venueAddress) }}</p>
        <a
          class="directions"
          data-cursor-hover
          href="https://www.google.com/maps/search/?api=1&query=V.M.A.+Hall,+34+Srinivasa+Iyer+St,+Aryagowda+Road,+Vivekanandapuram,+West+Mambalam,+Chennai+600033"
          target="_blank" rel="noopener"
        >
          {{ lang.text(content.directionsCta) }}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 11l8-8M11 4v7H4" stroke="currentColor" stroke-width="1.3"/></svg>
        </a>
      </div>
    </section>
  `,
  styles: [`
    .details { background: var(--sandal-light); }
    .eyebrow.center { display: block; text-align: center; }

    .timeline {
      margin: var(--space-4) auto 0;
      max-width: 460px;
      display: flex;
      align-items: center;
      gap: var(--space-3);
      justify-content: center;
      background: var(--cream);
      border: 1px solid var(--gold-light);
      padding: var(--space-3);
    }
    .date-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1;
      color: var(--maroon-deep);
      border-right: 1px solid var(--gold-light);
      padding-right: var(--space-3);
      min-width: 90px;
    }
    .date-block .day { font-family: var(--font-display-en); font-size: 2.6rem; }
    .date-block .month { font-size: 0.85rem; letter-spacing: 0.12em; color: var(--maroon-soft); margin-top: 0.2rem; }
    .date-block .year { font-size: 0.85rem; color: var(--ink-soft); margin-top: 0.1rem; }

    .info { text-align: left; }
    .info .time { color: var(--ink); font-size: 1.02rem; }
    .info .weekday { color: var(--maroon-soft); font-style: italic; margin-top: 0.3rem; }
    html[lang='ta'] .info .weekday { font-style: normal; }

    .venue-card {
      margin: var(--space-4) auto 0;
      max-width: 460px;
      text-align: center;
      padding: var(--space-3);
    }
    .venue-name {
      font-family: var(--font-display-en);
      font-size: 1.8rem;
      color: var(--maroon-deep);
      margin: 0.3rem 0 0.6rem;
    }
    html[lang='ta'] .venue-name { font-family: var(--font-ta); font-weight: 700; }
    .venue-address {
      color: var(--ink-soft);
      max-width: 380px;
      margin: 0 auto var(--space-3);
    }
    .directions {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      border: 1px solid var(--maroon);
      color: var(--maroon-deep);
      padding: 0.55rem 1.2rem;
      border-radius: 999px;
      text-decoration: none;
      font-size: 0.95rem;
      transition: background 0.3s ease, color 0.3s ease;
    }
    .directions:hover { background: var(--maroon-deep); color: var(--sandal-light); }
  `],
})
export class EventDetailsComponent {
  lang = inject(LanguageService);
  content = content;
}
