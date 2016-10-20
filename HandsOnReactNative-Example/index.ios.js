import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import Home from './components/home';

class AwesomeProject extends Component {
  render() {
    return (
      <Home />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
