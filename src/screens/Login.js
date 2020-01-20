import React, {useContext, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import SafeAreaView from 'react-native-safe-area-view';

import {CTX} from '../tools/context';
import LoginSchema from '../validation/Login';

export default function LoginScreen(props) {
  const {navigation} = props;
  const {navigate} = navigation;

  const authContext = useContext(CTX);
  const {_authenticate} = authContext;

  const [errorMessage, setErrorMessage] = useState('');

  function _onLogin(values) {
    const {email, password} = values;
    const accessToken = email + password;

    if (email === 'trinhchinchin@gmail.com' && password === '123') {
      _authenticate(accessToken);
      navigate('Dashboard');
    } else {
      setErrorMessage('Email or Password is not correct.');
    }
  }

  function _navigateForgot() {
    navigate('Forgot');
  }

  function _navigateRegister() {
    navigate('Register');
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Image
        style={{width: 50, height: 50}}
        source={require('../assets/logo.png')}
      /> */}
      <Text style={styles.greeting}>{'Welcome back.'}</Text>
      <View style={styles.errorMessage}>
        <Text>{errorMessage}</Text>
      </View>
      <Formik
        initialValues={{email: 'trinhchinchin@gmail.com', password: '123'}}
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
            <View style={styles.form}>
              <View>
                <Text style={styles.inputTitle}>Email Address</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {errors.email && touched.email ? (
                  <Text style={styles.error}>{errors.email}</Text>
                ) : null}
              </View>
              <View style={{marginTop: 32}}>
                <Text style={styles.inputTitle}>Password</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password && touched.password ? (
                  <Text style={styles.error}>{errors.password}</Text>
                ) : null}
              </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginTop: 32,
        }}>
        <Text style={{color: '#414959'}}>Don't have an account? </Text>
        <TouchableOpacity onPress={_navigateRegister}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginTop: 32,
        }}>
        <TouchableOpacity onPress={_navigateForgot} color="#841584">
          <Text style={styles.signUpText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
  errorMessage: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: '#8A8F9E',
    fontSize: 10,
    textTransform: 'uppercase',
  },
  input: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#161F3D',
  },
  error: {
    color: '#E9446A',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: '#E9446A',
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
  },
  signUpText: {
    color: '#E9446A',
    fontSize: 13,
    fontWeight: '500',
  },
});
