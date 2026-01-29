import {applicationConfig, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {Header, HeaderNav, HeaderNavigationItem} from '../lib';
import {provideRouter} from '@angular/router';

const meta: Meta<Header> = {
  title: 'Components/Header',
  component: Header,
  decorators: [
    applicationConfig({
      providers: [provideRouter([])],
    }),
    moduleMetadata({
      imports: [
        HeaderNav,
        Header,
      ],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {

        component: `
A header component with logo and optional navigation support via content projection.

## Usage in Consumer App

\`\`\`typescript
import { Header, HeaderNav, type HeaderNavigationItem } from 'upov-ui';

@Component({
  imports: [Header, HeaderNav],
  template: \`
    <upov-header [navigation]="navigation()">
      <!-- Optional: project custom navigation -->
      <upov-header-nav [items]="navigation()"></upov-header-nav>
    </upov-header>
  \`
})
export class MyComponent {
  navigation = signal<HeaderNavigationItem[]>([
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' }
  ]);
}
\`\`\`

### Required Imports
- \`Header\` from 'upov-ui'
- \`HeaderNav\` from 'upov-ui' (optional, for custom navigation)
        `,
      },
    },

  },

  argTypes: {
    navigation: {
      description: 'Navigation items array with optional children for dropdowns',
    },
  },
};


const navigation: HeaderNavigationItem[] = [
  {label: 'Home', link: '/'},
  {
    label: 'Varieties',
    link: '/varieties',
    children: [
      {label: 'All Varieties', link: '/varieties/all'},
      {label: 'New Varieties', link: '/varieties/new'},
      {label: 'Popular Varieties', link: '/varieties/popular'},
    ],
  },
  {
    label: 'Database',
    link: '/database',
    children: [
      {label: 'Search', link: '/database/search'},
      {label: 'Browse', link: '/database/browse'},
    ],
  },
  {label: 'Contact', link: '/contact'},
];




export default meta;
type Story = StoryObj<Header>;

export const Basic: Story = {
  args: {
    navigation,
  },
};


/**
 * Header without navigation
 */
export const WithoutNavigation: Story = {
  args: {
    navigation: [],
  },
};

/**
 * Full header with complex navigation via content projection
 */

export const WithNavigationViaProjection: Story = {
  args: {},
  render: () => ({
    props: {navigation},
    template: `

      <upov-header>
        <upov-header-nav [items]="navigation"></upov-header-nav>
      </upov-header>
    `,

  }),

  
};
