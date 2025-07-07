import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectAllCountries,
  selectFilterRegion,
  selectSearchQuery,
  selectLoading,
} from '../../State/Countries/countries.selectors';
import {
  loadCountries,
  setSearchQuery,
  setFilterRegion,
} from '../../State/Countries/countries.actions';
import { Observable, combineLatest, map } from 'rxjs';
import { Country } from '../../Model/country.interface';
import { SearchFilterComponent } from '../../Components/search-filter/search-filter.component';
import { HeaderComponent } from '../../Components/header/header.component';
import { CountryCardComponent } from '../../Components/country-card/country-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-list-page',
  imports: [
    SearchFilterComponent,
    HeaderComponent,
    CountryCardComponent,
    CommonModule,
  ],
  templateUrl: './country-list-page.component.html',
  styleUrls: ['./country-list-page.component.scss'],
})
export class CountryListPageComponent implements OnInit {
  countries$!: Observable<Country[]>;
  loading$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadCountries());

    this.loading$ = this.store.select(selectLoading);

    const countries$ = this.store.select(selectAllCountries);
    const search$ = this.store.select(selectSearchQuery);
    const region$ = this.store.select(selectFilterRegion);

    this.countries$ = combineLatest([countries$, search$, region$]).pipe(
      map(([countries, search, region]) =>
        countries.filter(
          (country) =>
            country.name.common.toLowerCase().includes(search.toLowerCase()) &&
            (!region || country.region === region)
        )
      )
    );
  }

  onSearch(query: string) {
    this.store.dispatch(setSearchQuery({ searchQuery: query }));
  }

  onFilter(region: string) {
    this.store.dispatch(setFilterRegion({ filterRegion: region }));
  }
}
