import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DrawerNavigator from '../routes/drawer';
import AboutStack from './aboutStack';

const TabList = [
  {route: 'Home', label: 'Home', iconType: Ionicons, activeIcon: 'home', inActiveIcon: 'home-outline', component: DrawerNavigator},
  {route: 'AboutStack', label: 'About', iconType: Ionicons, activeIcon: 'document-text', inActiveIcon: 'document-text-outline', component: AboutStack}
] 

const Tab = createBottomTabNavigator();

const TabButton = () => {
  return (
    <View>

    </View>
  )
}

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={() => {
      return {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          bottom: 8,
          position: 'absolute',
          borderRadius: 16,
          left: 16,
          right: 16,
        },
      }
    }}>
      {TabList.map((item, index) => {
        return (
          <Tab.Screen name={item.route} component={item.component} options={{
            tabBarLabel: item.label,
            tabBarIcon: ({focused, color, size}) => {
              <Ionicons name={item.activeIcon} color={color} size={size} />
            }
          }} />
        )
      })}
      
    </Tab.Navigator>
  )

}

export default TabNavigator;