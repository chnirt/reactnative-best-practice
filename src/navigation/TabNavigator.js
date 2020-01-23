import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

import {primaryColor} from '../theme';
import Home from '../screens/Home';
import Message from '../screens/Message';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';

// import {AddButton} from '../components/AddButton';

const Tab = createBottomTabNavigator();

export default function TabNavigator(props) {
  const navigation = useNavigation();
  const {navigate} = navigation;

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#161F3D',
        showLabel: false,
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
          tabBarOnPress: ({navigation, defaultHandler}) => {
            console.log('POST');
            if (navigation.state.key === 'Post') {
              navigation.navigate('postModal');
            } else {
              defaultHandler();
            }
          },
          tabBarIcon: ({color, size}) => (
            // <AddButton />
            <TouchableOpacity
              onPress={() => {
                navigate('PostModal');
              }}>
              <FontAwesome5
                name={'plus-circle'}
                // color={primaryColor}
                size={40}
                style={{
                  color: primaryColor,
                  shadowColor: primaryColor,
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowRadius: 10,
                  shadowOpacity: 0.5,
                }}
              />
            </TouchableOpacity>
          ),
        }}
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
  );
}
