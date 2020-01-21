import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

export default function DashboardStackNavigator(props) {
  const {toggleDrawer} = props;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DashboardTabNavigator"
        options={{
          title: 'Chnirt',
          headerTitleAlign: 'left',
          headerStyle: {backgroundColor: '#fff'},
          headerLeft: () => (
            <FontAwesome5Icon
              style={{paddingLeft: 20}}
              name={'bars'}
              // color={'red'}
              size={24}
              onPress={toggleDrawer}
            />
          ),
          headerRight: () => (
            <FontAwesome5Icon
              style={{paddingRight: 20}}
              name={'bell'}
              // color={'red'}
              size={24}
              onPress={toggleDrawer}
            />
          ),
        }}
        children={() => <TabNavigator {...props} />}
      />
    </Stack.Navigator>
  );
}
