import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AudioService {
  private bgAudio: HTMLAudioElement | null = null;
  private bellAudio: HTMLAudioElement | null = null;

  readonly isPlaying = signal(false);
  private startedOnce = false;

  private ensureBgAudio(): HTMLAudioElement {
    if (!this.bgAudio) {
      this.bgAudio = new Audio('assets/audio/background-music.mp3');
      this.bgAudio.loop = true;
      this.bgAudio.volume = 0.35;
    }
    return this.bgAudio;
  }

  private ensureBellAudio(): HTMLAudioElement {
    if (!this.bellAudio) {
      this.bellAudio = new Audio('assets/audio/temple-bell.mp3');
      this.bellAudio.volume = 0.9;
    }
    return this.bellAudio;
  }

  /** Attempts autoplay; browsers may block until a user gesture happens. */
  tryAutoStart(): void {
    if (this.startedOnce) return;
    const audio = this.ensureBgAudio();
    audio.play()
      .then(() => {
        this.isPlaying.set(true);
        this.startedOnce = true;
      })
      .catch(() => {
        // Autoplay blocked — will start on first user interaction instead.
      });
  }

  startOnFirstGesture(): void {
    if (this.startedOnce) return;
    this.play();
  }

  play(): void {
    const audio = this.ensureBgAudio();
    audio.play().then(() => {
      this.isPlaying.set(true);
      this.startedOnce = true;
    }).catch(() => {});
  }

  pause(): void {
    this.bgAudio?.pause();
    this.isPlaying.set(false);
  }

  toggle(): void {
    if (this.isPlaying()) {
      this.pause();
    } else {
      this.play();
    }
  }

  playBell(): void {
    const bell = this.ensureBellAudio();
    bell.currentTime = 0;
    bell.play().catch(() => {});
  }
}
