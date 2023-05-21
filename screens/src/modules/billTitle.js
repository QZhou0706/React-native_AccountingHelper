import react from "react";
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from "react-native";

export default function BillTitle() {
    return (
        <View style = {styles.title}>
            <View style = {styles.iconContainer}>
                <Ionicons name="fast-food-outline" size={24} color="#F5A80F" />
            </View>
            <View style = {styles.type}>
                <Text style = {styles.text}>FOOD</Text>
                <Text style = {styles.text}>- ￥ 1110.00</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        height: '18%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        gap: 15,
        borderColor: '#F5A80F',
        marginBottom: -10,
    },
    iconContainer: {
        backgroundColor: '#F76666',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    },
    type: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontFamily: 'nunito-bold',
        fontSize: 20,
    },
})