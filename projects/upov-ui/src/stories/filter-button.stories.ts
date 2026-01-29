import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FilterButtonComponent } from '../lib/components/filter-button.component/filter-button.component';

const meta: Meta<FilterButtonComponent> = {
  title: 'Components/Filter Button',
  component: FilterButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule, MatIconModule, FilterButtonComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    active: {
      control: 'boolean',
      description: 'Whether the filter button is active',
    },
    label: {
      control: 'text',
      description: 'Label shown when filters are inactive',
    },
  },
};

export default meta;
type Story = StoryObj<FilterButtonComponent>;

export const Default: Story = {
  args: {
    active: false,
    label: 'Show filters',
  },
};

export const Active: Story = {
  args: {
    active: true,
    label: 'Show filters',
  },
};

export const CustomLabel: Story = {
  args: {
    active: false,
    label: 'Advanced filters',
  },

};

export const Interactive: Story = {
  render: (args) => ({
    props: {
      ...args,
      toggle: (state: boolean) => {
        console.log('Filter toggled:', state);
      },
    },
  }),

  args: {
    active: false,
    label: 'Show filters',
  },
};

