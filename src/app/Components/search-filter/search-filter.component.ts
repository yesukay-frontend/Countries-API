import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  imports: [CommonModule],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.scss',
})
export class SearchFilterComponent {
  @Output() search = new EventEmitter<string>();
  @Output() filter = new EventEmitter<string>();

  showDropdown = false;
  selectedRegion = '';
  onSearchChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.search.emit(input.value);
  }

  onRegionSelect(region: string) {
    region = region === 'All' ? '' : region;
    this.filter.emit(region);
    this.showDropdown = false;
    this.selectedRegion = region;
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
