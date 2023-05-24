import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';

export default function ConFirmTip({ showConfirmModal, setShowConfirmModal, bottomColor }) {

  function handleClose() {
    setShowConfirmModal(false);
  }

  return (
    <Modal visible={showConfirmModal} transparent animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Create an item!</Text>
          <View style={styles.modalButtonWrapper}>
            <TouchableOpacity style={[styles.modalButton, {backgroundColor: bottomColor}]} onPress={handleClose}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 18,
    height: '24%',
  },
  modalText: {
    fontFamily: 'nunito-bold',
    fontSize: 18,
    marginBottom: 20,
  },
  modalButtonWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 10,
  },
  modalButton: {
    width: 80,
    flex: 1,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#F76666',
  },
  buttonText: {
    fontFamily: 'nunito-bold',
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
})