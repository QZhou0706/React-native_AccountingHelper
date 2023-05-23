import { View, Text, StyleSheet } from 'react-native';

function About({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>AccountingHelper</Text>
        <Text style={styles.text}>version 1.0.0</Text>
        <View style={styles.authorInfo}>
          <Text style={[styles.text, { color: 'rgb(110, 110, 110)' }]}>author: </Text>
          <Text style={styles.text}>Aric  Daintryy  Zgoofy</Text>
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <Text style={[styles.text, { fontSize: 18 }]}>
          Motivated by the fact that our teammates have difficulty  well managing their daily expenses, we have created this new Accounting App that contains a quick and convenient way to keep records of expenses and an intuitive display of financial statements.
          Happy Accounting!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    paddingHorizontal: 15,
  },
  titleWrapper: {
    paddingBottom: 25,
    borderBottomColor: 'rgba(200, 200, 200, 0.8)',
    borderBottomWidth: 1,
  },
  title: {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 28,
    marginTop: 35,
    marginBottom: 20,
  },
  authorInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  contentWrapper: {
    flex: 1,
    paddingTop: 25,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'nunito-regular',
  }
})

export default About;