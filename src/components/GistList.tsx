import React from "react";
import { FlatList, View } from "react-native";
import { Button, Icon, Text } from "react-native-elements";
import { GistListProps } from "../containers/GistListContainer";
import { Gist } from "../interfaces/common";
import StylesConsts from "../styles/consts";
import GistItem from "./GistItem";

const GistList = ({
  username,
  gists,
  getGists,
}: GistListProps): JSX.Element => {
  return (
    <>
      {gists.length
        ? (
          <View>
            <View style={{
              paddingStart: 25,
              paddingEnd: 10,
              paddingVertical: 10,
              marginBottom: 5,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: StylesConsts.bgLight,
            }}>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>Showing gists for {username}</Text>
              <Button icon={<Icon name="refresh" />} onPress={getGists} type="clear" />
            </View>
            <FlatList
              style={{
                height: "90%",
                marginEnd: StylesConsts.rootMarginSide,
                marginStart: StylesConsts.rootMarginSide,
              }}
              keyExtractor={(item, index): string => index.toString()}
              data={gists}
              renderItem={({ item: gist }: { item: Gist }): JSX.Element => (
                <GistItem key={gist.id} gist={gist} />
              )}
            />
          </View>
        )
        : (
          <View style={{ alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
            <Icon name="folder-open" size={100} style={{ marginBottom: 50 }} color={StylesConsts.textColor} />
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
