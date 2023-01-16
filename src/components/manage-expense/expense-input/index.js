import { View, Text, TextInput } from "react-native";
import styles from "./styles";

function ExpenseInputComponent({
  label,
  textInputConfig,
  containerStyle,
  isValid,
}) {
  let inputStyle = [styles.inputText];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyle.push(styles.inputMultiLine);
  }
  if (!isValid) {
    inputStyle.push(styles.invalidInput);
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.label, !isValid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyle} {...textInputConfig} />
    </View>
  );
}

export default ExpenseInputComponent;
