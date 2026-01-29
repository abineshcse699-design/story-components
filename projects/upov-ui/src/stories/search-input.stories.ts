import type {Meta, StoryObj} from '@storybook/angular';
import {applicationConfig, moduleMetadata} from '@storybook/angular';
import {ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';
import {SearchInput, Toggle} from '../lib';

const meta: Meta<SearchInput> = {
  title: 'Components/SearchInput',
  component: SearchInput,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        SearchInput,
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
A feature-rich search input component with autocomplete, toggles, and event handling.

## Usage in Consumer App

\`\`\`typescript
import { SearchInput, AutocompleteOption, ToggleOption } from 'upov-ui';

@Component({
  imports: [SearchInput],
  template: \`
    <upov-search-input
      [placeholder]="'Search...'"
      [autocomplete]="autocompleteOptions()"
      [toggleOptions]="toggleOptions()"
      [clereable]="true"
      [submitOnOptionSelect]="false"
      (searchValue)="onSearchValue($event)"
      (submitted)="onSubmitted($event)"
      (toggleChange)="onToggleChange($event)">
    </upov-search-input>
  \`
})
export class MyComponent {
  autocompleteOptions = signal<AutocompleteOption[]>([
    { value: 'Option 1', description: 'Description 1' },
    'Option 2',
    'Option 3'
  ]);

  toggleOptions = signal<ToggleOption[]>([
    { label: 'All', value: 'all', active: true },
    { label: 'Active', value: 'active' }
  ]);

  onSearchValue(value: string) {
    console.log('Search value:', value);
  }

  onSubmitted(value: string) {
    console.log('Submitted:', value);
  }

  onToggleChange(option: ToggleOption) {
    console.log('Toggle changed:', option);
  }
}
\`\`\`

### Required Imports
- \`SearchInput\` from 'upov-ui'
        `,
      },
    },
  },

  argTypes: {
    placeholder: {
      control: 'text',
      description: 'The placeholder text for the search input field',
    },
    autocomplete: {
      control: 'object',
      description: 'The options to be displayed in the autocomplete dropdown',
    },
    submitOnOptionSelect: {
      control: 'boolean',
      description: 'If true, the search will be submitted automatically when an option is selected',
    },
    toggleOptions: {
      control: 'object',
      description: 'The toggle options to be displayed alongside the search input',
    },
    clereable: {
      control: 'boolean',
      description: 'If true, a clear button will be displayed to clear the search input',
    },
    searchValue: {
      action: 'searchValue',
      description: 'Emits the input value while user types in the search box',
    },
    submitted: {
      action: 'submitted',
      description: 'Emits the input value when user clicks on the search button or presses enter',
    },
    toggleChange: {
      action: 'toggleChange',
      description: 'Emits the selected toggle option when changed',
    }
  }
};

export default meta;
type Story = StoryObj<SearchInput>;

/**
 * Basic search input with just a placeholder and clearable functionality.
 */
export const Simple: Story = {
  args: {
    placeholder: 'Search...',
    clereable: true
  }
};

/**
 * Search input with autocomplete options using simple string array.
 */
export const WithAutocompleteStrings: Story = {
  args: {
    placeholder: 'Search countries...',
    clereable: true,
    autocomplete: [
      'Afghanistan',
      'Albania',
      'Algeria',
      'Argentina',
      'Australia',
      'Austria',
      'Belgium',
      'Brazil',
      'Canada',
      'Chile',
      'China',
      'Colombia',
      'Denmark',
      'Egypt',
      'Finland',
      'France',
      'Germany',
      'Greece',
      'India',
      'Indonesia',
      'Ireland',
      'Italy',
      'Japan',
      'Mexico',
      'Netherlands',
      'New Zealand',
      'Norway',
      'Poland',
      'Portugal',
      'Spain',
      'Sweden',
      'Switzerland',
      'United Kingdom',
      'United States'
    ]
  }
};

/**
 * Search input with autocomplete options that include descriptions.
 */
export const WithAutocompleteObjects: Story = {
  args: {
    placeholder: 'Search programming languages...',
    clereable: true,
    autocomplete: [
      { value: 'TypeScript', description: 'Typed superset of JavaScript' },
      { value: 'JavaScript', description: 'High-level programming language' },
      { value: 'Python', description: 'General-purpose programming language' },
      { value: 'Java', description: 'Object-oriented programming language' },
      { value: 'C#', description: 'Multi-paradigm programming language' },
      { value: 'Go', description: 'Statically typed, compiled language' },
      { value: 'Rust', description: 'Systems programming language' },
      { value: 'Ruby', description: 'Dynamic, object-oriented language' },
      { value: 'PHP', description: 'Server-side scripting language' },
      { value: 'Swift', description: 'Programming language for iOS' },
      { value: 'Kotlin', description: 'Modern language for Android' },
    ]
  }
};

/**
 * Search input that submits automatically when an option is selected.
 */
export const AutoSubmitOnSelect: Story = {
  args: {
    placeholder: 'Quick search...',
    clereable: true,
    submitOnOptionSelect: true,
    autocomplete: [
      'Apple',
      'Banana',
      'Cherry',
      'Date',
      'Elderberry',
      'Fig',
      'Grape',
      'Honeydew'
    ]
  }
};

/**
 * Search input with toggle options for filtering.
 */
export const WithToggleOptions: Story = {
  args: {
    placeholder: 'Search products...',
    clereable: true,
    toggleOptions: [
      { label: 'All', value: 'all', active: true },
      { label: 'Active', value: 'active' },
      { label: 'Archived', value: 'archived' }
    ],
    autocomplete: [
      'Product A',
      'Product B',
      'Product C',
      'Product D',
      'Product E'
    ]
  }
};

/**
 * Full-featured search input with all options enabled.
 */
export const FullFeatured: Story = {
  args: {
    placeholder: 'Search users...',
    clereable: true,
    submitOnOptionSelect: false,
    toggleOptions: [
      { label: 'All Users', value: 'all', active: true },
      { label: 'Admins', value: 'admin' },
      { label: 'Members', value: 'member' },
      { label: 'Guests', value: 'guest' }
    ],
    autocomplete: [
      { value: 'John Doe', description: 'Admin - john.doe@example.com' },
      { value: 'Jane Smith', description: 'Member - jane.smith@example.com' },
      { value: 'Bob Johnson', description: 'Member - bob.j@example.com' },
      { value: 'Alice Williams', description: 'Admin - alice.w@example.com' },
      { value: 'Charlie Brown', description: 'Guest - charlie.b@example.com' },
      { value: 'Diana Prince', description: 'Admin - diana.p@example.com' },
    ]
  }
};

/**
 * Search input without clear button.
 */
export const NotClearable: Story = {
  args: {
    placeholder: 'Search...',
    clereable: false,
    autocomplete: ['Option 1', 'Option 2', 'Option 3']
  }
};

/**
 * Search input showcasing the accent-insensitive search feature.
 */
export const AccentInsensitiveSearch: Story = {
  args: {
    placeholder: 'Search cities...',
    clereable: true,
    autocomplete: [
      'São Paulo',
      'México City',
      'Zürich',
      'Montréal',
      'København',
      'Kraków',
      'Malmö',
      'Łódź',
      'Bogotá',
      'Córdoba'
    ]
  }
};

