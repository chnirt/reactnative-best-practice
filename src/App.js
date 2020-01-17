/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';

import InitNavigator from './navigation/InitNavigator';

function App() {
  return (
    <NavigationNativeContainer>
      <InitNavigator />
    </NavigationNativeContainer>
  );
}

export default App;
