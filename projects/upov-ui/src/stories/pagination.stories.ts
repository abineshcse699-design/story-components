import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { PaginationComponent } from '../lib/components/pagination/pagination';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

const meta: Meta<PaginationComponent> = {
  title: 'Components/Pagination',
  component: PaginationComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        PaginationComponent
      ],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    currentPage: { control: 'number' },
    totalItems: { control: 'number' },
    itemsPerPage: { control: 'number' },
    pageChange: { action: 'pageChange' },
  },
};

export default meta;
type Story = StoryObj<PaginationComponent>;

export const Basic: Story = {
  args: {
    currentPage: 1,
    totalItems: 120,
    itemsPerPage: 15,
  },
};

export const MiddlePage: Story = {
  args: {
    currentPage: 4,
    totalItems: 120,
    itemsPerPage: 15,
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 8,
    totalItems: 120,
    itemsPerPage: 15,
  },
};

export const FewPages: Story = {
  args: {
    currentPage: 1,
    totalItems: 30,
    itemsPerPage: 15,
  },
};
