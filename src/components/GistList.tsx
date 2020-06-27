import React from "react";
import { Icon, Button, Text } from "react-native-elements";
import { GistListProps } from "../containers/GistListContainer";
import { Gist } from "../interfaces/common";
import GistItem from "./GistItem";
import { View } from "react-native";

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
          <View style={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
            <Text style={{ color: "#939393"}}>
              No Gists here.
            </Text>
            { !username && (
              <Text style={{ color: "#939393"}}>
                * Enter username/access token to refresh
              </Text>
            )}
            <Button
              disabled={!username}
              titleStyle={{ color: "#939393" }}
              type="clear"
              title="Hit to refresh"
              iconRight
              onPress={getGists}
              icon={<Icon type="font-awesome" name="refresh" style={{ paddingLeft: 10}} color="#939393" />}
            />
          </View>
        )}
    </>
  );
};

export default GistList;
