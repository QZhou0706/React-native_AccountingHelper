import React from "react";
import { StyleSheet, View,Text } from 'react-native';

export default function ColorCard(props) {
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
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'rgb(249, 198, 17)',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 1,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    width:'90%',
    alignSelf:'center'
  },
  cardContext: {
    marginTop: 30,
    marginHorizontal: 16,
    marginVertical: 20,
    marginLeft:5,
    justifyContent:'center',
    alignSelf:'center',
    flexDirection:'row',
    gap: 6,
  },

})