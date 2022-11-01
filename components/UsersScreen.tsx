import * as React from 'react';
import { NavigationContainer } from
'@react-navigation/native' ;
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function UsersScreen({navigation}){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Gon"
          onPress={() => navigation.navigate('Gon')}
        />
        <Button
          title="Killua"
          onPress={() => navigation.navigate('Killua')}
        />
        <Button
          title="Kurapica"
          onPress={() => navigation.navigate('Kurapica')}
        />
        <Button
          title="Go back"
          onPress={() => navigation.goBack()}
        />
        <Button
        title="About"
        onPress={() => navigation.navigate('About')}
      />
      </View>
    );
  }

  export default UsersScreen;