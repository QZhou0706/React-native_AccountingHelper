import * as React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../shared/card';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Button
        title="Go to ReviewDetails"
        onPress={() => navigation.navigate('ReviewDetails')}
      /> */}
      <TouchableOpacity
      onPress={() => navigation.navigate('ReviewDetails')}>
        <Card>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>go to Details</Text>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

