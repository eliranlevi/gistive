import { combineReducers } from "redux";
import GistsReducer from "./gistsReducer";
import SettingsReducer from "./settingsReducer";

const rootReducer = combineReducers({
  settings: SettingsReducer,
  gists: GistsReducer,
});

export default rootReducer;
