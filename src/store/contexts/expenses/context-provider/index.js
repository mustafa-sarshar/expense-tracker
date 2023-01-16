import React, { useReducer } from "react";

import ExpensesContext from "../context";
import expensesReducer from "../reducers";

// import DUMMY_EXPENSES from "../../../../assets/data";

function ExpensesContextProvider({ children }) {
  const [expensesState, expensesDispatcher] = useReducer(
    expensesReducer,
    []
  );

  function addExpense(expenseData) {
    expensesDispatcher({ type: "ADD", payload: expenseData });
  }

  function setExpenses(expenses) {
    expensesDispatcher({ type: "SET", payload: expenses });
  }

  function deleteExpense(id) {
    expensesDispatcher({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    expensesDispatcher({
      type: "UPDATE",
      payload: { id: id, data: expenseData },
    });
  }

  const value = {
    expensesState,
    addExpense,
    setExpenses,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
