import { createSelector } from "reselect";
import { SettingsState } from "../reducers/settingsReducer";
import { RootState } from "../store";

const getSettings = (state: RootState): SettingsState => state.settings;

export const getToken = createSelector(getSettings, ({ token = "" }) => token);
