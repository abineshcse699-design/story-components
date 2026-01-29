import type {Meta, StoryObj} from '@storybook/angular';
import {applicationConfig, moduleMetadata} from '@storybook/angular';
import {TruncatedText} from '../lib';

const meta: Meta<TruncatedText> = {
  title: 'Components/TruncatedText',
  component: TruncatedText,
  decorators: [
    moduleMetadata({
      imports: [
        TruncatedText
      ]
    }),
    applicationConfig({
      providers: [],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A component that truncates text with ellipsis and displays the full content in a tooltip on hover.

## Usage in Consumer App

\`\`\`typescript
import { TruncatedText } from 'upov-ui';

@Component({
  imports: [TruncatedText],
  template: \`
    <!-- Using component selector -->
    <upov-truncated-text
      [disableTooltip]="false"
      [tooltipShowDelay]="400"
      [tooltipHideDelay]="100">
      This is a very long text that will be truncated
    </upov-truncated-text>

    <!-- Using attribute selector -->
    <span truncatedText tooltipShowDelay="300">
      This text will also be truncated
    </span>
  \`
})
export class MyComponent {}
\`\`\`

### Required Imports
- \`TruncatedText\` from 'upov-ui'
        `,
      },
    },
  },
  argTypes: {
    disableTooltip: {
      control: 'boolean',
      description: 'Disable the tooltip that shows the full text on hover',
      table: {
        defaultValue: {summary: 'false'},
      },
    },
    tooltipShowDelay: {
      control: 'number',
      description: 'Delay in milliseconds before showing the tooltip when hovering over the truncated text',
      table: {
        defaultValue: {summary: '400'},
      },
    },
    tooltipHideDelay: {
      control: 'number',
      description: 'Delay in milliseconds before hiding the tooltip after the mouse leaves the truncated text',
      table: {
        defaultValue: {summary: '100'},
      },
    },
  },
};

export default meta;
type Story = StoryObj<TruncatedText>;

/**
 * Default truncated text with a long string that exceeds the container width.
 * Hover over the text to see the full content in a tooltip.
 */
export const Default: Story = {
  args: {
    disableTooltip: false,
    tooltipShowDelay: 400,
    tooltipHideDelay: 100,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="width: 200px; padding: 8px;">
        <upov-truncated-text
          [disableTooltip]="disableTooltip"
          [tooltipShowDelay]="tooltipShowDelay"
          [tooltipHideDelay]="tooltipHideDelay">
          This is a very long text that will be truncated with ellipsis when it exceeds the container width
        </upov-truncated-text>
      </div>
    `,
  }),
};

/**
 * Tooltip disabled - the full text won't appear on hover.
 */
export const TooltipDisabled: Story = {
  args: {
    disableTooltip: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="width: 200px; padding: 8px;">
        <upov-truncated-text [disableTooltip]="disableTooltip">
          This is a very long text that will be truncated but won't show a tooltip when you hover over it
        </upov-truncated-text>
      </div>
    `,
  }),
};

/**
 * Custom tooltip delays - instant show (0ms) and long hide delay (2000ms).
 */
export const CustomTooltipDelays: Story = {
  args: {
    disableTooltip: false,
    tooltipShowDelay: 0,
    tooltipHideDelay: 2000,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="width: 200px; padding: 8px;">
        <upov-truncated-text
          [tooltipShowDelay]="tooltipShowDelay"
          [tooltipHideDelay]="tooltipHideDelay">
          Hover over this text to see the tooltip appear instantly and stay visible for 2 seconds after you move away
        </upov-truncated-text>
      </div>
    `,
  }),
};

/**
 * Long show delay - tooltip appears after 1 second of hovering.
 */
export const LongShowDelay: Story = {
  args: {
    tooltipShowDelay: 1000,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="width: 200px; padding: 8px;">
        <upov-truncated-text [tooltipShowDelay]="tooltipShowDelay">
          Hover for 1 second to see the tooltip with the full text content
        </upov-truncated-text>
      </div>
    `,
  }),
};

/**
 * Using the attribute selector [truncatedText] on any element.
 */
export const AttributeSelector: Story = {
  render: () => ({
    template: `
      <div style="width: 200px; padding: 8px;">
        <p>
          Lorem ipsum dolor sit amet, <span truncatedText disableTooltip style="color: #8cb3b0">
              This demonstrates using the [truncatedText] attribute selector on a div element instead of the component selector
            </span>
          consectetur adipiscing elit.
        </p>
      </div>
    `,
  }),
};

/**
 * Short text that doesn't get truncated.
 */
export const ShortText: Story = {
  render: () => ({
    template: `
      <div style="width: 200px; border: 1px solid #ccc; padding: 8px;">
        <upov-truncated-text>
          Short text
        </upov-truncated-text>
      </div>
    `,
  }),
};

/**
 * Very long text in a narrow container.
 */
export const NarrowContainer: Story = {
  render: () => ({
    template: `
      <div style="width: 100px; border: 1px solid #ccc; padding: 8px;">
        <upov-truncated-text>
          This is an extremely long text that will definitely be truncated
        </upov-truncated-text>
      </div>
    `,
  }),
};

/**
 * Wide container with long text.
 */
export const WideContainer: Story = {
  render: () => ({
    template: `
      <div style="width: 400px; border: 1px solid #ccc; padding: 8px;">
        <upov-truncated-text>
          This is a moderately long text that might or might not be truncated depending on the container width
        </upov-truncated-text>
      </div>
    `,
  }),
};

/**
 * Multiple truncated text elements in a list.
 */
export const InList: Story = {
  render: () => ({
    template: `
      <div style="width: 250px; border: 1px solid #ccc;">
        <div style="padding: 8px; border-bottom: 1px solid #eee;">
          <upov-truncated-text>
            First item with a very long description that will be truncated
          </upov-truncated-text>
        </div>
        <div style="padding: 8px; border-bottom: 1px solid #eee;">
          <upov-truncated-text>
            Second item with another long text that exceeds the width
          </upov-truncated-text>
        </div>
        <div style="padding: 8px;">
          <upov-truncated-text>
            Third item with short text
          </upov-truncated-text>
        </div>
      </div>
    `,
  }),
};

/**
 * Truncated text with custom styling applied.
 */
export const WithCustomStyling: Story = {
  render: () => ({
    template: `
      <div style="width: 200px; border: 1px solid #ccc; padding: 8px;">
        <upov-truncated-text style="font-weight: bold; color: #0066cc; font-size: 16px;">
          This is a styled truncated text that will be cut off with ellipsis
        </upov-truncated-text>
      </div>
    `,
  }),
};

/**
 * Edge case: Empty content.
 */
export const EmptyContent: Story = {
  render: () => ({
    template: `
      <div style="width: 200px; border: 1px solid #ccc; padding: 8px;">
        <upov-truncated-text></upov-truncated-text>
      </div>
    `,
  }),
};

/**
 * Responsive behavior: Resize the browser to see truncation adapt.
 */
export const ResponsiveWidth: Story = {
  render: () => ({
    template: `
      <div style="width: 50%; min-width: 100px; border: 1px solid #ccc; padding: 8px;">
        <upov-truncated-text>
          This text will truncate based on the responsive container width. Resize the browser to see it adapt.
        </upov-truncated-text>
      </div>
    `,
  }),
};
