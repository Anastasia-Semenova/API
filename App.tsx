import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, Button, SafeAreaView, FlatList } from 'react-native';
import gon1 from './assets/gon1.png';
import gon2 from './assets/gon2.png';
import gon3 from './assets/gon3.png';
import kil1 from './assets/kil1.png';
import kil2 from './assets/kil2.png';
import kil3 from './assets/kil3.png';
import kur1 from './assets/kur3.png';
import kur2 from './assets/kur2.png';
import kur3 from './assets/kur1.png';

const DATA = [
  {
    id: '1',
    image1: gon1,
    image2: gon2,
    image3: gon3,
  },
  {
    id: '2',
    image1: kil1,
    image2: kil2,
    image3: kil3,
  },
  {
    id: '3',
    image1: kur1,
    image2: kur2,
    image3: kur3,
  },
];

const Item = ({ image1, image2, image3 }) => (
  <View style={styles.container}>
    <View style={styles.gallery}>
      <Image source={image1} style={styles.image} />
      <Image source={image2} style={styles.image} />
      <Image source={image3} style={styles.image} />
    </View>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item image1={item.image1} image2={item.image2} image3={item.image3} />
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
    backgroundColor: '#c2d6e1',
    flexDirection: 'column'
  },
  image: {
    width: 140,
    height: 140,
    marginRight: 5,
    marginBottom: 5
  },
  gallery: {
    flexDirection: "row",
  },
});

export default App;
