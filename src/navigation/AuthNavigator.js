import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import ForgotScreen from '../screens/Forgot';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      headerMode="none"
      screenOptions={{
        headerTintColor: 'red',
      }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{title: 'Register'}}
      />
      <Stack.Screen
        name="Forgot"
        component={ForgotScreen}
        options={{title: 'Forgot'}}
      />
    </Stack.Navigator>
  );
}
