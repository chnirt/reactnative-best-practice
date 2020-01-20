import React, {useContext} from 'react';
import Animated from 'react-native-reanimated';
import {Text, Button} from 'react-native';

import {CTX} from '../tools/context';

export default function CustomDrawerContent({progress, ...rest}) {
  const {navigation} = rest;
  const {navigate} = navigation;

  const authContext = useContext(CTX);
  const {_logout} = authContext;

  // const {loading, error, data} = useQuery(GET_GREETING);

  function _onLogout() {
    _logout();
    console.log(navigate);
    navigate('Login');
  }
  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{translateX}],
      }}>
      <Text>Hello</Text>
      <Button onPress={_onLogout} title="Log out" color="#841584" />
    </Animated.View>
  );
}
