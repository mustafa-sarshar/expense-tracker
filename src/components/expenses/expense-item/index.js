import React from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { getFormattedDate } from "../../../utils/date";
import GlobalStyles from "../../../assets/styles";
import styles from "./styles";

function ExpensesItemComponent({ id, description, amount, date }) {
  const navigation = useNavigation();
  function pressExpenseHandler() {
    navigation.navigate("ManageExpense", { expenseId: id });
  }

  return (
    <Pressable
      onPress={pressExpenseHandler}
      style={({ pressed }) => pressed && GlobalStyles.btnPressed}
    >
      <View style={styles.container}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpensesItemComponent;
