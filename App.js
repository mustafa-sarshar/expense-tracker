import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ExpensesOverviewStackScreen from "./src/screens/stacks/expenses-overview";
import ManageExpenseStackScreen from "./src/screens/stacks/manage-expense";
import ExpensesContextProvider from "./src/store/contexts/expenses/context-provider";

const Stack = createNativeStackNavigator();

import GlobalStyles from "./src/assets/styles";
import styles from "./styles";

function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: GlobalStyles.colors.primary500,
              },
              headerTintColor: GlobalStyles.colors.light,
            }}
          >
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverviewStackScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpenseStackScreen}
              options={{ title: "Manage Expense", presentation: "modal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </View>
  );
}

export default App;
