import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {Footer, FOOTER_CONFIG, type FooterConfig, type LinkItem} from '../lib';

const meta: Meta<Footer> = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {
    socialLinks: {
      control: 'object',
      description: 'Array of social media links with name, url, and optional icon.',
    },
    footerLinks: {
      control: 'object',
      description: 'Array of footer navigation links with name and url.',
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The Footer component provides a flexible, configurable footer with support for social media links, navigation links, and custom content.

## Usage in Consumer App

\`\`\`typescript
import { Footer } from 'upov-ui';

@Component({
  imports: [Footer],
  template: '<upov-footer></upov-footer>'
})
export class MyComponent {}
\`\`\`

## Configuration Methods

The footer supports three configuration approaches that can be used independently or combined:

### 1. Default Usage (Injection Token)

Configure the footer globally in your \`app.config.ts\`:

\`\`\`typescript
import { ApplicationConfig } from '@angular/core';
import { FOOTER_CONFIG, FooterConfig } from 'upov-ui';

const customFooterConfig: FooterConfig = {
  socialLinks: [
    { name: 'X', url: 'https://x.com/yourcompany', icon: 'twitter' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/yourcompany/', icon: 'linkedin' },
    { name: 'Contact', url: 'mailto:contact@yourcompany.com', icon: 'envelope' },
  ],
  footerLinks: [
    { name: 'About', url: '/about' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Contact Us', url: '/contact' },
  ],
  footerText: 'Custom footer text for your application.',
};

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: FOOTER_CONFIG, useValue: customFooterConfig },
  ]
};
\`\`\`

Then use the footer in your template:

\`\`\`html
<upov-footer></upov-footer>
\`\`\`

### 2. Input Signals

Override configuration per component instance:

\`\`\`typescript
import { Component, signal } from '@angular/core';
import { Footer, type LinkItem } from 'upov-ui';

@Component({
  selector: 'app-root',
  imports: [Footer],
  template: \`
    <upov-footer
      [socialLinks]="socialLinks()"
      [footerLinks]="footerLinks()">
    </upov-footer>
  \`
})
export class AppComponent {
  socialLinks = signal<LinkItem[]>([
    { name: 'GitHub', url: 'https://github.com/myorg', icon: 'code' },
    { name: 'Twitter', url: 'https://twitter.com/myorg', icon: 'twitter' },
  ]);

  footerLinks = signal<LinkItem[]>([
    { name: 'Documentation', url: '/docs' },
    { name: 'Support', url: '/support' },
  ]);
}
\`\`\`

### 3. Content Projection (ng-content)

Provide custom footer text with rich HTML:

\`\`\`html
<upov-footer [socialLinks]="socialLinks()" [footerLinks]="footerLinks()">
  <strong>Your Company Name</strong> - Building the future of web applications.
  <br>
  <span class="upov-text-small upov-text-muted">© 2025 All rights reserved.</span>
</upov-footer>
\`\`\`

## Configuration Precedence

When multiple configuration methods are used:
1. **Input signals** have highest priority
2. **ng-content** overrides \`footerText\` from injection token
3. **Injection token** provides fallback values

## Interface

\`\`\`typescript
interface LinkItem {
  name: string;
  url: string;
  icon?: string; // Material icon name or SVG icon name
}

interface FooterConfig {
  socialLinks?: LinkItem[];
  footerLinks?: LinkItem[];
  footerText?: string;
}
\`\`\`
        `,
      },
    },
  },
};


export default meta;
type Story = StoryObj<Footer>;

export const Default: Story = {
  name: 'Default Usage',
  render: () => ({
    template: `<upov-footer></upov-footer>`,
  }),
};

export const ConfiguredViaInputs: Story = {
  name: 'Configured via Inputs',
  render: (args) => ({
    template: `
      <upov-footer
        [socialLinks]="socialLinks"
        [footerLinks]="footerLinks">
      </upov-footer>
    `,
    props: {
      socialLinks: args.socialLinks,
      footerLinks: args.footerLinks,
    },
  }),

  args: {
    socialLinks: [
      {name: 'GitHub', url: 'https://github.com', icon: 'code'},
      {name: 'Twitter', url: 'https://twitter.com', icon: 'twitter'},
      {name: 'Email', url: 'mailto:hello@example.com', icon: 'envelope'},
    ] as LinkItem[],
    footerLinks: [
      {name: 'About Us', url: '/about'},
      {name: 'Contact', url: '/contact'},
      {name: 'Legal', url: '/legal'},
    ] as LinkItem[],
  },
};

export const ConfiguredViaNgContent: Story = {
  name: 'Configured via ng-content',
  render: () => ({
    template: `
      <upov-footer>
        This is custom footer text provided via <strong>ng-content</strong>.
        It can contain <em>rich HTML markup</em> and
        <a href="#" style="color: var(--color-primary-green-light);">custom links</a>.
        Perfect for unique, one-off footer content!
      </upov-footer>
    `,
  }),
};

export const ConfiguredViaInjectionToken: Story = {
  name: 'Configured via Injection Token',
  decorators: [
    moduleMetadata({
      providers: [
        {
          provide: FOOTER_CONFIG,
          useValue: {
            socialLinks: [
              {name: 'Facebook', url: 'https://facebook.com', icon: 'facebook'},
              {name: 'Instagram', url: 'https://instagram.com', icon: 'photo_camera'},
              {name: 'YouTube', url: 'https://youtube.com', icon: 'youtube'},
            ],
            footerLinks: [
              {name: 'Documentation', url: '/docs'},
              {name: 'API Reference', url: '/api'},
              {name: 'Support', url: '/support'},
              {name: 'Blog', url: '/blog'},
            ],
            footerText: 'This footer is configured via the FOOTER_CONFIG injection token. This approach is ideal for app-wide configuration.',
          } as FooterConfig,
        },
      ],
    }),
  ],
  render: () => ({
    template: `<upov-footer></upov-footer>`,
  }),
};

export const MixedConfiguration: Story = {
  name: 'Mixed Configuration',
  decorators: [
    moduleMetadata({
      providers: [
        {
          provide: FOOTER_CONFIG,
          useValue: {
            socialLinks: [
              {name: 'X', url: 'https://x.com/upov', icon: 'twitter'},
              {name: 'LinkedIn', url: 'https://linkedin.com/company/upov', icon: 'linkedin'},
            ],
            footerLinks: [
              {name: 'Terms of Use', url: '/terms'},
              {name: 'Privacy', url: '/privacy'},
            ],
            footerText: 'Default text from injection token (will be overridden by ng-content).',
          } as FooterConfig,
        },
      ],
    }),
  ],
  render: (args) => ({
    template: `
      <upov-footer [socialLinks]="socialLinks">
        <strong>Mixed configuration example:</strong>
        Social links come from <em>input</em>,
        footer links from <em>injection token</em>,
        and this text from <em>ng-content</em>.
        This demonstrates the flexibility of the footer component!
      </upov-footer>
    `,
    props: {
      socialLinks: args.socialLinks,
    },
  }),
  args: {
    socialLinks: [
      {name: 'Custom Link 1', url: 'https://example1.com', icon: 'link'},
      {name: 'Custom Link 2', url: 'https://example2.com', icon: 'link'},
      {name: 'Custom Link 3', url: 'https://example3.com', icon: 'link'},
    ] as LinkItem[],
  },
};

export const MinimalConfiguration: Story = {
  name: 'Minimal Configuration',
  decorators: [
    moduleMetadata({
      providers: [
        {
          provide: FOOTER_CONFIG,
          useValue: {
            socialLinks: [],
            footerLinks: [],
          } as FooterConfig,
        },
      ],
    }),
  ],
  render: () => ({
    template: `
      <upov-footer>
        Just a simple footer with custom text and no links.
      </upov-footer>
    `,
  }),
};

export const SocialLinksOnly: Story = {
  name: 'Social Links Only',
  render: (args) => ({
    template: `
      <upov-footer
        [socialLinks]="socialLinks"
        [footerLinks]="[]">
        Footer with only social media links and custom text.
      </upov-footer>
    `,
    props: {
      socialLinks: args.socialLinks,
    },
  }),
  args: {
    socialLinks: [
      {name: 'Twitter', url: 'https://twitter.com', icon: 'twitter'},
      {name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin'},
      {name: 'YouTube', url: 'https://youtube.com', icon: 'youtube'},
      {name: 'Contact', url: 'mailto:contact@example.com', icon: 'envelope'},
    ] as LinkItem[],
  },
};

export const FooterLinksOnly: Story = {
  name: 'Footer Links Only',
  render: (args) => ({
    template: `
      <upov-footer
        [socialLinks]="[]"
        [footerLinks]="footerLinks">
        Footer with only navigation links.
      </upov-footer>
    `,
    props: {
      footerLinks: args.footerLinks,
    },
  }),
  args: {
    footerLinks: [
      {name: 'Privacy Policy', url: '/privacy'},
      {name: 'Terms of Service', url: '/terms'},
      {name: 'Cookie Policy', url: '/cookies'},
      {name: 'Accessibility', url: '/accessibility'},
      {name: 'Sitemap', url: '/sitemap'},
    ] as LinkItem[],
  },
};

export const ComplexRichContent: Story = {
  name: 'Complex Rich Content',
  render: (args) => ({
    template: `
      <upov-footer
        [socialLinks]="socialLinks"
        [footerLinks]="footerLinks">
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <p style="margin: 0;">
            <strong>International Union for the Protection of New Varieties of Plants (UPOV)</strong>
          </p>
          <p style="margin: 0; font-size: 0.875rem; line-height: 1.5;">
            UPOV is an intergovernmental organization with legal personality and
            enjoys such privileges and immunities as are necessary for the
            fulfillment of its objectives.
          </p>
          <p style="margin: 0; font-size: 0.875rem;">
            © 2025 UPOV. All rights reserved.
          </p>
        </div>
      </upov-footer>
    `,
    props: {
      socialLinks: args.socialLinks,
      footerLinks: args.footerLinks,
    },

  }),

  args: {
    socialLinks: [
      {name: 'X', url: 'https://x.com/upov', icon: 'twitter'},
      {name: 'LinkedIn', url: 'https://linkedin.com/company/upov', icon: 'linkedin'},
      {name: 'YouTube', url: 'https://youtube.com/upov', icon: 'youtube'},
      {name: 'Contact', url: 'mailto:upov.mail@upov.int', icon: 'envelope'},
    ] as LinkItem[],
    footerLinks: [
      {name: 'Terms of Use', url: '/terms'},
      {name: 'Privacy', url: '/privacy'},
      {name: 'Sitemap', url: '/sitemap'},
      {name: 'Accessibility', url: '/accessibility'},
    ] as LinkItem[],
  },
  
};
