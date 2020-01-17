import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  CheckBox,
} from 'react-native';

export default function LoginScreen(props) {
  const {navigation} = props;
  const {navigate} = navigation;

  const [email, setEmail] = useState('chin1@gmail.com');
  const [password, setPassword] = useState('0');

  async function _onLogin() {
    // const accessToken = email + password;

    // return await fetch(
    //   'https://nestjs-restful-best-practice.herokuapp.com/v1/login',
    //   {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       email,
    //       password,
    //     }),
    //   },
    // )
    //   .then(response => response.json())
    //   .then(async res => {
    //     const accessToken = res?.accessToken;
    //     _authenticate(accessToken);

    //     if (res?.user?.verified) {
    //       navigate('App');
    //     }
    //     navigate('Otp');
    //   });

    navigate('App');
  }

  function _navigateForgot() {
    navigate('Forgot');
  }

  function _navigateRegister() {
    navigate('Register');
  }

  return (
    <View style={styles.container}>
      <Text> Login </Text>
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
      <CheckBox />
      <Button onPress={_onLogin} title="Login" color="#841584" />
      <Button onPress={_navigateRegister} title="Register" color="#841584" />
      <Button
        onPress={_navigateForgot}
        title="Forgot your password?"
        color="#841584"
      />
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