import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";

import Card from "../shared/card"
import ModuleCard from "../shared/ModuleCard";
import Accounts from "./src/account";
import OverviewContent from "./src/overView";
import NoDataTip from "./src/noDataTip";

import { data, deleteHandler } from '../global/itemData';

export default function Home({ navigation }) {

  const [datas, setDatas] = useState(data);

  useEffect(() => {
    // Add a listener to the navigation focus event
    const unsubscribe = navigation.addListener('focus', () => {
      setDatas(data);
    });
    // Remove the listener when the component unmounts
    return unsubscribe;
  }, [navigation, data]);

  //judeg if the data is today' s data
  function judgeToday(date) {
    let now = new Date(date);

    const currentTime = new Date();     // get current time
    if (currentTime.getFullYear() === now.getFullYear() && currentTime.getMonth() == now.getMonth() && currentTime.getDate() == now.getDate()) return true;
    return false;
  }

  const reviewDetails = (item) => {
    navigation.navigate('Details', { item, deleteHandler });
  }

  
  function RenderRecord() {
    if (todayData.length < 1) {
      return (
        <ModuleCard title={'RECORD'}>
          <NoDataTip />
        </ModuleCard>
      );
    }
    else {
      return (
        <ModuleCard title={'RECORD'}>
          {todayData.map((item, index) => (
            <TouchableOpacity
              onPress={() => reviewDetails(item)}
              key={index}>
              <Card>
                <Accounts item={item} />
              </Card>
            </TouchableOpacity>
          ))}
        </ModuleCard>
      );
    }
  }

  // filter the data of today
  const todayData = datas.filter(item => judgeToday(item.time));

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <ModuleCard title={'OVERVIEW'}>
        <OverviewContent todayData={todayData} />
      </ModuleCard>
      <RenderRecord />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(240, 240, 240)',
    paddingHorizontal: 18,
  },
})