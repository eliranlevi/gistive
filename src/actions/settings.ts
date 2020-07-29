import { SET_SETTINGS } from "../actionTypes/settings";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { SettingsState } from "../reducers/settingsReducer";
import { setAuthToken } from "../utils/ApiUtils";
import { RootState } from "../store/interfaces";
import { getSettings, storeSettings } from "../utils/Storage";

export const setSettings = ({ token, username }: SettingsState): ThunkAction<Promise<void>, RootState, unknown, Action<string>> => (
  async (dispatch): Promise<void> => {
    setAuthToken(token);

    await storeSettings({
      username,
      token,
    });

    dispatch({
      type: SET_SETTINGS,
      payload: {
        ...(token !== undefined && { token }),
        ...(username !== undefined && { username }),
      },
    });
  }
);

export const getSettingsFromStorage = (): ThunkAction<Promise<void>, RootState, unknown, Action<string>> => (
  async (dispatch): Promise<void> => {
    const storageSettings = await getSettings();

    !!storageSettings && dispatch(setSettings(storageSettings));
  }
);
