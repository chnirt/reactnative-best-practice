import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {primaryColor} from '../theme';

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={primaryColor} />
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
