/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';

import AppNavigator from './navigation/AppNavigator';

function App() {
  return (
    <NavigationNativeContainer>
      <AppNavigator />
    </NavigationNativeContainer>
  );
}

export default App;
