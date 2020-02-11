import React, {useState} from 'react';
import {
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
import firebase from 'firebase';
import 'firebase/firestore';

// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default function PostScreen() {
  const navigation = useNavigation();

  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

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
      }
    });
  }

  function _uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  function _onPost() {
    _addPost({text: text.trim(), localUri: image.uri});
  }

  function _uploadPhotoAsync(localUri, path) {
    return new Promise(async (res, rej) => {
      const response = await fetch(localUri);

      // File or Blob named mountains.jpg
      const file = await response.blob();

      // Create the file metadata
      var metadata = {
        contentType: null,
      };

      // Create a root reference
      var storageRef = firebase.storage().ref();

      // Upload file and metadata to the object 'images/mountains.jpg'
      var uploadTask = storageRef.child(path).put(file, metadata);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        snapshot => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running');
              break;
          }
        },
        error => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;

            case 'storage/canceled':
              // User canceled the upload
              break;

            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
          rej(error);
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            console.log('File available at', downloadURL);
            res(downloadURL);
          });
        },
      );
    });
  }

  async function _addPost({text, localUri}) {
    const remoteUri = await _uploadPhotoAsync(
      localUri,
      `photos/${_uid()}/${Date.now()}`,
    );

    // console.log('remoteUri', remoteUri);

    firebase
      .firestore()
      .collection('posts')
      .add({
        uid: _uid(),
        text: text,
        timestamp: Date.now(),
        image: remoteUri,
      })
      .then(() => {
        setText('');
        setImage(null);
        navigation.goBack();
      })
      .catch(err => console.log(err));
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
          source={require('../assets/avatar/image1.png')}
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
    backgroundColor: '#fff',
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
