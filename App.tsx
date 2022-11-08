import * as React from 'react';
import { NavigationContainer } from
'@react-navigation/native' ;
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SomeScreen from './components/SomeScreen';
import Liked from './components/Liked';
import Settings from './components/Settings';
import About from './components/About';
import Condition from './components/Condition';
import Confidential from './components/Confidential';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


function MyDrawer() {
 return (
  <NavigationContainer>
    <Drawer.Navigator useLegacyImplementation={true}>
      <Drawer.Screen name="Главная страница" component={HomeScreen}/>
      <Drawer.Screen name="Избранное" component={Liked} />
      <Drawer.Screen name="Настройки" component={Settings} />
      <Drawer.Screen name="О приложении" component={About} />
      <Drawer.Screen name="Условия использования" component={Condition} />
      <Drawer.Screen name="Политика конфиденциальности" component={Confidential} />
    </Drawer.Navigator>
  </NavigationContainer>
  )
  }

export default MyDrawer;


