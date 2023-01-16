import React, { useContext, useLayoutEffect, useState } from "react";
import { View } from "react-native";

import IconButtonUI from "../../../components/UI/icon-button";
import ExpensesContext from "../../../store/contexts/expenses/context";
import ExpenseFormComponent from "../../../components/manage-expense/expense-form";
import LoadingOverlayUI from "../../../components/UI/loading-overlay";
import ErrorOverlayUI from "../../../components/UI/error-overlay";

import GlobalStyles from "../../../assets/styles";
import { storeExpense, updateExpense, deleteExpense } from "../../../utils/api";
import styles from "./style";

function ManageExpenseStackScreen({ route, navigation }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const expenseCtx = useContext(ExpensesContext);
  const expenseId = route.params?.expenseId;
  const isEditingMode = !!expenseId;

  const expenseDataFetched = expenseCtx.expensesState.find(
    (expense) => expense.id === expenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditingMode ? "Editing Expense" : "Add Expense",
    });
  }, [navigation, isEditingMode]);

  async function deleteExpenseHandler() {
    setIsSubmitting(true);

    try {
      await deleteExpense(expenseId);
      expenseCtx.deleteExpense(expenseId);
      navigation.goBack();
    } catch (err) {
      setError("Could not delete the expense, please try again!");
    }

    setIsSubmitting(false);
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(expenseData) {
    setIsSubmitting(true);

    try {
      if (isEditingMode) {
        expenseCtx.updateExpense(expenseId, expenseData);
        await updateExpense(expenseId, expenseData);
      } else {
        const expenseId = storeExpense(expenseData);
        expenseCtx.addExpense({ ...expenseData, id: expenseId });
        navigation.goBack();
      }
    } catch (err) {
      setError("Could not save the expense, please try again!");
    }

    setIsSubmitting(false);
  }

  function errorHandler() {
    setError(null);
  }

  if (error && !isSubmitting) {
    return <ErrorOverlayUI message={error} onConfirm={errorHandler} />;
  }

  if (isSubmitting) {
    return <LoadingOverlayUI />;
  }

  return (
    <View style={styles.container}>
      <View>
        <ExpenseFormComponent
          defaultValues={expenseDataFetched}
          isEditingMode={isEditingMode}
          onSubmit={confirmHandler}
          onCancel={cancelHandler}
        />
      </View>
      {isEditingMode && (
        <View style={styles.deleteContainer}>
          <IconButtonUI
            iconName="trash"
            iconColor={GlobalStyles.colors.error500}
            iconSize={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpenseStackScreen;
