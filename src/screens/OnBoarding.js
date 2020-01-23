import React, {useContext} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import {CTX} from '../tools/context';

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../assets/logo.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff \n',
    image: require('../assets/logo.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('../assets/logo.png'),
    backgroundColor: '#22bcb5',
  },
];

export default function OnBoarding(props) {
  const {navigation} = props;
  const {navigate} = navigation;

  const showContext = useContext(CTX);
  const {_seen} = showContext;

  function _renderItem({item}) {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  function _onDone() {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    // this.setState({showRealApp: true});
    _seen();
    navigate('App');
  }
  return (
    <AppIntroSlider renderItem={_renderItem} slides={slides} onDone={_onDone} />
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFEFD5',
  },
  title: {
    color: 'white',
  },
  image: {
    height: 320,
    width: 320,
  },
});
