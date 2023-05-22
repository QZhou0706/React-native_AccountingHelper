import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../shared/header';

import ProfileScreen from '../screens/profileScreen';
import EditProfileScreen from '../screens/editProfileScreen';

const Stack = createStackNavigator();

function ProfileStack({navigation}) {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{
        headerShown: true,
      }}/>
    </Stack.Navigator>
  );
};

export default ProfileStack;