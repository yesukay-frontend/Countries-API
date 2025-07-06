import { createAction, props } from '@ngrx/store';
import { Country } from '../../Model/country.interface';

export const loadCountries = createAction('[Country] Load Countries');
export const loadCountriesSuccess = createAction(
  '[Country] Load Countries Success',
  props<{ countries: Country[] }>()
);
export const loadCountriesFailure = createAction(
  '[Country] Load Countries Failure',
  props<{ error: string }>()
);

export const selectCountry = createAction(
  '[Country] Select Country',
  props<{ country: Country }>()
);

export const loadCountryByCode = createAction(
  '[Country] Load Country By Code',
  props<{ code: string }>()
);

export const loadCountryByCodeSuccess = createAction(
  '[Country] Load Country By Code Success',
  props<{ country: Country }>()
);

export const setSearchQuery = createAction(
  '[Filter] Set Search Query',
  props<{ searchQuery: string }>()
);

export const setFilterRegion = createAction(
  '[Filter] Set Filter Region',
  props<{ filterRegion: string }>()
);
