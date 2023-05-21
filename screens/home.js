import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ScrollView } from "react-native";

import Card from "../shared/card"
import ModuleCard from "../shared/ModuleCard";
import Accounts from "./src/account";
import OverviewContent from "./src/overView";

import {data} from './src/itemData';

//judeg if the data is today' s data
function judgeToday(currentDate, date) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const currentTime = year + '.' + month + '.' + day;
  if (currentTime === date) return true;
  return false;
}

export default function Home({ navigation }) {

  // get current time
  const currentTime = new Date();

  //filter the data of today
  const todayData = data.filter(item => judgeToday(currentTime, item.time));

  const reviewDetails = (item) => {
    navigation.navigate('Details', item);
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <ModuleCard title={'OVERVIEW'}>
        <OverviewContent />
      </ModuleCard>

      <ModuleCard title={'RECORD'}>
        {todayData.map((item, index) => (
          <TouchableOpacity
            onPress={() => reviewDetails({item})}
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