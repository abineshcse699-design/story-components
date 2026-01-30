import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { GenieCardComponent } from '../lib/components/genie-card/genie-card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { SearchResultDto } from '../lib/components/genie-card/genie.type';

/* ---------------- BASE MOCK ---------------- */

const baseSpecies: SearchResultDto = {
  genieId: '1',
  upovCode: 'PRUNU_HYB',
  botanicalName: 'Prunus hybr.',
  commonName: '',
  family: 'Rosaceae',
  genus: '',
  region: '',
  type: 'species',
  updated: true,
   imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg',
  updatedDate: '2025-01-01',
  createdDate: '2024-01-01',
  fullDetails: { cropType: 'Fruit, Ornamental' }
};

/* ---------------- META ---------------- */

const meta: Meta<GenieCardComponent> = {
  title: 'Components / Genie / Latest updated species',
  component: GenieCardComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MatIconModule, GenieCardComponent]
    })
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
      values: [{ name: 'light', value: '#fafafa' }]
    }
  }
};

export default meta;
type Story = StoryObj<GenieCardComponent>;

/* ===============================
   GRID – 6 CARDS (FIGMA / UI MATCH)
   =============================== */
export const DefaultGrid: Story = {
  render: () => ({
    props: {
      speciesList: [
        baseSpecies,
        {
          ...baseSpecies,
          genieId: '2',
          upovCode: 'SARUC_EDU',
          botanicalName: 'Sarcomyxa edulis (Y.C. Dai, Niemelä & G.F. Qin)',
          family: 'Sarcomyxaceae',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg'

        },
        {
          ...baseSpecies,
          genieId: '3',
          upovCode: 'SARUC',
          botanicalName: 'Sarcomyxa P. Karst.',
          family: 'Sarcomyxaceae',
           imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Mango_-_single.jpg'



        },
        {
          ...baseSpecies,
          genieId: '4',
          upovCode: 'SEDUM_RUB',
          botanicalName: 'Sedum × rubrotinctum R.T. Clausen',
          family: 'Crassulaceae',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg'


        },
        {
          ...baseSpecies,
          genieId: '5',
          upovCode: 'SEDUM_VMN',
          botanicalName: 'Sedum versadense C.H. Thomps. × Sedum',
          family: 'Crassulaceae',
         imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg'
        },

        {
          ...baseSpecies,
          genieId: '6',
          upovCode: 'SEDUM_MEN',
          botanicalName: 'Sedum mendozae (Glass & Cházaro) V.V. Byalt',
          family: 'Crassulaceae',
               imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg'


        }
      ]
    },
    template: `
      <div
        style="
          max-width: 1158px;
          margin: 40px auto;
          display: grid;
          grid-template-columns: repeat(3, 370px);
          gap: 24px;
        "
      >
        <upov-genie-card
          *ngFor="let species of speciesList"
          [species]="species">
        </upov-genie-card>
      </div>
    `
  })
};



export const SixCardsNotUpdated: Story = {
  render: () => ({
    props: {
      speciesList: Array.from({ length: 6 }).map((_, i) => ({
        ...baseSpecies,
        genieId: `${i + 1}`,
        upovCode: `OLD_${i + 1}`,
        updated: false,
        imageUrl: i % 3 === 0 ? '' : baseSpecies.imageUrl
      }))
    },
    template: `
      <div style="
        max-width: 1158px;
        margin: 40px auto;
        display: grid;
        grid-template-columns: repeat(3, 370px);
        gap: 24px;
      ">
        <upov-genie-card
          *ngFor="let species of speciesList"
          [species]="species">
        </upov-genie-card>
      </div>
    `
  })
};

export const SixCardsLongNames: Story = {
  render: () => ({
    props: {
      speciesList: Array.from({ length: 6 }).map((_, i) => ({
        ...baseSpecies,
        genieId: `${i + 1}`,
        upovCode: `LONG_${i + 1}`,
        botanicalName:
          'Sedum morganianum subsp. longibotanicum × Sedum pachyphyllum var. extendedus',
        family: 'Crassulaceae',
        imageUrl: i % 2 === 0 ? '' : baseSpecies.imageUrl
      }))
    },
    template: `
      <div style="
        max-width: 1158px;
        margin: 40px auto;
        display: grid;
        grid-template-columns: repeat(3, 370px);
        gap: 24px;
      ">
        <upov-genie-card
          *ngFor="let species of speciesList"
          [species]="species">
        </upov-genie-card>
      </div>
    `
  })
};

export const SixCardsMixedImages: Story = {
  render: () => ({
    props: {
      speciesList: [
        baseSpecies,
        { ...baseSpecies, genieId: '2', upovCode: 'SOY', botanicalName: 'Glycine max', family: 'Fabaceae',  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg' },
        { ...baseSpecies, genieId: '3', upovCode: 'MAIZE', botanicalName: 'Zea mays', family: 'Poaceae', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg' },
        { ...baseSpecies, genieId: '4', upovCode: 'BARLEY', botanicalName: 'Hordeum vulgare', family: 'Poaceae',   imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg' },
        { ...baseSpecies, genieId: '5', upovCode: 'OAT', botanicalName: 'Avena sativa', family: 'Poaceae',  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg' },
        { ...baseSpecies, genieId: '6', upovCode: 'RYE', botanicalName: 'Secale cereale', family: 'Poaceae',   imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg' }
      ]
    },
    template: `
      <div style="
        max-width: 1158px;
        margin: 40px auto;
        display: grid;
        grid-template-columns: repeat(3, 370px);
        gap: 24px;
      ">
        <upov-genie-card
          *ngFor="let species of speciesList"
          [species]="species">
        </upov-genie-card>
      </div>
    `
  })
};

export const SixCardsAllImages: Story = {
  render: () => ({
    props: {
      speciesList: [
        baseSpecies,
        {
          ...baseSpecies,
          genieId: '2',
          upovCode: 'APPLE',
          botanicalName: 'Malus domestica',
          family: 'Rosaceae',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg'
        },
        {
          ...baseSpecies,
          genieId: '3',
          upovCode: 'PEACH',
          botanicalName: 'Prunus persica',
          family: 'Rosaceae',
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg'

        },
        {
          ...baseSpecies,
          genieId: '4',
          upovCode: 'CHERRY',
          botanicalName: 'Prunus avium',
          family: 'Rosaceae',
           imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg'
        },
        {
          ...baseSpecies,
          genieId: '5',
          upovCode: 'PLUM',
          botanicalName: 'Prunus domestica',
          family: 'Rosaceae',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg'
        },
        {
          ...baseSpecies,
          genieId: '6',
          upovCode: 'APRICOT',
          botanicalName: 'Prunus armeniaca',
          family: 'Rosaceae',
           imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg'
        }
      ]
    },
    template: `
      <div style="
        max-width: 1158px;
        margin: 40px auto;
        display: grid;
        grid-template-columns: repeat(3, 370px);
        gap: 24px;
      ">
        <upov-genie-card
          *ngFor="let species of speciesList"
          [species]="species">
        </upov-genie-card>
      </div>
    `
  })
};

