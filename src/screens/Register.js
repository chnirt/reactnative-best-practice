import React from 'react';
import {Text, StyleSheet, View, TextInput, Button, Alert} from 'react-native';
import {Formik} from 'formik';

import RegisterSchema from '../validation/Register';

export default function RegisterScreen(props) {
  const {navigation} = props;
  const {navigate} = navigation;

  function _onRegister(values) {
    // console.log(values);
    Alert.alert('Register');
  }

  function _navigateLogin() {
    navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Text> Register </Text>
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
            <Text>Fullname</Text>
            <TextInput
              style={{height: 40}}
              placeholder="Type here to fullName!"
              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
              value={values.fullName}
            />
            {errors.fullName && touched.fullName ? (
              <Text style={styles.error}>{errors.fullName}</Text>
            ) : null}
            <Text>Phone</Text>
            <TextInput
              style={{height: 40}}
              placeholder="Type here to phone!"
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
            />
            {errors.phone && touched.phone ? (
              <Text style={styles.error}>{errors.phone}</Text>
            ) : null}
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
            <Button
              onPress={handleSubmit}
              title="Create an account"
              color="#841584"
            />
          </View>
        )}
      </Formik>
      <Text>Already an account?</Text>
      <Button onPress={_navigateLogin} title="Log In" color="#841584" />
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
