import { View, StyleSheet, Text } from "react-native";
import Bar from "./modules/bar";

export default function OverviewContent({ todayData }) {
  const currentData = new Date();
  const currentTime = currentData.getFullYear() + '-' + (currentData.getMonth() + 1) + '-' + currentData.getDate();
  let expenditure = 0, income = 0;
  for (let i = 0; i < todayData.length; i++) {
    let item = todayData[i];
    if (item.behavior === 'income') income += parseInt(item.amount);
    else expenditure += parseInt(item.amount);
  }
  let balance = income - expenditure, total = income + expenditure;
  return (
    <View style={styles.border}>
      <Text style={[styles.text, styles.date]}>{currentTime}</Text>
      <View style={styles.totalAmountContainer}>
        <Text style={styles.title}>Today's balance</Text>
        <Text style={styles.colorfulText}>{balance < 0 ? '-' : '+' + '￥' + Math.abs(balance)}</Text>
      </View>
      <View style={[styles.dataContainer, { marginBottom: 15 }]}>
        <Text style={styles.barText}>EXPENSES</Text>
        <Bar current={expenditure} total={total} />
        <Text style={styles.barText}>￥{expenditure}</Text>
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.barText}>INCOME</Text>
        <Bar current={income} total={total} />
        <Text style={styles.barText}>￥{income}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: 'nunito-regular',
    textAlignVertical: 'center',
    marginLeft: 10,
    marginBottom: 2,
    color: '#F76666',
  },
  title: {
    fontFamily: 'nunito-bold',
    color: '#333',
    fontSize: 20,
    textAlignVertical: 'center',
  },
  border: {
    borderColor: '#F5A80F',
    borderWidth: 2,
    borderRadius: 10,
    position: 'relative',
    paddingHorizontal: 15,
    paddingVertical: 22,
    marginTop: 8,
  },
  date: {
    top: -10,
    backgroundColor: '#fff',
    position: 'absolute',
    color: '#F5A80F',
    fontWeight: 700,
    fontSize: 19,
  },
  dataContainer: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
  },
  totalAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  colorfulText: {
    color: '#F76666',
    // fontWeight: 700,
    fontFamily: 'nunito-bold',
    fontSize: 28,
  },
  barText: {
    fontFamily: 'nunito-regular',
    fontSize: 13,
    textAlignVertical: 'center',
    color: 'rgb(80, 80, 80)',
    width: 66,
  },
})