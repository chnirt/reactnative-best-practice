import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import SplashScreen from '../screens/Splash';
import AppNavigator from './AppNavigator';

const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  App: AppNavigator,
});

export default createAppContainer(InitialNavigator);
