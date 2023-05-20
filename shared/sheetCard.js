import React from "react";
import { StyleSheet, View,Text } from 'react-native';

export default function SheetCard(props) {
  return (
    <View style={styles.cards}>
      <View style={styles.cardContext}>
        {props.children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cards: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.9,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    borderWidth: 2, 
    borderColor: '#333', 
  },
  cardContext: {
    marginTop: 10,
    marginHorizontal: 16,
    marginVertical: 20,
    marginLeft:5,
  },

})