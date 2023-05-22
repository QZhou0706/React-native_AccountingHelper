import 'react-native-gesture-handler';
import * as React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import TabNavigator from './routes/tab';
import HomeStack from './routes/homestack';

export default function App() {

  LogBox.ignoreLogs([
    'VirtualizedLists should never be nested',
    'Warning: Failed prop type: Invalid prop `touchableComponent`',
    'Require cycle:',
    'Calling `getNode()`',
    'Animated: `useNativeDriver` was not specified.',
    'Warning: componentWillReceiveProps has been renamed',
    'Warning: componentWillMount has been renamed',
    'Non-serializable values were found in the navigation state',
    'Sending `onAnimatedValueUpdate` with no listeners registered.',
    // 'Looks like you',
  ]);

  const [fontsLoaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );

}
