export interface SocialLink {
  label: string;
  url: string;
}

export interface ContactInfo {
  email?: string;
  phone?: string;
  whatsappNumber?: string;
  address?: string;
  businessHours?: string;
  socialLinks: SocialLink[];
}
