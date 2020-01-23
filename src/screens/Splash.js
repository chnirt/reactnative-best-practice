import React, {useEffect, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {CTX} from '../tools/context';

export default function SplashScreen(props) {
  const {navigation} = props;
  const {navigate} = navigation;

  const showContext = useContext(CTX);
  const {onBoarding} = showContext;

  useEffect(() => {
    const timer = setTimeout(() => {
      _bootstrapAsync();
    }, 1000);
    return () => clearTimeout(timer);
  });

  function _bootstrapAsync() {
    navigate(onBoarding ? 'App' : 'OnBoarding');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👻 Social Network</Text>
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
