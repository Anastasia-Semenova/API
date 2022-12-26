import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite'
import { Button, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import todo from '../store/todo';
import logs from '../store/logs';

export type TTodoList = {
  navigation: any;
}

const App = observer(({ navigation }: TTodoList) => {
  const [text, setText] = useState('');

  const onSubmit = () => {
    todo.addTodo({
      id: Date.now().toString(),
      completed: false,
      title: text
    })
    logs.addLog({
      id: Date.now().toString(),
      title: `Added new item ` + text
    })
    setText('');
  }



  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <Text style={styles.text}>NEW:</Text>
      <FlatList style={styles.list}
        data={todo.todos.filter(({ completed }) => !completed)}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) =>
          <View style={styles.todoLine}>
            <TouchableOpacity style={styles.todoLineTouch} onPress={() => navigation.navigate('One', { itemId: todo.todos.indexOf(item) })}>
              <Text style={{ flex: 3 }}>{item.title}</Text>
            </TouchableOpacity >
          </View>}
      />
      <TextInput style={styles.textInput} onChangeText={newText => setText(newText)} value={text} placeholder="Add new TODO"></TextInput >
      <Button title=" ADD " onPress={() => onSubmit()}></Button >
      <StatusBar style="auto" />
      <Text style={styles.text}>DONE:</Text>
      <FlatList
        data={todo.todos.filter(({ completed }) => completed)}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) =>
          <View style={styles.todoLine}>
            <TouchableOpacity style={styles.todoLineTouch} onPress={() => navigation.navigate('Done', { itemId: todo.todos.indexOf(item) })}>
              <Text style={{ flex: 3 }}>{item.title}</Text>
            </TouchableOpacity >
          </View>}
      />
      <Button title=" LOGS " onPress={() => navigation.navigate('Logs')}></Button >
      <View style={styles.header} />
    </View>
  );
});

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a6c8e9',
    justifyContent: 'center',
  },
  header: {
    height: 20,
  },
  todoLine: {

  },
  list: {
    height: 250,
    flexGrow: 0
  },
  todoLineTouch: {
    marginTop: 10,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,

  },
  textInput: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
    marginTop: 10,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,

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
