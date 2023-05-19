import react from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import Card from '../shared/card';

function HomeScreen({ navigation }) {
  return (
    <View style = {styles.container}>
      <View style = {styles.titleWrapper}>
        <Text style = {styles.title}>AccountingHelper</Text>
        <Text style = {styles.text}>version 1.0.0</Text>
        <Text style = {styles.text}>author: Aric Daintryy Zgoofy</Text>
      </View>
      <View style = {styles.contentWrapper}>
        <Text style = {styles.text}>some descrision of our app...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    paddingHorizontal: 15,
  },
  titleWrapper: {
    paddingBottom: 25,
    borderBottomColor: 'rgba(200, 200, 200, 0.8)',
    borderBottomWidth: 1,
  },
  title: {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 28,
    marginTop: 40,
    marginBottom: 20,
  },
  contentWrapper: {
    flex: 1,
    paddingTop: 25,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
  }
})

export default HomeScreen;

