import { Injectable, signal, computed } from '@angular/core';
import { Bilingual, Lang } from '../data/content';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly _lang = signal<Lang>('en');
  readonly lang = this._lang.asReadonly();
  readonly isTamil = computed(() => this._lang() === 'ta');

  setLang(lang: Lang): void {
    this._lang.set(lang);
    document.documentElement.setAttribute('lang', lang === 'ta' ? 'ta' : 'en');
  }

  toggle(): void {
    this.setLang(this._lang() === 'en' ? 'ta' : 'en');
  }

  text(pair: Bilingual): string {
    return pair[this._lang()];
  }
}
