import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

import {HOME, MESSAGE, POST, NOTIFICATION, PROFILE} from '../constants';
import {primaryColor} from '../theme';
import HomeScreen from '../screens/Home';
import MessageScreen from '../screens/Message';
import NotificationScreen from '../screens/Notification';
import ProfileScreen from '../screens/Profile';

// import {AddButton} from '../components/AddButton';

const Tab = createBottomTabNavigator();

export default function TabNavigator(props) {
  const navigation = useNavigation();
  const {navigate} = navigation;

  return (
    <Tab.Navigator
      initialRouteName={HOME}
      tabBarOptions={{
        activeTintColor: '#161F3D',
        showLabel: false,
      }}>
      <Tab.Screen
        name={HOME}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name={'home'} color={color} size={size} />
          ),
        }}
        children={() => <HomeScreen {...props} />}
      />
      <Tab.Screen
        name={MESSAGE}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name={'comments'} color={color} size={size} />
          ),
        }}
        children={() => <MessageScreen {...props} />}
      />
      <Tab.Screen
        name={POST}
        options={{
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
                  elevation: 8,
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
        name={NOTIFICATION}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name={'bell'} color={color} size={size} />
          ),
        }}
        children={() => <NotificationScreen {...props} />}
      />
      <Tab.Screen
        name={PROFILE}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name={'user'} color={color} size={size} />
          ),
        }}
        children={props => <ProfileScreen {...props} />}
      />
    </Tab.Navigator>
  );
}
