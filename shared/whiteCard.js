import React from "react";
import { StyleSheet, View,Text } from 'react-native';

export default function WhiteCard(props) {
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
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 5,
    width:'90%',
    alignSelf:'center'
  },
  cardContext: {
    marginTop: 20,
    marginHorizontal: 16,
    marginVertical: 20,
    marginLeft:5,
    justifyContent:'center',
    alignSelf:'center',
    flexDirection:'row',
    gap: 6,
  },

})