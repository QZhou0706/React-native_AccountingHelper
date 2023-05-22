import react, {useState} from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

import { Ionicons, Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export function Item({title, content, setContent, placeholderText}) {

    return (
      <View style = {styles.itemContainer}>
        <Foundation name='clipboard-pencil' size={24} color="#787878" width={20} />
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
        <Foundation name="list-bullet" size={24} color="#787878" width={20} />
        <Text style = {[styles.text, {width: 40}]}>TYPE</Text>
        <View style = {styles.wrapper}>
          <TextInput
          readOnly = {true}
          value = {typeText}
          style={{ ...styles.readOnlyTextInput, ...styles.placeholder}}
          />
          <MaterialCommunityIcons name="greater-than" size={22} color="#ccc" />
        </View>
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
    wrapper: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 8,
    },
    readOnlyTextInput: {
        width: 200,
        height: 40,
        marginLeft: 2,
        paddingBottom: 2,
        color: '#333',
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
