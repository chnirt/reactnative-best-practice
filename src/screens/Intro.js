import React, {useEffect, useContext, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {CTX} from '../tools/context';

import SplashScreen from './Splash';
import OnBoardingScreen from './OnBoarding';

export default function IntroScreen() {
  const [loading, setLoading] = useState(true);

  const skipContext = useContext(CTX);
  const {skip} = skipContext;

  const navigation = useNavigation();
  const {navigate} = navigation;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <View style={styles.container}>
      {loading ? (
        <SplashScreen />
      ) : skip ? (
        navigate('App')
      ) : (
        <OnBoardingScreen />
      )}
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
