import React, { useEffect } from "react";
import { GistListProps } from "../containers/GistListContainer";
import GistItem from "./GistItem";
import { Gist } from "../interfaces/common";
import store from "../store";
import { setSettings } from "../actions/settings";
import { getToken } from "../selectors/common";

const GistList = ({
  gists,
  getGists,
}: GistListProps): JSX.Element => {
  useEffect(() => {
    if (!getToken(store.getState())) setSettings("");
    if (!gists.length) getGists();
  });

  return (
    <>
      {gists.map((gist: Gist): JSX.Element => (
        <GistItem key={gist.id} gist={gist} />
      ))}
    </>
  );
};

export default GistList;
