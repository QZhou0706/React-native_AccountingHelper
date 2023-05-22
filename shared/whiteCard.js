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
    shadowOpacity: 1,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    width:'90%',
    alignSelf:'center'
    // borderWidth: 2, 
    // borderColor: '#333', 
  },
  cardContext: {
    marginTop: 30,
    marginHorizontal: 16,
    marginVertical: 20,
    marginLeft:5,
    justifyContent:'center',
    alignSelf:'center',
    flexDirection:'row',
  },

})