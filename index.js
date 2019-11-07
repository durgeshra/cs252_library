import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/screens/LogIn';
import Register from './src/screens/Register';
import Secured from './src/screens/Secured';
import Confirmation from './src/Confirmation';
import Movies from './src/Movies';

const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  Register: {screen: Register},
  Secured: {screen: Secured},
    Confirmation: {screen: Confirmation},
    Movies: {screen: Movies},
  },
  {
  	initialRouteName: "Login"
  }
);

const App = createAppContainer(MainNavigator);

export default App;
 
AppRegistry.registerComponent('awesome', () => App);