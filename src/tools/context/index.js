import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const CTX = React.createContext();

export {CTX};

export default function Store(props) {
  const [token, setToken] = useState(null);
  const [show, setShow] = useState(null);

  useEffect(() => {
    _bootstrapAsync();
  });

  const _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    const showIntro = await AsyncStorage.getItem('showIntro');
    setToken(userToken);
    setShow(showIntro);
  };

  const _authenticate = async accessToken => {
    await AsyncStorage.setItem('userToken', accessToken);
  };

  const _logout = async () => {
    await AsyncStorage.removeItem('userToken');
    // await AsyncStorage.clear();
  };

  const _show = async () => {
    await AsyncStorage.setItem('showIntro', 'done');
    setShow(true);
  };

  return (
    <CTX.Provider value={{token, _authenticate, _logout, show, _show}}>
      {props.children}
    </CTX.Provider>
  );
}
