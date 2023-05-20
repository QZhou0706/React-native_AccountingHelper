import { View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './src/customDrawer';
import IonIcons from 'react-native-vector-icons/Ionicons';

import HomeStack from './homestack';
import AboutStack from './aboutStack';

const Drawer = createDrawerNavigator();

function SettingsDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FDCB18',
        },
        drawerActiveBackgroundColor: '#FDCB18',
        drawerActiveTintColor: '#333',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'nunito-regular',
          fontSize: 17,
          borderRadius: 20,
        }
      }}
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name='HomeStack' component={HomeStack} options={{
        drawerIcon: ({ color }) => (
          <IonIcons name='home-outline' size={20} color={color} />
        )
      }} />
      <Drawer.Screen name="AboutStack" component={AboutStack} options={{
        drawerIcon: ({ color }) => (
          <IonIcons name='document-text-outline' size={20} color={color} />
        )
      }} />
    </Drawer.Navigator>
  );
}

export default SettingsDrawer;