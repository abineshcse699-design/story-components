import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { EmptyStateComponent } from '../lib/components/empty-state.component/empty-state.component';

const meta: Meta<EmptyStateComponent> = {
  title: 'Components/EmptyState',
  component: EmptyStateComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, EmptyStateComponent],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A reusable empty state component used across Genie search results and filtered views.

## Usage in Consumer App

\`\`\`html
<upov-empty-state
  icon="assets/icons/flower-no-results.svg"
  title='No results found for "<strong>rose</strong>"'
  subtitle="Try searching with different keywords or adjusting your filters.">
</upov-empty-state>
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<EmptyStateComponent>;

export const NoSearchResults: Story = {
  args: {
    icon: 'assets/icons/flower-no-results.svg',
    title: 'No results found for "<strong>rose</strong>"',
    subtitle: 'Try searching with different keywords or adjusting your filters.',
  },
};

export const NoResultsAfterFiltering: Story = {
  args: {
    icon: 'assets/icons/flower-no-results.svg',
    title: 'No results match your filters',
    subtitle: 'Remove one or more filters to see available results.',
  },
};

export const WithoutIcon: Story = {
  args: {
    title: 'Nothing to show yet',
    subtitle: 'Start by entering a search term above.',
  },
};

export const EmptyBeforeSearch: Story = {
  args: {
    icon: 'assets/icons/flower-no-results.svg',
    title: 'Start your search',
    subtitle: 'Enter at least 3 characters to search for species.',
  },
};

export const NoResultsShortQuery: Story = {
  args: {
    icon: 'assets/icons/flower-no-results.svg',
    title: 'Search term too short',
    subtitle: 'Please enter at least 3 characters to see results.',
  },
};

export const NoResultsWithActiveFilters: Story = {
  args: {
    icon: 'assets/icons/flower-no-results.svg',
    title: 'No results with current filters',
    subtitle: 'Clear or change filters to broaden your results.',
  },
};

export const ErrorState: Story = {
  args: {
    icon: 'assets/icons/flower-no-results.svg',
    title: 'Something went wrong',
    subtitle: 'We couldn’t load results. Please try again later.',
  },
};
