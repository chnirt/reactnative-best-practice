import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/loading/image1.gif')} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
});
