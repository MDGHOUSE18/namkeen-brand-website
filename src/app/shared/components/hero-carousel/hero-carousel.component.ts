import { Component, signal, effect, OnDestroy } from '@angular/core';
import { NgFor } from '@angular/common';
import { ArtComponent } from '../art/art.component';

export interface CarouselSlide {
  kind: 'bowl' | 'packets' | 'samosa' | 'spices' | 'product' | 'chai' | 'jars';
  label: string;
}

@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  imports: [NgFor, ArtComponent],
  templateUrl: './hero-carousel.component.html',
  styleUrl: './hero-carousel.component.scss',
})
export class HeroCarouselComponent implements OnDestroy {
  slides: CarouselSlide[] = [
    { kind: 'bowl', label: 'Authentic Indian Flavours' },
    { kind: 'packets', label: 'Crafted Namkeen' },
    { kind: 'samosa', label: 'Every Crunch, A Little Happiness.' },
  ];
  current = signal(0);
  paused = signal(false);
  private timer: ReturnType<typeof setInterval> | null = null;
  private readonly interval = 5500;

  constructor() {
    effect(() => {
      if (this.paused()) {
        this.clearTimer();
        return;
      }
      this.clearTimer();
      this.startTimer();
    });
  }

  next(): void {
    this.current.update((i: number) => (i + 1) % this.slides.length);
  }

  prev(): void {
    this.current.update((i: number) => (i - 1 + this.slides.length) % this.slides.length);
  }

  go(i: number): void {
    this.current.set(i);
  }

  pause(): void {
    this.paused.set(true);
  }

  resume(): void {
    this.paused.set(false);
  }

  private startTimer(): void {
    this.timer = setInterval(() => {
      this.current.update((i: number) => (i + 1) % this.slides.length);
    }, this.interval);
  }

  private clearTimer(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }
}
