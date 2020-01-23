import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import SplashScreen from '../screens/Splash';
import OnBoardingScreen from '../screens/OnBoarding';
import AppNavigator from './AppNavigator';

const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  OnBoarding: OnBoardingScreen,
  App: AppNavigator,
});

export default createAppContainer(InitialNavigator);
