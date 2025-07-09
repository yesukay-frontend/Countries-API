import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { CountryEffects } from './State/Countries/countries.effects';
import { countryReducer } from './State/Countries/countries.reducers';
import { provideHttpClient } from '@angular/common/http';
import { themeReducer } from './State/Theme/theme.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    provideState('country', countryReducer),
    provideEffects([CountryEffects]),
    provideState('theme', themeReducer),
  ],
};
