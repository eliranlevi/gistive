import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Provider } from "react-redux";
import AppHeader from "./AppHeader";
import GistScreenContainer from "./containers/GistScreenContainer";
import Home from "./Home";
import store from "./store";

const Stack = createStackNavigator();

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* eslint-disable-next-line react/display-name */}
        <Stack.Navigator screenOptions={{ header: (): JSX.Element => <AppHeader />, cardStyle: { backgroundColor: "white" } }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="GistScreen" component={GistScreenContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
