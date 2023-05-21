import react from "react";
import { View, Text, StyleSheet,TouchableOpacity  } from "react-native";
import BillCard from "../shared/billCard";

export default function Details() {
    return (
        <View style = {styles.container}>
            <BillCard />
            <TouchableOpacity style = {styles.deleteButtom}>
                <Text style = {styles.text}>DELETE</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        gap: 50,
    },
    deleteButtom: {
        height: 50,
        width: 280,
        backgroundColor: '#f76666',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    text: {
        fontFamily: 'nunito-bold',
        color: '#fff',
        fontSize: 16,
    }
})