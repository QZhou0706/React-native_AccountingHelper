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
        borderRadius: 16,
        backgroundColor: '#fff',
        shadowColor: 'black',
        elevation: 3,
        shadowRadius: 4,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
    },
    titleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        textAlignVertical: 'center',
        marginLeft: 8,
        fontFamily: 'nunito-regular',
        color: 'rgb(80, 80, 80)',
    },
    rectangle: {
        height: 18,
        width: 3,
        backgroundColor: '#F5A80F',
    },
});