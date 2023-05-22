import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export default function IconButtom({flag, iconName, iconColor, setTypeText, setShowModal}) {

    const screenWidth = Dimensions.get('window').width;
    const modalWidth = screenWidth * 0.96;
    const iconWidth = (modalWidth - 48 - 54 ) / 4;

    let buttomColor = 'rgba(249, 198, 17, 0.15)';
    if(flag === '#F76666') buttomColor = 'rgba(255,63,42, 0.15)';
    
    function onPressHandler() {
        setShowModal(false);
        setTypeText(iconName);
    }

    return (
        <TouchableOpacity style = {[styles.border, {backgroundColor: buttomColor}, {width: iconWidth}, {height: iconWidth}]} onPress = {() => onPressHandler()}>
            <MaterialIcons name={iconName} color = {iconColor}  style = {styles.icon}/>
            <Text style = {styles.text}>{iconName}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    border: {
        fontSize: 32,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 4,
        // borderWidth: 2,
        borderRadius: 16,
        borderColor: '#F5A80F',
    },
    icon: {
        fontSize: 32,
    },
    text: {
        fontFamily: 'nunito-bold',
        fontSize: 12,
        color: '#333',
        opacity: 0.6,
    }
})