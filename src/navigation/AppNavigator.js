import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Screens from './ScreenNavigator';
// import Auth from './AuthNavigator'

export default createAppContainer(
  createStackNavigator({
    // Auth,
    Screens,
  }),
  {
    intialRouteName: 'Screens',
    navigationOptions: {
      headerStyle: {backgroundColor: '#FFFF00'},
      headerTintColor: 'white',
      gesturesEnabled: false,
    },
    cardStyle: {
      backgroundColor: 'yellow',
    },
  },
);
