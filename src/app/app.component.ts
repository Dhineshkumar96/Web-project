import { Component, inject, OnInit } from '@angular/core';
import { LanguageService } from './services/language.service';
import { AudioService } from './services/audio.service';
import { CursorComponent } from './components/cursor/cursor.component';
import { HeroComponent } from './components/hero/hero.component';
import { CoupleComponent } from './components/couple/couple.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { BlessingBellComponent } from './components/blessing-bell/blessing-bell.component';
import { WishesFormComponent } from './components/wishes-form/wishes-form.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CursorComponent,
    HeroComponent,
    CoupleComponent,
    EventDetailsComponent,
    BlessingBellComponent,
    WishesFormComponent,
    FooterComponent,
  ],
  template: `
    <app-cursor />

    <header class="topbar">
      <button class="audio-btn" (click)="audio.toggle()" data-cursor-hover
              [attr.aria-label]="audio.isPlaying() ? 'Pause music' : 'Play music'">
        @if (audio.isPlaying()) {
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="3" y="3" width="4" height="11" fill="currentColor"/><rect x="10" y="3" width="4" height="11" fill="currentColor"/></svg>
        } @else {
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M4 2.5v12l10-6-10-6z" fill="currentColor"/></svg>
        }
      </button>

      <div class="lang-switch">
        <button
          class="lang-opt"
          [class.active]="lang.lang() === 'en'"
          (click)="lang.setLang('en')"
          data-cursor-hover
        >EN</button>
        <span class="sep">/</span>
        <button
          class="lang-opt"
          [class.active]="lang.lang() === 'ta'"
          (click)="lang.setLang('ta')"
          data-cursor-hover
        >தமிழ்</button>
      </div>
    </header>

    <main (click)="onFirstInteraction()">
      <app-hero />
      <app-couple />
      <app-event-details />
      <app-blessing-bell />
      <app-wishes-form />
      <app-footer />
    </main>
  `,
  styles: [`
    :host { display: block; }

    .topbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.9rem 1.2rem;
      background: linear-gradient(180deg, rgba(76,20,36,0.55), transparent);
      backdrop-filter: blur(2px);
    }

    .audio-btn {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      border: 1px solid var(--gold-light);
      background: rgba(76, 20, 36, 0.35);
      color: var(--gold-light);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.25s ease;
    }
    .audio-btn:hover { background: rgba(76, 20, 36, 0.6); }

    .lang-switch {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      background: rgba(76, 20, 36, 0.35);
      border: 1px solid var(--gold-light);
      border-radius: 999px;
      padding: 0.3rem 0.6rem;
    }
    .lang-opt {
      background: none;
      border: none;
      color: rgba(247, 239, 221, 0.7);
      font-size: 0.85rem;
      padding: 0.15rem 0.4rem;
      letter-spacing: 0.02em;
    }
    .lang-opt.active { color: var(--gold-light); font-weight: 600; }
    .sep { color: rgba(247, 239, 221, 0.4); font-size: 0.8rem; }
  `],
})
export class AppComponent implements OnInit {
  lang = inject(LanguageService);
  audio = inject(AudioService);

  private hasInteracted = false;

  ngOnInit(): void {
    this.audio.tryAutoStart();
  }

  onFirstInteraction(): void {
    if (this.hasInteracted) return;
    this.hasInteracted = true;
    this.audio.startOnFirstGesture();
  }
}
