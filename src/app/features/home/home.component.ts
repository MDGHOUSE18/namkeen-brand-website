import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { ArtComponent } from '../../shared/components/art/art.component';
import { HeroCarouselComponent } from '../../shared/components/hero-carousel/hero-carousel.component';
import { ContactCtaComponent } from '../../shared/components/contact-cta/contact-cta.component';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor, ArtComponent, HeroCarouselComponent, ContactCtaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  company = inject(ContentService).getCompany();
  products = inject(ContentService).getProducts();
  product = inject(ContentService).getFeaturedProduct();
  contact = inject(ContentService).getContact();
  get wa(): string { const n = this.contact.whatsappNumber?.replace(/\D/g,''); return n ? `https://wa.me/${n}` : ''; }
  get companyEmail(): string { return this.contact.email!; }
}
