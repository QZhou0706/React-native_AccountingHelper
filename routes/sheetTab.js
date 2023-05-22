import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import IncomeSheet from '../screens/showIncome';
import ExpSheet from '../screens/showExp';

const Tab = createMaterialTopTabNavigator();

export default function SheetTab() {
  return (
      <Tab.Navigator screenOptions={{
      }}>
        <Tab.Screen name="IncomeSheet" component={IncomeSheet} />
        <Tab.Screen name="ExpSheet" component={ExpSheet} />
      </Tab.Navigator>
  );
}