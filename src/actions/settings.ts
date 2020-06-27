import { SET_SETTINGS } from "../actionTypes/settings";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { Action } from "redux";
import { SettingsState } from "../reducers/settingsReducer";
import { setAuthHeader } from "../utils/ApiUtils";

export const setSettings = ({ token, username }: SettingsState): ThunkAction<void, RootState, unknown, Action<string>> => (
  (dispatch): void => {
    dispatch({
      type: SET_SETTINGS,
      payload: {
        ...(token && { token }),
        ...(username && { username }),
      },
    });
  }
);

export const setToken = (token: string): ThunkAction<void, RootState, unknown, Action<string>> => (
  (dispatch): void => {
    setAuthHeader(token);
    dispatch(setSettings({ token }));
  }
);

export const setUsername = (username: string): ThunkAction<void, RootState, unknown, Action<string>> => (
  (dispatch): void => {
    dispatch(setSettings({ username }));
  }
);
