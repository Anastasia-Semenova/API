import * as React from 'react';
import { NavigationContainer } from
'@react-navigation/native' ;
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './components/MainScreen';
import OneTodo from './components/OneTodo';
import OneDone from './components/OneDone';

const Stack = createNativeStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen}/>
        <Stack.Screen name="One" component={OneTodo}/>
        <Stack.Screen name="Done" component={OneDone}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;