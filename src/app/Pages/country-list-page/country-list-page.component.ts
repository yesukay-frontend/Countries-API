import { Component, OnInit } from '@angular/core';
import { CountryCardComponent } from '../../Components/country-card/country-card.component';
import { SearchFilterComponent } from '../../Components/search-filter/search-filter.component';
import { HeaderComponent } from '../../Components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-list-page',
  imports: [
    CountryCardComponent,
    HeaderComponent,
    SearchFilterComponent,
    CommonModule,
  ],
  templateUrl: './country-list-page.component.html',
  styleUrl: './country-list-page.component.scss',
})
export class CountryListPageComponent implements OnInit {
  countries = [
    {
      name: 'Germany',
      capital: 'Berlin',
      population: 81770900,
      region: 'Europe',
      flag: 'https://storage.googleapis.com/a1aa/image/79549708-701d-413a-b1f6-0227d7a27551.jpg',
    },
    {
      name: 'United States of America',
      capital: 'Washington, D.C.',
      population: 323947000,
      region: 'Americas',
      flag: 'https://storage.googleapis.com/a1aa/image/308390be-8df8-43ad-9560-e75d0a336fc0.jpg',
    },
    {
      name: 'Brazil',
      capital: 'Brasília',
      population: 206135893,
      region: 'Americas',
      flag: 'https://storage.googleapis.com/a1aa/image/50957fb8-bef2-4ee9-53b6-4761564a531a.jpg',
    },
  ];
  ngOnInit(): void {
    console.log('Countries: ', this.countries);
    const filterBtn = document.getElementById('regionFilterBtn')!;
    const filterList = document.getElementById('regionFilterList')!;

    filterBtn.addEventListener('click', () => {
      const expanded = filterBtn.getAttribute('aria-expanded') === 'true';
      filterBtn.setAttribute('aria-expanded', `${!expanded}`);
      filterList.classList.toggle('hidden');
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (e) => {
      if (
        !filterBtn.contains(e.target as Node) &&
        !filterList.contains(e.target as Node)
      ) {
        filterList.classList.add('hidden');
        filterBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
}
