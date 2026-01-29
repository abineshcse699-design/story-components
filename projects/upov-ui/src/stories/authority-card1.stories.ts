import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { AuthorityCard } from '../lib/components/authority-card.component/authority-card.component';

const meta: Meta<AuthorityCard> = {
  title: 'Components/Authority1Card',
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

};

export default meta;
type Story = StoryObj<AuthorityCard>;

export const Complete: Story = {
  args: {
    countryName: 'France',
    isoCode: 'FR',
    flagUrl: 'https://flagcdn.com/w80/fr.png',
    authorityName: 'Community Plant Variety Office',
    department: 'Examination Office',
    email: 'info@cpvo.europa.eu',
    phone: '+33 1 23 45 67 89',
    website: 'https://cpvo.europa.eu',
    badge: 'UPOV',
    clickable: true,
  },
};

export const NoFlag: Story = {
  args: {
    countryName: 'European Union',
    authorityName: 'CPVO',
    department: 'Plant Variety Rights',
    email: 'contact@cpvo.eu',
     phone: '+33 1 23 45 67 89',
    website: 'https://cpvo.europa.eu',
    badge: 'UPOV',
    clickable: true,
  },
};

export const NarrowContainer: Story = {
  render: () => ({
    template: `
      <div style="max-width: 360px; padding: 16px; border: 1px dashed #ccc;">
        <upov-authority-card
          countryName="Italy"
          isoCode="IT"
          flagUrl="https://flagcdn.com/w80/it.png"
          authorityName="CREA"
          department="Council for Agricultural Research"
          badge="UPOV"
          clickable="true"
        ></upov-authority-card>
      </div>
    `,
  }),
};



export const Minimal: Story = {
  args: {
    countryName: 'Germany',
    authorityName: 'Bundessortenamt',
     department: 'Plant Variety Rights',
    email: 'contact@cpvo.eu',
     phone: '+33 1 23 45 67 89',
    website: 'https://cpvo.europa.eu',
    badge: 'UPOV',
    clickable: true,
  },
};

export const GridLayout: Story = {
  render: () => ({
    template: `
      <div
        style="
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(560px, 1fr));
          gap: 16px;
          padding: 16px;
        "
      >
        <upov-authority-card
          countryName="France"
          isoCode="FR"
          flagUrl="https://flagcdn.com/w80/fr.png"
          authorityName="INOV"
          department="National Office for Plant Varieties"
             department="Plant Variety Rights"
            email="contact@cpvo.eu"
            phone="+33 1 23 45 67 89"
           website="https://cpvo.europa.eu"
          badge="UPOV"
         clickable="true"
          badge="UPOV"
        ></upov-authority-card>

        <upov-authority-card
          countryName="Germany"
          isoCode="DE"
          flagUrl="https://flagcdn.com/w80/de.png"
          authorityName="Bundessortenamt"
          department="Federal Plant Variety Office"
               email="contact@cpvo.eu"
            phone="+33 1 23 45 67 89"
           website="https://cpvo.europa.eu"
          badge="UPOV"
         clickable="true"
        ></upov-authority-card>

        <upov-authority-card
          countryName="Japan"
          isoCode="JP"
          flagUrl="https://flagcdn.com/w80/jp.png"
          authorityName="MAFF"
          department="Ministry of Agriculture, Forestry and Fisheries"
               email="contact@cpvo.eu"
            phone="+33 1 23 45 67 89"
           website="https://cpvo.europa.eu"
          badge="UPOV"
         clickable="true"
          badge="Updated"
        ></upov-authority-card>
      </div>
    `,
  }),
};
