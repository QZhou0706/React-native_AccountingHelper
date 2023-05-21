import React, {useState} from "react";
import { View, Text, Dimensions,FlatList,StyleSheet,ScrollView } from 'react-native';
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

const data = [
    {type: 'food', behavior: 'income', amount: '19', key: 1, date: "2022-01-02"},
    {type: 'other', behavior: 'income', amount: '19', key: 1, date: "2022-01-02"},
    {type: 'game', behavior: 'expenditure', amount: '29', key: 2, date: "2022-01-03"},
    {type: 'game', behavior: 'expenditure', amount: '39', key: 2, date: "2022-01-04"},
    {type: 'game', behavior: 'income', amount: '11', key: 3, date: "2022-01-05"},
    {type: 'food', behavior: 'income', amount: '77',key: 4, date: "2022-01-06"},
    {type: 'food', behavior: 'income', amount: '159', key: 5, date: "2022-01-07"},
    {type: 'food', behavior: 'expenditure', amount: '59', key: 6, date: "2022-01-08"},
    {type: 'other', behavior: 'income', amount: '39', key: 7, date: "2022-01-09"},
    {type: 'food', behavior: 'income', amount: '19',key: 8, date: "2022-01-10"},
    {type: 'Buy', behavior: 'income', amount: '19',key: 8, date: "2022-01-10"},
    {type: 'Buy', behavior: 'income', amount: '19',key: 8, date: "2022-01-10"},
    {type: 'Play', behavior: 'income', amount: '19',key: 8, date: "2022-01-10"},
    {type: 'Play', behavior: 'income', amount: '19',key: 8, date: "2022-01-10"},
]

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

const renderItem = ({item}) => {
  const{type, value} = item;
  const barWidth = value * 100;

  return (
      <View style = {styles.item}>
          <Text style={styles.type}>{type}</Text>
          <Rect current={value} total = {1} />
          {/* <Svg height={20} width={260}>
              <Rect 
                  x="0" 
                  y="5" 
                  width={barWidth} 
                  height="5" 
                  strokeWidth="2" 
                  fill="#FDCB18"   
                  rx="2" 
                  ry="2" 
              />
          </Svg> */}
          <Text style={styles.value}>{value.toFixed(2)}</Text>
      </View>
  )
}
const mergeddata = Object.values(data.reduce((acc, cur) => {
  const key = cur.date;
  if (!acc[key]) {
    acc[key] = { date: cur.date, amount: 0 };
  }
  if (cur.behavior === 'income') {
    acc[key].amount += parseFloat(cur.amount);
  }
  return acc;
}, {})).map(({ date, amount }) => ({ date, amount }));


export default function IncomeSheet() {
    const totalIncome = getTotalIncome(data);
    const totalIncomeNum = getTotalIncomeNum(data);
    const income_change_data = {
      labels : mergeddata.map(item => item.date.slice(-2)),
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
    const types  = keys;
    const r_data = types.map((type, index) => ({ type, value: values[index] }));
    r_data.sort((a, b) => b.value - a.value);
    const pro_data = {
      labels: keys,
      data : values
    };
    return (
        <ScrollView style = {styles.container}>
            <Text style = {{fontWeight: '800',fontSize: 16,marginLeft: 6,marginTop:10}}>{data[0].date} to {data[6].date}</Text>
            <SheetCard>
                <Text style = {{fontWeight: '800',fontSize: 16}}>Overview of expenditure trends</Text>
                <View style={styles.separator} />
                <Text style = {{fontWeight: '300', color:'grey',fontSize: 12}}>Maximum expenditure</Text>
                <Text style={{ fontWeight: '300',fontSize: 13 }}>In the past seven days, you have spent <Text style={{ color: 'red' }}>${totalIncome}</Text></Text>
                <View style = {{flexDirection: 'row',marginTop:15}}>
                    <View>
                    <Text style = {{fontWeight: '300', color:'grey',fontSize: 12}}>Average daily expenditure</Text>
                    <Text style = {{fontWeight: '600',fontSize: 14}}>{(totalIncome/7).toFixed(2)}</Text>
                    </View>
                    <View style={{ width: 30 }} />
                    <View>
                    <Text style = {{fontWeight: '300', color:'grey',fontSize: 12}}>Accumulated expenditure transactions</Text>
                    <Text style = {{fontWeight: '600',fontSize: 14}}>{totalIncomeNum}</Text>
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
                    <Text style = {{fontWeight: '800',fontSize: 16}}>Overview of expenditure proportion</Text>
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
                    data = {r_data}
                    renderItem = {renderItem}
                    keyExtractor = {(item => item.type)}
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
        marginRight:10 ,
    },
  item: {
    margin:5,
    flexDirection: 'row',
    alignItems: 'center',
    padding:2,
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
    borderBottomColor: '#DDD',
    borderBottomWidth: 2,
  },
});