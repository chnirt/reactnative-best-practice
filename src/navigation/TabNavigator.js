import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {primaryColor} from '../theme';
import Home from '../screens/Home';
import Message from '../screens/Message';
import Post from '../screens/Post';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
import {AddButton} from '../components/AddButton';
import {ImageBackground} from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabNavigator(props) {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../assets/background.png')}>
      <Tab.Navigator
        initialRouteName="Home"
        options={{
          // title: 'routeName',
          tabBarOnPress: ({navigation, defaultHandler}) => {
            console.log('New Tab Screen tabBarOnPress working');
            defaultHandler();
          },
        }}
        tabBarOnPress={({previousScene, scene, jumpToIndex}) => {
          const {route, index, focused} = scene;

          if (focused) {
            navigation.state.params.scrollToTop();
          }
          jumpToIndex(0);
        }}
        tabBarOptions={{
          activeTintColor: '#161F3D',
          showLabel: false,
          // style: {
          //   backgroundColor: 'transparent',
          //   borderTopWidth: 1,
          //   borderTopColor: 'transparent',
          //   position: 'absolute',
          //   left: 0,
          //   right: 0,
          //   bottom: 0,
          // },
        }}>
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome5 name={'home'} color={color} size={size} />
            ),
          }}
          children={() => <Home {...props} />}
        />
        <Tab.Screen
          name="Message"
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome5 name={'comments'} color={color} size={size} />
            ),
          }}
          children={() => <Message {...props} />}
        />
        <Tab.Screen
          name="Post"
          options={{
            tabBarIcon: ({color, size}) => (
              <AddButton />
              // <FontAwesome5
              //   name={'plus-circle'}
              //   // color={'#E9446A'}
              //   size={44}
              //   style={{
              //     color: '#E9446A',
              //     shadowColor: '#E9446A',
              //     shadowOffset: {width: 0, height: 0},
              //     shadowRadius: 10,
              //     shadowOpacity: 0.3,
              //   }}
              // />
            ),
          }}
          // children={() => <Post {...props} />}
        />
        <Tab.Screen
          name="Notification"
          options={{
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
            tabBarIcon: ({color, size}) => (
              <FontAwesome5 name={'user'} color={color} size={size} />
            ),
          }}
          children={props => <Profile {...props} />}
        />
      </Tab.Navigator>
    </ImageBackground>
  );
}
