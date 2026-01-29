import type {Meta, StoryObj} from '@storybook/angular';
import {applicationConfig, moduleMetadata} from '@storybook/angular';
import {SpeciesCard} from '../lib';

const meta: Meta<SpeciesCard> = {
  title: 'Components/SpeciesCard',
  component: SpeciesCard,
  decorators: [
    moduleMetadata({
      imports: [
        SpeciesCard
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
A card component designed to display species information with image, title, family, and variant details.

## Usage in Consumer App

\`\`\`typescript
import { SpeciesCard } from 'upov-ui';

@Component({
  imports: [SpeciesCard],
  template: \`
    <upov-species-card
      [speccyIcon]="'eco'"
      [speccyTitle]="'Rosa'"
      [speccyImage]="'https://example.com/image.jpg'"
      [family]="'Rosaceae'"
      [title]="'Rosa chinensis'"
      [subtitle]="'Chinese Rose'"
      [badge]="'Updated'"
      [variants]="'Old Blush, Mutabilis, and other varieties'">
    </upov-species-card>
  \`
})
export class MyComponent {}
\`\`\`

### Required Imports
- \`SpeciesCard\` from 'upov-ui'
        `,
      },
    },
  },
  argTypes: {
    speccyIcon: {
      control: 'text',
      description: 'Material icon name to display next to the species title',
    },
    speccyTitle: {
      control: 'text',
      description: 'Species title/name',
    },
    speccyImage: {
      control: 'text',
      description: 'URL of the species image',
    },
    family: {
      control: 'text',
      description: 'Botanical family name',
    },
    title: {
      control: 'text',
      description: 'Main card title',
    },
    subtitle: {
      control: 'text',
      description: 'Card subtitle',
    },
    badge: {
      control: 'text',
      description: 'Badge value (number or text) displayed in the top right',
    },
    variants: {
      control: 'text',
      description: 'Variants information (will be truncated if too long)',
    },
  },
};

export default meta;
type Story = StoryObj<SpeciesCard>;

/**
 * Complete species card with all properties filled in.
 */
export const Complete: Story = {
  args: {
    speccyIcon: 'eco',
    speccyTitle: 'Rosa',
    speccyImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=400&fit=crop',
    family: 'Rosaceae',
    title: 'Rosa chinensis',
    subtitle: 'Chinese Rose',
    badge: 'Updated',
    variants: 'Old Blush, Mutabilis, Viridiflora, and many other cultivated varieties',
  },
};

/**
 * Card with minimal required information.
 */
export const Minimal: Story = {
  args: {
    title: 'Solanum lycopersicum',
    family: 'Solanaceae',
    variants: 'Cherry, Beefsteak, Roma, Heirloom varieties',
  },
};

/**
 * Card without an image showing the fallback text.
 */
export const NoImage: Story = {
  args: {
    speccyIcon: 'local_florist',
    speccyTitle: 'Tulipa',
    speccyImage: null,
    family: 'Liliaceae',
    title: 'Tulipa gesneriana',
    subtitle: 'Garden Tulip',
    badge: 'Updated',
    variants: 'Darwin Hybrid, Triumph, Parrot, Fringed, and other decorative types',
  },
};

/**
 * Card with a high badge count.
 */
export const HighBadgeCount: Story = {
  args: {
    speccyIcon: 'yard',
    speccyTitle: 'Helianthus',
    speccyImage: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400&h=400&fit=crop',
    family: 'Asteraceae',
    title: 'Helianthus annuus',
    subtitle: 'Common Sunflower',
    badge: 'Updated',
    variants: 'Mammoth Russian, Autumn Beauty, Velvet Queen, Teddy Bear, and numerous other cultivars',
  },
};

/**
 * Card with very long text to demonstrate truncation.
 */
export const LongText: Story = {
  args: {
    speccyIcon: 'forest',
    speccyTitle: 'Quercus',
    speccyImage: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400&h=400&fit=crop',
    family: 'Fagaceae',
    title: 'Quercus robur',
    subtitle: 'English Oak, Pedunculate Oak, European Oak',
    badge: 'Updated',
    variants: 'Atropurpurea, Concordia, Fastigiata, Pendula, Argenteomarginata, Marmorata, Pectinata, Purpurascens, and many other selected cultivars including dwarf forms',
  },
};

/**
 * Card without icon.
 */
export const NoIcon: Story = {
  args: {
    speccyTitle: 'Lavandula',
    speccyImage: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400&h=400&fit=crop',
    family: 'Lamiaceae',
    title: 'Lavandula angustifolia',
    subtitle: 'English Lavender',
    badge: 'Updated',
    variants: 'Hidcote, Munstead, Royal Velvet, Melissa Lilac',
  },
};

/**
 * Card without subtitle.
 */
export const NoSubtitle: Story = {
  args: {
    speccyIcon: 'grass',
    speccyTitle: 'Fragaria',
    speccyImage: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop',
    family: 'Rosaceae',
    title: 'Fragaria × ananassa',
    badge: 'Updated',
    variants: 'Albion, Chandler, Seascape, Festival, Camarosa varieties',
  },
};

/**
 * Card without badge.
 */
export const NoBadge: Story = {

  args: {
    speccyIcon: 'spa',
    speccyTitle: 'Mentha',
    speccyImage: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400&h=400&fit=crop',
    family: 'Lamiaceae',
    title: 'Mentha × piperita',
    subtitle: 'Peppermint',
    variants: 'Black Mitcham, White Peppermint, Chocolate Mint hybrids',
  },

};

/**
 * Multiple cards in a grid layout.
 */
export const GridLayout: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); gap: 16px; padding: 16px;">
        <upov-species-card
          speccyIcon="eco"
          speccyTitle="Rosa"
          speccyImage="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=400&fit=crop"
          family="Rosaceae"
          title="Rosa chinensis"
          subtitle="Chinese Rose"
          badge="Updated"
          variants="Old Blush, Mutabilis, Viridiflora varieties"
        ></upov-species-card>

        <upov-species-card
          speccyIcon="local_florist"
          speccyTitle="Tulipa"
          family="Liliaceae"
          title="Tulipa gesneriana"
          subtitle="Garden Tulip"
          badge="Updated"
          variants="Darwin Hybrid, Triumph, Parrot types"
        ></upov-species-card>

        <upov-species-card
          speccyIcon="yard"
          speccyTitle="Helianthus"
          speccyImage="https://images.unsplash.com/photo-1597848212624-e053fd0b2e46?w=400&h=400&fit=crop"
          family="Asteraceae"
          title="Helianthus annuus"
          subtitle="Common Sunflower"
          badge="Updated"
          variants="Mammoth Russian, Autumn Beauty, Velvet Queen"
        ></upov-species-card>

        <upov-species-card
          speccyIcon="grass"
          speccyTitle="Fragaria"
          speccyImage="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop"
          family="Rosaceae"
          title="Fragaria × ananassa"
          badge="Updated"
          variants="Albion, Chandler, Seascape varieties"
        ></upov-species-card>

        <upov-species-card
          speccyIcon="spa"
          speccyTitle="Mentha"
          speccyImage="https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400&h=400&fit=crop"
          family="Lamiaceae"
          title="Mentha × piperita"
          subtitle="Peppermint"
          variants="Black Mitcham, White Peppermint hybrids"
        ></upov-species-card>

        <upov-species-card
          speccyIcon="forest"
          speccyTitle="Quercus"
          speccyImage="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400&h=400&fit=crop"
          family="Fagaceae"
          title="Quercus robur"
          subtitle="English Oak"
          badge="Updated"
          variants="Atropurpurea, Concordia, Fastigiata cultivars"
        ></upov-species-card>
      </div>
    `,
  }),
};

/**
 * Card in a narrow container to show responsive behavior.
 */
export const NarrowContainer: Story = {
  render: () => ({
    template: `
      <div style="max-width: 500px; padding: 16px; border: 1px dashed #ccc;">
        <upov-species-card
          speccyIcon="eco"
          speccyTitle="Rosa"
          speccyImage="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=400&fit=crop"
          family="Rosaceae"
          title="Rosa chinensis"
          subtitle="Chinese Rose"
          badge="12"
          variants="Old Blush, Mutabilis, Viridiflora, and many other cultivated varieties from around the world"
        ></upov-species-card>
      </div>
    `,
  }),
};

/**
 * Card with broken image URL to show fallback behavior.
 */
export const BrokenImage: Story = {

  args: {
    speccyIcon: 'bug_report',
    speccyTitle: 'Test Species',
    speccyImage: 'noImageAvailable.jpg',
    family: 'Testaceae',
    title: 'Testus brokenimgus',
    subtitle: 'Broken Image Test',
    badge: '0',
    variants: 'This demonstrates the fallback when image fails to load',

  },

};

/**
 * Card with different Material Icons.
 */
export const DifferentIcons: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 16px;">
        <upov-species-card
          speccyIcon="eco"
          speccyTitle="Eco Icon"
          family="Rosaceae"
          title="Species with eco icon"
          variants="Demonstrating eco icon"
        ></upov-species-card>

        <upov-species-card
          speccyIcon="local_florist"
          speccyTitle="Flower Icon"
          family="Asteraceae"
          title="Species with flower icon"
          variants="Demonstrating local_florist icon"
        ></upov-species-card>

        <upov-species-card
          speccyIcon="yard"
          speccyTitle="Yard Icon"
          family="Fabaceae"
          title="Species with yard icon"
          variants="Demonstrating yard icon"
        ></upov-species-card>

        <upov-species-card
          speccyIcon="forest"
          speccyTitle="Forest Icon"
          family="Pinaceae"
          title="Species with forest icon"
          variants="Demonstrating forest icon"
        ></upov-species-card>
      </div>

    `,

  }),
};

