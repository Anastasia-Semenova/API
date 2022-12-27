import React from 'react';
import { observer } from 'mobx-react-lite'
import {View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from "react-native";
import favouriteStore from '../store/favouriteStore';
import productStore from '../store/productStore';

type TFavorite = {
  navigation: any;
  route: any;
}

const Favorite = ({}: TFavorite) => {
  const products = favouriteStore.favorites

  const removeFromFavorite = (id: string) => {
    favouriteStore.deleteFavorite(id)
    productStore.deleteFavorite(id)
  }

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {products.map(({ name, photo, price, id }) => (
            <View key={id}>
              <View style={styles.productWrapper}>
                <View style={styles.nameWrapper}>
                  {/*@ts-ignore*/}
                  <Image style={styles.img} source={photo} />
                  <View>
                    <Text style={styles.name}> {name} </Text>
                  </View>
                </View>
                <Text style={styles.price}> {price} руб. </Text>
              </View>
              <TouchableOpacity onPress={() => removeFromFavorite(id)}>
                <Text style={styles.remove}> REMOVE </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  )
};

const styles = StyleSheet.create({
    container: {
      padding: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    img: {
      maxWidth: 75,
      maxHeight: 75,
      marginRight: 10,
    },
    productWrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: '85%',
      borderWidth: 1,
      borderColor: '#39FF14',
      marginBottom: 10,
    },
    nameWrapper: {
      flexDirection: "row",
      alignItems: "center",
    },
    name: {
      fontWeight: "bold",
      marginVertical: 4,
    },
    price: {
      fontWeight: "bold",
      color: 'black',
      fontSize: 17,
      marginRight: 28,
    },
    totalPrice: {
      fontWeight: "bold",
      fontSize: 18,
      margin: 16,
    },
    totalPriceNumber: {
      color: '#4b9d22',
      fontSize: 20,
    },
    remove: {
      marginBottom: 8,
      fontSize: 20,

    },
  });

export default observer(Favorite);