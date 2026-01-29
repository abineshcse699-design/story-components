import type {Meta, StoryObj} from '@storybook/angular';

interface UtilityArgs {
  sampleText?: string;
}

const meta: Meta<UtilityArgs> = {
  title: 'Design System/Utilities',
  tags: ['autodocs'],
  argTypes: {
    sampleText: {
      control: 'text',
      description: 'Sample text for demonstrations',
    },
  },
};

export default meta;
type Story = StoryObj<UtilityArgs>;

/**
 * Text color utility classes for applying semantic and brand colors to text.
 */
export const TextColors: Story = {
  args: {
    sampleText: 'The quick brown fox jumps over the lazy dog',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 2rem;">
        <h3 style="margin-bottom: 1.5rem;">Text Color Utilities</h3>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="padding: 1rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <p class="upov-text-primary" style="margin: 0; font-size: 1.125rem;">${args.sampleText}</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
              <code>.upov-text-primary</code> - Primary brand text color
            </p>
          </div>

          <div style="padding: 1rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <p class="upov-text-secondary" style="margin: 0; font-size: 1.125rem;">${args.sampleText}</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
              <code>.upov-text-secondary</code> - Secondary text color
            </p>
          </div>

          <div style="padding: 1rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <p class="upov-text-muted" style="margin: 0; font-size: 1.125rem;">${args.sampleText}</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
              <code>.upov-text-muted</code> - Muted/subtle text color
            </p>
          </div>

          <div style="padding: 1rem; background: var(--color-primary-green-dark); border-radius: 8px;">
            <p class="upov-text-white" style="margin: 0; font-size: 1.125rem;">${args.sampleText}</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-200); margin: 0.5rem 0 0;">
              <code>.upov-text-white</code> - White text for dark backgrounds
            </p>
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * Font weight utility classes for controlling text weight.
 */
export const FontWeights: Story = {
  args: {
    sampleText: 'The quick brown fox jumps over the lazy dog',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 2rem;">
        <h3 style="margin-bottom: 1.5rem;">Font Weight Utilities</h3>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="padding: 1rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <p class="upov-text-light" style="margin: 0; font-size: 1.125rem;">${args.sampleText}</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
              <code>.upov-text-light</code> - Light weight (300)
            </p>
          </div>

          <div style="padding: 1rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <p class="upov-text-regular" style="margin: 0; font-size: 1.125rem;">${args.sampleText}</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
              <code>.upov-text-regular</code> - Regular weight (400)
            </p>
          </div>

          <div style="padding: 1rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <p class="upov-text-weight-medium" style="margin: 0; font-size: 1.125rem;">${args.sampleText}</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
              <code>.upov-text-weight-medium</code> - Medium weight (500)
            </p>
          </div>

          <div style="padding: 1rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <p class="upov-text-bold" style="margin: 0; font-size: 1.125rem;">${args.sampleText}</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
              <code>.upov-text-bold</code> - Bold weight (700)
            </p>
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * Text alignment utility classes for controlling text positioning.
 */
export const TextAlignment: Story = {
  args: {
    sampleText: 'The quick brown fox jumps over the lazy dog',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 2rem;">
        <h3 style="margin-bottom: 1.5rem;">Text Alignment Utilities</h3>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="padding: 1rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <p class="upov-text-left" style="margin: 0; font-size: 1.125rem;">${args.sampleText}</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
              <code>.upov-text-left</code> - Align text to the left
            </p>
          </div>

          <div style="padding: 1rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <p class="upov-text-center" style="margin: 0; font-size: 1.125rem;">${args.sampleText}</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
              <code>.upov-text-center</code> - Center align text
            </p>
          </div>

          <div style="padding: 1rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <p class="upov-text-right" style="margin: 0; font-size: 1.125rem;">${args.sampleText}</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
              <code>.upov-text-right</code> - Align text to the right
            </p>
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * Text transformation utility classes for changing text case.
 */
export const TextTransform: Story = {
  args: {
    sampleText: 'The quick brown fox jumps over the lazy dog',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 2rem;">
        <h3 style="margin-bottom: 1.5rem;">Text Transform Utilities</h3>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="padding: 1rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <p class="upov-text-uppercase" style="margin: 0; font-size: 1.125rem;">${args.sampleText}</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
              <code>.upov-text-uppercase</code> - Transform text to uppercase
            </p>
          </div>

          <div style="padding: 1rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <p class="upov-text-lowercase" style="margin: 0; font-size: 1.125rem;">${args.sampleText}</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
              <code>.upov-text-lowercase</code> - Transform text to lowercase
            </p>
          </div>

          <div style="padding: 1rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <p class="upov-text-capitalize" style="margin: 0; font-size: 1.125rem;">${args.sampleText}</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
              <code>.upov-text-capitalize</code> - Capitalize first letter of each word
            </p>
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * Text decoration and styling utility classes.
 */
export const TextStyling: Story = {
  args: {
    sampleText: 'The quick brown fox jumps over the lazy dog',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 2rem;">
        <h3 style="margin-bottom: 1.5rem;">Text Styling Utilities</h3>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="padding: 1rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <p class="upov-text-italic" style="margin: 0; font-size: 1.125rem;">${args.sampleText}</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
              <code>.upov-text-italic</code> - Italic text style
            </p>
          </div>

          <div style="padding: 1rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <p class="upov-text-underline" style="margin: 0; font-size: 1.125rem;">${args.sampleText}</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
              <code>.upov-text-underline</code> - Underlined text with brand color
            </p>
          </div>

          <div style="padding: 1rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <p class="upov-text-small" style="margin: 0; font-size: 1.125rem;">${args.sampleText}</p>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
              <code>.upov-text-small</code> - Smaller font size (0.6em)
            </p>
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * White-space control utility classes.
 */
export const WhiteSpace: Story = {
  render: () => ({
    template: `
      <div style="padding: 2rem;">
        <h3 style="margin-bottom: 1.5rem;">White Space Utilities</h3>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="padding: 1rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <div style="width: 300px; border: 2px dashed var(--color-neutral-300); padding: 0.5rem;">
              <p class="upov-text-wrap" style="margin: 0;">
                This is a very long sentence that will wrap normally when it reaches the edge of the container.
              </p>
            </div>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
              <code>.upov-text-wrap</code> - Normal wrapping behavior (white-space: normal)
            </p>
          </div>

          <div style="padding: 1rem; background: white; border-radius: 8px; border: 1px solid var(--color-neutral-200);">
            <div style="width: 300px; border: 2px dashed var(--color-neutral-300); padding: 0.5rem; overflow-x: auto;">
              <p class="upov-text-nowrap" style="margin: 0;">
                This is a very long sentence that will not wrap and will overflow the container instead.
              </p>
            </div>
            <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
              <code>.upov-text-nowrap</code> - Prevent text wrapping (white-space: nowrap)
            </p>
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * Gradient background utility classes with customizable opacity and direction.
 */
export const GradientBackgrounds: Story = {
  render: () => ({
    template: `
      <div style="padding: 2rem;">
        <h3 style="margin-bottom: 1.5rem;">Gradient Background Utilities</h3>

        <div style="margin-bottom: 2rem;">
          <h4 style="margin-bottom: 1rem;">Base Gradients</h4>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div>
              <div class="gradient-bg-teal-lime" style="height: 120px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                <span style="font-weight: 700; font-size: 1.25rem; color: white; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">Teal to Lime</span>
              </div>
              <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
                <code>.gradient-bg-teal-lime</code> - Primary green dark to light gradient
              </p>
            </div>

            <div>
              <div class="gradient-bg-lime-forest" style="height: 120px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                <span style="font-weight: 700; font-size: 1.25rem; color: white; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">Lime to Forest</span>
              </div>
              <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
                <code>.gradient-bg-lime-forest</code> - Primary green light to bright gradient
              </p>
            </div>

            <div>
              <div class="gradient-bg-forest-pine" style="height: 120px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                <span style="font-weight: 700; font-size: 1.25rem; color: white; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">Forest to Pine</span>
              </div>
              <p style="font-size: 0.875rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
                <code>.gradient-bg-forest-pine</code> - Primary green bright to green gradient
              </p>
            </div>
          </div>
        </div>

        <div style="margin-bottom: 2rem;">
          <h4 style="margin-bottom: 1rem;">Gradient Direction Modifiers</h4>
          <p style="color: var(--color-neutral-600); margin-bottom: 1rem; font-size: 0.875rem;">
            Combine gradient backgrounds with direction classes to control gradient angle
          </p>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem;">
            <div>
              <div class="gradient-bg-teal-lime gradient-left-right" style="height: 100px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 0.875rem; color: white; font-weight: 600;">Left → Right</span>
              </div>
              <p style="font-size: 0.75rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
                <code>.gradient-left-right</code> (90deg)
              </p>
            </div>

            <div>
              <div class="gradient-bg-teal-lime gradient-right-left" style="height: 100px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 0.875rem; color: white; font-weight: 600;">Right → Left</span>
              </div>
              <p style="font-size: 0.75rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
                <code>.gradient-right-left</code> (270deg)
              </p>
            </div>

            <div>
              <div class="gradient-bg-teal-lime gradient-up-down" style="height: 100px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 0.875rem; color: white; font-weight: 600;">Up → Down</span>
              </div>
              <p style="font-size: 0.75rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
                <code>.gradient-up-down</code> (180deg)
              </p>
            </div>

            <div>
              <div class="gradient-bg-teal-lime gradient-down-up" style="height: 100px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 0.875rem; color: white; font-weight: 600;">Down → Up</span>
              </div>
              <p style="font-size: 0.75rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
                <code>.gradient-down-up</code> (0deg)
              </p>
            </div>

            <div>
              <div class="gradient-bg-teal-lime gradient-diag-45" style="height: 100px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 0.875rem; color: white; font-weight: 600;">Diagonal ↗</span>
              </div>
              <p style="font-size: 0.75rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
                <code>.gradient-diag-45</code> (45deg)
              </p>
            </div>

            <div>
              <div class="gradient-bg-teal-lime gradient-diag-135" style="height: 100px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 0.875rem; color: white; font-weight: 600;">Diagonal ↘</span>
              </div>
              <p style="font-size: 0.75rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
                <code>.gradient-diag-135</code> (-45deg)
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 style="margin-bottom: 1rem;">Gradient Opacity Modifiers</h4>
          <p style="color: var(--color-neutral-600); margin-bottom: 1rem; font-size: 0.875rem;">
            Control gradient opacity for subtle backgrounds over content. Available in 5% increments from 5% to 100% (.gradient-opacity-5, .gradient-opacity-10, etc.)
          </p>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem;">
            <div>
              <div class="gradient-bg-teal-lime gradient-opacity-5" style="height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-200); display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 0.875rem; font-weight: 600;">5% Opacity</span>
              </div>
              <p style="font-size: 0.75rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
                <code>.gradient-opacity-5</code>
              </p>
            </div>

            <div>
              <div class="gradient-bg-teal-lime gradient-opacity-20" style="height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-200); display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 0.875rem; font-weight: 600;">20% Opacity</span>
              </div>
              <p style="font-size: 0.75rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
                <code>.gradient-opacity-20</code>
              </p>
            </div>

            <div>
              <div class="gradient-bg-teal-lime gradient-opacity-50" style="height: 100px; border-radius: 8px; border: 1px solid var(--color-neutral-200); display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 0.875rem; font-weight: 600; color: white;">50% Opacity</span>
              </div>
              <p style="font-size: 0.75rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
                <code>.gradient-opacity-50</code>
              </p>
            </div>

            <div>
              <div class="gradient-bg-teal-lime gradient-opacity-75" style="height: 100px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 0.875rem; font-weight: 600; color: white;">75% Opacity</span>
              </div>
              <p style="font-size: 0.75rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
                <code>.gradient-opacity-75</code>
              </p>
            </div>

            <div>
              <div class="gradient-bg-teal-lime gradient-opacity-100" style="height: 100px; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 0.875rem; font-weight: 600; color: white;">100% Opacity</span>
              </div>
              <p style="font-size: 0.75rem; color: var(--color-neutral-600); margin: 0.5rem 0 0;">
                <code>.gradient-opacity-100</code>
              </p>
            </div>
          </div>
          <p style="color: var(--color-neutral-500); margin-top: 1rem; font-size: 0.75rem; font-style: italic;">
            Note: Classes available for every 5% increment (5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100)
          </p>
        </div>
      </div>
    `,
  }),
};

/**
 * Combining multiple utility classes for complex styling.
 */
export const CombinedUtilities: Story = {
  render: () => ({
    template: `
      <div style="padding: 2rem;">
        <h3 style="margin-bottom: 1.5rem;">Combined Utilities</h3>
        <p style="color: var(--color-neutral-600); margin-bottom: 1.5rem;">
          Utility classes can be combined to create complex styling patterns.
        </p>

        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div class="gradient-bg-teal-lime gradient-opacity-25" style="padding: 2rem; border-radius: 12px; border: 2px solid var(--color-primary-green-dark);">
            <h4 class="upov-text-primary upov-text-uppercase upov-text-center" style="margin: 0 0 1rem 0;">
              Hero Section Title
            </h4>
            <p class="upov-text-center upov-text-weight-medium" style="margin: 0;">
              This combines gradient background with text utilities
            </p>
            <p class="upov-text-center upov-text-small upov-text-muted" style="margin: 0.5rem 0 0;">
              Classes: gradient-bg-teal-lime, gradient-opacity-25, upov-text-primary, upov-text-uppercase, upov-text-center
            </p>
          </div>

          <div style="padding: 2rem; background: white; border-radius: 12px; border: 1px solid var(--color-neutral-200);">
            <p class="upov-text-primary upov-text-bold upov-text-uppercase" style="margin: 0 0 0.5rem 0;">
              Important Notice
            </p>
            <p class="upov-text-weight-medium" style="margin: 0 0 0.5rem 0;">
              This is some important content with emphasized styling.
            </p>
            <p class="upov-text-small upov-text-muted upov-text-italic" style="margin: 0;">
              Additional context in a smaller, muted font style
            </p>
          </div>

          <div class="gradient-bg-forest-pine gradient-diag-45 gradient-opacity-100" style="padding: 2rem; border-radius: 12px;">
            <h4 class="upov-text-white upov-text-center upov-text-bold" style="margin: 0 0 1rem 0;">
              Call to Action
            </h4>
            <p class="upov-text-white upov-text-center" style="margin: 0;">
              Gradient with white text, centered alignment
            </p>
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * Complete reference of all available utility classes.
 */
export const AllUtilities: Story = {
  render: () => ({
    template: `
      <div style="padding: 2rem;">
        <h2 style="margin-bottom: 2rem;">Complete Utility Class Reference</h2>

        <section style="margin-bottom: 3rem;">
          <h3 style="color: var(--color-primary-green-dark); margin-bottom: 1rem;">Text Color Classes</h3>
          <div style="background: var(--color-bg-light); padding: 1rem; border-radius: 8px;">
            <ul style="margin: 0; padding-left: 1.5rem; display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 0.5rem;">
              <li><code>.upov-text-primary</code></li>
              <li><code>.upov-text-secondary</code></li>
              <li><code>.upov-text-muted</code></li>
              <li><code>.upov-text-white</code></li>
            </ul>
          </div>
        </section>

        <section style="margin-bottom: 3rem;">
          <h3 style="color: var(--color-primary-green-dark); margin-bottom: 1rem;">Font Weight Classes</h3>
          <div style="background: var(--color-bg-light); padding: 1rem; border-radius: 8px;">
            <ul style="margin: 0; padding-left: 1.5rem; display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 0.5rem;">
              <li><code>.upov-text-light</code></li>
              <li><code>.upov-text-regular</code></li>
              <li><code>.upov-text-weight-medium</code></li>
              <li><code>.upov-text-bold</code></li>
            </ul>
          </div>
        </section>

        <section style="margin-bottom: 3rem;">
          <h3 style="color: var(--color-primary-green-dark); margin-bottom: 1rem;">Text Alignment Classes</h3>
          <div style="background: var(--color-bg-light); padding: 1rem; border-radius: 8px;">
            <ul style="margin: 0; padding-left: 1.5rem; display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 0.5rem;">
              <li><code>.upov-text-left</code></li>
              <li><code>.upov-text-center</code></li>
              <li><code>.upov-text-right</code></li>
            </ul>
          </div>
        </section>

        <section style="margin-bottom: 3rem;">
          <h3 style="color: var(--color-primary-green-dark); margin-bottom: 1rem;">Text Transform Classes</h3>
          <div style="background: var(--color-bg-light); padding: 1rem; border-radius: 8px;">
            <ul style="margin: 0; padding-left: 1.5rem; display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 0.5rem;">
              <li><code>.upov-text-uppercase</code></li>
              <li><code>.upov-text-lowercase</code></li>
              <li><code>.upov-text-capitalize</code></li>
            </ul>
          </div>
        </section>

        <section style="margin-bottom: 3rem;">
          <h3 style="color: var(--color-primary-green-dark); margin-bottom: 1rem;">Text Styling Classes</h3>
          <div style="background: var(--color-bg-light); padding: 1rem; border-radius: 8px;">
            <ul style="margin: 0; padding-left: 1.5rem; display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 0.5rem;">
              <li><code>.upov-text-italic</code></li>
              <li><code>.upov-text-underline</code></li>
              <li><code>.upov-text-small</code></li>
              <li><code>.upov-text-wrap</code></li>
              <li><code>.upov-text-nowrap</code></li>
            </ul>
          </div>
        </section>

        <section style="margin-bottom: 3rem;">
          <h3 style="color: var(--color-primary-green-dark); margin-bottom: 1rem;">Gradient Background Classes</h3>
          <div style="background: var(--color-bg-light); padding: 1rem; border-radius: 8px;">
            <ul style="margin: 0; padding-left: 1.5rem; display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 0.5rem;">
              <li><code>.gradient-bg-teal-lime</code></li>
              <li><code>.gradient-bg-lime-forest</code></li>
              <li><code>.gradient-bg-forest-pine</code></li>
            </ul>
          </div>
        </section>

        <section style="margin-bottom: 3rem;">
          <h3 style="color: var(--color-primary-green-dark); margin-bottom: 1rem;">Gradient Direction Classes</h3>
          <div style="background: var(--color-bg-light); padding: 1rem; border-radius: 8px;">
            <ul style="margin: 0; padding-left: 1.5rem; display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 0.5rem;">
              <li><code>.gradient-left-right</code></li>
              <li><code>.gradient-right-left</code></li>
              <li><code>.gradient-up-down</code></li>
              <li><code>.gradient-down-up</code></li>
              <li><code>.gradient-diag-45</code></li>
              <li><code>.gradient-diag-135</code></li>
            </ul>
          </div>
        </section>

        <section>
          <h3 style="color: var(--color-primary-green-dark); margin-bottom: 1rem;">Gradient Opacity Classes</h3>
          <p style="color: var(--color-neutral-600); margin-bottom: 0.5rem; font-size: 0.875rem;">
            Available in 5% increments from 5% to 100% (excluding 0%)
          </p>
          <div style="background: var(--color-bg-light); padding: 1rem; border-radius: 8px;">
            <ul style="margin: 0; padding-left: 1.5rem; display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 0.5rem;">
              <li><code>.gradient-opacity-5</code></li>
              <li><code>.gradient-opacity-10</code></li>
              <li><code>.gradient-opacity-15</code></li>
              <li><code>.gradient-opacity-20</code></li>
              <li><code>.gradient-opacity-25</code></li>
              <li>... (every 5%)</li>
              <li><code>.gradient-opacity-75</code></li>
              <li><code>.gradient-opacity-80</code></li>
              <li><code>.gradient-opacity-85</code></li>
              <li><code>.gradient-opacity-90</code></li>
              <li><code>.gradient-opacity-95</code></li>
              <li><code>.gradient-opacity-100</code></li>
            </ul>
          </div>
        </section>
      </div>
    `,
  }),
};

