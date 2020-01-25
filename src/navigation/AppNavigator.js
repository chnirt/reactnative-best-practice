import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AuthLoadingScreen from './AuthLoadingNavigator';
import DrawerNavigator from './DrawerNavigator';
import AuthStackNavigator from './AuthNavigator';

const Stack = createStackNavigator();

export default function AppStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="AuthLoading" headerMode="none">
      <Stack.Screen name="Auth" component={AuthStackNavigator} />
      <Stack.Screen name="Dashboard" component={DrawerNavigator} />
      <Stack.Screen name="AuthLoading" component={AuthLoadingScreen} />
    </Stack.Navigator>
  );
}
