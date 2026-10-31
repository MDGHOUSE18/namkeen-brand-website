import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArtComponent } from '../art/art.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, ArtComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product: any;
}