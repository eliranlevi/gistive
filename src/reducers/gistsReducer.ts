import { SET_SELECTED_GIST, SET_GISTS } from "../actionTypes/gists";
import { Gist } from "../interfaces/common";
import { Action } from "../store/interfaces";

export interface GistsState {
  list: Gist[];
  selected: string;
}

const defaultState = {
  list: [],
  selected: "",
};

const GistsReducer = (state = defaultState, action: Action<GistsState>): GistsState => {
  switch(action.type) {
    case SET_GISTS: {
      return {
        ...state,
        list: action.payload as Gist[],
      };
    }
    case SET_SELECTED_GIST: {
      return {
        ...state,
        selected: action.payload as string,
      };
    }
    default: {
      return state;
    }
  }
};

export default GistsReducer;
