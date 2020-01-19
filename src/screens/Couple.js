import React, {useContext} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
// import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

import {CTX} from '../tools/context';

// const GET_GREETING = gql`
//   query getGreeting {
//     hello
//   }
// `;

export default function CoupleScreen(props) {
  const {navigation} = props;
  const {navigate} = navigation;

  const authContext = useContext(CTX);
  const {_logout} = authContext;

  // const {loading, error, data} = useQuery(GET_GREETING);

  function _onLogout() {
    _logout();
    navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Button onPress={_onLogout} title="Log out" color="#841584" />
      {/* {loading ? <Text>Loading ...</Text> : <Text>Hello {data.hello}!</Text>} */}
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
