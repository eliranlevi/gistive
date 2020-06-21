import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import { SettingsState } from "../reducers/settingsReducer";
import { Gist } from "../interfaces/common";

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(ReduxThunk)
);

export interface RootState {
  settings: SettingsState;
  gists: Gist[];
}

export default store;
