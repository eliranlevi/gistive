import React from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";
import { SettingsProps } from "../containers/SettingsContainer";
import StylesConsts from "../styles/consts";

const Settings = ({
  username,
  token,
  setToken,
  setUsername,
}: SettingsProps): JSX.Element => (
  <View>
    <Input label="Username"
           defaultValue={username}
           placeholder="Enter username"
           onChangeText={(username): void => setUsername(username)}
           inputContainerStyle={{ borderBottomColor: StylesConsts.appColorMain }} />
    <Input label="Access Token"
           defaultValue={token}
           placeholder="Enter access token"
           onChangeText={(token): void => setToken(token)}
           inputContainerStyle={{ borderBottomColor: StylesConsts.appColorMain }} />
  </View>
);

export default Settings;
