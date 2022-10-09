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
import { Header } from 'react-native/Libraries/NewAppScreen';

const DATA = [
  {
    id: '1',
    image: gon1,
    title: 'I had a similar problem and looked at many of the other posts here.',
  },
  {
    id: '2',
    image: gon2,
    title: 'I had a similar problem and looked at many of the other posts here.',
  },
  {
    id: '3',
    image: gon3,
    title: 'I had a similar problem and looked at many of the other posts here.',
  },
  {
    id: '4',
    image: kil1,
    title: 'I had a similar problem and looked at many of the other posts here.',
  },
  {
    id: '5',
    image: kil2,
    title: 'I had a similar problem and looked at many of the other posts here.',
  },
  {
    id: '6',
    image: kur1,
    title: 'I had a similar problem and looked at many of the other posts here.',
  },
  {
    id: '7',
    image: kur2,
    title: 'I had a similar problem and looked at many of the other posts here.',
  },
  {
    id: '8',
    image: kur3,
    title: 'I had a similar problem and looked at many of the other posts here.',
  }
];

const Item = ({ title, image }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Image source={image} style={styles.image}></Image>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} image={item.image}/>
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
    flexDirection: "row-reverse",
    flexWrap: "nowrap",
    justifyContent: "flex-end",
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    marginLeft: 10,
    marginRight: 50,
    color: '#7bb3ad',
    fontWeight: '500'
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 50,
    marginLeft: 10
  }
});

export default App;