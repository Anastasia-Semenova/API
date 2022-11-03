import { StatusBar } from 'expo-status-bar' ;
import React , {useEffect , useState } from 'react' ;
import { Button , StyleSheet , Text, View, ScrollView , TouchableOpacity , Image , TextInput , FlatList } from 'react-native' ;
export default function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [text, setText ] = useState ('');
  const [done, setDone] = useState<string[]>([]);
  const addTodo = () => {
    let newTodos = [... todos ];
    newTodos.push(text);
    setTodos (newTodos );
    setText ('');
  };

  const deleteTodo = (item) => {
    let newTodos = [... todos];
    newTodos.splice(newTodos.indexOf(item), 1)
    setTodos (newTodos );
    let doneTodos = [... done];
    doneTodos.push(item);
    setDone(doneTodos);
  };

  const addToTodo = (item) => {
    let doneTodos = [... done];
    doneTodos.splice(doneTodos.indexOf(item), 1)
    setDone (doneTodos );
    let newTodos = [... todos];
    newTodos.push(item);
    setTodos(newTodos);
  };

const keyExtractor = (index ) => {
    return index .toString ();
};

return (
 <View style ={styles .container }>
    <View style={styles.header}/>
    <Text style={styles.text}>NEW:</Text>
    <FlatList
    data={todos }
    keyExtractor ={(item, index ) => keyExtractor (index )}
    renderItem ={({item}) =>
    <View style ={styles .todoLine }>
      <TouchableOpacity style ={styles .todoLineTouch }  onPress={() => deleteTodo(item)}>
        <Text style ={{flex: 3}}>{item}</Text>
      </TouchableOpacity >
    </View>}
    />
    <TextInput style ={styles .textInput } onChangeText ={newText => setText (newText )} value ={text} placeholder="Add new TODO"></TextInput >
    <Button title =" ADD " onPress ={() => addTodo () }></Button >
    <StatusBar style ="auto" />
    <Text style={styles.text}>DONE:</Text>
    <FlatList
      data={done }
      keyExtractor ={(item, index ) => keyExtractor (index )}
      renderItem ={({item}) =>
      <View style ={styles .todoLine }>
        <TouchableOpacity style ={styles .todoLineTouch }  onPress={() => addToTodo(item)}>
          <Text style ={{flex: 3}}>{item}</Text>
        </TouchableOpacity >
      </View>}
    />
    <View style={styles.header}/>
 </View>
 );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a6c8e9',
    justifyContent: 'center',
  },
  header: {
    height: 100,
  },
  todoLine: {
    
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
