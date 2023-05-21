import react from "react";
import { View, StyleSheet } from "react-native";

function Line({ billWidth }) {
    const lines = [];
    let key = 0;
    const amount = (billWidth - 30) / 22; 
    for (let i = 0; i < amount; i ++ ) {
        lines.push(<View style = {styles.colorLine} key = {key}></View>);
        key++;
    }
    return lines;
  }

export default function DottedLine({billWidth}) {

    return (
        <View style = {styles.container}>
            <Line billWidth={billWidth} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    colorLine: {
        backgroundColor: '#F5A80F',
        height: 3,
        width: 14,
        marginLeft: 8,
    }
})