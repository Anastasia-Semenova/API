import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, Button, TouchableOpacity } from 'react-native';
import NumPad from './components/NumPad';

export default function App() {
  const [count, setCount] = useState(0);
  const onPlus = () => setCount(prevCount => prevCount + 1);
  const onMinus = () => setCount(prevCount => prevCount - 1);

  return (
    <View style={styles.container}>
      <NumPad plus = {onPlus} minus = {onMinus} state = {count}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
