import {InjectionToken} from '@angular/core';

export interface LinkItem {
  name: string;
  url: string;
  /**
   * Icon name from the Material icon registry.
   */
  icon?: string;
}

export interface FooterConfig {
  /**
   * Social media links to display in the footer.
   * Defaults to UPOV social media links (X, LinkedIn, YouTube, Contact).
   */
  socialLinks?: LinkItem[];

  /**
   * Footer navigation links.
   * Defaults to Terms of Use, Privacy, Sitemap, and Accessibility.
   */
  footerLinks?: LinkItem[];

  /**
   * Footer text content. If not provided, default UPOV text will be used.
   */
  footerText?: string;
}

export const FOOTER_CONFIG = new InjectionToken<FooterConfig>(
  'FOOTER_CONFIG',
  {
    providedIn: 'root',
    factory: () => ({
      socialLinks: [
        {name: 'X', url: 'https://x.com', icon: 'twitter'},
        {name: 'LinkedIn', url: 'https://www.linkedin.com/company/upov/', icon: 'linkedin'},
        {name: 'YouTube', url: 'https://www.youtube.com/user/UPOVINT', icon: 'youtube'},
        {name: 'Contact', url: 'mailto:someone@sowhere.else', icon: 'envelope'},
      ],
      footerLinks: [
        {name: 'Terms of Use', url: '/terms-of-use'},
        {name: 'Privacy', url: '/privacy'},
        {name: 'Sitemap', url: '/sitemap'},
        {name: 'Accessibility', url: '/accessibility'},
      ],
    }),
  },
);

