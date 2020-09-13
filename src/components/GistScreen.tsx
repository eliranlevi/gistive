import React from "react";
import { Text } from "react-native-elements";
import { GistScreenProps } from "../containers/GistScreenContainer";

const GistScreen = ({
  gist,
}: GistScreenProps): JSX.Element => (
  <Text>
    {gist.id}
  </Text>
);

export default GistScreen;
