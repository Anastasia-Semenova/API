import * as React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native' ;
import SomeScreen from './SomeScreen';
import FinTech from './Fintech';
import Al from './Al';
import BigData from './BigData';
import Ml from './Ml'


const Tab = createBottomTabNavigator();


function HomeScreen({navigation}){
    return (
        <Tab.Navigator>
          <Tab.Screen name="Новости ML" component={Ml} />
          <Tab.Screen name="Новости BigData" component={BigData} />
          <Tab.Screen name="Новости Al" component={Al} />
          <Tab.Screen name="Новости FinTech" component={FinTech} />
        </Tab.Navigator>
    )
}

export default HomeScreen;