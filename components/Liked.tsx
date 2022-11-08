import * as React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


function Liked({navigation}){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Liked</Text>
    </View>
  );
}

export default Liked;