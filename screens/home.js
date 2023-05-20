import React, {useState} from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Card from "../shared/card"
import { Fontisto } from '@expo/vector-icons';

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
        {type: 'food', behavior: 'income', amount: '19', key: 9},
        {type: 'food', behavior: 'expenditure', amount: '19', key: 10},
        {type: 'food', behavior: 'income', amount: '19', key: 11},
        {type: 'food', behavior: 'income', amount: '19',key: 12},
    ]);

    function Accounts({item}) {
        return (
            <View style = {styles.itemContainer}>
                <View justifyContent = 'center'>
                    <Ionicons name="fast-food-outline" size={30} color="#F5A80F" />
                </View>
                <View style = {styles.info}>
                    <Text style = {[styles.text, {fontWeight: 700}, {color: 'black'}, {fontSize: 20}]}>{item.type}</Text>
                    <View style = {styles.details}>
                        <Text style = {styles.text}>{item.behavior}</Text>
                        <Text style = {styles.text}>{item.amount}</Text>
                    </View>
                </View>
                <View justifyContent = 'center'>
                <Fontisto name="more-v-a" size={20} color="gray" />
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
                showsVerticalScrollIndicator = {false}
                />
            </View>
            {/* {Tab} */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(240, 240, 240)',
        paddingHorizontal: 10,
    },
    content: {
        flex: 1,
        marginTop: 20,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    Wrapper: {
        flex: 1,
        backgroundColor: 'rgb(240, 240, 240)'
    },
    text: {
        fontSize: 16,
        marginLeft: 10,
        marginBottom: 5,
        color: 'rgb(80, 80, 80)',
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 80,
        paddingHorizontal: 5,
    },
    info: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'flex-start',
        marginLeft: 12,
        roundColor: 'pink',
    },
    details: {
        flexDirection: 'row',
    }
})