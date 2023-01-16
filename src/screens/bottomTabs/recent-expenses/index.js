import React, { useContext, useEffect, useState } from "react";

import ExpensesOutputComponent from "../../../components/expenses/expenses-output";
import ExpensesContext from "../../../store/contexts/expenses/context";
import LoadingOverlayUI from "../../../components/UI/loading-overlay";
import ErrorOverlayUI from "../../../components/UI/error-overlay";

import { getDateMinusDays } from "../../../utils/date";
import { fetchExpenses } from "../../../utils/api";
import styles from "./style";

function RecentExpensesScreen(props) {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState("");
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expensesFetched = await fetchExpenses();
        expensesCtx.setExpenses(expensesFetched);
      } catch (err) {
        setError("Could not fetch expenses!");
      }
      setIsFetching(false);
    }
    getExpenses();
  }, []);

  function errorHandler() {
    setError(null);
  }

  if (error && !isFetching) {
    return <ErrorOverlayUI message={error} onConfirm={errorHandler} />;
  }

  if (isFetching) {
    return <LoadingOverlayUI />;
  }

  const dateToday = new Date();
  const date7DaysAgo = getDateMinusDays(dateToday, 365);
  const expensesRecent = expensesCtx.expensesState.filter(
    (expense) => expense.date > date7DaysAgo && expense.date <= dateToday
  );

  return (
    <ExpensesOutputComponent
      expenses={expensesRecent}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days."
    />
  );
}

export default RecentExpensesScreen;
