import { applyMiddleware, createStore, Store } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "../reducers";
import { RootState } from "./interfaces";

const store: Store<RootState> = createStore(
  rootReducer,
  {},
  applyMiddleware(ReduxThunk)
);

export default store;
