import * as React from 'react';
import { NavigationContainer } from
'@react-navigation/native' ;
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import kil1 from '../assets/kil1.png';

function UserKillua({navigation}){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={kil1} style={styles.image} />
          <Text style={styles.text}>Killua</Text>
        </View>
        <Button
          title="Go home"
          onPress={() => navigation.popToTop()}
        />
        <Button
        title="About"
        onPress={() => navigation.navigate('About')}
      />
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      //flex:1,
      backgroundColor: '#9aeaef',
      //justifyContent: 'center',
      width: '100%',
      height: 250,
      alignItems: 'center',
      justifyContent: 'center'
    },
    image: {
      width: 130,
      height: 130,
      resizeMode: 'cover',
      borderRadius: 65,
      marginTop: 30,
      borderColor: "#fff",
      borderWidth: 4,
    },
    text: {
      fontSize: 28,
      flexDirection: 'row',
      color: '#fff',
      fontWeight: '500',
      marginTop: 10
    }
  });

  export default UserKillua;