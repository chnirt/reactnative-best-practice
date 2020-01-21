import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {primaryColor} from '../theme';
import Home from '../screens/Home';
import Message from '../screens/Message';
import Post from '../screens/Post';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function TabNavigator(props) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      navigationOptions={{title: 'routeName'}}
      tabBarOptions={{
        activeTintColor: primaryColor,
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: () => <View />,
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name={'home'} color={color} size={size} />
          ),
        }}
        children={() => <Home {...props} />}
      />
      <Tab.Screen
        name="Message"
        options={{
          tabBarLabel: () => <View />,
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name={'comments'} color={color} size={size} />
          ),
        }}
        children={() => <Message {...props} />}
      />
      <Tab.Screen
        name="Post"
        options={{
          tabBarLabel: () => <View />,
          tabBarIcon: ({color, size}) => (
            <FontAwesome5
              name={'plus-circle'}
              // color={'#E9446A'}
              size={48}
              style={{
                color: '#E9446A',
                shadowColor: '#E9446A',
                shadowOffset: {width: 0, height: 0},
                shadowRadius: 10,
                shadowOpacity: 0.3,
              }}
            />
          ),
        }}
        children={() => <Post {...props} />}
      />
      <Tab.Screen
        name="Notification"
        options={{
          tabBarLabel: () => <View />,
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name={'bell'} color={color} size={size} />
          ),
        }}
        children={() => <Notification {...props} />}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: () => <View />,
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name={'user'} color={color} size={size} />
          ),
        }}
        children={props => <Profile {...props} />}
      />
    </Tab.Navigator>
  );
}
