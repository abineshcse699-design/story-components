// ===============================
// genie-species-card.stories.ts
// ===============================
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { GenieSpeciesCardComponent } from '../lib/components/genie-specie-card/genie-specie-card';

const meta: Meta<GenieSpeciesCardComponent> = {
  title: 'Components/GenieSpeciesCard',
  component: GenieSpeciesCardComponent,
  decorators: [
    moduleMetadata({
      imports: [GenieSpeciesCardComponent],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<GenieSpeciesCardComponent>;

export const Complete: Story = {
  args: {
    upovCode: 'TOMAT',
    botanicalName: 'Solanum lycopersicum',
    family: 'Solanaceae',
    cropType: 'Vegetable',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg',
    updated: true,
  },
};

export const Minimal: Story = {
  args: {
    upovCode: 'WHEAT',
    botanicalName: 'Triticum aestivum',
     family: 'Solanaceae',
    cropType: 'Vegetable',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg',
    updated: true,
  },
};

export const NoImage: Story = {
  args: {
    upovCode: 'RICE',
    botanicalName: 'Oryza sativa',
    family: 'Solanaceae',
    cropType: 'Vegetable',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg',
    updated: true,
  },
};

export const LongText: Story = {
  args: {
    upovCode: 'ORNMTL',
    botanicalName:
      'Chrysanthemum × morifolium (Ramat.) Hemsl. ex Hemsl.',
    family: 'Asteraceae with a very very long family name',
    cropType: 'Ornamental flowering plant grown worldwide',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/3/3b/Chrysanthemum.jpg',
  },
};

export const GridLayout: Story = {
  render: () => ({
    template: `
      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(380px,1fr)); gap:16px;">
        <genie-species-card
          upovCode="TOMAT"
          botanicalName="Solanum lycopersicum"
          family="Solanaceae"
          cropType="Vegetable"
          [updated]="true"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg">
        </genie-species-card>

        <genie-species-card
          upovCode="RICE"
          botanicalName="Oryza sativa"
          family="Poaceae"
          cropType="Cereal">
        </genie-species-card>

        <genie-species-card
          upovCode="WHEAT"
          botanicalName="Triticum aestivum"
          family="Poaceae"
          cropType="Cereal"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/6/6f/Wheat_close-up.JPG">
        </genie-species-card>
      </div>
    `,
  }),
};
