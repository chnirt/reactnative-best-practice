import React, {useEffect, useState, useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import firebase from 'firebase';

import {SPLASH, ONBOARDING, AUTH, DASHBOARD} from '../constants';
import DrawerNavigator from './DrawerNavigator';
import AuthStackNavigator from './AuthNavigator';
import SplashScreen from '../screens/Splash';
import OnBoardingScreen from '../screens/OnBoarding';

import {CTX} from '../tools/context';

const Stack = createStackNavigator();

export default function AppStackNavigator() {
  const [loading, setLoading] = useState(true);

  const skipContext = useContext(CTX);
  const {skip} = skipContext;

  const authContext = useContext(CTX);
  const {token, _authenticate, _logout} = authContext;

  // console.log(loading, skip, token);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      _bootstrapAsync();
      clearTimeout(timer);
    };
  });

  function _bootstrapAsync() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        user.getIdToken().then(function(idToken) {
          // console.log(idToken);
          _authenticate(idToken);
        });
      } else {
        _logout();
      }
    });
  }

  return (
    <Stack.Navigator
      initialRouteName={SPLASH}
      headerMode="none"
      screenOptions={{
        animationTypeForReplace: 'push',
      }}>
      {loading ? (
        <Stack.Screen name={SPLASH} component={SplashScreen} />
      ) : !skip ? (
        <Stack.Screen name={ONBOARDING} component={OnBoardingScreen} />
      ) : !token ? (
        <Stack.Screen name={AUTH} component={AuthStackNavigator} />
      ) : (
        <Stack.Screen name={DASHBOARD} component={DrawerNavigator} />
      )}
    </Stack.Navigator>
  );
}
