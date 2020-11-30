import { Action, createReducer, on } from '@ngrx/store';
import { actionSettingsChangeTheme } from './settings.actions';
import { initialState, SettingsState } from './settings.state';

const reducer = createReducer(
  initialState,
  on(actionSettingsChangeTheme, (state, action) => ({ ...state, ...action }))
);

export function settingsReducer(state: SettingsState | undefined, action: Action): SettingsState {
  return reducer(state, action);
}
