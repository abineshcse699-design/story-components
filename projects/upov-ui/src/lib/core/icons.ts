import {IconRegistration} from '../models';

/**
 * Custom icons to be registered in the MatIconRegistry.
 *
 * These icons can be used throughout the with the `<mat-icon>` component by specifying the `svgIcon` attribute.
 *
 * Example:
 * ```html
 * <mat-icon svgIcon="twitter"></mat-icon>
 * ```
 */
export const icons: IconRegistration[] = [
  {name: 'twitter', path: 'assets/icons/x-twitter.svg'},
  {name: 'linkedin', path: 'assets/icons/linkedin.svg'},
  {name: 'youtube', path: 'assets/icons/youtube.svg'},
  {name: 'envelope', path: 'assets/icons/envelope.svg'},
];
