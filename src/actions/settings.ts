import { SET_SETTINGS } from "../actionTypes/settings";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { Action } from "redux";

export const setSettings = (username: string): ThunkAction<void, RootState, unknown, Action<string>> => (
  (dispatch): void => {
    dispatch({
      type: SET_SETTINGS,
      payload: {
        username,
      },
    });
  }
);
