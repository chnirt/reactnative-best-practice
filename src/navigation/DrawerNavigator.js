// export default createDrawerNavigator(
//   {
//     CustomNavigator,
//     SettingsScreen,
//     LegalScreen,
//     FeedbackScreen,
//     VersionScreen,
//   },
//   {
//     drawerType: 'slide',
//     drawerWidth: 260,
//   },
// );

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import TabNavigator from './TabNavigator';
import {primaryColor} from '../theme';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#c6cbef',
        width: 240,
      }}
      drawerContentOptions={{
        activeTintColor: primaryColor,
        itemStyle: {marginVertical: 0},
      }}>
      <Drawer.Screen name="Home" component={TabNavigator} />
    </Drawer.Navigator>
  );
}
