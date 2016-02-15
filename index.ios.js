'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Login = require('./Login')

var GithubBrowser = React.createClass({
  render: function() {
    return (
      <Login onLogin={this.onLogin}/>
    );
  },
  onLogin: function(){
    this.setState({isLoggedIn: true});
    console.log("LoggedIn" + this.state.isLoggedIn);
    if(this.state.isLoggedIn){
      console.log("Login sucessful => Different View");
    }
  },
  getInitalState: function(){
    return {
      isLoggedIn: false
    }
  }
});

AppRegistry.registerComponent('GithubBrowser', () => GithubBrowser);
