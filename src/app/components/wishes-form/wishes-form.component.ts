import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { WishesService } from '../../services/wishes.service';
import { content } from '../../data/content';

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-wishes-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section class="section wishes" id="wishes">
      <p class="eyebrow center">{{ lang.isTamil() ? 'உங்கள் குரல்' : 'From your heart' }}</p>
      <h2 class="section-title">{{ lang.text(content.wishesTitle) }}</h2>
      <p class="subtitle">{{ lang.text(content.wishesSubtitle) }}</p>

      <form class="form" [formGroup]="form" (ngSubmit)="submit()">
        <div class="field">
          <label for="name">{{ lang.text(content.formName) }}</label>
          <input id="name" type="text" formControlName="name" data-cursor-hover
                 [class.invalid]="showError('name')" autocomplete="name" />
          @if (showError('name')) {
            <span class="error">
              {{ form.controls.name.errors?.['required'] ? lang.text(content.errRequired) : lang.text(content.errMinName) }}
            </span>
          }
        </div>

        <div class="field">
          <span class="label">{{ lang.text(content.formSide) }}</span>
          <div class="side-options">
            <label class="side-pill" [class.selected]="form.controls.side.value === 'bride'" data-cursor-hover>
              <input type="radio" name="side" value="bride" formControlName="side" />
              {{ lang.text(content.formSideBride) }}
            </label>
            <label class="side-pill" [class.selected]="form.controls.side.value === 'groom'" data-cursor-hover>
              <input type="radio" name="side" value="groom" formControlName="side" />
              {{ lang.text(content.formSideGroom) }}
            </label>
          </div>
          @if (showError('side')) {
            <span class="error">{{ lang.text(content.errRequired) }}</span>
          }
        </div>

        <div class="field">
          <label for="wish">{{ lang.text(content.formWish) }}</label>
          <textarea id="wish" rows="4" formControlName="wish" data-cursor-hover
                    [class.invalid]="showError('wish')"></textarea>
          @if (showError('wish')) {
            <span class="error">
              {{ form.controls.wish.errors?.['required'] ? lang.text(content.errRequired) : lang.text(content.errMinWish) }}
            </span>
          }
        </div>

        <button type="submit" class="submit" data-cursor-hover [disabled]="state() === 'sending'">
          @if (state() === 'sending') {
            <span>{{ lang.isTamil() ? 'அனுப்புகிறது…' : 'Sending…' }}</span>
          } @else {
            <span>{{ lang.text(content.formSubmit) }}</span>
          }
        </button>

        @if (state() === 'success') {
          <p class="feedback success">{{ lang.text(content.formSuccess) }}</p>
        }
        @if (state() === 'error') {
          <p class="feedback error-msg">{{ lang.text(content.formError) }}</p>
        }
      </form>
    </section>
  `,
  styles: [`
    .wishes { background: var(--sandal-light); }
    .eyebrow.center { display: block; text-align: center; }
    .subtitle {
      text-align: center;
      max-width: 420px;
      margin: var(--space-2) auto 0;
      color: var(--ink-soft);
    }

    .form {
      max-width: 480px;
      margin: var(--space-4) auto 0;
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
    }

    .field { display: flex; flex-direction: column; gap: 0.45rem; text-align: left; }
    label, .label {
      font-size: 0.95rem;
      color: var(--maroon-deep);
      letter-spacing: 0.02em;
    }

    input[type="text"], textarea {
      font-family: var(--font-body-en);
      font-size: 1.05rem;
      background: var(--cream);
      border: 1px solid var(--gold-light);
      border-radius: var(--radius);
      padding: 0.7rem 0.9rem;
      color: var(--ink);
      resize: vertical;
    }
    html[lang='ta'] input[type="text"], html[lang='ta'] textarea { font-family: var(--font-ta); }
    input:focus, textarea:focus {
      outline: none;
      border-color: var(--maroon);
    }
    input.invalid, textarea.invalid { border-color: #a3363b; }

    .side-options { display: flex; gap: 0.75rem; flex-wrap: wrap; }
    .side-pill {
      border: 1px solid var(--gold-light);
      border-radius: 999px;
      padding: 0.5rem 1.1rem;
      font-size: 0.95rem;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: var(--cream);
      transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
    }
    .side-pill input { position: absolute; opacity: 0; pointer-events: none; }
    .side-pill.selected {
      background: var(--maroon-deep);
      color: var(--sandal-light);
      border-color: var(--maroon-deep);
    }

    .error { color: #a3363b; font-size: 0.85rem; }

    .submit {
      align-self: center;
      margin-top: var(--space-1);
      background: var(--maroon-deep);
      color: var(--sandal-light);
      border: none;
      padding: 0.8rem 2.2rem;
      border-radius: 999px;
      font-size: 1rem;
      letter-spacing: 0.03em;
      transition: background 0.3s ease, transform 0.2s ease;
    }
    .submit:hover:not(:disabled) { background: var(--maroon); transform: translateY(-1px); }
    .submit:disabled { opacity: 0.6; }

    .feedback { text-align: center; font-size: 0.95rem; margin-top: -0.4rem; }
    .feedback.success { color: #3d7a4f; }
    .feedback.error-msg { color: #a3363b; }
  `],
})
export class WishesFormComponent {
  lang = inject(LanguageService);
  private wishesService = inject(WishesService);
  content = content;

  state = signal<SubmitState>('idle');

  form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
    side: new FormControl<'bride' | 'groom' | ''>('', { nonNullable: true, validators: [Validators.required] }),
    wish: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(5)] }),
  });

  showError(field: 'name' | 'side' | 'wish'): boolean {
    const c = this.form.controls[field];
    return c.invalid && (c.dirty || c.touched);
  }

  async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.state.set('sending');
    const value = this.form.getRawValue();
    const ok = await this.wishesService.submit({
      name: value.name,
      side: value.side as 'bride' | 'groom',
      wish: value.wish,
    });
    this.state.set(ok ? 'success' : 'error');
    if (ok) {
      this.form.reset({ name: '', side: '', wish: '' });
    }
  }
}
