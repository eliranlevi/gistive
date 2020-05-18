import { SET_SETTINGS } from "../actionTypes/settings";
import { Action } from "../store/interfaces";

export interface SettingsState {
  username?: string;
}

const defaultState = {
  username: "",
};

const SettingsReducer = (state: SettingsState = defaultState, action: Action<SettingsState>): SettingsState => {
  switch (action.type) {
    case SET_SETTINGS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default SettingsReducer;
