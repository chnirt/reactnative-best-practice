import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LayoutAnimation} from 'react-native';

import AppNavigator from './AppNavigator';
import IntroScreen from '../screens/Intro';

const Stack = createStackNavigator();

export default function InitialStackNavigator() {
  useEffect(() => {
    LayoutAnimation.easeInEaseOut();
  });
  return (
    <Stack.Navigator initialRouteName="Intro" headerMode="none">
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="App" component={AppNavigator} />
    </Stack.Navigator>
  );
}
