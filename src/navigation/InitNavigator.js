import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import SplashScreen from '../screens/Splash';
import IntroScreen from '../screens/Intro';
import AppNavigator from './AppNavigator';

const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  Intro: IntroScreen,
  App: AppNavigator,
});

export default createAppContainer(InitialNavigator);
