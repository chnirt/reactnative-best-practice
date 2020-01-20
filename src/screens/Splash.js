import React, {useEffect, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {CTX} from '../tools/context';

export default function SplashScreen(props) {
  const {navigation} = props;
  const {navigate} = navigation;

  const showContext = useContext(CTX);
  const {intro} = showContext;

  useEffect(() => {
    const timer = setTimeout(() => {
      _bootstrapAsync();
    }, 1000);
    return () => clearTimeout(timer);
  });

  function _bootstrapAsync() {
    navigate(intro ? 'App' : 'Intro');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👻Dating</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D12734',
  },
  title: {
    color: 'white',
  },
});
