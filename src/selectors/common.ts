import { createSelector } from "reselect";
import { SettingsState } from "../reducers/settingsReducer";
import { RootState } from "../store";

const getSettings = (state: RootState): SettingsState => state.settings;

export const getUsername = createSelector(getSettings, ({ username = "" }) => username);
