import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

function WelcomeScreen({navigation, route}){
    route = useRoute();
    const name = route.params.name
    return(
        <View style={styles.view}>
            <Text style={styles.text}>Welcome, {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    text: {
        alignSelf: 'center',
    }
});

export default WelcomeScreen;