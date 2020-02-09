/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/react-hooks';
import firebase from 'firebase';

import AppNavigator from './navigation/AppNavigator';
import ContextProvider from './tools/context';
import client from './tools/apollo';

const firebaseConfig = {
  apiKey: 'AIzaSyD7H9iwmi9olwh711r-vEUSH2OwqgVenj4',
  authDomain: 'social-network-6a85d.firebaseapp.com',
  databaseURL: 'https://social-network-6a85d.firebaseio.com',
  projectId: 'social-network-6a85d',
  storageBucket: 'social-network-6a85d.appspot.com',
  messagingSenderId: '952454268715',
  appId: '1:952454268715:web:16225730485d1bc35f676e',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <ApolloProvider client={client}>
      <ContextProvider>
        <NavigationNativeContainer>
          <AppNavigator />
        </NavigationNativeContainer>
      </ContextProvider>
    </ApolloProvider>
  );
}

export default App;
