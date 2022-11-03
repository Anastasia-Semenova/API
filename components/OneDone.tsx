import { StatusBar } from 'expo-status-bar' ;
import React , {useEffect , useState } from 'react' ;
import { Button , StyleSheet , Text, View, ScrollView , TouchableOpacity , Image , TextInput , FlatList } from 'react-native' ;
import { NavigationContainer } from '@react-navigation/native' ;
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRoute } from '@react-navigation/native';

function OneDone({navigation, route}){

    route = useRoute();
    const item = route.params.item
    
      const addToTodo = () => {
        let doneTodos = [... route.params.done];
        doneTodos.splice(doneTodos.indexOf(item), 1)
        route.params.setDone (doneTodos );
        let newTodos = [... route.params.todos];
        newTodos.push(item);
        route.params.setTodos(newTodos);
        navigation.goBack()
      };

      const deleteDone = () => {
        let doneTodos = [... route.params.done];
        doneTodos.splice(doneTodos.indexOf(item), 1)
        route.params.setDone (doneTodos );
        let newTodos = [... route.params.todos];
        navigation.goBack()
      };

    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color: '#000'}}>{item}</Text>
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
    );
  }

  export default OneDone;