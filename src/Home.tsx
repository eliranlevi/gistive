import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import GistListContainer from "./containers/GistListContainer";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

interface HomeProps {
  navigation: StackNavigationProp<{GistScreen: undefined}, "GistScreen">;
}

const Home = ({ navigation }: HomeProps): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <GistListContainer navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;
