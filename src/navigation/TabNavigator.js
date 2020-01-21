import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {primaryColor} from '../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Tab = createBottomTabNavigator();

function Feed() {
  return (
    <View style={styles.container}>
      <Text>Feed</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={styles.container}>
      <Text>Notifications</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
}

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
        children={() => <Feed {...props} />}
      />
      <Tab.Screen
        name="Notifications1"
        options={{
          tabBarLabel: () => <View />,
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name={'heart'} color={color} size={size} />
          ),
        }}
        children={() => <Notifications {...props} />}
      />
      <Tab.Screen
        name="Notifications"
        options={{
          tabBarLabel: () => <View />,
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name={'heart'} color={color} size={size} />
          ),
        }}
        children={() => <Notifications {...props} />}
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
