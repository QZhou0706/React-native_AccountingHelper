import { FontSizeOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NoDataTip() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>- - - OOPS! NO HISTORY DATA - - -</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        // backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'nunito-regular',
        fontSize: 17,
        color: 'rgb(80, 80, 80)',
    }
})