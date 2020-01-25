import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

import TabNavigator from './TabNavigator';
import PostScreen from '../screens/Post';

const Stack = createStackNavigator();

export default function DashboardStackNavigator(props) {
  const navigation = useNavigation();
  const {toggleDrawer} = navigation;

  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        // name="DashboardTabNavigator"
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
        name="PostModal"
        options={{
          headerShown: false,
          // headerTitle: null,
          // headerLeft: () => (
          //   <FontAwesome5Icon
          //     style={{paddingLeft: 20}}
          //     name={'times'}
          //     size={24}
          //     onPress={() => navigation.goBack()}
          //   />
          // ),
          // headerRight: () => (
          //   <FontAwesome5Icon
          //     style={{paddingRight: 20}}
          //     name={'paper-plane'}
          //     size={24}
          //     onPress={toggleDrawer}
          //   />
          // ),
        }}
        component={PostScreen}
      />
    </Stack.Navigator>
  );
}
