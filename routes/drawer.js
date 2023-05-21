import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './src/customDrawer';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Header from '../shared/header';

import About from '../screens/about';
import TabNavigator from './tab';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
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
      <Drawer.Screen name='TabNavigator' component={TabNavigator} options={({ navigation }) => {
        return {
          drawerIcon: ({ color, size }) => (
            <IonIcons name='home-outline' color={color} size={size} />
          ),
          header: () => <Header navigation={navigation} title='Home' />,
        }
      }} />
      <Drawer.Screen name="About" component={About} options={({ navigation }) => {
        return {
          drawerIcon: ({ color, size }) => (
            <IonIcons name='document-text-outline' color={color} size={size} />
          ),
          header: () => <Header navigation={navigation} title='About' />,
        }
      }} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;