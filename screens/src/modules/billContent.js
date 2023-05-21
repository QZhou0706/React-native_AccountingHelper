import react from "react";
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from "react-native";
import Card from "../../../shared/card";

export default function BillContent() {
    return (
        <View style = {styles.detailInfo}>
            <Card>
                <View style = {styles.itemContainer}>
                    <Text style = {styles.itemText}>BEHAVIOR</Text>
                    <Text style = {styles.itemText}>INCOME</Text>
                </View>
            </Card>
            <Card>
                <View style = {styles.itemContainer}>
                    <Text style = {styles.itemText}>TIME</Text>
                    <Text style = {styles.itemText}>2023.5.21</Text>
                </View>
            </Card>
            <Card>
                <View style = {styles.itemContainer}>
                    <Text style = {styles.itemText}>REMARK</Text>
                    <Text style = {styles.itemText}>some remark...</Text>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        height: 65,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 6,
    },
    detailInfo: {
        flex: 1,
    },
    itemText: {
        fontFamily: 'nunito-regular',
        fontSize: 15,
    }
});