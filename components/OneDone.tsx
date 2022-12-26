import { useNavigation, useRoute } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import todo from '../store/todo';
import logs from '../store/logs';

export type TTaskPage = {
  navigation: any;
  route: any;
}

const OneDone = observer(({ navigation, route }: TTaskPage) => {

  const { itemId } = route.params
  const item = todo.todos[itemId];
  
  const addToTodo = () => {
    todo.completeTodo(item.id)
    logs.addLog({
      id: Date.now().toString(),
      title: `Return item to New ` + item.title
    })
    navigation.goBack()
  };

  const deleteDone = () => {
    todo.deleteTodo(item.id)
    logs.addLog({
      id: Date.now().toString(),
      title: `Delete one item ` + item.title
    })
    navigation.goBack()
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: '#000' }}>{item.title}</Text>
      <Button
        title="Return to TODO"
        onPress={() => addToTodo()}
      />
      <Button
        title="Delete"
        onPress={() => deleteDone()}
      />
      <Button
        title="Back to TODOS"
        onPress={() => navigation.goBack()}
      />
    </View>
  )
});

export default OneDone;