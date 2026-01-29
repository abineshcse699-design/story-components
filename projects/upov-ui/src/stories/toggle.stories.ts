import type {Meta, StoryObj} from '@storybook/angular';
import {applicationConfig, moduleMetadata} from '@storybook/angular';
import {Toggle} from '../lib';

const meta: Meta<Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  decorators: [
    moduleMetadata({
      imports: [
        Toggle
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
A toggle button group component for selecting between multiple options.

## Usage in Consumer App

\`\`\`typescript
import { Toggle, ToggleOption } from 'upov-ui';

@Component({
  imports: [Toggle],
  template: \`
    <upov-toggle
      [ariaLabel]="'Toggle options'"
      [name]="'my-toggle'"
      [options]="options()"
      [value]="selectedValue()"
      (change)="onToggleChange($event)">
    </upov-toggle>
  \`
})
export class MyComponent {
  options = signal<ToggleOption[]>([
    { label: 'Option 1', value: 'option1', active: true },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ]);

  selectedValue = signal('option1');

  onToggleChange(option: ToggleOption) {
    console.log('Selected:', option);
    this.selectedValue.set(option.value);
  }
}
\`\`\`

### Required Imports
- \`Toggle\` from 'upov-ui'
        `,
      },
    },
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the toggle group',
    },
    name: {
      control: 'text',
      description: 'Name attribute for the underlying input element',
    },
    value: {
      control: 'text',
      description: 'Value of the toggle group',
    },
    options: {
      control: 'object',
      description: 'The toggle options to be displayed',
    },
    change: {
      action: 'change',
      description: 'Emits the selected toggle options when changed',
    }
  }
};

export default meta;
type Story = StoryObj<Toggle>;

/**
 * Basic toggle with three simple options.
 */
export const Simple: Story = {
  args: {
    ariaLabel: 'Toggle options',
    name: 'simple-toggle',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' }
    ]
  }
};

/**
 * Toggle with one option pre-selected using the active property.
 */
export const WithActiveOption: Story = {
  args: {
    ariaLabel: 'Filter status',
    name: 'status-toggle',
    options: [
      { label: 'All', value: 'all', active: true },
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' }
    ]
  }
};

/**
 * Toggle with a value set programmatically.
 */
export const WithValue: Story = {
  args: {
    ariaLabel: 'View mode',
    name: 'view-toggle',
    value: 'grid',
    options: [
      { label: 'List', value: 'list' },
      { label: 'Grid', value: 'grid' },
      { label: 'Table', value: 'table' }
    ]
  }
};


/**
 * Toggle with one active option and provided value.
 * The value takes precedence over the active option.
 */
export const WithActiveOptionAndValue: Story = {
  args: {
    ariaLabel: '',
    name: 'status-toggle',
    options: [
      { label: 'Option 1', value: 1, active: true },
      { label: 'Option 2', value: 2 },
      { label: 'Option 3', value: 3 }
    ],
    value: 2,
  }
};
