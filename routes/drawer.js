import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './homestack';
import AboutStack from './aboutStack';

const Drawer = createDrawerNavigator();

function SettingsDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation screenOptions={{
      headerShown: false,
    }}>
      <Drawer.Screen name='HomeStack' component={HomeStack} />
      <Drawer.Screen name="AboutStack" component={AboutStack} />
    </Drawer.Navigator>
  );
}

export default SettingsDrawer;