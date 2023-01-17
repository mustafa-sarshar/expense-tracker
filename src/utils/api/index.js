import axios from "axios";
import firebaseConfigs from "../../../.firebaseConfigs.json";

async function storeExpense(expenseData) {
  const response = await axios.post(
    `${firebaseConfigs.dbConfigs.url}/${firebaseConfigs.dbConfigs.collectionName}.json`,
    expenseData
  );
  const { name } = response.data;
  console.log(response.data);
  return name;
}

async function fetchExpenses() {
  const response = await axios.get(
    `${firebaseConfigs.dbConfigs.url}/${firebaseConfigs.dbConfigs.collectionName}.json`
  );
  const expensesFetched = [];

  console.log("Response Fetch:", response.data);

  if (response.data) {
    for (const key in response.data) {
      const expense = {
        id: key,
        amount: response.data[key].amount,
        date: new Date(response.data[key].date),
        description: response.data[key].description,
      };
      expensesFetched.push(expense);
    }
  }

  return expensesFetched;
}

async function updateExpense(expenseId, expenseData) {
  await axios.put(
    `${firebaseConfigs.dbConfigs.url}/${firebaseConfigs.dbConfigs.collectionName}/${expenseId}.json`,
    expenseData
  );
}

async function deleteExpense(expenseId) {
  await axios.delete(
    `${firebaseConfigs.dbConfigs.url}/${firebaseConfigs.dbConfigs.collectionName}/${expenseId}.json`
  );
}

export { storeExpense, fetchExpenses, updateExpense, deleteExpense };
