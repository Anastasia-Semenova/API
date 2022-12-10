import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput} from 'react-native';
import { NavigationContainer } from
'@react-navigation/native' ;
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginForm from './components/LoginForm';
import WelcomeScreen from './components/WelcomeScreen';

const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginForm}/>
        <Stack.Screen name='Welcome' component={WelcomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;


