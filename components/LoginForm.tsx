import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TextInput from "react-native-input-validator";

function LoginForm({ navigation }) {

    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}
            accessible={false}>
            <View style={styles.view}>
                <Text style={styles.text}>
                    Login
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setName(text)}
                    placeholder="Login"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setPass(text)}
                    secureTextEntry={true}
                    placeholder="Password"
                />
                <Button title='Log In' onPress={() => navigation.navigate('Welcome', { name })} />
            </View>
        </TouchableWithoutFeedback >
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    text: {
        marginVertical: 16,

    }
});

export default LoginForm;