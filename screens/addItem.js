import react from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import Card from '../shared/card';

function AddItem({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Add Item</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default AddItem;

