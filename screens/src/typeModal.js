import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { set } from 'react-native-reanimated';

export default function TypeModal({ showModal, setShowModal }) {

    function onPressHandler() {
        if(showModal === true) setShowModal(false);
    }

  return (
    <Modal visible={showModal} transparent animationType="fade">
        <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>CHOOES A TYPE</Text>
                    <View style = {styles.typeContainer}>

                    </View>
                </View>
        </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    modalContent: {
        backgroundColor: '#F5A80F',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        alignItems: 'center',
        // marginHorizontal: 18,
        height: '45%',
        width: '96%',
        position: 'absolute',
        bottom: 0,
    },
    modalText: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
        marginBottom: 20,
        color: '#fff',
    },
    typeContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    temp: {
        height: 800,
        width: 800,
    }
})