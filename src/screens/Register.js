import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import SafeAreaView from 'react-native-safe-area-view';

import RegisterSchema from '../validation/Register';

export default function RegisterScreen(props) {
  const {navigation} = props;
  const {navigate} = navigation;

  const [errorMessage, setErrorMessage] = useState('');

  function _onRegister(values) {
    const {phone} = values;

    if (phone !== '0704498756') {
      navigate('Login');
    } else {
      setErrorMessage('Phone has already existed.');
    }
  }

  function _navigateLogin() {
    navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.greeting}> Register </Text>
      <View style={styles.errorMessage}>
        <Text>{errorMessage}</Text>
      </View>
      <Formik
        initialValues={{
          fullName: 'Trinh Chin Chin',
          phone: '0704498756',
          email: 'trinchinchin@gmail.com',
          password: '123',
        }}
        validationSchema={RegisterSchema}
        onSubmit={values => {
          _onRegister(values);
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
                <Text style={styles.inputTitle}>Fullname</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('fullName')}
                  onBlur={handleBlur('fullName')}
                  value={values.fullName}
                />
                {errors.fullName && touched.fullName ? (
                  <Text style={styles.error}>{errors.fullName}</Text>
                ) : null}
              </View>
              <View style={{marginTop: 32}}>
                <Text style={styles.inputTitle}>Phone Number</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}
                />
                {errors.phone && touched.phone ? (
                  <Text style={styles.error}>{errors.phone}</Text>
                ) : null}
              </View>
              <View style={{marginTop: 32}}>
                <Text style={styles.inputTitle}>Email</Text>
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
              <Text style={styles.buttonText}>Sign Up</Text>
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
        <Text style={{color: '#414959'}}>Already an account? </Text>
        <TouchableOpacity onPress={_navigateLogin}>
          <Text style={styles.signInText}>Sign In</Text>
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
  signInText: {
    color: '#E9446A',
    fontSize: 13,
    fontWeight: '500',
  },
});
