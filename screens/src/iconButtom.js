import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export default function IconButtom({iconName, iconColor, setTypeText, setShowModal}) {
    
    function onPressHandler() {
        setShowModal(false);
        setTypeText(iconName);
    }

    return (
        <TouchableOpacity style = {styles.border} onPress = {() => onPressHandler()}>
            <MaterialIcons name={iconName} color = {iconColor}  style = {styles.icon}/>
            <Text style = {styles.text}>{iconName}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    border: {
        fontSize: 32,
        backgroundColor: '#fff',
        height: 68,
        width: 68,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 4,
        // borderWidth: 2,
        borderRadius: 16,
        borderColor: '#F5A80F',
        // backgroundColor: 'rgba(255,63,42, 0.1)',
        backgroundColor: 'rgba(249, 198, 17, 0.2)',
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