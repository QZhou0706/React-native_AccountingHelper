import React from "react";
import {View,StyleSheet,SafeAreaView,ScrollView,Image,Text } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
// import {Avatar,Title,Caption,Text,TouchableRipple,} from 'react-native-paper'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import WhiteCard from '../shared/whiteCard';
import ColorCard from "../shared/colorCard";

export default function ProfileScreen2() {
    return (
        <View style = {styles.container}>
            <View style = {styles.wrapper}>
                <View style = {styles.line}></View>
                <View style={styles.photoContainer}>
                    <Image 
                    source={require('../assets/images/tx1.jpg')} 
                    style={{width:120, height:120, borderRadius:60}}
                    />
                </View>
                <View style = {styles.info}>
                    <Text style={{fontFamily: 'nunito-bold', fontSize:25, padding:10, color: '#333'}}>zGoofy</Text>
                    <Text style={{fontFamily: 'nunito-bold', fontSize:15, color:'grey'}}>21, Male </Text>
                </View>
                <WhiteCard>
                    <Icon name = "map-marker-radius" color="#777777" size={26}/>
                    <Text style={styles.text}>China</Text>
                </WhiteCard>
                <WhiteCard>
                    <Icon name = "phone" color="#777777" size={26}/>
                    <Text style={styles.text}>18081977048</Text>
                </WhiteCard>
                <WhiteCard>
                    <Icon name = "email" color="#777777" size={26}/>
                    <Text style={styles.text}>zyfy@gmail.com</Text>
                </WhiteCard>
                <ColorCard>
                    <Icon name = "account-settings" color="#777777" size={26}/>
                    <Text style={{fontFamily: 'nunito-bold', fontSize:16,color:'#fff'}}>Settings</Text>
                </ColorCard>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(249, 198, 17)',
    },
    wrapper: {
        width: '100%',
        height: '80%',
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        alignItems: 'center',
    },
    photoContainer: {
        backgroundColor: '#fff',
        marginTop: -68,
        height: 138,
        width: 138,
        borderRadius: 69,
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        alignItems: 'center',
        marginBottom: 10,
    },
    text: {
        fontFamily: 'nunito-bold',
        fontSize: 16,
        color:'#818181',
    },
    line: {
        height: 6,
        width: '80%',
        alignSelf: 'center',
        backgroundColor: 'rgb(220, 220, 220)',
        marginTop: 14,
        borderRadius: 16,
    }
})
