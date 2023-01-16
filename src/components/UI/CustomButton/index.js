import { View, Text, Pressable } from "react-native";

import styles from "./styles";

function CustomButtonUI({ children, onPress, mode, containerStyle }) {
  return (
    <View style={containerStyle}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.btnWrapper, mode === "flat" && styles.flat]}>
          <Text style={[styles.btnTitle, mode === "flat" && styles.flat]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CustomButtonUI;
