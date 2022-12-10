import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';

export default function App() {
  const [pressedCount, setPressedCount] = useState(0);
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
    <Text style={{ margin: 16 }}>
    {pressedCount > 0
    ? `The button was pressed ${pressedCount} times!`
    : 'The button isn\'t pressed yet'
    }
  </Text>
  <Button
    title='Press me'
    onPress={()=>setPressedCount(pressedCount+1)}
    disabled={true ? pressedCount >= 3 : false}
  />
  {pressedCount >= 3 && 
    <Button
          title='Able button'
          onPress={()=>setPressedCount(0)}
        />
  }
 </View>
 );
}
