import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import DashboardNavigator from './DashboardNavigator';
import CustomDrawerContent from './ContentDrawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(props) {
  return (
    <Drawer.Navigator
      // headerLeft={() => (
      //   <Icon
      //     style={{paddingLeft: 10}}
      //     onPress={() => navigation.openDrawer()}
      //     name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
      //     size={30}
      //   />
      // )}
      // headerMode="screen"
      // screenOptions={{
      //   headerTintColor: 'white',
      //   headerStyle: {backgroundColor: 'tomato'},
      // }}
      // drawerStyle={{
      //   backgroundColor: '#c6cbef',
      //   width: 240,
      // }}
      drawerContentOptions={{
        // activeTintColor: primaryColor,
        itemStyle: {marginVertical: 0},
      }}
      drawerContent={newProps => (
        <CustomDrawerContent
          {...props}
          closeDrawer={newProps.navigation.closeDrawer}
        />
      )}>
      <Drawer.Screen
        name="Dashboard"
        children={newProps => (
          <DashboardNavigator
            {...props}
            toggleDrawer={newProps.navigation.toggleDrawer}
          />
        )}
      />
    </Drawer.Navigator>
  );
}
