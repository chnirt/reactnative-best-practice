import React from 'react';
import {View, Text, Button} from 'react-native';

function Hello(props) {
  const {navigation} = props;
  const {navigate, toggleDrawer} = navigation;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Menu" onPress={toggleDrawer} />
      <Button
        title="DashboardTabNavigator"
        onPress={() => navigate('DashboardTabNavigator')}
      />
      <Text>Hello</Text>
    </View>
  );
}

export default Hello;
