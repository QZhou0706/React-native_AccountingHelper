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
        backgroundColor: '#fff',
        paddingLeft: 8,
        paddingRight: 15,
    },
    text: {
        fontSize: 20,
        fontWeight: 700,
        color: 'rgb(80, 80, 80)',
    }
})
