import { Component, inject, signal, effect, HostListener, ElementRef } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor } from '@angular/common';
import { ContentService } from '../../../core/services/content.service';
import { NavigationItem } from '../../../core/models/navigation.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private content = inject(ContentService);
  private el = inject(ElementRef<HTMLElement>);
  brandName = this.content.getCompany().brandName;
  navItems: NavigationItem[] = this.content.getNavigation();
  menuOpen = signal(false);
  stuck = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.stuck.set(window.scrollY > 8);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
    document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    document.body.style.overflow = '';
  }

  openWhatsApp(): void {
    const n = '9179896218720';
    window.open(`https://wa.me/${n}`, '_blank', 'noopener,noreferrer');
  }
}
