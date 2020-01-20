import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import DashboardNavigator from './DashboardNavigator';
import CustomDrawerContent from './ContentDrawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(props) {
  return (
    <Drawer.Navigator
      // drawerStyle={{
      //   backgroundColor: '#c6cbef',
      //   width: 240,
      // }}
      // drawerContentOptions={{
      //   activeTintColor: primaryColor,
      //   itemStyle: {marginVertical: 0},
      // }}
      // navigationOptions={{
      //   headerStyle: {
      //     backgroundColor: 'red',
      //   },
      //   headerRight: <FontAwesome5 name={'user'} color={'red'} size={24} />,
      // }}
      headerRight={() => <FontAwesome5 name={'user'} color={'red'} size={24} />}
      drawerContent={() => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Dashboard"
        children={() => <DashboardNavigator {...props} />}
      />
    </Drawer.Navigator>
  );
}
