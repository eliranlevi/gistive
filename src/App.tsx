import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Header, Overlay } from "react-native-elements";
import { Provider } from "react-redux";
import GistListContainer from "./containers/GistListContainer";
import SettingsContainer from "./containers/SettingsContainer";
import store from "./store";
import StylesConsts from "./styles/consts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlayStyles: {
    width: "80%",
    height: "35%",
    borderRadius: 30,
    display: "flex",
    justifyContent: "space-between",
    padding: 30,
  },
});

export default function App(): JSX.Element {
  const [isSettingsVisible, setSettingVisible] = useState(false);
  const toggleSettingsOverlay = (): void => setSettingVisible(!isSettingsVisible);

  return (
    <Provider store={store}>
      <Header
        leftComponent={{ icon: "settings", color: "#ffffff", onPress: toggleSettingsOverlay }}
        centerComponent={{ text: "Gistive", style: { fontSize: 20, fontWeight: "500", color: "#ffffff" } }}
        barStyle="light-content"
        containerStyle={{
          backgroundColor: StylesConsts.appColorMain,
          paddingVertical: 10,
        }}
      />
      <SafeAreaView style={styles.container}>
        <Overlay
          animated
          animationType="fade"
          fullScreen={true}
          isVisible={isSettingsVisible}
          onBackdropPress={(): void => setSettingVisible(false)}
          overlayStyle={styles.overlayStyles}>
            <SettingsContainer onSubmit={(): void => setSettingVisible(false)} />
        </Overlay>
        <GistListContainer />
      </SafeAreaView>
    </Provider>
  );
}
