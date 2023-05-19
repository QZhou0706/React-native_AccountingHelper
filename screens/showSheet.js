import React, {useState} from "react";
import { View, Text, Dimensions } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};

const screenWidth = Dimensions.get("window").width;
const data = [
    {type: 'food', behavior: 'income', amount: '19', key: 1, date: "2022-01-02"},
    {type: 'game', behavior: 'expenditure', amount: '29', key: 2, date: "2022-01-03"},
    {type: 'game', behavior: 'expenditure', amount: '39', key: 2, date: "2022-01-04"},
    {type: 'game', behavior: 'income', amount: '11', key: 3, date: "2022-01-05"},
    {type: 'food', behavior: 'income', amount: '77',key: 4, date: "2022-01-06"},
    {type: 'food', behavior: 'income', amount: '159', key: 5, date: "2022-01-07"},
    {type: 'food', behavior: 'expenditure', amount: '59', key: 6, date: "2022-01-08"},
    {type: 'other', behavior: 'income', amount: '39', key: 7, date: "2022-01-09"},
    {type: 'food', behavior: 'income', amount: '19',key: 8, date: "2022-01-10"},
]

const s_data = {
    labels : data.map(item => item.date),
    datasets: [
        {
            data: data.map(item => item.amount),
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
        }
    ],
}

// const typeArray = data.reduce((acc, item) => {
//     const index = acc.findIndex(element => element.type === item.type);
//     if (index === -1) {
//       acc.push({ type: item.type, count: 1 });
//     } else {
//       acc[index].count += 1;
//     }
//     return acc;
//   }, []);
  
//   const total = data.length;
//   const typePercentageArray = typeArray.map(item => ({ type: item.type, percentage: (item.count / total) * 100 }));

// const data2 = {
//     labels: data.map(item => item.type),
//     data: typePercentageArray
// };
const data2 = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8]
  };
export default function Sheet() {
    return (
        <View>
            {/* <LineChart
            data={s_data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            /> */}
            <ProgressChart
            data={data}
            width={screenWidth}
            height={220}
            strokeWidth={16}
            radius={32}
            chartConfig={chartConfig}
            hideLegend={false}
            />
        </View>
    )
}

