import { Component, ElementRef, HostListener, signal, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-cursor',
  standalone: true,
  template: `
    <div class="cursor-ring" #ring [class.hover]="isHovering()" [class.press]="isPressing()"></div>
    <div class="cursor-dot" #dot></div>
  `,
  styles: [`
    :host {
      display: block;
    }
    .cursor-dot, .cursor-ring {
      position: fixed;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: 9999;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      will-change: transform;
    }
    .cursor-dot {
      width: 7px;
      height: 7px;
      background: var(--gold);
      box-shadow: 0 0 8px 1px rgba(201, 161, 90, 0.7);
    }
    .cursor-ring {
      width: 34px;
      height: 34px;
      border: 1.5px solid var(--gold);
      background: radial-gradient(circle, rgba(201,161,90,0.08), transparent 70%);
      transition: width 0.25s ease, height 0.25s ease, border-color 0.25s ease, background 0.25s ease, opacity 0.25s ease;
    }
    .cursor-ring.hover {
      width: 54px;
      height: 54px;
      border-color: var(--maroon);
      background: radial-gradient(circle, rgba(122,36,56,0.12), transparent 70%);
    }
    .cursor-ring.press {
      width: 26px;
      height: 26px;
    }
    @media (hover: none), (pointer: coarse) {
      :host { display: none; }
    }
  `],
})
export class CursorComponent implements AfterViewInit {
  @ViewChild('dot', { static: true }) dotRef!: ElementRef<HTMLDivElement>;
  @ViewChild('ring', { static: true }) ringRef!: ElementRef<HTMLDivElement>;

  isHovering = signal(false);
  isPressing = signal(false);

  private mouseX = 0;
  private mouseY = 0;
  private ringX = 0;
  private ringY = 0;

  ngAfterViewInit(): void {
    const loop = () => {
      this.ringX += (this.mouseX - this.ringX) * 0.18;
      this.ringY += (this.mouseY - this.ringY) * 0.18;
      const ring = this.ringRef.nativeElement;
      ring.style.transform = `translate(${this.ringX}px, ${this.ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  @HostListener('document:mousemove', ['$event'])
  onMove(e: MouseEvent): void {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
    const dot = this.dotRef.nativeElement;
    dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;

    const target = e.target as HTMLElement;
    const interactive = !!target.closest('button, a, input, textarea, select, [data-cursor-hover]');
    this.isHovering.set(interactive);
  }

  @HostListener('document:mousedown')
  onDown(): void { this.isPressing.set(true); }

  @HostListener('document:mouseup')
  onUp(): void { this.isPressing.set(false); }
}
