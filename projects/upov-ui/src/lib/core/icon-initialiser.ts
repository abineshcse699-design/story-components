import {inject, provideAppInitializer} from '@angular/core';
import {IconHelper} from '../services';
import {IconRegistration} from '../models';

/**
 * Registers custom SVG icons in the MatIconRegistry.
 *
 * Can be used inside an app initializer or a component.
 * @param icons
 */
export function iconInitialiser(icons: IconRegistration[] = []) {
  const iconHelper = inject(IconHelper);
  iconHelper.registerIcons(icons);
}

/**
 * Provides an app initializer that registers custom SVG icons.
 * @param icons
 */
export function provideIconInitializer(icons: IconRegistration[] = []) {
  return provideAppInitializer(() => {
    iconInitialiser(icons);
  });
}
