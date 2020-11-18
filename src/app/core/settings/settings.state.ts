import { AppState } from '../core.state';

export interface SettingsState {
  theme: string;
}

export const initialState: SettingsState = {
  theme: 'light-theme'
};

export interface State extends AppState {
  settings: SettingsState;
}
