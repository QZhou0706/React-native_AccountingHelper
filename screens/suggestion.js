import react from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import Card from '../shared/card';

function Suggestion({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Suggestion</Text>
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

export default Suggestion;

