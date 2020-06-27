import { createSelector } from "reselect";
import { SettingsState } from "../reducers/settingsReducer";
import { RootState } from "../store";
import { Gist } from "../interfaces/common";

const getSettings = (state: RootState): SettingsState => state.settings;
const getGistsState = (state: RootState): Gist[] => state.gists;

export const getToken = createSelector(getSettings, ({ token = "" }) => token);
export const getUsername = createSelector(getSettings, ({ username = "" }) => username);
export const getGists = createSelector(getGistsState, (gists) => gists);
