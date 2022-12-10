import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function NumPad(props) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={props.minus}>
          <Text style={styles.appButtonText}>7</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{props.state}</Text>
        <TouchableOpacity style={styles.button} onPress={props.plus}>
          <Text style={styles.appButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: 'center',
      alignContent: 'center'
    },
    button: {
      backgroundColor: "#a4c8d5",
      borderRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 50,
      marginTop: -50,
      marginLeft: 20,
      marginRight: 20,
    },
    appButtonText: {
      fontSize: 45,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    text: {
      fontSize: 45,
      alignItems: "center",

    }
  });

  export default NumPad;