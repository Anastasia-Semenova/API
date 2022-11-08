import * as React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


function FinTech({navigation}){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Новости FinTech</Text>
    </View>
  );
}

export default FinTech;