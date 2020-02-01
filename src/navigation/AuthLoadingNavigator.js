import React, {useEffect, useContext} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import * as firebase from 'firebase';
import {useNavigation} from '@react-navigation/native';

import Loading from '../components/Loading';

// import {CTX} from '../tools/context';

export default function AuthLoadingScreen(props) {
  const navigation = useNavigation();
  const {navigate} = navigation;

  // const authContext = useContext(CTX);
  // const {token} = authContext;

  useEffect(() => {
    _bootstrapAsync();
  }, []);

  function _bootstrapAsync() {
    // NOTE: firebase
    firebase.auth().onAuthStateChanged(user => {
      navigate(user ? 'Dashboard' : 'Auth');
    });

    // NOTE: context
    // navigate(token ? 'Dashboard' : 'Auth');
  }

  return (
    <View style={styles.container}>
      <Loading />
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
