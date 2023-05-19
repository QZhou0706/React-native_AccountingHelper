import React, {useState} from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import Card from "../shared/card"

export default function Home() {

    const [data, setData] = useState([
        {type: 'food', behavior: 'income', amount: '19', key: 1},
        {type: 'food', behavior: 'expenditure', amount: '19', key: 2},
        {type: 'food', behavior: 'income', amount: '19', key: 3},
        {type: 'food', behavior: 'income', amount: '19',key: 4},
        {type: 'food', behavior: 'income', amount: '19', key: 5},
        {type: 'food', behavior: 'expenditure', amount: '19', key: 6},
        {type: 'food', behavior: 'income', amount: '19', key: 7},
        {type: 'food', behavior: 'income', amount: '19',key: 8},
    ]);

    function Accounts({item}) {
        return (
            <View style = {styles.itemContainer}>
                <View style = {styles.info}>
                    <Text style = {styles.text}>{item.type}</Text>
                    <Text style = {styles.text}>{item.behavior}</Text>
                    <Text style = {styles.text}>{item.amount}</Text>
                </View>
                <View style = {styles.icon}>
                    <MaterialIcons name = 'delete' size = {30} color = {'#333'} />
                </View>
            </View>
        );
    }

    return (
        <View style = {styles.container}>
            <View style = {styles.content}>
                <Text style = {styles.text}>今日收支</Text>
                <FlatList
                style = {styles.Wrapper}
                data = {data}
                renderItem = {({ item }) => (
                    <TouchableOpacity onPress={() => showDetails(item.key)}>
                        <Card>
                            <Accounts item = {item} />
                        </Card>
                    </TouchableOpacity>
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
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
    }
})