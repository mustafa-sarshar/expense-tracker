import React from "react";
import { View, FlatList } from "react-native";

import ExpensesItemComponent from "../expense-item";

import styles from "./styles";

function ExpensesListComponent({ expenses }) {
  function renderExpenseItemHandler(itemData) {
    return <ExpensesItemComponent {...itemData.item} />;
  }

  console.log(expenses);
  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItemHandler}
        keyExtractor={(item) => {
          console.log("id -> ", item.id.toString());
          return item.id.toString();
        }}
      />
    </View>
  );
}

export default ExpensesListComponent;
