import react, {useState} from "react";

import { Ionicons } from '@expo/vector-icons';

import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import Card from "../shared/card";
import { BottomNavigation } from "react-native-paper";

export default function Add() {

  const mainColor = '#F5A80F';

  function Item({title, content}) {
    return (
      <View style = {styles.itemContainer}>
        <Ionicons name="fast-food-outline" size={24} color="#787878" />
        <Text style = {styles.text}>{title}</Text>
        <TextInput
        style={{ ...styles.textinput, ...styles.placeholder }}
        placeholder = {content}
        placeholderTextColor={'#333'}
        />
      </View>
    );
  }

  const [typeText, setTypeText] = useState('');

    return (
      <View style = {styles.container}>
        <View style = {[styles.amountContainer, {borderColor: mainColor}]}>
          <View style = {styles.title}>
            <Text style = {[styles.titleText, {color: mainColor}]}>EXPENSES</Text>
          </View>
        <TextInput
          placeholder="6.34"
          style={{ ...styles.typeInput, ...styles.typePlaceholder }}
          placeholderTextColor = {mainColor}
        />
        </View>
        <View style = {styles.infoContainer}>
          <Card>
            <TouchableOpacity style = {styles.itemContainer} onPress = {() => setTypeText('food')}>
              <Ionicons name="fast-food-outline" size={24} color="#787878" />
              <Text style = {styles.text}>TYPE</Text>
              <TextInput
              readOnly = {true}
              value = {typeText}
              style={{ ...styles.textinput, ...styles.placeholder }}
              placeholderTextColor={'#333'}
              />
            </TouchableOpacity>
          </Card>
          <Card>
            <Item title = {'TIME'} content = {'type time here...'}/>
          </Card>
          <Card>
            <Item title = {'REMARK'} content = {'...'}/>
          </Card>
        </View>
        <TouchableOpacity style = {[styles.confirmButtom, {backgroundColor: mainColor}]}>
          <Text style = {styles.buttomText}>comfirm</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 120,
    paddingHorizontal: 14,
  },
  amountContainer: {
    borderWidth: 2,
    borderRadius: 10,
    position: 'relative',
   Vertical: 22,
    marginTop: 8,
  },
  title: {
    position: 'absolute',
    top: -12,
    left: 8,
    backgroundColor: '#fff',
  },
  titleText: {
    fontFamily: 'nunito-bold',
    fontSize: 15,
  },
  typeInput: {
    height: 80,
    paddingHorizontal: 6,
  },
  typePlaceholder: {
    fontSize: 50,
    fontFamily: 'nunito-regular',
  },
  itemContainer: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    gap: 8,
  },
  textinput: {
    width: 200,
    height: 40,
    marginLeft: 2,
    paddingBottom: 2,
  },
  placeholder: {
    fontSize: 18,
    fontFamily: 'nunito-bold',
  },
  text: {
    fontFamily: 'nunito-regular',
    fontSize: 14,
    color: 'rgb(120, 120, 120)',
  },
  confirmButtom: {
    height: 60,
    width: 240,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 40,
    borderRadius: 16,
    elevation: 3,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
  },
  buttomText: {
    color: '#fff',
    fontFamily: 'nunito-bold',
    fontSize: 20,
  }
});