import React, {useEffect, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {CTX} from '../tools/context';

export default function SplashScreen(props) {
  const {navigation} = props;
  const {navigate} = navigation;

  const showContext = useContext(CTX);
  const {show} = showContext;

  useEffect(() => {
    const timer = setTimeout(() => {
      show === 'done' ? navigate('App') : navigate('Intro');
    }, 1000);
    return () => clearTimeout(timer);
  });
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
