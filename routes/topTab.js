import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AddExpense from '../screens/addExpense';
import AddIncome from '../screens/addIncome';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  return (
      <Tab.Navigator screenOptions={{
      }}>
        <Tab.Screen name="AddExpense" component={AddExpense} />
        <Tab.Screen name="AddIncome" component={AddIncome} />
      </Tab.Navigator>
  );
}
