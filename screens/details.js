// import react from "react";
// import { View, Text, StyleSheet,TouchableOpacity, Alert } from "react-native";
// import BillCard from "../shared/billCard";

// export default function Details() {

//     function showAlert() {
//         Alert.alert('Tips', 'Do you want to delete the item ?', [
//             {
//               text: 'NO',
//             //   onPress: () => console.log('Cancel Pressed'),
//               style: {cancel: true, backgroundColor: '#F76666'},
//             },
//             {text: 'YES', onPress: () => console.log('OK Pressed')},
//           ]);
//     }

//     return (
//         <View style = {styles.container}>
//             <BillCard />
//             <TouchableOpacity
//             style = {styles.deleteButtom}
//             onPress = {showAlert}>
//                 <Text style = {styles.text}>DELETE</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         marginTop: 100,
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         gap: 50,
//     },
//     deleteButtom: {
//         height: 50,
//         width: 280,
//         backgroundColor: '#f76666',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 8,
//     },
//     text: {
//         fontFamily: 'nunito-bold',
//         color: '#fff',
//         fontSize: 16,
//     }
// })

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import BillCard from '../shared/billCard';
import TipModal from '../shared/tipModal';

export default function Details() {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
        <BillCard />
        <TouchableOpacity style={styles.deleteButton} onPress={() => setShowModal(true)}>
            <Text style={styles.text}>DELETE</Text>
        </TouchableOpacity>
        <TipModal showModal = {showModal} setShowModal = {setShowModal}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  deleteButton: {
    height: 50,
    width: 280,
    backgroundColor: '#F76666',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 50,
  },
  text: {
    fontFamily: 'nunito-bold',
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalText: {
    fontFamily: 'nunito-bold',
    fontSize: 18,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    },
    cancelButton: {
    backgroundColor: '#B0B0B0',
    marginRight: 10,
    },
    buttonText: {
    fontFamily: 'nunito-bold',
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    },
    });
