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
          <div class="medallion" aria-hidden="true">
            <svg class="frame" viewBox="0 0 100 100">
              <circle class="ring-outer" cx="50" cy="50" r="47"/>
              <g class="finial" style="transform-origin:50px 50px">
                <path d="M50 2c3 4 3 8 0 11-3-3-3-7 0-11z"/>
              </g>
              <g class="finial" style="transform:rotate(90deg); transform-origin:50px 50px">
                <path d="M50 2c3 4 3 8 0 11-3-3-3-7 0-11z"/>
              </g>
              <g class="finial" style="transform:rotate(180deg); transform-origin:50px 50px">
                <path d="M50 2c3 4 3 8 0 11-3-3-3-7 0-11z"/>
              </g>
              <g class="finial" style="transform:rotate(270deg); transform-origin:50px 50px">
                <path d="M50 2c3 4 3 8 0 11-3-3-3-7 0-11z"/>
              </g>
            </svg>
            <img class="portrait" src="assets/images/bride.png" alt="" />
          </div>
          <p class="label">{{ lang.text(content.brideLabel) }}</p>
          <h3 class="name">{{ lang.text(content.brideFull) }}</h3>
          <p class="parents">{{ lang.text(content.brideParents) }}</p>
        </div>

        <div class="joiner" aria-hidden="true">
          <svg width="44" height="26" viewBox="0 0 44 26">
            <circle cx="16" cy="13" r="10" fill="none" stroke="var(--gold)" stroke-width="1.6"/>
            <circle cx="28" cy="13" r="10" fill="none" stroke="var(--gold)" stroke-width="1.6"/>
          </svg>
        </div>

        <div class="card">
          <div class="medallion" aria-hidden="true">
            <svg class="frame" viewBox="0 0 100 100">
              <circle class="ring-outer" cx="50" cy="50" r="47"/>
              <g class="finial" style="transform-origin:50px 50px">
                <path d="M50 2c3 4 3 8 0 11-3-3-3-7 0-11z"/>
              </g>
              <g class="finial" style="transform:rotate(90deg); transform-origin:50px 50px">
                <path d="M50 2c3 4 3 8 0 11-3-3-3-7 0-11z"/>
              </g>
              <g class="finial" style="transform:rotate(180deg); transform-origin:50px 50px">
                <path d="M50 2c3 4 3 8 0 11-3-3-3-7 0-11z"/>
              </g>
              <g class="finial" style="transform:rotate(270deg); transform-origin:50px 50px">
                <path d="M50 2c3 4 3 8 0 11-3-3-3-7 0-11z"/>
              </g>
            </svg>
            <img class="portrait" src="assets/images/groom.png" alt="" />
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
      height: 450px;
    }
    .card::before, .card::after {
      content: '';
      position: absolute;
      width: 14px; height: 14px;
      border: 1px solid var(--gold);
    }
    .card::before { top: 8px; left: 8px; border-width: 1px 0 0 1px; }
    .card::after { bottom: 8px; right: 8px; border-width: 0 1px 1px 0; }

    .medallion {
      position: relative;
      width: 176px;
      height: 176px;
      margin: 0 auto var(--space-3);
    }
    .frame {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      overflow: visible;
    }
    .ring-outer {
      fill: none;
      stroke: var(--gold);
      stroke-width: 1;
    }
    .finial path { fill: var(--gold); }

    .portrait {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 82%;
      height: 82%;
      border-radius: 50%;
      object-fit: cover;
      display: block;
      box-shadow:
        0 0 0 4px var(--sandal-light),
        0 0 0 6px var(--gold),
        0 16px 28px rgba(76, 20, 36, 0.32);
      transition: transform 0.4s ease;
    }
    .card:hover .portrait { transform: translate(-50%, -50%) scale(1.035); }

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
      .joiner {display: none;}
    }
  `],
})
export class CoupleComponent {
  lang = inject(LanguageService);
  content = content;
}
