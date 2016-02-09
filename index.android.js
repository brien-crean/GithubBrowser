'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Login = require('./Login')

class GithubBrowser extends Component {
  render() {
    return (
      <Login />
    );
  }
}

AppRegistry.registerComponent('GithubBrowser', () => GithubBrowser);
