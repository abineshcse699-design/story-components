import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { ContactInformationComponent } from '../lib/components/contact-information.component/contact-information.component';

const meta: Meta<ContactInformationComponent> = {
  title: 'Components/ContactInformation',
  component: ContactInformationComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MatIconModule, ContactInformationComponent],
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
Reusable contact information card component.

### Usage

\`\`\`html
<upov-contact-information
  title="Authority contact"
  registrar="Plant Variety Office"
  department="Department of Agriculture"
  country="France"
  phone="+33 1 23 45 67 89"
  email="contact@authority.fr"
  website="https://authority.fr">
</upov-contact-information>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    registrar: { control: 'text' },
    department: { control: 'text' },
    country: { control: 'text' },
    phone: { control: 'text' },
    email: { control: 'text' },
    website: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<ContactInformationComponent>;

export const Default: Story = {
  args: {
    title: 'Contact information',
    registrar: 'National Plant Variety Office',
    department: 'Department of Agriculture',
    country: 'Netherlands',
    phone: '+31 20 123 4567',
    email: 'info@npvo.nl',
    website: 'https://www.npvo.nl',
  },
};

export const Minimal: Story = {
  args: {
    title: 'Contact',
    registrar: 'Plant Authority',
    country: 'Germany',
    email: 'contact@authority.de',
  },
};

export const WithoutWebsite: Story = {
  args: {
    title: 'Authority contact',
    registrar: 'Seed Certification Office',
    department: 'Ministry of Agriculture',
    country: 'Spain',
    phone: '+34 91 123 4567',
    email: 'info@seed.es',
  },
};

export const GovernmentAuthority: Story = {
  args: {
    title: 'Authority contact',
    registrar: 'Community Plant Variety Office (CPVO)',
    department: 'Legal & Technical Department',
    country: 'European Union',
    phone: '+33 4 67 04 80 00',
    email: 'info@cpvo.europa.eu',
    website: 'https://cpvo.europa.eu',
  },
};

export const EmailOnly: Story = {
  args: {
    title: 'Contact information',
    registrar: 'Plant Protection Authority',
    country: 'Italy',
    email: 'support@ppa.it',
  },
};

export const PhoneOnly: Story = {
  args: {
    title: 'Contact',
    registrar: 'Seed Registration Office',
    country: 'Poland',
    phone: '+48 22 123 45 67',
  },
};

export const WithoutRegistrar: Story = {
  args: {
    title: 'Contact information',
    department: 'Ministry of Agriculture',
    country: 'Portugal',
    phone: '+351 21 123 4567',
    email: 'agri@min-agri.pt',
    website: 'https://www.agricultura.gov.pt',
  },
};

export const LongTextValues: Story = {
  args: {
    title: 'Official authority contact information',
    registrar: 'National Office for the Protection of New Varieties of Plants',
    department: 'Department of Plant Variety Rights and International Cooperation',
    country: 'United Kingdom of Great Britain and Northern Ireland',
    phone: '+44 20 7946 0123',
    email: 'plant-varieties.international@environment-agency.gov.uk',
    website: 'https://www.gov.uk/government/organisations/plant-variety-rights-office',
  },
};

export const StickyLayoutPreview: Story = {
  args: {
    title: 'Contact information',
    registrar: 'National Seed Authority',
    department: 'Plant Variety Registration',
    country: 'France',
    phone: '+33 1 42 75 90 00',
    email: 'contact@seed-authority.fr',
    website: 'https://seed-authority.fr',
  },
  parameters: {
    layout: 'padded',
  },
};
