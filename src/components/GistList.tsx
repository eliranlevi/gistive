import React from "react";
import { Icon, Button, Text } from "react-native-elements";
import { GistListProps } from "../containers/GistListContainer";
import { Gist } from "../interfaces/common";
import GistItem from "./GistItem";
import { View } from "react-native";
import StylesConsts from "../styles/consts";

const GistList = ({
  username,
  gists,
  getGists,
}: GistListProps): JSX.Element => {
  return (
    <>
      {gists.length
        ? (
          gists.map((gist: Gist): JSX.Element => (
            <GistItem key={gist.id} gist={gist} />
          ))
        )
        : (
          <View style={{ alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
            <Text style={{ color: StylesConsts.textColor }}>
              No Gists here.
            </Text>
            { !username && (
              <Text style={{ color: StylesConsts.textColor }}>
                Set username and hit refresh
              </Text>
            )}
            <Button
              disabled={!username}
              titleStyle={{ color: StylesConsts.textColor }}
              type="clear"
              title="Refresh"
              onPress={getGists}
              icon={<Icon type="font-awesome" name="refresh" style={{ paddingRight: 10}} color={StylesConsts.textColor} />}
            />
          </View>
        )}
    </>
  );
};

export default GistList;
