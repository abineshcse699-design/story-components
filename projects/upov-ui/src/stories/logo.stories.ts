import {Meta, StoryObj} from '@storybook/angular';
import {Logo} from '../lib';

   const meta: Meta<Logo> = {
   title: 'Components/Logo',
   component: Logo,
   tags: ['autodocs'],
   parameters: {
    docs: {
      description: {
        component: `
A responsive logo component with customizable size and color variants.

## Usage in Consumer App

\`\`\`typescript
import { Logo } from 'upov-ui';

@Component({
  imports: [Logo],
  template: \`
    <!-- Default size -->
    <upov-logo></upov-logo>

    <!-- Custom size -->
    <upov-logo [size]="100"></upov-logo>
    <upov-logo size="large"></upov-logo>

    <!-- Light variant for dark backgrounds -->
    <upov-logo light></upov-logo>
  \`
})
export class MyComponent {}
\`\`\`

### Required Imports
- \`Logo\` from 'upov-ui'
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: [80, 100, '50px', '2rem', '2em', 'small', 'medium', 'large'],
      description: 'Size of the logo. Can be a number (pixels) or one of "small", "medium", "large".',
    },

    light:
    
     {
      control: 'boolean',
       description: 'Whether to use light color variant (for dark backgrounds)',

    },

  },

};

export default meta;

type Story = StoryObj<Logo>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const CustomSize100: Story = {
  name: 'Custom Size (100px)',
  args: {
    size: 100,
  },
};

export const Light: Story = {
  name: 'Negative Variant',
  args: {
    light: true,
  },
  render: () => ({
    template: `
      <div style="background-color: var(--color-primary-green-dark); padding: 2rem;">
        <upov-logo [size]="100" light></upov-logo>
      </div>
    `,
  }),
};
