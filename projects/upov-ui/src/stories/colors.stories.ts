import type {Meta, StoryObj} from '@storybook/angular';

interface ColorArgs {
  showHex?: boolean;
}

const meta: Meta<ColorArgs> = {
  title: 'Design System/Colors',
  tags: ['autodocs'],
  argTypes: {
    showHex: {
      control: 'boolean',
      description: 'Show hex values for colors',
    },
  },
};

export default meta;
type Story = StoryObj<ColorArgs>;

/**
 * Primary brand colors used throughout the application.
 */
export const PrimaryColors: Story = {
  args: {
    showHex: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 2rem;">
        <h3 style="margin-bottom: 1.5rem;">Primary Colors</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1.5rem;">
          <div>
            <div style="background-color: var(--color-primary-green-dark); height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Primary Green Dark</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-primary-green-dark</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#1C4240</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-primary-green); height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Primary Green</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-primary-green</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#46B2A0</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-primary-green-bright); height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Primary Green Bright</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-primary-green-bright</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#009A6E</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-primary-green-light); height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Primary Green Light</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-primary-green-light</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#DADE14</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-primary-brown-light); height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Primary Brown Light</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-primary-brown-light</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#B8B4A4</p>' : ''}
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * Secondary colors for accents and special use cases.
 */
export const SecondaryColors: Story = {
  args: {
    showHex: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 2rem;">
        <h3 style="margin-bottom: 1.5rem;">Secondary Colors</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1.5rem;">
          <div>
            <div style="background-color: var(--color-yellow); height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Yellow</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-yellow</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#DED532</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-yellow-dust); height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Yellow Dust</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-yellow-dust</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#939600</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-green-dust); height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Green Dust</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-green-dust</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#547F71</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-blue-light); height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Blue Light</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-blue-light</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#82BECD</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-blue); height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Blue</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-blue</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#3585CB</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-orange-dark); height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Orange Dark</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-orange-dark</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#AD4E02</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-orange); height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Orange</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-orange</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#D57C35</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-orange-light); height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Orange Light</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-orange-light</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#FEF0E6</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-purple); height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Purple</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-purple</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#A51E91</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-ruby); height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Ruby</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-ruby</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#C83C58</p>' : ''}
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * Neutral grayscale colors for backgrounds, borders, and text.
 */
export const NeutralColors: Story = {
  args: {
    showHex: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 2rem;">
        <h3 style="margin-bottom: 1.5rem;">Neutral Colors</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1.5rem;">
          <div>
            <div style="background-color: var(--color-neutral-900); height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Neutral 900</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-neutral-900</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#000000</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-neutral-800); height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Neutral 800</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-neutral-800</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#303030</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-neutral-600); height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Neutral 600</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-neutral-600</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#636363</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-neutral-500); height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Neutral 500</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-neutral-500</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#727272</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-neutral-300); height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-200);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Neutral 300</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-neutral-300</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#C4C4C4</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-neutral-200); height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-300);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Neutral 200</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-neutral-200</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#E2E2E2</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-neutral-100); height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-300);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Neutral 100</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-neutral-100</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#F9F9F9</p>' : ''}
          </div>

          <div>
            <div style="background-color: var(--color-neutral-white); height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-300);"></div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Neutral White</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-neutral-white</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#FFFFFF</p>' : ''}
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * Semantic colors for text content in different contexts.
 */
export const TextColors: Story = {
  args: {
    showHex: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 2rem;">
        <h3 style="margin-bottom: 1.5rem;">Text Colors</h3>
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div style="padding: 1rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <p style="color: var(--color-text-primary); font-size: 1.125rem; margin: 0;">Primary Text Color</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">--color-text-primary (references --color-primary-green-dark)</p>
          </div>

          <div style="padding: 1rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <p style="color: var(--color-text); font-size: 1.125rem; margin: 0;">Default Text Color</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">--color-text (references --color-neutral-800)</p>
          </div>

          <div style="padding: 1rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <p style="color: var(--color-text-secondary); font-size: 1.125rem; margin: 0;">Secondary Text Color</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">--color-text-secondary (references --color-neutral-500)</p>
          </div>

          <div style="padding: 1rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <p style="color: var(--color-text-muted); font-size: 1.125rem; margin: 0;">Muted Text Color</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">--color-text-muted (references --color-neutral-600)</p>
          </div>

          <div style="padding: 1rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <p style="color: var(--color-text-placeholder); font-size: 1.125rem; margin: 0;">Placeholder Text Color</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">--color-text-placeholder (references --color-neutral-500)</p>
          </div>

          <div style="padding: 1rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <p style="color: var(--color-text-warning); font-size: 1.125rem; margin: 0;">Warning Text Color</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">--color-text-warning (references --color-warning-dark)</p>
          </div>

          <div style="padding: 1rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <p style="color: var(--color-text-darnger); font-size: 1.125rem; margin: 0;">Danger Text Color</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">--color-text-darnger (references --color-danger)</p>
          </div>

          <div style="padding: 1rem; background: var(--color-primary-green-dark); border-radius: 8px;">
            <p style="color: var(--color-text-negative); font-size: 1.125rem; margin: 0;">Negative Text Color</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-200); margin: 0.5rem 0 0;">--color-text-negative (for use on dark backgrounds)</p>
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * Background colors for different UI elements and sections.
 */
export const BackgroundColors: Story = {
  args: {
    showHex: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 2rem;">
        <h3 style="margin-bottom: 1.5rem;">Background Colors</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem;">
          <div>
            <div style="background-color: var(--color-bg-white); height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-300); display: flex; align-items: center; justify-content: center;">
              <span style="font-weight: 600;">Content Area</span>
            </div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Background White</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-bg-white</p>
          </div>

          <div>
            <div style="background-color: var(--color-bg-light); height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-300); display: flex; align-items: center; justify-content: center;">
              <span style="font-weight: 600;">Subtle Section</span>
            </div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Background Light</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-bg-light</p>
          </div>

          <div>
            <div style="background-color: var(--color-bg-warning); height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-300); display: flex; align-items: center; justify-content: center;">
              <span style="font-weight: 600;">Warning Area</span>
            </div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Background Warning</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-bg-warning</p>
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * Border colors for elements and containers.
 */
export const BorderColors: Story = {
  args: {
    showHex: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 2rem;">
        <h3 style="margin-bottom: 1.5rem;">Border Colors</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem;">
          <div>
            <div style="background-color: white; height: 100px; border-radius: 8px; border: 2px solid var(--color-border-light); display: flex; align-items: center; justify-content: center;">
              <span style="font-weight: 600;">Light Border</span>
            </div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Border Light</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-border-light</p>
          </div>

          <div>
            <div style="background-color: white; height: 100px; border-radius: 8px; border: 2px solid var(--color-border-dark); display: flex; align-items: center; justify-content: center;">
              <span style="font-weight: 600;">Dark Border</span>
            </div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Border Dark</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--color-border-dark</p>
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * Semantic alert and status colors.
 */
export const AlertColors: Story = {
  args: {
    showHex: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 2rem;">
        <h3 style="margin-bottom: 1.5rem;">Alert & Status Colors</h3>
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div style="padding: 1rem; background-color: var(--color-danger); color: white; border-radius: 8px;">
            <p style="font-size: 1.125rem; font-weight: 600; margin: 0;">Danger / Error</p>
            <p style="font-size: 0.875rem; margin: 0.5rem 0 0; opacity: 0.9;">--color-danger (references --color-ruby)</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; margin: 0.25rem 0 0; opacity: 0.8;">#C83C58</p>' : ''}
          </div>

          <div style="padding: 1rem; background-color: var(--color-warning); color: white; border-radius: 8px;">
            <p style="font-size: 1.125rem; font-weight: 600; margin: 0;">Warning</p>
            <p style="font-size: 0.875rem; margin: 0.5rem 0 0; opacity: 0.9;">--color-warning (references --color-orange)</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; margin: 0.25rem 0 0; opacity: 0.8;">#D57C35</p>' : ''}
          </div>

          <div style="padding: 1rem; background-color: var(--color-warning-light); border: 1px solid var(--color-warning); border-radius: 8px;">
            <p style="font-size: 1.125rem; font-weight: 600; margin: 0; color: var(--color-warning-dark);">Warning Light Background</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">--color-warning-light (references --color-orange-light)</p>
            ${args.showHex ? '<p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0;">#FEF0E6</p>' : ''}
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * Gradient backgrounds for special UI elements.
 */
export const Gradients: Story = {
  render: () => ({
    template: `
      <div style="padding: 2rem;">
        <h3 style="margin-bottom: 1.5rem;">Gradient Backgrounds</h3>
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div>
            <div style="background: var(--bg-gradient-teal-lime); height: 120px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
              <span style="font-weight: 700; font-size: 1.25rem; color: white;">Teal to Lime</span>
            </div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Gradient Teal Lime</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--bg-gradient-teal-lime</p>
            <p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0; font-family: monospace;">
              linear-gradient(90deg, var(--color-primary-green-dark) 0%, var(--color-primary-green-light) 100%)
            </p>
          </div>

          <div>
            <div style="background: var(--bg-gradient-lime-forest); height: 120px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
              <span style="font-weight: 700; font-size: 1.25rem; color: white;">Lime to Forest</span>
            </div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Gradient Lime Forest</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--bg-gradient-lime-forest</p>
            <p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0; font-family: monospace;">
              linear-gradient(90deg, var(--color-primary-green-light) 0%, var(--color-primary-green-bright) 100%)
            </p>
          </div>

          <div>
            <div style="background: var(--bg-gradient-forest-pine); height: 120px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
              <span style="font-weight: 700; font-size: 1.25rem; color: white;">Forest to Pine</span>
            </div>
            <p style="margin-top: 0.5rem; font-weight: 600;">Gradient Forest Pine</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0;">--bg-gradient-forest-pine</p>
            <p style="font-size: 0.75rem; color: var(--color-neutral-500); margin: 0.25rem 0 0; font-family: monospace;">
              linear-gradient(90deg, var(--color-primary-green-bright) 0%, var(--color-primary-green) 100%)
            </p>
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * Complete color palette overview showing all available colors.
 */
export const AllColors: Story = {
  args: {
    showHex: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 2rem;">
        <h2 style="margin-bottom: 2rem;">Complete Color Palette</h2>

        <section style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: var(--color-primary-green-dark);">Primary Colors</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem;">
            <div>
              <div style="background-color: var(--color-primary-green-dark); height: 80px; border-radius: 4px;"></div>
              <p style="font-size: 0.75rem; margin-top: 0.5rem; font-weight: 600;">Green Dark</p>
            </div>
            <div>
              <div style="background-color: var(--color-primary-green); height: 80px; border-radius: 4px;"></div>
              <p style="font-size: 0.75rem; margin-top: 0.5rem; font-weight: 600;">Green</p>
            </div>
            <div>
              <div style="background-color: var(--color-primary-green-bright); height: 80px; border-radius: 4px;"></div>
              <p style="font-size: 0.75rem; margin-top: 0.5rem; font-weight: 600;">Green Bright</p>
            </div>
            <div>
              <div style="background-color: var(--color-primary-green-light); height: 80px; border-radius: 4px;"></div>
              <p style="font-size: 0.75rem; margin-top: 0.5rem; font-weight: 600;">Green Light</p>
            </div>
            <div>
              <div style="background-color: var(--color-primary-brown-light); height: 80px; border-radius: 4px;"></div>
              <p style="font-size: 0.75rem; margin-top: 0.5rem; font-weight: 600;">Brown Light</p>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 3rem;">
          <h3 style="margin-bottom: 1rem; color: var(--color-primary-green-dark);">Secondary Colors</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem;">
            <div>
              <div style="background-color: var(--color-yellow); height: 80px; border-radius: 4px;"></div>
              <p style="font-size: 0.75rem; margin-top: 0.5rem; font-weight: 600;">Yellow</p>
            </div>
            <div>
              <div style="background-color: var(--color-blue-light); height: 80px; border-radius: 4px;"></div>
              <p style="font-size: 0.75rem; margin-top: 0.5rem; font-weight: 600;">Blue Light</p>
            </div>
            <div>
              <div style="background-color: var(--color-blue); height: 80px; border-radius: 4px;"></div>
              <p style="font-size: 0.75rem; margin-top: 0.5rem; font-weight: 600;">Blue</p>
            </div>
            <div>
              <div style="background-color: var(--color-orange); height: 80px; border-radius: 4px;"></div>
              <p style="font-size: 0.75rem; margin-top: 0.5rem; font-weight: 600;">Orange</p>
            </div>
            <div>
              <div style="background-color: var(--color-purple); height: 80px; border-radius: 4px;"></div>
              <p style="font-size: 0.75rem; margin-top: 0.5rem; font-weight: 600;">Purple</p>
            </div>
            <div>
              <div style="background-color: var(--color-ruby); height: 80px; border-radius: 4px;"></div>
              <p style="font-size: 0.75rem; margin-top: 0.5rem; font-weight: 600;">Ruby</p>
            </div>
          </div>
        </section>

        <section>
          <h3 style="margin-bottom: 1rem; color: var(--color-primary-green-dark);">Neutral Colors</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem;">
            <div>
              <div style="background-color: var(--color-neutral-900); height: 80px; border-radius: 4px; border: 1px solid var(--color-neutral-200);"></div>
              <p style="font-size: 0.75rem; margin-top: 0.5rem; font-weight: 600;">900</p>
            </div>
            <div>
              <div style="background-color: var(--color-neutral-800); height: 80px; border-radius: 4px;"></div>
              <p style="font-size: 0.75rem; margin-top: 0.5rem; font-weight: 600;">800</p>
            </div>
            <div>
              <div style="background-color: var(--color-neutral-600); height: 80px; border-radius: 4px;"></div>
              <p style="font-size: 0.75rem; margin-top: 0.5rem; font-weight: 600;">600</p>
            </div>
            <div>
              <div style="background-color: var(--color-neutral-500); height: 80px; border-radius: 4px;"></div>
              <p style="font-size: 0.75rem; margin-top: 0.5rem; font-weight: 600;">500</p>
            </div>
            <div>
              <div style="background-color: var(--color-neutral-300); height: 80px; border-radius: 4px;"></div>
              <p style="font-size: 0.75rem; margin-top: 0.5rem; font-weight: 600;">300</p>
            </div>
            <div>
              <div style="background-color: var(--color-neutral-200); height: 80px; border-radius: 4px; border: 1px solid var(--color-neutral-300);"></div>
              <p style="font-size: 0.75rem; margin-top: 0.5rem; font-weight: 600;">200</p>
            </div>
            <div>
              <div style="background-color: var(--color-neutral-100); height: 80px; border-radius: 4px; border: 1px solid var(--color-neutral-300);"></div>
              <p style="font-size: 0.75rem; margin-top: 0.5rem; font-weight: 600;">100</p>
            </div>
            <div>
              <div style="background-color: var(--color-neutral-white); height: 80px; border-radius: 4px; border: 1px solid var(--color-neutral-300);"></div>
              <p style="font-size: 0.75rem; margin-top: 0.5rem; font-weight: 600;">White</p>
            </div>
          </div>
        </section>
      </div>
    `,
  }),
};

