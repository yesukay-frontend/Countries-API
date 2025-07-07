import { inject, Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CountryApiService } from '../../Service/country-api.service';
import * as CountryActions from './countries.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class CountryEffects {
  constructor(
    // private actions$: Actions,
    private apiService: CountryApiService
  ) {}
  actions$ = inject(Actions);

  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountryActions.loadCountries),
      mergeMap(() =>
        this.apiService.getAllCountries().pipe(
          map((countries) =>
            CountryActions.loadCountriesSuccess({ countries })
          ),
          catchError((err) =>
            of(CountryActions.loadCountriesFailure({ error: err.message }))
          )
        )
      )
    )
  );

  loadCountryByCode$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountryActions.loadCountryByCode),
      mergeMap(({ code }) =>
        this.apiService.getCountryByCode(code).pipe(
          map(([country]) =>
            CountryActions.loadCountryByCodeSuccess({ country })
          ),
          catchError((err) =>
            of(CountryActions.loadCountriesFailure({ error: err.message }))
          )
        )
      )
    )
  );
}
