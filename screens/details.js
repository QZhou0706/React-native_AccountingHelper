import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import BillCard from './src/billCard';
import TipModal from './src/tipModal';

export default function Details({ navigation, item }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <BillCard item={item} />
      <TouchableOpacity style={styles.deleteButton} onPress={() => setShowModal(true)}>
        <Text style={styles.text}>DELETE</Text>
      </TouchableOpacity>
      <TipModal showModal={showModal} setShowModal={setShowModal} />
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
