import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../screens/Splash';
import OnBoardingScreen from '../screens/OnBoarding';
import AppNavigator from './AppNavigator';

const Stack = createStackNavigator();

export default function InitialStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash" headerMode="none">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="App" component={AppNavigator} />
    </Stack.Navigator>
  );
}
