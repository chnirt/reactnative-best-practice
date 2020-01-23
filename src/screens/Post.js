import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function PostScreen(props) {
  const navigation = useNavigation();
  const {navigate} = navigation;

  return (
    <View style={styles.container}>
      <Text> Post </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});
