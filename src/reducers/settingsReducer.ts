import { SET_SETTINGS } from "../actionTypes/settings";
import { Action } from "../store/interfaces";

export interface SettingsState {
  token?: string;
  username?: string;
}

const defaultState = {
  token: "",
  username: "",
};

const SettingsReducer = (state: SettingsState = defaultState, action: Action<SettingsState>): SettingsState => {
  switch (action.type) {
    case SET_SETTINGS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default SettingsReducer;
