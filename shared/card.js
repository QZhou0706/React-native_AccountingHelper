import React from "react";
import { StyleSheet, TouchableOpacity, Text,View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function ItemCard({ item }) {

    // const setBgColor = (behavior) => {
    //     if(behavior === 'income') {
    //         console.log("return #F5A80F");
    //         return '#F5A80F';
    //     }
    //     else {
    //         console.log(behavior);
    //         return '#0D1B6F';
    //     }
    // }

    return (
        <TouchableOpacity onPress={() => showDetails(item.key)}>
            <View style = {styles.item}>
                <View style = {styles.info}>
                    <Text style = {styles.text}>{item.type}</Text>
                    <Text style = {styles.text}>{item.behavior}</Text>
                    <Text style = {styles.text}>{item.amount}</Text>
                </View>
                <View style = {styles.icon}>
                    <MaterialIcons name = 'delete' size = {30} color = {'#333'} />
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        height: 110,
        padding: 6,
        // backgroundColor: '#F5A80F',
        opacity: 0.9,
        // borderRadius: 10,
        borderBottomWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#F5A80F',
        marginBottom: 12,
    },
    text: {
        fontSize: 20,
        fontWeight: 700,
        color: 'rgb(80, 80, 80)',
    }
})