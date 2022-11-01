import * as React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';


function HomeScreen({navigation}){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Users"
        onPress={() => navigation.navigate('Users')}
      />
      <Button
        title="About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}

export default HomeScreen;