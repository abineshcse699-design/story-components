import type {Preview} from '@storybook/angular';
import {applicationConfig} from '@storybook/angular';
import {setCompodocJson} from '@storybook/addon-docs/angular';
import {provideUpovUi} from '../src/lib/upov-ui';
import docJson from '../documentation.json';

setCompodocJson(docJson);

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [
        provideUpovUi(),
      ],
    }),
  ],
  parameters: {
    backgrounds: {
      options: {
        light: {name: 'Light', value: 'var(--color-bg-light)'},
        dark: {name: 'Dark', value: 'var(--color-primary-green-dark)'},
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  initialGlobals: {
    backgrounds: {value: 'light'},
  },
};

export default preview;
