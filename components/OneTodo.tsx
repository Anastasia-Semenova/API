import * as ImagePicker from 'expo-image-picker';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import todo from '../store/todo';
import logs from '../store/logs';

export type TTaskPage = {
  navigation: any;
  route: any;
}

const OneTodo = observer(({ navigation, route }: TTaskPage) => {

  const { itemId } = route.params
  const item = todo.todos[itemId];

  const toDone = () => {
    todo.completeTodo(item.id)
    logs.addLog({
      id: Date.now().toString(),
      title: `Done one item ` + item.title
    })
    navigation.goBack()
  };

  const deleteTodo = () => {
    todo.deleteTodo(item.id)
    logs.addLog({
      id: Date.now().toString(),
      title: `Delete one item ` + item.title
    })
    navigation.goBack()
  };

  const [selectedImage, setSelectedImage] = React.useState<any | null>(null);

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
        <Text style={{ color: '#000' }}>{item.title}</Text>
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

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: '#000' }}>{item.title}</Text>
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
      <Button title="Add photo" onPress={() => openImagePickerAsync()}
      />
    </View>
  )
});

const styles = StyleSheet.create({
  /* Other styles hidden to keep the example brief... */
  thumbnail: {
    width: 300,
    height: 300,
    //resizeMode: "contain"
  },
  photo: {

  },
  logo: {

  }

});


export default OneTodo;