import { View, Text, StyleSheet } from "react-native";

import { Fontisto, MaterialIcons } from '@expo/vector-icons';

export default function Accounts({item}) {
    return (
        <View style = {styles.itemContainer}>
            <View justifyContent = 'center'>
                <View style = {styles.iconContainer}>
                    {/* <Ionicons name="fast-food-outline" size={30} color="#F5A80F" /> */}
                    <MaterialIcons name={item.type} size={30} color="#F5A80F" />
                </View>
            </View>
            <View style = {styles.info}>
                <Text style = {[styles.text, styles.title]}>{item.type}</Text>
                <View flexDirection = 'row'>
                    <Text style = {styles.text}>{item.behavior}</Text>
                    <Text style = {styles.text}>{item.amount}</Text>
                    <Text style = {styles.timeText}>{item.time}</Text>
                </View>
            </View>
            <View justifyContent = 'center'>
            <Fontisto name="more-v-a" size={20} color="gray" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        justifyContent : 'center',
        alignContent: 'center',
        paddingLeft: 9,
        backgroundColor: 'rgba(230, 230, 230, 0.5)',
        height: 50,
        width: 50,
        borderRadius: 6,
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
    text: {
        fontSize: 16,
        fontFamily: 'nunito-regular',
        marginLeft: 10,
        marginBottom: 2,
        color: '#F76666',
    },
    timeText: {
        fontFamily: 'nunito-regular',
        color: 'rgb(100, 100, 100)',
        fontSize: 12,
        marginLeft: 10,
        alignSelf: 'center',
    },
    title: {
        fontFamily: 'nunito-bold',
        color: '#333',
        fontSize: 20,
        textAlignVertical: 'center',
    },
})