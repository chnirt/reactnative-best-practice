import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StyleSheet, Button} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {primaryColor} from '../theme';
import {CTX} from '../tools/context';

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

function Profile(props) {
  console.log(props);

  const authContext = useContext(CTX);
  const {_logout} = authContext;

  // const {loading, error, data} = useQuery(GET_GREETING);

  function _onLogout() {
    _logout();
    navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Button onPress={_onLogout} title="Log out" color="#841584" />
      <Text>Profile</Text>
    </View>
  );
}

export default function TabNavigator(props) {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: primaryColor,
      }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name={'home'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name={'bell'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name={'user'} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
