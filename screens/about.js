import * as React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../shared/card';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity>
        <Card>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>About Me</Text>
          <Text>123</Text>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

