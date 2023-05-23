import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
// import Svg, { Rect, SvgAst } from 'react-native-svg';
import SheetCard from "../shared/sheetCard";
import Rect from "../shared/rect";
import { data } from '../global/itemData';
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#1E2923",
  backgroundGradientToOpacity: 0.0,
  color: (opacity = 1) => `rgba(253, 203, 24, ${opacity})`,
  strokeWidth: 5, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

const screenWidth = Dimensions.get("window").width;
const getIncomeData = (data) => {
  return data.filter(item => item.behavior === 'income');
};

const getTotalIncome = (data) => {
  return getIncomeData(data).reduce((acc, cur) => {
    acc += parseFloat(cur.amount);
    return acc;
  }, 0);
};

const getTotalIncomeNum = (data) => {
  return getIncomeData(data).length;
};

const mergeddata = Object.values(data.reduce((acc, cur) => {
  const key = cur.time;
  if (!acc[key]) {
    acc[key] = { time: cur.time, amount: 0 };
  }
  if (cur.behavior === 'income') {
    acc[key].amount += parseFloat(cur.amount);
  }
  return acc;
}, {})).map(({ time, amount }) => ({ time, amount }));


export default function IncomeSheet({navigation}) {

  const [datas, setDatas] = useState(data);

  useEffect(() => {
    // Add a listener to the navigation focus event
    const unsubscribe = navigation.addListener('focus', () => {
      setDatas(data);
    });
    // Remove the listener when the component unmounts
    return unsubscribe;
  }, [navigation, data]);

  


  const totalIncome = getTotalIncome(data);
  const totalIncomeNum = getTotalIncomeNum(data);
  const income_change_data = {
    labels: mergeddata.map(item => item.time.slice(-2)),
    datasets: [
      {
        data: mergeddata.map(item => {
          const amount = item.amount
          return amount;
        }),
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
  }
  const ratios = data.reduce((acc, cur) => {
    if (cur.behavior === 'income') {
      if (!acc[cur.type]) {
        acc[cur.type] = 0;
      }
      acc[cur.type] += parseFloat(cur.amount);
    }
    return acc;
  }, {});

  Object.keys(ratios).forEach(type => {
    ratios[type] = ratios[type] / totalIncome;
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
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={{ fontWeight: '800', fontSize: 18, marginLeft: 6, marginTop: 10, color: '#F5A80F' }}>{data[0].time} to {data[Math.min(6, data.length - 1)].time}</Text>
      <SheetCard>
        <Text style={{ fontWeight: '800', fontSize: 16, alignSelf: 'center' }}>Overview of incomes trends</Text>
        <View style={styles.separator} />
        <Text style={{ fontWeight: '300', color: 'grey', fontSize: 12 }}>Maximum totalIncomeNum</Text>
        <Text style={{ fontWeight: '300', fontSize: 13 }}>In the past seven days, you have earn <Text style={{ color: 'red' }}>${totalIncome}</Text></Text>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <View>
            <Text style={{ fontWeight: '300', color: 'grey', fontSize: 12 }}>Average daily incomes</Text>
            <Text style={{ fontWeight: '600', fontSize: 14 }}>{(totalIncome / 7).toFixed(2)}</Text>
          </View>
          <View style={{ width: 30 }} />
          <View>
            <Text style={{ fontWeight: '300', color: 'grey', fontSize: 12 }}>Accumulated income</Text>
            <Text style={{ fontWeight: '600', fontSize: 14 }}>{totalIncomeNum}</Text>
          </View>
        </View>
        <LineChart
          data={income_change_data}
          width={screenWidth - 40}
          height={220}
          chartConfig={chartConfig}
        />
      </SheetCard>
      <SheetCard>
        <Text style={{ fontWeight: '800', fontSize: 16, alignSelf: 'center' }}>Overview of income proportion</Text>
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
        {
          r_data.map((item, index) => {
            const { type, value } = item;
            const barWidth = value * 100;
            return (
              <View style={styles.item} key={index}>
                <Text style={styles.type}>{type}</Text>
                <Rect current={value} total={1} />
                <Text style={styles.value}>{value.toFixed(2)}</Text>
              </View>
            )
          })
        }
      </SheetCard>
      <View style = {{height: 90}}></View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 3,
    marginTop: 10,
    marginHorizontal: 6,
  },
  item: {
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    marginBottom: 5
  },
  type: {
    fontSize: 16,
    color: '#333',
    width:66,
  },
  value: {
    marginLeft: 5,
    fontSize: 14,
    color: '#777',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#DDD',
    borderBottomWidth: 2,
  },
});