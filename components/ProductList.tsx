import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import productStore from '../store/productStore';
import Header from './Header';

type TProductList = {
  navigation: any
}

const ProductList = ({ navigation }: TProductList) => {
  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          {productStore.products.map((item) => (
            <View key={item.id} style={styles.productWrapper}>
              <Image style={styles.img} source={item.photo} />
              <TouchableOpacity onPress={() => navigation.navigate('ProductCard', { itemId: productStore.products.indexOf(item) })}>
                <Text style={styles.name}> {item.name} </Text>
              </TouchableOpacity>
              <Text style={styles.price}> {item.price} руб. </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  )
};

const styles = StyleSheet.create({
    container: {
      paddingLeft: 10,
      paddingTop: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    img: {
      maxWidth: 170,
      maxHeight: 280
    },
    productWrapper: {
      marginRight: 10,
      marginBottom: 10,
      alignItems: "center",
    },
    name: {
      fontWeight: "bold",
      marginVertical: 4,
      fontSize: 18,
    },
    price: {
      color: 'black',
      fontWeight: "bold",
      marginTop: 15,
      fontSize: 16,
    }
  });

export default ProductList;