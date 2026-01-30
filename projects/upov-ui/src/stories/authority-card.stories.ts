import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { AuthorityCard } from '../lib/components/authority-card/authority-card';

/**
 * Storybook configuration for AuthorityCard component
 */
const meta: Meta<AuthorityCard> = {
  title: 'Components/AuthorityCard',
  component: AuthorityCard,
  decorators: [
    moduleMetadata({
      imports: [AuthorityCard],
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
A card component used to display plant variety protection authority information,
including country, flag, contact details, and protection coverage.

## Usage in Consumer App

\`\`\`typescript
import { AuthorityCard } from 'upov-ui';

@Component({
  imports: [AuthorityCard],
  template: \`
    <upov-authority-card
      [countryName]="'France'"
      [countryIso]="'FR'"
      [flagUrl]="'https://flagcdn.com/w80/fr.png'"
      [authorityName]="'INOV'"
      [department]="'National Office for Plant Varieties'"
      [phone]="'+33 1 23 45 67 89'"
      [email]="'contact@inov.fr'"
      [website]="'https://www.inov.fr'"
      [coverageType]="'All genera and species'"
      [memberSince]="'1961'"
    ></upov-authority-card>
  \`
})
export class MyComponent {}
\`\`\`

### Required Imports
- \`AuthorityCard\` from 'upov-ui'
        `,
      },
    },
  },
  argTypes: {
    countryName: {
      control: 'text',
      description: 'Country name',
    },
    countryIso: {
      control: 'text',
      description: 'ISO country code',
    },
    flagUrl: {
      control: 'text',
      description: 'URL to the country flag image',
    },
    authorityName: {
      control: 'text',
      description: 'Official authority name',
    },
    department: {
      control: 'text',
      description: 'Department or office name',
    },
    phone: {
      control: 'text',
      description: 'Contact phone number',
    },
    email: {
      control: 'text',
      description: 'Contact email address',
    },
    website: {
      control: 'text',
      description: 'Official authority website',
    },
    coverageType: {
      control: 'text',
      description: 'Protection coverage description',
    },
    memberSince: {
      control: 'text',
      description: 'Year the authority joined UPOV',
    },
  },
};

export default meta;
type Story = StoryObj<AuthorityCard>;

/**
 * Fully populated authority card.
 */
export const Complete: Story = {
  args: {
    countryName: 'France',
    countryIso: 'FR',
    flagUrl: 'https://flagcdn.com/w80/fr.png',
    authorityName: 'James Dovovan',
    department: 'National Office for Plant Varieties',
    phone: '+54 11 4349 1354',
    email: 'j.dovovan@australia.pvp.com',
    website: 'https://www.inov.fr',
    coverageType: 'All genera and species',
    memberSince: '1961',
  },
};

/**
 * Minimal authority card with only required information.
 */
export const Minimal: Story = {
  args: {
    countryName: 'Germany',
    countryIso: 'DE',
        flagUrl: 'https://flagcdn.com/w80/de.png',
    authorityName: 'James Dovovan',
    department: 'National Office for Plant Varieties',
    phone: '+54 11 4349 1354',
    email: 'j.dovovan@australia.pvp.com',
    website: 'https://www.inov.fr',
    coverageType: 'All genera and species',
    memberSince: '1961',
  },
  
};

/**
 * Authority card without flag image.
 */
export const NoFlag: Story = {
  args: {
    countryName: 'European Union',
    countryIso: 'EU',
         flagUrl: 'https://flagcdn.com/w80/eu.png',

    authorityName: 'James Dovovan',
    department: 'National Office for Plant Varieties',
    phone: '+54 11 4349 1354',
    email: 'j.dovovan@australia.pvp.com',
    website: 'https://www.inov.fr',
    coverageType: 'All genera and species',
    memberSince: '1961',
  },
};

/**
 * Authority card without contact details.
 */
export const NoContactDetails: Story = {
  args: {
    countryName: 'Japan',
    countryIso: 'JP',
    flagUrl: 'https://flagcdn.com/w80/jp.png',
    authorityName: 'James Dovovan',
    department: 'National Office for Plant Varieties',
    phone: '+54 11 4349 1354',
    email: 'j.dovovan@australia.pvp.com',
    website: 'https://www.inov.fr',
    coverageType: 'All genera and species',
    memberSince: '1961',
  },
};

/**
 * Authority card with long text values to demonstrate wrapping.
 */
export const LongText: Story = {
  args: {
    countryName: 'United Kingdom of Great Britain and Northern Ireland',
    countryIso: 'GB',
    flagUrl: 'https://flagcdn.com/w80/gb.png',
   authorityName: 'James Dovovan',
    department: 'National Office for Plant Varieties',
    phone: '+54 11 4349 1354',
    email: 'j.dovovan@australia.pvp.com',
    website: 'https://www.inov.fr',
    coverageType: 'All genera and species',
    memberSince: '1961',
  },
};

/**
 * Multiple authority cards displayed in a grid layout.
 */
export const GridLayout: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(520px, 1fr)); gap: 16px; padding: 16px;">
        <upov-authority-card
          countryName="France"
          countryIso="FR"
          flagUrl="https://flagcdn.com/w80/fr.png"
          authorityName="INOV"
           department= 'National Office for Plant Varieties',
    phone= '+54 11 4349 1354',
    email= 'j.dovovan@australia.pvp.com',
    website= 'https://www.inov.fr',
    coverageType= 'All genera and species',
    memberSince= '1961',
        ></upov-authority-card>

        <upov-authority-card
          countryName="Germany"
          countryIso="DE"
          flagUrl="https://flagcdn.com/w80/de.png"
          authorityName="Bundessortenamt"
          department= 'National Office for Plant Varieties',
    phone= '+54 11 4349 1354',
    email= 'j.dovovan@australia.pvp.com',
    website= 'https://www.inov.fr',
    coverageType= 'All genera and species',
    memberSince= '1961',
        ></upov-authority-card>

        <upov-authority-card
          countryName="Japan"
          countryIso="JP"
          flagUrl="https://flagcdn.com/w80/jp.png"
          authorityName="MAFF"
           department= 'National Office for Plant Varieties',
    phone= '+54 11 4349 1354',
    email= 'j.dovovan@australia.pvp.com',
    website= 'https://www.inov.fr',
    coverageType= 'All genera and species',
    memberSince= '1961',
        ></upov-authority-card>
      </div>
    `,
  }),
};

/**
 * Authority card in a narrow container.
 */
export const NarrowContainer: Story = {
  render: () => ({
    template: `
      <div style="max-width: 660px; padding: 16px; border: 1px dashed #ccc;">
        <upov-authority-card
          countryName="Italy"
          countryIso="IT"
          flagUrl="https://flagcdn.com/w80/it.png"
          authorityName="CREA"
         department= 'National Office for Plant Varieties',
    phone= '+54 11 4349 1354',
    email= 'j.dovovan@australia.pvp.com',
    website= 'https://www.inov.fr',
    coverageType= 'All genera and species',
    memberSince= '1961',
        ></upov-authority-card>
      </div>
    `,
  }),
};
