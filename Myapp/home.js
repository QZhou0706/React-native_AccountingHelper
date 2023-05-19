import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

export default function Home() {
    return (
        <view style = {styles.container}>
            {/* {Header} */}
            <FlatList style = {styles.Wrapper}>

            </FlatList>
            {/* {Tab} */}
        </view>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    chartWrapper: {
        flex: 1,
    },
})