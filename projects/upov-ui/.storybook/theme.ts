// @ts-nocheck
import {create} from 'storybook/theming/create';
import logo from './upov-logo.svg';

export default create({
  base: 'light',
  brandTitle: 'UPOV UI',
  brandImage: logo,
  brandTarget: '_self',
  fontBase: '"Figtree", sans-serif',
  colorPrimary: '#1C4240',
  colorSecondary: '#009A6E',

  // UI
  appBg: '#F9F9F9',
  appContentBg: '#F9F9F9',
  appPreviewBg: '#F9F9F9',
  appBorderColor: '#E2E2E2',
  appBorderRadius: 8,

  // Text colors
  textColor: '#1C4240',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#727272',
  barSelectedColor: '#1C4240',
  barHoverColor: '#547F71',
  barBg: '#ffffff',
});
