import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import DashboardNavigator from './DashboardNavigator';
import CustomDrawerContent from './ContentDrawer';
import {primaryColor} from '../theme';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(props) {
  return (
    <Drawer.Navigator
      // drawerBackgroundColor="#c6cbef"
      drawerPosition="left" // "left", "right"
      drawerType="front" // "back", "front", "slide"
      drawerWidth={250}
      // edgeWidth
      hideStatusBar={true}
      statusBarAnimation="fade" // "fade", "none", "slide"
      keyboardDismissMode="none" // "none", "on-drag"
      // minSwipeDistance
      // overlayColor={0} // 0, 1
      // lazy={true} // true, false
      defaultNavigationOptions={{}}
      drawerOpenRoute="DrawerOpen"
      drawerCloseRoute="DrawerClose"
      drawerToggleRoute="DrawerToggle"
      drawerContentOptions={{
        activeTintColor: primaryColor,
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
