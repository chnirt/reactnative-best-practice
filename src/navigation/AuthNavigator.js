import {createSwitchNavigator} from 'react-navigation';
import Login from '../screens/Login'
import Register from '../screens/Register'
import Forgot from '../screens/Forgot'

export default createSwitchNavigator({
  Login,
  Register,
  Forgot
}, {
  header: null
})