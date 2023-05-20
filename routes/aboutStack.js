import 'react-native-gesture-handler';
import { HeaderStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Header from '../shared/header';
import About from '../screens/about';

const Stack = createStackNavigator();

function AboutStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default AboutStack;