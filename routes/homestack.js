import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../shared/header';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={({ navigation }) => {
        return {
          headerTitle: () => <Header navigation={navigation} title='Home' />
        }
      }} />
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
    </Stack.Navigator>
  );
};

export default HomeStack;