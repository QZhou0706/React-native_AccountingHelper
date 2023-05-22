import react from "react";
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from "react-native";
import Card from "../../../shared/card";

export default function BillContent({item}) {
    return (
        <View style={styles.detailInfo}>
            <Card>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemText}>BEHAVIOR</Text>
                    <Text style={styles.itemText}>{item.behavior}</Text>
                </View>
            </Card>
            <Card>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemText}>TIME</Text>
                    <Text style={styles.itemText}>{item.time}</Text>
                </View>
            </Card>
            <Card>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemText}>REMARK</Text>
                    <Text style={styles.itemText}>{item.remark}</Text>
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