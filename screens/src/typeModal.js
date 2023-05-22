import React, { useState } from 'react';
import { View, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native';

import IconButtom from './iconButtom';

const props1 = {
name1: "fastfood", name2: "album", name3: "shop", name4: "book",
color1: '#F5A80F', color2: '#77B5FF', color3: '#F37D84', color4: '#979C04'}

const props2 = {
    name1: "build", name2: "business", name3: "call", name4: "car-repair",
    color1: '#AECFD0', color2: 'pink', color3: '#294282', color4: '#E46F41'}

const props3 = {
    name1: "headset", name2: "collections", name3: "festival", name4: "flight",
    color1: '#89597B', color2: '#ABD373', color3: '#FBD509', color4: '#5981B1'}


export default function TypeModal({ modalColor , showModal, setShowModal, setTypeText }) {

    function handleClose() {
        setShowModal(false);
    }

    function CreateIconRow({name1, name2, name3, name4, color1, color2, color3, color4}) {
        return (
            <View style = {styles.row}>
                <IconButtom flag = {modalColor} iconName={name1} iconColor = {color1} setTypeText = {setTypeText} setShowModal = {setShowModal}/>
                <IconButtom flag = {modalColor} iconName={name2} iconColor = {color2} setTypeText = {setTypeText} setShowModal = {setShowModal}/>
                <IconButtom flag = {modalColor} iconName={name3} iconColor = {color3} setTypeText = {setTypeText} setShowModal = {setShowModal}/>
                <IconButtom flag = {modalColor} iconName={name4} iconColor = {color4} setTypeText = {setTypeText} setShowModal = {setShowModal}/>
            </View>
        );
    }

    return (
    <Modal visible={showModal} transparent animationType='slide'>
        <View style={styles.modalContainer}>
            <TouchableWithoutFeedback onPress={handleClose}>
                <View style = {styles.dismissArea}></View>
            </TouchableWithoutFeedback>
            <View style={[styles.modalContent, {backgroundColor: modalColor}]}>
                <View style = {styles.grayBar}></View>
                <View style = {styles.typeContainer}>
                    <CreateIconRow {...props1} />
                    <CreateIconRow {...props2} />
                    <CreateIconRow {...props3} />
                </View>
            </View>
        </View>
    </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    dismissArea: {
        height: '58%',
        width: '100%',
        position: 'absolute',
        top: 0,
    },
    modalContent: {
        // backgroundColor: '#F9C611',
        // backgroundColor: '#F76666',
        paddingHorizontal: 16,
        paddingTop: 15,
        paddingBottom: 26,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        alignItems: 'center',
        height: '42%',
        width: '96%',
        position: 'absolute',
        bottom: 0,
        elevation: 3,
        hadowRadius: 4,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
    },
    grayBar: {
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 4,
        width: 80,
        marginBottom: 14,
    },
    typeContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 16,
        borderColor: '#333',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 6,
    }
})