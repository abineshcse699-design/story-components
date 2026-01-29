import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { GenieSearchComponent } from '../lib/components/genie-search/genie-search'; // <-- adjust path/name if needed
const meta: Meta<GenieSearchComponent> = {
  title: 'Components/Genie inputSearch',
  component: GenieSearchComponent,

  decorators: [
    
    moduleMetadata({

      imports: [
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatButtonToggleModule,
        GenieSearchComponent
      ],

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
A reusable input search component with optional clear button, submit handling,
autocomplete support, and toggle modes.

### Example usage

\`\`\`html
<upov-input-search
  placeholder="Search species..."
  [clearable]="true"
  [autocomplete]="options"
  [toggleOptions]="toggles"
  (valueChange)="onValueChange($event)"
  (submitted)="onSubmit($event)"
  (toggleChange)="onToggleChange($event)">
</upov-input-search>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the search input',
    },
    clearable: {
      control: 'boolean',
      description: 'Shows a clear (X) button when input has value',
    },
    autocomplete: {
      control: 'object',
      description: 'Autocomplete options (string[] or objects)',
    },
    toggleOptions: {
      control: 'object',
      description: 'Toggle buttons shown next to the input',
    },
    submitOnSelect: {
      control: 'boolean',
      description: 'Automatically submit when autocomplete option is selected',
    },
    valueChange: {
      action: 'valueChange',
      description: 'Emits on every input value change',
    },
    submitted: {
      action: 'submitted',
      description: 'Emits when user submits search',
    },
    toggleChange: {
      action: 'toggleChange',
      description: 'Emits when toggle selection changes',
    },
  },
};

export default meta;
type Story = StoryObj<GenieSearchComponent>;

export const Simple: Story = {
  args: {
    placeholder: 'Search...',
    clearable: true,
  },
};

export const WithAutocompleteStrings: Story = {
  args: {
    placeholder: 'Search countries...',
    clearable: true,
    autocomplete: [
      'France',
      'Germany',
      'Italy',
      'Spain',
      'Netherlands',
      'Belgium',
      'Portugal',
    ],
  },
};

export const WithAutocompleteObjects: Story = {
  args: {
    placeholder: 'Search species...',
    clearable: true,
    autocomplete: [
      { value: 'TRIT', description: 'Triticum aestivum' },
      { value: 'ORYZ', description: 'Oryza sativa' },
      { value: 'ZEA', description: 'Zea mays' },
      { value: 'HOR', description: 'Hordeum vulgare' },
    ],
  },
};

export const AutoSubmitOnSelect: Story = {
  args: {
    placeholder: 'Quick search...',
    clearable: true,
    submitOnSelect: true,
    autocomplete: [
      'Apple',
      'Banana',
      'Cherry',
      'Date',
    ],
  },
};

export const WithToggleOptions: Story = {
  args: {
    placeholder: 'Search...',
    clearable: true,
    toggleOptions: [
      { label: 'Species', value: 'species', active: true },
      { label: 'Authorities', value: 'authorities' },
    ],
    autocomplete: [
      { value: 'TRIT', description: 'Wheat' },
      { value: 'ORYZ', description: 'Rice' },
    ],
  },
};



export const FullFeatured: Story = {
  args: {
    placeholder: 'Search GENIE...',
    clearable: true,
    submitOnSelect: false,
    toggleOptions: [
      { label: 'Species', value: 'species', active: true },
      { label: 'Authorities', value: 'authorities' },
    ],
    autocomplete: [
      { value: 'TRIT', description: 'Triticum aestivum' },
      { value: 'EPPO', description: 'European authority' },
      { value: 'US', description: 'United States' },
    ],
  },
};

export const NotClearable: Story = {
  args: {
    placeholder: 'Search...',
    clearable: false,
    autocomplete: ['Option 1', 'Option 2'],
  },
};
