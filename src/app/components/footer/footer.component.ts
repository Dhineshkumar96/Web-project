import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { content } from '../../data/content';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="ornament" aria-hidden="true">
        <svg viewBox="0 0 200 30"><path d="M0 15 Q50 -2 100 15 T200 15" fill="none" stroke="currentColor" stroke-width="1"/></svg>
      </div>

      <p class="blessing">{{ lang.text(content.footerBlessing) }}</p>

      <a
        class="download"
        data-cursor-hover
        href="assets/docs/Deepikha-SriBalaji-Wedding-Invitation.pdf"
        download="Deepikha-SriBalaji-Wedding-Invitation.pdf"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1v9m0 0l3.5-3.5M8 10L4.5 6.5M2 13.5h12" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>
        {{ lang.text(content.downloadCta) }}
      </a>

      <div class="names">
        <span>{{ lang.text(content.brideName) }}</span>
        <span class="amp">&</span>
        <span>{{ lang.text(content.groomName) }}</span>
      </div>

      <p class="footer-note">{{ lang.text(content.footerNote) }}</p>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--maroon-deep);
      color: var(--sandal-light);
      text-align: center;
      padding: var(--space-5) var(--space-3) var(--space-4);
    }
    .ornament { width: 120px; margin: 0 auto var(--space-3); color: var(--gold); }
    .blessing {
      max-width: 420px;
      margin: 0 auto var(--space-3);
      color: rgba(247, 239, 221, 0.85);
      font-style: italic;
    }
    html[lang='ta'] .blessing { font-style: normal; }

    .download {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      border: 1px solid var(--gold);
      color: var(--gold-light);
      text-decoration: none;
      padding: 0.7rem 1.5rem;
      border-radius: 999px;
      font-size: 0.98rem;
      transition: background 0.3s ease, color 0.3s ease;
    }
    .download:hover { background: var(--gold); color: var(--maroon-deep); }

    .names {
      margin-top: var(--space-4);
      font-family: var(--font-display-en);
      font-size: 1.6rem;
      display: flex;
      gap: 0.5em;
      justify-content: center;
    }
    html[lang='ta'] .names { font-family: var(--font-ta); font-weight: 700; }
    .amp { color: var(--gold); font-style: italic; }

    .footer-note {
      margin-top: 0.5rem;
      font-size: 0.9rem;
      color: rgba(247, 239, 221, 0.65);
      letter-spacing: 0.03em;
    }
  `],
})
export class FooterComponent {
  lang = inject(LanguageService);
  content = content;
}
