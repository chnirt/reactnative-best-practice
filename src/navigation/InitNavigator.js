import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../screens/Splash';
import OnBoardingScreen from '../screens/OnBoarding';
import AppNavigator from './AppNavigator';

// import LoadingScreen from '../components/Loading';
import {LayoutAnimation} from 'react-native';

const Stack = createStackNavigator();

export default function InitialStackNavigator() {
  useEffect(() => {
    LayoutAnimation.easeInEaseOut();
  });
  return (
    <Stack.Navigator initialRouteName="Splash" headerMode="none">
      {/* <Stack.Screen name="Loading" component={LoadingScreen} /> */}
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="App" component={AppNavigator} />
    </Stack.Navigator>
  );
}
