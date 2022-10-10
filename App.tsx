import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, Button, TouchableOpacity } from 'react-native';
import image from './assets/image.png';
import gon1 from './assets/gon1.png';
import gon2 from './assets/gon2.png';
import gon3 from './assets/gon3.png';
import kil1 from './assets/kil1.png';
import kil2 from './assets/kil2.png';
import kil3 from './assets/kil3.png';
import kur1 from './assets/kur3.png';
import kur2 from './assets/kur2.png';
import kur3 from './assets/kur1.png';
import { useFonts } from 'expo-font';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  const AppButton = ({ title }) => (
    <TouchableOpacity style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image source={kil1} style={styles.image} />
      <Text style={styles.h1}>Congratulation, your order is accepted</Text>
      <Text style={styles.description}>Испанские энтузиасты собрали его вручную. По размерам автомат с игрой обгоняет африканского слона, а по высоте — жирафа. Чтобы сыграть в него, нужно забраться по приставной лестнице.</Text>
      <AppButton title={'Like'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: "center",
  },
  h1: {
    fontSize: 20,
    color: '#a7a3bf',
    fontWeight: '700',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 50,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    color: '#a7a3bf',
    fontWeight: '400',
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginTop: 100,
    alignSelf: "center",
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#9aeaef",
    borderRadius: 30,
    paddingVertical: 10,
    width: 300,
    marginTop: 50,
    alignSelf: "center",
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
});
