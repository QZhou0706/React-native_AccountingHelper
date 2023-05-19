import React from "react";
import { StyleSheet, View } from "react-native";

export default function Card(props) {
    return (
            <View style = {styles.item}>
                {props.children}
            </View>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 6,
        opacity: 0.9,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        borderBottomWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#F5A80F',
        backgroundColor: '#fff',
        marginBottom: 12,
    },
    text: {
        fontSize: 20,
        fontWeight: 700,
        color: 'rgb(80, 80, 80)',
    }
})
