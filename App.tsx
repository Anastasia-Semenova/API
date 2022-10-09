import React from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, FlatList, SafeAreaView, StatusBar } from 'react-native';
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
import phone from './assets/phone.png';
import video from './assets/video.png'
import ok from './assets/ok.png'

const DATA = [
  {
    id: '1',
    image: gon1,
    title: 'Gon Freeks',
    data: '12 jan 11:14 am',
    icon: phone
  },
  {
    id: '2',
    image: gon2,
    title: 'Gon Freeks',
    data: '12 jan 11:14 am',
    icon: video
  },
  {
    id: '3',
    image: gon3,
    title: 'Gon Freeks',
    data: '12 jan 11:14 am',
    icon: video
  },
  {
    id: '4',
    image: kil1,
    title: 'Killua Zoldic',
    data: '12 jan 11:14 am',
    icon: video
  },
  {
    id: '5',
    image: kil2,
    title: 'Killua Zoldic',
    data: '12 jan 11:14 am',
    icon: phone
  },
  {
    id: '6',
    image: kur1,
    title: 'Kurapica',
    data: '12 jan 11:14 am',
    icon: phone
  },
  {
    id: '7',
    image: kur2,
    title: 'Kurapica',
    data: '12 jan 11:14 am',
    icon: video
  },
  {
    id: '8',
    image: kur3,
    title: 'Kurapica',
    data: '12 jan 11:14 am',
    icon: phone
  }
];

const Item = ({ title, image, data, icon }) => (
  <View style={styles.item}>
    <View style={styles.left}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.icondata}>
          <Image source={ok} style={styles.ok} />
          <Text style={styles.data}>{data}</Text>
        </View>
      </View>
      <Image source={image} style={styles.image} />
    </View>
    <Image source={icon} style={styles.icon} />
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} image={item.image} data={item.data} icon={item.icon} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#f2e8e6",
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    borderRadius: 10,
  },
  left: {
    backgroundColor: '#fff',
    flexDirection: "row-reverse",
    flexWrap: "nowrap",
    justifyContent: "flex-end",
    flex: 1
  },
  title: {
    fontSize: 16,
    marginLeft: 10,
    marginRight: 50,
    color: '#7bb3ad',
    fontWeight: '500',

  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 50,
    marginLeft: 10
  },
  data: {
    fontSize: 14,
    marginLeft: 3,
    color: '#b5cbcc',
    fontWeight: '300',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginTop: 10,
  },
  ok: {
    width: 14,
    height: 14,
    marginTop: 2,
  },
  icondata: {    
    marginVertical: 1,
    marginHorizontal: 10,
    flexDirection: "row",
    flexWrap: "nowrap",
  },
});

export default App;