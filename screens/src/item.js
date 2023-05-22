import react, {useState} from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Modal } from "react-native";

import { Ionicons, Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export function Item({title, content, setContent, placeholderText}) {

  var iconName = 'clock';
  if(title === 'REMARK') iconName = 'clipboard-pencil';

    return (
      <View style = {styles.itemContainer}>
        <Foundation name={iconName} size={24} color="#787878" />
        <Text style = {styles.text}>{title}</Text>
        <TextInput
        style={{ ...styles.textinput, ...styles.placeholder }}
        value = {content}
        onChangeText = {val => setContent(val)}
        placeholder = {placeholderText}
        placeholderTextColor = '#333'
        cursorColor={'#787878'}
        />
      </View>
    );
}

export function ReadOnlyItem({typeText, setTypeText, setShowModal}) {

    return (
      <TouchableOpacity style = {styles.itemContainer} onPress = {() => setShowModal(true)}>
        <Foundation name="list-bullet" size={24} color="#787878" />
        {/* <Ionicons name="fast-food-outline" size={24} color="#787878" /> */}
        <Text style = {styles.text}>TYPE</Text>
        <TextInput
        readOnly = {true}
        value = {typeText}
        style={{ ...styles.readOnlyTextInput, ...styles.placeholder}}
        />
        <MaterialCommunityIcons name="greater-than" size={22} color="#ccc" />
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        gap: 8,
    },
    text: {
        fontFamily: 'nunito-regular',
        fontSize: 14,
        color: 'rgb(120, 120, 120)',
    },
    readOnlyTextInput: {
        width: 200,
        height: 40,
        marginLeft: 2,
        paddingBottom: 2,
        color: '#333',
        marginRight: 18,
    },
    textinput: {
        width: 200,
        height: 40,
        marginLeft: 2,
        paddingBottom: 2,
        color: '#333',
    },
    placeholder: {
        fontSize: 18,
        fontFamily: 'nunito-bold',
    },
})
