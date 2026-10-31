import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { ArtComponent } from '../art/art.component';
import { ContentService } from '../../../core/services/content.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, ArtComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  content = inject(ContentService);
  company = this.content.getCompany();
  contact = this.content.getContact();
  nav = this.content.getNavigation();
  year = new Date().getFullYear();
  get wa(): string {
    const n = this.contact.whatsappNumber?.replace(/\D/g, '');
    return n ? `https://wa.me/${n}` : '';
  }
}
