import React, { useState } from 'react';
import { observer } from 'mobx-react-lite'
import cartStore from '../store/cartStore';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type CounterInputType = {
  fontSize: number;
  defaultValue: number;
  id: string;
};

const CounterInput = ({ fontSize, defaultValue, id }: CounterInputType) => {
  const [value, setValue] = useState(defaultValue);

  const increaseValue = () => {
    cartStore.addCartCount(id)
    setValue(value + 1);
  }
  const decreaseValue = () => {
    cartStore.removeCartCount(id)
    setValue(value - 1);
  }

  return(
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={increaseValue}>
        <Text style={styles.button}>+</Text>
      </TouchableOpacity>
      <Text style={{...styles.value, fontSize: fontSize}}> {value}  шт. </Text>
      <TouchableOpacity disabled={value === 0} onPress={decreaseValue}>
        <Text style={styles.button}>—</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8,
    },
    button: {
      fontSize: 18,
      color: 'black',
      borderColor: 'black',
      borderWidth: 1,
      width: 24,
      display: 'flex',
      textAlign: 'center',
    },
    value: {
      marginHorizontal: 4,
    }
  });

export default observer(CounterInput);