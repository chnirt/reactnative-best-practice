import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default function MessageScreen() {
  return (
    <View style={styles.container}>
      <Text> Message </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'transparent',
    backgroundColor: '#fff',
  },
});
