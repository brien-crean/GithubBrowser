'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
  ActivityIndicatorIOS,
  NavigatorIOS,
  View
} from 'react-native';

var Login = require('./Login')

class GithubBrowser extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }
  onLogin(){
    this.setState({isLoggedIn: true});
  }
  componentDidMount(){
    var _isMounted = true;
  }
  componentWillUnmount(){
    _isMounted = false;
  }
  render() {
    console.log("Logged In: " + this.state.isLoggedIn);
    if(this.state.isLoggedIn){
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Logged in!</Text>
        </View>
      );
    }else{
      return (
        <Login onLogin={this.onLogin} />
      );
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
});

AppRegistry.registerComponent('GithubBrowser', () => GithubBrowser);
