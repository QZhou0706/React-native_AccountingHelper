import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import WhiteCard from '../shared/whiteCard';
import ColorCard from "../shared/colorCard";
import { profileData } from "../global/userInfo";

export default function ProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.line}></View>
                <View style={styles.photoContainer}>
                    <Image
                        source={require('../assets/images/tx1.jpg')}
                        style={{ width: 120, height: 120, borderRadius: 60 }}
                    />
                </View>
                <View style={styles.info}>
                    <Text style={{ fontFamily: 'nunito-bold', fontSize: 25, padding: 10, color: '#333' }}>{profileData.name}</Text>
                    <Text style={{ fontFamily: 'nunito-bold', fontSize: 15, color: 'grey' }}>Age: {profileData.age}</Text>
                </View>
                <WhiteCard>
                    <Icon name="map-marker-radius" color="#777777" size={26} />
                    <Text style={styles.text}>{profileData.location}</Text>
                </WhiteCard>
                <WhiteCard>
                    <Icon name="phone" color="#777777" size={26} />
                    <Text style={styles.text}>{profileData.phone}</Text>
                </WhiteCard>
                <WhiteCard>
                    <Icon name="email" color="#777777" size={26} />
                    <Text style={styles.text}>{profileData.email}</Text>
                </WhiteCard>
                <TouchableOpacity 
                onPress={() => navigation.navigate('EditProfile')}
                style={styles.card}>
                    <ColorCard>
                        <Icon name="account-settings" color="#777777" size={26} />
                        <Text style={{ fontFamily: 'nunito-bold', fontSize: 16, color: '#fff' }}>Settings</Text>
                    </ColorCard>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(249, 198, 17)',
        // bottom: 40,
    },
    card: {
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'rgb(249, 198, 17)',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        width: '90%',
        alignSelf: 'center'
    },
    wrapper: {
        width: '100%',
        height: '82%',
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
        color: '#818181',
    },
    line: {
        height: 5,
        width: '80%',
        alignSelf: 'center',
        backgroundColor: 'rgb(220, 220, 220)',
        marginTop: 14,
        borderRadius: 16,
    }
})
