import react from "react";
import { View, StyleSheet,Text } from "react-native";

export default function BigCircle({leftDistants, deg}) {
    return (
        <View style = {[styles.circle, {left: leftDistants}, {transform: [{rotate: deg}]}]}>
                <View style = {styles.whiteLine}></View>
            </View>
    );
}

const styles = StyleSheet.create({
    circle: {
        height: 14,
        width: 28,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        borderWidth: 3,
        borderColor: '#F5A80F',
        backgroundColor: '#fff',
        zIndex: 2,
        position: 'absolute',
    },
    whiteLine: {
        position: 'absolute',
        bottom: -3.5,
        left: 0,
        height: 4,
        width: 22,
        backgroundColor: '#fff',
    }
});