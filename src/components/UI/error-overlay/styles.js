import { StyleSheet } from "react-native";

import GlobalStyles from "../../../assets/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },

  text: {
    textAlign: "center",
    color: GlobalStyles.colors.light,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  message: {
    fontSize: 14,
  },
});

export default styles;
