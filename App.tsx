import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, Button, TouchableOpacity } from 'react-native';
import gon1 from './assets/gon1.png';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={gon1} style={styles.image} />
        <Text style={styles.text}>Gon</Text>
      </View>
    </View>
  );
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
