import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite'
import { Button, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import todo from '../store/todo';
import logs from '../store/logs';

export type TTodoList = {
    navigation: any;
}

const LogsScreen = observer(({ navigation }: TTodoList) => {

    return (
        <View style={styles.container}>
            <View style={styles.header} />
            <FlatList style={styles.list}
                data={logs.logs}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) =>
                    <View>
                        <Text style={styles.text}>{item.title}</Text>
                    </View>}
            />
            <Button
                title="Back to TODOS"
                onPress={() => navigation.goBack()}
            />
            <View style={styles.header} />
        </View>
    );
});

export default LogsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a6c8e9',
        justifyContent: 'center',
    },
    header: {
        height: 20,
    },
    list: {
        height: 250,
        flexGrow: 0
    },
    text: {
        fontSize: 28,
        flexDirection: 'row',
        color: '#fff',
        fontWeight: '500',
        marginTop: 10,
        marginLeft: 10,
    },
});
