import { View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

function IconButtonUI({ iconName, iconSize, iconColor, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <Ionicons name={iconName} size={iconSize} color={iconColor} />
      </View>
    </Pressable>
  );
}

export default IconButtonUI;
