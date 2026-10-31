import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { ArtComponent } from '../../shared/components/art/art.component';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, NgFor, ArtComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  company = inject(ContentService).getCompany();
}
