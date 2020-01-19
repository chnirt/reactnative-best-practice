import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const CTX = React.createContext();

export {CTX};

export default function Store(props) {
  const [token, setToken] = useState(null);
  const [intro, setIntro] = useState(null);

  useEffect(() => {
    _bootstrapAsync();
  });

  const _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    const userIntro = await AsyncStorage.getItem('userIntro');
    setToken(userToken);
    setIntro(userIntro);
  };

  const _authenticate = async accessToken => {
    await AsyncStorage.setItem('userToken', accessToken);
  };

  const _logout = async () => {
    await AsyncStorage.removeItem('userToken');
    // await AsyncStorage.clear();
  };

  const _seen = async () => {
    await AsyncStorage.setItem('userIntro', 'done');
  };

  return (
    <CTX.Provider value={{token, _authenticate, _logout, intro, _seen}}>
      {props.children}
    </CTX.Provider>
  );
}
