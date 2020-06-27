import { SET_GISTS } from "../actionTypes/gists";
import { Gist } from "../interfaces/common";
import { Action } from "../store/interfaces";

const GistsReducer = (state: Gist[] = [], action: Action<Gist[]>): Gist[] => {
  switch(action.type) {
    case SET_GISTS: {
      return action.payload as Gist[];
    }
    default: {
      return state;
    }
  }
};

export default GistsReducer;
