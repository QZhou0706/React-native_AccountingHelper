import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";

import Card from "../shared/card"
import ModuleCard from "../shared/ModuleCard";
import Accounts from "./src/account";
import OverviewContent from "./src/overView";

export default function Home({ navigation }) {

  const [data, setData] = useState([
    { type: 'Apple', behavior: 'expenditure', amount: '1000', time: '2023-05-22', remark: 'none', uuid: '1234' },
  ]);

  //judeg if the data is today' s data
  function judgeToday(date) {
    let now = new Date(date);

    const currentTime = new Date();     // get current time
    if (currentTime.getFullYear() === now.getFullYear() && currentTime.getMonth() == now.getMonth() && currentTime.getDate() == now.getDate()) return true;
    return false;
  }

  const deleteHandler = (uuid) => {
    const newData = data.filter(item => item.uuid !== uuid);
    setData(newData);
  }

  const reviewDetails = (item) => {
    navigation.navigate('Details', {item, deleteHandler});
  }

  // filter the data of today
  const todayData = data.filter(item => judgeToday(item.time));

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <ModuleCard title={'OVERVIEW'}>
        <OverviewContent />
      </ModuleCard>

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