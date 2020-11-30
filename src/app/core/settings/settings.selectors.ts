import { createSelector, createFeatureSelector } from '@ngrx/store';

import { SettingsState } from './settings.state';
import { AppState } from '../core.state';

export const selectSettingsState = createFeatureSelector<AppState, SettingsState>('settings');

export const selectSettings = createSelector(selectSettingsState, (state: SettingsState) => state);
export const selectTheme = createSelector(selectSettings, (settings) => settings.theme);
export const selectEffectiveTheme = createSelector(selectTheme, (theme) => theme.toLowerCase());
