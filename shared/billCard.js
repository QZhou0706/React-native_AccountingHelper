import react from "react";
import { View, StyleSheet,Text } from "react-native";
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Circle from "./src/circle";
import Card from "./card";
import BigCircle from "./src/BigCircle";
import DottedLine from "./src/dottedLine";

import BillTitle from "./src/billTitle";
import BillContent from "./src/billContent";

function BottomCircles({ billWidth }) {
    const circles = [];
    let key = 0;
    const size = (billWidth - 116) / 11; //11个圆
    let leftDistants = 6;
    for (let i = 0; i < 11; i ++ ) {
        circles.push(<Circle leftDistants={leftDistants} key = {key} size = {size - 2}/>);
        key++;
        leftDistants += (10 + size);
    }
    return circles;
  }
  
export default function BillCard() {
    const screenWidth = Dimensions.get('window').width;
    const billWidth = screenWidth * 0.9;

    return (
        <View style={styles.billWrapped}>
            <BillTitle />
            <View style = {styles.divdingLine}>
                <BigCircle leftDistants = {-9} deg = {'90deg'}/>
                    <DottedLine billWidth={billWidth}/>
                <BigCircle leftDistants = {billWidth-23} deg = {'270deg'}/>
            </View>
            <BillContent />
            <BottomCircles billWidth={billWidth} />
        </View>
    );
}

const styles = StyleSheet.create({
    billWrapped: {
        height: '76%',
        width: '90%',
        borderWidth: 2,
        borderColor: '#F5A80F',
        position: 'relative',
    },
    divdingLine: {
        backgroundColor: '#fff',
        height: 32,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'nunito-bold',
        fontSize: 20,
    },
});