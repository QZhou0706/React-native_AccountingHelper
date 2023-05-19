import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './routes/homestack';
import SettingsDrawer from './routes/drawer';

export default function App() {
  return (
    <NavigationContainer>
      <SettingsDrawer />
    </NavigationContainer>
  );
}
