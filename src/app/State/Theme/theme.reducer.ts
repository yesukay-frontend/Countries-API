import { createReducer, on } from '@ngrx/store';
import * as ThemeActions from './theme.actions';

export type ThemeState = 'light' | 'dark';

const getInitialTheme = (): ThemeState => {
  return (localStorage.getItem('theme') as ThemeState) || 'light';
};

export const initialState: ThemeState = getInitialTheme();

export const themeReducer = createReducer(
  initialState,
  on(ThemeActions.toggleTheme, (state) => {
    const newTheme = state === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    return newTheme;
  }),
  on(ThemeActions.setTheme, (_, { theme }) => {
    localStorage.setItem('theme', theme);
    return theme;
  })
);
