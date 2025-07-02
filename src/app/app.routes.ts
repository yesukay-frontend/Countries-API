import { Routes } from '@angular/router';
import { CountryListPageComponent } from './Pages/country-list-page/country-list-page.component';
import { CountryDetailsPageComponent } from './Pages/country-details-page/country-details-page.component';

export const routes: Routes = [
  { path: '', component: CountryListPageComponent },
  { path: 'country/:name', component: CountryDetailsPageComponent },
];
