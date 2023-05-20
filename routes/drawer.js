import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './src/customDrawer';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { HeaderLeft, Header } from '../shared/header';

import HomeStack from './homestack';
import AboutStack from './aboutStack';

const Drawer = createDrawerNavigator();

function SettingsDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={() => {
        return {
          drawerActiveBackgroundColor: '#FDCB18',
          drawerActiveTintColor: '#333',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {
            marginLeft: -25,
            fontFamily: 'nunito-regular',
            fontSize: 17,
            borderRadius: 20,
          },
        }
      }}
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name='HomeStack' component={HomeStack} options={({ navigation }) => {
        return {
          drawerIcon: ({ color }) => (
            <IonIcons name='home-outline' size={20} color={color} />
          ),
          header: () => <Header navigation={navigation} title='Home' />,
        }
      }} />
      <Drawer.Screen name="AboutStack" component={AboutStack} options={({ navigation }) => {
        return {
          drawerIcon: ({ color }) => (
            <IonIcons name='document-text-outline' size={20} color={color} />
          ),
          header: () => <Header navigation={navigation} title='About' />,
        }
      }} />
    </Drawer.Navigator>
  );
}

export default SettingsDrawer;