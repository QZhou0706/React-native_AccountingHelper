import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, FlatList, StyleSheet, ScrollView } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import Rect from "../shared/rect";
import SheetCard from "../shared/sheetCard";
import { data as g_data } from '../global/itemData';
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#1E2923",
  backgroundGradientToOpacity: 0.0,
  color: (opacity = 1) => `rgba(253,	185,	51, ${opacity})`,
  strokeWidth: 15, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

const now = new Date();
const data = g_data;
const screenWidth = Dimensions.get("window").width;

// const data = [
//     {type: 'food', behavior: 'income', amount: '19', key: 1, time: "2022-01-02"},
//     {type: 'other', behavior: 'income', amount: '19', key: 1, time: "2022-01-02"},
//     {type: 'game', behavior: 'expenditure', amount: '29', key: 2, time: "2022-01-03"},
//     {type: 'game', behavior: 'expenditure', amount: '39', key: 2, time: "2022-01-04"},
//     {type: 'game', behavior: 'income', amount: '11', key: 3, time: "2022-01-05"},
//     {type: 'food', behavior: 'income', amount: '77',key: 4, time: "2022-01-06"},
//     {type: 'food', behavior: 'income', amount: '159', key: 5, time: "2022-01-07"},
//     {type: 'food', behavior: 'expenditure', amount: '59', key: 6, time: "2022-01-08"},
//     {type: 'other', behavior: 'income', amount: '39', key: 7, time: "2022-01-09"},
//     {type: 'food', behavior: 'income', amount: '19',key: 8, time: "2022-01-10"},
// ]

const getExpData = (data) => {
  return data.filter(item => item.behavior === 'expenditure');
};

const getTotalExp = (data) => {
  return getExpData(data).reduce((acc, cur) => {
    acc += parseFloat(cur.amount);
    return acc;
  }, 0);
};

const getTotalExpNum = (data) => {
  return getExpData(data).length;
};

const renderItem = ({ item }) => {
  const { type, value } = item;
  const barWidth = value * 100;

  return (
    <View style={styles.item}>
      <Text style={styles.type}>{type}</Text>
      <Rect current={value} total={1} />

      <Text style={styles.value}>{value.toFixed(2)}</Text>
    </View>
  )
}
const mergeddata = Object.values(data.reduce((acc, cur) => {
  const key = cur.time;
  if (!acc[key]) {
    acc[key] = { time: cur.time, amount: 0 };
  }
  if (cur.behavior === 'expenditure') {
    acc[key].amount += parseFloat(cur.amount);
  }
  return acc;
}, {})).map(({ time, amount }) => ({ time, amount }));


export default function ExpSheet({navigation}) {

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    // Add a listener to the navigation focus event
    const unsubscribe = navigation.addListener('focus', () => {
      setDatas(g_data);
    });
    // Remove the listener when the component unmounts
    return unsubscribe;
  }, [navigation, g_data]);

  const totalExp = getTotalExp(data);
  const TotalExpNum = getTotalExpNum(data);
  const exp_change_data = {
    labels: mergeddata.map(item => item.time.slice(-2)),
    datasets: [
      {
        data: mergeddata.map(item => {
          const amount = item.amount
          return amount;
        }),
        color: (opacity = 1) => `rgba(253, 203, 24, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
  }
  const ratios = data.reduce((acc, cur) => {
    if (cur.behavior === 'expenditure') {
      if (!acc[cur.type]) {
        acc[cur.type] = 0;
      }
      acc[cur.type] += parseFloat(cur.amount);
    }
    return acc;
  }, {});

  Object.keys(ratios).forEach(type => {
    ratios[type] = ratios[type] / totalExp;
  });

  const keys = Object.keys(ratios);
  const values = keys.map(key => ratios[key]);
  const types = keys;
  const r_data = types.map((type, index) => ({ type, value: values[index] }));
  r_data.sort((a, b) => b.value - a.value);
  const pro_data = {
    labels: keys,
    data: values
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontWeight: '800', fontSize: 16, marginLeft: 6, marginTop: 10 }}>{data[0].time} to {data[Math.min(6, data.length - 1)].time}</Text>
      <SheetCard>
        <Text style={{ fontWeight: '800', fontSize: 16 }}>Overview of expenditure trends</Text>
        <View style={styles.separator} />
        <Text style={{ fontWeight: '300', color: 'grey', fontSize: 12 }}>Maximum expenditure</Text>
        <Text style={{ fontWeight: '300', fontSize: 13 }}>In the past seven days, you have spent <Text style={{ color: 'red' }}>${totalExp}</Text></Text>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <View>
            <Text style={{ fontWeight: '300', color: 'grey', fontSize: 12 }}>Average daily expenditure</Text>
            <Text style={{ fontWeight: '600', fontSize: 14 }}>{(totalExp / 7).toFixed(2)}</Text>
          </View>
          <View style={{ width: 30 }} />
          <View>
            <Text style={{ fontWeight: '300', color: 'grey', fontSize: 12 }}>Accumulated expenditure transactions</Text>
            <Text style={{ fontWeight: '600', fontSize: 14 }}>{TotalExpNum}</Text>
          </View>
        </View>
        <LineChart
          data={exp_change_data}
          width={screenWidth - 40}
          height={220}
          chartConfig={chartConfig}
        />
      </SheetCard>
      <SheetCard>
        <Text style={{ fontWeight: '800', fontSize: 16 }}>Overview of expenditure proportion</Text>
        <View style={styles.separator} />
        <ProgressChart
          data={pro_data}
          width={screenWidth - 40}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={false}
        />
        <FlatList
          data={r_data}
          renderItem={renderItem}
          keyExtractor={(item => item.type)}
        />
      </SheetCard>



    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 3,
    marginTop: 10,
    marginRight: 10,
  },
  item: {
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    marginBottom: 5
  },
  type: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  value: {
    marginLeft: 5,
    fontSize: 14,
    color: '#777',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});