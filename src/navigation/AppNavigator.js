import {createSwitchNavigator} from 'react-navigation';

import AuthLoadingScreen from './AuthLoadingNavigator';
import Screens from './ScreenNavigator';
import AuthStackNavigator from './AuthNavigator';

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Home: Screens,
    Auth: AuthStackNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);
