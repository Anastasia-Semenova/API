import React, {useMemo} from 'react';
import { observer } from 'mobx-react-lite'
import {View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from "react-native";
import cartStore from '../store/cartStore';
import productStore from '../store/productStore';
import CounterInput from './CounterInput';

type TCart = {
  navigation: any;
  route: any;
}

const Cart = ({}: TCart) => {
  const products = cartStore.cart
  const totalPrice = useMemo(() => products.reduce(
    (obj, item, i) => obj + (item.price * item.inCart),
    0,
  ), [products]);

  const removeFromCart = (id: string) => {
    cartStore.deleteFromCart(id)
    productStore.removeCartCount(id)
  }

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {products.map(({ name, photo, price, id, inCart }) => (
            <View key={id}>
              <View style={styles.productWrapper}>
                <View style={styles.nameWrapper}>
                  {/*@ts-ignore*/}
                  <Image style={styles.img} source={photo} />
                  <View>
                    <Text style={styles.name}> {name} </Text>
                    <CounterInput defaultValue={inCart} fontSize={14} id={id} />
                  </View>
                </View>
                <Text style={styles.price}> {inCart * price} руб. </Text>
              </View>
              <TouchableOpacity onPress={() => removeFromCart(id)}>
                <Text style={styles.remove}> REMOVE </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
      <Text style={styles.totalPrice}>
        Total price: <Text style={styles.totalPriceNumber}> {totalPrice} руб. </Text>
      </Text>
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
      width: '96%',
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
      color: '#4b9d22',
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

export default observer(Cart);