import React, {useEffect} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AsyncStorage from '@react-native-community/async-storage';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  StatusBar,
} from 'react-native';

import Screens from './ScreenNavigator';
import AuthStackNavigator from './AuthNavigator';

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

function AuthLoadingScreen(props) {
  useEffect(() => {
    _bootstrapAsync();
  });

  const _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
}

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: Screens,
    Auth: AuthStackNavigator,
  }),
  {
    initialRouteName: 'AuthLoading',
  },
);
