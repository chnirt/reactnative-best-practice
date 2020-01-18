import React, {useContext} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

import {CTX} from '../tools/context';

export default function CoupleScreen(props) {
  const {navigation} = props;
  const {navigate} = navigation;

  const authContext = useContext(CTX);
  const {_logout} = authContext;

  function _onLogout() {
    _logout();
    navigate('Login');
  }

  return (
    <View style={{backgroundColor: 'rgba(0,0,0,0)'}}>
      <Button onPress={_onLogout} title="Log out" color="#841584" />
      <Text> Couple </Text>
      <Text> Couple </Text>
      <Text> Couple </Text>
      <Text> Couple </Text>
      <Text> Couple </Text>
      <Text> Couple </Text>
      <Text> Couple </Text>
      <Text> Couple </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});
