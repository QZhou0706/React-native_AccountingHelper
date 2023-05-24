import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './src/customDrawer';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Header from '../shared/header';

import About from '../screens/about';
import TabNavigator from './tab';
import ProfileStack from './profileStack';

const DrawerList = [
  { route: 'TabNavigator', label: 'Home', iconType: IonIcons, Icon: 'ios-person-circle-outline', component: TabNavigator },
  { route: 'ProfileStack', label: 'Profile', iconType: IonIcons, Icon: 'ios-person-circle-outline', component: ProfileStack },
  { route: 'About', label: 'About', iconType: IonIcons, Icon: 'document-text-outline', component: About }
]


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
      {DrawerList.map((item, index) => {
        return (
          <Drawer.Screen name={item.label} component={item.component} options={({ navigation }) => {
            return {
              drawerIcon: ({ color, size }) => (
                <item.iconType name={item.Icon} color={color} size={size} />
              ),
              header: () => <Header navigation={navigation} title={item.label} />,
            }
          }}
            key={index} />
        )
      })}

    </Drawer.Navigator>
  );
}

export default DrawerNavigator;