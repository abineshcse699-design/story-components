import {ApplicationConfig, provideBrowserGlobalErrorListeners} from '@angular/core';
import {provideRouter} from '@angular/router';
import {FOOTER_CONFIG, type FooterConfig, provideUpovUi} from 'upov-ui';

import {routes} from './app.routes';

// Example: Custom footer configuration (uncomment to override defaults)
const customFooterConfig: FooterConfig = {
  socialLinks: [
    {name: 'X', url: 'https://x.com/yourcompany', icon: 'twitter'},
    {name: 'LinkedIn', url: 'https://www.linkedin.com/company/yourcompany/', icon: 'linkedin'},
  ],
  footerLinks: [
    {name: 'About', url: '/about'},
    {name: 'Privacy', url: '/privacy'},
    {name: 'Contact', url: '/contact'},
  ],
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideUpovUi(),
    {provide: FOOTER_CONFIG, useValue: customFooterConfig},
  ]
};
