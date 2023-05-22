import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import BillCard from './src/billCard';
import TipModal from './src/tipModal';

export default function Details({ navigation, route }) {
  const [showModal, setShowModal] = useState(false);
  const item = route.params.item;
  const deleteHandler = route.params.deleteHandler;
  return (
    <View style={styles.container}>
      <BillCard item={item} />
      <TouchableOpacity style={styles.deleteButton} onPress={() => setShowModal(true)}>
        <Text style={styles.text}>DELETE</Text>
      </TouchableOpacity>
      <TipModal item={item} navigation={navigation} showModal={showModal} setShowModal={setShowModal} deleteHandler={deleteHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  deleteButton: {
    height: 50,
    width: 280,
    backgroundColor: '#F76666',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 50,
  },
  text: {
    fontFamily: 'nunito-bold',
    color: '#fff',
    fontSize: 16,
  },
});
