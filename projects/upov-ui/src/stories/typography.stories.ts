import type {Meta, StoryObj} from '@storybook/angular';

interface TypographyArgs {
  content: string;
}

const meta: Meta<TypographyArgs> = {
  title: 'Design System/Typography',
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Sample text content',
    },
  },
};

export default meta;
type Story = StoryObj<TypographyArgs>;

/**
 * Display all heading styles (H1, H2, H3) with their respective font sizes and line heights.
 */
export const Headings: Story = {
  args: {
    content: 'The quick brown fox jumps over the lazy dog',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 2rem;">
        <div style="margin-bottom: 2rem;">
          <h1>${args.content}</h1>
          <p style="color: var(--color-neutral-600); font-size: 0.875rem; margin-top: 0.5rem;">
            H1 - Font size: var(--h1-font-size) / 1.75rem, Line height: var(--h1-line-height) / 1.2em, Weight: 700
          </p>
        </div>

        <div style="margin-bottom: 2rem;">
          <h2>${args.content}</h2>
          <p style="color: var(--color-neutral-600); font-size: 0.875rem; margin-top: 0.5rem;">
            H2 - Font size: var(--h2-font-size) / 1.5rem, Line height: var(--h2-line-height) / 1.2em, Weight: 700
          </p>
        </div>

        <div style="margin-bottom: 2rem;">
          <h3>${args.content}</h3>
          <p style="color: var(--color-neutral-600); font-size: 0.875rem; margin-top: 0.5rem;">
            H3 - Font size: var(--h3-font-size) / 1.37rem, Line height: var(--h3-line-height) / 1.2em, Weight: 700
          </p>
        </div>
      </div>
    `,
  }),
};

/**
 * Heading utility classes that can be applied to any element.
 */
export const HeadingClasses: Story = {
  args: {
    content: 'The quick brown fox jumps over the lazy dog',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 2rem;">
        <div style="margin-bottom: 2rem;">
          <p class="h1">${args.content}</p>
          <p style="color: var(--color-neutral-600); font-size: 0.875rem; margin-top: 0.5rem;">
            .h1 class - Can be applied to any element
          </p>
        </div>

        <div style="margin-bottom: 2rem;">
          <p class="h2">${args.content}</p>
          <p style="color: var(--color-neutral-600); font-size: 0.875rem; margin-top: 0.5rem;">
            .h2 class - Can be applied to any element
          </p>
        </div>

        <div style="margin-bottom: 2rem;">
          <p class="h3">${args.content}</p>
          <p style="color: var(--color-neutral-600); font-size: 0.875rem; margin-top: 0.5rem;">
            .h3 class - Can be applied to any element
          </p>
        </div>
      </div>
    `,
  }),
};

/**
 * Font weight variations available in the design system.
 */
export const FontWeights: Story = {
  args: {
    content: 'The quick brown fox jumps over the lazy dog',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 2rem;">
        <div style="margin-bottom: 1.5rem;">
          <p style="font-weight: var(--font-weight-light); font-size: 1rem;">${args.content}</p>
          <p style="color: var(--color-neutral-600); font-size: 0.875rem; margin-top: 0.5rem;">
            Light - var(--font-weight-light) / 300
          </p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <p style="font-weight: var(--font-weight-regular); font-size: 1rem;">${args.content}</p>
          <p style="color: var(--color-neutral-600); font-size: 0.875rem; margin-top: 0.5rem;">
            Regular - var(--font-weight-regular) / 400
          </p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <p style="font-weight: var(--font-weight-medium); font-size: 1rem;">${args.content}</p>
          <p style="color: var(--color-neutral-600); font-size: 0.875rem; margin-top: 0.5rem;">
            Medium - var(--font-weight-medium) / 500
          </p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <p style="font-weight: var(--font-weight-bold); font-size: 1rem;">${args.content}</p>
          <p style="color: var(--color-neutral-600); font-size: 0.875rem; margin-top: 0.5rem;">
            Bold - var(--font-weight-bold) / 700
          </p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <p style="font-weight: var(--font-weight-bolder); font-size: 1rem;">${args.content}</p>
          <p style="color: var(--color-neutral-600); font-size: 0.875rem; margin-top: 0.5rem;">
            Bolder - var(--font-weight-bolder) / 900
          </p>
        </div>
      </div>
    `,
  }),
};

/**
 * Link styles with underline decoration.
 */
export const Links: Story = {
  args: {
    content: 'This is a sample link',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 2rem;">
        <div style="margin-bottom: 1.5rem;">
          <a href="#">${args.content}</a>
          <p style="color: var(--color-neutral-600); font-size: 0.875rem; margin-top: 0.5rem;">
            Default link - Bold weight with lime green underline
          </p>
        </div>

        <div style="margin-bottom: 1.5rem; background-color: var(--color-primary-green-dark); padding: 1rem; border-radius: 8px;">
          <a href="#" class="upov-text-white">${args.content}</a>
          <p style="color: var(--color-neutral-200); font-size: 0.875rem; margin-top: 0.5rem;">
            Link on dark background
          </p>
        </div>
      </div>
    `,
  }),
};

/**
 * Screen reader only utility class that visually hides content while keeping it accessible.
 */
export const ScreenReaderOnly: Story = {
  render: () => ({
    template: `
      <div style="padding: 2rem;">
        <div style="border: 2px dashed var(--color-neutral-300); padding: 1rem; border-radius: 8px;">
          <p style="margin-bottom: 1rem;">This content is visible to everyone:</p>
          <button style="padding: 0.5rem 1rem; border: 1px solid var(--color-neutral-300); background: white; border-radius: 4px; cursor: pointer;">
            <span class="sr-only">Close dialog</span>
            <span aria-hidden="true">×</span>
          </button>
          <p style="color: var(--color-neutral-600); font-size: 0.875rem; margin-top: 1rem;">
            The "Close dialog" text is hidden visually using the .sr-only class, but screen readers will announce it.
            Only the "×" symbol is visible.
          </p>
        </div>

        <div style="margin-top: 2rem; padding: 1rem; background: var(--color-bg-light); border-radius: 8px;">
          <h4 style="margin-top: 0;">CSS Properties:</h4>
          <pre style="font-size: 0.875rem; overflow-x: auto;">position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
white-space: nowrap;
border: 0;</pre>
        </div>
      </div>
    `,
  }),
};

