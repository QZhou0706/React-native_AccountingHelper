import { View, StyleSheet, Text } from "react-native";
import { Dimensions } from 'react-native';
import Circle from "./modules/circle";
import BigCircle from "./modules/BigCircle";
import DottedLine from "./modules/dottedLine";

import BillTitle from "./modules/billTitle";
import BillContent from "./modules/billContent";

function BottomCircles({ billWidth }) {
    const circles = [];
    let key = 0;
    const size = (billWidth - 116) / 11; // 11 circles
    let leftDistants = 6;
    for (let i = 0; i < 11; i++) {
        circles.push(<Circle leftDistants={leftDistants} key={key} size={size - 2} />);
        key++;
        leftDistants += (10 + size);
    }
    return circles;
}

export default function BillCard({ item }) {
    const screenWidth = Dimensions.get('window').width;
    const billWidth = screenWidth * 0.9;

    return (
        <View style={styles.billWrapped}>
            <BillTitle item={item} />
            <View style={styles.divdingLine}>
                <BigCircle leftDistants={-9} deg={'90deg'} />
                <DottedLine billWidth={billWidth} />
                <BigCircle leftDistants={billWidth - 23} deg={'270deg'} />
            </View>
            <BillContent item={item} />
            <BottomCircles billWidth={billWidth} />
        </View>
    );
}

const styles = StyleSheet.create({
    billWrapped: {
        height: '74%',
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