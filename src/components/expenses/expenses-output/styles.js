import { StyleSheet } from "react-native";

import GlobalStyles from "../../../assets/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  fallbackText: {
    marginTop: 32,
    fontSize: 16,
    color: GlobalStyles.colors.light,
    textAlign: "center",
  },
});

export default styles;
