import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTheme } from '../../State/Theme/theme.selectors';
import { toggleTheme } from '../../State/Theme/theme.actions';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  theme: 'light' | 'dark' = 'light';
  constructor(private store: Store) {
    this.store.select(selectTheme).subscribe((theme) => {
      this.theme = theme;
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
    });
  }
  toggleDarkMode() {
    this.store.dispatch(toggleTheme());
  }
}
