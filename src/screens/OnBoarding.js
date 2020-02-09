import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Text, Image, LayoutAnimation} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {CTX} from '../tools/context';
import {primaryColor} from '../theme';
import {useNavigation} from '@react-navigation/native';

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    color: '#000',
    text: 'Description.\nSay something cool',
    image: require('../assets/onboarding/image1.gif'),
    backgroundColor: '#FFFFFF',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    color: '#000',
    text: 'Other cool stuff \n',
    image: require('../assets/onboarding/image2.gif'),
    backgroundColor: '#FFDEDE',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    color: '#000',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('../assets/onboarding/image3.gif'),
    backgroundColor: '#FFFFFF',
  },
];

export default function OnBoardingScreen() {
  const navigation = useNavigation();
  const {navigate} = navigation;

  const skipContext = useContext(CTX);
  const {_seen} = skipContext;

  useEffect(() => {
    LayoutAnimation.easeInEaseOut();
  });

  function _renderItem({item}) {
    return (
      <View style={[styles.slide, {backgroundColor: item.backgroundColor}]}>
        <Text style={item.color}>{item.title}</Text>
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
  }
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <FontAwesome5
          name="chevron-right"
          color="#FFFFFF"
          size={24}
          style={{backgroundColor: 'transparent'}}
        />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <FontAwesome5
          name="check-circle"
          color="#FFFFFF"
          size={24}
          style={{backgroundColor: 'transparent'}}
        />
      </View>
    );
  };
  return (
    <AppIntroSlider
      renderItem={_renderItem}
      slides={slides}
      onDone={_onDone}
      activeDotStyle={{backgroundColor: primaryColor}}
      renderNextButton={_renderNextButton}
      renderDoneButton={_renderDoneButton}
    />
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 320,
    width: 320,
  },
});
