import { createReducer, on } from '@ngrx/store';
import * as CountryActions from './countries.actions';
import { initialCountryState } from './countries.state';

export const countryReducer = createReducer(
  initialCountryState,
  on(CountryActions.loadCountries, (state) => ({ ...state, loading: true })),
  on(CountryActions.loadCountriesSuccess, (state, { countries }) => ({
    ...state,
    countries,
    loading: false,
    error: null,
  })),
  on(CountryActions.loadCountriesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(CountryActions.selectCountry, (state, { country }) => ({
    ...state,
    selectedCountry: country,
  })),
  on(CountryActions.loadCountryByCodeSuccess, (state, { country }) => ({
    ...state,
    selectedCountry: country,
    loading: false,
  })),
  on(CountryActions.setSearchQuery, (state, { searchQuery }) => ({
    ...state,
    searchQuery,
  })),
  on(CountryActions.setFilterRegion, (state, { filterRegion }) => ({
    ...state,
    filterRegion,
  }))
);
