import {EnvironmentProviders, makeEnvironmentProviders} from '@angular/core';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MAT_BUTTON_CONFIG} from '@angular/material/button';
import {provideIconInitializer} from './core/icon-initialiser';
import {icons} from './core/icons';

export interface UpovUiConfig {
  /**
   * Custom icons to register in the MatIconRegistry.
   */
  icons?: typeof icons;
}

// Provides Material form field default options for use in app config providers
export function provideUpovUi(config: UpovUiConfig = {}): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {appearance: 'outline'},
    },
    {
      provide: MAT_BUTTON_CONFIG,
      useValue: {defaultAppearance: 'filled'},
    },
    provideIconInitializer([...icons, ...(config?.icons || [])]),
  ]);
}
