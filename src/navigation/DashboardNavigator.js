import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

export default function DashboardStackNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DashboardTabNavigator"
        children={() => <TabNavigator {...props} />}
      />
    </Stack.Navigator>
  );
}
