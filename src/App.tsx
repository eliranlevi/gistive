import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import GistListContainer from "./containers/GistListContainer";
import { Provider } from "react-redux";
import store from "./store";
import StylesConsts from "./styles/consts";
import { Header, Icon } from "react-native-elements";
import SettingsContainer from "./containers/SettingsContainer";
import createRouter from "./modules/Router/Router";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginStart: StylesConsts.rootMarginSide,
    marginEnd: StylesConsts.rootMarginSide,
    marginVertical: 10,
  },
});

const { Router, Link, routerConnect } = createRouter();

export default routerConnect(function App({ _currentRoute }: any): JSX.Element {
  const settings = (
    _currentRoute?.displayName === SettingsContainer.displayName
    ? <Link to={GistListContainer}><Icon name="arrow-back" color="#ffffff"></Icon></Link>
    : <Link to={SettingsContainer}><Icon name="settings" color="#ffffff"></Icon></Link>
  );

  return (
    <Provider store={store}>
      <Header
        leftComponent={settings}
        centerComponent={{ text: "Gistive", style: { fontSize: 20, fontWeight: "500", color: "#ffffff" } }}
        barStyle="light-content"
        containerStyle={{
          backgroundColor: "#454ADE",
          paddingVertical: 10,
        }}
      />
      <SafeAreaView style={styles.container}>
        <Router>
          <SettingsContainer />
          <GistListContainer />
        </Router>
      </SafeAreaView>
    </Provider>
  );
});
