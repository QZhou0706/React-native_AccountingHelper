import React, {useState} from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Card from "../shared/card"
import ModuleCard from "../shared/ModuleCard";
import Bar from "../shared/bar";
import { Fontisto } from '@expo/vector-icons';

//判断数据是否为今日数据的函数
function judgeToday(currentDate, date) {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const currentTime = year + '.' + month + '.' + day;
    if(currentTime === date) return true;
    return false;
}

export default function Home() {

    // 获取时间的函数
    const currentTime = new Date();
    console.log(currentTime);

    //总数据
    const [data, setData] = useState([
        {type: 'food', behavior: 'income', amount: '19', time: '2023.5.20', key: 1},
        {type: 'food', behavior: 'expenditure', amount: '19', time: '2023.5.20', key: 2},
        {type: 'food', behavior: 'income', amount: '19', time: '2023.5.20', key: 3},
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

    //今日数据筛选
    const todayData = data.filter(item => judgeToday(currentTime, item.time));

    function Accounts({item}) {
        return (
            <View style = {styles.itemContainer}>
                <View justifyContent = 'center'>
                    <View style = {styles.iconContainer}>
                        <Ionicons name="fast-food-outline" size={30} color="#F5A80F" />
                    </View>
                </View>
                <View style = {styles.info}>
                    <Text style = {[styles.text, styles.title]}>{item.type}</Text>
                    <View style = {[styles.details, {flexDirection : 'row'}]}>
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

    function OverviewContent() {
        return (
            <View style = {styles.border}>
                <Text style = {[styles.text, styles.date]}>2023.5.20</Text>
                <View style = {styles.totalAmountContainer}>
                    <Text style = {styles.title}>Today's balance</Text>
                    <Text style = {styles.colorfulText}>- ￥ 330.10</Text>
                </View>
                <View style = {[styles.dataContainer, {marginBottom: 15}]}>
                    <Text style = {styles.barText}>EXPENSES</Text>
                    <Bar current={10} total = {100} />
                    <Text style = {styles.barText}>￥219</Text>
                </View>
                <View style = {styles.dataContainer}>
                    <Text style = {styles.barText}>INCOME</Text>
                    <Bar current={90} total = {100} />
                    <Text style = {styles.barText}>￥23</Text>
                </View>
            </View>
        );
    }

    return (
        <ScrollView style = {styles.container} showsVerticalScrollIndicator = {false}>
            <ModuleCard title = {'OVERVIEW'}>
                <OverviewContent />
            </ModuleCard>
            <ModuleCard title = {'RECORD'}>
                {
                    todayData.map((item) => (
                        <TouchableOpacity key = {item.key}>
                            <Card>
                                <Accounts item = {item} />
                            </Card>
                        </TouchableOpacity>
                    ))
                }
            </ModuleCard>
            {/* {Tab} */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(240, 240, 240)',
        paddingHorizontal: 18,
    },
    iconContainer: {
        justifyContent : 'center',
        alignContent: 'center',
        paddingLeft: 9,
        backgroundColor: 'rgba(230, 230, 230, 0.5)',
        height: 50,
        width: 50,
        borderRadius: 6,
    },
    border: {
        borderColor: '#F5A80F',
        borderWidth: 2,
        borderRadius: 10,
        position: 'relative',
        paddingHorizontal: 15,
        paddingVertical: 22,
        marginTop: 8,
    },
    date: {
        top: -10,
        backgroundColor: '#fff',
        position:'absolute',
        color: '#F5A80F',
        fontWeight: 700,
        fontSize: 19,
    },
    dataContainer: {
        flex: 1,
        flexDirection: 'row',
        overflow: 'hidden',
        alignItems: 'center',
    },
    totalAmountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    colorfulText: {
        color: '#F76666',
        // fontWeight: 700,
        fontFamily: 'nunito-bold',
        fontSize: 28,
    },
    //带边距的text,用于列表项和卡片标题
    text: {
        fontSize: 16,
        fontFamily: 'nunito-regular',
        textAlignVertical: 'center',
        marginLeft: 10,
        marginBottom: 2,
        color: '#F76666',
    },
    title: {
        // fontWeight: 700,
        fontFamily: 'nunito-bold',
        color: '#333',
        fontSize: 20,
        textAlignVertical: 'center',
    },
    //用于进度条两侧文字
    barText: {
        fontFamily: 'nunito-regular',
        fontSize: 13,
        textAlignVertical: 'center',
        color: 'rgb(80, 80, 80)',
        width: 66,
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 74,
        paddingHorizontal: 5,
    },
    info: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'flex-start',
        marginLeft: 12,
        roundColor: 'pink',
    },
})