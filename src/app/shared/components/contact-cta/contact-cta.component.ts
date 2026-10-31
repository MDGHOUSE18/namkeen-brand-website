import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-cta',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './contact-cta.component.html',
  styleUrl: './contact-cta.component.scss',
})
export class ContactCtaComponent {
  @Input() title = 'Get in Touch';
  @Input() text = 'Reach out for enquiries, retail partnerships, or distribution opportunities.';
  get wa(): string {
    const n = '917989621872';
    return n ? `https://wa.me/${n}` : '';
  }
}