import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Forgot from '../screens/Forgot';

export default createStackNavigator(
  {
    Login,
    Register,
    Forgot,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);
