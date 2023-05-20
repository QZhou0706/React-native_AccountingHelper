import React from "react";
import { StyleSheet, View } from "react-native";

export default function Card(props) {
    return (
            <View style = {styles.item}>
                {props.children}
                <View style = {styles.line}></View>
            </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        paddingLeft: 8,
        paddingRight: 15,
        position: 'relative',
    },
    text: {
        fontSize: 20,
        fontWeight: 700,
        color: 'rgb(80, 80, 80)',
    },
    line: {
        backgroundColor: '#DDD',
        height: 1,
        bottom: 0,
        width: '100%',
        alignSelf: 'center',
    }
})
