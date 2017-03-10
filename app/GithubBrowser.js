import React, {Component} from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import {StackNavigator} from 'react-navigation'
import { Provider } from 'react-redux'
import store from './store'
import Login from './components/Login'
import ProfileList from './components/ProfileList'

export default function native(platform) {

  const RouteStack = StackNavigator({
    Login: { screen: Login },
    ProfileList: { screen: ProfileList },
  });

  class GithubBrowser extends Component {

    render() {
      return (
        <Provider store={store}>
          <RouteStack />
        </Provider>
      )
    }
  }

  var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  })

  AppRegistry.registerComponent('GithubBrowser', () => GithubBrowser)
}
