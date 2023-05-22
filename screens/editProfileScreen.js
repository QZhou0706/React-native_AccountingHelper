import React from "react";
import { View, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ImageBackground, Text } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from "react-native-paper";
import { profileData, setProfile } from "../global/userInfo";

const EditProfileScreen = ({ navigation }) => {
  const [userInfo, setUserInfo] = React.useState(profileData);
  const { colors } = useTheme();

  const handleInputChange = (key, value) => {
    setUserInfo({
      ...userInfo,
      [key]: value
    });
  };

  const handleSubmit = () => {
    setProfile(userInfo);
    navigation.navigate('Profile', {userInfo} )
  };

  return (
    <View style={Styles.container}>
      <View style={{ margin: 20 }}>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={() => { }}>
            <View style={{
              height: 100,
              width: 100,
              borderRadius: 15,
              justifyContent: 'center',
            }}>
              <ImageBackground
                source={{
                  uri: "https://cdn.pixabay.com/photo/2023/04/28/14/35/dog-7956828_960_720.jpg"
                }}
                style={{ height: 100, width: 100 }}
                imageStyle={{ borderRadius: 15 }}
              >
                <View style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <Icon name="camera" size={35} color="#fff" style={{
                    opacity: 0.7,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: '#fff',
                    borderRadius: 10,
                  }} />

                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
            {userInfo.username}
          </Text>
        </View>
        <View style={Styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Name"
            placeholderTextColor="#666666"
            style={[Styles.textinput, {
              color: colors.text
            }]}
            onChangeText={(value) => handleInputChange('name', value)}
            value={userInfo.name}
          />
        </View>
        <View style={Styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Age"
            placeholderTextColor="#666666"
            style={[Styles.textinput, {
              color: colors.text
            }]}
            onChangeText={(value) => handleInputChange('age', value)}
            value={userInfo.age}
          />
        </View>
        <View style={Styles.action}>
          <FontAwesome name="phone" color={colors.text} size={20} />
          <TextInput
            placeholder="Phone"
            keyboardType='number-pad'
            placeholderTextColor="#666666"
            style={[Styles.textinput, {
              color: colors.text
            }]}
            onChangeText={(value) => handleInputChange('phone', value)}
            value={userInfo.phone}
          />
        </View>
        <View style={Styles.action}>
          <FontAwesome name="envelope-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            keyboardType='email-address'
            style={[Styles.textinput, {
              color: colors.text
            }]}
            onChangeText={(value) => handleInputChange('email', value)}
            value={userInfo.email}
          />
        </View>
        <View style={Styles.action}>
          <FontAwesome name="globe" color={colors.text} size={20} />
          <TextInput
            placeholder="Country"
            placeholderTextColor="#666666"
            style={[Styles.textinput, {
              color: colors.text
            }]}
            onChangeText={(value) => handleInputChange('location', value)}
            value={userInfo.location}
          />
        </View>
        <TouchableOpacity style={Styles.commandButton} onPress={handleSubmit}>
          <Text style={Styles.panelBUttonTitle}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

};




export default EditProfileScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 27,
    height: 35,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: 'center',
    marginVertical: 7,
  },
  panelBUttonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
    borderWidth: 1,
    height: 50,
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#ccc',
    paddingLeft: 10,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textinput: {
    marginLeft: 5,
    flex: 1,
    marginTop: -4,
    paddingLeft: 10,
    color: '#05375a',
  }
})