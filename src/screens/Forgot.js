import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button, Alert} from 'react-native';

export default function ForgotScreen(props) {
  const {navigation} = props;
  const {navigate} = navigation;

  const [email, setEmail] = useState('');

  function _onSend() {
    Alert.alert('Send');
  }

  function _navigateLogin() {
    navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Text> Forgot </Text>
      <Text>Email</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to Email!"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <Button onPress={_onSend} title="Send mail" color="#841584" />
      <Button onPress={_navigateLogin} title="Sign up" color="#841584" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
