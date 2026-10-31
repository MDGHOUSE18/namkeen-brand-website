import { Injectable } from '@angular/core';
import { COMPANY_DATA } from '../data/company.data';
import { PRODUCTS_DATA } from '../data/products.data';
import { IMAGE_ASSETS } from '../data/images.data';
import { NAVIGATION_DATA } from '../data/navigation.data';
import { CONTACT_DATA } from '../data/contact.data';
import { Company } from '../models/company.model';
import { Product } from '../models/product.model';
import { ImageAsset } from '../models/image-asset.model';
import { NavigationItem } from '../models/navigation.model';
import { ContactInfo } from '../models/contact.model';

@Injectable({ providedIn: 'root' })
export class ContentService {
  getCompany(): Company {
    return COMPANY_DATA;
  }
  getProducts(): Product[] {
    return PRODUCTS_DATA;
  }
  getFeaturedProduct(): Product | undefined {
    return PRODUCTS_DATA.find((p) => p.isFeatured) ?? PRODUCTS_DATA[0];
  }
  getImages(): ImageAsset[] {
    return IMAGE_ASSETS;
  }
  getImage(key: string): ImageAsset | undefined {
    return IMAGE_ASSETS.find((i) => i.key === key);
  }
  getNavigation(): NavigationItem[] {
    return NAVIGATION_DATA;
  }
  getContact(): ContactInfo {
    return CONTACT_DATA;
  }
}
