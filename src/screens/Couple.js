import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class CoupleScreen extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'rgba(0,0,0,0)'}}>
        <Text> Couple </Text>
        <Text> Couple </Text>
        <Text> Couple </Text>
        <Text> Couple </Text>
        <Text> Couple </Text>
        <Text> Couple </Text>
        <Text> Couple </Text>
        <Text> Couple </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});
