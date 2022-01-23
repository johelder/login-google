import React from 'react';
import {StatusBar} from 'react-native';

import {Routes} from './routes';

import {GoogleSignin} from '@react-native-google-signin/google-signin';

import {Provider} from 'react-redux';
import store from './store';

const App = () => {
  GoogleSignin.configure();

  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <Routes />
    </Provider>
  );
};

export default App;
