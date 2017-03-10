import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native'

import Login from './components/Login'
export default function native(platform) {

  class GithubBrowser extends Component {
    constructor(props){
      super(props)
      this.state = {
        isLoggedIn: false
      }
    }

    onLogin(){
      console.log("onLogin called!!")
      this.setState({isLoggedIn: true})
    }

    componentDidMount(){
      console.log("DidMount called!!")
      var _isMounted = true
    }

    componentWillUnmount(){
      _isMounted = false
    }

    render() {
      console.log("Logged In: " + this.state.isLoggedIn)
      if(this.state.isLoggedIn){
        console.log("You are logged in!!")
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>Logged in!</Text>
          </View>
        )
      }else{
        console.log("You are NOT logged in!!")
        return (
          <Login onLogin={this.onLogin.bind(this)} />
        )
      }
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
