import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountryState } from './countries.state';

export const selectCountryFeature =
  createFeatureSelector<CountryState>('country');

export const selectAllCountries = createSelector(
  selectCountryFeature,
  (state) => state.countries
);

export const selectSearchQuery = createSelector(
  selectCountryFeature,
  (state) => state.searchQuery
);

export const selectFilterRegion = createSelector(
  selectCountryFeature,
  (state) => state.filterRegion
);

export const selectSelectedCountry = createSelector(
  selectCountryFeature,
  (state) => state.selectedCountry
);

export const selectLoading = createSelector(
  selectCountryFeature,
  (state) => state.loading
);
