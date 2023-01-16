import { View, Text } from "react-native";

import GlobalStyles from "../../../assets/styles";
import styles from "./styles";
import CustomButtonUI from "../CustomButton";

function ErrorOverlayUI({ message, onConfirm }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error ocurred!</Text>
      <Text style={[styles.text, styles.message]}>{message}</Text>
      <CustomButtonUI onPress={onConfirm}>Okay</CustomButtonUI>
    </View>
  );
}

export default ErrorOverlayUI;
