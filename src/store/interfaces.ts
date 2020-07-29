import { SettingsState } from "../reducers/settingsReducer";
import { Gist } from "../interfaces/common";

export interface Action<T> {
  type: string;
  payload: Partial<T>;
}

export interface RootState {
  settings: SettingsState;
  gists: Gist[];
}
