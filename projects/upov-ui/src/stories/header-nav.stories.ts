import {applicationConfig, Meta, StoryObj} from '@storybook/angular';
import {provideRouter} from '@angular/router';
import {HeaderNav} from '../lib/components/header-nav/header-nav';

const meta: Meta<HeaderNav> = {
  title: 'Components/Header Navigation',
  component: HeaderNav,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([]),
      ],
    }),
  ],
  argTypes: {
    items: {
      description: 'Navigation items array with optional children for dropdowns',
    },
  },
  parameters: {
    docs: {
      description: {

        component: `
A desktop navigation component with dropdown menus using Angular Material.

## Features

- **Horizontal Navigation**: Clean, organized navigation links
- **Dropdown Menus**: Support for hierarchical navigation structure
- **Active Link Highlighting**: Automatically highlights the current route
- **Keyboard Accessible**: Full keyboard navigation support
- **Material Design**: Uses Angular Material Menu component
- **MOBILE IS TODO**

## Usage in Consumer App

\`\`\`typescript
import { HeaderNav, type HeaderNavigationItem } from 'upov-ui';

@Component({
  imports: [HeaderNav],
  template: '<upov-header-nav [items]="items()"></upov-header-nav>'
})
export class MyComponent {
  items = signal<HeaderNavigationItem[]>([
    { label: 'Home', link: '/' },
    {
      label: 'Products',
      link: '/products',
      children: [
        { label: 'Item 1', link: '/products/item-1' },
        { label: 'Item 2', link: '/products/item-2' },
      ]
    }
  ]);
}
\`\`\`

### Required Imports
- \`HeaderNav\` from 'upov-ui'

---
        `,
      },
    },
  },
};


export default meta;
type Story = StoryObj<HeaderNav>;

/**
 * Basic navigation with simple links.
 *
 * Displays horizontal navigation.
 */
export const Basic: Story = {

  args: {
    items: [
      {label: 'Home', link: '/'},
      {label: 'About', link: '/about'},
      {label: 'Services', link: '/services'},
      {label: 'Contact', link: '/contact'},
      {
        label: 'Varieties',
        link: '/varieties',
        children: [
          {label: 'All Varieties', link: '/varieties/all'},
          {label: 'New Varieties', link: '/varieties/new'},
          {label: 'Popular Varieties', link: '/varieties/popular'},
          {label: 'By Country', link: '/varieties/country'},
          {label: 'By Crop Type', link: '/varieties/crop'},
        ],
      },
    ],
  },

  
  render: (args) => ({
    props: args,
    template: `
      <div style="background: var(--color-primary-green-dark); padding: 2rem; min-height: 100px;">
        <upov-header-nav [items]="items"></upov-header-nav>
      </div>
    `,
  }),
};

