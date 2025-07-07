import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../Model/country.interface';

@Injectable({ providedIn: 'root' })
export class CountryApiService {
  private BASE_URL =
    'https://restcountries.com/v3.1/all?fields=name,population,region,capital,subregion,cca3,capital,currencies,languages,flags';

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.BASE_URL}`).pipe(
      catchError(() => of([])) // In real use, you'd handle/log this properly
    );
  }

  getCountryByCode(code: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.BASE_URL}/alpha/${code}`)
      .pipe(catchError(() => of([])));
  }

  getCountriesByCodes(codes: string[]): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.BASE_URL}/alpha?codes=${codes.join(',')}`)
      .pipe(catchError(() => of([])));
  }
}
