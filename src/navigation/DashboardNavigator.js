import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import {DASHBOARD_TAB, POST_MODAL} from '../constants';
import TabNavigator from './TabNavigator';
import PostScreen from '../screens/Post';

const Stack = createStackNavigator();

export default function DashboardStackNavigator() {
  return (
    <Stack.Navigator mode="modal" initialRouteName={DASHBOARD_TAB}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={DASHBOARD_TAB}
        // options={{
        //   title: 'Chnirt',
        //   headerTitleAlign: 'left',
        //   headerStyle: {backgroundColor: '#fff'},
        //   headerLeft: () => (
        //     <FontAwesome5Icon
        //       style={{paddingLeft: 20}}
        //       name={'bars'}
        //       size={24}
        //       onPress={toggleDrawer}
        //     />
        //   ),
        //   headerRight: () => (
        //     <FontAwesome5Icon
        //       style={{paddingRight: 20}}
        //       name={'bell'}
        //       size={24}
        //       onPress={props => {
        //         console.log(props);
        //       }}
        //     />
        //   ),
        // }}
        component={TabNavigator}
      />
      <Stack.Screen
        name={POST_MODAL}
        options={{
          headerShown: false,
        }}
        component={PostScreen}
      />
    </Stack.Navigator>
  );
}
