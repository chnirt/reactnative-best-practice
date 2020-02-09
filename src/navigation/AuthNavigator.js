import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {LOGIN, REGISTER, FORGOT} from '../constants';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import ForgotScreen from '../screens/Forgot';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={LOGIN}
      headerMode="none"
      screenOptions={{
        headerTintColor: 'red',
      }}>
      <Stack.Screen
        name={LOGIN}
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name={REGISTER}
        component={RegisterScreen}
        options={{title: 'Register'}}
      />
      <Stack.Screen
        name={FORGOT}
        component={ForgotScreen}
        options={{title: 'Forgot'}}
      />
    </Stack.Navigator>
  );
}
