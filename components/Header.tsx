import React from 'react';
import { observer } from 'mobx-react-lite'
import { AntDesign } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import cartStore from '../store/cartStore';

type THeader= {
  navigation: any;
}

const Header = ({ navigation }: THeader) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> GOLD APPLE </Text>
      <View style={styles.iconsWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
          <AntDesign style={{ paddingRight: 8 }} name='hearto' size={32} color='black' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <AntDesign style={{ paddingRight: 8 }} name='shoppingcart' size={32} color='black' />
        </TouchableOpacity>
        <View style={styles.productsCount}>
          <Text>{cartStore.cart.length}</Text>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingVertical: 6,
      backgroundColor: '#39FF14'
    },
    title: {
      fontSize: 20,
    },
    iconsWrapper: {
      flexDirection: 'row',
    },
    productsCount: {
      position: "absolute",
      bottom: 0,
      right: 0,
      backgroundColor: 'white',
      height: 20,
      width: 20,
      borderRadius: 20,
      justifyContent: "space-around",
      alignItems: "center",
      borderWidth: 1,
      borderColor: 'black',
    },
  });

export default observer(Header);