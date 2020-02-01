import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import firebase from 'firebase';

import AuthLoadingScreen from './AuthLoadingNavigator';
import DrawerNavigator from './DrawerNavigator';
import AuthStackNavigator from './AuthNavigator';

const Stack = createStackNavigator();

export default function AppStackNavigator() {
  const navigation = useNavigation();
  const {navigate} = navigation;

  // const authContext = useContext(CTX);
  // const {token} = authContext;

  useEffect(() => {
    _bootstrapAsync();
  }, []);

  function _bootstrapAsync() {
    firebase.auth().onAuthStateChanged(user => {
      navigate(user ? 'Dashboard' : 'Auth');
    });
  }

  return (
    <Stack.Navigator initialRouteName="AuthLoading" headerMode="none">
      <Stack.Screen name="Auth" component={AuthStackNavigator} />
      <Stack.Screen name="Dashboard" component={DrawerNavigator} />
      <Stack.Screen name="AuthLoading" component={AuthLoadingScreen} />
    </Stack.Navigator>
  );
}
