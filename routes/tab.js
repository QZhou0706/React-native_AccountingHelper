import * as Animatable from 'react-native-animatable';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import { useEffect, useRef } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntIcon from "react-native-vector-icons/AntDesign";

import Home from '../screens/home';
import AboutStack from './aboutStack';
import AddItem from '../screens/addItem';
import { Transition } from 'react-native-reanimated';



const TabList = [
  { route: 'Home', label: 'Home', iconType: Ionicons, activeIcon: 'home', inActiveIcon: 'home-outline', component: Home },
  { route: 'AddItem', label: 'AddItem', iconType: AntIcon, activeIcon: 'plussquare', inActiveIcon: 'plussquareo', component: AddItem },
  { route: 'AboutStack', label: 'About', iconType: Ionicons, activeIcon: 'document-text', inActiveIcon: 'document-text-outline', component: AboutStack },
]

const Tab = createBottomTabNavigator();

const animate1 = { 0: { scale: 1, translateY: 0 }, 1: { scale: 1.4, translateY: -20 } };
const animate2 = { 0: { scale: 1.4, translateY: -20 }, 1: { scale: 1, translateY: 0 } };

const circle1 = { 0: { scale: 0 }, 0.3: { scale: .5 }, 0.5: { scale: .3 }, 0.8: { scale: .7 }, 1: { scale: 1 } };
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    }
    else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={400}
        style={styles.container}>
        <View style={styles.tabButton}>
          <Animatable.View
            ref={circleRef}
            duration={400}
            style={{ ...StyleSheet.absoluteFillObject, backgroundColor: '#f76666', borderRadius: 25, }} />
          <item.iconType name={focused ? item.activeIcon : item.inActiveIcon} color={focused ? '#fff' : '#f76666'} size={20} />
        </View>
        <Animatable.Text
          ref={textRef}
          style={{ fontSize: 10, color: '#333', fontFamily: 'nunito-bold', opacity: 0.7 }}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  )
}

const TabNavigator = () => {
  
  // listening keyboard to avoid tabBar moving with kayboard
  const [keyboardShown, setKeyboardShown] = React.useState(false);
  React.useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardShown(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardShown(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      screenOptions={() => {
        return {
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 60,
            bottom: keyboardShown ? -100 : 20,
            position: 'absolute',
            borderRadius: 16,
            left: 16,
            right: 16,
            alignItems: 'center',
            justifyContent: 'center',
          },
        }
      }}>
      {TabList.map((item, index) => {
        return (
          <Tab.Screen name={item.route} component={item.component} options={{
            tabBarButton: (props) => (
              <TabButton {...props} item={item} />
            ),
          }}
            key={index} />
        )
      })}
    </Tab.Navigator>
  )

}

export default TabNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    top: 5,

  },
  tabButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderRadius: 25,
    borderWidth: 5,
    elevation: 1,
  }
})