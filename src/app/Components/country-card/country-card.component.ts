import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../Model/country.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-card',
  imports: [CommonModule],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss',
})
export class CountryCardComponent {
  constructor(private router: Router) {}
  @Input() country!: Country;

  openCountryDetails() {
    this.router.navigate(['country', this.country.name.common]);
  }
}
