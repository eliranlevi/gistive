import React from "react";
import { Gist } from "../interfaces/common";
import { ListItem } from "react-native-elements";
import StylesConsts from "../styles/consts";

const GistItem = ({
  gist: g,
}: GistItemProps): JSX.Element => (
  <ListItem
    key={g.id}
    title={g.title}
    bottomDivider
    chevron
    {...!g.public && { badge: { value: "secret", badgeStyle: { backgroundColor: StylesConsts.appColorMain, borderRadius: 5}}}}
  />
);

interface GistItemProps {
  gist: Gist;
}

export default GistItem;
