function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      // const randomId = new Date().toString() + Math.random().toString();
      // return [{ ...action.payload, id: randomId }, ...state];
      return [action.payload, ...state];

    case "SET":
      return action.payload.reverse();

    case "UPDATE":
      const expenseIdIndex = state.findIndex((expense) => {
        return expense.id === action.payload.id;
      });
      const expenseUpdate = {
        ...state[expenseIdIndex],
        ...action.payload.data,
      };
      const expenses = [...state];
      expenses[expenseIdIndex] = expenseUpdate;

      return expenses;

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);

    default:
      return state;
  }
}

export default expensesReducer;
