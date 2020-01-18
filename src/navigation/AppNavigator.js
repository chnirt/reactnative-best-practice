import React, {useEffect} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AsyncStorage from '@react-native-community/async-storage';
import {View, ActivityIndicator, StatusBar} from 'react-native';

import Screens from './ScreenNavigator';
import AuthStackNavigator from './AuthNavigator';

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

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Home: Screens,
    Auth: AuthStackNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);
