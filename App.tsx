import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import image from './assets/image.png';
import gon1 from './assets/gon1.png';
import gon2 from './assets/gon2.png';
import gon3 from './assets/gon3.png';
import star from './assets/star.png';
import blue from './assets/blue.png';
import red from './assets/red.png';
import pink from './assets/pink.png';
import yellow from './assets/yellow.png';
import s from './assets/letter-s.png';
import m from './assets/letter-m.png';
import l from './assets/letter-l.png';

export default function App() {

  const AppButton = ({ title }) => (
    <TouchableOpacity style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      <ScrollView horizontal={true} bounces={false} style={styles.scroll}>
        <Image style={styles.stretch} source={gon1} />
        <Image style={styles.stretch} source={gon2} />
        <Image style={styles.stretch} source={gon3} />
      </ScrollView>
      <Text style={styles.h1}>Some Item</Text>
      <Text style={styles.text}>$28.45</Text>
      <Text style={styles.description}>Описание товара. описание товописание тов товарание товараописание товараописание товараописание товараописание товараописание товараописание товара</Text>
      <View style={styles.allicons}>
        <Image source={star} style={styles.icon}></Image>
        <Image source={star} style={styles.icon}></Image>
        <Image source={star} style={styles.icon}></Image>
        <Image source={star} style={styles.icon}></Image>
        <Image source={star} style={styles.icon}></Image>
      </View>
      <View style={styles.allicons}>
        <Image source={blue} style={styles.icon}></Image>
        <Image source={red} style={styles.icon}></Image>
        <Image source={pink} style={styles.icon}></Image>
        <Image source={yellow} style={styles.icon}></Image>
      </View>
      {/* <View style={styles.allicons}>
        <Text style={styles.size}>S</Text>
        <Text style={styles.size}>M</Text>
        <Text style={styles.size}>L</Text>
        <Text style={styles.size}>XL</Text>
      </View> */}
      <View style={styles.allicons}>
        <Image source={s} style={styles.icon}></Image>
        <Image source={m} style={styles.icon}></Image>
        <Image source={l} style={styles.icon}></Image>
      </View>
      <AppButton title={'ADD TO CART'}></AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf2f3',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },
  scroll: {
    width: 200,
    maxHeight: 200,
    marginTop: 100,
    marginBottom: 20,
  },
  h1: {
    fontSize: 28,
    flexDirection: 'row',
    color: '#a7a3bf',
    fontWeight: '700'
  },
  text: {
    fontSize: 20,
    marginTop: 20,
    color: '#2f9e77',
    fontWeight: '700'
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 20,
  },
  allicons: {
    flexDirection: "row",
    flexWrap: "nowrap",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    marginTop: 20,
    color: '#a7a3bf',
    fontWeight: '500'
  },
  size: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#a4c8d5",
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
  }
});
