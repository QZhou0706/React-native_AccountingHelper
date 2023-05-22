import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

export default function TypeModal({ showModal, setShowModal }) {

    function handleClose() {
        setShowModal(false);
      }

  return (
    <Modal visible={showModal} transparent animationType='slide'>
        <View style={styles.modalContainer}>
            <TouchableWithoutFeedback onPress={handleClose}>
                <View style = {styles.dismissArea}></View>
            </TouchableWithoutFeedback>
                <View style={styles.modalContent}>
                    <View style = {styles.grayBar}></View>
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
    dismissArea: {
        height: '55%',
        width: '100%',
        position: 'absolute',
        top: 0,
        // backgroundColor: 'pink',
    },
    modalContent: {
        backgroundColor: '#F9C611',
        paddingHorizontal: 16,
        paddingTop: 15,
        paddingBottom: 26,
        // paddingVertical: 26,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        alignItems: 'center',
        // marginHorizontal: 18,
        height: '45%',
        width: '96%',
        position: 'absolute',
        bottom: 0,
    },
    grayBar: {
        // backgroundColor: 'rgb(200, 200, 200)',
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 4,
        width: 80,
    },
    modalText: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
        marginBottom: 14,
        marginTop: 10,
        // marginVertical: 14,
        color: '#fff',
        // backgroundColor: 'pink',
    },
    typeContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 16,
        borderColor: '#333',
        // borderStyle: 'dashed',
        borderWidth: 2,

    },
    temp: {
        height: 800,
        width: 800,
    }
})