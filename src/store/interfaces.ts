import { GistsState } from "../reducers/gistsReducer";
import { SettingsState } from "../reducers/settingsReducer";

export interface Action<T> {
  type: string;
  payload: Partial<T>;
}

export interface RootState {
  settings: SettingsState;
  gists: GistsState;
}
