import { View, StyleSheet, Text } from "react-native";
import Bar from "../../shared/bar";

export default function OverviewContent() {
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

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontFamily: 'nunito-regular',
        textAlignVertical: 'center',
        marginLeft: 10,
        marginBottom: 2,
        color: '#F76666',
    },
    title: {
        fontFamily: 'nunito-bold',
        color: '#333',
        fontSize: 20,
        textAlignVertical: 'center',
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
    barText: {
        fontFamily: 'nunito-regular',
        fontSize: 13,
        textAlignVertical: 'center',
        color: 'rgb(80, 80, 80)',
        width: 66,
    },
})