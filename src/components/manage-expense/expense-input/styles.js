import { StyleSheet } from "react-native";

import GlobalStyles from "../../../assets/styles";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 8,
  },

  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },

  inputText: {
    color: GlobalStyles.colors.primary700,
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },

  inputMultiLine: {
    minHeight: 100,
    textAlignVertical: "top",
  },

  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },

  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});
export default styles;
