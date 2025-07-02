import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list-page',
  imports: [],
  templateUrl: './country-list-page.component.html',
  styleUrl: './country-list-page.component.scss',
})
export class CountryListPageComponent implements OnInit {
  ngOnInit(): void {
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
