import react, {useState} from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Dimensions } from "react-native";

import Card from "../shared/card";
import { ReadOnlyItem, Item } from "./src/item";
import TypeModal from "./src/typeModal";
import MyDatePicker from "./src/datePicker";

import { Ionicons, Foundation, MaterialCommunityIcons } from '@expo/vector-icons';

function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = parseInt(date.getMonth()) + 1;
  const day = date.getDate();

  return( year + '.' + month + '.' + day );

}

export default function AddExpenses() {

  const modalWidth = Dimensions.get('window').width * 0.96;
  const iconWidth = (modalWidth - 48 - 54 ) / 4;
  const modalHeight = 75 + 36 + 3 * iconWidth;

  const [typeText, setTypeText] = useState('fastfood');
  const [amountText, setAmountText] = useState('0.00');
  const [time, setTime] = useState(getCurrentDate());
  const [remarkText, setRemarkText] = useState('');

  const [showModal, setShowModal] = useState(false);

  // const mainColor = '#F5A80F';
  const mainColor = '#F76666';

  // const OtherColor = '#F9C611';
  const OtherColor = '#F76666';

  function createItem() {
    console.log(typeText);
    console.log(amountText);
    console.log(time);
    console.log(remarkText);
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style = {styles.container}>
        <View style = {[styles.amountContainer, {borderColor: mainColor}]}>
          <View style = {styles.title}>
            <Text style = {[styles.titleText, {color: mainColor}]}>EXPENSES</Text>
          </View>
        <TextInput
          keyboardType='numeric'
          style={{ ...styles.amountInput, ...styles.amountPlaceholder, color:mainColor }}
          value = {amountText}
          onChangeText = {val => setAmountText(val)}
          cursorColor = '#fff'
        />
        </View>

        {/* items */}
        <View>
          <Card>
            <ReadOnlyItem typeText={typeText} setTypeText = {setTypeText} setShowModal = {setShowModal} />
          </Card>

          <Card>
            <View style = {styles.itemContainer}>
              <Foundation name='clock' size={24} color="#787878" width={20} />
              <Text style = {styles.text}>TIME</Text>
              <MyDatePicker setTime = {setTime} color = {mainColor}/>
            </View>
          </Card>

          <Card>
            <Item title = {'REMARK'} content = {remarkText} setContent = {setRemarkText} placeholderText = {'...'}/>
          </Card>

        </View>

        {/* confirm buttom */}
        <TouchableOpacity style={[styles.confirmButtom, { backgroundColor: mainColor }]} onPress={() => createItem()}>
          <Text style={styles.buttomText}>confirm</Text>
        </TouchableOpacity>
        <TypeModal modalColor = {OtherColor} showModal={showModal} setShowModal = {setShowModal} setTypeText = {setTypeText} modalHeight = {modalHeight}/>
      </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'nunito-regular',
    fontSize: 14,
    color: 'rgb(120, 120, 120)',
    width: 40,
  },
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 14,
    backgroundColor: '#fff',
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
  itemContainer: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    gap: 8,
  },
  amountInput: {
    height: 80,
    paddingHorizontal: 6,
  },
  amountPlaceholder: {
    fontSize: 50,
    fontFamily: 'nunito-regular',
  },
  confirmButtom: {
    height: 60,
    width: 240,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 176,
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