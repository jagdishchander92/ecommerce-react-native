import 'react-native-gesture-handler';
import React, {useState} from 'react';


import {  Text,  View,  Image,  Button,  StyleSheet,  TextInput, TouchableOpacity} from 'react-native';
import ExSyles from './assets/css/style';

// import AppNavigator from './app/routing/AppNavigator';
import { Provider } from 'react-redux';
import MainNavigator from './app/routing/MainNavigator';

import {mystore} from './app/redux/store';

function App() {

  // return <AppNavigator />;
  return (
    <Provider store={mystore}>
      <MainNavigator />
    </Provider>
  )
}

export default App;


