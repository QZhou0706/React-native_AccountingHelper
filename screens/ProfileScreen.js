import React from "react";
import {View,StyleSheet,SafeAreaView} from 'react-native';
import {Avatar,Title,Caption,Text,TouchableRipple,} from 'react-native-paper'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ProfileScreen = () => {
    return (
        <SafeAreaView style = {Styles.container}>
            <View style = {Styles.userInfoSection}>
                <View style = {{flexDirection:'row',marginTop:15}}>
                    <Avatar.Image
                        source={{
                            uri:'https://api.adorable.io/avatars/80/abott@adorable.png',
                        }}
                        size={80}
                    />
                    <View style = {{marginLeft:20}}>
                        <Title style = {[Styles.title,{
                            marginTop:15,
                            marginBottom:5,
                        }
                        ]}>John Doe</Title>
                        <Caption style = {Styles.caption}>@j_doe</Caption>
                    </View>
                </View>
            </View>
            <View style = {Styles.row}>
                    <Icon name = "map-marker-radius" color="#777777" size={20}/>
                    <Text style={{color:"#777777",marginLeft:20}}>zyfy, china</Text>
            </View>
            <View style = {Styles.row}>
                    <Icon name = "phone" color="#777777" size={20}/>
                    <Text style={{color:"#777777",marginLeft:20}}>180####7048</Text>
            </View>
            <View style = {Styles.row}>
                    <Icon name = "email" color="#777777" size={20}/>
                    <Text style={{color:"#777777",marginLeft:20}}>2804###5342@qq.com</Text>
            </View>
            <View style={Styles.infoBoxWrapper}>
                <View style = {[Styles.infoBox,{
                    borderBottomColor:"#dddddd",
                    borderRightWidth:0.2
                }]}>
                    <Title>$150</Title>
                    <Caption>Wallet</Caption>
                </View>
                <View style = {Styles.infoBox}>
                    <Title>12</Title>
                    <Caption>Orders</Caption>
                </View>     
            </View>
            <View style = {Styles.menuWrapper}>
                <TouchableRipple onPress = {()=>{}}>
                    <View style = {Styles.menuItem}>
                        <Icon name = "heart-outline" color= "#FF6347" size={25}/>
                        <Text style = {Styles.menuItemText}>Your Favorites</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress = {()=>{}}>
                    <View style = {Styles.menuItem}>
                        <Icon name = "credit-card" color= "#FF6347" size={25}/>
                        <Text style = {Styles.menuItemText}>Payment</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress = {()=>{}}>
                    <View style = {Styles.menuItem}>
                        <Icon name = "share-outline" color= "#FF6347" size={25}/>
                        <Text style = {Styles.menuItemText}>Tell Your Friends</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress = {()=>{}}>
                    <View style = {Styles.menuItem}>
                        <Icon name = "account-check-outline" color= "#FF6347" size={25}/>
                        <Text style = {Styles.menuItemText}>Support</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress = {()=>{}}>
                    <View style = {Styles.menuItem}>
                        <Icon name = "settings-outline" color= "#FF6347" size={25}/>
                        <Text style = {Styles.menuItemText}>Settings</Text>
                    </View>
                </TouchableRipple>
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:30,
    },
    userInfoSection: {
        paddingHorizontal:30,
        marginBottom:25,
    },
    title: {
        fontSize:24,
        fontWeight:'bold',
    },
    caption: {
        fontSize:14,
        lineHeight:14,
        fontWeight:'500',
    },
    row: {
        flexDirection:'row',
        marginBottom:10,
        marginLeft:30,
    },
    infoBoxWrapper:{
        borderBottomColor:"#dddddd",
        borderBottomWidth:1,
        borderTopColor:'#dddddd',
        borderTopWidth:1,
        flexDirection:'row',
        height:100,
    },
    infoBox:{
        width:"50%",
        alignItems:'center',
        justifyContent:'center',
    },
    menuWrapper:{
        marginTop:10,
    },
    menuItem:{
        flexDirection:'row',
        paddingVertical:15,
        paddingHorizontal:30,
    },
    menuItemText:{
        color:'#777777',
        marginLeft:20,
        fontWeight:'600',
        fontSize:16,
        lineHeight:26
    },
})