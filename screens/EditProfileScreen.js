import React from "react";
import {View,StyleSheet,SafeAreaView,TouchableOpacity,TextInput,ImageBackground,Text} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from "react-native-paper";
import { color } from "react-native-reanimated";
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from "react-native-reanimated";
const EditProfileScreen = () => {
    const {colors} = useTheme();
    
    const renderInner = () => (
        <Text>hello</Text>
    );
    const renderHeader = () => (
        <View style = {Styles.header}>
            <View style = {Styles.panelHeader}>
                <View style = {Styles.panelHandle }> </View>
            </View>
        </View>
    )
    bs = React.createRef();
    fall = new Animated.Value(1);

    return (    
        <View style = {Styles.container}>
            <BottomSheet 
                ref = {this.bs}
                snapPoints={[330,0]}
                renderContent={this.renderInner}
                renderHeader={this.renderHeader}
                initialSnap={1}
                callbackNode={this.fall}
                enabledGestureInteraction={true}
            />
            <Text>Edit Profile</Text>
            <View style = {{margin:20}}>
                <View style = {{alignItems:'center'}}>
                    <TouchableOpacity onPress = {()=>this.bs.current.snapTo(0)}>
                        <View style = {{
                            height:100,
                            width:100,
                            borderRadius:15,
                            justifyContent:'center',
                            // alignItems:'cneter',
                        }}>
                            <ImageBackground
                                source = {{
                                    uri:"https://cdn.pixabay.com/photo/2023/04/28/14/35/dog-7956828_960_720.jpg"
                                }}
                                style={{height:100,width:100}}
                                imageStyle={{borderRadius:15}}
                            >
                                <View style = {{
                                    flex:1,
                                    justifyContent:'center',
                                    alignItems:'center',
                                }}>
                                    <Icon name = "camera" size={35} color="#fff" style = {{
                                        opacity:0.7,
                                        alignItems:'center',
                                        justifyContent:'center',
                                        borderWidth:1,
                                        borderColor:'#fff',
                                        borderRadius:10,
                                    }}/>

                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <Text style = {{marginTop:10,fontSize:18,fontWeight:'bold'}}>
                        zGoofy
                    </Text>
                </View>
                <View style = {Styles.action}>
                    <FontAwesome name = "user-o" color={colors.text} size={20}/>
                    <TextInput
                        placeholder="First Name"
                        placeholderTextColor="#666666"
                        keyboardType='number-pad'
                        autoCapitalize={false}
                        style = {[Styles.textinput,{
                            color:colors.text
                        }]}
                    />
                </View>
                <View style = {Styles.action}>
                <FontAwesome name = "user-o" color={colors.text} size={20}/>
                <TextInput
                    placeholder="Last Name"
                    placeholderTextColor="#666666"
                    autoCapitalize={false}
                    style = {[Styles.textinput,{
                        color:colors.text
                    }]}
                />
                </View>
                <View style = {Styles.action}>
                <FontAwesome name = "phone" color={colors.text} size={20}/>
                <TextInput
                    placeholder="Phone"
                    placeholderTextColor="#666666"
                    autoCapitalize={false}
                    style = {[Styles.textinput,{
                        color:colors.text
                    }]}
                />
                </View>
                <View style = {Styles.action}>
                <FontAwesome name = "envelope-o" color={colors.text} size={20}/>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#666666"
                    keyboardType='email-address'
                    autoCapitalize={false}
                    style = {[Styles.textinput,{
                        color:colors.text
                    }]}
                />
                </View>
                <View style = {Styles.action}>
                <FontAwesome name = "globe" color={colors.text} size={20}/>
                <TextInput
                    placeholder="Country"
                    placeholderTextColor="#666666"
                    autoCapitalize={false}
                    style = {[Styles.textinput,{
                        color:colors.text
                    }]}
                />
                </View>
                <View style = {Styles.action}>
                <FontAwesome name = "map-marker" color={colors.text} size={20}/>
                <TextInput
                    placeholder="City"
                    placeholderTextColor="#666666"
                    autoCapitalize={false}
                    style = {[Styles.textinput,{
                        color:colors.text
                    }]}
                />
                </View>
                <TouchableOpacity style={Styles.commandButton} onPress={()=>{}}>
                    <Text style = {Styles.panelBUttonTitle}>Submit</Text>
                </TouchableOpacity>
            </View>

        </View>
    );

};





export default EditProfileScreen;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:30,
    },
    commandButton: {
        padding:15,
        borderRadius:10,
        backgroundColor:'#FF6347',
        alignItems:'center',
        marginTop:10,
    },
    panel:{
        padding:20,
        backgroundColor:"#FFFFFF",
        paddingTop:20,
    },
    header:{
        backgroundColor:'#FFFFFF',
        shadowColor:'#333333',
        shadowOffset:{width:-1,height:-3},
        shadowRadius:2,
        shadowOpacity:0.4,
        paddingTop:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    panelHeader:{
        alignItems:'center',
    },
    panelHandle:{
        width:40,
        height:8,
        borderRadius:4,
        backgroundColor:'#00000040',
        marginBottom:10,
    },
    panelTitle: {
        fontSize:27,
        height:35,
    },
    panelSubtitle:{
        fontSize:27,
        height:35,
    },
    panelButton:{
        padding:13,
        borderRadius:10,
        backgroundColor:"#FF6347",
        alignItems: 'center',
        marginVertical:7,
    },
    panelBUttonTitle:{
        fontSize:17,
        fontWeight:'bold',
        color:'white',
    },
    action:{
        flexDirection:'row',
        marginTop:10,
        marginBottom:10,
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2',
        paddingBottom:5,
    },
    actionError:{
        flexDirection:'row',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#FF0000',
        paddingBottom:5,
    },
    textinput:{
        flex:1,
        marginTop:-4,
        paddingLeft:10,
        color:'#05375a',
    }
})