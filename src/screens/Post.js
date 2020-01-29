import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import {request, PERMISSIONS} from 'react-native-permissions';
import ImagePicker from 'react-native-image-picker';
// import AsyncStorage from '@react-native-community/async-storage';
import firebase, {firestore} from 'firebase';
import 'firebase/firestore';
// import Firebase from '../tools/firebase';

// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default function PostScreen(props) {
  const navigation = useNavigation();
  const {navigate} = navigation;

  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  // useEffect(() => {
  //   _bootstrap();
  // });

  // async function _bootstrap() {
  //   const newImage = await AsyncStorage.getItem('image');
  //   setImage(JSON.parse(newImage));
  // }

  function _pickImage() {
    ImagePicker.launchImageLibrary(options, async response => {
      // console.log('Response = ', response);
      // Same code as in above section!
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        setImage(source);
        // await AsyncStorage.setItem('image', JSON.stringify(source));
      }
    });
  }

  async function _addPost({text, localUri}) {
    firebase
      .firestore()
      .collection('posts')
      .add({
        uid: Math.floor(Math.random() * 100000),
        text: text,
        timestamp: Date.now(),
      })
      .then(res => {
        console.log(res);
        navigation.goBack();
      })
      .catch(err => console.log(err));
  }

  function _onPost() {
    _addPost({text: text.trim(), localUri: image});
  }

  async function uploadPhotoAsync({uri}) {
    const path = `photos/${uid}/${Date.now()}.jpg`;

    return new Promise(async (res, rej) => {
      console.log('upload1');
      console.log('uri', uri);
      const response = await fetch(uri);
      console.log('upload2');

      const file = await response.blob();
      console.log('upload3');

      let upload = firebase
        .storage()
        .ref(path)
        .put(file);

      upload.on(
        'state_changed',
        snapshot => {},
        err => {
          rej(err);
        },
        async () => {
          const url = await upload.snapshot.ref.getDownloadURL();
          res(url);
        },
      );
    });
  }

  function uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="times" size={24}></FontAwesome5>
        </TouchableOpacity>
        <TouchableOpacity onPress={_onPost}>
          <FontAwesome5 name="paper-plane" size={24}></FontAwesome5>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.avatar}></Image>
        <TextInput
          autoFocus={true}
          multiline={true}
          numberOfLines={4}
          style={{flex: 1}}
          placeholder="Want to share something?"
          onChangeText={text => setText(text)}
          value={text}></TextInput>
      </View>

      <TouchableOpacity style={styles.photo} onPress={_pickImage}>
        <FontAwesome5 name="camera" size={32} color="#D8D9DB"></FontAwesome5>
      </TouchableOpacity>

      <View style={{marginHorizontal: 32, marginTop: 32, height: 150}}>
        <Image source={image} style={{width: '100%', height: '100%'}}></Image>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#D8D9DB',
  },
  inputContainer: {
    margin: 32,
    flexDirection: 'row',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  photo: {
    alignItems: 'flex-end',
    marginHorizontal: 32,
  },
});
