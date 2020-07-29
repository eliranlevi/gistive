import React, { useState } from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";
import { SettingsProps } from "../containers/SettingsContainer";
import StylesConsts, { ButtonConsts } from "../styles/consts";

const Settings = ({
  defaultUsername,
  defaultToken,
  setSettings,
  onSubmit,
}: SettingsProps): JSX.Element => {
  const [token, setToken] = useState(defaultToken);
  const [username, setUsername] = useState(defaultUsername);
  const onOkPress = (): void => {
    setSettings({ token, username });
    onSubmit();
  };

  return (
    <View>
      <Input label="Username"
             defaultValue={defaultUsername}
             placeholder="Enter username"
             onChangeText={(username): void => setUsername(username)}
             inputContainerStyle={{ borderBottomColor: StylesConsts.appColorMain }}
             autoCapitalize="none" />
      <Input label="Access Token"
             defaultValue={defaultToken}
             placeholder="Enter access token"
             onChangeText={(token): void => setToken(token)}
             inputContainerStyle={{ borderBottomColor: StylesConsts.appColorMain }}
             autoCapitalize="none" />
      <Button title="OK" onPress={onOkPress} buttonStyle={ButtonConsts.centerButton} />
    </View>
  );
};

export default Settings;
