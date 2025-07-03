import { Component, Input } from '@angular/core';
import { Country } from '../../Model/country.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-card',
  imports: [CommonModule],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss',
})
export class CountryCardComponent {
  @Input() country!: Country;
}
