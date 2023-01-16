import axios from "axios";

const backendURL = "https://expense-tracker-31184-default-rtdb.firebaseio.com";
const collectionName = "expenses";

async function storeExpense(expenseData) {
  await axios.post(`${backendURL}/${collectionName}.json`, expenseData);
}

async function fetchExpenses() {
  const response = await axios.get(`${backendURL}/${collectionName}.json`);
  const expensesFetched = [];

  for (const key in response.data) {
    const expense = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expensesFetched.push(expense);
  }

  return expensesFetched;
}

async function updateExpense(expenseId, expenseData) {
  await axios.put(
    `${backendURL}/${collectionName}/${expenseId}.json`,
    expenseData
  );
}

async function deleteExpense(expenseId) {
  await axios.delete(`${backendURL}/${collectionName}/${expenseId}.json`);
}

export { storeExpense, fetchExpenses, updateExpense, deleteExpense };
