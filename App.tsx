import * as React from 'react';
import { NavigationContainer } from
'@react-navigation/native' ;
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import UsersScreen from './components/UsersScreen';
import UserGon from './components/UserGon';
import UserKillua from './components/UserKillua';
import UserKurapica from './components/UserKurapica';
import AboutScreen from './components/AboutScreen';

const Stack = createNativeStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Users" component={UsersScreen}/>
        <Stack.Screen name="Gon" component={UserGon}/>
        <Stack.Screen name="Killua" component={UserKillua}/>
        <Stack.Screen name="Kurapica" component={UserKurapica}/>
        <Stack.Screen name="About" component={AboutScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

// главный экран. на нем: Users
//список пользователей
// профиль одного пользователя
// назад
