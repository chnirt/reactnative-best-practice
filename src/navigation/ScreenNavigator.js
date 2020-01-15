import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Platform, StyleSheet} from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

import Birthday from '../screens/Birthday';
import Couple from '../screens/Couple';
import Events from '../screens/Events';
import {View, Text} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    paddingLeft: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 120,
  },
});

export default function index() {
  return (
    <Tab.Navigator initialRouteName="Couple">
      <Tab.Screen name="Birthday" component={Birthday} />
      <Tab.Screen name="Couple" component={Couple} />
      <Tab.Screen name="Events" component={Events} />
    </Tab.Navigator>
  );
}

index.navigationOptions = {
  title: false,
  headerLeft: () => <Text style={styles.icon}>The Couple</Text>,
  headerRight: () => (
    <View style={styles.iconContainer}>
      {/* <Icon name="md-share" size={24} />
      <Icon
        name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
        size={24}
      /> */}
    </View>
  ),
  // headerStyle: {backgroundColor: 'blue'},
};
