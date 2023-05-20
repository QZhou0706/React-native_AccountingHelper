import react from "react";
import { View, StyleSheet,Text } from "react-native";

export default function ModuleCard(props) {
    return (
        <View style = {styles.box}>
            <View style = {styles.titleWrapper}>
                <View style = {styles.rectangle}></View>
                <Text style = {styles.title}>{props.title}</Text>
            </View>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        marginTop: 16,
        paddingVertical: 8,
        paddingHorizontal:10,
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    titleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        textAlignVertical: 'center',
        marginLeft: 8,
        color: 'rgb(80, 80, 80)',
    },
    rectangle: {
        height: 18,
        width: 3,
        backgroundColor: '#F5A80F',
    },
});