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
    borderRadius: 20,
    elevation: 1,
    backgroundColor: '#fff',
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#ccc',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginHorizontal: 4,
    marginVertical: 6,
    borderWidth: 2, 
    borderColor: '#ccc', 
  },
  cardContext: {
    marginTop: 10,
    marginHorizontal: 16,
    marginVertical: 20,
    marginLeft:5,
  },

})