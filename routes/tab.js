import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import DrawerNavigator from '../routes/drawer';
import AboutStack from './aboutStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={() => {
      return {
        headerShown: false,
        tabBarShowLabel: false,
      }
    }}>
      <Tab.Screen name='DrawerNavigator' component={DrawerNavigator} options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name='home-outline' color={color} size={size} />
        )
      }} />
      <Tab.Screen name='AboutStack' component={AboutStack}  options={{
        tabBarIcon: ({color, size}) => (
          <Ionicons name='document-text-outline' color={color} size={size} />
        )
      }} />
    </Tab.Navigator>
  )

}

export default TabNavigator;