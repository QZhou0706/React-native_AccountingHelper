import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../shared/header';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import SettingsDrawer from './drawer';

const Stack = createStackNavigator();

function HomeStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{
        headerTitle: () => {
          return (
            <Header navigation={navigation}/>
          )
        }
      }} />
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
    </Stack.Navigator>
  );
};

export default HomeStack;