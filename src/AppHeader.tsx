import React from "react";
import { StyleSheet } from "react-native";
import { Header, Overlay } from "react-native-elements";
import SettingsContainer from "./containers/SettingsContainer";
import StylesConsts from "./styles/consts";

const styles = StyleSheet.create({
  overlayStyles: {
    width: "80%",
    height: "35%",
    borderRadius: 30,
    display: "flex",
    justifyContent: "space-between",
    padding: 30,
  },
});

class AppHeader extends React.Component {
  state = {
    isSettingsVisible: false,
  };

  setSettingVisible = (isVisible: boolean): void => {
    this.setState({ isSettingsVisible: isVisible });
  }

  render(): JSX.Element {
    const { isSettingsVisible } = this.state;

    return (
      <>
        <Header
          leftComponent={{ icon: "settings", color: "#ffffff", onPress: (): void => this.setState(true) }}
          centerComponent={{ text: "Gistive", style: { fontSize: 20, fontWeight: "500", color: "#ffffff" } }}
          barStyle="light-content"
          containerStyle={{
            backgroundColor: StylesConsts.appColorMain,
            paddingVertical: 10,
          }}
        />
        <Overlay
          animated
          animationType="fade"
          fullScreen={true}
          isVisible={isSettingsVisible}
          onBackdropPress={(): void => this.setSettingVisible(false)}
          overlayStyle={styles.overlayStyles}>
            <SettingsContainer onSubmit={(): void => this.setSettingVisible(false)} />
        </Overlay>
      </>
    );
  }
}

export default AppHeader;
