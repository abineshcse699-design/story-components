import type {Meta, StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {Button} from '../lib';

const meta: Meta<Button> = {
  title: 'Directives/Button',
  component: Button,
  decorators: [
    moduleMetadata({
      imports: [
        MatButtonModule,
        MatIconModule,
        Button
      ]
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A directive that enhances Angular Material buttons with custom styling variants and sizes.

## Usage in Consumer App

\`\`\`typescript
import { Button } from 'upov-ui';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [Button, MatButtonModule],
  template: \`
    <button mat-button upovButton="primary" size="medium">
      Click me
    </button>

    <button mat-icon-button upovButton="danger" iconFilled>
      <mat-icon>delete</mat-icon>
    </button>
  \`
})
export class MyComponent {}
\`\`\`

**Important:** The Button directive must be used with Angular Material's \`mat-button\` or \`mat-icon-button\` directives.

### Required Imports
- \`Button\` from 'upov-ui'
- \`MatButtonModule\` from '@angular/material/button' (provides \`mat-button\` and \`mat-icon-button\`)
        `,
      },
    },
  },
  argTypes: {
    upovButton: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'danger', 'accent', ''],
      description: 'The visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button',
    },
    matButton: {
      description: 'Angular Material \`mat-button\` component to set material button appearance',
      control: 'select',
      options: [null, 'text'],
    },
    iconFilled: {
      control: 'boolean',
      description: 'Whether the icon button should have a filled background',
    },
  } as any,
};

export default meta;
type Story = StoryObj<Button>;

/**
 * Default button with standard styling and medium size.
 */
export const Default: Story = {
  args: {
    upovButton: 'default',
    size: 'medium',
  },
  render: (args) => ({
    props: args,
    template: `<button [matButton]="matButton" [upovButton]="upovButton" [size]="size">Label</button>`,
  }),
};

/**
 * Primary button for main call-to-action.
 */
export const Primary: Story = {
  render: (args) => ({
    props: args,
    template: `<button matButton upovButton="primary">Label</button>`,
  }),
};

/**
 * Secondary button for less prominent actions.
 */
export const Secondary: Story = {
  render: (args) => ({
    props: args,
    template: `<button matButton upovButton="secondary">Label</button>`,
  }),
};

/**
 * Danger button for destructive or warning actions.
 */
export const Danger: Story = {
  render: (args) => ({
    props: args,
    template: `<button matButton upovButton="danger">Label</button>`,
  }),
};

/**
 * Accent button for highlighting special actions.
 */
export const Accent: Story = {
  render: (args) => ({
    props: args,
    template: `<button matButton upovButton="accent">Label</button>`,
  }),
};

/**
 * Small-sized button.
 */
export const Small: Story = {
  render: (args) => ({
    props: args,
    template: `<button matButton upovButton size="small">Label</button>`,
  }),
};

/**
 * Medium-sized button (default).
 */
export const Medium: Story = {
  render: (args) => ({
    props: args,
    template: `<button matButton upovButton size="medium">Label</button>`,
  }),
};

/**
 * Large-sized button.
 */
export const Large: Story = {
  args: {
    upovButton: 'default',
    size: 'large',
  },
  render: (args) => ({
    props: args,
    template: `<button matButton upovButton size="large">Label</button>`,
  }),
};

/**
 * Text variant button with default styling.
 */
export const TextDefault: Story = {
  args: {
    upovButton: 'default',
    size: 'medium',
  },
  render: (args) => ({
    props: args,
    template: `<button matButton="text" upovButton size="medium">Label</button>`,
  }),
};

/**
 * Text variant button with primary styling.
 */
export const TextPrimary: Story = {
  render: (args) => ({
    props: args,
    template: `<button matButton="text" upovButton="primary">Label</button>`,
  }),
};

/**
 * Text variant button with secondary styling.
 */
export const TextSecondary: Story = {
  render: (args) => ({
    props: args,
    template: `<button matButton="text" upovButton="secondary">Label</button>`,
  }),
};

/**
 * Text variant button with danger styling.
 */
export const TextDanger: Story = {
  render: (args) => ({
    props: args,
    template: `<button matButton="text" upovButton="danger">Label</button>`,
  }),
};

/**
 * Text variant button with accent styling.
 */
export const TextAccent: Story = {
  render: (args) => ({
    props: args,
    template: `<button matButton="text" upovButton="accent">Label</button>`,
  }),
};

/**
 * Showcase all filled button variants side by side.
 */
export const AllFilledVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <button matButton upovButton>Default</button>
        <button matButton upovButton="primary">Primary</button>
        <button matButton upovButton="secondary">Secondary</button>
        <button matButton upovButton="danger">Danger</button>
        <button matButton upovButton="accent">Accent</button>
      </div>
    `,
  }),
};

/**
 * Showcase all button sizes side by side.
 */
export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <button matButton upovButton="primary" size="small">Small</button>
        <button matButton upovButton="primary" size="medium">Medium</button>
        <button matButton upovButton="primary" size="large">Large</button>
      </div>
    `,
  }),
};

/**
 * Showcase all text button variants side by side.
 */
export const AllTextVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <button matButton="text" upovButton>Default</button>
        <button matButton="text" upovButton="primary">Primary</button>
        <button matButton="text" upovButton="secondary">Secondary</button>
        <button matButton="text" upovButton="danger">Danger</button>
        <button matButton="text" upovButton="accent">Accent</button>
      </div>
    `,
  }),
};

/**
 * Complete showcase with both filled and text variants in different sizes.
 */

export const CompleteShowcase: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h3 style="margin-bottom: 12px;">Filled Buttons - Sizes</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <button matButton upovButton size="large">Large</button>
            <button matButton upovButton size="medium">Medium</button>
            <button matButton upovButton size="small">Small</button>
          </div>
        </div>

        <div>
          <h3 style="margin-bottom: 12px;">Filled Buttons - Variants</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <button matButton upovButton>Default</button>
            <button matButton upovButton="primary">Primary</button>
            <button matButton upovButton="secondary">Secondary</button>
            <button matButton upovButton="danger">Danger</button>
            <button matButton upovButton="accent">Accent</button>
          </div>
        </div>

        <div>
          <h3 style="margin-bottom: 12px;">Text Buttons - Variants</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <button matButton="text" upovButton>Default</button>
            <button matButton="text" upovButton="primary">Primary</button>
            <button matButton="text" upovButton="secondary">Secondary</button>
            <button matButton="text" upovButton="danger">Danger</button>
            <button matButton="text" upovButton="accent">Accent</button>
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * Filled button with leading icon.
 */

export const WithLeadingIcon: Story = {
  args: {
    upovButton: 'primary',
    size: 'medium',
  },
  render: (args) => ({
    props: args,
    template: `
      <button matButton [upovButton]="upovButton" [size]="size">
        <mat-icon fontIcon="favorite"></mat-icon>
        Like
      </button>
    `,
    
  }),

};


/**
 * Text button with leading icon.
 */
export const TextWithLeadingIcon: Story = {
  args: {
    upovButton: 'primary',
    size: 'medium',
  },
  render: (args) => ({
    props: args,
    template: `
      <button matButton="text" [upovButton]="upovButton" [size]="size">
        <mat-icon fontIcon="download"></mat-icon>
        Download
      </button>
    `,
  }),
};


/**
 * Icon-only button using mat-icon-button.
 */
export const IconOnly: Story = {
  args: {
    upovButton: 'primary',
    size: 'medium',
    iconFilled: false,
  },

  render: (args) => ({
    props: args,
    template: `
      <button matIconButton [upovButton]="upovButton" [size]="size" [iconFilled]="iconFilled" aria-label="Add item">
        <mat-icon fontIcon="add"></mat-icon>
      </button>
    `,
  }),
};


/**
 * Icon-only button with filled background.
 */
export const IconOnlyFilled: Story = {
  args: {
    upovButton: 'primary',
    size: 'medium',
    iconFilled: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <button matIconButton [upovButton]="upovButton" [size]="size" [iconFilled]="iconFilled" aria-label="Add item">
        <mat-icon fontIcon="add"></mat-icon>
      </button>
    `,
  }),
};


/**
 * Icon-only button variants showcase.
 */
export const IconOnlyVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <button matIconButton upovButton aria-label="Edit">
          <mat-icon fontIcon="edit"></mat-icon>
        </button>
        <button matIconButton upovButton="primary" aria-label="Favorite">
          <mat-icon fontIcon="favorite"></mat-icon>
        </button>
        <button matIconButton upovButton="secondary" aria-label="Share">
          <mat-icon fontIcon="share"></mat-icon>
        </button>
        <button matIconButton upovButton="danger" aria-label="Delete">
          <mat-icon fontIcon="delete"></mat-icon>
        </button>
        <button matIconButton upovButton="accent" aria-label="Star">
          <mat-icon fontIcon="star"></mat-icon>
        </button>
      </div>
    `,
  }),
};

/**
 * Icon-only button filled variants showcase.
 */
export const IconOnlyFilledVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <button matIconButton upovButton iconFilled aria-label="Edit">
          <mat-icon fontIcon="edit"></mat-icon>
        </button>
        <button matIconButton upovButton="primary" iconFilled aria-label="Favorite">
          <mat-icon fontIcon="favorite"></mat-icon>
        </button>
        <button matIconButton upovButton="secondary" iconFilled aria-label="Share">
          <mat-icon fontIcon="share"></mat-icon>
        </button>
        <button matIconButton upovButton="danger" iconFilled aria-label="Delete">
          <mat-icon fontIcon="delete"></mat-icon>
        </button>
        <button matIconButton upovButton="accent" iconFilled aria-label="Star">
          <mat-icon fontIcon="star"></mat-icon>
        </button>
      </div>
    `,
  }),
};

/**
 * Icon-only button sizes showcase.
 */
export const IconOnlySizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <button matIconButton upovButton="primary" size="small" aria-label="Small">
          <mat-icon fontIcon="settings"></mat-icon>
        </button>
        <button matIconButton upovButton="primary" size="medium" aria-label="Medium">
          <mat-icon fontIcon="settings"></mat-icon>
        </button>
        <button matIconButton upovButton="primary" size="large" aria-label="Large">
          <mat-icon fontIcon="settings"></mat-icon>
        </button>
      </div>
    `,
  }),
};

/**
 * Complete icon buttons showcase with different combinations.
 */
export const IconButtonsShowcase: Story = {
  render: () => ({

    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h3 style="margin-bottom: 12px;">Buttons with Leading Icons</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <button matButton upovButton="primary">
              <mat-icon fontIcon="save"></mat-icon>
              Save
            </button>
            <button matButton upovButton="secondary">
              <mat-icon fontIcon="cancel"></mat-icon>
              Cancel
            </button>
            <button matButton upovButton="danger">
              <mat-icon fontIcon="delete"></mat-icon>
              Delete
            </button>
          </div>
        </div>

        <div>
          <h3 style="margin-bottom: 12px;">Buttons with Trailing Icons</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <button matButton upovButton="primary">
              Next
              <mat-icon fontIcon="arrow_forward"></mat-icon>
            </button>
            <button matButton upovButton="secondary">
              Open
              <mat-icon fontIcon="open_in_new"></mat-icon>
            </button>
            <button matButton upovButton>
              More
              <mat-icon fontIcon="expand_more"></mat-icon>
            </button>
          </div>
        </div>

        <div>
          <h3 style="margin-bottom: 12px;">Text Buttons with Icons</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <button matButton="text" upovButton="primary">
              <mat-icon fontIcon="download"></mat-icon>
              Download
            </button>
            <button matButton="text" upovButton="secondary">
              <mat-icon fontIcon="upload"></mat-icon>
              Upload
            </button>
            <button matButton="text" upovButton>
              <mat-icon fontIcon="print"></mat-icon>
              Print
            </button>
          </div>
        </div>

        <div>
          <h3 style="margin-bottom: 12px;">Icon-Only Buttons</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <button matIconButton upovButton aria-label="Edit">
              <mat-icon fontIcon="edit"></mat-icon>
            </button>
            <button matIconButton upovButton="primary" aria-label="Favorite">
              <mat-icon fontIcon="favorite"></mat-icon>
            </button>
            <button matIconButton upovButton="secondary" aria-label="Share">
              <mat-icon fontIcon="share"></mat-icon>
            </button>
            <button matIconButton upovButton="danger" aria-label="Delete">
              <mat-icon fontIcon="delete"></mat-icon>
            </button>
            <button matIconButton upovButton="accent" aria-label="Star">
              <mat-icon fontIcon="star"></mat-icon>
            </button>
          </div>
        </div>

        <div>
          <h3 style="margin-bottom: 12px;">Icon-Only Buttons (Filled)</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <button matIconButton upovButton iconFilled aria-label="Edit">
              <mat-icon fontIcon="edit"></mat-icon>
            </button>
            <button matIconButton upovButton="primary" iconFilled aria-label="Favorite">
              <mat-icon fontIcon="favorite"></mat-icon>
            </button>
            <button matIconButton upovButton="secondary" iconFilled aria-label="Share">
              <mat-icon fontIcon="share"></mat-icon>
            </button>
            <button matIconButton upovButton="danger" iconFilled aria-label="Delete">
              <mat-icon fontIcon="delete"></mat-icon>
            </button>
            <button matIconButton upovButton="accent" iconFilled aria-label="Star">
              <mat-icon fontIcon="star"></mat-icon>
            </button>
          </div>
        </div>
      </div>
    `,
  }),
};

