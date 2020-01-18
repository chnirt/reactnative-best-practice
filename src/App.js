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
import ContextProvider from './tools/context';

function App() {
  return (
    <NavigationNativeContainer>
      <ContextProvider>
        <InitNavigator />
      </ContextProvider>
    </NavigationNativeContainer>
  );
}

export default App;
