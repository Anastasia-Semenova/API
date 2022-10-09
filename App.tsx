import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, Button } from 'react-native';
import kur3 from './assets/kur1.png';
import phonecall from './assets/phonecal.png';
import volume from './assets/volume.png';
import micro from './assets/micro.png';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.commontext}>
        <Text style={styles.h1}>Gon Freecs</Text>
        <Text style={styles.text}>CALLING</Text>
      </View >
      <Image source={kur3} style={styles.image}></Image>
      <View style={styles.allicons}>
        <Image source={volume} style={styles.icon}></Image>
        <Image source={phonecall} style={styles.icon}></Image>
        <Image source={micro} style={styles.icon}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cddeef',
  },
  image: {
    flex: 0,
    resizeMode: 'cover',
    justifyContent: 'center',
    width:500,
    height:350,
  },
  h1: {
    fontSize: 32,
    fontWeight: '500',
  },
  text: {
    fontSize: 20,
    fontWeight: '200',
  },
  commontext: {
    marginTop: 60,
    marginBottom: 30,
    left: 30,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 50,
    marginLeft: 50,
    marginTop: 150,
  },
  allicons: {
    flexDirection: "row-reverse",
    flexWrap: "nowrap",
    flex: 1,
    justifyContent: 'center',
  }
});