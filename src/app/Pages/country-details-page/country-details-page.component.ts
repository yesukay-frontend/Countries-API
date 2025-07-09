import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Country } from '../../Model/country.interface';
import { loadCountryByCode } from '../../State/Countries/countries.actions';
import { selectSelectedCountry } from '../../State/Countries/countries.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-details-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './country-details-page.component.html',
  styleUrl: './country-details-page.component.scss',
})
export class CountryDetailsPageComponent implements OnInit {
  country$!: Observable<Country | null>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code');
    if (code) {
      this.store.dispatch(loadCountryByCode({ code }));
    }

    this.country$ = this.store.select(selectSelectedCountry);
  }

  getNativeName(country: Country): string {
    return country.name.nativeName
      ? Object.values(country.name.nativeName)[0]?.common || ''
      : '';
  }

  getCurrencies(country: Country): string {
    return country.currencies
      ? Object.values(country.currencies)
          .map((currency) => currency.name)
          .join(', ')
      : '';
  }

  getLanguages(country: Country): string {
    return country.languages ? Object.values(country.languages).join(', ') : '';
  }
}
