import React, { useContext } from "react";

import ExpensesOutputComponent from "../../../components/expenses/expenses-output";
import ExpensesContext from "../../../store/contexts/expenses/context";

import styles from "./style";

function AllExpensesTabScreen(props) {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutputComponent
      expenses={expensesCtx.expensesState}
      expensesPeriod="total"
      fallbackText="No registered expenses found!"
    />
    
  );
}

export default AllExpensesTabScreen;
