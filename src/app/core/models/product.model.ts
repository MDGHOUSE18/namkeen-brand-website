export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  altText: string;
  packSize?: string;
  isFeatured: boolean;
}
