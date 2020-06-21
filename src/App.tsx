import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import GistListContainer from "./containers/GistListContainer";
import { Provider } from "react-redux";
import store from "./store";
import StylesConsts from "./styles/consts";
import { Header } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginStart: StylesConsts.rootMarginSide,
    marginEnd: StylesConsts.rootMarginSide,
    marginVertical: 10,
  },
});

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Header
        centerComponent={{ text: "Gistive", style: { color: "#ffffff", fontSize: 20, fontWeight: "500" } }}
        containerStyle={{
          backgroundColor: "#454ADE",
          paddingVertical: 10,
        }}
      />
      <SafeAreaView style={styles.container}>
        <GistListContainer />
      </SafeAreaView>
    </Provider>
  );
}
