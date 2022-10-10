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
      <View style={styles.header}>
        <Text style={styles.headerText}>TEXTTEXT</Text>
      </View>
      <Text style={styles.h1}>Пятиметровый «Тетрис» попал в Книгу рекордов Гиннесса как самый большой в мире</Text>
      <Text style={styles.description}>Испанские энтузиасты собрали его вручную. По размерам автомат с игрой обгоняет африканского слона, а по высоте — жирафа. Чтобы сыграть в него, нужно забраться по приставной лестнице.</Text>
      <Text style={styles.sometxt}>Также создатели написали для него специальную программу, чтобы адаптировать всеми любимую игру под большой экран.</Text>
      <Text style={styles.data}>2017-11-27 13:03:01</Text>
      <View style={styles.item}>
        <Text style={styles.gon}>Gon</Text>
        <Image source={gon1} style={styles.image}></Image>
      </View>
      <AppButton title={'Like'}></AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  h1: {
    fontSize: 24,
    color: '#a7a3bf',
    fontWeight: '700',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    marginTop: 20,
    color: '#2f9e77',
    fontWeight: '700'
  },
  description: {
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    color: '#a7a3bf',
    fontWeight: '500'
  },
  header: {
    //flex:1,
    backgroundColor: '#9aeaef',
    //justifyContent: 'center',
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '600',
  },
  sometxt: {
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    color: '#9aeaef',
    fontWeight: '600'
  },
  data: {
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    color: '#a7a3bf',
    fontWeight: '400'
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    flexDirection: "row-reverse",
    flexWrap: "nowrap",
    justifyContent: "flex-end",
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 50,
    marginLeft: 0,
    borderColor: "#9aeaef",
    borderWidth: 4,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#9aeaef",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 120,
    marginTop: 30
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  gon: {
    fontSize: 24,
    color: '#9aeaef',
    fontWeight: '700',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  }
});
