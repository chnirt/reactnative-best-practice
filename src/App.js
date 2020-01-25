/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/react-hooks';

import InitNavigator from './navigation/InitNavigator';
import ContextProvider from './tools/context';
import client from './tools/apollo';
import './tools/firebase';

function App() {
  return (
    <ApolloProvider client={client}>
      <ContextProvider>
        <NavigationNativeContainer>
          <InitNavigator />
        </NavigationNativeContainer>
      </ContextProvider>
    </ApolloProvider>
  );
}

export default App;
