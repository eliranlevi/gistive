import { createSelector } from "reselect";
import { Gist } from "../interfaces/common";
import { SettingsState } from "../reducers/settingsReducer";
import { RootState } from "../store/interfaces";

const getSettings = (state: RootState): SettingsState => state.settings;
const getGistsState = (state: RootState): Gist[] => state.gists;

export const getToken = createSelector(getSettings, ({ token = "" }) => token);
export const getUsername = createSelector(getSettings, ({ username = "" }) => username);
export const getGists = createSelector(getGistsState, gists => gists);
export const getUsernameForGistList = createSelector([getGistsState, getUsername], (gists, username) => gists[0]?.owner.login || username);
