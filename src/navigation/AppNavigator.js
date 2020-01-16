import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Screens from './ScreenNavigator';
import {ImageBackground, View, Text, StyleSheet, Button} from 'react-native';
// import Auth from './AuthNavigator'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Platform.OS === 'ios' ? 60 : 80,
  },
});

function Hello() {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/background.png')}>
      <Button onPress={() => {}} title="Just a button" />
    </ImageBackground>
  );
}

export default createAppContainer(
  createStackNavigator({
    // Auth,
    Screens,
  }),
  {
    intialRouteName: 'Screens',
  },
);
