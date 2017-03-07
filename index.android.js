import React, {Component} from 'react'
import {
  AppRegistry,
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
