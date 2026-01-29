import type { Meta, StoryObj } from '@storybook/angular';
import { AutocompleteList } from '../lib/components/autocomplete-list/autocomplete-list';

const meta: Meta<AutocompleteList> = {
  title: 'Components/AutocompleteList',
  component: AutocompleteList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<AutocompleteList>;

export const DefaultWithResults: Story = {
  args: {
    items: [
      { main: 'Triticum aestivum', sub: 'Wheat' },
      { main: 'Oryza sativa', sub: 'Rice' },
      { main: 'Zea mays', sub: 'Maize' },
    ],
  },
};

export const AuthorityResults: Story = {
  args: {
    items: [
      { main: 'European Union', sub: 'EU' },
      { main: 'United States', sub: 'US' },
      { main: 'Japan', sub: 'JP' },
    ],
  },
};

export const EmptyState: Story = {
  args: {
    items: [],
    emptyText: 'No matches found',
    emptyHint: 'Try a different search term',
  },
};

export const LoadingState: Story = {
  args: {
    loading: true,
    items: [],
  },
};

export const LongTextStressTest: Story = {
  args: {
    items: [
      {
        main: 'Extremely long species name that should be truncated properly',
        sub: 'Very long botanical description that must not break layout',
      },
    ],
  },
};

export const SpeciesOnlyMainText: Story = {
  args: {
    items: [
      { main: 'ABCD123' },
      { main: 'EFGH456' },
      { main: 'IJKL789' },
    ],
  },
};

export const AuthorityNoIso: Story = {
  args: {
    items: [
      { main: 'Unknown Authority' },
    ],
    emptyHint: 'ISO code not available',
  },
};
