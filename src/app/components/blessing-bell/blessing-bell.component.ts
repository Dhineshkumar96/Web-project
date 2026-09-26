import { Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { AudioService } from '../../services/audio.service';
import { content } from '../../data/content';

interface Ripple { id: number; }
interface Petal { id: number; left: number; delay: number; duration: number; hue: 'maroon' | 'gold'; }

@Component({
  selector: 'app-blessing-bell',
  standalone: true,
  template: `
    <section class="section bell-section">
      <p class="eyebrow center">{{ lang.isTamil() ? 'ஆசி' : 'A blessing' }}</p>
      <h2 class="section-title">{{ lang.text(content.blessingTitle) }}</h2>
      <p class="subtitle">{{ lang.text(content.blessingSubtitle) }}</p>

      <div class="bell-wrap">
        @for (r of ripples(); track r.id) {
          <span class="ripple"></span>
        }
        @for (p of petals(); track p.id) {
          <span class="petal" [class.gold]="p.hue === 'gold'"
                [style.left.%]="p.left"
                [style.animation-delay.s]="p.delay"
                [style.animation-duration.s]="p.duration"></span>
        }

        <button
          class="bell"
          [class.rung]="justRung()"
          (click)="ring()"
          data-cursor-hover
          [attr.aria-label]="lang.isTamil() ? 'மணி அடிக்க' : 'Ring the bell'"
        >
          <svg viewBox="0 0 64 64" width="64" height="64" fill="none">
            <path d="M32 6c-1.6 0-2.8 1.2-2.8 2.8v2.3C21.6 12.5 16 19 16 27v10l-4 7h40l-4-7V27c0-8-5.6-14.5-13.2-15.9V8.8C34.8 7.2 33.6 6 32 6z" fill="currentColor"/>
            <path d="M25 47a7 7 0 0 0 14 0" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <p class="count">{{ blessingCount() }} {{ lang.text(content.blessingCount) }}</p>
    </section>
  `,
  styles: [`
    .bell-section {
      background: var(--maroon-deep);
      color: var(--sandal-light);
      text-align: center;
      overflow: hidden;
    }
    .bell-section .eyebrow { color: var(--gold-light); }
    .bell-section .section-title { color: var(--sandal-light); }
    .subtitle {
      max-width: 420px;
      margin: var(--space-2) auto 0;
      color: rgba(247, 239, 221, 0.8);
    }

    .bell-wrap {
      position: relative;
      width: 220px;
      height: 220px;
      margin: var(--space-4) auto var(--space-2);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .bell {
      position: relative;
      z-index: 2;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 30%, var(--gold-light), var(--gold) 60%, #a07731 100%);
      color: var(--maroon-deep);
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.35);
      transition: transform 0.15s ease;
    }
    .bell:hover { transform: scale(1.05); }
    .bell.rung { animation: swing 0.6s ease; }
    @keyframes swing {
      0% { transform: rotate(0); }
      20% { transform: rotate(-18deg); }
      40% { transform: rotate(14deg); }
      60% { transform: rotate(-8deg); }
      80% { transform: rotate(4deg); }
      100% { transform: rotate(0); }
    }

    .ripple {
      position: absolute;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 1.5px solid var(--gold-light);
      animation: ringOut 1.1s ease-out forwards;
    }

    .petal {
      position: absolute;
      top: -10px;
      width: 8px;
      height: 8px;
      border-radius: 50% 0 50% 50%;
      background: var(--sandal);
      animation-name: petalFall;
      animation-timing-function: ease-in;
      animation-fill-mode: forwards;
    }
    .petal.gold { background: var(--gold-light); }

    .count {
      font-family: var(--font-display-en);
      font-size: 1.1rem;
      letter-spacing: 0.04em;
      color: var(--gold-light);
      margin-top: var(--space-2);
    }
    html[lang='ta'] .count { font-family: var(--font-ta); }
  `],
})
export class BlessingBellComponent {
  lang = inject(LanguageService);
  private audio = inject(AudioService);
  content = content;

  blessingCount = signal(0);
  justRung = signal(false);
  ripples = signal<Ripple[]>([]);
  petals = signal<Petal[]>([]);

  private rippleId = 0;
  private petalId = 0;

  ring(): void {
    this.audio.startOnFirstGesture();
    this.audio.playBell();
    this.blessingCount.update((v) => v + 1);

    this.justRung.set(true);
    setTimeout(() => this.justRung.set(false), 600);

    const rid = this.rippleId++;
    this.ripples.update((r) => [...r, { id: rid }]);
    setTimeout(() => {
      this.ripples.update((r) => r.filter((x) => x.id !== rid));
    }, 1100);

    const newPetals: Petal[] = Array.from({ length: 10 }).map(() => ({
      id: this.petalId++,
      left: Math.random() * 100,
      delay: Math.random() * 0.2,
      duration: 1.6 + Math.random() * 1.2,
      hue: Math.random() > 0.5 ? 'gold' : 'maroon',
    }));
    this.petals.update((p) => [...p, ...newPetals]);
    setTimeout(() => {
      const ids = new Set(newPetals.map((p) => p.id));
      this.petals.update((p) => p.filter((x) => !ids.has(x.id)));
    }, 3200);
  }
}
