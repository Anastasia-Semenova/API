import * as React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native' ;
import About from './About';

const Stack = createNativeStackNavigator();


function Confidential(){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Confidential</Text>
    </View>
  );
}


export default Confidential;