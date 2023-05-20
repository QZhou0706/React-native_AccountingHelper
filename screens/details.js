import react from "react";
import { View, Text, StyleSheet  } from "react-native";
import BillCard from "../shared/billCard";

export default function Details() {
    return (
        <View style = {styles.container}>
            <BillCard>
                
            </BillCard>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flex: 1,
        backgroundColor: '#fff',
    },
    bill: {
        marginTop: 80,
        height: '70%',
        backgroundColor: 'pink',
    },
    billHeader: {
        flexDirection: 'row',
    }
})