import * as React from 'react';
import { NavigationContainer } from
'@react-navigation/native' ;
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function AboutScreen({navigation}){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About App</Text>
        <Button
          title="Go home"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
  }

  export default AboutScreen;