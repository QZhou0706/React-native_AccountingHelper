import React from "react";
import { StyleSheet, View,Text } from 'react-native';

export default function ColorCard(props) {
  return (
    <View>
      <View style={styles.cardContext}>
        {props.children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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