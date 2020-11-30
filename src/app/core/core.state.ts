import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { SettingsState } from './settings/settings.state';
import { settingsReducer } from './settings/settings.reducer';
import { SettingsEffects } from './settings/settings.effects';

export const coreReducers: ActionReducerMap<AppState> = {
  settings: settingsReducer
};

export const coreEffects = [SettingsEffects];

export const metaReducers: MetaReducer<AppState>[] = [];

export interface AppState {
  settings: SettingsState;
}
