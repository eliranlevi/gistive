import { Dimensions, StyleSheet } from "react-native";

const StylesConsts = {
  rootMarginSide: Dimensions.get("screen").width * 0.04,
  textColor: "#939393",
  appColorMain: "#454ADE",
};

export const ButtonConsts = StyleSheet.create({
  centerButton: {
    backgroundColor: StylesConsts.appColorMain,
    width: "30%",
    alignSelf: "center",
    borderRadius: 17,
  },
});

export default StylesConsts;
