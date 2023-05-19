import 'react-native-gesture-handler';
import { HeaderStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Header from '../shared/header';
import About from '../screens/about';

const Stack = createStackNavigator();

function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={About} options={({ navigation }) => {
        return {
          headerTitle: () => <Header navigation={navigation} title='About' />,
        }
      }} />
    </Stack.Navigator>
  );
};

export default AboutStack;