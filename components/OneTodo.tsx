import { StatusBar } from 'expo-status-bar' ;
import React , {useEffect , useState } from 'react' ;
import { Button , StyleSheet , Text, View, ScrollView , TouchableOpacity , Image , TextInput , FlatList } from 'react-native' ;
import { NavigationContainer } from '@react-navigation/native' ;
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

function OneTodo({navigation, route}){

    route = useRoute();
    const item = route.params.item

    const toDone = () => {
        let newTodos = [... route.params.todos];
        newTodos.splice(newTodos.indexOf(item), 1)
        route.params.setTodos (newTodos );
        let doneTodos = [... route.params.done];
        doneTodos.push(item);
        route.params.setDone(doneTodos);
        navigation.goBack()
      };

      const deleteTodo = () => {
        let newTodos = [... route.params.todos];
        newTodos.splice(newTodos.indexOf(item), 1)
        route.params.setTodos (newTodos );
        let doneTodos = [... route.params.done];
        navigation.goBack()
      };

      const [selectedImage, setSelectedImage] = React.useState(null);

    const openImagePickerAsync = async () => {
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color: '#000'}}>{item}</Text>
        <Button
          title="Done"
          onPress={() => toDone()}
        />
        <Button
          title="Delete"
          onPress={() => deleteTodo()}
        />
        <Button
          title="Back to TODOS"
          onPress={() => navigation.goBack()}
        />
        <View style={styles.photo}>
            <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
        </View>
      </View>
    );
  }

    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color: '#000'}}>{item}</Text>
        <Button
          title="Done"
          onPress={() => toDone()}
        />
        <Button
          title="Delete"
          onPress={() => deleteTodo()}
        />
        <Button
          title="Back to TODOS"
          onPress={() => navigation.goBack()}
        />
        <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
        <Button title="Add photo" onPress={()=>openImagePickerAsync()}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    /* Other styles hidden to keep the example brief... */
    thumbnail: {
      width: 300,
      height: 300,
      //resizeMode: "contain"
    },
    photo:{

    }

  });
  

  export default OneTodo;