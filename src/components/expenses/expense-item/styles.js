import { StyleSheet } from "react-native";

import GlobalStyles from "../../../assets/styles";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: GlobalStyles.colors.primary500,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },

  textBase: {
    color: GlobalStyles.colors.primary50,
  },

  description: {
    fontSize: 16,
    marginButton: 4,
    fontWeight: "bold",
  },

  amountContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: GlobalStyles.colors.light,
    minWidth: 80,
  },

  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
export default styles;
