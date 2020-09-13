import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { SET_GISTS, SET_SELECTED_GIST } from "../actionTypes/gists";
import { Gist } from "../interfaces/common";
import { getUsername } from "../selectors/common";
import { callGetGists } from "../utils/ApiUtils";
import { RootState } from "../store/interfaces";

export const getGists = (): ThunkAction<void, RootState, unknown, Action<string>> => (
  async (dispatch, getState): Promise<void> => {
    try {
      const gistsResponse = await callGetGists(getUsername(getState()));
      const gists = await gistsResponse.json();

      dispatch({
        type: SET_GISTS,
        payload: gists.map((g: Gist): Gist => ({
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

export const setSelectedGist = (gist: Gist): ThunkAction<void, RootState, unknown, Action<string>> => (
  (dispatch): void => {
    dispatch({
      type: SET_SELECTED_GIST,
      payload: gist.id,
    });
  }
);

