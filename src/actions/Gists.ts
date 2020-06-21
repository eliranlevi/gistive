import { SET_GISTS } from "../actionTypes/gists";
import { callGetGists } from "../utils/ApiUtils";
import { getUsername } from "../selectors/common";
import { Gist } from "../interfaces/common";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { Action } from "redux";

export const getGists = (): ThunkAction<void, RootState, unknown, Action<string>> => (
  async (dispatch, getState): Promise<void> => {
    try {
      const gistsResponse = await callGetGists(getUsername(getState()));
      const gists = await gistsResponse.json();

      dispatch({
        type: SET_GISTS,
        payload: gists.map((g: Gist) => ({
          ...g,
          title: Object.keys(g.files)[0],
        })),
      });
    } catch {
      dispatch({
        type: SET_GISTS,
        payload: [],
      });
    }
  }
);
