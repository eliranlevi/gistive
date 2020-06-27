import React from "react";
import { SettingsProps } from "../containers/SettingsContainer";
import { Input } from "react-native-elements";
import { View } from "react-native";

const Settings = ({
  username,
  token,
  setToken,
  setUsername,
}: SettingsProps): JSX.Element => (
  <View>
    <Input label="Username"
           defaultValue={username}
           onChangeText={(username): void => setUsername(username)} />
    <Input label="Access Token"
           defaultValue={token}
           onChangeText={(token): void => setToken(token)} />
  </View>
);

export default Settings;
