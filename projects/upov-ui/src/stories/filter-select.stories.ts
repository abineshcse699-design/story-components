import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FilterSelect } from '../lib/components/filter-select.component/filter-select.component';

const meta: Meta<FilterSelect> = {
  title: 'Components/FilterSelect',
  component: FilterSelect,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MatSelectModule, FilterSelect],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown in the select',
    },
    multiple: {
      control: 'boolean',
      description: 'Enable multiple selection',
    },
    valueChange: {
      action: 'valueChange',
      description: 'Emits selected values',
    },
  },
};

export default meta;
type Story = StoryObj<FilterSelect>;

export const Simple: Story = {
  args: {
    placeholder: 'Family',
    options: [
      { value: 'rosaceae', label: 'Rosaceae' },
      { value: 'poaceae', label: 'Poaceae' },
      { value: 'fabaceae', label: 'Fabaceae' },
    ],
  },
};

export const WithPreselectedValues: Story = {
  args: {
    placeholder: 'Authority',
    value: ['EU', 'US'],
    options: [
      { value: 'EU', label: 'European Union' },
      { value: 'US', label: 'United States' },
      { value: 'JP', label: 'Japan' },
    ],
  },
};

export const SingleSelect: Story = {
  args: {
    placeholder: 'Crop type',
    multiple: false,
    options: [
      { value: 'fruit', label: 'Fruit' },
      { value: 'vegetable', label: 'Vegetable' },
      { value: 'ornamental', label: 'Ornamental' },
    ],
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Family',
    // disabled: true,
    options: [
      { value: 'rosaceae', label: 'Rosaceae' },
      { value: 'poaceae', label: 'Poaceae' },
    ],
  },
};

export const WithManySelected: Story = {
  args: {
    placeholder: 'Authority',
    value: ['EU', 'US', 'JP', 'CN'],
    options: [
      { value: 'EU', label: 'European Union' },
      { value: 'US', label: 'United States' },
      { value: 'JP', label: 'Japan' },
      { value: 'CN', label: 'China' },
      { value: 'BR', label: 'Brazil' },
      { value: 'AU', label: 'Australia' },
    ],
  },
};


export const EmptyOptions: Story = {
  args: {
    placeholder: 'Family',
    options: [],
  },
};




export const LargeDataset: Story = {
  args: {
    placeholder: 'Countries',
    options: Array.from({ length: 30 }, (_, i) => ({
      value: `c${i}`,
      label: `Country ${i + 1}`,
    })),
  },
};
