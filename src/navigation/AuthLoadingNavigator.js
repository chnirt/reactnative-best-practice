import React, {useEffect, useContext} from 'react';
import {StyleSheet, View, ActivityIndicator, StatusBar} from 'react-native';

import {CTX} from '../tools/context';

export default function AuthLoadingScreen(props) {
  const authContext = useContext(CTX);
  const {token} = authContext;

  useEffect(() => {
    _bootstrapAsync();
  });

  function _bootstrapAsync() {
    props.navigation.navigate(token ? 'Home' : 'Auth');
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
