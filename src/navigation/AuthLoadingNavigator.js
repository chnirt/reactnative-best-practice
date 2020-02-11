import React, {useEffect, useContext} from 'react';
import {StyleSheet, View, ActivityIndicator, StatusBar} from 'react-native';
import firebase from 'firebase';
import {useNavigation} from '@react-navigation/native';

// import {CTX} from '../tools/context';

export default function AuthLoadingScreen(props) {
  const navigation = useNavigation();
  const {navigate} = navigation;

  // const authContext = useContext(CTX);
  // const {token} = authContext;

  useEffect(() => {
    _bootstrapAsync();
  });

  function _bootstrapAsync() {
    firebase.auth().onAuthStateChanged(user => {
      navigate(user ? 'Dashboard' : 'Auth');
    });
    // navigate(token ? 'Dashboard' : 'Auth');
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
