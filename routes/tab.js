import * as Animatable from 'react-native-animatable';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useEffect, useRef } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntIcon from "react-native-vector-icons/AntDesign";

import DrawerNavigator from '../routes/drawer';
import AboutStack from './aboutStack';
import AddItem from '../screens/addItem';



const TabList = [
  { route: 'Home', label: 'Home', iconType: Ionicons, activeIcon: 'home', inActiveIcon: 'home-outline', component: DrawerNavigator },
  { route: 'AddItem', label: 'AddItem', iconType: AntIcon, activeIcon: 'plussquare', inActiveIcon: 'plussquareo', component: AddItem },
  { route: 'AboutStack', label: 'About', iconType: Ionicons, activeIcon: 'document-text', inActiveIcon: 'document-text-outline', component: AboutStack },
]

const Tab = createBottomTabNavigator();

const animate1 = { 0: { scale: 1, translateY: 20 }, 1: { scale: 1.2, translateY: -15 } };
const animate2 = { 0: { scale: 1.2, translateY: -15 }, 1: { scale: 1, translateY: 20 } };

const circle1 = { 0: { scale: 0 }, 1: { scale: 1 } };
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
      textRef.current.transitionTo({scale: 1});
    }
    else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({scale: 0});
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.container}>
        <View style={styles.tabButton}>
          <Animatable.View
            ref={circleRef}
            style={{ ...StyleSheet.absoluteFillObject, backgroundColor: '#f76666', borderRadius: 25 }} />
          <item.iconType name={item.activeIcon} color={focused ? '#fff' : '#f76666'} size={24} />
        </View>
        <Animatable.Text
          ref={textRef}
          style={{fontSize: 10, textAlign: 'center', }}
        >
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  )
}

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={() => {
      return {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          marginBottom: 20,
          position: 'absolute',
          borderRadius: 16,
          left: 16,
          right: 16,
        },
      }
    }}>
      {TabList.map((item, index) => {
        return (
          <Tab.Screen name={item.route} component={item.component} options={{
            tabBarLabel: item.label,
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
    justifyContent: 'center',
  },
  tabButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#fff',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  }
})