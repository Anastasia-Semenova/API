import React, { useState } from 'react'
import { View, Text, Button, ScrollView, TextInput, StyleSheet} from 'react-native'
//import CheckBox from '@react-native-community/checkbox'
import { observer } from 'mobx-react-lite'
import uuid from 'react-native-uuid'
import TodoStore from './store/todo'
import CheckBox from "expo-checkbox";

// оборачиваем компонент в observer для отслеживания изменений в сторе Mobx
const App = observer(() => {
  // создаем хух состояния для инпута
  const [text, setText] = useState('')

  return (
    <ScrollView style={styles.view}>
      {/* Создаем поле для ввода текста задачи */}
      <TextInput style={{ height: 40 }} placeholder="Create" onChangeText={t => setText(t)} defaultValue={text} />
      {/* Создаем кнопку создания задачи и на onPress вешаем функцию создания задачи в сторе Mobx */}
      <Button title="Add Todo" onPress={() => TodoStore.createTodo({ id: uuid.v4(), title: text })} />
      {/* Создаем список задач, где получаем их из стора Mobx */}
      {TodoStore.todos.map(({ id, title, completed }) => (
        <View
          style={{
            flexDirection: 'row',
            width: 350,
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
          key={id}
        >
          {/* Создаем CheckBox выполнения задачи и на onPress вешаем функцию выполнения задачи в сторе Mobx */}
          <CheckBox value={completed} onValueChange={() => TodoStore.completeTodo(id)} />
          <Text>{title}</Text>
          {/* Создаем кнопку удаления задачи и на onPress вешаем функцию удаления задачи в сторе Mobx */}
          <Button title="Delete" onPress={() => TodoStore.deleteTodo(id)} />
        </View>
      ))}
    </ScrollView>
  )
});

const styles = StyleSheet.create({
  view: {
      flex: 1,
      alignContent: 'center',
      margin: 30,
      marginTop: 100
  },
  input: {
      height: 100,
      width: 100,
      margin: 14,
      borderWidth: 1,
      padding: 10,
  },
  text: {
      marginVertical: 16,
      fontSize: 24,
      marginLeft: 12,
  },
});

export default App