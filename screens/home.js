import React, {useState} from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ScrollView } from "react-native";

import Card from "../shared/card"
import ModuleCard from "../shared/ModuleCard";
import Accounts from "./src/account";
import OverviewContent from "./src/overView";

//judeg if the data is today' s data
function judgeToday(currentDate, date) {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const currentTime = year + '.' + month + '.' + day;
    if(currentTime === date) return true;
    return false;
}

export default function Home({navigation}) {

    // get current time
    const currentTime = new Date();

    const [data, setData] = useState([
        {type: 'food', behavior: 'income', amount: '19', time: '2023.5.21', key: 1},
        {type: 'food', behavior: 'expenditure', amount: '19', time: '2023.5.20', key: 2},
        {type: 'food', behavior: 'income', amount: '19', time: '2023.5.21', key: 3},
        {type: 'food', behavior: 'income', amount: '19', time: '2023.5.20',key: 4},
        {type: 'food', behavior: 'income', amount: '19', time: '2023.5.20', key: 5},
        {type: 'food', behavior: 'expenditure', amount: '19', time: '2023.5.20', key: 6},
        {type: 'food', behavior: 'income', amount: '19', time: '2023.5.20', key: 7},
        {type: 'food', behavior: 'income', amount: '19', time: '2023.5.20',key: 8},
        {type: 'food', behavior: 'income', amount: '19', time: '2023.5.20', key: 9},
        {type: 'food', behavior: 'expenditure', amount: '19', time: '2023.5.20', key: 10},
        {type: 'food', behavior: 'income', amount: '19', time: '2023.5.20', key: 11},
        {type: 'food', behavior: 'income', amount: '19', time: '2023.5.20',key: 12},
    ]);

    //filter the data of today
    const todayData = data.filter(item => judgeToday(currentTime, item.time));

    const reviewDetails = (item) => {
        navigation.navigate('Details', {item});
    }

    return (
        <ScrollView style = {styles.container} showsVerticalScrollIndicator = {false}>

            <ModuleCard title = {'OVERVIEW'}>
                <OverviewContent />
            </ModuleCard>

            <ModuleCard title = {'RECORD'}>
                {todayData.map((item, index) => (
                    <TouchableOpacity key = {index} onPress={() => reviewDetails({item})}>
                        <Card>
                            <Accounts item = {item} />
                        </Card>
                    </TouchableOpacity>
                ))}
            </ModuleCard>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(240, 240, 240)',
        paddingHorizontal: 18,
    },
})