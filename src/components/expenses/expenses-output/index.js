import React from "react";
import { View, Text } from "react-native";

import ExpensesSummaryComponent from "../expenses-summary";
import ExpensesListComponent from "../expenses-list";

import styles from "./styles";

function ExpensesOutputComponent({ expenses, expensesPeriod, fallbackText }) {
  return (
    <View style={styles.container}>
      <ExpensesSummaryComponent
        expenses={expenses}
        periodName={expensesPeriod}
      />
      <ExpensesListComponent expenses={expenses} periodName={expensesPeriod} />
      {expenses.length === 0 && <Text style={styles.fallbackText}>{fallbackText}</Text>}
    </View>
  );
}

export default ExpensesOutputComponent;
