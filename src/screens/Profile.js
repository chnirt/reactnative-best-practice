import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';
import {useNavigation} from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const {navigate} = navigation;

  function _onLogout() {
    firebase.auth().signOut();
    // _logout();
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
