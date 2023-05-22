import React from "react";
import {View,StyleSheet,SafeAreaView,ScrollView,Image,Text } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
// import {Avatar,Title,Caption,Text,TouchableRipple,} from 'react-native-paper'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import WhiteCard from "../shared/whitecard";
import ColorCard from "../shared/colorCard";

const ProfileScreen2 = () => {
    return (
        <View>
            <ScrollView>
                <View style={{padding:10,width:'100%',backgroundColor:'#000',height:150}}>
                    <TouchableOpacity>

                        <View></View>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center'}} >
                    <Image 
                    source={require('./src/bk.png')} 
                    style={{width:140, height:140,borderRadius:100,marginTop:-70}}
                    />
                    <Text style={{fontSize:25,fontWeight:'bold',padding:10}}>zGoofy </Text>
                    <Text style={{fontSize:15,fontWeight:'bold',color:'grey'}}>21, Male </Text>
                </View>
                <WhiteCard>
                <Icon name = "map-marker-radius" color="#777777" size={20}/>
                <Text style={{fontSize:15,color:'#818181',fontWeight:'bold'}}>China</Text>
                </WhiteCard>
                <WhiteCard>
                <Icon name = "phone" color="#777777" size={20}/>
                <Text style={{fontSize:15,color:'#818181',fontWeight:'bold'}}>18081977048</Text>
                </WhiteCard>
                <WhiteCard>
                <Icon name = "email" color="#777777" size={20}/>
                <Text style={{fontSize:15,color:'#818181',fontWeight:'bold'}}>zyfy@gmail.com</Text>
                </WhiteCard>
                <ColorCard>
                <Icon name = "account-settings" color="#777777" size={20}/>
                <Text style={{fontSize:15,color:'#fff',fontWeight:'bold'}}>Settings</Text>
                </ColorCard>
            </ScrollView>
        </View>
    )



}

export default ProfileScreen2;