import React from "react";
import { Gist } from "../interfaces/common";
import { ListItem } from "react-native-elements";

const GistItem = ({
  gist: g,
}: GistItemProps): JSX.Element => (
  <ListItem
    key={g.id}
    title={g.title}
    bottomDivider
    chevron
  />
);

interface GistItemProps {
  gist: Gist;
}

export default GistItem;
