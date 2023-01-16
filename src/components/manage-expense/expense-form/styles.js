import { StyleSheet } from "react-native";
import GlobalStyles from "../../../assets/styles";

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },

  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  btnWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  btn: {
    flex: 1,
  },

  error: {
    color: GlobalStyles.colors.error500,
    textAlign: "center",
    marginVertical: 8,
  },
});
export default styles;
