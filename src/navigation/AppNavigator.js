import {createSwitchNavigator} from 'react-navigation';

import AuthLoadingScreen from './AuthLoadingNavigator';
import Screens from './ScreenNavigator';
import DrawerNavigator from './DrawerNavigator';
import AuthStackNavigator from './AuthNavigator';

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Home: DrawerNavigator,
    Auth: AuthStackNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);
