import react from "react";
import { View, StyleSheet } from "react-native";

export default function Bar({current, total}) {

    const lineWidth = (current / total) * 180;

    return (
        <View style = {styles.bar}>
            <View style = {[styles.line, {width: lineWidth}]}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bar: {
        backgroundColor: 'rgba(245, 168, 15, 0.3)',
        height: 16,
        width: 180,
        borderRadius: 18,
        marginHorizontal: 12,
    },
    line: {
        backgroundColor: 'rgba(245, 168, 15, 0.8)',
        height: 16,
        borderRadius: 18,
    }
});