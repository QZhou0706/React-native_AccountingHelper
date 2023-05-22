import react, {useState} from "react";

import { View, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import Card from "../shared/card";
import { ReadOnlyItem, Item } from "./src/item";
import TypeModal from "./src/typeModal";

export default function AddExpenses() {

  const [typeText, setTypeText] = useState('chooes a type here');
  const [amountText, setAmountText] = useState('');
  const [timeText, setTimeText] = useState('');
  const [remarkText, setRemarkText] = useState('');

  const [showModal, setShowModal] = useState(false);

  const mainColor = '#F5A80F';
  // const mainColor = '#F76666';

  const OtherColor = '#F9C611';
  // const OtherColor = '#F76666';

  function createItem() {
    console.log(typeText);
    console.log(amountText);
    console.log(timeText);
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
          placeholder = '0.00'
          placeholderTextColor = {mainColor}
          cursorColor = '#fff'
        />
        </View>

        {/* items */}
        <View>
          <Card>
            <ReadOnlyItem typeText={typeText} setTypeText = {setTypeText} setShowModal = {setShowModal} />
          </Card>

          <Card>
            <Item title = {'TIME'} content = {timeText} setContent = {setTimeText} placeholderText = {'e.g. 2023.5.20'}/>
          </Card>

          <Card>
            <Item title = {'REMARK'} content = {remarkText} setContent = {setRemarkText} placeholderText = {'...'}/>
          </Card>

        </View>

        {/* confirm buttom */}
        <TouchableOpacity style={[styles.confirmButtom, { backgroundColor: mainColor }]} onPress={() => createItem()}>
          <Text style={styles.buttomText}>confirm</Text>
        </TouchableOpacity>
        <TypeModal modalColor = {OtherColor} showModal={showModal} setShowModal = {setShowModal} setTypeText = {setTypeText}/>
      </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
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