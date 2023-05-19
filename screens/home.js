import React, {useState} from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import ItemCard from "../shared/card";

export default function Home() {

    const [item, setItem] = useState([
        {type: 'food', behavior: 'income', amount: '19', key: 1},
        {type: 'food', behavior: 'expenditure', amount: '19', key: 2},
        {type: 'food', behavior: 'income', amount: '19', key: 3},
        {type: 'food', behavior: 'income', amount: '19',key: 4},
        {type: 'food', behavior: 'income', amount: '19', key: 5},
        {type: 'food', behavior: 'expenditure', amount: '19', key: 6},
        {type: 'food', behavior: 'income', amount: '19', key: 7},
        {type: 'food', behavior: 'income', amount: '19',key: 8},
    ]);

    return (
        <View style = {styles.container}>
            {/* {Header} */}
            <View style = {styles.content}>
                <Text style = {styles.text}>今日收支</Text>
                <FlatList
                style = {styles.Wrapper}
                data = {item}
                renderItem = {({ item }) => (
                    <ItemCard item = {item} />
                )}
                />
            </View>
            {/* {Tab} */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        backgroundColor: 'rgb(240, 240, 240)'
    },
    Wrapper: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: 'rgb(240, 240, 240)'
    },
    text: {
        fontSize: 20,
        fontWeight: 900,
        marginLeft: 10,
        marginBottom: 5,
        color: 'rgb(80, 80, 80)',
    },
})