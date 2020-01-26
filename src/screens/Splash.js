import React, {useEffect, useContext} from 'react';
import {View, Text, StyleSheet, LayoutAnimation, Image} from 'react-native';

import {CTX} from '../tools/context';

export default function SplashScreen(props) {
  const {navigation} = props;
  const {navigate} = navigation;

  const showContext = useContext(CTX);
  const {onBoarding} = showContext;

  useEffect(() => {
    LayoutAnimation.easeInEaseOut();
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
      <Image
        style={styles.image}
        source={require('../assets/splash/image1.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF6F9',
  },
  title: {
    color: '#000000',
  },
  image: {
    height: 200,
    width: 200,
  },
});
