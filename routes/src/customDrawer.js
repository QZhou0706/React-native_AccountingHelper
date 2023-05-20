import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView 
      {...props}
      contentContainerStyle={{}}>
        <View style={styles.title}>
          <FontAwesomeIcon icon={faChevronDown} color='#333' size={18} style={{alignSelf: 'center'}} />
          <Text style={styles.titleText}>Main Menu</Text>
        </View>
        <DrawerItemList {...props}/>
      </DrawerContentScrollView>
      <View>
        <Text>Our Custom Text</Text>
      </View>
    </View>

  )
}

export default CustomDrawer;

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: '90%',
    flexDirection: 'row',
  },
  titleText: {
    margin: 10,
    color: '#333',
    fontFamily: 'nunito-bold',
    fontSize: 18,
  }
})