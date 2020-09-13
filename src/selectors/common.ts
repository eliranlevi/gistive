import { createSelector } from "reselect";
import { Gist } from "../interfaces/common";
import { GistsState } from "../reducers/gistsReducer";
import { SettingsState } from "../reducers/settingsReducer";
import { RootState } from "../store/interfaces";

const getSettings = (state: RootState): SettingsState => state.settings;
const getGistsState = (state: RootState): GistsState => state.gists;

export const getToken = createSelector(getSettings, ({ token = "" }) => token);
export const getUsername = createSelector(getSettings, ({ username = "" }) => username);
export const getGists = createSelector(getGistsState, gists => gists.list);
export const getUsernameForGistList = createSelector([getGists, getUsername], (gists, username) => gists[0]?.owner.login || username);
export const getSelectedGist = createSelector(getGistsState, gists => gists.list.find(g => g.id === gists.selected) ?? {} as Gist);
