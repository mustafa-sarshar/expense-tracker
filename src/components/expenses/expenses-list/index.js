import React from "react";
import { View, FlatList } from "react-native";

import ExpensesItemComponent from "../expense-item";

import styles from "./styles";

function ExpensesListComponent({ expenses }) {
  function renderExpenseItemHandler(itemData) {
    return <ExpensesItemComponent {...itemData.item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItemHandler}
        keyExtractor={(item) => {
          return item.id;
        }}
      />
    </View>
  );
}

export default ExpensesListComponent;
