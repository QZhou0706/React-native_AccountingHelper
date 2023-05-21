import react from "react";
import { View, StyleSheet,Text } from "react-native";

export default function Circle({leftDistants, size}) {
    const circleSize = size;
    return (
      <View style={[styles.circle, {left: leftDistants}, {height: circleSize / 2}, {width: circleSize}, {borderTopLeftRadius: circleSize}, {borderTopRightRadius: circleSize}]}>
        <View style={[styles.whiteLine, {width: circleSize - 4}]}></View>
      </View>
    );
}

const styles = StyleSheet.create({
circle: {
    borderWidth: 2,
    borderColor: '#F5A80F',
    backgroundColor: '#fff',
    bottom: -2,
    zIndex: 2,
    position: 'absolute',
},
whiteLine: {
    position: 'absolute',
    bottom: -2,
    left: 0,
    height: 3,
    backgroundColor: '#fff',
}
});