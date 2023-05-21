import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../shared/header';
import DrawerNavigator from './drawer';
import Details from '../screens/details';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <Stack.Screen name="Details" component={Details} options={{
        headerShown: true,
      }}/>
    </Stack.Navigator>
  );
};

export default HomeStack;