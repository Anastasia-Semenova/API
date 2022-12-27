import React from 'react';
import { AntDesign } from "@expo/vector-icons";
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite'
import productStore from '../store/productStore';
import cartStore from '../store/cartStore';
import favouriteStore from '../store/favouriteStore';
import Header from './Header';
const rating = [1, 2, 3, 4, 5];

type TProductCard = {
  navigation: any;
  route: any;
}

const ProductCard = ({ navigation, route }: TProductCard) => {
  const { itemId } = route.params;
  const product = productStore.products[itemId];

  const addToCart = () => {
    productStore.addCartCount(product.id)
    cartStore.addToCart(product)
  }

  const addToFavorites = () => {
    favouriteStore.createFavorite(product);
    productStore.createFavorite(product.id)
  }

  const removeFromFavorites = () => {
    favouriteStore.deleteFavorite(product.id);
    productStore.deleteFavorite(product.id)
  }

  return (
    <View>
      <Header navigation={navigation} />
      <View style={styles.container}>
        {/*@ts-ignore*/}
        <Image source={product.photo} style={styles.img} />
        <Text style={styles.title}> {product.name} </Text>
        <Text style={styles.price}> {product.price} руб. </Text>
        <Text style={styles.description}> {product.description} </Text>
        <View style={styles.rating}>
          {product.isFavorite ?
            <TouchableOpacity onPress={removeFromFavorites}>
              <AntDesign style={{ marginLeft: 24 }} name='heart' size={24} color='#39FF14' />
            </TouchableOpacity> :
            <TouchableOpacity onPress={addToFavorites}>
              <AntDesign style={{ marginLeft: 24 }} name='hearto' size={24} color='black' />
            </TouchableOpacity>
          }
        </View>
        {
          !product.inCart ? (
            <TouchableOpacity onPress={addToCart} style={styles.addButton}>
              <Text style={styles.buttonText}>
                Add to cart
              </Text>
            </TouchableOpacity>
          ) : <Text style={styles.warning}> ADDED TO CART </Text>
        }
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingHorizontal: 16,
      height: '100%',
    },
    img: {
      height: 320,
      width: 320,
    },
    title: {
      fontWeight: 'bold',
      marginTop: 20,
      fontSize: 24,
    },
    price: {
      fontWeight: 'bold',
      marginTop: 8,
      color: 'black',
      fontSize: 22,
    },
    description: {
      marginTop: 8,
      fontSize: 16,
      textAlign: 'center',
      color: '#919191',
    },
    rating: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 16,
    },
    addButton: {
    elevation: 8,
    backgroundColor: '#39FF14',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 100,
    marginTop: 30
    },
    buttonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    warning: {
      marginTop: 16,
    }
  });

export default observer(ProductCard);