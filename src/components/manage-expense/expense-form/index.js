import React, { useState } from "react";
import { View, Text, Alert } from "react-native";

import ExpenseInputComponent from "../expense-input";
import CustomButtonUI from "../../UI/CustomButton";

import { getFormattedDate } from "../../../utils/date";
import styles from "./styles";

function ExpenseFormComponent({
  isEditingMode,
  onSubmit,
  onCancel,
  defaultValues,
}) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  function changeInputHandler(stateName, enteredValue) {
    setInputs((curState) => {
      return {
        ...curState,
        [stateName]: {
          value: enteredValue,
          isValid: true,
        },
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const isAmountValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const isDateValid = expenseData.date.toString() !== "Invalid Date";
    const isDescriptionValid = expenseData.description.trim().length > 0;

    if (isAmountValid && isDateValid && isDescriptionValid) {
      onSubmit(expenseData);
    } else {
      // Alert.alert("Invalid Input", "Please, check your inputs!");
      setInputs((curState) => {
        return {
          amount: {
            value: curState.amount.value,
            isValid: isAmountValid,
          },
          date: {
            value: curState.date.value,
            isValid: isDateValid,
          },
          description: {
            value: curState.description.value,
            isValid: isDescriptionValid,
          },
        };
      });
    }
  }

  function cancelHandler() {
    onCancel();
  }

  const areInputsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.container}>
      <View style={styles.inputsRow}>
        <ExpenseInputComponent
          containerStyle={{ flex: 1 }}
          label="Amount"
          isValid={inputs.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: changeInputHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
        />
        <ExpenseInputComponent
          containerStyle={{ flex: 1 }}
          label="Date"
          isValid={inputs.date.isValid}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: changeInputHandler.bind(this, "date"),
            value: inputs.date.value,
          }}
        />
      </View>
      <ExpenseInputComponent
        label="Description"
        isValid={inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          autoCorrect: true,
          autoCapitalize: "sentences",
          onChangeText: changeInputHandler.bind(this, "description"),
          value: inputs.description.value,
        }}
      />
      {areInputsInvalid && (
        <Text style={styles.error}>
          Invalid input(s), Please, check your input(s) again!
        </Text>
      )}
      <View style={styles.btnWrapper}>
        <CustomButtonUI
          mode="flat"
          onPress={cancelHandler}
          containerStyle={styles.btn}
        >
          Cancel
        </CustomButtonUI>
        <CustomButtonUI onPress={submitHandler} containerStyle={styles.btn}>
          {isEditingMode ? "Update" : "Add"}
        </CustomButtonUI>
      </View>
    </View>
  );
}

export default ExpenseFormComponent;
