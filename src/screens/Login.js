import React, {useContext} from 'react';
import {Text, StyleSheet, View, TextInput, Button, Image} from 'react-native';
import {Formik} from 'formik';

import {CTX} from '../tools/context';
import LoginSchema from '../validation/Login';

export default function LoginScreen(props) {
  const {navigation} = props;
  const {navigate} = navigation;

  const authContext = useContext(CTX);
  const {_authenticate} = authContext;

  async function _onLogin(values) {
    const {email, password} = values;
    const accessToken = email + password;

    _authenticate(accessToken);
    navigate('Home');
  }

  function _navigateForgot() {
    navigate('Forgot');
  }

  function _navigateRegister() {
    navigate('Register');
  }

  return (
    <View style={styles.container}>
      <Image
        style={{width: 50, height: 50}}
        source={require('../assets/logo.png')}
      />
      <Text> Login </Text>
      <Formik
        initialValues={{email: 'trinchinchin@gmail.com', password: '123'}}
        validationSchema={LoginSchema}
        onSubmit={values => {
          _onLogin(values);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <Text>Email</Text>
            <TextInput
              style={{height: 40}}
              placeholder="Type here to email!"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {errors.email && touched.email ? (
              <Text style={styles.error}>{errors.email}</Text>
            ) : null}
            <Text>Password</Text>
            <TextInput
              style={{height: 40}}
              placeholder="Type here to password!"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {errors.password && touched.password ? (
              <Text style={styles.error}>{errors.password}</Text>
            ) : null}
            <Button onPress={handleSubmit} title="Login" color="#841584" />
          </View>
        )}
      </Formik>
      <Text>OR</Text>
      <Text>Don't have an account?</Text>
      <Button onPress={_navigateRegister} title="Sign Up" color="#841584" />
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
  error: {
    color: 'red',
  },
});
