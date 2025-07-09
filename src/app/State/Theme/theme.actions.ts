import { createAction, props } from '@ngrx/store';

export const toggleTheme = createAction('[Theme] Toggle');
export const setTheme = createAction(
  '[Theme] Set',
  props<{ theme: 'light' | 'dark' }>()
);
