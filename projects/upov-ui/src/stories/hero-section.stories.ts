import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {Button, HeroSection, SearchInput} from '../lib';
import {MatButton} from '@angular/material/button';

const meta: Meta<HeroSection> = {
  title: 'Components/Hero Section',
  component: HeroSection,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [SearchInput, MatButton, Button],
    }),
  ],
  
  argTypes: {
    title: {
      control: 'text',
      description: 'Plain text title (signal input). Use for simple text without markup.',
    },
    subtitle: {
      control: 'text',
      description: 'Plain text subtitle (signal input). Use for simple text without markup.',
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A versatile hero section component supporting both signal inputs and content projection.

## Usage in Consumer App

### Simple Usage with Signal Inputs

\`\`\`typescript
import { HeroSection } from 'upov-ui';

@Component({
  imports: [HeroSection],
  template: \`
    <upov-hero-section
      [title]="title()"
      [subtitle]="subtitle()">
    </upov-hero-section>
  \`
})
export class MyComponent {
  title = signal('Welcome');
  subtitle = signal('Get started today');
}
\`\`\`

### Advanced Usage with Content Projection

\`\`\`typescript
import { HeroSection, SearchInput, Button } from 'upov-ui';
import { MatButton } from '@angular/material/button';

@Component({
  imports: [HeroSection, SearchInput, Button, MatButton],
  template: \`
    <upov-hero-section>
      <h1 hero-title>Welcome to <em>Our App</em></h1>
      <p hero-subtitle>Get started today</p>
      <div hero-content>
        <upov-search-input></upov-search-input>
        <button mat-button upovButton="primary">Get Started</button>
      </div>
    </upov-hero-section>
  \`
})
export class MyComponent {}
\`\`\`

### Required Imports
- \`HeroSection\` from 'upov-ui'
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<HeroSection>;

export const InputsWithSearchInput: Story = {
  name: 'Signal Inputs + Search Input',
  render: (args) => ({
    template: `
      <upov-hero-section class="gradient-bg-lime-forest gradient-opacity-30 gradient-right-left"
        [title]="title" [subtitle]="subtitle"
      >
        <p hero-subtitle>
          Search by specie or authority.<br/>
          <span class="upov-text-small upov-text-muted">You can search in English, German, Spanish or French.</span>
        </p>
        <upov-search-input [toggleOptions]="searchOptions"></upov-search-input>
      </upov-hero-section>
    `,
    props: {
      title: args.title,
      subtitle: args.subtitle,
      searchOptions: [
        {label: 'Species', value: 'species', active: true},
        {label: 'Authority', value: 'authority'},
      ],
    },
  }),
  args: {
    title: 'GENIE Database',
    subtitle: 'Search by specie or authority using the input below.',
  },
};

export const ProjectedContentWithRichMarkup: Story = {
  name: 'Content Projection + Rich Markup',
  render: () => ({
    template: `
      <upov-hero-section>
        <h1 hero-title>GENIE <em>Database</em></h1>
        <p hero-subtitle>
          Search by <strong>specie</strong> or <strong>authority</strong>.<br/>
          <span class="upov-text-small upov-text-muted">You can search in English, German, Spanish or French.</span>
        </p>
        <div hero-content>
          <button matButton upovButton="primary">Learn More</button>
        </div>
      </upov-hero-section>
    `,
  }),
};

export const SimpleInputsOnly: Story = {
  name: 'Simple Signal Inputs Only',
  args: {
    title: "Simple Hero Title",
    subtitle: "A clean subtitle without any markup"
  },
};

export const AdvancedProjectedContent: Story = {
  name: 'Advanced Content Projection + Gradients',
  render: () => ({
    template: `
      <upov-hero-section class="gradient-bg-forest-pine gradient-opacity-75">
        <h1 hero-title>
          Advanced Hero with <em>Rich</em> Content
        </h1>
        <p hero-subtitle>
          This demonstrates complex layouts with <strong>bold text</strong>,
          <em>italic text</em>, and <a href="#" style="color: #007acc;">styled links</a>.
          <br/><br/>
          <span class="upov-text-small upov-text-muted">
            Multiple paragraphs and custom styling are fully supported.
          </span>
        </p>
        <div hero-content>
          <upov-search-input [toggleOptions]="searchOptions"></upov-search-input>
          <div style="margin-top: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <button matButton upovButton="primary" type="button">Primary Action</button>
            <button matButton upovButton="secondary" type="button">Secondary Action</button>
            <button matButton upovButton="accent" type="button">Tertiary Action</button>
          </div>
        </div>
      </upov-hero-section>
    `,
    props: {
      searchOptions: [
        {label: 'Species', value: 'species', active: true},
        {label: 'Authority', value: 'authority'},
      ],
    },
  }),
};

export const InputVsProjectionComparison: Story = {
  name: 'Input Override vs Projection Demo',
  render: (args) => ({
    template: `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; min-height: 400px;">
        <!-- LEFT: Signal inputs take precedence -->
        <div>
          <h2 style="margin-bottom: 1rem; font-size: 1.25rem;">Signal Inputs (Priority)</h2>
          <upov-hero-section
            [title]="title"
            [subtitle]="subtitle"
            style="border: 2px solid #4caf50; padding: 1rem;"
          >
            <h1 hero-title>This projected title is IGNORED</h1>
            <p hero-subtitle>This projected subtitle is IGNORED</p>
            <div hero-content>
              <button matButton upovButton="primary">Action Button</button>
            </div>
          </upov-hero-section>
        </div>

        <!-- RIGHT: No inputs, so projection is used -->
        <div>
          <h2 style="margin-bottom: 1rem; font-size: 1.25rem;">Content Projection (Fallback)</h2>
          <upov-hero-section style="border: 2px solid #ff9800; padding: 1rem;">
            <h1 hero-title>This <em>projected</em> title is used</h1>
            <p hero-subtitle>This projected subtitle with <strong>markup</strong> is used</p>
            <div hero-content>
              <button matButton upovButton="accent">Different Action</button>
            </div>
          </upov-hero-section>
        </div>
      </div>
    `,
    props: {
      title: args.title,
      subtitle: args.subtitle,
    },
  }),
  args: {
    title: 'Input Title (Controls This)',
    subtitle: 'Input subtitle from Storybook controls',
  },
};
