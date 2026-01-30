import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

import { SearchBarComponent } from '../lib/components/search-bar.component/search-bar.component';

export interface ToggleOption {
  label: string;
  value: string;
  active?: boolean;
}

export interface AutocompleteOption {
  value: string;
  description?: string;
}

/* ============================================================
   META
   ============================================================ */

const meta: Meta<SearchBarComponent> = {
  title: 'Components/SearchBar',
  component: SearchBarComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        SearchBarComponent
      ]
    }),
    applicationConfig({
      providers: []
    })
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Genie-style search bar component with:

- text input
- toggle selector
- autocomplete dropdown
- toggle-specific min search length
- submit + typing events

Designed to be reusable across apps while preserving Genie UX.
        `
      }
    }
  },

  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the search input'
    },
    clearable: {
      control: 'boolean',
      description: 'Show or hide the clear button'
    },
    toggleOptions: {
      control: 'object',
      description: 'Toggle options displayed inside the search bar'
    },
    autocomplete: {
      control: 'object',
      description: 'Autocomplete suggestions'
    },
    minLengthByToggle: {
      control: 'object',
      description: 'Minimum input length required per toggle value'
    },
    searchValue: {
      action: 'searchValue',
      description: 'Emitted on every input change'
    },
    submitted: {
      action: 'submitted',
      description: 'Emitted when user submits the search'
    },
    toggleChange: {
      action: 'toggleChange',
      description: 'Emitted when toggle changes'
    },
    optionSelected: {
      action: 'optionSelected',
      description: 'Emitted when autocomplete option is selected'
    }
  }
};

export default meta;
type Story = StoryObj<SearchBarComponent>;

export const Simple: Story = {
  args: {
    placeholder: 'Search…',
    clearable: true
  }
};


export const WithToggle: Story = {
  args: {
    placeholder: 'Search species or authorities…',
    clearable: true,
    toggleOptions: [
      { label: 'Species', value: 'species', active: true },
      { label: 'Authorities', value: 'authorities' }
    ],
    minLengthByToggle: {
      species: 3,
      authorities: 2
    }
  }
};


export const WithAutocompleteStrings: Story = {
  args: {
    placeholder: 'Search crops…',
    clearable: true,
    autocomplete: [
      'Wheat',
      'Maize',
      'Rice',
      'Barley',
      'Sorghum',
      'Oats',
      'Millet'
    ]
  }
};

export const NotClearable: Story = {
  args: {
    placeholder: 'Search…',
    clearable: false,
    autocomplete: ['Alpha', 'Beta', 'Gamma']
  }
};


export const WithAutocompleteObjects: Story = {
  args: {
    placeholder: 'Search species…',
    clearable: true,
    toggleOptions: [
      { label: 'Species', value: 'species', active: true }
    ],
    minLengthByToggle: {
      species: 3
    },
    autocomplete: [
      { value: 'TOMAT', description: 'Solanum lycopersicum' },
      { value: 'WHEAT', description: 'Triticum aestivum' },
      { value: 'MAIZE', description: 'Zea mays' },
      { value: 'RICE', description: 'Oryza sativa' }
    ]
  }
};


export const FullGenieSearch: Story = {
  args: {
    placeholder: 'Search the UPOV database…',
    clearable: true,
    toggleOptions: [
      { label: 'Species', value: 'species', active: true },
      { label: 'Authorities', value: 'authorities' }
    ],
    minLengthByToggle: {
      species: 3,
      authorities: 2
    },
    autocomplete: [
      { value: 'TOMAT', description: 'Solanum lycopersicum' },
      { value: 'POTAT', description: 'Solanum tuberosum' },
      { value: 'FR', description: 'France' },
      { value: 'DE', description: 'Germany' }
    ]
  }
};


export const ToggleDefault: Story = {
  args: {
    placeholder: 'Search…',
    clearable: true,
    toggleOptions: [
      { label: 'Species', value: 'species', active: true },
      { label: 'Authorities', value: 'authorities' }
    ],
    minLengthByToggle: {
      species: 3,
      authorities: 2
    }
  }
};

export const ToggleAuthoritiesActive: Story = {
  args: {
    placeholder: 'Search authorities…',
    clearable: true,
    toggleOptions: [
      { label: 'Species', value: 'species' },
      { label: 'Authorities', value: 'authorities', active: true }
    ],
    minLengthByToggle: {
      species: 3,
      authorities: 2
    }
  }
};

export const ToggleWithAutocompleteStrings: Story = {
  args: {
    placeholder: 'Search species…',
    clearable: true,
    toggleOptions: [
      { label: 'Species', value: 'species', active: true },
      { label: 'Authorities', value: 'authorities' }
    ],
    minLengthByToggle: {
      species: 3,
      authorities: 2
    },
    autocomplete: [
      'Wheat',
      'Maize',
      'Rice',
      'Barley',
      'Sorghum'
    ]
  }
};

export const FullGenieToggleSearch: Story = {
  args: {
    placeholder: 'Search the UPOV database…',
    clearable: true,
    toggleOptions: [
      { label: 'Species', value: 'species', active: true },
      { label: 'Authorities', value: 'authorities' }
    ],
    minLengthByToggle: {
      species: 3,
      authorities: 2
    },
    autocomplete: [
      { value: 'TOMAT', description: 'Solanum lycopersicum' },
      { value: 'FR', description: 'France' },
      { value: 'DE', description: 'Germany' }
    ]
  }
};
