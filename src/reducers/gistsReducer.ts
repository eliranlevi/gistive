import { SET_GISTS } from "../actionTypes/gists";
import { Gist } from "../interfaces/common";

const GistsReducer = (state: Gist[] = [], action: any): Gist[] => {
  switch(action.type) {
    case SET_GISTS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default GistsReducer;
