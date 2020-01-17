import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button, Alert} from 'react-native';

export default function RegisterScreen(props) {
  const {navigation} = props;
  const {navigate} = navigation;

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function _onRegister() {
    Alert.alert('Register');
  }

  function _navigateLogin() {
    navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Text> Register </Text>

      <Text>fullName</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to fullName!"
        onChangeText={text => setFullName(text)}
        value={fullName}
      />
      <Text>Phone</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to phone!"
        onChangeText={text => setPhone(text)}
        value={phone}
      />
      <Text>Email</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to email!"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <Text>Password</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to password!"
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        value={password}
      />
      <Button onPress={_onRegister} title="Register" color="#841584" />
      <Text>Already an account?</Text>
      <Button onPress={_navigateLogin} title="Login" color="#841584" />
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
