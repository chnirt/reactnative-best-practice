import React, {useContext} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';

import {CTX} from '../tools/context';

export default function ProfileScreen() {
  const authContext = useContext(CTX);
  const {_logout} = authContext;

  function _onLogout() {
    // NOTE: context
    _logout();

    // NOTE: firebase
    firebase.auth().signOut();
  }

  return (
    <View style={styles.container}>
      <Text> Profile </Text>
      <TouchableOpacity onPress={_onLogout}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});
