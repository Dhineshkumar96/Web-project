import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { content } from '../../data/content';

@Component({
  selector: 'app-couple',
  standalone: true,
  template: `
    <section class="section couple" id="couple">
      <p class="eyebrow center">{{ lang.isTamil() ? 'இணையும் இரு உள்ளங்கள்' : 'Two hearts, one journey' }}</p>
      <h2 class="section-title">{{ lang.text(content.coupleSectionTitle) }}</h2>
      <div class="divider"></div>

      <div class="cards">
        <div class="card">
          <div class="portrait" aria-hidden="true">
            <svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="39" fill="none" stroke="currentColor" stroke-width="1"/><path d="M40 24c6 0 10 5 10 11s-4 10-10 10-10-4-10-10 4-11 10-11zM22 62c3-11 10-16 18-16s15 5 18 16" fill="none" stroke="currentColor" stroke-width="1.3"/></svg>
          </div>
          <p class="label">{{ lang.text(content.brideLabel) }}</p>
          <h3 class="name">{{ lang.text(content.brideFull) }}</h3>
          <p class="parents">{{ lang.text(content.brideParents) }}</p>
        </div>

        <div class="joiner" aria-hidden="true">
          <svg width="30" height="30" viewBox="0 0 30 30"><path d="M15 2v26M2 15h26" stroke="var(--gold)" stroke-width="1"/><circle cx="15" cy="15" r="12" fill="none" stroke="var(--gold)" stroke-width="1"/></svg>
        </div>

        <div class="card">
          <div class="portrait" aria-hidden="true">
            <svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="39" fill="none" stroke="currentColor" stroke-width="1"/><path d="M40 22c6 0 10 5 10 11s-4 10-10 10-10-4-10-10 4-11 10-11zM21 63c3-12 10-17 19-17s16 5 19 17" fill="none" stroke="currentColor" stroke-width="1.3"/></svg>
          </div>
          <p class="label">{{ lang.text(content.groomLabel) }}</p>
          <h3 class="name">{{ lang.text(content.groomFull) }}</h3>
          <p class="parents">{{ lang.text(content.groomParents) }}</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .couple { background: var(--cream); }
    .eyebrow.center { text-align: center; display: block; }

    .cards {
      margin-top: var(--space-4);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-3);
      flex-wrap: wrap;
    }
    .card {
      flex: 1 1 260px;
      max-width: 300px;
      background: var(--sandal-light);
      border: 1px solid var(--gold-light);
      border-radius: var(--radius);
      padding: var(--space-4) var(--space-3);
      text-align: center;
      position: relative;
    }
    .card::before, .card::after {
      content: '';
      position: absolute;
      width: 14px; height: 14px;
      border: 1px solid var(--gold);
    }
    .card::before { top: 8px; left: 8px; border-width: 1px 0 0 1px; }
    .card::after { bottom: 8px; right: 8px; border-width: 0 1px 1px 0; }

    .portrait {
      width: 68px;
      height: 68px;
      margin: 0 auto var(--space-2);
      color: var(--maroon);
    }
    .label {
      font-size: 0.85rem;
      letter-spacing: 0.08em;
      color: var(--maroon-soft);
      font-style: italic;
      margin-bottom: 0.4rem;
    }
    html[lang='ta'] .label { font-style: normal; }
    .name {
      font-family: var(--font-display-en);
      font-size: 1.5rem;
      color: var(--maroon-deep);
      margin-bottom: var(--space-2);
    }
    html[lang='ta'] .name { font-family: var(--font-ta); font-weight: 700; font-size: 1.35rem; }
    .parents {
      font-size: 0.95rem;
      color: var(--ink-soft);
      line-height: 1.5;
    }
    .joiner { color: var(--gold); flex: 0 0 auto; }
    @media (max-width: 640px) {
      .joiner { display: none; 
      
       }
    }
  `],
})
export class CoupleComponent {
  lang = inject(LanguageService);
  content = content;
}
