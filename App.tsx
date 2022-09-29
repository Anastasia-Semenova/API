import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, Button } from 'react-native';
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
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
      <Text style={styles.h1}>Instagram of 2d</Text>
      <Text style={styles.text}>Gon Freecss</Text>
      <ScrollView horizontal={true} bounces={false} style={styles.scroll}>
        <Image style={styles.stretch} source={gon1}/>
        <Image style={styles.stretch} source={gon2}/>
        <Image style={styles.stretch} source={gon3}/>
      </ScrollView>
      <Text style={styles.text}>Killua Zoldyck</Text>
      <ScrollView horizontal={true} bounces={false} style={styles.scroll}>
        <Image style={styles.stretch} source={kil1}/>
        <Image style={styles.stretch} source={kil2}/>
        <Image style={styles.stretch} source={kil3}/>
      </ScrollView>
      <Text style={styles.text}>Kurapica</Text>
      <ScrollView horizontal={true} bounces={false} style={styles.scroll}>
        <Image style={styles.stretch} source={kur1}/>
        <Image style={styles.stretch} source={kur2}/>
        <Image style={styles.stretch} source={kur3}/>
      </ScrollView>
      <Button title='Please write us'></Button>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 0,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  stretch: {
    width: 150,
    height: 150,
    resizeMode: 'stretch',
  },
  scroll: {
    width: 150,
    maxHeight: 150,
    marginTop: 10,
    marginBottom: 50,
    left:130
  },
  h1: {
    fontSize:28,
    fontWeight:'bold',
    flexDirection:'row',
    left: 25,
    marginBottom: 20,
  },
  text: {
    fontSize:20,
    alignItems: 'center',
    justifyContent: 'center',
    left:130
  },
});
