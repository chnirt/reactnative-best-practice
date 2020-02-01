import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import SafeAreaView from 'react-native-safe-area-view';
import {useNavigation} from '@react-navigation/native';

import ForgotSchema from '../validation/Forgot';
import {primaryColor} from '../theme';

export default function ForgotScreen() {
  const navigation = useNavigation();
  const {navigate} = navigation;

  function _onSend() {
    navigate('Login');
  }

  function _navigateLogin() {
    navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.greeting}>Forgot password?</Text>
      <View style={{height: 72}} />
      <Formik
        initialValues={{
          phone: '0704498756',
        }}
        validationSchema={ForgotSchema}
        onSubmit={values => {
          _onSend(values);
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
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Reset Password</Text>
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
        <Text style={{color: '#414959'}}>Back to </Text>
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
    color: primaryColor,
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: primaryColor,
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
    color: primaryColor,
    fontSize: 13,
    fontWeight: '500',
  },
});
