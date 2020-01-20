import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Platform, StyleSheet} from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

import Birthday from '../screens/Birthday';
import Couple from '../screens/Couple';
import Events from '../screens/Events';
import {View, ImageBackground} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 99,
  },
  icon: {
    paddingLeft: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 120,
  },
});

export default function index(props) {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/background.png')}>
      <Tab.Navigator
        initialRouteName="Couple"
        tabBarOptions={{
          labelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 90,
          },
          // tabStyle: {width: 100},
          activeTintColor: 'white',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: 'transparent',
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS,
            // borderWidth: 1,
            // borderColor: '#ccc',
          },
          indicatorStyle: {
            backgroundColor: 'white',
          },
        }}>
        <Tab.Screen name="Birthday" component={Birthday} />
        <Tab.Screen
          mode="modal"
          cardStyle={{}}
          // options={{
          //   title: 'Awesome app',
          //   backgroundColor: 'red',
          // }}
          children={() => (
            <View style={{backgroundColor: 'rgba(0,0,0, 0.0)', height: '100%'}}>
              <Couple {...props} />
            </View>
          )}
          style={{backgroundColor: 'rgba(0,0,0, 0.0)', height: '100%'}}
          name="Couple"
          // component={Couple}
        />
        <Tab.Screen name="Events" component={Events} />
      </Tab.Navigator>
    </ImageBackground>
  );
}

index.navigationOptions = {
  headerTransparent: true,
  headerTitleAlign: 'left',
  // headerTitleAllowFontScaling: true,

  // headerRight: () => (
  //   <View style={styles.iconContainer}>
  //     {/* <Icon name="md-share" size={24} /> */}
  //     {/* <Icon
  //       name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
  //       size={24}
  //     /> */}
  //   </View>
  // ),
};
