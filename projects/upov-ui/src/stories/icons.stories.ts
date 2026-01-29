import type {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {MatIconModule} from '@angular/material/icon';

interface IconArgs {
  iconName: string;
  size: 'small' | 'medium' | 'large';
  color: string;
}

const meta: Meta<IconArgs> = {
  title: 'Design System/Icons',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [MatIconModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<IconArgs>;

/**
 * Custom SVG icons bundled with the UPOV UI library.
 * For Material Icons documentation, see Getting Started / Icons.
 */
export const CustomSVGIcons: Story = {
  render: () => ({

    template: `
      <div style="padding: 2rem;">
        <h3 style="margin-bottom: 1.5rem;">Custom SVG Icons</h3>
        <p style="color: var(--color-neutral-600); margin-bottom: 1.5rem;">
          These icons are bundled with the UPOV UI library and registered automatically.
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
          <div style="text-align: center; padding: 1.5rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <mat-icon svgIcon="twitter" style="width: 48px; height: 48px; font-size: 48px;"></mat-icon>
            <p style="font-size: 0.875rem; margin-top: 0.75rem; font-weight: 600;">Twitter</p>
            <p style="font-size: 0.75rem; color: var(--color-neutral-600); margin: 0.25rem 0 0;">svgIcon="twitter"</p>
          </div>

          <div style="text-align: center; padding: 1.5rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <mat-icon svgIcon="linkedin" style="width: 48px; height: 48px; font-size: 48px;"></mat-icon>
            <p style="font-size: 0.875rem; margin-top: 0.75rem; font-weight: 600;">LinkedIn</p>
            <p style="font-size: 0.75rem; color: var(--color-neutral-600); margin: 0.25rem 0 0;">svgIcon="linkedin"</p>
          </div>

          <div style="text-align: center; padding: 1.5rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <mat-icon svgIcon="youtube" style="width: 48px; height: 48px; font-size: 48px;"></mat-icon>
            <p style="font-size: 0.875rem; margin-top: 0.75rem; font-weight: 600;">YouTube</p>
            <p style="font-size: 0.75rem; color: var(--color-neutral-600); margin: 0.25rem 0 0;">svgIcon="youtube"</p>
          </div>

          <div style="text-align: center; padding: 1.5rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <mat-icon svgIcon="envelope" style="width: 48px; height: 48px; font-size: 48px;"></mat-icon>
            <p style="font-size: 0.875rem; margin-top: 0.75rem; font-weight: 600;">Envelope</p>
            <p style="font-size: 0.75rem; color: var(--color-neutral-600); margin: 0.25rem 0 0;">svgIcon="envelope"</p>
          </div>
        </div>

        <div style="padding: 1.5rem; background: var(--color-bg-light); border-radius: 8px; border-left: 4px solid var(--color-primary-green-dark);">
          <h4 style="margin: 0 0 1rem 0;">Usage</h4>
          <pre style="font-size: 0.875rem; margin: 0; overflow-x: auto;"><code>&lt;mat-icon svgIcon="twitter"&gt;&lt;/mat-icon&gt;
&lt;mat-icon svgIcon="linkedin"&gt;&lt;/mat-icon&gt;
&lt;mat-icon svgIcon="youtube"&gt;&lt;/mat-icon&gt;
&lt;mat-icon svgIcon="envelope"&gt;&lt;/mat-icon&gt;</code></pre>
        </div>

        <div style="padding: 1.5rem; background: var(--color-bg-light); border-radius: 8px; border-left: 4px solid var(--color-primary-green-dark); margin-top: 1.5rem;">
          <h4 style="margin: 0 0 0.5rem 0;">Documentation</h4>
          <p style="margin: 0; font-size: 0.875rem;">
            For Material Icons and custom icon registration, see the <strong>Getting Started / Icons</strong> documentation.
          </p>
        </div>
      </div>
    `,
    
  }),
};
