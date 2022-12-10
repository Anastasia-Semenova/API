import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

function LoginForm({ navigation }) {

    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [errorLogin, setErrorLogin] = useState<string>("");
    const [errorPassword, setErrorPassword] = useState<string>("");

    const onSubmit = () => {
        if(!name && !pass){
            setErrorLogin("Field Login is required!");
            setErrorPassword("Field Password is required!");
            return;
        }
        if (!name) {
            setErrorLogin("Field Login is required!");
            return;
        };
        if (!pass) {
            setErrorPassword("Field Password is required!");
            return;
        };
        setIsSubmitting(true);
        navigation.navigate('Welcome', { name })
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}
            accessible={false}>
            <View style={styles.view}>
                <Text style={styles.text}>
                    Sign In
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setName(text)}
                    placeholder="Login"
                />
                {!name && <Text style={styles.error}> {errorLogin} </Text>}
                <TextInput
                    style={styles.input}
                    onChangeText={text => setPass(text)}
                    secureTextEntry={true}
                    placeholder="Password"
                />
                {!pass && <Text style={styles.error}> {errorPassword} </Text>}
                <Button title='Sign In' onPress={onSubmit} />
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
        margin: 14,
        borderWidth: 1,
        padding: 10,
    },
    text: {
        marginVertical: 16,
        fontSize: 24,
        marginLeft: 12,
    },
    error: {
        color: 'red',
        marginLeft: 12,

    }
});

export default LoginForm;