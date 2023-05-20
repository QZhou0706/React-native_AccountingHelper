import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';



export function Header({ navigation, title }) {

  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDCB18',
    elevation: 3,
    paddingTop: 16,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  headerLeft: {
    marginLeft: 15,
  },
  icon: {
    position: 'absolute',
    left: 16,
    top: 30,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
})