import { View, ActivityIndicator } from "react-native";

import GlobalStyles from "../../../assets/styles";
import styles from "./styles";

function LoadingOverlayUI() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={GlobalStyles.colors.light} />
    </View>
  );
}

export default LoadingOverlayUI;
